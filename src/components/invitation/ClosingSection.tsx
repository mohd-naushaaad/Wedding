import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Calendar, MapPin, Heart } from 'lucide-react';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { weddingConfig } from '../../config/wedding';

interface ClosingSectionProps {
  onScrollToTop: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onScrollToTop }) => {
  const { couple, hosts } = weddingConfig;

  return (
    <footer className="relative w-full max-w-4xl mx-auto px-4 pt-12 pb-24 text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        {/* Softly Illuminated Crescent & Star */}
        <div className="w-16 h-16 rounded-full border border-gold-400/40 flex items-center justify-center mx-auto bg-emerald-900/40 text-gold-300 shadow-gold-glow">
          <Heart className="w-6 h-6 text-gold-300 fill-gold-400/20" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-serif font-light">
            In Warm Anticipation
          </span>

          <h3 className="font-serif text-3xl sm:text-5xl font-bold text-gold-gradient tracking-tight">
            {couple.brideName} &amp; {couple.groomName}
          </h3>

          <p className="font-serif italic text-sm text-ivory/80 mt-1">
            "Thank you for being part of our blessed celebration."
          </p>
        </div>

        <OrnamentalDivider variant="full" className="w-48 mx-auto my-4" />

        <div className="max-w-md mx-auto">
          <p className="font-serif text-xs sm:text-sm text-gold-300/90 tracking-wide uppercase font-medium">
            Hosted with Love by {hosts.brideFamilyName}
          </p>
          <p className="text-[11px] text-ivory/60 font-sans mt-2">
            New Delhi, India • With Prayers for Peace, Harmony &amp; Barakah
          </p>
        </div>

        {/* Quick Back-Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          <a
            href="#events"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-gold-300 text-xs font-serif uppercase tracking-wider border border-gold-500/20 transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span>Event Timeline</span>
          </a>

          <a
            href="#venue"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-gold-300 text-xs font-serif uppercase tracking-wider border border-gold-500/20 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Venue Directions</span>
          </a>

          <button
            onClick={onScrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-500/15 hover:bg-gold-500/30 text-gold-200 text-xs font-serif uppercase tracking-wider border border-gold-400/40 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-gold-300" />
            <span>Return to Top</span>
          </button>
        </div>

        {/* Subtle Cultural Heritage Credit */}
        <div className="pt-8 text-[11px] text-gold-500/40 font-serif">
          Wedding Invitation • Designed with Reverence &amp; Elegance
        </div>
      </motion.div>
    </footer>
  );
};
