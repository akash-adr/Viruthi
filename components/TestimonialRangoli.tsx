'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['italic', 'normal'],
});

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Client A.",
    subtext: "Mother & Wife",
    initial: "A",
    body: "Ma'am, thank you so much. I don't know how I was able to survive the vacation, so I signed up for your classes. It has been greatly useful. After implementing within the last two weeks, I could see tremendous changes. My husband is not a person who will apologize. He used a lot of verbal abuse on me and my child. It was hurting both of us for so very long. Now, apply the strategies that you taught in the class, and in this week itself, he apologized twice, and I should say that is a miracle itself. Grateful to you, ma'am.",
  },
  {
    id: 2,
    name: "Client M.",
    subtext: "Participant",
    initial: "M",
    body: "So kind hearted soul you are.... happy to know you in life.... The way you handled our emotions, listening to questions, conflicts and stories are quite impressive...... often giving Examples from your life and how you handled it was very helpful for understanding and broke a understanding that \"conflicts are the actual enemy\" ... Love to learn more from you..... Love you a lot SHEN......",
  },
  {
    id: 3,
    name: "Client S.",
    subtext: "Program Graduate",
    initial: "S",
    body: "Can't believe the 10 days are already over. I've gained great learnings, and as usual, you went beyond your time to answer our queries and truly listen to what we had to say. This experience has been a perfect realization to end old negative patterns, a beginning to fight better and start building new connections.",
  },
  {
    id: 4,
    name: "A Couple",
    subtext: "Parents",
    initial: "C",
    body: "It was like an ice breaking session and also the much deserved time we had to spend for both of us. We have been running around so much that we don't talk about these things or we feel it's not needed anymore. I could sense the amount of love that is always there between but just we took it for granted and slowly it took backseat amidst the daily chores and parenting. I think we will be consciously working and doing things to work towards a constructive intimacy.",
  },
  {
    id: 5,
    name: "Client R.",
    subtext: "Participant",
    initial: "R",
    body: "For me, so far 'communication' is just sharing information but after the session realized how important it is in a relationship and happy that atleast i know now with our session and feel like really I have to follow this to any person..Thanks for great session.",
  },
  {
    id: 6,
    name: "Client K.",
    subtext: "Counseling Client",
    initial: "K",
    body: "Hi Shen, I am grateful for taking counseling sessions from you. Literally it is changing a lot for good in my relationship. And thanks for letting us know about the communication mastery program. We were so new to this yet we gave a try and this program is making us understand all the communication gaps we have and how we can handle the conflicts better. It's really an eye opener. Many communication strategies and tools you elaborate are highly important aspects in handling conflicts. I really wish we both practice those and be better together. You know how hopeless I was but now I am ready to make change and fight better. All thanks to you. We are learning and healing from the program. Still we have few more sessions, but I can already feel some change in our relationship. Thanks Shen for the work you do.",
  }
];

const DOT_COORDS = [
  [50.0, 22.5], // 0: Top
  [69.1, 39.0], // 1: TR
  [69.1, 60.8], // 2: BR
  [50.0, 77.0], // 3: Bottom
  [30.9, 60.8], // 4: BL
  [30.9, 39.0], // 5: TL
];

export default function TestimonialRangoli() {
  const [activeDot, setActiveDot] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  const activeTestimonial = TESTIMONIALS[activeDot];

  return (
    <section 
      id="testimonials"
      ref={containerRef}
      style={{
        width: '100%',
        background: '#FFFFFF',
        padding: '140px 5vw',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .tr-container {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 8vw;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .tr-container {
            grid-template-columns: 1fr;
            gap: 64px;
          }
        }

        /* Rangoli Styles */
        .rangoli-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          aspect-ratio: 1;
        }
        .rangoli-dot {
          fill: rgba(255,255,255,0.01);
          stroke: transparent;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .rangoli-dot:hover:not(.active) {
          fill: rgba(13,13,13,0.3);
        }
        .rangoli-dot.active {
          fill: rgba(13,13,13,0.9);
          transform-origin: center;
        }
        .rangoli-pulse {
          fill: none;
          stroke: #0D0D0D;
          stroke-width: 0.5;
          opacity: 0;
        }
        @keyframes pulse {
          0% { r: 3px; opacity: 0.6; }
          100% { r: 8px; opacity: 0; }
        }
        .rangoli-dot.active + .rangoli-pulse {
          animation: pulse 2s infinite cubic-bezier(0.16, 1, 0.3, 1);
        }

        .trace-pill {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: #0D0D0D;
          color: #FFFFFF;
          padding: 14px 24px;
          border-radius: 999px;
          font-family: var(--font-satoshi);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
          z-index: 10;
        }

        /* Right Card Styles */
        .testimonial-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 64px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.04);
          border: 1px solid rgba(13,13,13,0.08);
          position: relative;
        }
        @media (max-width: 600px) {
          .testimonial-card { padding: 40px 24px; }
        }
        
        .t-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 48px;
        }
        .t-avatar-group {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .t-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(13,13,13,0.2);
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-satoshi);
          color: #0D0D0D;
          font-weight: 600;
          font-size: 18px;
        }
        .t-body-text {
          font-family: var(--font-satoshi);
          font-size: 18px;
          color: #0D0D0D;
          line-height: 1.8;
          text-align: justify;
        }
        .t-quote-mark {
          font-size: 64px;
          color: rgba(13,13,13,0.1);
          font-family: serif;
          line-height: 0;
          position: absolute;
          top: 64px;
          left: 32px;
        }
        @media (max-width: 600px) {
          .t-quote-mark { left: 16px; top: 40px; }
        }
      `}} />

      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ textAlign: 'center', marginBottom: '100px' }}
      >
        <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#0D0D0D', fontWeight: 600, marginBottom: '16px' }}>
          Happily, Ever After Therapy
        </div>
        <h2 className={playfair.className} style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#0D0D0D', margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          -their <span style={{ fontStyle: 'italic' }}>testimonials</span>
        </h2>
      </motion.div>

      <div className="tr-container">
        
        {/* LEFT COLUMN: RANGOLI */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <div className="rangoli-wrapper">
            <img 
              src="/testimonial.jpeg" 
              alt="Viruthi Testimonials" 
              style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }} 
            />

            <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0, zIndex: 5 }}>
              {/* The 6 Dots */}
              {DOT_COORDS.map((coord, i) => (
                <g key={i}>
                  <circle 
                    cx={coord[0]} 
                    cy={coord[1]} 
                    r="3" 
                    className={`rangoli-dot ${activeDot === i ? 'active' : ''}`}
                    onClick={() => setActiveDot(i)}
                    style={{ transformOrigin: `${coord[0]}% ${coord[1]}%` }}
                  />
                  {activeDot === i && (
                    <circle 
                      cx={coord[0]} 
                      cy={coord[1]} 
                      r="6" 
                      className="rangoli-pulse" 
                      style={{ transformOrigin: `${coord[0]}% ${coord[1]}%` }} 
                    />
                  )}
                </g>
              ))}
            </svg>

            <div className="trace-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
              SELECT ANY DOT TO TRACE A STORY
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: TESTIMONIAL CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
          className="testimonial-card"
        >
          <div className="t-quote-mark">“</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDot}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="t-header">
                <div className="t-avatar-group">
                  <div className="t-avatar">{activeTestimonial.initial}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '16px', fontWeight: 600, color: '#0D0D0D' }}>{activeTestimonial.name}</div>
                    <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '12px', color: 'rgba(13,13,13,0.85)' }}>{activeTestimonial.subtext}</div>
                  </div>
                </div>
                <div className={playfair.className} style={{ fontSize: 'clamp(40px, 4vw, 64px)', fontWeight: 300, color: 'rgba(13,13,13,0.05)', lineHeight: 0.8, letterSpacing: '-0.02em' }}>
                  DOT {activeDot + 1}
                </div>
              </div>

              <div className="t-body-text">
                &quot;{activeTestimonial.body}&quot;
              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.6, ease: EASE }}
        style={{
          marginTop: '120px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4vw',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontStyle: 'italic', color: 'rgba(13,13,13,0.85)' }}>
            Want to read more experiences?
          </div>
          <Link
            href="/testimonials"
            style={{
              display: 'inline-block',
              padding: '18px 46px',
              background: 'transparent',
              color: '#0D0D0D',
              border: '2px solid #0D0D0D',
              borderRadius: '999px',
              fontFamily: 'var(--font-satoshi)',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              textDecoration: 'none',
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
              (e.currentTarget as HTMLElement).style.background = '#0D0D0D';
              (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.color = '#0D0D0D';
            }}
          >
            Explore more testimonials
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontStyle: 'italic', color: 'rgba(13,13,13,0.85)' }}>
            Ready to trace your own story?
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '20px 48px',
              background: '#0D0D0D',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '999px',
              fontFamily: 'var(--font-satoshi)',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
              e.currentTarget.style.background = '#333333';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = '#0D0D0D';
            }}
          >
            Begin the Journey
          </button>
        </div>
      </motion.div>

    </section>
  );
}
