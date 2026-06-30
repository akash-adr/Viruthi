'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
        color: '#E53935',
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
        background: hovered ? '#C62828' : '#E53935',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        fontFamily: 'var(--font-satoshi)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(229,57,53,0.35)' : '0 4px 16px rgba(229,57,53,0.2)',
      }}
    >
      {children}
      <span style={{ fontSize: '14px', transition: 'transform 0.3s ease', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}>→</span>
    </button>
  );
}

export default function MaternalCarePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(heroScroll, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [checkedItems, setCheckedItems] = useState([false, false, false, false, false]);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(0 as number | null);
  const toggleCheck = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };
  const resonanceScore = checkedItems.filter(Boolean).length;
  const hasStarted = resonanceScore > 0;

  const questions = [
    "You ever feel like you're doing everything \"right,\" but nothing feels like it's working?",
    "You're feeding your baby, but every session leaves you in pain, frustrated, or both.",
    "You're pumping, but you have no idea if your supply is actually enough.",
    "You're getting advice from everyone, but none of it accounts for you and your baby specifically.",
    "You're physically recovering, but no one's actually checked in on how you're doing emotionally."
  ];

  return (
    <main style={{ background: '#FAF8F6', color: '#111111', overflowX: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .s4-max { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 1024px) { .s4-max { padding: 0 32px; } }
        @media (max-width: 768px)  { .s4-max { padding: 0 24px; } }
        @media (max-width: 480px)  { .s4-max { padding: 0 20px; } }

        .s4-sec { padding: 120px 0; }
        @media (max-width: 1024px) { .s4-sec { padding: 100px 0; } }
        @media (max-width: 768px)  { .s4-sec { padding: 80px 0; } }

        .s4-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .s4-2col { grid-template-columns: 1fr; gap: 48px; }
          .s4-2col-img-first { order: -1; }
        }

        .s4-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: clamp(28px,4vw,48px) clamp(24px,3vw,40px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.04);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .s4-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .check-item:hover {
          background: #FFFFFF;
          border-color: rgba(0,0,0,0.05);
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
        }
        .check-box {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          border: 2px solid #EAEAEA;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
          background: #FFFFFF;
          margin-top: 2px;
        }
        .check-item.checked .check-box {
          background: #E53935;
          border-color: #E53935;
        }
        .check-item.checked .check-box svg {
          stroke-dashoffset: 0;
          opacity: 1;
        }
        .check-icon {
          width: 14px;
          height: 14px;
          stroke: #FFFFFF;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          stroke-dashoffset: 20;
          transition: stroke-dashoffset 0.4s ease 0.1s, opacity 0.2s ease;
          opacity: 0;
        }

        /* New CSS for Sections 5, 6, 7, 8 */
        .s4-3col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (max-width: 1024px) {
          .s4-3col { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 640px) {
          .s4-3col { grid-template-columns: 1fr; }
        }
        .s4-2col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 768px) {
          .s4-2col-grid { grid-template-columns: 1fr; }
        }

        .s4-service-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          border: 1px solid transparent;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .s4-service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: rgba(229, 57, 53, 0.2);
        }

        /* Timeline Layout */
        .s4-timeline-layout {
          display: flex;
          gap: 64px;
        }
        .s4-timeline-nav {
          width: 35%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .s4-timeline-content {
          width: 65%;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .s4-timeline-layout { flex-direction: column; gap: 40px; }
          .s4-timeline-nav { width: 100%; }
          .s4-timeline-content { width: 100%; }
        }

        .s4-timeline-btn {
          width: 100%;
          text-align: left;
          padding: 24px 32px;
          background: #FFFFFF;
          border: 1px solid #EAEAEA;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s4-timeline-btn:hover {
          background: #F9F9F9;
        }
        .s4-timeline-btn.active {
          background: #111111;
          border-color: #111111;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .s4-timeline-btn.active .s4-tl-num { color: #FFFFFF !important; }
        .s4-timeline-btn.active .s4-tl-title { color: #FFFFFF !important; }

        /* FAQ Accordion */
        .s4-faq-card {
          background: #FFFFFF;
          border-radius: 18px;
          border: 1px solid #EAEAEA;
          margin-bottom: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .s4-faq-card:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.04);
        }
        .s4-faq-btn {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 28px 32px;
          font-family: var(--font-satoshi);
          font-size: 20px;
          font-weight: 500;
          color: #111111;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .s4-faq-icon {
          transition: transform 0.4s ease;
          flex-shrink: 0;
          margin-left: 16px;
        }
        .s4-faq-icon.open {
          transform: rotate(180deg);
        }
        .s4-faq-content {
          padding: 0 32px 28px 32px;
          color: #555555;
          line-height: 1.6;
          font-family: var(--font-satoshi);
          font-size: 16px;
        }
      ` }} />

      {/* ── HERO ── */}
      <div ref={heroRef} style={{ position: 'relative', width: '100%', minHeight: '100vh', paddingTop: '120px', display: 'flex', alignItems: 'center' }}>
        <div className="s4-max" style={{ width: '100%' }}>
          <motion.div style={{ opacity: heroOpacity }} className="s4-2col">
            
            {/* Left Content */}
            <div style={{ paddingRight: '20px' }}>
              <FadeUp delay={0.1}>
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: '#111111',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  marginBottom: '32px'
                }}>
                  SPECIALIZED CARE DIVISION
                </span>
              </FadeUp>

              <FadeUp delay={0.2}>
                <h1 className={cormorant.className} style={{ fontSize: 'clamp(52px, 7vw, 84px)', fontWeight: 400, lineHeight: 1.05, color: '#111111', letterSpacing: '-0.02em', marginBottom: '16px' }}>
                  Maternal Care
                </h1>
                <p className={cormorant.className} style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontStyle: 'italic', fontWeight: 300, color: '#666666', lineHeight: 1.2, marginBottom: '48px' }}>
                  You Don&apos;t Have to Figure Out Motherhood Alone
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.04)', marginBottom: '40px' }}>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 400, color: '#444444', lineHeight: 1.6, marginBottom: '16px' }}>
                    You&apos;re exhausted, your body is healing, your baby won&apos;t latch the way the books said they would, and every piece of advice you&apos;re getting contradicts the last.
                  </p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E53935' }}>
                    This fixes that👇
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <RedButton onClick={scrollToContact}>Book Your Free Maternal Care Consultation</RedButton>
              </FadeUp>
            </div>

            {/* Right Image */}
            <FadeUp delay={0.2} style={{ position: 'relative', height: '100%', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
              <motion.div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '650px', y: heroImgY, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.1)' }}>
                <Image
                  src="/service4/hero.jpeg"
                  alt="Maternal Care"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
              {/* Glass Card */}
              <FadeUp delay={0.5} style={{ position: 'absolute', bottom: '40px', left: '-40px', zIndex: 10 }}>
                <div style={{
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  borderRadius: '16px',
                  padding: '24px 32px',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.08)'
                }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 500, color: '#111111', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#E53935', fontSize: '16px' }}>✓</span> Prenatal</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#E53935', fontSize: '16px' }}>✓</span> Lactation</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#E53935', fontSize: '16px' }}>✓</span> Postnatal</li>
                  </ul>
                </div>
              </FadeUp>
            </FadeUp>
          </motion.div>
        </div>
      </div>

      {/* ── SECTION 2: REALITY CHECK ── */}
      <section className="s4-sec" style={{ background: '#111111', color: '#FFFFFF' }}>
        <div className="s4-max">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <SectionLabel>THE REALITY CHECK</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.1, marginBottom: '24px' }}>
                We don&apos;t hand you a pamphlet and wish you luck like a hospital checklist.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className={cormorant.className} style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>
                It&apos;s personalized maternal care, built entirely around you and your baby.
              </p>
            </FadeUp>
          </div>

          <div className="s4-2col">
            {/* Left Image */}
            <FadeUp delay={0.3} style={{ position: 'relative', height: '100%', minHeight: '500px', borderRadius: '24px', overflow: 'hidden' }}>
              <Image
                src="/service4/Create_a_heartwarming_premium_3D_202606292045.jpeg"
                alt="Reality Check"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FadeUp>

            {/* Right Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { title: 'Your Pregnancy', text: 'prenatal counselling that prepares your body and mind for birth and what comes after, not just the delivery date.' },
                { title: 'Your Feeding Journey', text: 'lactation consultation, latch correction, milk supply concerns, and pumping support that actually fits your life.' },
                { title: 'Your Weaning Timeline', text: 'gentle, paced weaning guidance whenever you and your baby are ready, on your terms, not a deadline someone else set.' },
                { title: 'Your Recovery', text: 'postnatal counselling for the physical and emotional reality of the fourth trimester, because healing doesn\'t end when you leave the hospital.' }
              ].map((card, i) => (
                <FadeUp key={i} delay={0.4 + (i * 0.1)}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px' }}>
                    <h3 style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>{card.title}</h3>
                    <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                      {card.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HEY, REAL TALK ── */}
      <section className="s4-sec" style={{ background: '#FFFFFF' }}>
        <div className="s4-max">
          <div className="s4-2col" style={{ alignItems: 'flex-start' }}>
            
            {/* Left Col */}
            <div>
              <SectionLabel>VULNERABILITY &amp; CONTEXT</SectionLabel>
              <FadeUp delay={0.1}>
                <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, lineHeight: 1.0, color: '#111111', marginBottom: '32px' }}>
                  HEY, REAL TALK...
                </h2>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 400, color: '#555555', lineHeight: 1.6, marginBottom: '48px', maxWidth: '480px' }}>
                  The early days of motherhood are flooded with overwhelming advice.
                  <br /><br />
                  We invite you to select any of the statements opposite that reflect your current inner reality to receive instant diagnostic context.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div style={{ background: '#FAF8F6', border: '1px solid #EAEAEA', borderRadius: '20px', padding: '32px', maxWidth: '400px' }}>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888888', marginBottom: '16px' }}>
                    Your Resonance Index
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '48px', fontWeight: 300, color: '#111111', lineHeight: 1 }}>{resonanceScore}</span>
                    <span style={{ fontSize: '24px', fontWeight: 300, color: '#999999' }}>/ 5</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: '#EAEAEA', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(resonanceScore / 5) * 100}%` }}
                      transition={{ duration: 0.5, ease: EASE }}
                      style={{ height: '100%', background: '#E53935' }}
                    />
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right Col */}
            <div>
              <FadeUp delay={0.3}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
                  {questions.map((q, i) => (
                    <div
                      key={i}
                      className={`check-item ${checkedItems[i] ? 'checked' : ''}`}
                      onClick={() => toggleCheck(i)}
                    >
                      <div className="check-box">
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 400, color: checkedItems[i] ? '#111111' : '#555555', lineHeight: 1.5, transition: 'color 0.3s ease' }}>
                        {q}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeUp>

              <AnimatePresence>
                {hasStarted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <div className="s4-card" style={{ background: '#FFFFFF', border: '1px solid #EAEAEA' }}>
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 500, color: '#111111', lineHeight: 1.6, marginBottom: '24px' }}>
                        You&apos;ve read the books.<br />
                        You&apos;ve watched the videos.<br />
                        You&apos;ve asked everyone you know.
                      </p>
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 400, color: '#555555', lineHeight: 1.6, marginBottom: '32px' }}>
                        But nothing really helps, because the problem isn&apos;t information.<br />
                        It&apos;s that you don&apos;t have someone in your corner who knows your specific story.
                      </p>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                        {[
                          { num: '01', text: 'Your latch issues get generic advice instead of a real assessment.' },
                          { num: '02', text: 'Your milk supply gets guesswork instead of clarity.' },
                          { num: '03', text: 'Your weaning gets pressure instead of pacing.' },
                          { num: '04', text: 'And your own recovery gets forgotten in the focus on the baby.' }
                        ].map((issue, i) => (
                          <div key={i} style={{ display: 'flex', gap: '16px', padding: '16px', background: '#FAF8F6', borderRadius: '12px' }}>
                            <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 700, color: '#E53935' }}>Issue {issue.num}</span>
                            <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 400, color: '#333333' }}>{issue.text}</span>
                          </div>
                        ))}
                      </div>

                      <p className={cormorant.className} style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 500, color: '#111111', lineHeight: 1.3 }}>
                        Let&apos;s fix all four.<br />
                        <span style={{ fontSize: '20px', fontWeight: 400, fontStyle: 'normal', color: '#555555' }}>
                          So motherhood feels like something you&apos;re supported through, not something you&apos;re surviving alone.
                        </span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR APPROACH ── */}
      <section className="s4-sec" style={{ background: '#FAF8F6' }}>
        <div className="s4-max">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <SectionLabel>PHILOSOPHY &amp; PHILOSOPHY ALIGNMENT</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, lineHeight: 1.1, color: '#111111' }}>
                Our Approach to Maternal Care
              </h2>
            </FadeUp>
          </div>

          <div className="s4-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="s4-2col" style={{ gap: 0 }}>
              {/* Left Content */}
              <div style={{ padding: 'clamp(40px, 5vw, 80px)' }}>
                <FadeUp delay={0.2}>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: 'clamp(20px, 2vw, 24px)', fontWeight: 400, color: '#111111', lineHeight: 1.5, marginBottom: '24px' }}>
                    We believe maternal care doesn&apos;t end at delivery, and it isn&apos;t just about the baby.
                  </p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#555555', lineHeight: 1.6, marginBottom: '48px' }}>
                    It&apos;s about you, your body, your mind, and the relationship you&apos;re building with your child from pregnancy through weaning and beyond.
                  </p>
                </FadeUp>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <FadeUp delay={0.3}>
                    <div style={{ borderLeft: '2px solid #E53935', paddingLeft: '24px' }}>
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111111', marginBottom: '8px' }}>Timeline Guard</p>
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 400, color: '#555555', lineHeight: 1.6 }}>
                        We don&apos;t believe in one-size-fits-all feeding plans or rigid timelines.
                      </p>
                    </div>
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <div style={{ borderLeft: '2px solid #E53935', paddingLeft: '24px' }}>
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111111', marginBottom: '8px' }}>Human Philosophy</p>
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 400, color: '#555555', lineHeight: 1.6 }}>
                        We believe in sitting with you, understanding your specific situation, and building a plan that works for your body, your baby, and your life.
                      </p>
                    </div>
                  </FadeUp>
                </div>
              </div>

              {/* Right Image */}
              <FadeUp delay={0.3} style={{ position: 'relative', height: '100%', minHeight: '600px' }}>
                <Image
                  src="/service4/Create_a_heartwarming_premium_3D_202606292047.jpeg"
                  alt="Our Approach"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE TRUTH ABOUT MODERN MOTHERHOOD ── */}
      <section className="s4-sec" style={{ background: '#FFFFFF' }}>
        <div className="s4-max">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <FadeUp delay={0.1}>
              <p className={cormorant.className} style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontStyle: 'italic', fontWeight: 300, color: '#555555', marginBottom: '16px' }}>
                The #1 reason new mothers feel overwhelmed?
              </p>
              <h2 style={{ fontFamily: 'var(--font-satoshi)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.2, color: '#111111', marginBottom: '40px' }}>
                They&apos;re given generic advice for a deeply individual experience.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className={cormorant.className} style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, color: '#E53935', lineHeight: 1.3 }}>
                You don&apos;t need 10 more articles,<br />
                another feeding app,<br />
                or another well-meaning relative&apos;s opinion.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.3}>
            <div style={{ background: '#111111', borderRadius: '28px', padding: 'clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
              
              <SectionLabel><span style={{ color: 'rgba(255,255,255,0.5)' }}>YOU NEED FOUR THINGS WORKING TOGETHER</span></SectionLabel>
              
              <div className="s4-2col-grid" style={{ marginBottom: '64px', position: 'relative', zIndex: 1 }}>
                {[
                  { num: '01', text: 'Prenatal preparation that\'s specific to your pregnancy, your concerns, and your birth plan, not a generic checklist.' },
                  { num: '02', text: 'Real lactation support that actually assesses your baby\'s latch, your supply, and what\'s getting in the way.' },
                  { num: '03', text: 'Weaning guidance paced to what you and your baby are ready for, whenever that is.' },
                  { num: '04', text: 'Postnatal care that checks in on you, not just your milestones as a "feeding mother."' }
                ].map((item, i) => (
                  <FadeUp key={i} delay={0.4 + (i * 0.1)}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px', transition: 'all 0.3s ease', cursor: 'default' }}
                         onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(229,57,53,0.15)'}
                         onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                      <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 700, color: '#E53935', marginBottom: '16px', display: 'block' }}>{item.num}</span>
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 400, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.8}>
                <p className={cormorant.className} style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontStyle: 'italic', fontWeight: 300, color: '#FFFFFF', textAlign: 'center', lineHeight: 1.4, maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                  &quot;When these four things work together, motherhood stops feeling like you&apos;re constantly catching up, and starts feeling supported.&quot;
                </p>
              </FadeUp>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SECTION 6: INTRODUCING MATERNAL CARE CONSULTATIONS ── */}
      <section className="s4-sec" style={{ background: '#FFFFFF' }}>
        <div className="s4-max">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <SectionLabel>INTRODUCING</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, lineHeight: 1.1, color: '#111111', marginBottom: '24px' }}>
                Maternal Care Consultations
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#555555', lineHeight: 1.6 }}>
                Comprehensive 1:1 maternal care support spanning prenatal counselling, lactation consultation, pumping guidance, weaning support, and postnatal counselling, built around your specific pregnancy, baby, and body.
              </p>
            </FadeUp>
          </div>

          <div className="s4-3col">
            {[
              { num: '01 / PRENATAL', title: 'Prenatal Counselling', desc: 'We prepare you for what\'s ahead, physically and emotionally, addressing your specific concerns about birth, feeding, and the transition into early motherhood, so you walk into delivery informed rather than anxious.' },
              { num: '02 / LACTATION', title: 'Lactation Consultation', desc: 'We assess latch, positioning, milk transfer, and supply concerns directly, giving you a real diagnosis instead of generic troubleshooting, and a feeding plan that works for your body and your baby.' },
              { num: '03 / PUMPING', title: 'Pumping Support', desc: 'We help you build a pumping routine that fits your actual schedule, whether you\'re returning to work, building a stash, or exclusively pumping, so pumping supports your life instead of running it.' },
              { num: '04 / WEANING', title: 'Weaning Guidance', desc: 'Whenever you and your baby are ready, we guide a gradual, comfortable weaning process, physically and emotionally, for both of you, instead of an abrupt or pressured stop.' },
              { num: '05 / POSTNATAL', title: 'Postnatal Counselling', desc: 'We check in on you, your recovery, your mental health, and your adjustment to motherhood, because your wellbeing matters here too, not just your baby\'s milestones.' }
            ].map((service, i) => (
              <FadeUp key={i} delay={0.2 + (i * 0.1)} style={{ height: '100%' }}>
                <div className="s4-service-card">
                  <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: '#999999', marginBottom: '24px', display: 'block' }}>{service.num}</span>
                  <h3 className={cormorant.className} style={{ fontSize: '28px', fontWeight: 500, color: '#111111', marginBottom: '16px' }}>{service.title}</h3>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 400, color: '#555555', lineHeight: 1.6, flex: 1 }}>{service.desc}</p>
                </div>
              </FadeUp>
            ))}
            
            {/* Premium CTA Card */}
            <FadeUp delay={0.7} style={{ height: '100%' }}>
              <div className="s4-service-card" style={{ background: '#FAF8F6', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '24px' }}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <h3 className={cormorant.className} style={{ fontSize: '28px', fontWeight: 500, color: '#111111', marginBottom: '16px' }}>Secure Your Slot</h3>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 400, color: '#555555', lineHeight: 1.6, marginBottom: '32px' }}>
                  Take the first step toward customized, structured clinical relationship and maternal support.
                </p>
                <RedButton onClick={scrollToContact}>Book Your Free Maternal Care Consultation</RedButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CARE JOURNEY ── */}
      <section className="s4-sec" style={{ background: '#FAF8F6' }}>
        <div className="s4-max">
          <div style={{ marginBottom: '80px' }}>
            <SectionLabel>CARE ARCHITECTURE</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, lineHeight: 1.1, color: '#111111', marginBottom: '16px' }}>
                Here&apos;s What Your Care Journey Looks Like
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 400, color: '#888888' }}>
                Click any step in the timeline to preview details.
              </p>
            </FadeUp>
          </div>

          <div className="s4-timeline-layout">
            <div className="s4-timeline-nav">
              {[
                { title: 'Initial Consultation' },
                { title: 'Personalised Care Plan' },
                { title: 'Hands-On Lactation Support' },
                { title: 'Pumping Routine Build' },
                { title: 'Weaning at Your Pace' },
                { title: 'Postnatal Check-Ins' },
                { title: 'Ongoing Support Between Sessions' }
              ].map((step, i) => (
                <FadeUp key={i} delay={0.1 + (i * 0.05)}>
                  <button 
                    className={`s4-timeline-btn ${activeStep === i ? 'active' : ''}`}
                    onClick={() => setActiveStep(i)}
                  >
                    <span className="s4-tl-num" style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 700, color: '#999999' }}>STEP {i + 1}</span>
                    <span className="s4-tl-title" style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 500, color: '#111111' }}>{step.title}</span>
                  </button>
                </FadeUp>
              ))}
            </div>

            <div className="s4-timeline-content">
              <FadeUp delay={0.3} style={{ height: '100%' }}>
                <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: 'clamp(40px, 5vw, 64px)', boxShadow: '0 16px 48px rgba(0,0,0,0.04)', minHeight: '400px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      style={{ flex: 1 }}
                    >
                      <h3 className={cormorant.className} style={{ fontSize: '36px', fontWeight: 500, color: '#111111', marginBottom: '24px' }}>
                        {[
                          'Initial Consultation',
                          'Personalised Care Plan',
                          'Hands-On Lactation Support',
                          'Pumping Routine Build',
                          'Weaning at Your Pace',
                          'Postnatal Check-Ins',
                          'Ongoing Support Between Sessions'
                        ][activeStep]}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 400, color: '#555555', lineHeight: 1.6, marginBottom: '48px' }}>
                        {[
                          'We start with a full picture of where you are right now, your pregnancy stage or postpartum timeline, feeding concerns, physical recovery, and emotional wellbeing.\n\nThis shapes exactly what your care plan prioritises.',
                          'Based on your consultation, we build a plan specific to you, whether that\'s a prenatal preparation timeline, a lactation correction plan, a pumping schedule, or postnatal recovery support.',
                          'If feeding is a concern, we work directly on latch, positioning, and milk transfer, observing real feeding sessions rather than relying on a description of the problem.',
                          'We map out a pumping schedule that matches your life, work return, sleep, supply goals, so pumping has structure instead of guesswork.',
                          'When you\'re ready to begin weaning, we guide a paced approach that considers your baby\'s readiness, your supply, and the emotional side of this transition for you both.',
                          'Regular check-ins on your physical recovery and emotional adjustment, because the postpartum period deserves ongoing care, not a single follow-up appointment.',
                          'Access to support between appointments for the moments that can\'t wait for your next scheduled check-in, a sudden latch problem, a supply scare, a hard night.'
                        ][activeStep].split('\n').map((line, j) => (
                          <span key={j}>{line}<br/></span>
                        ))}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #EAEAEA', paddingTop: '32px', marginTop: 'auto', flexWrap: 'wrap', gap: '16px' }}>
                    <button 
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      style={{ background: 'transparent', border: 'none', cursor: activeStep === 0 ? 'not-allowed' : 'pointer', opacity: activeStep === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#111111', transition: 'opacity 0.3s' }}
                    >
                      ← Previous
                    </button>
                    <RedButton onClick={scrollToContact}>Book Your Free Maternal Care Consultation</RedButton>
                    <button 
                      onClick={() => setActiveStep(Math.min(6, activeStep + 1))}
                      style={{ background: 'transparent', border: 'none', cursor: activeStep === 6 ? 'not-allowed' : 'pointer', opacity: activeStep === 6 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#111111', transition: 'opacity 0.3s' }}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: THIS IS FOR YOU IF... ── */}
      <section className="s4-sec" style={{ background: '#FFFFFF' }}>
        <div className="s4-max">
          <div className="s4-2col" style={{ alignItems: 'flex-start' }}>
            {/* Left Image */}
            <FadeUp delay={0.1} style={{ position: 'relative', height: '100%', minHeight: '600px', borderRadius: '24px', overflow: 'hidden' }}>
              <Image
                src="/service4/Create_a_premium_3D_clay-style_202606292043.jpeg"
                alt="Suitability"
                fill
                style={{ objectFit: 'cover' }}
              />
            </FadeUp>

            {/* Right Content */}
            <div>
              <SectionLabel>SUITABILITY CHECK</SectionLabel>
              <FadeUp delay={0.2}>
                <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, lineHeight: 1.1, color: '#111111', marginBottom: '40px' }}>
                  This is for you if:
                </h2>
              </FadeUp>

              <div style={{ background: '#FAF8F6', borderRadius: '24px', padding: '40px', border: '1px solid #EAEAEA', marginBottom: '48px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {[
                    'You\'re pregnant and want prenatal guidance beyond what a standard checkup covers.',
                    'You\'re struggling with breastfeeding and need a real assessment, not just reassurance that "it\'ll get easier."',
                    'You\'re pumping and need a routine that actually works with your schedule and goals.',
                    'You\'re ready to wean and want to do it gently, at the right pace for you and your baby.',
                    'You\'re postpartum and need someone checking in on your recovery, not just your baby\'s growth chart.'
                  ].map((item, i) => (
                    <FadeUp key={i} delay={0.3 + (i * 0.1)}>
                      <li style={{ display: 'flex', gap: '16px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 400, color: '#444444', lineHeight: 1.6 }}>{item}</span>
                      </li>
                    </FadeUp>
                  ))}
                </ul>
              </div>

              <FadeUp delay={0.8} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 500, color: '#555555', marginBottom: '24px' }}>
                  👇 Book your Free Maternal Care Consultation here 👇
                </p>
                <RedButton onClick={scrollToContact}>Book Your Free Consultation Call</RedButton>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FREQUENTLY ASKED QUESTIONS ── */}
      <section className="s4-sec" style={{ background: '#FFFFFF' }}>
        <div className="s4-max" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionLabel>GOT QUESTIONS? LET&apos;S CLEAR THEM UP!</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, lineHeight: 1.1, color: '#111111' }}>
                Frequently Asked Questions
              </h2>
            </FadeUp>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'What happens on the free consultation call?', a: 'We talk through where you are right now, whether that\'s pregnancy, early feeding struggles, pumping logistics, or postpartum recovery, and map out what kind of support would actually help.\n\nThere\'s no obligation to continue after the call.' },
              { q: 'Do I need to already know what kind of support I need?', a: 'No.\n\nMany mothers come in only knowing something feels hard, without being able to name exactly what.\n\nPart of the consultation is helping you identify that.' },
              { q: 'Is this only for new mothers, or can I start prenatal support during pregnancy?', a: 'Both.\n\nPrenatal counselling can begin during pregnancy to prepare for birth and feeding, and postnatal support can begin any time after delivery, whether that\'s days or months in.' },
              { q: 'What if breastfeeding isn\'t going well and I\'m considering stopping?', a: 'That decision is entirely yours, and we support it either way.\n\nWhether you want help making breastfeeding work or guidance on a comfortable transition to formula or combination feeding, our role is to support what\'s right for you and your baby, not to push one outcome.' },
              { q: 'How is weaning support different from "just stopping"?', a: 'Abrupt weaning can be physically uncomfortable for you and disorienting for your baby.\n\nWe guide a gradual process that protects your comfort, manages supply changes safely, and supports your baby\'s emotional adjustment too.' }
            ].map((faq, i) => (
              <FadeUp key={i} delay={0.2 + (i * 0.1)}>
                <div className="s4-faq-card">
                  <button className="s4-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <span className={`s4-faq-icon ${openFaq === i ? 'open' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#E53935' : '#111111'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="s4-faq-content">
                          {faq.a.split('\n').map((line, j) => (
                            <span key={j}>{line}<br/></span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CALL TO ACTION ── */}
      <section id="contact-section" className="s4-sec" style={{ background: '#FAF8F6', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Background Gradients */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '140%', background: 'radial-gradient(circle, rgba(229,57,53,0.03) 0%, rgba(250,248,246,0) 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60%', height: '140%', background: 'radial-gradient(circle, rgba(229,57,53,0.02) 0%, rgba(250,248,246,0) 70%)', zIndex: 0 }} />
        
        <div className="s4-max" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <FadeUp>
              <SectionLabel>READY WHEN YOU ARE</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 400, color: '#111111', lineHeight: 1.1, marginBottom: '32px' }}>
                You Don&apos;t Have To Navigate Motherhood Alone.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', fontWeight: 300, color: '#555555', lineHeight: 1.6, marginBottom: '56px' }}>
                Whether you&apos;re preparing for birth, struggling with feeding, adjusting to postpartum life, or simply looking for someone who understands your journey, we&apos;re here to support you with care that&apos;s built around you.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <RedButton onClick={() => window.location.href = 'mailto:hello@viruthi.com'}>Book Your Free Maternal Care Consultation</RedButton>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '64px' }}>
                {[
                  'Personalised Care',
                  'Evidence-Based Guidance',
                  'One-to-One Support',
                  'Prenatal to Postnatal'
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#E53935', fontSize: '14px', fontWeight: 700 }}>✓</span>
                    <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#777777' }}>{t}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

    </main>
  );
}
