import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';
import { IslamicBorder } from '../ui/IslamicBorder';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { weddingConfig } from '../../config/wedding';

export const FamilyMessageSection: React.FC = () => {
  const { hosts } = weddingConfig;

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-8 sm:py-16 select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
      >
        <IslamicBorder variant="emerald" className="text-center space-y-6">
          <div className="w-12 h-12 rounded-full border border-gold-400/40 flex items-center justify-center mx-auto bg-emerald-900/50 text-gold-300 shadow-gold-glow">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-serif font-light block">
            With Sincere Gratitude &amp; Prayers
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-gold-gradient font-bold">
            A Message From the Bride's Family
          </h3>

          <OrnamentalDivider variant="crescent" className="w-36 mx-auto my-3" />

          <p className="font-serif italic text-base sm:text-lg text-ivory/90 max-w-xl mx-auto leading-relaxed">
            "{hosts.closingFamilyMessage}"
          </p>

          {/* Traditional Dua for the newlyweds */}
          <div className="p-5 rounded-xl bg-[#031713]/60 border border-gold-500/20 max-w-lg mx-auto">
            <p className="font-arabic text-xl sm:text-2xl text-gold-300" dir="rtl">
              بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
            </p>
            <p className="font-serif italic text-xs text-ivory/70 mt-2">
              "May Allah bless you, and bestow His blessings upon you, and join you together in goodness." (Sunan Abi Dawud)
            </p>
          </div>

          <div className="pt-4 border-t border-gold-500/20">
            <p className="font-serif text-sm sm:text-base text-gold-300 font-medium whitespace-pre-line">
              {hosts.closingFamilySignOff}
            </p>
          </div>
        </IslamicBorder>
      </motion.div>
    </section>
  );
};
