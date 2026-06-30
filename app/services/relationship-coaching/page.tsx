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
        cursor: 'none',
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

function OutlineButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
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
        color: hovered ? '#A21C1C' : '#111111',
        border: `1px solid ${hovered ? '#A21C1C' : 'rgba(17,17,17,0.25)'}`,
        borderRadius: '6px',
        fontFamily: 'var(--font-satoshi)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        cursor: 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </button>
  );
}

export default function RelationshipCoachingPage() {
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
      q: "Do both partners need to attend?",
      a: "No. While couples sessions are most impactful when both partners attend, we also offer individual sessions for those whose partner is not yet ready to engage. Many breakthroughs happen in individual work first."
    },
    {
      q: "Is this therapy or coaching?",
      a: "Our work is integrative — drawing from evidence-based therapeutic modalities (EFT, trauma-informed practice, attachment theory) within a coaching container. This means it is structured, goal-oriented, and deeply personal. If clinical diagnosis or psychiatric support is needed, we will refer appropriately."
    },
    {
      q: "How long does the process take?",
      a: "Most couples see meaningful shifts within 8–12 sessions. Some choose to continue for deeper, longer-term work. During your Relationship Clarity Call, we will give you an honest, realistic assessment of what to expect."
    },
    {
      q: "What if one of us doesn't want to come?",
      a: "This is more common than you think. We can begin with one partner and often the reluctant partner joins within a few sessions once they see the changes happening. We also offer strategies to help you invite your partner gently."
    },
    {
      q: "Is everything kept confidential?",
      a: "Absolutely. Everything shared in session is strictly confidential. We follow professional ethical guidelines for confidentiality. Your privacy is sacred to us."
    },
    {
      q: "What is the Relationship Clarity Call?",
      a: "It is a free 30-minute consultation where we listen to your situation, answer your questions, and together determine whether our approach is the right fit. There is no obligation and no pressure."
    },
    {
      q: "Do you work with couples considering separation?",
      a: "Yes. Whether you are trying to save your relationship, navigate separation mindfully, or simply find clarity about your future, we can help. We hold space for all outcomes — including the ones that are painful."
    },
    {
      q: "Can we work with you if we are not married?",
      a: "Absolutely. We work with couples at every stage — dating, engaged, married, separated, or co-parenting. The legal structure of your relationship does not determine the depth of our work together."
    },
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
          padding: clamp(28px,4vw,48px) clamp(24px,3vw,40px); transition: all 0.4s ease; position: relative; overflow: hidden;
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
          border-radius: 14px; padding: clamp(24px,3vw,36px) clamp(20px,2.5vw,32px); transition: all 0.3s ease;
        }
        .s1-problem-card:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.18); }

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
        }
        @media (max-width: 480px) {
          .s1-problems-grid { grid-template-columns: 1fr !important; }
          .s1-timeline-dot  { width: 36px; height: 36px; }
          .s1-timeline-line { left: 18px; }
        }

        /* Hero hero content mobile */
        @media (max-width: 768px) {
          .s1-hero-content h1 { font-size: clamp(44px, 12vw, 72px) !important; }
          .s1-hero-trust { gap: 16px !important; }
        }
        @media (max-width: 480px) {
          .s1-hero-content h1 { font-size: 13vw !important; }
          .s1-hero-trust { flex-direction: column; gap: 8px !important; }
        }

        /* Counsellor floating card — hide on small mobile to avoid overlap */
        @media (max-width: 480px) {
          .s1-cred-card { display: none !important; }
        }

        /* Button responsive */
        @media (max-width: 480px) {
          .s1-btn-row { flex-direction: column !important; align-items: stretch !important; }
          .s1-btn-row button, .s1-btn-row a { width: 100% !important; justify-content: center !important; }
        }
      `}} />

      {/* ── HERO ── */}
      <div ref={heroRef} style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '700px', overflow: 'hidden' }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: heroImgY }}>
          <Image
            src="/service1/hero.jpeg"
            alt="Relationship & Couple Coaching"
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
          style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', opacity: heroOpacity }}
          className="s1-hero-content"
        >
          <FadeUp delay={0.1}>
            <h1
              className={cormorant.className}
              style={{ fontSize: 'clamp(60px, 9vw, 108px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.0, color: '#FFFFFF', marginBottom: '32px', letterSpacing: '-0.01em' }}
            >
              Relationship &<br />Couple Coaching
            </h1>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 300, color: 'rgba(255,255,255,0.8)', marginBottom: '48px', maxWidth: '560px', lineHeight: 1.7 }}>
              Emotion-focused, trauma-informed work for couples and individuals — to heal disconnection, rebuild trust, and create relationships that feel safe, intimate, and alive.
            </p>
          </FadeUp>
          <FadeUp delay={0.55}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <RedButton onClick={scrollToContact}>Book Relationship Clarity Call</RedButton>
            </div>
          </FadeUp>
          <FadeUp delay={0.7}>
            <div className="s1-hero-trust" style={{ display: 'flex', gap: '32px', marginTop: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span>Confidential Session</span>
              <span>60 Minutes</span>
              <span>Online</span>
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

      {/* ── THE HONEST REALITY — White ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <div className="s1-2col">
            <FadeUp>
              <SectionLabel>The Honest Reality</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '32px' }}>
                Most couples wait too long.
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.8, marginBottom: '24px' }}>
                Research shows that couples wait an average of six years before seeking help — six years of growing distance, repeated arguments, and quiet heartbreak. By the time most people reach out, the damage feels overwhelming.
              </p>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.8, marginBottom: '40px' }}>
                But it doesn&apos;t have to be. The relationships that heal are not the ones with the fewest problems. They are the ones where at least one person was willing to start.
              </p>
              <RedButton onClick={scrollToContact}>Begin Today</RedButton>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="s1-2col-img-first" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5' }}>
                <Image
                  src="/service1/Relationship Coaching.jpeg"
                  alt="Couple in session"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS — Black ── */}
      <section className="s1-sec" style={{ background: '#111111' }}>
        <div className="s1-max">
          <FadeUp>
            <SectionLabel><span style={{ color: 'rgba(255,255,255,0.45)' }}>What Brings People Here</span></SectionLabel>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.15, color: '#FFFFFF', marginBottom: '20px' }}>
              Does any of this feel familiar?
            </h2>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '640px', marginBottom: '72px' }}>
              These are the most common experiences people carry when they first reach out to us.
            </p>
          </FadeUp>
          <div className="s1-problems-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { num: '01', text: 'We fight about the same things over and over — and nothing ever changes.' },
              { num: '02', text: 'We have stopped talking. Or when we do talk, it always ends badly.' },
              { num: '03', text: 'We live like roommates. The warmth and closeness we had is gone.' },
              { num: '04', text: 'I feel like I\'m not truly known by my partner anymore.' },
              { num: '05', text: 'Trust has been broken. I don\'t know if we can come back from this.' },
              { num: '06', text: 'We can\'t agree on how to raise our children, manage money, or plan our future.' },
              { num: '07', text: 'The intimacy in our relationship has faded and I don\'t know why.' },
              { num: '08', text: 'I feel alone — even when we\'re together.' },
              { num: '09', text: 'I love my partner, but I\'m not sure this relationship is working anymore.' },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="s1-problem-card">
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: '#A21C1C', marginBottom: '20px' }}>{item.num}</p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3}>
            <div style={{ marginTop: '72px', textAlign: 'center' }}>
              <p className={cormorant.className} style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>
                If you recognise yourself in any of these — you are in the right place.
              </p>
              <RedButton onClick={scrollToContact}>Book Relationship Clarity Call</RedButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── THE CORE APPROACH — White ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <div className="s1-2col">
            <FadeUp>
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4' }}>
                <Image
                  src="/service1/Relationship Coaching2.jpeg"
                  alt="Counselling approach"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <SectionLabel>The Core Approach</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 60px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '32px' }}>
                We go beneath the surface.
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.8, marginBottom: '24px' }}>
                Most conflicts in relationships are not really about the dishes, the finances, or the in-laws. They are about deeper needs — for safety, for connection, for being truly seen and valued.
              </p>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.8, marginBottom: '24px' }}>
                Our approach integrates Emotionally Focused Therapy (EFT), trauma-informed practice, and attachment theory — the most evidence-based frameworks available for relationship work.
              </p>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.8, marginBottom: '40px' }}>
                We do not teach communication scripts or give homework assignments. We work with what is actually happening between you — in real time — to create genuine, lasting change.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <RedButton onClick={scrollToContact}>Book Relationship Clarity Call</RedButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── STATISTICS — White ── */}
      <section className="s1-sec" style={{ background: '#F7F7F5' }}>
        <div className="s1-max">
          <FadeUp style={{ textAlign: 'center', marginBottom: '72px' }}>
            <SectionLabel>By The Numbers</SectionLabel>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: '#111111' }}>
              A practice built on trust.
            </h2>
          </FadeUp>
          <div className="s1-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { num: '1,200+', label: 'Couples & Individuals Supported', desc: 'Across multiple countries and cultures, we have walked with thousands through their most intimate struggles.' },
              { num: '21', label: 'Countries', desc: 'Our online practice serves clients globally, making world-class relationship support accessible wherever you are.' },
              { num: '100%', label: 'Trauma-Informed', desc: 'Every session is held within a trauma-informed framework — safe, boundaried, and attuned to your nervous system.' },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="s1-stat-card" style={{ textAlign: 'center' }}>
                  <p className={`s1-stat-num ${cormorant.className}`}>{stat.num}</p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A21C1C', marginBottom: '16px' }}>{stat.label}</p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 300, color: '#666666', lineHeight: 1.7 }}>{stat.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET YOUR COUNSELLOR — White ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <div className="s1-counsellor-grid" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'start' }}>
            <FadeUp>
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4' }}>
                  <Image
                    src="/service1/counselor.JPG"
                    alt="Shenbakam Natarajan"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                {/* Floating credentials card */}
                <div className="s1-cred-card" style={{ position: 'absolute', bottom: '-24px', right: '-24px', background: '#111111', borderRadius: '16px', padding: '24px 28px', maxWidth: '240px' }}>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>Qualifications</p>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '13px', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.7 }}>MSW — Medical &amp; Psychiatric Social Work · PhD Scholar · EFT · Trauma-Informed</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <SectionLabel>Meet Your Counsellor</SectionLabel>

              {/* Opening — conversational hook */}
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.1, color: '#111111', marginBottom: '32px' }}>
                HEY, I&apos;m Shenbakam
              </h2>

              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.9, marginBottom: '28px' }}>
                From sitting across couples who couldn&apos;t name one good thing about each other, to helping 1,200+ individuals and couples reconnect across 21 countries.
              </p>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.9, marginBottom: '28px' }}>
                I&apos;ve sat exactly where you&apos;re sitting now, in front of a relationship that felt unsalvageable.
              </p>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.9, marginBottom: '40px' }}>
                I hold an MSW in Medical &amp; Psychiatric Social Work, I&apos;m a PhD Scholar researching couple communication, and I bring a trauma-informed, emotion-focused approach to every session.
              </p>

              <blockquote className={cormorant.className} style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontStyle: 'italic', fontWeight: 400, color: '#111111', lineHeight: 1.45, borderLeft: '3px solid #A21C1C', paddingLeft: '28px', marginBottom: '40px' }}>
                And that&apos;s exactly why HARMONI© was built.
              </blockquote>

              {/* Formal intro */}
              <div style={{ background: '#F7F7F5', borderRadius: '16px', padding: '36px 40px', marginBottom: '40px' }}>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '17px', fontWeight: 500, color: '#111111', lineHeight: 1.6, marginBottom: '16px' }}>
                  I&apos;m Shenbakam Natarajan,
                </p>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.8, marginBottom: '20px' }}>
                  Relationship coach, researcher, and the person behind a method that has helped 1,200+ individuals and couples reconnect.
                </p>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.8, marginBottom: '20px' }}>
                  I don&apos;t believe in generic relationship advice.
                </p>
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.8 }}>
                  I believe in sitting with both of you, mapping what&apos;s actually broken, and rebuilding the repair together: LIVE.
                </p>
              </div>

              {/* Stats row */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '48px', borderTop: '1px solid #EAEAEA' }}>
                {[
                  { num: '1,200+', label: 'individuals and couples coached' },
                  { num: '21', label: 'countries' },
                  { num: '100%', label: 'Trauma-informed, EFT-based, culturally rooted approach' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '20px 0', borderBottom: '1px solid #EAEAEA' }}>
                    <span className={cormorant.className} style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', fontWeight: 400, color: '#A21C1C', lineHeight: 1, minWidth: '80px' }}>{s.num}</span>
                    <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 300, color: '#555555', lineHeight: 1.5 }}>{s.label}</span>
                  </div>
                ))}
              </div>

              <RedButton onClick={scrollToContact}>Book Your Session With Shenbakam</RedButton>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── THE CLINICAL TRUTH — Black ── */}
      <section className="s1-sec" style={{ background: '#111111' }}>
        <div className="s1-max">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <FadeUp>
              <SectionLabel><span style={{ color: 'rgba(255,255,255,0.45)' }}>The Clinical Truth</span></SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 5vw, 72px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '48px' }}>
                EFT has a 70–75% success rate.
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: '24px' }}>
                Emotionally Focused Therapy is the most researched and validated approach to couple therapy in the world. Study after study shows that 70–75% of couples who complete EFT move from distress to recovery — and those results hold long term.
              </p>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: '48px' }}>
                Unlike surface-level communication techniques, EFT works at the level of emotion and attachment — the actual root of most relationship pain. It is not a quick fix. It is a genuine transformation.
              </p>
              <RedButton onClick={scrollToContact}>Book Relationship Clarity Call</RedButton>
            </FadeUp>
          </div>
        </div>
      </section>



      {/* ── INTRODUCING HARMONI — White ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <FadeUp style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 80px' }}>
            <SectionLabel>Introducing</SectionLabel>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 300, lineHeight: 1.05, color: '#111111', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              HARMONI©
            </h2>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#666666', lineHeight: 1.8 }}>
              Our signature relationship programme — a structured, deeply personalised journey designed to take you from disconnection to deep, lasting harmony.
            </p>
          </FadeUp>
          <div className="s1-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              {
                num: '01',
                title: 'Hear Each Other',
                desc: 'We begin by creating the conditions for real listening — not defensive responding, but genuine understanding. You will learn to hear what your partner is actually saying beneath the words.',
              },
              {
                num: '02',
                title: 'Acknowledge the Pain',
                desc: 'Healing cannot begin without honesty about what has been lost or hurt. This pillar creates space to name the pain — without blame, without defensiveness — so it can finally be witnessed.',
              },
              {
                num: '03',
                title: 'Rebuild Trust',
                desc: 'Trust is not rebuilt through promises. It is rebuilt through consistent, small acts of attunement. We guide you through the practical and emotional work of restoring security between you.',
              },
              {
                num: '04',
                title: 'Move Forward Together',
                desc: 'The final pillar is about co-creating the relationship you actually want — not returning to a previous version, but building something richer, more conscious, and more connected than before.',
              },
            ].map((pillar, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="s1-pillar-card">
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#A21C1C', marginBottom: '28px' }}>{pillar.num}</p>
                  <h3 className={cormorant.className} style={{ fontSize: '26px', fontWeight: 500, color: '#111111', marginBottom: '20px', lineHeight: 1.25 }}>{pillar.title}</h3>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '15px', fontWeight: 300, color: '#666666', lineHeight: 1.75 }}>{pillar.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS — Black ── */}
      <section className="s1-sec" style={{ background: '#0C0C0C' }}>
        <div className="s1-max">
          <div className="s1-process-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <FadeUp>
              <SectionLabel><span style={{ color: 'rgba(255,255,255,0.45)' }}>Our Process</span></SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 4.5vw, 64px)', fontWeight: 400, lineHeight: 1.15, color: '#FFFFFF' }}>
                Here&apos;s Exactly How We&apos;ll Build This Together
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '17px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85 }}>
                Every journey through Viruthi is deeply personal. But the structure is consistent — because consistency is what creates safety, and safety is what makes change possible.
              </p>
            </FadeUp>
          </div>

          <div style={{ marginTop: '80px', position: 'relative' }}>
            <div className="s1-timeline-line" />
            {[
              {
                step: '01',
                title: 'The Relationship Clarity Call',
                duration: '30 Minutes · Free',
                desc: 'We begin with a complimentary 30-minute call. This is not a sales conversation — it is a genuine assessment. We listen to your situation, ask the questions that matter, and together determine whether our approach is the right fit for you.',
              },
              {
                step: '02',
                title: 'The Foundation Session',
                duration: '90 Minutes',
                desc: 'Your first full session is dedicated to building understanding. We map your relationship history, identify your core patterns, and establish the emotional safety needed for deep work. This session sets the tone for everything that follows.',
              },
              {
                step: '03',
                title: 'The Deep Work',
                duration: 'Sessions 2–8',
                desc: 'This is the heart of the process. Using EFT and trauma-informed modalities, we work with your actual emotional experience — not rehearsed responses. Session by session, the patterns shift, the defences soften, and real connection becomes possible.',
              },
              {
                step: '04',
                title: 'Consolidation & Integration',
                duration: 'Sessions 9–12',
                desc: 'As the work deepens, we begin consolidating gains — helping you internalise new patterns and build a relationship that sustains itself beyond the sessions. This is where the work becomes yours.',
              },
              {
                step: '05',
                title: 'Ongoing Support (Optional)',
                duration: 'Ongoing',
                desc: 'Many clients choose to continue with monthly or quarterly sessions for ongoing support, accountability, and continued growth. We are here for the long journey — not just the crisis.',
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', paddingLeft: '0' }}>
                  <div className="s1-timeline-dot">
                    <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 700, color: '#FFFFFF' }}>{item.step}</span>
                  </div>
                  <div style={{ paddingBottom: '48px', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                      <h3 className={cormorant.className} style={{ fontSize: '26px', fontWeight: 500, color: '#FFFFFF', lineHeight: 1.2 }}>{item.title}</h3>
                      <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A21C1C', background: 'rgba(162,28,28,0.12)', padding: '5px 12px', borderRadius: '100px' }}>{item.duration}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '640px' }}>{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2}>
            <div style={{ marginTop: '40px', paddingLeft: '78px' }}>
              <RedButton onClick={scrollToContact}>Book Relationship Clarity Call</RedButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHO THIS IS FOR — White ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <div className="s1-who-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <FadeUp>
              <SectionLabel>Who This Is For</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(42px, 4.5vw, 60px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '32px' }}>
                This work is for you if—
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  'You are in a committed relationship that is struggling — and you want to save it.',
                  'You are an individual who wants to understand your own patterns before or within a relationship.',
                  'You have been through an affair, a betrayal, or a significant rupture — and you want to find out if repair is possible.',
                  'You are considering separation and want to make a conscious, thoughtful decision.',
                  'You are preparing for marriage or a major relationship transition.',
                  'You feel disconnected from your partner but cannot quite name why.',
                  'You have tried talking — but it always ends the same way.',
                  'You are done pretending everything is fine.',
                ].map((item, i) => (
                  <FadeUp key={i} delay={i * 0.04}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px 0', borderBottom: '1px solid #EAEAEA' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#A21C1C', flexShrink: 0, marginTop: '9px' }} />
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '17px', fontWeight: 300, color: '#333333', lineHeight: 1.7 }}>{item}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ background: '#F7F7F5', borderRadius: '20px', padding: '56px 48px' }}>
                <SectionLabel>And Not For You If—</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    'You are looking for someone to take sides or validate one partner over the other.',
                    'You are in immediate danger or crisis — in that case, please contact emergency services first.',
                    'You are unwilling to engage with honest reflection.',
                    'You want a quick fix that avoids the real work.',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '18px 0', borderBottom: i < 3 ? '1px solid #E0E0DE' : 'none' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#999999', flexShrink: 0, marginTop: '9px' }} />
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#666666', lineHeight: 1.7 }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '48px' }}>
                  <RedButton onClick={scrollToContact}>I&apos;m Ready — Book My Call</RedButton>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — Light Grey ── */}
      <section className="s1-sec" style={{ background: '#F7F7F5' }}>
        <div className="s1-max">
          <FadeUp style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 80px' }}>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(38px, 4.5vw, 60px)', fontWeight: 400, lineHeight: 1.15, color: '#111111' }}>
              In their own words.
            </h2>
          </FadeUp>
          <div className="s1-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              {
                quote: "We were two weeks away from filing for divorce. After six sessions with Priyadharshini, we are not just staying together — we are genuinely rebuilding something I didn't think was possible. She helped us see each other again.",
                name: 'Rajan & Meera',
                location: 'Chennai',
                duration: '8 Sessions'
              },
              {
                quote: "I came alone because my husband refused. Within three sessions, something shifted in me. By session five, he asked to join. We've now completed the full programme together. It was the best investment we've ever made.",
                name: 'Lakshmi',
                location: 'Singapore',
                duration: '12 Sessions'
              },
              {
                quote: "What makes Priyadharshini different is that she doesn't just give you tools. She helps you actually feel something — and from that feeling, things begin to change. I cannot recommend this highly enough.",
                name: 'Arjun & Deepa',
                location: 'Dubai',
                duration: '10 Sessions'
              }
            ].map((t, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="s1-testimonial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <span className={cormorant.className} style={{ fontSize: '64px', lineHeight: 0.8, color: '#EAEAEA', marginBottom: '24px', display: 'block' }}>&ldquo;</span>
                  <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#333333', lineHeight: 1.8, flex: 1, marginBottom: '32px' }}>{t.quote}</p>
                  <div style={{ borderTop: '1px solid #EAEAEA', paddingTop: '24px' }}>
                    <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontWeight: 600, color: '#111111', marginBottom: '4px' }}>{t.name}</p>
                    <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 400, color: '#999999', letterSpacing: '0.05em' }}>{t.location} · {t.duration}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR GUARANTEE — White ── */}
      <section className="s1-sec" style={{ background: '#FFFFFF' }}>
        <div className="s1-max">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <FadeUp>
              <SectionLabel>Our Guarantee</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(38px, 5vw, 68px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.1, color: '#111111', marginBottom: '40px' }}>
                We show up fully — every single session.
              </h2>
              <div style={{ width: '48px', height: '1px', background: '#A21C1C', margin: '0 auto 40px' }} />
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.9, marginBottom: '24px' }}>
                We cannot guarantee outcomes — no honest practitioner can. Relationships are co-created, and their healing requires effort from both sides.
              </p>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.9, marginBottom: '24px' }}>
                What we can guarantee: every session will be held with absolute presence, clinical rigour, and genuine care. We will never be dismissive, prescriptive, or formulaic. We will meet you exactly where you are.
              </p>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: '#444444', lineHeight: 1.9, marginBottom: '48px' }}>
                And if after your first session you feel we are not the right fit, we will refund your session fee in full — no questions, no conditions.
              </p>
              <RedButton onClick={scrollToContact}>Book Relationship Clarity Call</RedButton>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQs — Light Grey ── */}
      <section className="s1-sec" style={{ background: '#F7F7F5' }}>
        <div className="s1-max">
          <div className="s1-faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
            <FadeUp>
              <SectionLabel>Frequently Asked</SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(38px, 4vw, 54px)', fontWeight: 400, lineHeight: 1.15, color: '#111111', marginBottom: '24px' }}>
                Questions
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#666666', lineHeight: 1.75, marginBottom: '40px' }}>
                Still wondering? Below are the questions we hear most often. If yours is not answered here, ask us directly on your Clarity Call.
              </p>
              <RedButton onClick={scrollToContact}>Book Clarity Call</RedButton>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div>
                {faqs.map((faq, i) => (
                  <div key={i} className="s1-faq-item">
                    <button className="s1-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span style={{ paddingRight: '24px' }}>{faq.q}</span>
                      <span className="s1-faq-icon" style={{ background: openFaq === i ? '#111111' : 'transparent', borderColor: openFaq === i ? '#111111' : '#EAEAEA' }}>
                        <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} style={{ display: 'block', fontFamily: 'var(--font-satoshi)', fontSize: '18px', color: openFaq === i ? '#FFFFFF' : '#111111', lineHeight: 1 }}>+</motion.span>
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 300, color: '#555555', lineHeight: 1.8, paddingBottom: '28px', paddingRight: '60px' }}>{faq.a}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — Black ── */}
      <section id="contact" className="s1-sec" style={{ background: '#111111' }}>
        <div className="s1-max">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <FadeUp>
              <SectionLabel><span style={{ color: 'rgba(255,255,255,0.4)' }}>Begin Here</span></SectionLabel>
              <h2 className={cormorant.className} style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.0, color: '#FFFFFF', marginBottom: '32px' }}>
                Your relationship<br />deserves this.
              </h2>
              <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '56px', maxWidth: '580px', margin: '0 auto 56px' }}>
                The Relationship Clarity Call is free, confidential, and without obligation. It is simply a conversation — to help you understand what is possible, and whether we are the right people to walk this path with you.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
                <RedButton onClick={() => alert('Booking flow coming soon')}>Book Relationship Clarity Call</RedButton>
                <OutlineButton onClick={() => window.history.back()}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>Back to Services</span>
                </OutlineButton>
              </div>
              <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['Free 30-Min Call', 'No Obligation', '100% Confidential', 'Online'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A21C1C', display: 'inline-block' }} />
                    <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{t}</span>
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
