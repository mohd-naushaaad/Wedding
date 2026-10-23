import React from 'react';

interface IslamicBorderProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'emerald' | 'ivory';
  padded?: boolean;
}

export const IslamicBorder: React.FC<IslamicBorderProps> = ({
  children,
  className = '',
  variant = 'emerald',
  padded = true
}) => {
  const isEmerald = variant === 'emerald';

  return (
    <div
      className={`relative rounded-2xl transition-all duration-300 ${
        isEmerald
          ? 'bg-gradient-to-b from-[#082C26]/95 via-[#063D32]/95 to-[#031713]/98 text-ivory border border-[#C6A45B]/40 shadow-royal'
          : 'bg-gradient-to-b from-[#FCF9F3] to-[#EFE6D5] text-charcoal border border-[#C6A45B]/50 shadow-xl'
      } ${padded ? 'p-6 sm:p-10' : ''} ${className}`}
    >
      {/* Inner thin accent border */}
      <div className="absolute inset-2 sm:inset-3 rounded-xl border border-[#C6A45B]/25 pointer-events-none" />

      {/* Top Left Arabesque Corner */}
      <svg
        className="absolute top-2 left-2 w-8 h-8 sm:w-10 sm:h-10 text-[#C6A45B] pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path d="M2 38V12C2 6.47715 6.47715 2 12 2H38" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path d="M12 2C12 7.52285 7.52285 12 2 12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Top Right Arabesque Corner */}
      <svg
        className="absolute top-2 right-2 w-8 h-8 sm:w-10 sm:h-10 text-[#C6A45B] pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path d="M38 38V12C38 6.47715 33.5228 2 28 2H2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="12" r="3" fill="currentColor" />
        <path d="M28 2C28 7.52285 32.4772 12 38 12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M34 6L22 18" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Bottom Left Arabesque Corner */}
      <svg
        className="absolute bottom-2 left-2 w-8 h-8 sm:w-10 sm:h-10 text-[#C6A45B] pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path d="M2 2V28C2 33.5228 6.47715 38 12 38H38" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="28" r="3" fill="currentColor" />
        <path d="M12 38C12 32.4772 7.52285 28 2 28" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M6 34L18 22" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Bottom Right Arabesque Corner */}
      <svg
        className="absolute bottom-2 right-2 w-8 h-8 sm:w-10 sm:h-10 text-[#C6A45B] pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path d="M38 2V28C38 33.5228 33.5228 38 28 38H2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="3" fill="currentColor" />
        <path d="M28 38C28 32.4772 32.4772 28 38 28" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M34 34L22 22" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
