import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Users, Heart, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { IslamicBorder } from '../ui/IslamicBorder';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { weddingConfig } from '../../config/wedding';

interface RsvpFormData {
  fullName: string;
  attendance: 'accept' | 'decline';
  guestCount: number;
  dietaryNote: string;
  message: string;
}

export const RsvpSection: React.FC = () => {
  const { rsvp } = weddingConfig;
  const [formData, setFormData] = useState<RsvpFormData>({
    fullName: '',
    attendance: 'accept',
    guestCount: 2,
    dietaryNote: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [hasAlreadySubmitted, setHasAlreadySubmitted] = useState<boolean>(false);

  useEffect(() => {
    // Check if user previously RSVPed locally
    const saved = localStorage.getItem('royal_nikah_rsvp_submitted');
    if (saved) {
      setHasAlreadySubmitted(true);
    }
  }, []);

  if (!rsvp.enabled) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      if (rsvp.apiEndpoint) {
        const response = await fetch(rsvp.apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Failed to submit RSVP to endpoint');
      } else {
        // Honest Demo / Local storage mode
        await new Promise((resolve) => setTimeout(resolve, 800));
        localStorage.setItem('royal_nikah_rsvp_submitted', JSON.stringify(formData));
      }

      setStatus('success');
      setHasAlreadySubmitted(true);

      // Trigger celebratory gold confetti if accepted
      if (formData.attendance === 'accept') {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#C6A45B', '#FAF4E6', '#063D32', '#E7D6A3']
        });
      }
    } catch {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again or RSVP via WhatsApp.');
    }
  };

  const handleSendWhatsAppRsvp = () => {
    const phone = (rsvp.whatsappNumberForDirectRsvp || '').replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Assalamu Alaikum! RSVP from *${formData.fullName || 'Guest'}* for the Royal Nikah of Fatima & Zayd:\n\nAttendance: *${formData.attendance === 'accept' ? 'Joyfully Accept' : 'Regretfully Decline'}*\nGuests: *${formData.guestCount}*\nMessage: ${formData.message || 'May Allah bless the couple with infinite barakah!'}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="rsvp" className="relative w-full max-w-3xl mx-auto px-4 py-12 sm:py-20 select-none">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-serif font-light">
          Répondez S'il Vous Plaît
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-gradient tracking-tight">
          Confirm Your Attendance
        </h2>
        {rsvp.deadline && (
          <p className="font-serif italic text-xs sm:text-sm text-gold-300/80">
            Kindly respond by {rsvp.deadline}
          </p>
        )}
        <OrnamentalDivider variant="crescent" className="w-40 mx-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
      >
        <IslamicBorder variant="emerald" className="relative">
          <AnimatePresence mode="wait">
            {status === 'success' || hasAlreadySubmitted ? (
              <motion.div
                key="rsvp-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-10 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-900 border-2 border-gold-400 flex items-center justify-center text-gold-300 mx-auto shadow-gold-glow">
                  <CheckCircle2 className="w-8 h-8 text-gold-300" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-gold-gradient font-bold">
                  JazakAllah Khair! RSVP Received
                </h3>

                <p className="font-serif italic text-sm sm:text-base text-ivory/85 max-w-md mx-auto leading-relaxed">
                  Thank you for your response. Your warm wishes and prayers mean the world to our family.
                </p>

                {rsvp.whatsappNumberForDirectRsvp && (
                  <div className="pt-4">
                    <button
                      onClick={handleSendWhatsAppRsvp}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-gold-200 border border-gold-400/40 text-xs font-serif uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-gold-300" />
                      <span>Send Direct WhatsApp Confirmation</span>
                    </button>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={() => {
                      localStorage.removeItem('royal_nikah_rsvp_submitted');
                      setHasAlreadySubmitted(false);
                      setStatus('idle');
                    }}
                    className="text-xs text-gold-400/70 hover:text-gold-200 underline decoration-gold-400/30"
                  >
                    Update / Submit Another RSVP
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="rsvp-form"
                onSubmit={handleSubmit}
                className="space-y-6 text-left"
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="rsvpFullName" className="block text-xs uppercase font-serif tracking-wider text-gold-300 mb-2">
                    Full Name(s) *
                  </label>
                  <input
                    id="rsvpFullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. & Mrs. Farooq Khan"
                    className="w-full px-4 py-3 rounded-xl bg-[#031713]/80 border border-gold-500/30 text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm font-sans"
                  />
                </div>

                {/* Attendance Radio Buttons */}
                <div>
                  <label className="block text-xs uppercase font-serif tracking-wider text-gold-300 mb-2">
                    Will you be joining us? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                      className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-sm font-serif tracking-wide transition-all cursor-pointer ${
                        formData.attendance === 'accept'
                          ? 'bg-gold-500/20 border-gold-400 text-gold-200 shadow-gold-glow'
                          : 'bg-[#031713]/60 border-gold-500/20 text-ivory/60 hover:border-gold-500/40'
                      }`}
                    >
                      <Heart className="w-4 h-4 text-gold-400" />
                      <span>Joyfully Accept</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                      className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-sm font-serif tracking-wide transition-all cursor-pointer ${
                        formData.attendance === 'decline'
                          ? 'bg-gold-500/20 border-gold-400 text-gold-200 shadow-gold-glow'
                          : 'bg-[#031713]/60 border-gold-500/20 text-ivory/60 hover:border-gold-500/40'
                      }`}
                    >
                      <span>Regretfully Decline</span>
                    </button>
                  </div>
                </div>

                {/* Number of Guests (Only if accepting) */}
                {formData.attendance === 'accept' && (
                  <div>
                    <label htmlFor="rsvpGuestCount" className="block text-xs uppercase font-serif tracking-wider text-gold-300 mb-2 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-gold-400" />
                      <span>Number of Attending Guests</span>
                    </label>
                    <select
                      id="rsvpGuestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-[#031713]/80 border border-gold-500/30 text-ivory focus:outline-none focus:border-gold-400 text-sm font-sans"
                    >
                      {[...Array(rsvp.maxGuestsPerSubmission || 6)].map((_, i) => (
                        <option key={i + 1} value={i + 1} className="bg-emerald-950 text-ivory">
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Dua / Personal Message */}
                <div>
                  <label htmlFor="rsvpMessage" className="block text-xs uppercase font-serif tracking-wider text-gold-300 mb-2">
                    Heartfelt Prayers (Dua) or Message for the Couple (Optional)
                  </label>
                  <textarea
                    id="rsvpMessage"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your prayers or blessings for Fatima & Zayd..."
                    className="w-full px-4 py-3 rounded-xl bg-[#031713]/80 border border-gold-500/30 text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-400 text-sm font-sans resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex-1 py-4 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 text-emerald-950 font-serif font-semibold tracking-wider uppercase text-sm shadow-[0_0_20px_rgba(198,164,91,0.35)] hover:shadow-[0_0_30px_rgba(231,214,163,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-emerald-950" />
                    <span>{status === 'submitting' ? 'Submitting...' : 'Send RSVP'}</span>
                  </button>

                  {rsvp.whatsappNumberForDirectRsvp && (
                    <button
                      type="button"
                      onClick={handleSendWhatsAppRsvp}
                      className="py-4 px-6 rounded-full bg-emerald-800/80 hover:bg-emerald-700 text-gold-200 border border-gold-400/30 font-serif text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-gold-300" />
                      <span>RSVP on WhatsApp</span>
                    </button>
                  )}
                </div>

                {!rsvp.apiEndpoint && (
                  <p className="text-[11px] text-center text-ivory/50 font-sans italic pt-2">
                    Note: Submissions are saved locally in development mode. To connect a live Google Sheet or webhook, configure `apiEndpoint` in `src/config/wedding.ts`.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </IslamicBorder>
      </motion.div>
    </section>
  );
};
