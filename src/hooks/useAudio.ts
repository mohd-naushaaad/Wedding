import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Procedural Web Audio Ambient Synthesizer for Royal Mughal Nikah
 * Generates warm, peaceful, contemplative harp/oud harmonics in D minor / Hijaz maqam.
 * Fully self-contained, no external mp3 download dependencies required!
 */
class RoyalAmbientSynthesizer {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private intervalId: number | null = null;
  private masterGain: GainNode | null = null;

  start() {
    if (this.isRunning) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.isRunning = true;

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // Play soft continuous drone (Tanpura / Indian harmonium root D2 + A2)
      this.playDrone(73.42); // D2
      this.playDrone(110.00); // A2
      this.playDrone(146.83); // D3

      // Melodic notes: D, F, G, A, Bb, C# (Raga Bhairav / Hijaz maqam)
      const scale = [146.83, 174.61, 196.00, 220.00, 233.08, 277.18, 293.66, 349.23, 392.00, 440.00];

      // Schedule gentle meditative plucked notes periodically
      let noteIndex = 0;
      this.intervalId = window.setInterval(() => {
        if (!this.ctx || !this.isRunning) return;
        const note = scale[noteIndex % scale.length];
        this.pluckNote(note);
        noteIndex = (noteIndex + Math.floor(Math.random() * 3) + 1) % scale.length;
      }, 2600);

    } catch (e) {
      console.warn('Web Audio Ambient Synthesizer could not start', e);
    }
  }

  private playDrone(freq: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
  }

  private pluckNote(freq: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Warm pluck envelope
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.07, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 3.6);
  }

  stop() {
    if (!this.isRunning) return;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        this.ctx?.close();
        this.ctx = null;
        this.isRunning = false;
      }, 1300);
    } else {
      this.isRunning = false;
    }
  }
}

export function useAudio(audioSrc?: string) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const synthRef = useRef<RoyalAmbientSynthesizer | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    synthRef.current = new RoyalAmbientSynthesizer();
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.loop = true;
      audio.preload = 'none';
      audioRef.current = audio;
    }
    return () => {
      synthRef.current?.stop();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [audioSrc]);

  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      synthRef.current?.stop();
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      // Try playing audio source if available, or fall back to ambient synthesizer
      if (audioRef.current && audioRef.current.src) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Fallback to Web Audio Synth if audio element blocked
          synthRef.current?.start();
          setIsPlaying(true);
        });
      } else {
        synthRef.current?.start();
        setIsPlaying(true);
      }
    }
  }, [isPlaying]);

  return {
    isPlaying,
    toggleAudio
  };
}
