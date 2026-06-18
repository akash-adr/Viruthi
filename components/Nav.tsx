'use client';

import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: EASE,
  },
});

export default function Nav() {
  return (
    <motion.nav
      {...fadeUp(0.15)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        paddingTop: '32px',
        paddingLeft: '48px',
        paddingRight: '48px',
        paddingBottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pointerEvents: 'none',
      }}
    >
      {/* ── LEFT: Monogram ── */}
      <div style={{ pointerEvents: 'auto' }}>
        <span
          className="hover-opacity"
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '18px',
            fontWeight: 500,
            color: 'var(--white)',
            letterSpacing: '0',
            lineHeight: 1,
          }}
        >
          V
        </span>
      </div>

      {/* ── CENTER: Two-line micro caption ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
          pointerEvents: 'auto',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.25em',
            color: 'var(--white-50)',
            lineHeight: 1.4,
            textAlign: 'center',
            display: 'block',
          }}
        >
          CENTRE FOR FLOURISHING FAMILIES
        </span>
        <span
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.25em',
            color: 'var(--white-50)',
            lineHeight: 1.4,
            textAlign: 'center',
            display: 'block',
          }}
        >
          ESTD. WITH INTENT
        </span>
      </div>

      {/* ── RIGHT: Connect pill only ── */}
      <div style={{ pointerEvents: 'auto' }}>
        <button
          id="nav-connect-btn"
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '12px',
            fontWeight: 400,
            color: 'var(--white)',
            border: '1px solid rgba(255,255,255,0.45)',
            borderRadius: '999px',
            padding: '7px 18px',
            background: 'none',
            letterSpacing: '0.01em',
            opacity: 0.75,
            transition: 'opacity 0.3s ease, border-color 0.3s ease',
            lineHeight: 1,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,1)';
            (e.currentTarget as HTMLButtonElement).style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.45)';
            (e.currentTarget as HTMLButtonElement).style.opacity = '0.75';
          }}
        >
          Connect
        </button>
      </div>
    </motion.nav>
  );
}
