'use client';

import { Suspense } from 'react';
import { Canvas }   from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing';

import BackwaterScene  from './BackwaterScene';
import WaterPlane      from './WaterPlane';
import CameraRig       from './CameraRig';
import { TOTAL_SCROLL_PAGES } from '@/lib/scrollUtils';

// HTML overlay panels (imported lazily to keep bundle split)
import HeroPanel         from '@/components/home/HeroPanel';
import IngredientsPanel  from '@/components/home/IngredientsPanel';
import ProductsPanel     from '@/components/home/ProductsPanel';
import StoryPanel        from '@/components/home/StoryPanel';
import FranchisePanel    from '@/components/home/FranchisePanel';
import TestimonialsPanel from '@/components/home/TestimonialsPanel';
import CTAPanel          from '@/components/home/CTAPanel';
import FooterPanel       from '@/components/home/FooterPanel';

function SceneLoader() {
  return (
    <mesh visible={false}>
      <boxGeometry args={[0.01, 0.01, 0.01]} />
      <meshBasicMaterial color="#000000" />
    </mesh>
  );
}

export default function BackwaterCanvas() {
  return (
    <div
      id="backwater-canvas"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas
        shadows
        dpr={[1, 1.5]}                          // cap pixel ratio for perf
        camera={{ fov: 65, near: 0.1, far: 150 }}
        gl={{
          antialias: true,
          toneMapping: 3,                       // ACESFilmicToneMapping
          toneMappingExposure: 1.2,
        }}
        style={{ background: '#0A1A25' }}
      >
        <ScrollControls
          pages={TOTAL_SCROLL_PAGES}
          damping={0.12}
          distance={1}
        >
          {/* ── 3D Objects (scroll-driven) ── */}
          <Scroll>
            <Suspense fallback={<SceneLoader />}>
              <CameraRig />
              <WaterPlane />
              <BackwaterScene />
            </Suspense>
          </Scroll>

          {/* ── HTML Overlay Panels ── */}
          <Scroll html style={{ width: '100%' }}>
            <HeroPanel />
            <IngredientsPanel />
            <ProductsPanel />
            <StoryPanel />
            <FranchisePanel />
            <TestimonialsPanel />
            <CTAPanel />
            <FooterPanel />
          </Scroll>
        </ScrollControls>

        {/* ── Post-processing ── */}
        <EffectComposer>
          <Bloom
            intensity={0.4}
            luminanceThreshold={0.7}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <DepthOfField
            focusDistance={0.02}
            focalLength={0.04}
            bokehScale={2}
          />
          <Vignette eskil={false} offset={0.2} darkness={0.6} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
