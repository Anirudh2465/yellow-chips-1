'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock data — replace with WooCommerce REST API call
const PRODUCTS = [
  { id: 1, slug: 'nendran-banana-chips',   name: 'Nendran Banana Chips',   desc: 'Classic salted, crispy Nendran chips in pure coconut oil',   price: '₹120–₹350', badge: 'Bestseller' },
  { id: 2, slug: 'jackfruit-chips',         name: 'Jackfruit Chips',         desc: 'Tender jackfruit slices, lightly seasoned',                   price: '₹140–₹400', badge: 'New' },
  { id: 3, slug: 'kalpathi-mixture',        name: 'Kalpathi Mixture',        desc: 'Traditional namkeen mix — crunchy, spiced, addictive',        price: '₹110–₹300', badge: '' },
  { id: 4, slug: 'spicy-banana-chips',      name: 'Spicy Banana Chips',      desc: 'Nendran chips with Kerala chilli — for the bold palate',      price: '₹130–₹360', badge: '' },
  { id: 5, slug: 'murukku',                 name: 'Rice Murukku',            desc: 'Hand-made rice flour murukku, spiral-pressed tradition',      price: '₹100–₹280', badge: '' },
  { id: 6, slug: 'pakkavada',               name: 'Pakkavada',               desc: 'Crispy rice ribbons with cumin and asafoetida',               price: '₹90–₹260',  badge: 'Sale' },
];

const BADGE_COLORS: Record<string, string> = {
  Bestseller: 'var(--brand-red)',
  New:        'var(--kerala-leaf)',
  Sale:       'var(--brand-gold)',
};

export default function ProductsPanel() {
  return (
    <section
      id="products-panel"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '0 clamp(1rem, 4vw, 4rem)',
        pointerEvents: 'none',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '640px',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          pointerEvents: 'all',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              color: 'var(--brand-yellow)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            🛒 Village Market Ghat
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: 'var(--white)',
              margin: 0,
            }}
          >
            Our{' '}
            <span style={{ color: 'var(--brand-red)' }}>Bestsellers</span>
          </h2>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '14px 12px',
                cursor: 'pointer',
                transition: 'all 250ms ease',
                position: 'relative',
              }}
              whileHover={{
                background: 'rgba(255,255,255,0.13)',
                borderColor: 'rgba(255,222,0,0.4)',
                y: -3,
              }}
            >
              {/* Badge */}
              {p.badge && (
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: BADGE_COLORS[p.badge] || 'var(--brand-red)',
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.55rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '2px 7px',
                    borderRadius: '100px',
                  }}
                >
                  {p.badge}
                </span>
              )}

              {/* Product image placeholder */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(199,0,28,0.2), rgba(255,222,0,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '10px',
                }}
              >
                🍟
              </div>

              {/* Name */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  color: 'var(--white)',
                  marginBottom: '4px',
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </div>

              {/* Price */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  color: 'var(--brand-yellow)',
                  marginBottom: '10px',
                }}
              >
                {p.price}
              </div>

              {/* Add to cart */}
              <button
                id={`add-to-cart-${p.slug}`}
                style={{
                  width: '100%',
                  background: 'var(--brand-red)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '7px 0',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 200ms',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = 'var(--brand-red-light)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = 'var(--brand-red)';
                }}
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/shop"
            id="products-view-all"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: 'var(--brand-yellow)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            View All Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
