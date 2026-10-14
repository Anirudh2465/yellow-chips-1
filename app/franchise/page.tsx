import NavBar from '@/components/layout/NavBar';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Franchise — Join The Yellow Chips Family', description: 'Start a Yellow Chips franchise. Kiosk, Smart Store, or Flagship. Full brand support, training, and supply chain included.' };
export default function FranchisePage() {
  const tiers = [
    { name: 'Kiosk', sqft: '100+ sq.ft', invest: 'Starting ₹5L', ring: 35, color: 'var(--brand-red)', features: ['Prime location support','Full branding kit','Initial stock supply','Training & onboarding','Ongoing menu updates'] },
    { name: 'Smart Store', sqft: '200–400 sq.ft', invest: 'Starting ₹15L', ring: 60, color: 'var(--brand-yellow)', popular: true, features: ['Everything in Kiosk','Expanded product range (30+ SKUs)','Co-branded marketing','Monthly performance review','Area exclusivity option'] },
    { name: 'Flagship', sqft: '400–800 sq.ft', invest: 'Starting ₹30L', ring: 85, color: 'rgba(255,255,255,0.8)', features: ['Everything in Smart Store','Cafe integration','Dedicated relationship manager','National co-branded campaigns','Priority new product launches'] },
  ];
  return (
    <div style={{ minHeight: '100vh', background: 'var(--charcoal)', color: 'var(--white)' }}>
      <NavBar />
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ color: 'var(--brand-yellow)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>🏪 Franchise Opportunity</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--white)' }}>Join the <span style={{ color: 'var(--brand-yellow)' }}>Yellow Chips</span> Family</h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.7)', marginTop: '12px', maxWidth: '560px', margin: '12px auto 0', lineHeight: 1.8 }}>We provide everything — brand identity, supply chain, training, and marketing. You bring the passion for Kerala flavours.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {tiers.map((tier, i) => (
            <div key={i} id={`franchise-tier-${tier.name.toLowerCase().replace(' ', '-')}`} style={{ position: 'relative', background: 'rgba(255,255,255,0.05)', border: `2px solid ${tier.color}`, borderRadius: '20px', padding: '28px 24px' }}>
              {tier.popular && <span style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--brand-yellow)', color: 'var(--charcoal)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: '100px' }}>MOST POPULAR</span>}
              <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100" height="100" viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke={tier.color} strokeWidth="7" strokeDasharray={`${(tier.ring / 100) * 264} 264`} strokeLinecap="round" />
                </svg>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.75rem', color: 'var(--white)', textAlign: 'center', lineHeight: 1.2 }}>{tier.sqft}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--white)', textAlign: 'center', marginBottom: '6px' }}>{tier.name}</h2>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: tier.color, textAlign: 'center', marginBottom: '20px' }}>{tier.invest}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {tier.features.map(f => <li key={f} style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', display: 'flex', gap: '8px' }}><span style={{ color: 'var(--brand-yellow)' }}>✓</span>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '40px', maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.6rem', color: 'var(--white)', marginBottom: '24px' }}>Apply Now</h2>
          <form id="franchise-lead-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[['Full Name','text','Name'],['Phone Number','tel','Phone'],['Email Address','email','Email'],['Target City','text','City']].map(([label, type, id]) => (
              <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor={`franchise-${id}`} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>{label}</label>
                <input id={`franchise-${id}`} type={type} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none' }} />
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="franchise-message" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Message</label>
              <textarea id="franchise-message" rows={4} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }} />
            </div>
            <button id="franchise-submit" type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>Submit Application</button>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>We respond within 48 hours. No commitment required.</p>
          </form>
        </div>
      </main>
    </div>
  );
}
