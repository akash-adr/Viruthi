'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic'],
});

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function OurStory() {
  return (
    <section
      id="our-story"
      style={{
        width: '100%',
        background: '#FFFFFF',
        padding: '160px 5vw 80px',
        borderBottom: '1px solid rgba(13,13,13,0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .story-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .story-text {
          font-family: var(--font-satoshi);
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 300;
          line-height: 1.8;
          color: rgba(13,13,13,0.85);
          margin: 0;
        }
        .story-quote {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          font-style: italic;
          color: #0D0D0D;
          margin: 24px 0;
          line-height: 1.3;
          text-align: center;
          letter-spacing: -0.01em;
          position: relative;
        }
        .story-quote::before, .story-quote::after {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: rgba(13,13,13,0.2);
          margin: 40px auto;
        }
        .section-title {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 600;
          color: #0D0D0D;
          margin: 0 0 16px 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-align: center;
        }
        .micro-label {
          font-family: var(--font-satoshi);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3em;
          color: rgba(13,13,13,0.4);
          text-transform: uppercase;
          margin-bottom: 24px;
          display: block;
          text-align: center;
        }
      `}</style>

      <div className="story-container">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="micro-label">ORIGINS</span>
          <h2 className={`section-title ${playfair.className}`} style={{ fontStyle: 'italic' }}>
            Our story
          </h2>
        </motion.div>

        {/* ── PARAGRAPHS ── */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="story-text"
        >
          I always knew I wanted to work with people, but for a long time I didn’t know how. During my college years and the years that followed, I immersed myself deeply in the world of self-help and personal development. For nearly seven years, I was reading books, blogs, and constantly exploring what makes people grow, heal, and live meaningful lives.
        </motion.p>

        {/* ── QUOTE 1 ── */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 1.0, ease: EASE }}
          className={`story-quote ${playfair.className}`}
        >
          “Why are people struggling so much in something that is supposed to be a source of love and joy?”
        </motion.h3>

        {/* ── PARAGRAPHS ── */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="story-text"
        >
          Around the same time, two close friends were going through a divorce. Watching people I cared about struggle made me ask a deeper question. Relationships are meant to give us belonging, safety, and companionship. Yet for many people, they become a source of pain and confusion.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="story-text"
        >
          That curiosity slowly became a calling. I enrolled for my Master’s in Medical and Psychiatric Social Work at the Madras School of Social Work, known for its intensive fieldwork. Over those years, I interned at Childline, worked with I Love Mondays on Howard Gardner’s multiple intelligences with preteens, researched gaming addiction at the National Institute of Epidemiology when PUBG was at its peak, and trained at NIMHANS, Bangalore.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="story-text"
        >
          Much of my work in those years was with children. Slowly, a realisation emerged — children are deeply affected by the emotional health of their parents. When parents are struggling, disconnected, or unhappy, children inevitably carry that emotional burden.
        </motion.p>

        {/* ── QUOTE 2 ── */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 1.0, ease: EASE }}
          className={`story-quote ${playfair.className}`}
        >
          If I truly want to help children, I must help their parents.
        </motion.h3>

        {/* ── CONCLUSION ── */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="story-text"
        >
          Couples enter marriage with very little preparation. There is no manual, no structured education about relationships. People often enter with assumptions and expectations, and when reality feels different, they struggle silently.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="story-text"
          style={{ fontWeight: 500, color: '#0D0D0D', textAlign: 'center', marginTop: '16px' }}
        >
          Many couples don’t flourish in marriage. They simply endure it.<br />This realisation shaped my life’s work.
        </motion.p>
      </div>
    </section>
  );
}
