import React from 'react';

interface ArchFrameProps {
  children?: React.ReactNode;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const ArchFrame: React.FC<ArchFrameProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative flex flex-col items-center justify-center p-8 sm:p-12 ${className}`}>
      {/* SVG Cusped Mughal Arch Contour Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-90 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 600"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Drop Shadow Arch */}
          <path
            d="M 20 600 L 20 220 
               C 20 180, 50 140, 80 140 
               C 100 140, 115 115, 140 100 
               C 165 85, 185 50, 200 15 
               C 215 50, 235 85, 260 100 
               C 285 115, 300 140, 320 140 
               C 350 140, 380 180, 380 220 
               L 380 600 Z"
            fill="rgba(6, 61, 50, 0.4)"
            stroke="#C6A45B"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />

          {/* Inner Accent Gold Arch */}
          <path
            d="M 35 590 L 35 230 
               C 35 195, 60 155, 90 155 
               C 110 155, 125 130, 148 115 
               C 170 100, 188 68, 200 38 
               C 212 68, 230 100, 252 115 
               C 275 130, 290 155, 310 155 
               C 340 155, 365 195, 365 230 
               L 365 590"
            stroke="#E7D6A3"
            strokeWidth="1"
            strokeDasharray="4 3"
            strokeOpacity="0.6"
          />

          {/* Crown finial ornament */}
          <circle cx="200" cy="14" r="3.5" fill="#FAF4E6" />
          <path d="M 200 4 L 200 14" stroke="#C6A45B" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};
