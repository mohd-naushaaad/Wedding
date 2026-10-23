import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { IslamicArch3D } from './IslamicArch3D';
import { Lanterns3D } from './Lanterns3D';
import { GoldParticles3D } from './GoldParticles3D';
import { GraphicMode } from '../hooks/useWebGLSupport';

interface GrandEntranceCanvasProps {
  isOpened: boolean;
  openProgress: number; // 0 to 1
  graphicMode?: GraphicMode;
}

// Camera controller with subtle pointer parallax and smooth open dive
const CameraRig: React.FC<{ isOpened: boolean; openProgress: number }> = ({
  openProgress
}) => {
  const targetPos = useRef(new THREE.Vector3(0, 1.1, 6.2));

  useFrame(({ camera, pointer }) => {
    // Check if portrait mobile
    const isMobile = window.innerWidth < 640;
    const baseZ = isMobile ? 7.6 : 6.0;
    const baseY = isMobile ? 1.0 : 1.2;

    // When opening, camera gently glides forward and lower
    const forwardZ = baseZ - openProgress * 2.2;
    const targetY = baseY + openProgress * 0.3;

    // Subtle parallax from pointer
    const parallaxX = pointer.x * 0.35;
    const parallaxY = pointer.y * 0.2;

    targetPos.current.set(parallaxX, targetY + parallaxY, forwardZ);
    camera.position.lerp(targetPos.current, 0.05);
    camera.lookAt(0, 1.5, 0);
  });

  return null;
};

export const GrandEntranceCanvas: React.FC<GrandEntranceCanvasProps> = ({
  isOpened,
  openProgress,
  graphicMode = 'full'
}) => {
  const particleCount = graphicMode === 'balanced' ? 120 : 380;
  const dpr = graphicMode === 'balanced' ? [1, 1.2] : [1, 1.8];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
      <Canvas
        shadows={graphicMode === 'full'}
        camera={{ position: [0, 1.2, 6.4], fov: 46 }}
        dpr={dpr as [number, number]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true
        }}
      >
        <Suspense fallback={null}>
          <CameraRig isOpened={isOpened} openProgress={openProgress} />

          {/* Palace Ambient & Directional Lighting */}
          <ambientLight color="#0B4F42" intensity={1.1} />
          <directionalLight
            position={[4, 8, 5]}
            color="#FFF5DC"
            intensity={1.5}
            castShadow={graphicMode === 'full'}
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight
            position={[-4, 6, 2]}
            color="#C6A45B"
            intensity={0.8}
          />
          {/* Subtle Uplight from the palace courtyard */}
          <pointLight position={[0, -1.8, 3]} color="#D6B772" intensity={0.9} distance={8} />

          {/* 3D Islamic Architecture & Features */}
          <IslamicArch3D openProgress={openProgress} />
          <Lanterns3D />
          <GoldParticles3D count={particleCount} />
        </Suspense>
      </Canvas>
    </div>
  );
};
