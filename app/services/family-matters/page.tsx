'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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

function OutlineButton({ children, onClick, dark = false }: { children: React.ReactNode; onClick?: () => void; dark?: boolean }) {
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
        padding: '17px 38px',
        background: 'transparent',
        color: dark ? (hovered ? '#FFFFFF' : 'rgba(255,255,255,0.7)') : (hovered ? '#A21C1C' : '#111111'),
        border: `1px solid ${dark ? (hovered ? '#FFFFFF' : 'rgba(255,255,255,0.3)') : (hovered ? '#A21C1C' : 'rgba(17,17,17,0.25)')}`,
        borderRadius: '6px',
        fontFamily: 'var(--font-satoshi)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </button>
  );
}

export default function FamilyMattersPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const selectAnswer = (answer: string) => {
    setAnswers({ ...answers, [step]: answer });
    setTimeout(() => {
      handleNext();
    }, 400);
  };

  return (
    <main style={{ background: '#FFFFFF', color: '#111111', overflowX: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .s1-max { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 1024px) { .s1-max { padding: 0 32px; } }
        @media (max-width: 768px)  { .s1-max { padding: 0 24px; } }
        @media (max-width: 480px)  { .s1-max { padding: 0 20px; } }

        .s1-sec { padding: 160px 0; }
        @media (max-width: 1024px) { .s1-sec { padding: 120px 0; } }
        @media (max-width: 768px)  { .s1-sec { padding: 80px 0; } }
        @media (max-width: 480px)  { .s1-sec { padding: 60px 0; } }

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
          letter-spacing: 0.15em; text-transform: uppercase; color: rgba(17,17,17,0.6);
        }
        .s1-hero-trust.dark span { color: rgba(255,255,255,0.7); }
        .s1-hero-trust span::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: rgba(17,17,17,0.3); display: inline-block; }
        .s1-hero-trust.dark span::before { background: rgba(255,255,255,0.3); }
        
        @media (max-width: 768px) {
          .s1-hero-trust { flex-direction: column; align-items: flex-start; gap: 12px; }
          .s1-hero-trust span::before { display: none; }
        }

        .premium-quote-card {
          background: #FFFFFF;
          border: 1px solid #EAEAEA;
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.06);
          position: relative;
        }

        .s1-pillar-card {
          background: #FFFFFF; border: 1px solid #EAEAEA; border-radius: 16px;
          padding: clamp(28px,4vw,48px) clamp(24px,3vw,40px); transition: all 0.4s ease; position: relative; overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .s1-pillar-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: #C0392B; transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .s1-pillar-card:hover::before { transform: scaleX(1); }
        .s1-pillar-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.06); transform: translateY(-4px); }

        .s1-problem-card {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px; padding: clamp(24px,3vw,36px) clamp(20px,2.5vw,32px); transition: all 0.3s ease;
        }
        .s1-problem-card:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.18); }

        .topic-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .topic-card {
          padding: 24px 32px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .topic-card:hover {
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.08);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .topic-card.selected {
          border-color: rgba(210,180,140,0.5);
          background: rgba(210,180,140,0.08);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }
        .topic-radio {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .topic-card.selected .topic-radio {
          border-color: #D2B48C;
        }
        .topic-card.selected .topic-radio::after {
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #D2B48C;
        }

        .stepper-col {
          flex: 0 0 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding: 80px 0;
          background: rgba(255,255,255,0.03);
          border-right: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        @media (max-width: 900px) {
          .stepper-col {
            flex-direction: row;
            justify-content: space-between;
            flex: none;
            width: 100%;
            padding: 40px 5vw;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
        }
        .stepper-line {
          position: absolute;
          top: 80px;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          background: rgba(255,255,255,0.08);
          z-index: 1;
        }
        @media (max-width: 900px) {
          .stepper-line {
            top: 68px;
            left: 5vw;
            right: 5vw;
            bottom: auto;
            width: auto;
            height: 1px;
            transform: none;
          }
        }
        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
          background: transparent;
          padding: 16px 0;
        }
        .step-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-satoshi);
          font-size: 18px;
          font-weight: 500;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 16px;
        }
        .step-circle.active {
          background: #FFFFFF;
          color: #0D0D0D;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 8px 32px rgba(255,255,255,0.15), 0 0 0 4px rgba(255,255,255,0.05);
        }
        .step-circle.completed {
          background: rgba(210,180,140,0.15);
          color: #D2B48C;
          border: 1px solid rgba(210,180,140,0.4);
        }
        .step-circle.inactive {
          background: transparent;
          color: rgba(255,255,255,0.25);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .step-label {
          font-family: var(--font-satoshi);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          text-align: center;
          transition: all 0.4s ease;
          line-height: 1.4;
        }
        .step-label.active { color: #FFFFFF; }
        .step-label.completed { color: #D2B48C; }
        .step-label.inactive { color: rgba(255,255,255,0.2); }
      `}} />

      {/* ── SECTION 1: HERO ── */}
      <div ref={heroRef} style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '700px', overflow: 'hidden' }}>
        <motion.div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/service2/hero.jpeg"
            alt="Family Matters Hero"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
        
        {/* Multi-layer overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.75) 100%)',
        }} />

        {/* Content */}
        <motion.div
          style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}
          className="s1-hero-content"
        >
          <FadeUp delay={0.1}>
            <SectionLabel><span style={{ color: 'rgba(255,255,255,0.7)' }}>Family Matters</span></SectionLabel>
            <h1
              className={cormorant.className}
              style={{ fontSize: 'clamp(56px, 7vw, 90px)', fontWeight: 400, lineHeight: 1.05, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em' }}
            >
              Family Matters
            </h1>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontStyle: 'italic', fontWeight: 400, color: '#D2B48C', marginBottom: '32px' }}>
              Book a Free Legal Advice Call
            </h2>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 300, color: 'rgba(255,255,255,0.8)', marginBottom: '48px', maxWidth: '640px', lineHeight: 1.7, margin: '0 auto 48px' }}>
              Going through a divorce, custody dispute, or family conflict shouldn&apos;t mean navigating it alone, or paying just to find out where you stand.
            </p>
          </FadeUp>
          <FadeUp delay={0.55}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <RedButton onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}>Book Your Free Legal Advice Call</RedButton>
              <OutlineButton dark onClick={() => document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' })}>Learn More</OutlineButton>
            </div>
          </FadeUp>
          <FadeUp delay={0.7}>
            <div className="s1-hero-trust dark" style={{ display: 'flex', gap: '32px', marginTop: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span>100% Confidential</span>
              <span>15-Minute Session</span>
              <span>Expert Legal Team</span>
            </div>
          </FadeUp>
        </motion.div>
        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '9px', fontWeight: 400, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ position: 'relative', width: '1px', height: '40px', background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
            <motion.div animate={{ y: ['-100%', '100%'] }} transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.2 }} style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '50%', background: 'rgba(255,255,255,0.7)' }} />
          </div>
        </div>
      </div>

      {/* ── SECTION 2 ── */}
      <section id="section-2" className="s1-sec" style={{ background: '#F7F7F5' }}>
        <div className="s1-max">
          <div className="s1-2col">
            <FadeUp>
              <SectionLabel>PRIORITY CONSULTATION</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.15, color: '#111111' }}>
                Talk to a Family Lawyer Before You Decide Anything
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.15}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.8, marginBottom: '32px' }}>
                Most people wait too long to get legal advice, either because they&apos;re unsure if their situation is &quot;serious enough,&quot; or because they&apos;re worried about cost before they even know their options.
              </p>
              
              <blockquote className={cormorant.className} style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', fontStyle: 'italic', fontWeight: 400, color: '#111111', lineHeight: 1.45, borderLeft: '3px solid #A21C1C', paddingLeft: '32px', margin: '40px 0' }}>
                This call removes both of those barriers.
              </blockquote>

              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.8, marginBottom: '40px' }}>
                You&apos;ll speak directly with our family law team, understand exactly where you stand legally, and know what your realistic next steps are, at no cost to you.
              </p>

              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/9', marginTop: '48px' }}>
                <Image
                  src="/service2/Create_a_premium_3D_clay-style_202606292110.jpeg"
                  alt="Supportive space"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section className="s1-sec" style={{ background: '#111111' }}>
        <div className="s1-max">
          <div className="s1-2col">
            <FadeUp>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '56px 48px', position: 'relative' }}>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
                  OUR COMMITMENT
                </p>
                <h3 className={cormorant.className} style={{ fontSize: '32px', fontWeight: 400, color: '#FFFFFF', marginBottom: '40px', fontStyle: 'italic' }}>
                  Care, Welfare, & Strategy
                </h3>
                
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', fontWeight: 300, color: '#FFFFFF', lineHeight: 1.7, marginBottom: '64px', fontStyle: 'italic' }}>
                  &quot;Wherever possible, we work toward amicable resolution through mediation and negotiation, and we&apos;re equally prepared to represent you strongly in court when that&apos;s what the situation requires.&quot;
                </p>

                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
                  <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A21C1C' }}>Advocacy Suite</span>
                  <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>100% Client Centered</span>
                </div>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <SectionLabel><span style={{ color: 'rgba(255,255,255,0.4)' }}>OUR CORE FOUNDATION</span></SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.15, color: '#FFFFFF', marginBottom: '32px' }}>
                Our Family Law Practice
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '40px' }}>
                Our family law practice is built on understanding, discretion, and effective advocacy. We handle sensitive family matters with care, keeping our clients&apos; interests and their children&apos;s welfare at the center of every decision. Wherever possible, we work toward amicable resolution through mediation and negotiation, and we&apos;re equally prepared to represent you strongly in court when that&apos;s what the situation requires.
              </p>

              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '3/2', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Image
                  src="/service2/Create_a_premium_3D_clay-style_202606292111.jpeg"
                  alt="Family Foundation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <FadeUp style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionLabel>PRACTICE CAPABILITIES</SectionLabel>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, color: '#111111' }}>
              What We Help With
            </h2>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Divorce Proceedings',
                desc: 'Mutual consent and contested divorce under various personal laws.'
              },
              {
                title: 'Child Custody & Support',
                desc: 'Representation for custody arrangements and child support matters.'
              },
              {
                title: 'Adoption Services',
                desc: 'Complete legal assistance for domestic and inter-country adoption.'
              },
              {
                title: 'Matrimonial Disputes',
                desc: 'Resolution of disputes involving dowry, maintenance, and domestic violence.'
              }
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 0.1} style={{ height: '100%' }}>
                <div className="s1-pillar-card">
                  <h3 className={cormorant.className} style={{ fontSize: '32px', fontWeight: 500, color: '#111111', marginBottom: '20px', lineHeight: 1.25 }}>{card.title}</h3>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.7, flex: 1, marginBottom: '32px' }}>{card.desc}</p>
                  
                  <div style={{ marginTop: 'auto', borderTop: '1px solid #EAEAEA', paddingTop: '20px' }}>
                    <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999999' }}>Strictly Confidential</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section className="s1-sec" style={{ background: '#111111' }}>
        <div className="s1-max">
          <FadeUp style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
            <SectionLabel><span style={{ color: 'rgba(255,255,255,0.4)' }}>WHAT TO EXPECT</span></SectionLabel>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 400, color: '#FFFFFF', marginBottom: '24px' }}>
              What Happens on Your Free Call
            </h2>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A21C1C' }}>
              FOUR STEPS TOWARD MENTAL AND LEGAL CLARITY
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            {[
              {
                num: '01',
                title: 'Confidential Consultation',
                desc: 'A private conversation about your situation, with no judgment and no obligation.'
              },
              {
                num: '02',
                title: 'Understand Your Legal Position',
                desc: 'We explain where you currently stand under the law, in plain language, not legal jargon.'
              },
              {
                num: '03',
                title: 'Explore Your Options',
                desc: 'We walk you through the realistic paths available to you, mediation, negotiation, or litigation, and what each one actually involves.'
              },
              {
                num: '04',
                title: 'A Clear Next Step',
                desc: "You leave the call knowing exactly what to do next, whether that's working with us or simply having clarity to make your own decision."
              }
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="s1-problem-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: '#A21C1C', marginBottom: '24px' }}>{step.num}</p>
                  <h3 className={cormorant.className} style={{ fontSize: '28px', fontWeight: 500, color: '#FFFFFF', marginBottom: '16px', lineHeight: 1.25 }}>{step.title}</h3>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INTERACTIVE ASSESSMENT ── */}
      <section id="assessment" className="s1-sec" style={{ background: '#FFFFFF', borderTop: '1px solid #EAEAEA', borderBottom: '1px solid #EAEAEA' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '600px', borderRadius: '24px', overflow: 'hidden', border: '1px solid #EAEAEA' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1 }}>
            {/* Stepper Column */}
            <div className="stepper-col" style={{ background: '#F7F7F5', borderRight: '1px solid #EAEAEA' }}>
              <div className="stepper-line" style={{ background: '#EAEAEA' }}></div>
              
              {[1, 2, 3].map((num) => (
                <div key={num} className="step-item" style={{ marginBottom: num < 3 ? '8vh' : 0 }}>
                  <div className={`step-circle ${step === num ? 'active' : step > num ? 'completed' : 'inactive'}`} style={{ 
                    borderColor: step === num ? '#111111' : step > num ? 'rgba(162,28,28,0.3)' : '#EAEAEA',
                    background: step === num ? '#111111' : step > num ? 'rgba(162,28,28,0.05)' : '#FFFFFF',
                    color: step === num ? '#FFFFFF' : step > num ? '#A21C1C' : '#999999',
                    boxShadow: step === num ? '0 8px 24px rgba(0,0,0,0.1)' : 'none'
                  }}>
                    {step > num ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> : num}
                  </div>
                  <div className="step-label" style={{ color: step === num ? '#111111' : step > num ? '#A21C1C' : '#999999' }}>
                    {num === 1 ? 'DECISION' : num === 2 ? 'CUSTODY' : 'OPTIONS'}
                  </div>
                </div>
              ))}
            </div>

            {/* Questions Column */}
            <div style={{ flex: 1, padding: '80px 10%', background: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                
                {step === 1 && (
                  <motion.div key="q1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: EASE }}>
                    <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#111111', marginBottom: '40px', lineHeight: 1.15 }}>
                      Have you reached a point of decision regarding your marriage or relationship?
                    </h2>
                    <div className="topic-grid">
                      {['Yes, I have decided', 'No, I am still unsure', 'I am exploring possibilities'].map((ans) => (
                        <div key={ans} className={`topic-card ${answers[1] === ans ? 'selected' : ''}`} onClick={() => selectAnswer(ans)} style={{ border: '1px solid #EAEAEA', background: answers[1] === ans ? 'rgba(162,28,28,0.03)' : '#FFFFFF', borderColor: answers[1] === ans ? 'rgba(162,28,28,0.3)' : '#EAEAEA' }}>
                          <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 400, color: '#111111' }}>{ans}</span>
                          <div className="topic-radio" style={{ borderColor: answers[1] === ans ? '#A21C1C' : '#EAEAEA' }}>
                            {answers[1] === ans && <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#A21C1C' }} />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="q2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: EASE }}>
                    <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#111111', marginBottom: '40px', lineHeight: 1.15 }}>
                      Do you have custody or child welfare decisions to make?
                    </h2>
                    <div className="topic-grid">
                      {['Yes, custody is a priority', 'No, no children are involved', 'Unsure about child support'].map((ans) => (
                        <div key={ans} className={`topic-card ${answers[2] === ans ? 'selected' : ''}`} onClick={() => selectAnswer(ans)} style={{ border: '1px solid #EAEAEA', background: answers[2] === ans ? 'rgba(162,28,28,0.03)' : '#FFFFFF', borderColor: answers[2] === ans ? 'rgba(162,28,28,0.3)' : '#EAEAEA' }}>
                          <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 400, color: '#111111' }}>{ans}</span>
                          <div className="topic-radio" style={{ borderColor: answers[2] === ans ? '#A21C1C' : '#EAEAEA' }}>
                            {answers[2] === ans && <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#A21C1C' }} />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="q3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: EASE }}>
                    <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#111111', marginBottom: '40px', lineHeight: 1.15 }}>
                      Do you feel overwhelmed by the legal options (mediation, litigation, negotiation)?
                    </h2>
                    <div className="topic-grid">
                      {['Extremely overwhelmed', 'Somewhat confused', 'I have some clarity already'].map((ans) => (
                        <div key={ans} className={`topic-card ${answers[3] === ans ? 'selected' : ''}`} onClick={() => selectAnswer(ans)} style={{ border: '1px solid #EAEAEA', background: answers[3] === ans ? 'rgba(162,28,28,0.03)' : '#FFFFFF', borderColor: answers[3] === ans ? 'rgba(162,28,28,0.3)' : '#EAEAEA' }}>
                          <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 400, color: '#111111' }}>{ans}</span>
                          <div className="topic-radio" style={{ borderColor: answers[3] === ans ? '#A21C1C' : '#EAEAEA' }}>
                            {answers[3] === ans && <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#A21C1C' }} />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Navigation */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '64px', paddingTop: '32px', borderTop: '1px solid #EAEAEA' }}>
                <div style={{ flex: 1 }}>
                  {step > 1 && (
                    <button onClick={handleBack} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 500, color: '#666666', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                      Back
                    </button>
                  )}
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={handleNext} disabled={!answers[step]} style={{ background: answers[step] ? '#111111' : '#EAEAEA', color: answers[step] ? '#FFFFFF' : '#999999', border: 'none', padding: '16px 32px', borderRadius: '999px', fontFamily: 'var(--font-satoshi)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: answers[step] ? 'pointer' : 'not-allowed', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {step === 3 ? 'Complete' : 'Next'}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section id="cta-section" className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <div className="s1-2col">
            <FadeUp>
              <SectionLabel>NO PRIOR PREPARATION REQUIRED</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.15, color: '#111111', marginBottom: '32px' }}>
                You Don&apos;t Have to Have It All Figured Out
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.8, marginBottom: '24px' }}>
                You don&apos;t need documents prepared, a decision already made, or even certainty about what you want to do. You just need fifteen minutes to ask the questions that have been sitting with you.
              </p>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', fontStyle: 'italic', fontWeight: 500, color: '#111111', lineHeight: 1.6, marginBottom: '40px' }}>
                This call is free. There&apos;s no pressure to proceed afterward.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <RedButton onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}>Book Your Free Legal Advice Call</RedButton>
              </div>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.5)' }}>100% Secure</span>
                <span style={{ color: 'rgba(17,17,17,0.2)' }}>•</span>
                <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.5)' }}>Fully Anonymous Option</span>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2} style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden' }}>
              <Image
                src="/service2/Create_a_heartwarming_premium_3D_202606292111.jpeg"
                alt="Support visual"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', pointerEvents: 'none' }} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: DISCLAIMER ── */}
      <section style={{ background: '#F7F7F5', padding: '60px 5vw' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ width: '100%', height: '1px', background: '#EAEAEA', marginBottom: '60px' }} />
          <FadeUp>
            <h4 style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>Disclaimer</h4>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 300, color: '#666666', lineHeight: 1.8, maxWidth: '800px' }}>
              The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. This page is intended solely for the provision of information to those seeking it.
            </p>
          </FadeUp>
        </div>
      </section>
      
    </main>
  );
}
