import { useState, useEffect } from 'react';

export type GraphicMode = 'full' | 'balanced' | 'fallback';

export function useWebGLSupport() {
  const [mode, setMode] = useState<GraphicMode>('full');
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setMode('fallback');
      }
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Test WebGL
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setIsSupported(false);
        setMode('fallback');
        return;
      }

      // Check for low-end mobile devices
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isLowMemory = 'deviceMemory' in navigator && (navigator as { deviceMemory?: number }).deviceMemory! <= 3;
      const isLowCores = 'hardwareConcurrency' in navigator && navigator.hardwareConcurrency <= 4;

      if (motionQuery.matches) {
        setMode('fallback');
      } else if (isMobile && (isLowMemory || isLowCores)) {
        setMode('balanced');
      } else {
        setMode('full');
      }
    } catch {
      setIsSupported(false);
      setMode('fallback');
    }

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return {
    mode,
    setMode,
    isSupported,
    prefersReducedMotion
  };
}
