import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { SceneFallback } from './scenes/SceneFallback';
import { WelcomeScreen } from './components/invitation/WelcomeScreen';
import { BismillahSection } from './components/invitation/BismillahSection';
import { NamesSection } from './components/invitation/NamesSection';
import { WeddingCountdown } from './components/countdown/WeddingCountdown';
import { EventsTimeline } from './components/events/EventsTimeline';
import { VenueSection } from './components/venue/VenueSection';
import { FamilyMessageSection } from './components/invitation/FamilyMessageSection';
import { ClosingSection } from './components/invitation/ClosingSection';
import { FloatingActions } from './components/layout/FloatingActions';
import { useWebGLSupport } from './hooks/useWebGLSupport';

// Dynamic Import for 3D Scene
const GrandEntranceCanvas = lazy(() =>
  import('./scenes/GrandEntranceCanvas').then((module) => ({
    default: module.GrandEntranceCanvas
  }))
);

export const App: React.FC = () => {
  const { mode, isSupported, prefersReducedMotion } = useWebGLSupport();

  const [isOpened, setIsOpened] = useState(false);
  const [openProgress, setOpenProgress] = useState(0);

  const animFrameRef = useRef<number | null>(null);

  // Smooth opening transition
  const handleOpenInvitation = () => {
    setIsOpened(true);

    if (prefersReducedMotion) {
      setOpenProgress(1);
      return;
    }

    let progress = 0;
    const animateOpen = () => {
      progress += 0.02;
      if (progress >= 1) {
        setOpenProgress(1);
      } else {
        setOpenProgress(progress);
        animFrameRef.current = requestAnimationFrame(animateOpen);
      }
    };
    animFrameRef.current = requestAnimationFrame(animateOpen);
  };

  const handleSkipIntro = () => {
    setIsOpened(true);
    setOpenProgress(1);
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const useFallbackScene = mode === 'fallback' || !isSupported;

  return (
    <div className="relative min-h-screen bg-[#031713] text-ivory overflow-x-hidden selection:bg-gold-500 selection:text-emerald-950">
      {/* Background Architectural Canvas (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {useFallbackScene ? (
          <SceneFallback isOpened={isOpened} openProgress={openProgress} />
        ) : (
          <Suspense fallback={<SceneFallback isOpened={isOpened} openProgress={openProgress} />}>
            <GrandEntranceCanvas
              isOpened={isOpened}
              openProgress={openProgress}
              graphicMode={mode}
            />
          </Suspense>
        )}
      </div>

      {/* Scene 1: Welcome & Cinematic Door Unveiling Screen */}
      <WelcomeScreen
        isOpened={isOpened}
        onOpen={handleOpenInvitation}
        onSkip={handleSkipIntro}
      />

      {/* Main Invitation Narrative Sections (Revealed after opening) */}
      <main
        className={`relative z-10 transition-opacity duration-1000 ${
          isOpened ? 'opacity-100' : 'opacity-0 pointer-events-none max-h-screen overflow-hidden'
        }`}
      >
        <div className="pt-10 sm:pt-16 pb-16 space-y-12 sm:space-y-20">
          {/* Scene 3: Bismillah and Invitation Introduction */}
          <BismillahSection />

          {/* Scene 4: Bride and Groom Names */}
          <NamesSection />

          {/* Scene 6: Wedding Date and Countdown */}
          <WeddingCountdown />

          {/* Scene 7: Event Details */}
          <EventsTimeline />

          {/* Scene 8: Venue and Directions */}
          <VenueSection />

          {/* Scene 9: Family Message */}
          <FamilyMessageSection />

          {/* Scene 12: Final Closing Scene */}
          <ClosingSection onScrollToTop={handleScrollToTop} />
        </div>
      </main>

      {/* Mobile Floating Thumb Navigation Bar */}
      <FloatingActions
        isOpened={isOpened}
      />
    </div>
  );
};

export default App;
