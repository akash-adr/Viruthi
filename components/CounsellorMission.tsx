'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic'],
});

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const CARDS = [
  {
    num: '01',
    tag: 'PARTNERSHIP',
    title: 'Happy couples create happy families.',
    desc: 'The foundation of a thriving home begins with the partnership at its core. When partners heal and connect, their emotional security radiates outward to fill the entire household.',
  },
  {
    num: '02',
    tag: 'ENVIRONMENT',
    title: 'Happy families raise happy children.',
    desc: 'Children absorb the emotional climate of their environment. A secure, loving family naturally fosters resilience, confidence, and profound joy in the next generation.',
  },
  {
    num: '03',
    tag: 'DEVELOPMENT',
    title: 'Happy children become healthy adults.',
    desc: 'Early emotional safety forms the blueprint for lifelong mental health. Nurtured children grow into adults capable of deep connection, empathy, and remarkable self-awareness.',
  },
  {
    num: '04',
    tag: 'SOCIETY',
    title: 'Healthy adults build flourishing communities.',
    desc: 'Healing is exponential. Emotionally grounded individuals carry their strength into society, creating a ripple effect that builds a culture of collective flourishing.',
  },
];

export default function CounsellorMission() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-15%' });

  return (
    <section
      id="mission"
      ref={containerRef}
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#FFFFFF',
        padding: '120px 5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
        
        {/* ── HEADER SECTION ── */}
        <div style={{ marginBottom: '80px' }}>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.3em',
              color: 'rgba(13,13,13,0.4)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            OPERATING VALUES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className={playfair.className}
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: '#0D0D0D',
              margin: 0,
              lineHeight: 1.1,
              marginBottom: '32px',
            }}
          >
            Our mission
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            style={{
              width: '80px',
              height: '1px',
              background: 'rgba(13,13,13,0.15)',
              transformOrigin: 'left',
              marginBottom: '40px',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className={playfair.className}
            style={{
              fontSize: 'clamp(20px, 2vw, 26px)',
              color: 'rgba(13,13,13,0.8)',
              margin: 0,
              maxWidth: '800px',
              lineHeight: 1.6,
            }}
          >
            India has nearly 35 crore households. My mission is to help 10 crore families build healthier, happier relationships — because when families flourish, the entire nation flourishes.
          </motion.p>
        </div>

        {/* ── 4-COLUMN CARDS GRID ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(13,13,13,0.08)',
            border: '1px solid rgba(13,13,13,0.08)',
          }}
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: EASE }}
              style={{
                background: '#FFFFFF',
                padding: '48px 32px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'none',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F5F4F2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
              }}
            >
              {/* Top row: 01 and TAG */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '48px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'rgba(13,13,13,0.5)',
                  }}
                >
                  {card.num}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.25em',
                    color: 'rgba(13,13,13,0.3)',
                  }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className={playfair.className}
                style={{
                  fontSize: 'clamp(20px, 1.8vw, 24px)',
                  fontWeight: 400,
                  color: '#0D0D0D',
                  lineHeight: 1.3,
                  marginBottom: '24px',
                  letterSpacing: '0.01em',
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: 'rgba(13,13,13,0.65)',
                  margin: 0,
                  marginTop: 'auto',
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA BUTTON & TEXT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          <span
            className={playfair.className}
            style={{
              fontSize: '18px',
              color: 'rgba(13,13,13,0.7)',
              maxWidth: '500px',
              lineHeight: 1.5,
            }}
          >
            A vision of this magnitude requires collective effort and shared purpose.
          </span>

          <button
            style={{
              background: 'transparent',
              color: '#0D0D0D',
              border: '1px solid rgba(13,13,13,0.2)',
              padding: '16px 40px',
              fontFamily: 'var(--font-satoshi)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'none',
              transition: 'border-color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(13,13,13,0.6)';
              e.currentTarget.style.background = 'rgba(13,13,13,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(13,13,13,0.2)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Be part of this mission
          </button>
        </motion.div>

      </div>
    </section>
  );
}
