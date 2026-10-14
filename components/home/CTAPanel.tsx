'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTAPanel() {
  return (
    <section id="cta-panel" style={{ height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 1.5rem', textAlign:'center', pointerEvents:'none' }}>
      <motion.div initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.8 }} style={{ pointerEvents:'all' }}>
        <div style={{ color:'var(--brand-yellow)', fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.75rem', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'16px' }}>🌅 Sunset Dock</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(2.5rem,6vw,4.5rem)', color:'var(--white)', marginBottom:'16px', textShadow:'0 4px 30px rgba(0,0,0,0.6)' }}>
          Ready to taste<br /><span style={{ color:'var(--brand-yellow)' }}>Pure Kerala?</span>
        </h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'clamp(1rem,2vw,1.2rem)', color:'rgba(255,255,255,0.8)', marginBottom:'48px', maxWidth:'500px' }}>
          Order online and get fresh Kerala chips delivered to your door. Or partner with us — franchise opportunities across India.
        </p>
        <div style={{ display:'flex', gap:'16px', flexWrap:'wrap', justifyContent:'center', marginBottom:'32px' }}>
          <Link href="/shop" id="cta-shop" className="btn btn-primary" style={{ padding:'18px 40px', fontSize:'1rem' }}>Shop Products</Link>
          <Link href="/franchise" id="cta-franchise" className="btn btn-secondary" style={{ padding:'18px 40px', fontSize:'1rem' }}>Apply for Franchise</Link>
          <Link href="/contact" id="cta-contact" className="btn btn-outline-white" style={{ padding:'18px 40px', fontSize:'1rem' }}>Contact Us</Link>
        </div>
        <div style={{ display:'flex', gap:'32px', justifyContent:'center', flexWrap:'wrap' }}>
          {[
            { icon:'📞', label:'+91 98765 43210' },
            { icon:'📧', label:'hello@yellowchips.in' },
            { icon:'💬', label:'WhatsApp Us' },
          ].map(c=>(
            <a key={c.label} href="#" style={{ display:'flex', alignItems:'center', gap:'8px', color:'rgba(255,255,255,0.7)', fontFamily:'var(--font-body)', fontSize:'0.9rem', textDecoration:'none' }}>
              <span>{c.icon}</span>{c.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
