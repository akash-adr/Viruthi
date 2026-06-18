'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// Each word/line fades + rises independently
function RevealWord({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, delay, ease: EASE }}
      style={{ display: 'block', ...style }}
    >
      {children}
    </motion.span>
  );
}

export default function ComingSoon() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' });

  return (
    <section
      id="coming-soon"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '0 48px',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Top hairline — fades in as section enters */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, delay: 0, ease: EASE }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(255,255,255,0.08)',
          transformOrigin: 'left center',
        }}
      />

      {/* Section index */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        style={{
          fontFamily: 'var(--font-satoshi)',
          fontSize: '11px',
          fontWeight: 400,
          letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.25)',
          textTransform: 'uppercase',
          marginBottom: '48px',
          display: 'block',
        }}
      >
        02 — What&apos;s Next
      </motion.span>

      {/* Main typographic statement */}
      <div
        style={{
          overflow: 'hidden',
        }}
      >
        <RevealWord
          delay={0.15}
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: 'clamp(72px, 11vw, 160px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.9,
            color: '#ffffff',
          }}
        >
          Coming
        </RevealWord>

        <RevealWord
          delay={0.28}
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: 'clamp(72px, 11vw, 160px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.9,
            color: 'rgba(255,255,255,0.15)',
            marginTop: '0.04em',
          }}
        >
          Soon.
        </RevealWord>
      </div>

      {/* Sub-label beneath */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
        style={{
          fontFamily: 'var(--font-satoshi)',
          fontSize: '15px',
          fontWeight: 300,
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.4)',
          maxWidth: '300px',
          marginTop: '48px',
          margin: '48px 0 0 0',
        }}
      >
        Something is being built here — carefully, quietly, with the same intent as everything we do.
      </motion.p>

      {/* Bottom-right: page count */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '48px',
          fontFamily: 'var(--font-satoshi)',
          fontSize: '11px',
          fontWeight: 400,
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.2)',
          textTransform: 'uppercase',
        }}
      >
        2 / 2
      </motion.span>
    </section>
  );
}
