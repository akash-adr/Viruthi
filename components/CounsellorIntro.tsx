'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function CounsellorIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });

  return (
    <section
      id="introduction"
      ref={containerRef}
      className="intro-section"
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#FFFFFF',
        padding: '160px 5vw',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .intro-section { padding: 100px 6vw 80px !important; }
          .intro-header-grid { grid-template-columns: 1fr !important; gap: 24px !important; margin-bottom: 40px !important; }
          .intro-content-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .intro-image-wrap { max-width: 480px; margin: 0 auto; }
        }
        @media (max-width: 480px) {
          .intro-section { padding: 80px 6vw 60px !important; }
        }
      `}</style>
      <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
        
        {/* ── TOP HEADER SECTION ── */}
        <div
          className="intro-header-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            alignItems: 'flex-end',
            marginBottom: '64px',
          }}
        >
          {/* Left: Chapter & Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
              CHAPTER 02 / ORIGINS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className={playfair.className}
              style={{
                fontSize: 'clamp(48px, 6vw, 80px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
                margin: 0,
                lineHeight: 1,
              }}
            >
              Introduction
            </motion.h2>
          </div>

          {/* Right: Side Heading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
              style={{
                width: '60px',
                height: '1px',
                background: 'rgba(13,13,13,0.2)',
                transformOrigin: 'left',
              }}
            />
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className={playfair.className}
              style={{
                fontSize: 'clamp(28px, 3vw, 36px)',
                fontWeight: 400,
                color: '#0D0D0D',
                margin: 0,
                letterSpacing: '0.01em',
                lineHeight: 1.3,
                textTransform: 'uppercase',
              }}
            >
              Meet Shen
            </motion.h3>
          </div>
        </div>

        {/* ── BOTTOM GRID SECTION ── */}
        <div
          className="intro-content-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 4fr) minmax(0, 5fr)',
            gap: '8vw',
            alignItems: 'start',
          }}
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
            className="intro-image-wrap"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '3/4',
              overflow: 'hidden',
              background: '#E8E6E3',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/intro.jpeg" 
              alt="Shenbakam Natarajan" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              paddingTop: '2vw',
            }}
          >
            {[
              "I am a relationship therapist, researcher, and the founder of the Viruthi Centre for Flourishing Families. For the past seven years, I have worked with thousands of individuals and couples across 20 countries — helping them heal emotional wounds, rebuild trust, and create deeply fulfilling relationships.",
              "My work focuses on understanding the emotional patterns that silently shape relationships — the conflicts, disconnection, and pain that couples often struggle to express. I am trained in Emotionally Focused Couple Therapy interventions and specialise in relationship distress, trauma, and emotional healing. I am also a Certified Clinical Trauma Professional (CCTP-1) and a Sex Therapy Informed Professional (CSTIP).",
              "Academically, I hold a Master's degree in Medical and Psychiatric Social Work from the Madras School of Social Work, and I am UGC JRF/NET qualified. I am currently pursuing my doctoral research at CHRIST University, where my work explores emotional bonds and marital flourishing in intimate relationships. I have also contributed book chapters on emotional wellbeing, intergenerational bonding, and collective flourishing in India — published by Springer Nature.",
              "Before entering the field of relationship therapy, in my previous avatar, I worked as a Senior Information Security Engineer at Infosys. I chose to leave the corporate world to follow a deeper calling — helping people build healthier relationships and stronger families."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: EASE }}
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(13,13,13,0.75)',
                  margin: 0,
                  textAlign: 'justify',
                }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
