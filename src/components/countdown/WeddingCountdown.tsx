import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import { weddingConfig } from '../../config/wedding';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';

interface CountdownTileProps {
  label: string;
  value: string;
}

const CountdownTile: React.FC<CountdownTileProps> = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-gradient-to-b from-[#082C26] to-[#041E18] border border-gold-500/40 shadow-royal relative overflow-hidden group">
    {/* Inner subtle glow */}
    <div className="absolute inset-0 bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors pointer-events-none" />
    
    <div className="font-serif text-3xl sm:text-5xl font-bold text-gold-gradient tracking-tight">
      {value}
    </div>
    <div className="text-[11px] sm:text-xs font-serif uppercase tracking-widest text-gold-300/80 mt-1">
      {label}
    </div>
  </div>
);

export const WeddingCountdown: React.FC = () => {
  const { ceremony } = weddingConfig;
  const {
    formattedDays,
    formattedHours,
    formattedMinutes,
    formattedSeconds,
    isCompleted
  } = useCountdown(ceremony.targetDateISO);

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 py-8 sm:py-16 text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-serif font-light">
          Countdown to the Blessed Union
        </span>

        {/* Hijri and Gregorian Dates Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-serif text-ivory/90">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>{ceremony.gregorianDateFormatted}</span>
          </div>
          <span className="hidden sm:inline text-gold-500">•</span>
          <div className="flex items-center gap-2 text-gold-300">
            <Clock className="w-4 h-4 text-gold-400" />
            <span>{ceremony.hijriDateFormatted}</span>
          </div>
        </div>

        <OrnamentalDivider variant="crescent" className="w-36 mx-auto my-3" />

        {isCompleted ? (
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-900/80 via-emerald-800/80 to-emerald-900/80 border border-gold-400/50 max-w-lg mx-auto shadow-gold-glow">
            <h4 className="font-serif text-2xl text-gold-gradient font-bold mb-2">
              Alhamdulillah! The Celebration Has Begun
            </h4>
            <p className="font-serif italic text-sm text-ivory/80">
              May Allah bless this union with eternal peace, love, and happiness.
            </p>
          </div>
        ) : (
          /* 4-column counter or 2x2 on narrow screens */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-2xl mx-auto">
            <CountdownTile label="Days" value={formattedDays} />
            <CountdownTile label="Hours" value={formattedHours} />
            <CountdownTile label="Minutes" value={formattedMinutes} />
            <CountdownTile label="Seconds" value={formattedSeconds} />
          </div>
        )}

        <p className="text-xs font-sans text-gold-400/70 tracking-wider">
          Timezone: {ceremony.timezone} (Indian Standard Time)
        </p>
      </motion.div>
    </section>
  );
};
