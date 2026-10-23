import React from 'react';
import { motion } from 'framer-motion';
import { IslamicBorder } from '../ui/IslamicBorder';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { weddingConfig } from '../../config/wedding';

export const BismillahSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-12 sm:py-20 select-none">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <IslamicBorder variant="emerald" className="light-sweep-container text-center">
          {/* Sacred Bismillah in Authentic, Reverent Arabic Script */}
          <div className="py-2">
            <p
              className="font-arabic text-3xl sm:text-4xl md:text-5xl text-gold-300 font-normal tracking-wide leading-relaxed"
              dir="rtl"
              lang="ar"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-gold-400/90 mt-2 tracking-widest uppercase">
              {weddingConfig.hosts.invitationPreamble}
            </p>
          </div>

          <OrnamentalDivider variant="crescent" className="my-5 w-40 mx-auto" />

          {/* Invitation Preamble */}
          <div className="space-y-3 max-w-xl mx-auto">
            <p className="font-serif text-sm sm:text-base tracking-[0.2em] uppercase text-gold-300/90 font-light">
              With the blessings of Allah Almighty
            </p>

            <h3 className="font-serif text-xl sm:text-2xl text-ivory font-medium leading-relaxed">
              Together with our family, we joyfully invite you to celebrate the sacred Nikah of our beloved daughter
            </h3>
          </div>
        </IslamicBorder>
      </motion.div>
    </section>
  );
};
