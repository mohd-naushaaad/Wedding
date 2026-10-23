import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { IslamicBorder } from '../ui/IslamicBorder';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { weddingConfig } from '../../config/wedding';

export const VenueSection: React.FC = () => {
  const { mainVenue } = weddingConfig.ceremony;
  const { contacts } = weddingConfig;

  // Intent-friendly Google Maps link for mobile/desktop
  const mapsSearchUrl = mainVenue.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${mainVenue.name}, ${mainVenue.address}`)}`;

  return (
    <section id="venue" className="relative w-full max-w-4xl mx-auto px-4 py-12 sm:py-20 select-none">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-serif font-light">
          Location &amp; Coordinates
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-gradient tracking-tight">
          Venue &amp; Directions
        </h2>
        <p className="font-serif italic text-sm sm:text-base text-ivory/80 max-w-md mx-auto">
          We eagerly await welcoming you into the majestic halls of celebration.
        </p>
        <OrnamentalDivider variant="crescent" className="w-40 mx-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
      >
        <IslamicBorder variant="emerald" className="space-y-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-300 text-xs font-serif uppercase tracking-wider border border-gold-500/30">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Principal Reception Venue
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-gold-gradient font-bold">
                {mainVenue.name}
              </h3>

              <p className="text-sm sm:text-base text-ivory/90 leading-relaxed font-sans">
                {mainVenue.address}
              </p>

              <p className="text-xs text-gold-400/80 font-serif italic">
                {mainVenue.city} • Valet Parking &amp; Wheelchair Access Available
              </p>
            </div>

            {/* Prominent Action Button */}
            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 text-emerald-950 font-serif font-semibold tracking-wider uppercase text-sm shadow-[0_0_25px_rgba(198,164,91,0.4)] hover:shadow-[0_0_35px_rgba(231,214,163,0.6)] transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-emerald-950" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-950/70" />
              </a>
            </div>
          </div>

          {/* Map Preview Card Placeholder / Embed fallback */}
          <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-gold-500/30 bg-[#041E18] flex items-center justify-center group">
            {/* Visual Styling simulating nighttime aerial garden */}
            <div className="absolute inset-0 bg-emerald-900/40 islamic-pattern-bg opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-950 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-gold-glow animate-bounce">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-lg sm:text-xl text-ivory font-semibold">
                {mainVenue.name}
              </h4>
              <p className="text-xs text-ivory/70 max-w-sm">
                Tap below for real-time turn-by-turn navigation on your smartphone.
              </p>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase font-serif tracking-widest text-gold-300 hover:text-gold-100 underline decoration-gold-400/50 underline-offset-4"
              >
                Launch Navigation App
              </a>
            </div>
          </div>

          {/* Family Contact Coordinators */}
          {contacts && contacts.length > 0 && (
            <div className="border-t border-gold-500/20 pt-6">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-serif block mb-4">
                Family Hospitality Coordinators
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-emerald-900/40 border border-gold-500/15 flex items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-ivory">
                        {contact.name}
                      </h4>
                      <p className="text-xs text-gold-300/80 font-serif italic">
                        {contact.relation}
                      </p>
                      <p className="text-xs text-ivory/70 font-mono mt-0.5">
                        {contact.phone}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                        className="p-2 rounded-full bg-gold-500/15 hover:bg-gold-500/30 text-gold-300 border border-gold-500/30 transition-colors"
                        title={`Call ${contact.name}`}
                        aria-label={`Call ${contact.name}`}
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-emerald-800/80 hover:bg-emerald-700 text-emerald-200 border border-emerald-500/30 transition-colors"
                        title={`WhatsApp ${contact.name}`}
                        aria-label={`WhatsApp ${contact.name}`}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </IslamicBorder>
      </motion.div>
    </section>
  );
};
