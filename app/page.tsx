'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import NavBar from '@/components/layout/NavBar';
import ChapterIndicator from '@/components/layout/ChapterIndicator';

// Load the 3D canvas client-side only (no SSR — WebGL requires browser)
const BackwaterCanvas = dynamic(
  () => import('@/components/3d/BackwaterCanvas'),
  {
    ssr: false,
    loading: () => (
      // Static Kerala fallback shown while 3D loads
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(180deg, #0A1A25 0%, #1A3A4A 50%, #0D2B1A 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0,
        }}
      >
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-display)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🛶</div>
          <div style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Setting sail on Kerala backwaters...
          </div>
        </div>
      </div>
    ),
  }
);

export default function HomePage() {
  const [scrollOffset, setScrollOffset] = useState(0);

  // Track scroll for chapter indicator
  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollOffset(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Fixed 3D canvas — lives beneath everything */}
      <BackwaterCanvas />

      {/* Sticky navbar — above canvas */}
      <div style={{ position: 'relative', zIndex: 'var(--z-nav)' as string }}>
        <NavBar cartCount={0} />
      </div>

      {/* Chapter indicator dots — fixed left side */}
      <ChapterIndicator scrollOffset={scrollOffset} />

      {/*
        The scroll height is set by the Canvas ScrollControls internally.
        We add a transparent spacer so the page is the right height
        for the chapter indicator's window.scrollY tracking.
        The actual HTML panels are rendered inside the Canvas ScrollControls Scroll html layer.
      */}
    </>
  );
}
