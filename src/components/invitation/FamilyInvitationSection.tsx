import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
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

            {/* Host: Bride's Father & Address */}
            <div className="space-y-1">
              <span className="text-xs font-serif italic text-gold-800 block">
                From ...
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-charcoal font-bold tracking-tight">
                {hosts.brideFatherName}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 font-sans max-w-md mx-auto leading-relaxed pt-1">
                {hosts.brideAddress}
              </p>
            </div>

            <p className="font-serif italic text-sm sm:text-base text-charcoal/85 max-w-lg mx-auto leading-relaxed pt-2">
              {hosts.cordialInvitationText}
            </p>

            {/* Bride and Groom with Full Lineage and Address */}
            <div className="py-4 px-3 sm:px-6 rounded-2xl bg-white/60 border border-gold-500/30 shadow-inner space-y-5">
              {/* 1. BRIDE (FIRST) */}
              <div className="text-center space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-serif font-bold">
                  The Bride
                </span>
                <h4 className="font-serif text-3xl sm:text-4xl text-emerald-950 font-bold tracking-tight">
                  {couple.brideFullName || couple.brideName}
                </h4>
                <p className="text-xs sm:text-sm font-serif font-medium text-gold-900">
                  {couple.brideParentsTitle}
                </p>
                <p className="text-[11px] sm:text-xs text-charcoal/70 font-sans max-w-md mx-auto">
                  {couple.brideAddress}
                </p>
              </div>

              {/* Ornate Heart Connector */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold-600" />
                <span className="font-serif text-lg text-gold-700 italic font-semibold flex items-center gap-1">
                  <Heart className="w-4 h-4 text-gold-600 fill-gold-600/20" />
                  <span>weds</span>
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold-600" />
              </div>

              {/* 2. GROOM */}
              <div className="text-center space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-gold-800 font-serif font-bold">
                  The Groom
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold tracking-tight">
                  {couple.groomFullName || couple.groomName}
                </h4>
                <p className="text-xs sm:text-sm font-serif font-medium text-gold-900">
                  {couple.groomParentsTitle} {couple.groomFamilyFirm ? `(${couple.groomFamilyFirm})` : ''}
                </p>
                <p className="text-[11px] sm:text-xs text-charcoal/70 font-sans max-w-md mx-auto">
                  {couple.groomAddress}
                </p>
              </div>
            </div>

            <OrnamentalDivider variant="flower" color="gold" className="w-36 mx-auto my-3" />

            {/* R.S.V.P Section from the Card */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-gold-900 font-serif font-bold block mb-1">
                R. S. V. P. (Bride's Side)
              </span>
              <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-sm text-charcoal font-serif font-medium">
                {weddingConfig.rsvp.brideSideRsvp.map((name, i) => (
                  <React.Fragment key={i}>
                    <span>{name}</span>
                    {i < weddingConfig.rsvp.brideSideRsvp.length - 1 && (
                      <span className="text-gold-700">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

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
