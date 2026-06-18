'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400'],
});

export default function Hero() {
  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const sectionRef = useRef<HTMLElement>(null);
  const [connectHovered, setConnectHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const headlineY       = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: 'var(--page-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ── CENTERED BLOCK: micro-label + VIRUTHI ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.35, ease: EASE }}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '-4vh',
          y: headlineY,
          opacity: headlineOpacity,
        }}
      >
        {/* Micro-text above VIRUTHI */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '18px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.25em',
              color: 'rgba(13,13,13,0.50)',
              lineHeight: 1.4,
              textAlign: 'center',
              display: 'block',
              textTransform: 'uppercase',
            }}
          >
            Centre for Flourishing Families
          </span>
          <span
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.25em',
              color: 'rgba(13,13,13,0.50)',
              lineHeight: 1.4,
              textAlign: 'center',
              display: 'block',
              textTransform: 'uppercase',
            }}
          >
            Estd. with Intent
          </span>
        </div>

        {/* VIRUTHI with scroll gradient */}
        <div style={{ position: 'relative', width: '100%' }}>
          <h1
            id="hero-headline"
            className={playfair.className}
            style={{
              fontSize: '20.5vw',
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              lineHeight: 0.9,
              color: '#0D0D0D',
              width: '100%',
              margin: 0,
              padding: 0,
              textAlign: 'center',
              whiteSpace: 'nowrap',
              position: 'relative',
              zIndex: 1,
            }}
            aria-label="viruthi."
          >
            {"viruthi.".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, rotateZ: -8, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, rotateZ: 0, y: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: EASE,
                  delay: 0.25 + index * 0.08,
                }}
                style={{ display: 'inline-block', transformOrigin: 'bottom left' }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Scroll-driven gradient wash */}
          <motion.div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              opacity: gradientOpacity,
              background:
                'linear-gradient(135deg, rgba(13,13,13,0.0) 0%, rgba(13,13,13,0.05) 40%, rgba(255,255,255,0.6) 100%)',
              mixBlendMode: 'screen',
              pointerEvents: 'none',
            }}
          />
        </div>
      </motion.div>

      {/* ── BOTTOM LEFT: description ── */}
      <motion.p
        id="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '48px',
          fontFamily: 'var(--font-satoshi)',
          fontSize: '17px',
          fontWeight: 300,
          lineHeight: 1.8,
          color: 'var(--ink)',
          opacity: 0.65,
          maxWidth: '320px',
          margin: 0,
          transition: 'opacity 0.3s ease',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.9')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.65')}
      >
        Where relationships are tended like gardens — patiently, attentively, with care.
      </motion.p>

      {/* ── BOTTOM CENTER: scroll indicator ── */}
      <motion.div
        id="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '9px',
            fontWeight: 400,
            letterSpacing: '0.3em',
            color: 'var(--ink)',
            opacity: 0.3,
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            position: 'relative',
            width: '1px',
            height: '40px',
            background: 'rgba(13,13,13,0.12)',
            overflow: 'hidden',
          }}
        >
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.2 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '50%',
              background: 'rgba(13,13,13,0.5)',
            }}
          />
        </div>
      </motion.div>

      {/* ── BOTTOM RIGHT: tagline + connect button ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
        style={{
          position: 'absolute',
          bottom: '72px',
          right: '48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '16px',
        }}
      >
        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '16px', // Increased from 13px
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.01em',
            color: 'rgba(13,13,13,0.7)', // Slightly increased opacity for better readability
            margin: 0,
            textAlign: 'right',
            maxWidth: '260px', // Increased max-width to accommodate larger text
            transition: 'opacity 0.3s ease',
          }}
        >
          Begin your journey<br />back to each other
        </p>

        {/* Connect button — pill with animated border + fill on hover */}
        <button
          id="hero-connect-btn"
          onMouseEnter={() => setConnectHovered(true)}
          onMouseLeave={() => setConnectHovered(false)}
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: connectHovered ? '#ffffff' : '#0D0D0D',
            background: connectHovered ? '#0D0D0D' : 'transparent',
            border: '1px solid rgba(13,13,13,0.4)',
            borderColor: connectHovered ? '#0D0D0D' : 'rgba(13,13,13,0.4)',
            borderRadius: '999px',
            padding: '10px 24px',
            cursor: 'none',
            transition:
              'color 0.35s ease, background 0.35s ease, border-color 0.35s ease, padding 0.35s ease',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          Connect
          {/* Arrow that slides in on hover */}
          <motion.span
            animate={{
              opacity: connectHovered ? 1 : 0,
              x: connectHovered ? 0 : -6,
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              display: 'inline-block',
              fontSize: '11px',
              lineHeight: 1,
            }}
          >
            →
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
}
