import React from 'react';
import { motion } from 'framer-motion';
import { EventCard } from './EventCard';
import { weddingConfig } from '../../config/wedding';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';

export const EventsTimeline: React.FC = () => {
  const enabledEvents = weddingConfig.events.filter((ev) => ev.enabled);

  if (enabledEvents.length === 0) return null;

  return (
    <section id="events" className="relative w-full max-w-4xl mx-auto px-4 py-12 sm:py-20 select-none">
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-serif font-light">
          Program of Celebrations
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-gradient tracking-tight">
          Wedding Events &amp; Itinerary
        </h2>
        <p className="font-serif italic text-sm sm:text-base text-ivory/80 max-w-md mx-auto">
          Please join us at each of these joyous ceremonies hosted in honour of the new couple.
        </p>
        <OrnamentalDivider variant="crescent" className="w-40 mx-auto" />
      </div>

      {/* Timeline Layout */}
      <div className="relative">
        {/* Vertical decorative connector line on desktop */}
        <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-[1px] bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />

        <div className="space-y-8 sm:space-y-12">
          {enabledEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative flex items-start gap-6 sm:pl-16"
            >
              {/* Timeline Gold Medallion on Desktop */}
              <div className="hidden sm:flex absolute left-5 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-emerald-950 border-2 border-gold-400 items-center justify-center shadow-gold-glow z-10">
                <div className="w-2 h-2 rounded-full bg-gold-300" />
              </div>

              <div className="w-full">
                <EventCard event={event} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
