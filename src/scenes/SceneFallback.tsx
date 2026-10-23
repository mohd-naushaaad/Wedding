import React from 'react';

interface SceneFallbackProps {
  isOpened: boolean;
  openProgress: number;
}

export const SceneFallback: React.FC<SceneFallbackProps> = ({
  openProgress
}) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden bg-gradient-to-b from-[#031713] via-[#063D32] to-[#031713]">
      {/* Background Starry & Geometric Pattern */}
      <div className="absolute inset-0 islamic-pattern-bg opacity-30" />

      {/* Layered Architectural Cusped Arch (SVG Vector Architecture) */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-700"
        style={{
          transform: `scale(${1 + openProgress * 0.15}) translateY(${openProgress * 20}px)`
        }}
      >
        <svg
          className="w-full max-w-2xl h-full max-h-[90vh] object-contain text-[#C6A45B]"
          viewBox="0 0 500 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Grand Arch Silhouette */}
          <path
            d="M 50 700 L 50 280 
               C 50 210, 90 170, 130 170 
               C 160 170, 180 135, 210 115 
               C 235 98, 245 45, 250 20 
               C 255 45, 265 98, 290 115 
               C 320 135, 340 170, 370 170 
               C 410 170, 450 210, 450 280 
               L 450 700 Z"
            fill="url(#emeraldGrad)"
            stroke="#C6A45B"
            strokeWidth="3"
            filter="drop-shadow(0 0 25px rgba(198,164,91,0.25))"
          />

          {/* Inner Accent Gold Foliate Trim */}
          <path
            d="M 80 700 L 80 300 
               C 80 235, 115 195, 150 195 
               C 175 195, 195 160, 220 140 
               C 240 120, 246 80, 250 55 
               C 254 80, 260 120, 280 140 
               C 305 160, 325 195, 350 195 
               C 385 195, 420 235, 420 300 
               L 420 700"
            stroke="#E7D6A3"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />

          {/* Left Decorative Arch Column */}
          <rect x="35" y="270" width="22" height="430" rx="3" fill="#082C26" stroke="#C6A45B" strokeWidth="1.5" />
          <rect x="25" y="260" width="42" height="18" rx="2" fill="#C6A45B" />
          <rect x="25" y="682" width="42" height="18" rx="2" fill="#C6A45B" />

          {/* Right Decorative Arch Column */}
          <rect x="443" y="270" width="22" height="430" rx="3" fill="#082C26" stroke="#C6A45B" strokeWidth="1.5" />
          <rect x="433" y="260" width="42" height="18" rx="2" fill="#C6A45B" />
          <rect x="433" y="682" width="42" height="18" rx="2" fill="#C6A45B" />

          {/* Gradients */}
          <defs>
            <linearGradient id="emeraldGrad" x1="250" y1="20" x2="250" y2="700" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B4F42" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#063D32" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#031713" stopOpacity="0.98" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hanging SVG Lanterns (with CSS Swing) */}
      <div className="absolute top-0 left-6 sm:left-16 animate-lantern-swing">
        <svg width="40" height="150" viewBox="0 0 40 150" fill="none">
          <line x1="20" y1="0" x2="20" y2="70" stroke="#C6A45B" strokeWidth="1.5" />
          <polygon points="20,70 10,85 30,85" fill="#C6A45B" />
          <rect x="12" y="85" width="16" height="24" rx="2" fill="#082C26" stroke="#C6A45B" strokeWidth="1" />
          <circle cx="20" cy="97" r="5" fill="#FFD166" className="animate-pulse" />
          <polygon points="20,118 12,109 28,109" fill="#C6A45B" />
          <circle cx="20" cy="122" r="2" fill="#FAF4E6" />
        </svg>
      </div>

      <div className="absolute top-0 right-6 sm:right-16 animate-lantern-swing" style={{ animationDelay: '2.5s' }}>
        <svg width="40" height="150" viewBox="0 0 40 150" fill="none">
          <line x1="20" y1="0" x2="20" y2="70" stroke="#C6A45B" strokeWidth="1.5" />
          <polygon points="20,70 10,85 30,85" fill="#C6A45B" />
          <rect x="12" y="85" width="16" height="24" rx="2" fill="#082C26" stroke="#C6A45B" strokeWidth="1" />
          <circle cx="20" cy="97" r="5" fill="#FFD166" className="animate-pulse" />
          <polygon points="20,118 12,109 28,109" fill="#C6A45B" />
          <circle cx="20" cy="122" r="2" fill="#FAF4E6" />
        </svg>
      </div>

      {/* Floating Gold CSS Particle Motes */}
      <div className="absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#E7D6A3] animate-float-slow"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 95}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDuration: `${Math.random() * 5 + 4}s`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: '0 0 8px rgba(231,214,163,0.8)'
            }}
          />
        ))}
      </div>
    </div>
  );
};
