import NavBar from '@/components/layout/NavBar';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Contact Us', description: 'Get in touch with The Yellow Chips. Franchise queries, product support, wholesale enquiries, or just say hello.' };
export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--charcoal)', color: 'var(--white)' }}>
      <NavBar />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ color: 'var(--brand-yellow)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>📍 Find Us</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--white)' }}>Contact <span style={{ color: 'var(--brand-red)' }}>Yellow Chips</span></h1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
          <div>
            <form id="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="contact-intent" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>I am enquiring about</label>
                <select id="contact-intent" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                  <option value="franchise">Franchise Opportunity</option>
                  <option value="product">Product / Order Query</option>
                  <option value="wholesale">Wholesale / Bulk Order</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {[['Name','text','contact-name'],['Email','email','contact-email'],['Phone','tel','contact-phone']].map(([label, type, id]) => (
                <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor={id} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>{label}</label>
                  <input id={id} type={type} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none' }} />
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="contact-message" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Message</label>
                <textarea id="contact-message" rows={5} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }} />
              </div>
              <button id="contact-submit" type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              { label: 'Registered Office', lines: ['Kalpathy, Palakkad', 'Kerala, India — 678 003'] },
              { label: 'Production — Cochin', lines: ['Ernakulam, Kerala'] },
              { label: 'Production — Palakkad', lines: ['Palakkad, Kerala'] },
            ].map(addr => (
              <div key={addr.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--brand-yellow)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{addr.label}</div>
                {addr.lines.map(l => <div key={l} style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>{l}</div>)}
              </div>
            ))}
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--brand-yellow)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Direct Contact</div>
              {[['📞','+91 98765 43210','tel:+919876543210'],['📧','hello@yellowchips.in','mailto:hello@yellowchips.in'],['💬','WhatsApp Us','https://wa.me/919876543210']].map(([icon, label, href]) => (
                <a key={label} href={href} id={`contact-${label.toLowerCase().replace(/\s+/g,'-')}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '12px' }}>
                  <span>{icon}</span>{label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
