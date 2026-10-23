import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'simple' | 'crescent' | 'flower' | 'full';
  color?: 'gold' | 'ivory';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'crescent',
  color = 'gold'
}) => {
  const strokeColor = color === 'gold' ? '#C6A45B' : '#F8F3E8';
  const fillColor = color === 'gold' ? '#E7D6A3' : '#FFFFFF';

  return (
    <div className={`flex items-center justify-center my-4 select-none ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#C6A45B]/60 to-[#C6A45B]" />
      
      <div className="mx-3 flex items-center justify-center space-x-1">
        {variant === 'simple' && (
          <div className="w-2 h-2 rotate-45 border border-gold-400 bg-gold-500/30" />
        )}

        {variant === 'crescent' && (
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left flourish */}
            <path d="M4 12C8 12 10 9 12 7" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
            <path d="M4 12C8 12 10 15 12 17" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
            {/* Center Crescent and 8-point star */}
            <path d="M16 5A7 7 0 1 0 23 12A5.5 5.5 0 1 1 16 5Z" fill={fillColor} />
            <polygon points="24,9 25,11.5 28,11.5 25.5,13.2 26.5,15.8 24,14.2 21.5,15.8 22.5,13.2 20,11.5 23,11.5" fill="#FAF4E6" />
            {/* Right flourish */}
            <path d="M30 12C26 12 24 9 22 7" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
            <path d="M30 12C26 12 24 15 22 17" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
          </svg>
        )}

        {variant === 'flower' && (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="3" fill={fillColor} />
            <path d="M14 4V8M14 20V24M4 14H8M20 14H24" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="14" cy="14" r="8" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2 2" />
          </svg>
        )}

        {variant === 'full' && (
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill={fillColor} stroke={strokeColor} strokeWidth="0.5" />
            </svg>
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
          </div>
        )}
      </div>

      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-[#C6A45B]/60 to-[#C6A45B]" />
    </div>
  );
};
