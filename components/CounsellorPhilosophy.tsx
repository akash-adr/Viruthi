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

export default function CounsellorPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });

  return (
    <section
      id="philosophy"
      ref={containerRef}
      style={{
        width: '100%',
        minHeight: '80vh',
        background: '#FFFFFF',
        padding: '120px 5vw',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid rgba(13,13,13,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '8vw',
          position: 'relative',
        }}
      >
        {/* ── SUBTLE VERTICAL DIVIDER (Desktop Only) ── */}
        <style>{`
          .desktop-divider { display: none; }
          @media (min-width: 768px) {
            .desktop-divider { display: block; }
          }
        `}</style>
        <motion.div
          className="desktop-divider"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(13,13,13,0) 0%, rgba(13,13,13,0.12) 20%, rgba(13,13,13,0.12) 80%, rgba(13,13,13,0) 100%)',
            transformOrigin: 'top',
          }}
        />

        {/* ── LEFT: PHILOSOPHY ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'rgba(13,13,13,0.2)',
              marginBottom: '32px',
            }}
          />
          
          <span
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.3em',
              color: 'rgba(13,13,13,0.85)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            PHILOSOPHY
          </span>

          <h2
            className={playfair.className}
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: '#0D0D0D',
              margin: 0,
              lineHeight: 1.1,
              marginBottom: '40px',
            }}
          >
            Philosophy
          </h2>

          <h3
            className={playfair.className}
            style={{
              fontSize: 'clamp(20px, 2vw, 28px)',
              fontWeight: 400,
              color: '#0D0D0D',
              margin: 0,
              lineHeight: 1.4,
              marginBottom: '24px',
              letterSpacing: '0.01em',
            }}
          >
            Connection thrives where understanding begins.
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '18px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(13,13,13,0.9)',
              margin: 0,
              maxWidth: '90%',
            }}
          >
            I believe in creating safe spaces where vulnerability is honoured and every emotion is valid. True healing happens when we stop trying to fix each other and start trying to understand each other.
          </p>

          <button
            style={{
              marginTop: '40px',
              alignSelf: 'flex-start',
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
              e.currentTarget.style.borderColor = 'rgba(13,13,13,0.85)';
              e.currentTarget.style.background = 'rgba(13,13,13,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(13,13,13,0.2)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            See it in action
          </button>
        </motion.div>

        {/* ── RIGHT: APPROACH ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'rgba(13,13,13,0.2)',
              marginBottom: '32px',
            }}
          />
          
          <span
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.3em',
              color: 'rgba(13,13,13,0.85)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            PROCESS
          </span>

          <h2
            className={playfair.className}
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: '#0D0D0D',
              margin: 0,
              lineHeight: 1.1,
              marginBottom: '40px',
            }}
          >
            Approach
          </h2>

          <h3
            className={playfair.className}
            style={{
              fontSize: 'clamp(20px, 2vw, 28px)',
              fontWeight: 400,
              color: '#0D0D0D',
              margin: 0,
              lineHeight: 1.4,
              marginBottom: '24px',
              letterSpacing: '0.01em',
            }}
          >
            In relationships, logic rarely heals disconnection. Emotions do.
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '18px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(13,13,13,0.9)',
              margin: 0,
              maxWidth: '90%',
            }}
          >
            My work uses an emotion-focused, trauma-informed approach to help couples understand each other&apos;s deeper emotional needs and rebuild secure bonds — slowly, honestly, with care.
          </p>

          <button
            style={{
              marginTop: '40px',
              alignSelf: 'flex-start',
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
              e.currentTarget.style.borderColor = 'rgba(13,13,13,0.85)';
              e.currentTarget.style.background = 'rgba(13,13,13,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(13,13,13,0.2)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Explore our methods
          </button>
        </motion.div>

      </div>
    </section>
  );
}
