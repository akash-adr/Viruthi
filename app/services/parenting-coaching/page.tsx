'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

function FadeUp({ children, delay = 0, className = '', style = {} }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE }}
      style={{
        fontFamily: 'var(--font-satoshi)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: '#999999',
        marginBottom: '28px',
        display: 'block',
      }}
    >
      {children}
    </motion.p>
  );
}

function RedButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '18px 40px',
        background: hovered ? '#A0291E' : '#C0392B',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        fontFamily: 'var(--font-satoshi)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(192,57,43,0.35)' : '0 4px 16px rgba(192,57,43,0.2)',
      }}
    >
      {children}
      <span style={{ fontSize: '14px', transition: 'transform 0.3s ease', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}>→</span>
    </button>
  );
}



export default function ParentingCoachingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "What exactly do I get in this program?",
      a: "A fully personalised 2-month 1:1 coaching experience covering positive discipline, screen time systems, and early money habits, built around your specific child and family. You'll get regular coaching sessions, practical assignments between sessions, and a personalised family playbook by the end."
    },
    {
      q: "My child is very young / a teenager, is this still relevant?",
      a: "Yes. The principles of positive discipline, screen time boundaries, and money habits apply across ages, what changes is how we apply them. We tailor the approach to your child's actual developmental stage."
    },
    {
      q: "What if my partner and I don't agree on parenting approaches?",
      a: "That's common, and it's exactly the kind of thing we work through together. Getting both caregivers aligned is often part of what makes the discipline and screen time systems actually hold."
    },
    {
      q: "What happens after I book the Parenting Clarity Call?",
      a: "We get on a call, understand what's actually happening in your household right now, and walk you through what a personalised approach would look like for your child. If it's a good fit, we'll show you exactly how the 2 months would work."
    },
    {
      q: "Is this therapy for my child?",
      a: "No. This is coaching for you, the parent, focused on building practical systems and confidence in how you parent. It's not clinical treatment for a child, and if we notice something that needs that kind of support, we'll always tell you directly."
    }
  ];

  return (
    <main style={{ background: '#FFFFFF', color: '#111111', overflowX: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .s1-max { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 1024px) { .s1-max { padding: 0 32px; } }
        @media (max-width: 768px)  { .s1-max { padding: 0 24px; } }
        @media (max-width: 480px)  { .s1-max { padding: 0 20px; } }

        /* Section vertical rhythm */
        .s1-sec { padding: 160px 0; }
        @media (max-width: 1024px) { .s1-sec { padding: 120px 0; } }
        @media (max-width: 768px)  { .s1-sec { padding: 80px 0; } }
        @media (max-width: 480px)  { .s1-sec { padding: 60px 0; } }

        /* Two-column split grids */
        .s1-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .s1-2col { grid-template-columns: 1fr; gap: 48px; }
          .s1-2col-img-first { order: -1; }
        }

        .s1-hero-trust span {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-satoshi); font-size: 11px; font-weight: 500;
          letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.85);
        }
        .s1-hero-trust span::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.6); display: inline-block; }

        .s1-stat-card { background: #FFFFFF; border: 1px solid #EAEAEA; border-radius: 16px; padding: clamp(28px,4vw,48px) clamp(24px,3vw,40px); }
        .s1-stat-num { font-size: clamp(48px,6vw,80px); font-weight: 300; line-height: 1; color: #111111; margin-bottom: 12px; }

        .s1-pillar-card {
          background: #FFFFFF; border: 1px solid #EAEAEA; border-radius: 16px;
          padding: clamp(28px,4vw,48px) clamp(24px,3vw,40px); transition: all 0.4s ease; position: relative; overflow: hidden; height: 100%; display: flex; flex-direction: column;
        }
        .s1-pillar-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: #C0392B; transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .s1-pillar-card:hover::before { transform: scaleX(1); }
        .s1-pillar-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.06); transform: translateY(-4px); }

        .s1-testimonial-card {
          background: #FFFFFF; border: 1px solid #EAEAEA; border-radius: 16px;
          padding: clamp(28px,4vw,48px) clamp(24px,3vw,40px);
          transition: box-shadow 0.3s ease;
        }
        .s1-testimonial-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.06); }

        .s1-faq-item { border-bottom: 1px solid #EAEAEA; }
        .s1-faq-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 24px 0; background: none; border: none; cursor: pointer;
          font-family: var(--font-satoshi); font-size: clamp(15px,1.5vw,17px); font-weight: 500; color: #111111;
          text-align: left; transition: color 0.2s ease;
        }
        .s1-faq-btn:hover { color: #C0392B; }
        .s1-faq-icon { width: 32px; height: 32px; border-radius: 50%; border: 1px solid #EAEAEA; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.3s ease; }
        .s1-faq-btn:hover .s1-faq-icon { border-color: #C0392B; }

        .s1-timeline-line { position: absolute; left: 23px; top: 0; bottom: 0; width: 1px; background: rgba(255,255,255,0.1); }
        .s1-timeline-dot { width: 46px; height: 46px; border-radius: 50%; background: #111111; display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative; z-index: 1; }

        .s1-problem-card {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px; padding: clamp(24px,3vw,36px) clamp(20px,2.5vw,32px); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column;
        }
        .s1-problem-card:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.18); }

        .premium-quote-box {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 32px 40px;
          margin-bottom: 40px;
          position: relative;
        }

        /* Grid overrides for tablet */
        @media (max-width: 1024px) {
          .s1-pillars-grid  { grid-template-columns: repeat(2, 1fr) !important; }
          .s1-testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        /* Grid overrides for mobile */
        @media (max-width: 768px) {
          .s1-counsellor-grid  { grid-template-columns: 1fr !important; }
          .s1-stats-grid       { grid-template-columns: 1fr !important; }
          .s1-pillars-grid     { grid-template-columns: 1fr !important; }
          .s1-testimonials-grid{ grid-template-columns: 1fr !important; }
          .s1-problems-grid    { grid-template-columns: 1fr !important; }
          .s1-faq-grid         { grid-template-columns: 1fr !important; }
          .s1-process-grid     { grid-template-columns: 1fr !important; }
          .s1-who-grid         { grid-template-columns: 1fr !important; }
          .s1-faq-btn          { font-size: 15px; }
          .premium-quote-box   { padding: 24px; }
        }
        @media (max-width: 480px) {
          .s1-problems-grid { grid-template-columns: 1fr !important; }
          .s1-timeline-dot  { width: 36px; height: 36px; }
          .s1-timeline-line { left: 18px; }
        }

        /* Hero hero content mobile */
        .s1-hero-trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
        .s1-hero-trust-item { padding: 0 clamp(12px,2vw,24px); border-left: 1px solid rgba(255,255,255,0.1); }
        .s1-hero-trust-item.first { border-left: none; }

        @media (max-width: 768px) {
          .s1-hero-content h1 { font-size: clamp(44px, 12vw, 72px) !important; }
          .s1-hero-trust { gap: 16px !important; }
          .s1-hero-trust-grid { grid-template-columns: 1fr !important; gap: 24px; padding-top: 32px !important; padding-bottom: 32px !important; }
          .s1-hero-trust-item { border-left: none !important; padding: 0 !important; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px !important; }
          .s1-hero-trust-item.first { border-top: none !important; padding-top: 0 !important; }
        }
        @media (max-width: 480px) {
          .s1-hero-content h1 { font-size: 13vw !important; }
          .s1-hero-trust { flex-direction: column; gap: 8px !important; }
        }
      `}} />
      
      {/* ── SECTION 1: HERO ── */}
      <div ref={heroRef} style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Background image + parallax */}
        <motion.div style={{ position: 'absolute', inset: 0, y: heroImgY }}>
          <Image src="/service3/hero.jpeg" alt="Parenting Coaching" fill priority style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </motion.div>
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 100%)' }} />

        {/* ── MAIN CONTENT — flows naturally ── */}
        <motion.div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(100px,13vh,140px) clamp(24px,6vw,100px) 48px', opacity: heroOpacity }}>

          {/* Eyebrow */}
          <FadeUp delay={0.05}>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
              PRIVATE 1:1 ADVISORY PROGRAM
            </p>
          </FadeUp>

          {/* H1 */}
          <FadeUp delay={0.15}>
            <h1
              className={cormorant.className}
              style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 400, lineHeight: 1.0, color: '#FFFFFF', letterSpacing: '-0.02em', maxWidth: '640px', marginBottom: '36px' }}
            >
              Parenting,<br />
              Without the{' '}
              <span className={cormorant.className} style={{ fontStyle: 'italic', color: '#D2B48C' }}>Guilt</span><br />
              or the Guesswork
            </h1>
          </FadeUp>

          {/* Quote box */}
          <FadeUp delay={0.3}>
            <div style={{
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
              borderRadius: '14px', padding: '24px 28px', maxWidth: '540px', marginBottom: '10px',
            }}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: 'clamp(13px, 1.3vw, 16px)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>
                &quot;You love your child fiercely... but every day feels like a negotiation, screens have become the easiest babysitter, and you&apos;re terrified you&apos;re either too strict or too soft, with no idea which.&quot;
              </p>
            </div>
          </FadeUp>

          {/* THIS FIXES THAT */}
          <FadeUp delay={0.35}>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', color: '#D2B48C', textTransform: 'uppercase', maxWidth: '540px', textAlign: 'right', marginBottom: '28px' }}>
              THIS FIXES THAT ↓
            </p>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.45}>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '500px', marginBottom: '32px' }}>
              A 2-Month 1:1 Parenting Coaching Program for parents who are tired of yelling, negotiating, and giving in, and want a calmer, more consistent way to raise their child.
            </p>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.55}>
            <RedButton onClick={scrollToContact}>BOOK YOUR PARENTING CLARITY CALL</RedButton>
          </FadeUp>
        </motion.div>

        {/* ── TRUST PILLARS — naturally at the bottom ── */}
        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.12)', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
          <FadeUp delay={0.7}>
            <div className="s1-hero-trust-grid" style={{ padding: 'clamp(20px,2.5vh,28px) clamp(24px,6vw,100px)' }}>
              {[
                { label: 'PRIVATE 1:1 ACCESS', desc: "Every session is 100% focused on your child's specific developmental temperament." },
                { label: 'COORDINATED COACHING', desc: 'We align both caregivers, partners, and grandparents to remove mixed signals.' },
                { label: 'FAMILY PLAYBOOK', desc: 'Receive a custom blueprint of your rules, limits, and values to hold long-term.' },
              ].map((item, i) => (
                <div key={i} className={`s1-hero-trust-item ${i === 0 ? 'first' : ''}`}>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: '#D2B48C', textTransform: 'uppercase', marginBottom: '6px' }}>{item.label}</p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '100px', right: 'clamp(24px,4vw,60px)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
          <div style={{ position: 'relative', width: '1px', height: '48px', background: 'rgba(255,255,255,0.12)', overflow: 'hidden' }}>
            <motion.div animate={{ y: ['-100%', '100%'] }} transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.2 }} style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '50%', background: 'rgba(255,255,255,0.7)' }} />
          </div>
        </div>
      </div>

      {/* ── SECTION 2: PHILOSOPHY (BLACK) ── */}
      <section className="s1-sec" style={{ background: '#111111' }}>
        <div className="s1-max">
          <div className="s1-2col">
            <FadeUp>
              <SectionLabel><span style={{ color: 'rgba(255,255,255,0.4)' }}>THE ADVISORY PARADIGM</span></SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.15, color: '#FFFFFF', marginBottom: '32px' }}>
                We don&apos;t hand you a parenting book and wish you luck like generic advice.
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', fontStyle: 'italic', fontWeight: 300, color: '#D2B48C', lineHeight: 1.6, marginBottom: '48px' }}>
                It&apos;s 1:1 coaching built entirely around your child and your family.
              </p>
              
              <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.1)', padding: '16px 24px', borderRadius: '8px' }}>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                  01 // PRIVATE CONSULTANCY • CUSTOM SYSTEMS ONLY
                </p>
              </div>
            </FadeUp>
            
            <div className="s1-problems-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
              <FadeUp delay={0.1}>
                <h3 className={cormorant.className} style={{ fontSize: '32px', fontWeight: 400, color: '#FFFFFF', marginBottom: '24px', fontStyle: 'italic' }}>
                  WHERE WE SIT WITH YOU AND BUILD
                </h3>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <div className="s1-problem-card">
                  <h4 style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '12px' }}>YOUR DISCIPLINE APPROACH</h4>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontStyle: 'italic', color: '#D2B48C', marginBottom: '8px' }}>— rooted in positive discipline</p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>so you can set limits without yelling, and without giving in either.</p>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.3}>
                <div className="s1-problem-card">
                  <h4 style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '12px' }}>YOUR SCREEN TIME SYSTEM</h4>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontStyle: 'italic', color: '#D2B48C', marginBottom: '8px' }}>— rooted in realistic, sustainable boundaries</p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>that actually hold, instead of a rule you abandon by the second week.</p>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.4}>
                <div className="s1-problem-card">
                  <h4 style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '12px' }}>YOUR PARENTING CONFIDENCE</h4>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontStyle: 'italic', color: '#D2B48C', marginBottom: '8px' }}>— rooted in internalizing your own authority</p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>so you stop second-guessing every decision and start trusting your own judgment again.</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: REAL TALK ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <FadeUp style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
            <SectionLabel>HEY, REAL TALK...</SectionLabel>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 6vw, 64px)', fontWeight: 400, color: '#111111', lineHeight: 1.15 }}>
              You ever feel like you&apos;re trying everything, but parenting still feels like constant conflict?
            </h2>
          </FadeUp>

          <div className="s1-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '80px' }}>
            {[
              { num: '01', desc: "You set a rule, but you're the one who ends up exhausted enforcing it." },
              { num: '02', desc: "You take the screen away, but the meltdown that follows makes you wonder if it's even worth it." },
              { num: '03', desc: "You say no to one more toy or treat, but you're not sure if you're teaching value or just being the bad guy." },
              { num: '04', desc: "You're consistent some days, but other days you give in just to get through dinner." }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ padding: '40px', background: '#F9F9F9', borderRadius: '16px', border: '1px solid #EAEAEA', height: '100%' }}>
                  <span className={cormorant.className} style={{ fontSize: '48px', fontWeight: 300, color: '#A21C1C', display: 'block', marginBottom: '24px' }}>{item.num}</span>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', fontWeight: 400, color: '#333333', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
              {["You've tried sticker charts.", "You've tried timers.", "You've tried \"just being firmer.\""].map((box, i) => (
                <div key={i} style={{ border: '1px solid #EAEAEA', padding: '16px 32px', borderRadius: '8px', color: '#666666', fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 500 }}>
                  {box}
                </div>
              ))}
            </div>

            <div style={{ background: '#111111', color: '#FFFFFF', padding: '64px', borderRadius: '24px', maxWidth: '900px', margin: '0 auto' }}>
              <h3 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.2 }}>
                But nothing really sticks, <br/>because the problem isn&apos;t your effort.
              </h3>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                It&apos;s that you don&apos;t have a system that&apos;s actually built for your specific child.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '32px', borderTop: '1px solid #EAEAEA', paddingTop: '64px' }}>
            <FadeUp delay={0.1}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.7 }}>
                Your discipline changes depending on how tired you are, not on a consistent approach.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.7 }}>
                Your screen time rules exist in your head, not as something your child actually understands.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.7 }}>
                Your child&apos;s relationship with money is being shaped by default, not by anything you&apos;re intentionally teaching.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.7 }}>
                And your own confidence keeps shrinking every time something doesn&apos;t go the way the book said it would.
              </p>
            </FadeUp>
          </div>
          
          <FadeUp delay={0.5} style={{ textAlign: 'center', marginTop: '80px' }}>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#A21C1C', textTransform: 'uppercase', marginBottom: '24px' }}>
              LET&apos;S FIX ALL THREE.
            </p>
            <h3 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 400, color: '#111111', lineHeight: 1.2 }}>
              So parenting feels like something you&apos;re equipped for,<br/>not something you&apos;re surviving.
            </h3>
          </FadeUp>
        </div>
      </section>

      {/* ── SECTION 4: APPROACH (BLACK) ── */}
      <section className="s1-sec" style={{ background: '#111111' }}>
        <div className="s1-max">
          <FadeUp style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
            <SectionLabel><span style={{ color: 'rgba(255,255,255,0.4)' }}>OUR APPROACH TO PARENTING COACHING</span></SectionLabel>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '40px' }}>
              We believe most parents aren&apos;t failing, they&apos;re just operating without a system that fits their actual child. Generic parenting advice assumes every kid responds the same way to the same approach. They don&apos;t.
            </p>
            <blockquote className={cormorant.className} style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontStyle: 'italic', fontWeight: 400, color: '#D2B48C', lineHeight: 1.3, borderLeft: '3px solid #C0392B', paddingLeft: '32px', textAlign: 'left', margin: '0 auto' }}>
              We believe in sitting with you, understanding your child and your family&apos;s specific dynamics, and building an approach that actually works for both of you.
            </blockquote>
          </FadeUp>

          <FadeUp style={{ background: '#FFFFFF', padding: '64px', borderRadius: '24px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: '#A21C1C', textTransform: 'uppercase', marginBottom: '24px' }}>
              THE CRITICAL BLINDSPOT
            </p>
            <h3 className={cormorant.className} style={{ fontSize: '36px', fontWeight: 400, color: '#111111', marginBottom: '24px', lineHeight: 1.2 }}>
              The #1 reason parents stay stuck in the same cycle?
            </h3>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', fontWeight: 400, color: '#444444', lineHeight: 1.6 }}>
              They keep reacting to behaviour in the moment instead of building a system ahead of it.
            </p>
          </FadeUp>

          <FadeUp style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
            <SectionLabel><span style={{ color: 'rgba(255,255,255,0.4)' }}>THE THREE INTEGRAL PILLARS</span></SectionLabel>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '24px' }}>
              You don&apos;t need 10 more parenting hacks, another app, or another expert telling you to &quot;stay calm&quot; without explaining how.
            </p>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.7 }}>
              You need three things working together:
            </p>
          </FadeUp>

          <div className="s1-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '80px' }}>
            {[
              {
                title: 'Positive Discipline',
                desc: "A positive discipline approach that's actually consistent, so your child knows what to expect and you're not improvising every time."
              },
              {
                title: 'Screen Time',
                desc: "A realistic screen time system built around your family's actual life, not an arbitrary number you saw online."
              },
              {
                title: 'Healthy Money',
                desc: "Early money habits that build a healthy relationship with spending, saving, and value, so debt-driven thinking doesn't take root by default."
              }
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="s1-pillar-card" style={{ background: '#FFFFFF', border: 'none', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 className={cormorant.className} style={{ fontSize: '28px', fontWeight: 500, color: '#111111', marginBottom: '16px' }}>{card.title}</h3>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '24px' }}>
              When these three things work together, parenting stops feeling like constant damage control and starts feeling like something you&apos;re actually steering.
            </p>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '22px', fontStyle: 'italic', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.7, marginBottom: '32px' }}>
              That&apos;s the shift most parents never make.
            </p>
            <h3 className={cormorant.className} style={{ fontSize: '36px', fontWeight: 600, letterSpacing: '0.1em', color: '#C0392B' }}>
              YOU WILL.
            </h3>
          </FadeUp>
        </div>
      </section>

      {/* ── SECTION 5: INTRODUCING (WHITE) ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <div className="s1-2col">
            <FadeUp style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden' }}>
              <Image
                src="/service3/Create_a_premium_3D_clay-style_202606292052.jpeg"
                alt="Introducing Parenting Coaching"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FadeUp>

            <FadeUp delay={0.2}>
              <SectionLabel>INTRODUCING</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, color: '#111111', marginBottom: '32px', lineHeight: 1.1 }}>
                PARENTING COACHING
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#555555', lineHeight: 1.8, marginBottom: '48px' }}>
                A 2-month 1:1 coaching program to help parents build a consistent positive discipline approach, a screen time system that actually holds, and healthy early money habits, so parenting feels intentional instead of reactive.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#111111', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Positive Discipline</h4>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.6 }}>We help you set limits with warmth and consistency, without yelling and without giving in, so your child learns boundaries through connection, not fear or constant negotiation.</p>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#111111', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Screen Time System</h4>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.6 }}>We build a screen time approach that fits your family&apos;s actual routine, realistic enough to hold long-term, with tools for the transitions and meltdowns that come with enforcing it.</p>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#111111', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Healthy Money Habits</h4>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.6 }}>We help you introduce age-appropriate money concepts, earning, saving, waiting, and value, so your child starts building a relationship with money that won&apos;t default into debt-driven habits later.</p>
                </div>
              </div>

              <RedButton onClick={scrollToContact}>BOOK YOUR PARENTING CLARITY CALL</RedButton>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TIMELINE (BLACK) ── */}
      <section className="s1-sec" style={{ 
        position: 'relative',
        backgroundImage: 'url("/service3/Create_a_premium_3D_clay-style_timeline.jpeg")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,17,0.85)' }} />
        
        <div className="s1-max" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 400, color: '#FFFFFF', marginBottom: '24px' }}>
              Here&apos;s Exactly How We&apos;ll Build This Together...
            </h2>
          </FadeUp>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            <div className="s1-timeline-line"></div>
            
            {[
              { week: 'Week 01', title: 'Family Assessment', desc: "We start with a clear picture of your child's temperament, your current discipline approach, screen habits, and what's actually triggering the daily friction. This shapes exactly what your 2 months need to prioritise." },
              { week: 'Week 02', title: 'Building Your Discipline Foundation', desc: "We work through the principles of positive discipline specific to your child's age and temperament, how to set a limit calmly, follow through consistently, and repair after a hard moment instead of carrying guilt from it." },
              { week: 'Week 03', title: 'Designing Your Screen Time Boundaries', desc: "We map out screen time rules that fit your actual household, including how to introduce them without a battle, and what to do when the boundary gets tested, because it will." },
              { week: 'Week 04', title: 'Practising Through Real Situations', desc: "Using real moments from your week, the meltdown at the store, the screen time standoff, the bedtime negotiation, we work through exactly how to respond differently next time." },
              { week: 'Week 05', title: 'Introducing Money Concepts', desc: "We build an age-appropriate approach to teaching your child about earning, saving, and waiting for things they want, so healthy money habits start forming before debt-driven thinking has a chance to." },
              { week: 'Week 06', title: 'Strengthening Consistency Across Caregivers', desc: "If multiple caregivers are involved, grandparents, partners, household help, we work through how to align everyone on the same approach, so your child isn't getting mixed signals." },
              { week: 'Week 07', title: 'Your Family\'s Parenting Playbook', desc: "Everything gets woven into a simple, personalised playbook, your discipline approach, your screen time rules, your money-teaching rhythm, so you have something to return to long after the 2 months end." },
            ].map((step, i) => (
              <FadeUp key={i} delay={0.1} style={{ position: 'relative', paddingLeft: '80px', marginBottom: '64px' }}>
                <div className="s1-timeline-dot" style={{ position: 'absolute', left: '0', top: '0' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#A21C1C' }}></span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', color: '#D2B48C', textTransform: 'uppercase', marginBottom: '8px' }}>{step.week}</h4>
                <h3 className={cormorant.className} style={{ fontSize: '28px', fontWeight: 500, color: '#FFFFFF', marginBottom: '16px' }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{step.desc}</p>
              </FadeUp>
            ))}
          </div>
          
          <FadeUp style={{ textAlign: 'center', marginTop: '40px' }}>
            <RedButton onClick={scrollToContact}>BOOK YOUR PARENTING CLARITY CALL</RedButton>
          </FadeUp>
        </div>
      </section>

      {/* ── SECTION 7: THIS IS FOR YOU IF (WHITE) ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <div className="s1-2col">
            <FadeUp style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden' }}>
              <Image
                src="/service3/Create_a_premium_3D_clay-style_202606292053.jpeg"
                alt="This is for you if"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FadeUp>

            <FadeUp delay={0.2}>
              <SectionLabel>THIS IS FOR YOU IF:</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 400, color: '#111111', marginBottom: '40px', lineHeight: 1.15 }}>
                THIS IS FOR YOU IF:
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
                {[
                  "You're exhausted by daily power struggles over screens, chores, or basic requests.",
                  "You're not sure if you're too strict or too soft, and you switch between both depending on how tired you are.",
                  "Your child is glued to screens and every attempt to set a limit turns into a meltdown.",
                  "You want to raise a child who understands the value of money, not one who expects everything instantly.",
                  "You want consistency, not another technique you abandon after a hard week."
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#A21C1C', fontSize: '20px', lineHeight: 1.2 }}>✓</span>
                    <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', color: '#111111', marginBottom: '24px' }}>
                  👇 BOOK YOUR PARENTING CLARITY CALL HERE 👇
                </p>
                <RedButton onClick={scrollToContact}>BOOK YOUR PARENTING CLARITY CALL</RedButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ & FINAL CTA (WHITE/LIGHT) ── */}
      <section className="s1-sec" style={{ background: '#F7F7F5' }}>
        <div className="s1-max">
          <FadeUp style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, color: '#111111' }}>
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <div style={{ maxWidth: '800px', margin: '0 auto 120px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="s1-faq-item">
                <button
                  className="s1-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{ paddingRight: '24px', lineHeight: 1.4 }}>{faq.q}</span>
                  <div className="s1-faq-icon">
                    <span style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s ease', fontSize: '18px', fontWeight: 300 }}>+</span>
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  style={{ overflow: 'hidden' }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.8, paddingBottom: '32px' }}>
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          <div id="contact" style={{ maxWidth: '800px', margin: '0 auto', background: '#FFFFFF', padding: '64px', borderRadius: '24px', textAlign: 'center', boxShadow: '0 24px 64px rgba(0,0,0,0.04)', border: '1px solid #EAEAEA' }}>
            <FadeUp>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#111111', marginBottom: '24px' }}>
                Still second-guessing your routine?
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#555555', lineHeight: 1.8, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                The quickest way to know if this 2-month system will fit your household is a direct private conversation. Let&apos;s map your family&apos;s dynamic.
              </p>
              <RedButton onClick={() => alert("Booking flow coming soon")}>BOOK YOUR PARENTING CLARITY CALL</RedButton>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
