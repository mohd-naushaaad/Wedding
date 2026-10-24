import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Sparkles, ArrowDown } from 'lucide-react';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { weddingConfig } from '../../config/wedding';

interface WelcomeScreenProps {
  isOpened: boolean;
  onOpen: () => void;
  onSkip: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  isOpened,
  onOpen,
  onSkip
}) => {
  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          key="welcome-modal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden"
        >
          {/* Top Header */}
          <div className="w-full flex items-center justify-end max-w-4xl z-20">
            <button
              onClick={onSkip}
              className="text-xs sm:text-sm font-serif tracking-wider text-gold-300/80 hover:text-gold-200 transition-colors underline decoration-gold-500/40 underline-offset-4 cursor-pointer"
            >
              Skip Intro
            </button>
          </div>

          {/* Central Welcome Crest & Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-lg z-20 my-auto"
          >
            {/* Tasteful Crescent & Star Finial */}
            <div className="w-16 h-16 rounded-full border border-gold-400/50 flex items-center justify-center bg-emerald-900/40 backdrop-blur-sm shadow-gold-glow mb-6">
              <svg className="w-8 h-8 text-gold-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65C15.53 2.5 13.82 2 12 2z" />
                <polygon points="19,6 20,8.5 22.5,8.5 20.5,10 21.2,12.5 19,11 16.8,12.5 17.5,10 15.5,8.5 18,8.5" />
              </svg>
            </div>

            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-300 font-serif font-light mb-2">
              Wedding Invitation
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-gold-gradient font-bold tracking-tight mb-2">
              {weddingConfig.couple.brideName}
            </h1>
            <div className="text-gold-400 font-serif italic text-lg sm:text-xl my-1">
              &amp;
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-gold-gradient font-bold tracking-tight mb-4">
              {weddingConfig.couple.groomName}
            </h2>

            <OrnamentalDivider variant="crescent" className="w-48 my-2" />

            <p className="font-serif italic text-sm sm:text-base text-ivory/80 max-w-md mb-8 leading-relaxed">
              "A celebration of love, family, and a sacred promise."
            </p>

            {/* Signature "Open Your Invitation" Button */}
            <motion.button
              onClick={onOpen}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 text-emerald-950 font-serif font-semibold tracking-widest uppercase text-sm sm:text-base shadow-[0_0_30px_rgba(198,164,91,0.5)] border border-ivory/60 hover:shadow-[0_0_45px_rgba(231,214,163,0.7)] transition-all flex items-center gap-3 cursor-pointer"
            >
              <MailOpen className="w-5 h-5 text-emerald-950 transition-transform group-hover:-translate-y-0.5" />
              <span>Open Your Invitation</span>
              <Sparkles className="w-4 h-4 text-emerald-950/80" />
            </motion.button>

            <p className="mt-4 text-xs font-sans text-gold-400/70 tracking-wider">
              An invitation with honour from the Bride’s Family
            </p>
          </motion.div>

          {/* Bottom Prompt */}
          <div className="flex flex-col items-center z-20 text-gold-400/60 text-xs font-sans tracking-widest uppercase animate-bounce">
            <span>Scroll or Tap to Enter</span>
            <ArrowDown className="w-4 h-4 mt-1" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
