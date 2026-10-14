import NavBar from '@/components/layout/NavBar';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Our Story — Born in Kalpathy', description: 'The Yellow Chips story — from Kalpathy, Palakkad, Kerala in 2017. Pure coconut oil, Nendran bananas, zero preservatives.' };
export default function AboutPage() {
  const timeline = [
    { year: '2017', event: 'Founded in Kalpathy, Palakkad — Kerala\'s ancient Agraharam heritage village' },
    { year: '2018', event: 'First production unit in Palakkad. Recipe perfected using Nendran bananas from Wayanad' },
    { year: '2019', event: 'Expanded to Ernakulam (Cochin) production facility' },
    { year: '2020', event: 'Launched D2C online store. Shipped across all Indian states' },
    { year: '2021', event: 'Celebrity endorsements — Malavika Nair, Samskruthy Shenoy, Nimisha Suresh' },
    { year: '2022', event: 'Franchise model launched — first kiosks in Palakkad and Thrissur' },
    { year: '2023', event: '50+ SKUs. 100+ franchise partners across Kerala' },
    { year: '2024', event: 'International shipping to UAE, UK, USA, Australia' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: 'var(--charcoal)', color: 'var(--white)' }}>
      <NavBar />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ color: 'var(--brand-yellow)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>🌾 Since 2017</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--white)' }}>Born in <span style={{ color: 'var(--brand-yellow)' }}>Kalpathy</span></h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.7)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0', lineHeight: 1.8 }}>In the ancient Agraharam lanes of Kalpathy — one of Kerala&apos;s oldest Brahmin settlements — The Yellow Chips was born. Not as a business, but as a mission to preserve authentic Kerala snack-making tradition.</p>
        </div>
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          <div style={{ position: 'absolute', left: '0', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--brand-red), var(--brand-yellow))' }} />
          {timeline.map((t, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: '32px', paddingLeft: '24px' }}>
              <div style={{ position: 'absolute', left: '-39px', top: '4px', width: '16px', height: '16px', borderRadius: '50%', background: i % 2 === 0 ? 'var(--brand-red)' : 'var(--brand-yellow)', border: '3px solid var(--charcoal)' }} />
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--brand-yellow)', marginBottom: '4px' }}>{t.year}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{t.event}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {[['100%','Coconut Oil'],['Zero','Preservatives'],['No','Palm Oil'],['50+','Products']].map(([val, label], i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2rem', color: 'var(--brand-yellow)' }}>{val}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
