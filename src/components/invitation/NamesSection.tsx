import React from 'react';
import { motion } from 'framer-motion';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { weddingConfig } from '../../config/wedding';

export const NamesSection: React.FC = () => {
  const { couple } = weddingConfig;

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 py-8 sm:py-16 text-center select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative py-8 sm:py-14"
      >
        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-400 font-serif font-light">
          Solemn Union of Hearts
        </span>

        {/* Bride's Name (Centerpiece from Host Family) */}
        <div className="mt-6 mb-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gold-gradient"
          >
            {couple.brideName}
          </motion.h2>
          {couple.brideFullName && couple.brideFullName !== couple.brideName && (
            <p className="text-xs sm:text-sm font-serif italic text-gold-300/80 mt-1">
              ({couple.brideFullName})
            </p>
          )}
        </div>

        {/* Ornate Connector */}
        <div className="my-3 flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
            <span className="font-cormorant italic text-2xl sm:text-3xl text-gold-300 font-semibold px-2">
              &amp;
            </span>
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </div>

        {/* Groom's Name */}
        <div className="mt-2 mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gold-gradient"
          >
            {couple.groomName}
          </motion.h2>
          {couple.groomFullName && couple.groomFullName !== couple.groomName && (
            <p className="text-xs sm:text-sm font-serif italic text-gold-300/80 mt-1">
              ({couple.groomFullName})
            </p>
          )}
        </div>

        <OrnamentalDivider variant="full" className="my-6 max-w-xs mx-auto" />

        {/* Supporting Copy */}
        <div className="max-w-xl mx-auto space-y-3 px-4">
          <p className="font-serif text-base sm:text-lg text-ivory/95 font-medium">
            "Two families, one beautiful occasion."
          </p>
          <p className="font-sans text-xs sm:text-sm text-gold-200/80 leading-relaxed font-light">
            With the blessings of our families, we invite you to share in this special day.
          </p>
        </div>

        {/* Authentic Quranic Ayah on Spousal Tranquility & Mercy */}
        {couple.quoteArabic && (
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#082C26]/60 border border-gold-500/20 max-w-2xl mx-auto backdrop-blur-sm shadow-inner">
            <p
              className="font-arabic text-xl sm:text-2xl text-gold-300 leading-loose"
              dir="rtl"
              lang="ar"
            >
              {couple.quoteArabic}
            </p>
            {couple.quoteTranslation && (
              <p className="font-serif italic text-xs sm:text-sm text-ivory/75 mt-3 leading-relaxed">
                "{couple.quoteTranslation}"
              </p>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
};
