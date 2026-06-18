'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Playfair_Display, Syne } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic'],
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function CounsellorQuote() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });

  return (
    <section
      ref={containerRef}
      style={{
        width: '100%',
        padding: '160px 5vw',
        background: '#F7F5F2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 2,
        }}
      >


        {/* Row 1: Italic Serif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          className={playfair.className}
          style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            color: '#0D0D0D',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '0.02em',
            marginBottom: '8px',
          }}
        >
          Great work is never rushed.
        </motion.div>

        {/* Row 2: Bold Sans-Serif All Caps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
          className={syne.className}
          style={{
            fontSize: 'clamp(40px, 6vw, 80px)',
            color: '#0D0D0D',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
          }}
        >
          It is refined.

        </motion.div>
      </div>
    </section>
  );
}
