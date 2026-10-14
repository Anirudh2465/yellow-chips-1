import NavBar from '@/components/layout/NavBar';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop — Authentic Kerala Snacks',
  description: 'Browse The Yellow Chips full range: Nendran banana chips, jackfruit chips, mixture, murukku, and more. 100% coconut oil. Zero preservatives.',
};

export default function ShopPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--charcoal)', color: 'var(--white)' }}>
      <NavBar />
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ color: 'var(--brand-yellow)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>🛒 Our Products</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--white)' }}>
            Pure Kerala <span style={{ color: 'var(--brand-red)' }}>Snacks</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.7)', marginTop: '12px', maxWidth: '500px' }}>
            Every product handcrafted in pure coconut oil. Zero preservatives. Straight from Kalpathy.
          </p>
        </div>
        {/* Product grid — WooCommerce data integration in Phase 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
          {['Nendran Banana Chips','Jackfruit Chips','Kalpathi Mixture','Spicy Banana Chips','Rice Murukku','Pakkavada'].map((name, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ aspectRatio: '1', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(199,0,28,0.2), rgba(255,222,0,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🍟</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--white)', margin: 0 }}>{name}</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Handcrafted in pure coconut oil</p>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--brand-yellow)' }}>₹120–₹350</div>
              <button id={`shop-add-${i}`} className="btn btn-primary" style={{ padding: '10px', fontSize: '0.82rem' }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
