'use client';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  { name:'Malavika Nair',     role:'Film Actor',              quote:'The crunch, the coconut oil, the nostalgia — these chips are pure Kerala in a packet!',                      emoji:'🎬' },
  { name:'Samskruthy Shenoy', role:'Actor & Influencer',      quote:'I grew up eating chips like these in Palakkad. Yellow Chips brings back every bit of that flavour.',         emoji:'⭐' },
  { name:'Nimisha Suresh',    role:'Actor',                   quote:'Zero guilt, maximum taste. The fact that there are no preservatives makes it even more special.',             emoji:'🌟' },
  { name:'Rajan Menon',       role:'Customer, Kochi',         quote:'Ordered 5 packs for Onam and they were gone in a day. My family has never agreed so unanimously on anything.',emoji:'🛒' },
  { name:'Priya Krishnan',    role:'Customer, Bangalore',     quote:'Finally found a Kerala chip brand that actually tastes like home. The jackfruit chips are outstanding.',      emoji:'💛' },
  { name:'Arjun Nair',        role:'Customer, Dubai',         quote:'They ship internationally and the freshness is unbelievable. Worth every paisa.',                            emoji:'✈️' },
];

export default function TestimonialsPanel() {
  return (
    <section id="testimonials-panel" style={{ height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 clamp(1rem,4vw,3rem)', pointerEvents:'none' }}>
      <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ textAlign:'center', marginBottom:'40px' }}>
        <div style={{ color:'var(--brand-yellow)', fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.75rem', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'10px' }}>💬 What People Say</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(2rem,4vw,3rem)', color:'var(--white)', margin:0 }}>
          Loved Across <span style={{ color:'var(--brand-red)' }}>Kerala</span> & Beyond
        </h2>
      </motion.div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'16px', width:'100%', maxWidth:'1100px', pointerEvents:'all' }}>
        {TESTIMONIALS.map((t,i)=>(
          <motion.div key={i} id={`testimonial-${i}`} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.5 }}
            style={{ background:'rgba(0,0,0,0.55)', backdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'24px', display:'flex', flexDirection:'column', gap:'12px' }}>
            <div style={{ fontSize:'1.5rem' }}>{t.emoji}</div>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'0.88rem', color:'rgba(255,255,255,0.88)', lineHeight:1.75, fontStyle:'italic', flex:1 }}>"{t.quote}"</p>
            <div>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--white)' }}>{t.name}</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'var(--brand-yellow)', marginTop:'2px' }}>{t.role}</div>
            </div>
            {/* Star rating */}
            <div style={{ color:'var(--brand-yellow)', fontSize:'0.75rem' }}>★★★★★</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
