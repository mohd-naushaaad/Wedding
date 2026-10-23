import React, { useState } from 'react';
import { Volume2, VolumeX, Share2, Sparkles, Monitor, Smartphone, Layers } from 'lucide-react';
import { GraphicMode } from '../../hooks/useWebGLSupport';
import { weddingConfig } from '../../config/wedding';

interface NavbarProps {
  isOpened: boolean;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  onOpenShare: () => void;
  graphicMode: GraphicMode;
  onChangeGraphicMode: (mode: GraphicMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isOpened,
  isPlayingAudio,
  onToggleAudio,
  onOpenShare,
  graphicMode,
  onChangeGraphicMode
}) => {
  const [showModeMenu, setShowModeMenu] = useState(false);
  const { couple } = weddingConfig;

  // Initials
  const initials = `${couple.brideName.charAt(0)} & ${couple.groomName.charAt(0)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-4 py-3 bg-gradient-to-b from-[#031713]/90 via-[#031713]/60 to-transparent backdrop-blur-sm select-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Monogram / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full border border-gold-400/60 bg-emerald-950/80 flex items-center justify-center text-gold-300 font-serif font-bold text-xs tracking-wider shadow-gold-glow group-hover:border-gold-300 transition-colors">
            {initials}
          </div>
          <span className="font-serif text-sm tracking-widest uppercase text-gold-200 hidden sm:inline">
            Royal Nikah
          </span>
        </a>

        {/* Center Links (Visible when opened) */}
        {isOpened && (
          <nav className="hidden md:flex items-center gap-6 font-serif text-xs uppercase tracking-widest text-ivory/80">
            <a href="#events" className="hover:text-gold-300 transition-colors">
              Events
            </a>
            <a href="#venue" className="hover:text-gold-300 transition-colors">
              Venue
            </a>
            <a href="#rsvp" className="hover:text-gold-300 transition-colors">
              RSVP
            </a>
          </nav>
        )}

        {/* Right Controls: Audio, 3D Mode Toggle, Share */}
        <div className="flex items-center gap-2">
          {/* Graphics Mode Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowModeMenu(!showModeMenu)}
              className="p-2 rounded-full bg-emerald-900/60 border border-gold-500/30 text-gold-300 hover:text-gold-100 hover:border-gold-400 transition-colors cursor-pointer text-xs flex items-center gap-1.5"
              title="Change 3D Rendering Mode"
              aria-label="Change 3D Graphics Mode"
            >
              <Layers className="w-4 h-4 text-gold-400" />
              <span className="hidden sm:inline capitalize font-serif text-[11px]">
                {graphicMode} 3D
              </span>
            </button>

            {showModeMenu && (
              <div className="absolute right-0 mt-2 w-48 p-2 rounded-xl bg-emerald-950 border border-gold-500/40 shadow-2xl z-50 text-xs font-serif">
                <span className="text-[10px] uppercase tracking-wider text-gold-400/80 px-2 py-1 block">
                  Visual Graphics Mode
                </span>
                <button
                  onClick={() => {
                    onChangeGraphicMode('full');
                    setShowModeMenu(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer ${
                    graphicMode === 'full' ? 'bg-gold-500/20 text-gold-200' : 'text-ivory/80 hover:bg-white/5'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Full 3D Cinematic</span>
                </button>
                <button
                  onClick={() => {
                    onChangeGraphicMode('balanced');
                    setShowModeMenu(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer ${
                    graphicMode === 'balanced' ? 'bg-gold-500/20 text-gold-200' : 'text-ivory/80 hover:bg-white/5'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Balanced (Mobile)</span>
                </button>
                <button
                  onClick={() => {
                    onChangeGraphicMode('fallback');
                    setShowModeMenu(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer ${
                    graphicMode === 'fallback' ? 'bg-gold-500/20 text-gold-200' : 'text-ivory/80 hover:bg-white/5'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5 text-gold-400" />
                  <span>Classic 2D Architecture</span>
                </button>
              </div>
            )}
          </div>

          {/* Audio Button */}
          <button
            onClick={onToggleAudio}
            className="p-2 rounded-full bg-emerald-900/60 border border-gold-500/30 text-gold-300 hover:text-gold-100 hover:border-gold-400 transition-colors cursor-pointer"
            aria-label={isPlayingAudio ? 'Mute Music' : 'Play Music'}
            title={isPlayingAudio ? 'Mute Music' : 'Play Music'}
          >
            {isPlayingAudio ? (
              <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-gold-500/80" />
            )}
          </button>

          {/* Share Button */}
          <button
            onClick={onOpenShare}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-emerald-950 font-serif font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:shadow-gold-glow transition-all cursor-pointer"
            aria-label="Share Invitation"
          >
            <Share2 className="w-3.5 h-3.5 text-emerald-950" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>
    </header>
  );
};
