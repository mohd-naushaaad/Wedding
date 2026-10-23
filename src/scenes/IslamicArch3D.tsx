import React, { useMemo } from 'react';
import * as THREE from 'three';

interface IslamicArch3DProps {
  scale?: number;
  openProgress?: number; // 0 to 1: when opening, can separate doors or reveal portal
}

export const IslamicArch3D: React.FC<IslamicArch3DProps> = ({
  scale = 1,
  openProgress = 0
}) => {
  // Construct the multi-tiered Mughal Cusped Arch shape
  const { outerArchGeometry, innerArchGeometry, columnGeometry, baseGeometry } = useMemo(() => {
    // 1. Outer Arch Cutout Shape
    const outerShape = new THREE.Shape();
    const w = 3.6; // half width
    const h = 5.2; // total height
    const baseH = 2.0;

    // Start bottom left
    outerShape.moveTo(-w, -baseH);
    outerShape.lineTo(-w, baseH);

    // Left lower cusp
    outerShape.quadraticCurveTo(-w * 0.95, baseH + 1.0, -w * 0.65, baseH + 1.4);
    // Left middle cusp
    outerShape.quadraticCurveTo(-w * 0.55, baseH + 2.0, -w * 0.3, baseH + 2.4);
    // Left upper ogee tip to center peak
    outerShape.quadraticCurveTo(-w * 0.1, baseH + 2.8, 0, h);
    // Right upper ogee tip from center peak
    outerShape.quadraticCurveTo(w * 0.1, baseH + 2.8, w * 0.3, baseH + 2.4);
    // Right middle cusp
    outerShape.quadraticCurveTo(w * 0.55, baseH + 2.0, w * 0.65, baseH + 1.4);
    // Right lower cusp
    outerShape.quadraticCurveTo(w * 0.95, baseH + 1.0, w, baseH);

    // Down to bottom right
    outerShape.lineTo(w, -baseH);
    outerShape.lineTo(-w, -baseH);

    // Create a hole for the opening
    const holePath = new THREE.Path();
    const hw = 2.7;
    const hh = 4.4;
    const hbaseH = 1.9;

    holePath.moveTo(-hw, -hbaseH);
    holePath.lineTo(-hw, hbaseH);
    holePath.quadraticCurveTo(-hw * 0.95, hbaseH + 0.8, -hw * 0.65, hbaseH + 1.15);
    holePath.quadraticCurveTo(-hw * 0.55, hbaseH + 1.6, -hw * 0.28, hbaseH + 2.0);
    holePath.quadraticCurveTo(-hw * 0.1, hbaseH + 2.4, 0, hh);
    holePath.quadraticCurveTo(hw * 0.1, hbaseH + 2.4, hw * 0.28, hbaseH + 2.0);
    holePath.quadraticCurveTo(hw * 0.55, hbaseH + 1.6, hw * 0.65, hbaseH + 1.15);
    holePath.quadraticCurveTo(hw * 0.95, hbaseH + 0.8, hw, hbaseH);
    holePath.lineTo(hw, -hbaseH);
    holePath.lineTo(-hw, -hbaseH);

    outerShape.holes.push(holePath);

    const outerGeo = new THREE.ExtrudeGeometry(outerShape, {
      depth: 0.6,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 4,
      steps: 1
    });

    // 2. Inner Decorative Arch Trim (Gold Foil Inlay)
    const innerShape = new THREE.Shape();
    innerShape.moveTo(-hw, -hbaseH);
    innerShape.lineTo(-hw, hbaseH);
    innerShape.quadraticCurveTo(-hw * 0.95, hbaseH + 0.8, -hw * 0.65, hbaseH + 1.15);
    innerShape.quadraticCurveTo(-hw * 0.55, hbaseH + 1.6, -hw * 0.28, hbaseH + 2.0);
    innerShape.quadraticCurveTo(-hw * 0.1, hbaseH + 2.4, 0, hh);
    innerShape.quadraticCurveTo(hw * 0.1, hbaseH + 2.4, hw * 0.28, hbaseH + 2.0);
    innerShape.quadraticCurveTo(hw * 0.55, hbaseH + 1.6, hw * 0.65, hbaseH + 1.15);
    innerShape.quadraticCurveTo(hw * 0.95, hbaseH + 0.8, hw, hbaseH);
    innerShape.lineTo(hw, -hbaseH);

    const innerHole = new THREE.Path();
    const ihw = hw - 0.22;
    const ihh = hh - 0.22;
    innerHole.moveTo(-ihw, -hbaseH);
    innerHole.lineTo(-ihw, hbaseH);
    innerHole.quadraticCurveTo(-ihw * 0.95, hbaseH + 0.75, -ihw * 0.65, hbaseH + 1.1);
    innerHole.quadraticCurveTo(-ihw * 0.55, hbaseH + 1.5, -ihw * 0.28, hbaseH + 1.9);
    innerHole.quadraticCurveTo(-ihw * 0.1, hbaseH + 2.3, 0, ihh);
    innerHole.quadraticCurveTo(ihw * 0.1, hbaseH + 2.3, ihw * 0.28, hbaseH + 1.9);
    innerHole.quadraticCurveTo(ihw * 0.55, hbaseH + 1.5, ihw * 0.65, hbaseH + 1.1);
    innerHole.quadraticCurveTo(ihw * 0.95, hbaseH + 0.75, ihw, hbaseH);
    innerHole.lineTo(ihw, -hbaseH);
    innerShape.holes.push(innerHole);

    const innerGeo = new THREE.ExtrudeGeometry(innerShape, {
      depth: 0.18,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelSegments: 3,
      steps: 1
    });

    // 3. Side Columns & Pedestals
    const colGeo = new THREE.CylinderGeometry(0.32, 0.36, 4.4, 16);
    const baseG = new THREE.BoxGeometry(0.9, 0.45, 0.9);

    return {
      outerArchGeometry: outerGeo,
      innerArchGeometry: innerGeo,
      columnGeometry: colGeo,
      baseGeometry: baseG
    };
  }, []);

  // Materials
  const emeraldStoneMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#063D32'),
        roughness: 0.35,
        metalness: 0.25,
      }),
    []
  );

  const antiqueGoldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#C6A45B'),
        roughness: 0.25,
        metalness: 0.85,
      }),
    []
  );

  const darkEmeraldBackMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#031713'),
        roughness: 0.7,
        metalness: 0.1,
      }),
    []
  );

  const doorSlideX = openProgress * 2.8;

  return (
    <group scale={scale}>
      {/* Main Arch Structure */}
      <mesh
        geometry={outerArchGeometry}
        material={emeraldStoneMaterial}
        position={[0, 0, -0.3]}
        castShadow
        receiveShadow
      />

      {/* Decorative Gold Inlay Trim */}
      <mesh
        geometry={innerArchGeometry}
        material={antiqueGoldMaterial}
        position={[0, 0, 0.02]}
        castShadow
      />

      {/* Left Column Structure */}
      <group position={[-3.6, 0.1, 0]}>
        <mesh geometry={baseGeometry} material={antiqueGoldMaterial} position={[0, -2.1, 0]} />
        <mesh geometry={columnGeometry} material={emeraldStoneMaterial} position={[0, 0.2, 0]} castShadow />
        <mesh geometry={baseGeometry} material={antiqueGoldMaterial} position={[0, 2.5, 0]} />
      </group>

      {/* Right Column Structure */}
      <group position={[3.6, 0.1, 0]}>
        <mesh geometry={baseGeometry} material={antiqueGoldMaterial} position={[0, -2.1, 0]} />
        <mesh geometry={columnGeometry} material={emeraldStoneMaterial} position={[0, 0.2, 0]} castShadow />
        <mesh geometry={baseGeometry} material={antiqueGoldMaterial} position={[0, 2.5, 0]} />
      </group>

      {/* Sliding Royal Jali Screens (Left & Right Door Panels during opening) */}
      <group position={[-doorSlideX, 0, -0.15]}>
        <mesh position={[-1.2, 0.5, 0]}>
          <boxGeometry args={[2.2, 4.8, 0.06]} />
          <meshStandardMaterial
            color="#082C26"
            metalness={0.4}
            roughness={0.4}
            opacity={1 - openProgress * 0.9}
            transparent={openProgress > 0}
          />
        </mesh>
      </group>

      <group position={[doorSlideX, 0, -0.15]}>
        <mesh position={[1.2, 0.5, 0]}>
          <boxGeometry args={[2.2, 4.8, 0.06]} />
          <meshStandardMaterial
            color="#082C26"
            metalness={0.4}
            roughness={0.4}
            opacity={1 - openProgress * 0.9}
            transparent={openProgress > 0}
          />
        </mesh>
      </group>

      {/* Polished Marble Floor with Soft Reflection */}
      <mesh position={[0, -2.3, 1.5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial
          color="#041E18"
          roughness={0.15}
          metalness={0.65}
        />
      </mesh>

      {/* Dark Backdrop Wall behind the archway */}
      <mesh position={[0, 1.5, -2.5]}>
        <planeGeometry args={[20, 14]} />
        <primitive object={darkEmeraldBackMaterial} />
      </mesh>
    </group>
  );
};
