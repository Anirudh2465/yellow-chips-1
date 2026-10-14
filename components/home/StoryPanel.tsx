'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function StoryPanel() {
  return (
    <section id="story-panel" style={{ height:'100vh', display:'flex', alignItems:'center', justifyContent:'flex-start', padding:'0 clamp(1rem,4vw,4rem)', pointerEvents:'none' }}>
      <motion.div initial={{ opacity:0, x:-60 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.8 }} className="glass-panel" style={{ maxWidth:'520px', padding:'clamp(1.5rem,3vw,2.5rem)', pointerEvents:'all' }}>
        <div style={{ color:'var(--brand-yellow)', fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.75rem', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'12px' }}>🌾 Our Story</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(1.8rem,3.5vw,2.6rem)', color:'var(--white)', marginBottom:'20px' }}>
          Born in <span style={{ color:'var(--brand-yellow)' }}>Kalpathy</span>,<br />Kerala&apos;s Living Heritage.
        </h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.95rem', color:'rgba(255,255,255,0.8)', lineHeight:1.8, marginBottom:'16px' }}>
          In 2017, deep in the Agraharam lanes of Kalpathy — one of Kerala&apos;s oldest and most storied Brahmin settlements — The Yellow Chips was born. Not as a business, but as a mission: to preserve the authentic taste of traditional Kerala snacks made in pure coconut oil.
        </p>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.95rem', color:'rgba(255,255,255,0.8)', lineHeight:1.8, marginBottom:'28px' }}>
          Every chip starts with Nendran bananas from Wayanad&apos;s highland farms, spices from Idukki, and coconut oil cold-pressed in our own Palakkad mill. No shortcuts. No preservatives. Just the real thing.
        </p>
        <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
          {['Zero Preservatives','No Palm Oil','100% Coconut Oil','Farm to Pack'].map(v=>(
            <span key={v} style={{ background:'rgba(255,222,0,0.15)', border:'1px solid rgba(255,222,0,0.3)', color:'var(--brand-yellow)', borderRadius:'100px', padding:'5px 14px', fontFamily:'var(--font-display)', fontWeight:600, fontSize:'0.75rem', letterSpacing:'0.04em' }}>{v}</span>
          ))}
        </div>
        <Link href="/about" id="story-read-more" style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginTop:'24px', color:'var(--white)', fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', textDecoration:'none', borderBottom:'2px solid var(--brand-red)', paddingBottom:'2px' }}>
          Read Our Full Story
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </motion.div>
    </section>
  );
}
