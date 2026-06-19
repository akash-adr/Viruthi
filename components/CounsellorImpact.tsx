'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
});

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ── NUMBER COUNTER COMPONENT ── */
function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 25,
    mass: 1,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  const displayValue = useTransform(springValue, (latest) => {
    return Math.floor(latest).toLocaleString();
  });

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

/* ── MAIN COMPONENT ── */
export default function CounsellorImpact() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });

  return (
    <section
      id="impact"
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {/* Chapter Label */}
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
            }}
          >
            PROVEN CAPABILITIES
          </motion.span>

          {/* Main Title & Quote Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '40px',
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className={playfair.className}
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 600,
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
                margin: 0,
                lineHeight: 1,
              }}
            >
              Making an impact
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: '14px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.6,
                letterSpacing: '0.02em',
                color: 'rgba(13,13,13,0.6)',
                margin: 0,
                maxWidth: '420px',
                textAlign: 'right',
              }}
            >
              &quot;Transformation is measured not by sessions completed, but by lives positively changed.&quot;
            </motion.p>
          </div>
        </div>

        {/* Delicate Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          style={{
            width: '100%',
            height: '1px',
            background: 'rgba(13,13,13,0.1)',
            transformOrigin: 'left',
            marginBottom: '64px',
          }}
        />

        {/* ── STATS GRID ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1px',
            background: 'rgba(13,13,13,0.08)',
            border: '1px solid rgba(13,13,13,0.08)',
          }}
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            style={{
              background: '#FFFFFF',
              padding: '64px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: 'clamp(72px, 8vw, 120px)',
                  fontWeight: 500,
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  color: '#0D0D0D',
                }}
              >
                0<AnimatedCounter value={7} />
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: 'clamp(40px, 4vw, 64px)',
                  fontWeight: 300,
                  color: 'rgba(13,13,13,0.4)',
                  marginLeft: '4px',
                }}
              >
                +
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '24px', height: '1px', background: 'rgba(13,13,13,0.2)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.25em',
                  color: 'rgba(13,13,13,0.5)',
                  textTransform: 'uppercase',
                }}
              >
                Years of practice
              </span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            style={{
              background: '#FFFFFF',
              padding: '64px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: 'clamp(72px, 8vw, 120px)',
                  fontWeight: 500,
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  color: '#0D0D0D',
                }}
              >
                <AnimatedCounter value={1200} />
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: 'clamp(40px, 4vw, 64px)',
                  fontWeight: 300,
                  color: 'rgba(13,13,13,0.4)',
                  marginLeft: '4px',
                }}
              >
                +
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '24px', height: '1px', background: 'rgba(13,13,13,0.2)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.25em',
                  color: 'rgba(13,13,13,0.5)',
                  textTransform: 'uppercase',
                }}
              >
                Clients served
              </span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            style={{
              background: '#FFFFFF',
              padding: '64px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: 'clamp(72px, 8vw, 120px)',
                  fontWeight: 500,
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  color: '#0D0D0D',
                }}
              >
                <AnimatedCounter value={20} />
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: 'clamp(40px, 4vw, 64px)',
                  fontWeight: 300,
                  color: 'rgba(13,13,13,0.4)',
                  marginLeft: '4px',
                }}
              >
                +
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '24px', height: '1px', background: 'rgba(13,13,13,0.2)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.25em',
                  color: 'rgba(13,13,13,0.5)',
                  textTransform: 'uppercase',
                }}
              >
                Countries reached
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
