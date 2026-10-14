'use client';

import { motion } from 'framer-motion';

const INGREDIENTS = [
  { emoji: '🥥', name: 'Pure Coconut Oil',    fact: '100% cold-pressed' },
  { emoji: '🍌', name: 'Nendran Banana',       fact: 'Wayanad-grown' },
  { emoji: '🌿', name: 'Fresh Curry Leaves',   fact: 'No artificial flavour' },
  { emoji: '🧂', name: 'Himalayan Rock Salt',  fact: 'No iodised salt' },
  { emoji: '🌶️', name: 'Kaayam & Spices',      fact: 'Traditional recipe' },
  { emoji: '🌴', name: 'Kerala Coconut',       fact: 'Farm-to-pack' },
];

const STATS = [
  { value: '100%', label: 'Coconut Oil' },
  { value: '0',    label: 'Preservatives' },
  { value: '2017', label: 'Founded' },
  { value: '50+',  label: 'Products' },
];

const marqueeItems = [...INGREDIENTS, ...INGREDIENTS]; // duplicate for seamless loop

export default function IngredientsPanel() {
  return (
    <section
      id="ingredients-panel"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1.5rem',
        pointerEvents: 'none',
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          color: 'var(--brand-yellow)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '0.78rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        What Goes In
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: 'var(--white)',
          textAlign: 'center',
          marginBottom: '48px',
          textShadow: '0 4px 20px rgba(0,0,0,0.6)',
        }}
      >
        Real Ingredients.<br />
        <span style={{ color: 'var(--brand-yellow)' }}>Nothing Hidden.</span>
      </motion.h2>

      {/* Marquee strip */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,222,0,0.2)',
          borderRadius: '100px',
          padding: '16px 0',
          marginBottom: '48px',
        }}
      >
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0 32px',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>{item.emoji}</span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: 'var(--white)',
                  letterSpacing: '0.03em',
                }}
              >
                {item.name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'rgba(255,222,0,0.7)',
                }}
              >
                — {item.fact}
              </span>
              <span style={{ color: 'var(--brand-red)', margin: '0 8px', fontSize: '1.2rem' }}>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          display: 'flex',
          gap: 'clamp(24px, 6vw, 60px)',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              padding: '20px 28px',
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: 'var(--brand-yellow)',
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.7)',
                marginTop: '6px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
