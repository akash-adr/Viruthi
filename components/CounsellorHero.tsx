'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Kaushan_Script } from 'next/font/google';

const kaushan = Kaushan_Script({
  weight: ['400'],
  subsets: ['latin'],
});

export default function CounsellorHero() {
  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax effect for the background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section
      id="our-founder"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        background: '#000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style>{`
        .hero-content-wrap {
          justify-content: flex-end;
        }
        .hero-text-block {
          max-width: 680px;
          width: 100%;
        }
        .hero-bg-img {
          background-position: center 30%;
          background-size: cover;
        }
        .founder-name {
          font-weight: 400;
          display: block;
          font-size: 1.25em;
          transform: rotate(-4deg);
          letter-spacing: 0;
          margin-left: -60px;
          padding-bottom: 10px;
        }
        @media (max-width: 768px) {
          .hero-scroll-indicator { display: none !important; }
          .hero-content-wrap {
            justify-content: flex-start !important;
            align-items: flex-start !important;
            padding: 120px 24px 0 !important;
          }
          .hero-text-block {
            max-width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
          .hero-text-block > * {
            text-align: left !important;
          }
          .hero-bg-img {
            background-image: url(/intro.JPG) !important;
            background-position: right bottom !important;
            background-size: cover !important;
          }
          .founder-name {
            font-size: 1.1em !important;
            margin-left: 0 !important;
            transform: rotate(-2deg) !important;
          }
        }
        @media (max-width: 480px) {
          .hero-bg-img {
            background-position: right bottom !important;
            background-size: cover !important;
          }
          .hero-content-wrap {
            padding: 80px 20px 0 !important;
          }
        }
      `}</style>
      {/* ── BACKGROUND IMAGE WITH PARALLAX ── */}
      <motion.div
        className="hero-bg-img"
        style={{
          position: 'absolute',
          top: '-20%',
          left: 0,
          right: 0,
          bottom: '-20%',
          y,
          zIndex: 1,
          backgroundImage: 'url(/new.jpeg)',
          backgroundRepeat: 'no-repeat',
        }}
      />



      {/* ── CONTENT CONTAINER ── */}
      <div
        className="hero-content-wrap"
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          height: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 5vw',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* TEXT BLOCK */}
        <div className="hero-text-block">
          
          {/* Micro Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.3em',
              color: 'rgba(13,13,13,0.6)',
              textTransform: 'uppercase',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            FOUNDER • THERAPIST • RESEARCHER
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: 'clamp(42px, 8vw, 110px)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#0D0D0D',
              margin: 0,
              marginBottom: '40px',
            }}
          >
            <span className={`${kaushan.className} founder-name`}>Shenbakam</span>
            <span style={{ fontWeight: 500, fontStyle: 'italic', display: 'block', paddingLeft: '0.2em' }}>
              Natarajan
            </span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: 'clamp(18px, 1.5vw, 22px)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'rgba(13,13,13,0.85)',
              margin: 0,
              marginBottom: '56px',
              maxWidth: '480px',
            }}
          >
            Relationship therapist, researcher, and the founder of the Viruthi Centre for Flourishing Families.
          </motion.p>

          {/* Delicate Divider & Quote */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
            style={{
              height: '1px',
              width: '40px',
              background: 'rgba(13,13,13,0.3)',
              marginBottom: '32px',
              transformOrigin: 'left',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: EASE }}
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '15px',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.8,
              letterSpacing: '0.02em',
              color: 'rgba(13,13,13,0.7)',
              margin: 0,
              position: 'relative',
            }}
          >
            &quot;Strong families create stronger futures.&quot;
          </motion.p>
        </div>
      </div>

      {/* ── BOTTOM SCROLL INDICATOR ── */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '9px',
            fontWeight: 400,
            letterSpacing: '0.3em',
            color: 'var(--black)',
            opacity: 0.5,
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'rgba(13,13,13,0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '50%',
              background: 'rgba(255,255,255,0.6)',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
