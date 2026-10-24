import React from 'react';
import { Calendar, Navigation, CheckSquare } from 'lucide-react';
import { weddingConfig } from '../../config/wedding';

interface FloatingActionsProps {
  isOpened: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  isOpened
}) => {
  if (!isOpened) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 select-none animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-full bg-emerald-950/90 border border-gold-500/40 backdrop-blur-md shadow-2xl">
        <a
          href="#events"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-gold-300 hover:text-gold-100 hover:bg-gold-500/15 transition-colors text-xs font-serif uppercase tracking-wider min-h-[44px]"
          aria-label="Jump to Events Timeline"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[11px]">Events</span>
        </a>

        <a
          href="#venue"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-gold-300 hover:text-gold-100 hover:bg-gold-500/15 transition-colors text-xs font-serif uppercase tracking-wider min-h-[44px]"
          aria-label="Jump to Venue and Directions"
        >
          <Navigation className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[11px]">Venue</span>
        </a>

        {weddingConfig.rsvp.enabled && (
          <a
            href="#rsvp"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gold-500/20 text-gold-200 border border-gold-400/40 hover:bg-gold-500/30 transition-colors text-xs font-serif uppercase tracking-wider font-semibold min-h-[44px]"
            aria-label="Confirm Attendance RSVP"
          >
            <CheckSquare className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px]">RSVP</span>
          </a>
        )}
      </div>
    </div>
  );
};
