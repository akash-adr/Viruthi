'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
});

const STEPS = [
  { word: 'relationship', image: '/1.jpeg?v=2' },
  { word: 'marriage',     image: '/2.jpeg?v=2' },
  { word: 'connection',   image: '/3.jpeg?v=2' },
];

export default function SplitSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      if (v < 0.333) setStep(0);
      else if (v < 0.666) setStep(1);
      else setStep(2);
    });
  }, [scrollYProgress]);

  return (
    <section
      id="our-story"
      ref={containerRef}
      style={{ height: '300vh', position: 'relative', background: '#FFFFFF', zIndex: 10 }}
    >
      <style>{`
        .split-container {
          display: flex;
          flex-direction: row;
          height: 100vh;
          position: sticky;
          top: 0;
          overflow: hidden;
        }
        .split-left {
          width: 45%;
          padding-left: 80px;
          padding-right: 48px;
        }
        .split-divider {
          width: 1px;
          height: auto;
        }
        .split-right {
          flex: 1;
        }
        @media (max-width: 768px) {
          .split-container {
            flex-direction: column-reverse !important;
          }
          .split-left {
            width: 100% !important;
            height: 50% !important;
            padding: 40px 24px !important;
            align-items: center !important;
            text-align: center !important;
          }
          .split-left h2 {
            text-align: center !important;
            margin-bottom: 16px !important;
          }
          .split-left p {
            text-align: center !important;
          }
          .split-divider {
            width: 100% !important;
            height: 1px !important;
          }
          .split-right {
            width: 100% !important;
            height: 50% !important;
            flex: none !important;
          }
        }
      `}</style>
      <div className="split-container">

        {/* ── LEFT: belief column — still ── */}
        <div
          className="split-left"
          style={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <h2
            className={playfair.className}
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              color: '#0D0D0D',
              margin: 0,
              display: 'block',
              marginBottom: '32px',
              lineHeight: 1.1,
            }}
          >
            Our belief
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: 'clamp(20px, 1.6vw, 26px)',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'rgba(13,13,13,0.85)',
              maxWidth: '380px',
              margin: 0,
            }}
          >
            Happy couples create happy families. Happy families raise happy children. And emotionally healthy adults build flourishing communities.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: 'clamp(20px, 1.6vw, 26px)',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'rgba(13,13,13,0.45)',
              maxWidth: '380px',
              margin: 0,
            }}
          >
            — this is the thread we follow.
          </p>
        </div>

        {/* ── DIVIDER ── */}
        <div
          className="split-divider"
          style={{
            background: 'rgba(13,13,13,0.08)',
            flexShrink: 0,
            alignSelf: 'stretch',
          }}
        />

        {/* ── RIGHT: scroll-reactive panel ── */}
        <div className="split-right" style={{ position: 'relative', overflow: 'hidden', background: '#0D0D0D' }}>

          {/* ── Background Images (Crossfade) ── */}
          {STEPS.map((s, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: step === i ? 1 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${s.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1,
              }}
            />
          ))}

          {/* 35% dark overlay for text contrast */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.42)',
              zIndex: 2,
            }}
          />

          {/* ── Centered sentence ── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                fontFamily: 'var(--font-satoshi)',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: 'rgba(255,255,255,0.85)',
                userSelect: 'none',
              }}
            >
              {/* Static — never moves, dimmed */}
              <div>Every</div>

              {/* ── Animating word — highlighted, full white + glow ── */}
              <div
                style={{
                  position: 'relative',
                  height: '1.15em',
                  overflow: 'hidden',
                  margin: '0.04em 0',
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -22 }}
                    transition={{ duration: 0.32, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      textAlign: 'center',
                      /* Premium highlight — full white + soft glow */
                      color: '#ffffff',
                      textShadow: '0 0 40px rgba(255,255,255,0.45), 0 0 80px rgba(255,255,255,0.15)',
                    }}
                  >
                    {STEPS[step].word}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Static — never moves, dimmed */}
              <div>is worth fighting for.</div>
            </div>
          </div>

          {/* ── Scroll progress — bottom right ── */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              zIndex: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {STEPS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === step ? '32px' : '24px',
                  height: '1px',
                  background: i === step ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.35s ease',
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
