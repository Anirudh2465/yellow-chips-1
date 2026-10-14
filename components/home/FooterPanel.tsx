'use client';
import Link from 'next/link';

export default function FooterPanel() {
  return (
    <footer id="footer-panel" style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'4rem clamp(1rem,4vw,4rem)', background:'rgba(0,0,0,0.85)', backdropFilter:'blur(20px)', borderTop:'1px solid rgba(255,222,0,0.1)', pointerEvents:'all' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto', width:'100%' }}>
        {/* Top row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'40px', marginBottom:'48px' }}>
          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
              <div style={{ width:'48px', height:'48px', borderRadius:'50%', background:'var(--brand-red)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.1rem', color:'var(--brand-yellow)' }}>YC</span>
              </div>
              <div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.1rem', color:'var(--white)' }}>The Yellow Chips</div>
                <div style={{ fontFamily:'var(--font-body)', fontSize:'0.65rem', color:'rgba(255,255,255,0.5)', letterSpacing:'0.08em', textTransform:'uppercase' }}>Pure Kerala Snacks</div>
              </div>
            </div>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', color:'rgba(255,255,255,0.6)', lineHeight:1.7, maxWidth:'260px' }}>
              Authentic Kerala snacks handcrafted in pure coconut oil. Zero preservatives. Zero compromises.
            </p>
            <div style={{ display:'flex', gap:'12px', marginTop:'20px' }}>
              {['Instagram','Facebook','YouTube','WhatsApp'].map(s=>(
                <a key={s} href="#" id={`footer-social-${s.toLowerCase()}`} aria-label={s} style={{ width:'36px', height:'36px', borderRadius:'50%', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.7)', textDecoration:'none', fontSize:'0.7rem', fontFamily:'var(--font-display)', fontWeight:700 }}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'0.85rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--brand-yellow)', marginBottom:'16px' }}>Shop</h3>
            {['Banana Chips','Jackfruit Chips','Mixture','Murukku','All Products'].map(l=>(
              <Link key={l} href="/shop" id={`footer-link-${l.toLowerCase().replace(/\s+/g,'-')}`} style={{ display:'block', fontFamily:'var(--font-body)', fontSize:'0.88rem', color:'rgba(255,255,255,0.65)', textDecoration:'none', marginBottom:'10px' }}>{l}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'0.85rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--brand-yellow)', marginBottom:'16px' }}>Company</h3>
            {[['Our Story','/about'],['Franchise','/franchise'],['Cafe Menu','/cafe'],['Contact','/contact'],['Blog','/blog']].map(([l,h])=>(
              <Link key={l} href={h} style={{ display:'block', fontFamily:'var(--font-body)', fontSize:'0.88rem', color:'rgba(255,255,255,0.65)', textDecoration:'none', marginBottom:'10px' }}>{l}</Link>
            ))}
          </div>

          {/* Addresses */}
          <div>
            <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'0.85rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--brand-yellow)', marginBottom:'16px' }}>Find Us</h3>
            <div style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'rgba(255,255,255,0.65)', lineHeight:1.7, marginBottom:'16px' }}>
              <strong style={{ color:'rgba(255,255,255,0.9)' }}>Registered Office</strong><br />
              Kalpathy, Palakkad<br />Kerala, India — 678 003
            </div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'rgba(255,255,255,0.65)', lineHeight:1.7, marginBottom:'16px' }}>
              <strong style={{ color:'rgba(255,255,255,0.9)' }}>Production Units</strong><br />
              Ernakulam (Cochin)<br />Palakkad, Kerala
            </div>
            <a href="tel:+919876543210" style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'0.88rem', color:'var(--brand-yellow)', textDecoration:'none' }}>
              📞 +91 98765 43210
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:'24px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'12px' }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.8rem', color:'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} The Yellow Chips. All rights reserved.
          </p>
          <div style={{ display:'flex', gap:'20px', flexWrap:'wrap' }}>
            {[['Privacy Policy','/policies/privacy'],['Terms','/policies/terms'],['Returns','/policies/returns']].map(([l,h])=>(
              <Link key={l} href={h} style={{ fontFamily:'var(--font-body)', fontSize:'0.8rem', color:'rgba(255,255,255,0.4)', textDecoration:'none' }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
