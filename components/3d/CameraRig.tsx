'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { TOTAL_SCROLL_PAGES } from '@/lib/scrollUtils';

// Camera spline path — control points that wind through the backwater scene
const CAMERA_PATH_POINTS = [
  new THREE.Vector3(0,    2.5, 20),   // Chapter 0: Hero — facing down the river
  new THREE.Vector3(-2,   2.8, 12),   // Chapter 1: Ingredients — slight left bend
  new THREE.Vector3(2,    2.5,  4),   // Chapter 2: Products — approaching ghat
  new THREE.Vector3(0,    3.0, -4),   // Chapter 3: Story — slow turn
  new THREE.Vector3(-3,   3.5,-12),   // Chapter 4: Franchise — bank on right
  new THREE.Vector3(1,    3.2,-20),   // Chapter 5: Testimonials — crowd ahead
  new THREE.Vector3(0,    2.8,-28),   // Chapter 6: CTA — sunset dock approaches
  new THREE.Vector3(0,    2.0,-35),   // Chapter 7: Footer — docked, camera low
];

const LOOK_AT_POINTS = [
  new THREE.Vector3(0,    1, -10),
  new THREE.Vector3(-2,   1, -18),
  new THREE.Vector3(2,    1, -26),
  new THREE.Vector3(0,    1, -34),
  new THREE.Vector3(-3,   1, -42),
  new THREE.Vector3(1,    1, -50),
  new THREE.Vector3(0,    1, -58),
  new THREE.Vector3(0,    0, -62),
];

const cameraCurve   = new THREE.CatmullRomCurve3(CAMERA_PATH_POINTS);
const lookAtCurve   = new THREE.CatmullRomCurve3(LOOK_AT_POINTS);

export default function CameraRig() {
  const scroll = useScroll();
  const target = useRef(new THREE.Vector3());

  useFrame(({ camera }) => {
    const t = scroll.offset; // 0–1

    // Position along spline
    const pos = cameraCurve.getPoint(t);
    camera.position.lerp(pos, 0.06);

    // LookAt along spline
    const look = lookAtCurve.getPoint(t);
    target.current.lerp(look, 0.06);
    camera.lookAt(target.current);

    // Subtle roll based on bend direction
    const tangent = cameraCurve.getTangent(t);
    const roll    = tangent.x * 0.05;
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, roll, 0.05);
  });

  return null; // This component only manipulates the camera
}
