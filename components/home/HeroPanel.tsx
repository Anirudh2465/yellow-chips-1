'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function HeroPanel() {
  return (
    <section
      id="hero-panel"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1.5rem',
        textAlign: 'center',
        pointerEvents: 'none', // let canvas receive scroll events
        position: 'relative',
      }}
    >
      {/* Tagline */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          display: 'inline-block',
          background: 'var(--brand-yellow)',
          color: 'var(--charcoal)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '6px 18px',
          borderRadius: '100px',
          marginBottom: '20px',
        }}
      >
        🌿 Straight from Kalpathy, Kerala
      </motion.div>

      {/* Headline */}
      <motion.h1
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(2.8rem, 7vw, 6rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--white)',
          marginBottom: '16px',
          textShadow: '0 4px 30px rgba(0,0,0,0.6)',
          maxWidth: '900px',
        }}
      >
        Pure Kerala.{' '}
        <span style={{ color: 'var(--brand-yellow)' }}>Every Chip.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '40px',
          maxWidth: '560px',
          textShadow: '0 2px 12px rgba(0,0,0,0.5)',
        }}
      >
        Handcrafted in coconut oil. Zero preservatives.
        <br />Since 2017, the taste of Kerala&apos;s Agraharam tradition.
      </motion.p>

      {/* CTAs */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          pointerEvents: 'all',
        }}
      >
        <Link href="/shop" id="hero-shop-cta" className="btn btn-primary animate-pulse-glow">
          Shop Now
        </Link>
        <Link href="/franchise" id="hero-franchise-cta" className="btn btn-outline">
          Be a Franchise Partner
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Scroll to journey through Kerala
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
