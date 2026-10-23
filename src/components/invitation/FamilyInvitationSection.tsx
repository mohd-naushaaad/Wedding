import React from 'react';
import { motion } from 'framer-motion';
import { IslamicBorder } from '../ui/IslamicBorder';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { weddingConfig } from '../../config/wedding';

export const FamilyInvitationSection: React.FC = () => {
  const { hosts, couple } = weddingConfig;

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-8 sm:py-16 select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* Rendered as an exquisite Warm Ivory Card with Gold Embossed Detailing */}
        <IslamicBorder variant="ivory" className="text-center shadow-2xl relative overflow-hidden">
          {/* Subtle Royal Watermark Motif */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <svg className="w-80 h-80 text-gold-900" viewBox="0 0 100 100" fill="currentColor">
              <polygon points="50,5 61,35 93,35 68,54 77,85 50,67 23,85 32,54 7,35 39,35" />
            </svg>
          </div>

          <div className="relative z-10 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-800 font-serif font-semibold">
              The Bride's Family Cordially Invites You
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold tracking-tight">
              {hosts.brideFatherName}
              <span className="block text-base sm:text-lg text-gold-700 font-normal italic my-1">
                &amp;
              </span>
              {hosts.brideMotherName}
            </h3>

            <p className="font-serif italic text-sm sm:text-base text-charcoal/80 max-w-lg mx-auto leading-relaxed">
              {hosts.cordialInvitationText}
            </p>

            <div className="py-2">
              <h4 className="font-serif text-3xl sm:text-4xl text-emerald-900 font-bold tracking-tight">
                {couple.brideName}
              </h4>
              <p className="text-xs sm:text-sm font-serif uppercase tracking-widest text-gold-700 mt-1">
                with
              </p>
              <h4 className="font-serif text-2xl sm:text-3xl text-charcoal font-semibold mt-1">
                {couple.groomName}
              </h4>
            </div>

            <OrnamentalDivider variant="flower" color="gold" className="w-36 mx-auto my-3" />

            {/* Honored Grandparents Remembrances */}
            {hosts.honoredGrandparents && hosts.honoredGrandparents.length > 0 && (
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-widest text-gold-800/80 font-serif block mb-1">
                  Seeking the blessings of
                </span>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-charcoal/70 font-serif italic">
                  {hosts.honoredGrandparents.map((name, i) => (
                    <span key={i}>{name}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-gold-500/30">
              <p className="font-serif text-sm sm:text-base text-gold-900 font-semibold tracking-wider uppercase">
                {hosts.brideFamilyName}
              </p>
            </div>
          </div>
        </IslamicBorder>
      </motion.div>
    </section>
  );
};
