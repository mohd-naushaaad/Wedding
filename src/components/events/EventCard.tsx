import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Navigation, CalendarPlus } from 'lucide-react';
import { WeddingEvent } from '../../types/wedding';
import { IslamicBorder } from '../ui/IslamicBorder';

interface EventCardProps {
  event: WeddingEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Generate Google Calendar Link
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(
      `${event.subtitle || ''}\n\nVenue: ${event.venueName}, ${event.venueAddress}\nDress Code: ${event.dressCode || 'Formal'}`
    );
    const location = encodeURIComponent(`${event.venueName}, ${event.venueAddress}`);
    
    // Parse time roughly for calendar
    const cleanDate = event.dateISO.replace(/-/g, '');
    const startTimeFormatted = `${cleanDate}T133000Z`; // Default UTC approximation
    const endTimeFormatted = `${cleanDate}T173000Z`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startTimeFormatted}/${endTimeFormatted}`;
  };

  return (
    <IslamicBorder variant="emerald" className="w-full text-left transition-all duration-300 hover:border-gold-400">
      <div className="space-y-4">
        {/* Header */}
        <div className="border-b border-gold-500/20 pb-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-serif font-light">
              Wedding Function
            </span>
            {event.dressCode && (
              <span className="inline-flex items-center gap-1 text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/20">
                <Sparkles className="w-3 h-3 text-gold-400" />
                {event.dressCode}
              </span>
            )}
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-gold-gradient font-bold mt-1">
            {event.title}
          </h3>

          {event.subtitle && (
            <p className="font-serif italic text-xs sm:text-sm text-ivory/80 mt-1">
              {event.subtitle}
            </p>
          )}
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans">
          <div className="flex items-center gap-2.5 text-ivory/90">
            <div className="p-2 rounded-lg bg-emerald-900/60 border border-gold-500/20 text-gold-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gold-400 block font-serif">
                Date
              </span>
              <span className="font-medium">{event.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-ivory/90">
            <div className="p-2 rounded-lg bg-emerald-900/60 border border-gold-500/20 text-gold-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gold-400 block font-serif">
                Timing
              </span>
              <span className="font-medium">
                {event.startTime} {event.endTime ? `– ${event.endTime}` : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Venue & Location */}
        <div className="flex items-start gap-2.5 text-sm font-sans pt-1">
          <div className="p-2 rounded-lg bg-emerald-900/60 border border-gold-500/20 text-gold-400 shrink-0 mt-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-gold-400 block font-serif">
              Venue
            </span>
            <span className="font-medium text-ivory block">{event.venueName}</span>
            <span className="text-xs text-ivory/70 block mt-0.5">{event.venueAddress}</span>
          </div>
        </div>

        {/* Note if available */}
        {event.note && (
          <div className="p-3 rounded-xl bg-[#031713]/70 border border-gold-500/15 text-xs text-gold-200/90 italic font-serif">
            {event.note}
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {event.googleMapsUrl && (
            <a
              href={event.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 hover:bg-gold-500/25 text-gold-300 hover:text-gold-100 border border-gold-500/40 text-xs font-serif tracking-wider uppercase transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          )}

          <a
            href={createGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-ivory/80 hover:text-ivory border border-white/10 text-xs font-serif tracking-wider uppercase transition-colors"
          >
            <CalendarPlus className="w-3.5 h-3.5 text-gold-400" />
            <span>Add to Calendar</span>
          </a>
        </div>
      </div>
    </IslamicBorder>
  );
};
