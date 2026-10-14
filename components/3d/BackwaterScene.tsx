'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, Environment } from '@react-three/drei';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

// Boat component — loads GLTF and adds gentle rocking
function Boat() {
  const groupRef = useRef<THREE.Group>(null!);
  const scroll   = useScroll();

  // Fallback geometry until GLTF is loaded — stylised low-poly boat
  // Replace with: const { scene } = useGLTF('/models/vallam_boat.glb');

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    // Rock with the waves
    groupRef.current.rotation.z = Math.sin(t * 0.8)   * 0.04;
    groupRef.current.rotation.x = Math.sin(t * 0.5)   * 0.02;
    groupRef.current.position.y = Math.sin(t * 0.6)   * 0.1 - 0.3;

    // Advance along Z as user scrolls
    groupRef.current.position.z = -scroll.offset * 55;
    groupRef.current.position.x = Math.sin(scroll.offset * Math.PI) * 3;
  });

  return (
    <group ref={groupRef} rotation={[0, Math.PI, 0]}>
      {/* ── Hull ── */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 0.35, 4.5]} />
        <meshStandardMaterial color="#5C3317" roughness={0.8} metalness={0.05} />
      </mesh>

      {/* ── Curved prow ── */}
      <mesh castShadow position={[0, 0.05, 2.5]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[1.0, 0.2, 0.8]} />
        <meshStandardMaterial color="#4A2810" roughness={0.9} />
      </mesh>

      {/* ── Thatch canopy ── */}
      <mesh castShadow position={[0, 0.55, 0]}>
        <boxGeometry args={[1.3, 0.08, 2.8]} />
        <meshStandardMaterial color="#8B7355" roughness={1} />
      </mesh>
      <mesh castShadow position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.02, 0.65, 0.6, 8]} />
        <meshStandardMaterial color="#7A6344" roughness={1} />
      </mesh>

      {/* ── Wooden poles ── */}
      {[-0.6, 0.6].map((x) => (
        <mesh key={x} castShadow position={[x, 0.45, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.9, 6]} />
          <meshStandardMaterial color="#3D1F0A" roughness={0.9} />
        </mesh>
      ))}

      {/* ── Paddle / oar ── */}
      <mesh castShadow position={[-0.75, 0.1, -1.5]} rotation={[0.3, 0.2, 0.5]}>
        <cylinderGeometry args={[0.015, 0.015, 2.5, 6]} />
        <meshStandardMaterial color="#6B3E1A" roughness={0.9} />
      </mesh>

      {/* ── Wake sparkle ── */}
      <Sparkles
        count={40}
        scale={[1.8, 0.2, 1.2]}
        size={1.2}
        speed={0.3}
        color="#c8e0d0"
        position={[0, -0.15, -2.2]}
        opacity={0.5}
      />
    </group>
  );
}

// Floating chip particle system
function ChipParticles() {
  const count  = 60;
  const meshRef = useRef<THREE.InstancedMesh>(null!);

  const positions = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 60,
      y: Math.random() * 3 + 0.5,
      z: (Math.random() - 0.5) * 80,
      rotX: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      speed: Math.random() * 0.5 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    positions.forEach((p, i) => {
      dummy.position.set(p.x, p.y + Math.sin(t * p.speed + p.phase) * 0.3, p.z);
      dummy.rotation.set(p.rotX + t * 0.2, t * p.speed * 0.3, p.rotZ);
      dummy.scale.setScalar(0.08 + Math.sin(p.phase) * 0.02);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow>
      <cylinderGeometry args={[1, 1, 0.12, 8]} />
      <meshStandardMaterial
        color="#FFDE00"
        roughness={0.3}
        metalness={0.2}
        emissive="#C7001C"
        emissiveIntensity={0.05}
      />
    </instancedMesh>
  );
}

// Palm tree — placed on banks
function PalmTree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh castShadow>
        <cylinderGeometry args={[0.12, 0.18, 5, 8]} />
        <meshStandardMaterial color="#5C3D1A" roughness={0.9} />
      </mesh>
      {/* Fronds */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <mesh
            key={i}
            castShadow
            position={[Math.cos(rad) * 1.2, 5 + Math.sin(rad) * 0.3, Math.sin(rad) * 1.2]}
            rotation={[Math.sin(rad) * 0.6, rad, 0.3]}
          >
            <planeGeometry args={[2.5, 0.4]} />
            <meshStandardMaterial
              color="#2D5A1B"
              roughness={0.8}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Bank terrain — simple elevated plane on both sides
function Banks() {
  return (
    <>
      {/* Left bank */}
      <mesh receiveShadow position={[-12, -0.8, -20]} rotation={[0, 0.1, 0]}>
        <boxGeometry args={[18, 1.5, 120]} />
        <meshStandardMaterial color="#2D4A1A" roughness={1} />
      </mesh>
      {/* Right bank */}
      <mesh receiveShadow position={[12, -0.8, -20]} rotation={[0, -0.1, 0]}>
        <boxGeometry args={[18, 1.5, 120]} />
        <meshStandardMaterial color="#2D4A1A" roughness={1} />
      </mesh>
    </>
  );
}

export default function BackwaterScene() {
  return (
    <>
      {/* ── Lighting ── */}
      <ambientLight intensity={0.4} color="#FFE8C0" />
      <directionalLight
        castShadow
        position={[10, 20, 5]}
        intensity={2.2}
        color="#FFD580"
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={100}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />
      {/* Bounce fill from water */}
      <pointLight position={[0, 1, 0]} intensity={0.8} color="#1A6B5A" />
      {/* Atmospheric fog */}
      <fog attach="fog" args={['#0A2030', 30, 90]} />

      {/* ── Environment ── */}
      <Environment preset="sunset" />

      {/* ── Scene objects ── */}
      <Banks />
      <Boat />
      <ChipParticles />

      {/* ── Palm trees on both banks ── */}
      {[
        [-8,  0.5,  10], [-14, 0.5,   5], [-10, 0.5, -5],
        [-12, 0.5, -15], [-8,  0.5, -25], [-14, 0.5, -35],
        [ 8,  0.5,  10], [ 14, 0.5,   5], [ 10, 0.5, -5],
        [ 12, 0.5, -15], [ 8,  0.5, -25], [ 14, 0.5, -35],
      ].map((pos, i) => (
        <PalmTree key={i} position={pos as [number, number, number]} />
      ))}

      {/* ── Chapter 3: Floating product models at the ghat ── */}
      {/* Placeholder spheres — replace with actual product GLTF */}
      {[[-2, 1.5, -12], [0, 2.2, -14], [2, 1.8, -12]].map((pos, i) => (
        <Float
          key={`product-${i}`}
          speed={1.2}
          rotationIntensity={0.4}
          floatIntensity={0.6}
        >
          <mesh position={pos as [number, number, number]} castShadow>
            <boxGeometry args={[0.6, 0.9, 0.25]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#C7001C' : '#FFDE00'}
              roughness={0.4}
              metalness={0.1}
              emissive={i % 2 === 0 ? '#C7001C' : '#E6C800'}
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}

      {/* ── Chapter 5: Kiosk on right bank ── */}
      <group position={[9, 0.2, -22]}>
        {/* Kiosk structure */}
        <mesh castShadow position={[0, 1.5, 0]}>
          <boxGeometry args={[4, 3, 3]} />
          <meshStandardMaterial color="#C7001C" roughness={0.6} />
        </mesh>
        {/* Yellow signage band */}
        <mesh position={[0, 2.5, 1.52]}>
          <planeGeometry args={[3.8, 0.6]} />
          <meshStandardMaterial color="#FFDE00" roughness={0.5} emissive="#FFDE00" emissiveIntensity={0.4} />
        </mesh>
        {/* Roof */}
        <mesh castShadow position={[0, 3.2, 0]}>
          <boxGeometry args={[4.6, 0.2, 3.6]} />
          <meshStandardMaterial color="#9E0016" roughness={0.7} />
        </mesh>
        {/* Kiosk glow light */}
        <pointLight position={[0, 2, 1.6]} intensity={3} color="#FFDE00" distance={12} />
      </group>
    </>
  );
}
