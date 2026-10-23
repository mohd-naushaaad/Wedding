import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GoldParticlesProps {
  count?: number;
}

export const GoldParticles3D: React.FC<GoldParticlesProps> = ({ count = 350 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, scales, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Spread across courtyard
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = Math.random() * 8 - 2.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 + 0.5;

      sc[i] = Math.random() * 0.06 + 0.02;

      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = Math.random() * 0.008 + 0.002;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }

    return [pos, sc, vel];
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      // Move upward
      array[i * 3 + 1] += velocities[i * 3 + 1];
      array[i * 3] += Math.sin(array[i * 3 + 1] * 1.5 + i) * 0.003;

      // Wrap around if it goes too high
      if (array[i * 3 + 1] > 6.0) {
        array[i * 3 + 1] = -2.5;
        array[i * 3] = (Math.random() - 0.5) * 14;
      }
    }
    posAttr.needsUpdate = true;
  });

  // Soft round particle texture
  const particleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    gradient.addColorStop(0, 'rgba(255, 245, 220, 1)');
    gradient.addColorStop(0.3, 'rgba(231, 214, 163, 0.8)');
    gradient.addColorStop(0.7, 'rgba(198, 164, 91, 0.4)');
    gradient.addColorStop(1, 'rgba(198, 164, 91, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        map={particleTexture}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        color="#F8E5B9"
      />
    </points>
  );
};
