'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
});

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function CounsellorCTA() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });

  return (
    <section
      ref={containerRef}
      style={{
        width: '100%',
        minHeight: '80vh',
        background: '#FFFFFF',
        padding: '160px 5vw',
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
          alignItems: 'center',
        }}
      >
        {/* ── LEFT: HUGE SERIF TEXT ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.0, ease: EASE }}
          className={playfair.className}
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 'clamp(64px, 9vw, 140px)',
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
            style={{ color: '#0D0D0D' }}
          >
            Let&apos;s
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
            style={{ color: '#0D0D0D' }}
          >
            Create
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
            style={{ color: '#0D0D0D' }}
          >
            Something
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.4, ease: EASE }}
            style={{
              color: 'rgba(13,13,13,0.25)',
              fontStyle: 'italic',
              fontWeight: 400,
              paddingRight: '10px',
            }}
          >
            Meaningful.
          </motion.span>
        </motion.div>

        {/* ── RIGHT: CONTENT & ACTIONS ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.4, ease: EASE }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            maxWidth: '500px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'rgba(13,13,13,0.7)',
              margin: 0,
            }}
          >
            Every significant collaboration begins with a conversation. Not a pitch — a genuine exchange between two people who care about getting it right.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#0D0D0D',
                color: '#FFFFFF',
                border: 'none',
                padding: '16px 32px',
                fontFamily: 'var(--font-satoshi)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'none',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Schedule a Consultation
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                color: '#0D0D0D',
                border: '1px solid rgba(13,13,13,0.2)',
                padding: '16px 32px',
                fontFamily: 'var(--font-satoshi)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'none',
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(13,13,13,0.5)';
                e.currentTarget.style.background = 'rgba(13,13,13,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(13,13,13,0.2)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Get in Touch
            </button>
          </div>

          {/* Social Widgets */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
            {[
              {
                name: 'LinkedIn',
                svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              },
              {
                name: 'YouTube',
                svg: (
                  <>
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </>
                )
              },
              {
                name: 'Instagram',
                svg: (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </>
                )
              }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid rgba(13,13,13,0.15)',
                  color: '#0D0D0D',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0D0D0D';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#0D0D0D';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {social.svg}
                </svg>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
