import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface LanternProps {
  position: [number, number, number];
  swingOffset?: number;
  scale?: number;
}

const SingleLantern: React.FC<LanternProps> = ({
  position,
  swingOffset = 0,
  scale = 1
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + swingOffset;
    if (groupRef.current) {
      // Gentle pendulum swing
      groupRef.current.rotation.z = Math.sin(t * 1.2) * 0.05;
      groupRef.current.rotation.x = Math.cos(t * 0.9) * 0.03;
    }
    if (lightRef.current) {
      // Soft lantern flicker
      lightRef.current.intensity = 1.6 + Math.sin(t * 6.0) * 0.2 + Math.cos(t * 11.0) * 0.1;
    }
  });

  return (
    <group position={position} scale={scale}>
      <group ref={groupRef}>
        {/* Hanging Chain / Cord */}
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 2.4, 8]} />
          <meshStandardMaterial color="#8C6E2A" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Top Dome Cap */}
        <mesh position={[0, -0.05, 0]}>
          <coneGeometry args={[0.3, 0.35, 6]} />
          <meshStandardMaterial color="#C6A45B" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Small Crescent / Finial atop lantern */}
        <mesh position={[0, 0.18, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#FAF4E6" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Glass & Brass Lattice Lantern Body */}
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.26, 0.2, 0.5, 6]} />
          <meshStandardMaterial
            color="#2A1B0A"
            metalness={0.9}
            roughness={0.3}
            wireframe={true}
          />
        </mesh>

        {/* Inner Glowing Core */}
        <mesh position={[0, -0.4, 0]}>
          <sphereGeometry args={[0.13, 12, 12]} />
          <meshBasicMaterial color="#FFD166" />
        </mesh>

        {/* Bottom Finial */}
        <mesh position={[0, -0.72, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.18, 0.25, 6]} />
          <meshStandardMaterial color="#C6A45B" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Amber Point Light */}
        <pointLight
          ref={lightRef}
          position={[0, -0.4, 0]}
          color="#FFB347"
          intensity={1.8}
          distance={6}
          decay={2}
          castShadow
        />
      </group>
    </group>
  );
};

export const Lanterns3D: React.FC = () => {
  return (
    <group>
      {/* Left Hanging Lantern */}
      <SingleLantern position={[-2.4, 2.8, 0.6]} swingOffset={0.2} scale={1.1} />
      
      {/* Right Hanging Lantern */}
      <SingleLantern position={[2.4, 2.8, 0.6]} swingOffset={1.6} scale={1.1} />

      {/* Far Left Ambient Lantern */}
      <SingleLantern position={[-4.2, 2.2, -0.2]} swingOffset={2.8} scale={0.85} />

      {/* Far Right Ambient Lantern */}
      <SingleLantern position={[4.2, 2.2, -0.2]} swingOffset={3.9} scale={0.85} />
    </group>
  );
};
