'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TIERS = [
  { id:'kiosk', name:'Kiosk', sqft:'100+ sq.ft', invest:'Starting ₹5L', ring:40, border:'var(--brand-red)', features:['Prime location support','Full branding kit','Initial stock supply','Training included'] },
  { id:'smart-store', name:'Smart Store', sqft:'200–400 sq.ft', invest:'Starting ₹15L', ring:65, border:'var(--brand-yellow)', popular:true, features:['Everything in Kiosk','Expanded product range','Marketing support','Monthly performance review'] },
  { id:'flagship', name:'Flagship', sqft:'400–800 sq.ft', invest:'Starting ₹30L', ring:85, border:'rgba(255,255,255,0.5)', features:['Everything in Smart Store','Cafe integration option','Dedicated relationship manager','Co-branded campaigns'] },
];

export default function FranchisePanel() {
  return (
    <section id="franchise-panel" style={{ height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 clamp(1rem,4vw,3rem)', pointerEvents:'none' }}>
      <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8 }} className="glass-panel" style={{ width:'100%', maxWidth:'900px', padding:'clamp(1.5rem,3vw,2.5rem)', pointerEvents:'all' }}>
        <div style={{ textAlign:'center', marginBottom:'32px' }}>
          <div style={{ color:'var(--brand-yellow)', fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.75rem', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'10px' }}>🏪 The Yellow Chips Network</div>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(1.8rem,3.5vw,2.8rem)', color:'var(--white)', margin:0 }}>
            Join the <span style={{ color:'var(--brand-yellow)' }}>Yellow Chips</span> Family
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px', marginBottom:'28px' }}>
          {TIERS.map((tier,i)=>(
            <motion.div key={tier.id} id={`franchise-tier-${tier.id}`} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.5 }}
              style={{ position:'relative', background:'rgba(255,255,255,0.05)', border:`2px solid ${tier.border}`, borderRadius:'16px', padding:'24px 18px', textAlign:'center' }}>
              {tier.popular && (
                <span style={{ position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)', background:'var(--brand-yellow)', color:'var(--charcoal)', fontFamily:'var(--font-display)', fontWeight:800, fontSize:'0.6rem', letterSpacing:'0.1em', textTransform:'uppercase', padding:'4px 14px', borderRadius:'100px' }}>POPULAR</span>
              )}
              {/* sqft ring viz */}
              <div style={{ position:'relative', width:`${tier.ring * 1.3}px`, height:`${tier.ring * 1.3}px`, margin:'0 auto 16px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position:'absolute', inset:0, transform:'rotate(-90deg)' }}>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6"/>
                  <circle cx="50" cy="50" r="42" fill="none" stroke={tier.border} strokeWidth="6"
                    strokeDasharray={`${(tier.ring / 100) * 264} 264`} strokeLinecap="round"/>
                </svg>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'0.7rem', color:'var(--white)', textAlign:'center', lineHeight:1.2 }}>{tier.sqft}</span>
              </div>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.15rem', color:'var(--white)', marginBottom:'4px' }}>{tier.name}</div>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'0.95rem', color:'var(--brand-yellow)', marginBottom:'16px' }}>{tier.invest}</div>
              <ul style={{ listStyle:'none', textAlign:'left', display:'flex', flexDirection:'column', gap:'6px' }}>
                {tier.features.map(f=>(
                  <li key={f} style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'rgba(255,255,255,0.75)', display:'flex', alignItems:'flex-start', gap:'6px' }}>
                    <span style={{ color:'var(--brand-yellow)', flexShrink:0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign:'center' }}>
          <Link href="/franchise" id="franchise-apply-cta" className="btn btn-primary">
            Apply for Franchise
          </Link>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.78rem', color:'rgba(255,255,255,0.5)', marginTop:'12px' }}>
            We&apos;ll get back within 48 hours · No commitment to apply
          </p>
        </div>
      </motion.div>
    </section>
  );
}
