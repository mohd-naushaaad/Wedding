import { useState, useEffect } from 'react';

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
  formattedDays: string;
  formattedHours: string;
  formattedMinutes: string;
  formattedSeconds: string;
}

export function useCountdown(targetDateISO: string): CountdownResult {
  const calculateTimeLeft = (): CountdownResult => {
    const target = new Date(targetDateISO).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0 || isNaN(difference)) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isCompleted: true,
        formattedDays: '00',
        formattedHours: '00',
        formattedMinutes: '00',
        formattedSeconds: '00'
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isCompleted: false,
      formattedDays: String(days).padStart(2, '0'),
      formattedHours: String(hours).padStart(2, '0'),
      formattedMinutes: String(minutes).padStart(2, '0'),
      formattedSeconds: String(seconds).padStart(2, '0')
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownResult>(calculateTimeLeft);

  useEffect(() => {
    // Initial run
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateISO]);

  return timeLeft;
}
