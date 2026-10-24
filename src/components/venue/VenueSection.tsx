import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, MessageCircle, ExternalLink, Calendar, Home } from 'lucide-react';
import { IslamicBorder } from '../ui/IslamicBorder';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { weddingConfig } from '../../config/wedding';

export const VenueSection: React.FC = () => {
  const { mainVenue } = weddingConfig.ceremony;
  const { contacts, hosts } = weddingConfig;

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
          We eagerly await welcoming you to the blessed wedding celebrations.
        </p>
        <OrnamentalDivider variant="crescent" className="w-40 mx-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
        className="space-y-8"
      >
        {/* 1. Main Wedding Venue: Moon Star Marriage Hall (Nikah Ceremony) */}
        <IslamicBorder variant="emerald" className="space-y-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-300 text-xs font-serif uppercase tracking-wider border border-gold-500/30">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Arrival of Barat &amp; Solemn Nikah Venue
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-gold-gradient font-bold">
                {mainVenue.name}
              </h3>

              <p className="text-sm sm:text-base text-ivory/90 leading-relaxed font-sans">
                {mainVenue.address}
              </p>

              <div className="flex items-center gap-2 text-xs text-gold-400/90 font-serif">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Wednesday, 25th November 2026 • Arrival of Barat: 07:00 PM</span>
              </div>
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

          {/* Landmark Banner */}
          <div className="p-4 rounded-xl bg-[#031713]/80 border border-gold-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gold-400 block font-serif">
                Prominent Landmarks
              </span>
              <p className="text-xs sm:text-sm text-ivory/80 font-sans mt-0.5">
                Above Hamid Super Market, Near Bank of India, Akbarpur, Rohtas, Bihar
              </p>
            </div>
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase font-serif tracking-widest text-gold-300 hover:text-gold-100 underline decoration-gold-400/50 underline-offset-4"
            >
              Get Turn-by-Turn Navigation
            </a>
          </div>
        </IslamicBorder>

        {/* 2. Bride's Family Residence Card */}
        <IslamicBorder variant="emerald" className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gold-500/20 pb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/40 text-emerald-300 text-xs font-serif uppercase tracking-wider border border-emerald-500/30">
              <Home className="w-3.5 h-3.5 text-emerald-400" />
              Bride's Family Residence (From .. {hosts.brideFatherName})
            </span>
            <span className="text-xs text-gold-400/80 font-serif">
              Host Family • Delhi
            </span>
          </div>

          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-gold-gradient font-bold">
              {hosts.brideFatherName}
            </h4>
            <p className="text-sm sm:text-base text-ivory/90 font-serif font-medium mt-1">
              {hosts.brideAddress}
            </p>
          </div>
        </IslamicBorder>

        {/* 3. Family Hospitality Coordinators */}
        {contacts && contacts.length > 0 && (
          <IslamicBorder variant="emerald" className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-serif block">
              Hospitality &amp; Family Coordinators
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((contact, idx) => {
                const isPhoneValid = contact.phone && contact.phone.includes('+');
                const cleanPhone = contact.phone.replace(/[^0-9]/g, '');

                return (
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

                    {isPhoneValid && (
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${cleanPhone}`}
                          className="p-2 rounded-full bg-gold-500/15 hover:bg-gold-500/30 text-gold-300 border border-gold-500/30 transition-colors"
                          title={`Call ${contact.name}`}
                          aria-label={`Call ${contact.name}`}
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                        <a
                          href={`https://wa.me/${cleanPhone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-emerald-800/80 hover:bg-emerald-700 text-emerald-200 border border-emerald-500/30 transition-colors"
                          title={`WhatsApp ${contact.name}`}
                          aria-label={`WhatsApp ${contact.name}`}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </IslamicBorder>
        )}
      </motion.div>
    </section>
  );
};
