'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'], style: ['italic', 'normal'] });

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ServicesSection() {
  return (
    <section id="services" style={{ width: '100%', background: '#FFFFFF', padding: 'clamp(80px, 12vw, 160px) 5vw', position: 'relative' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1440px', margin: '0 auto clamp(48px,6vw,80px)', textAlign: 'center' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className={playfair.className}
          style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 400, color: '#0D0D0D', marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-0.02em' }}
        >
          What we offer.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-satoshi)', fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 300, color: 'rgba(13,13,13,0.85)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.5 }}
        >
          Two practices, one philosophy. Each begins with listening — to what is said, and what cannot yet be said.
        </motion.p>
      </div>

      <style>{`
        .services-grid {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: minmax(0, 1fr); }
        }

        .service-card {
          background: #FAFAFA;
          border: 1px solid rgba(13,13,13,0.08);
          border-radius: 24px;
          padding: clamp(28px, 4vw, 48px) clamp(24px, 3vw, 40px);
          display: flex;
          flex-direction: column;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .service-card:hover {
          background: #FFFFFF;
          border-color: rgba(13,13,13,0.15);
          box-shadow: 0 20px 60px rgba(0,0,0,0.05);
          transform: translateY(-4px);
        }

        /* Coming Soon Card */
        .service-card.coming-soon {
          background: #F5F5F3;
          border: 1px dashed rgba(13,13,13,0.12);
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: clamp(320px, 40vw, 480px);
          cursor: default;
        }
        @media (max-width: 480px) {
          .service-card.coming-soon { min-height: 260px; }
          .service-title { font-size: 28px !important; }
          .service-desc { font-size: 16px !important; }
          .service-btn { font-size: 10px !important; padding: 14px !important; }
          .service-actions { gap: 8px; }
        }
        .service-card.coming-soon:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.04);
          border-color: rgba(13,13,13,0.18);
          background: #F5F5F3;
        }
        .coming-soon-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .coming-soon-orbit {
          position: relative;
          width: 100px;
          height: 100px;
          margin-bottom: 36px;
        }
        .orbit-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(13,13,13,0.1);
          animation: spin-slow 12s linear infinite;
        }
        .orbit-ring:nth-child(2) {
          inset: 10px;
          border-color: rgba(13,13,13,0.07);
          animation-duration: 8s;
          animation-direction: reverse;
        }
        .orbit-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(13,13,13,0.25);
          top: -3px;
          left: 50%;
          transform: translateX(-50%);
        }
        .orbit-center-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .cs-service-num {
          font-family: var(--font-satoshi);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.3);
          margin-bottom: 16px;
        }
        .cs-title {
          font-size: 36px;
          color: #0D0D0D;
          line-height: 1.15;
          margin-bottom: 18px;
          font-weight: 400;
        }
        .cs-desc {
          font-family: var(--font-satoshi);
          font-size: 16px;
          color: rgba(13,13,13,0.45);
          line-height: 1.6;
          max-width: 280px;
          font-weight: 300;
          margin-bottom: 36px;
        }
        .cs-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 100px;
          border: 1px solid rgba(13,13,13,0.1);
          font-family: var(--font-satoshi);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.4);
        }
        .cs-pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(13,13,13,0.25);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        /* Active Card Styles */
        .card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .service-number {
          font-family: var(--font-satoshi);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.85);
        }
        .arrow-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(13,13,13,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0D0D0D;
          transition: all 0.3s ease;
        }
        .service-card:hover .arrow-circle {
          background: #0D0D0D;
          color: #FFFFFF;
          border-color: #0D0D0D;
        }

        .service-title {
          font-size: 38px;
          color: #0D0D0D;
          line-height: 1.2;
          margin-bottom: 24px;
          font-weight: 400;
        }
        .service-desc {
          font-family: var(--font-satoshi);
          font-size: 18px;
          color: rgba(13,13,13,0.85);
          line-height: 1.6;
          margin-bottom: 48px;
          font-weight: 300;
        }

        .practices-label {
          font-family: var(--font-satoshi);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.85);
          margin-bottom: 24px;
        }

        .practice-list {
          list-style: none;
          padding: 0;
          margin: 0 0 48px 0;
          flex: 1;
        }
        .practice-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(13,13,13,0.06);
        }
        .practice-item:last-child {
          border-bottom: none;
        }
        .practice-num {
          font-family: var(--font-satoshi);
          font-size: 11px;
          color: rgba(13,13,13,0.3);
          font-style: italic;
        }
        .practice-text {
          font-family: var(--font-satoshi);
          font-size: 14px;
          color: #0D0D0D;
          line-height: 1.4;
          font-weight: 400;
        }

        .service-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .service-btn {
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 12px;
          font-family: var(--font-satoshi);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0D0D0D;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .service-btn:hover {
          border-color: #0D0D0D;
          background: #FAFAFA;
        }

        .service-btn-primary {
          background: #0D0D0D;
          color: #FFFFFF;
          border-color: #0D0D0D;
        }
        .service-btn-primary:hover {
          background: #222222;
          border-color: #222222;
        }
      `}</style>

      <div className="services-grid">
        
        {/* CARD 01 — Relationship & Couple Coaching */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="service-card"
        >
          <div className="card-top-bar">
            <span className="service-number">Service — 01</span>
            <div className="arrow-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          
          <h3 className={`service-title ${playfair.className}`}>Relationship &<br/>Couple Coaching</h3>
          <p className="service-desc">
            Emotion-focused, trauma-informed work for couples and individuals — to heal disconnection, rebuild trust, and create relationships that feel safe, intimate, and alive.
          </p>

          <div style={{ borderTop: '1px solid rgba(13,13,13,0.08)', paddingTop: '32px' }}>
            <div className="practices-label">Core Practices &amp; Alignments:</div>
            <ul className="practice-list">
              <li className="practice-item">
                <span className="practice-num">01</span>
                <span className="practice-text">Premarital preparation &amp; alignment</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">02</span>
                <span className="practice-text">Conflict, distance &amp; communication</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">03</span>
                <span className="practice-text">Affair recovery &amp; rebuilding trust</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">04</span>
                <span className="practice-text">Intimacy, sexuality &amp; desire</span>
              </li>
            </ul>
          </div>

          <div className="service-actions">
            <Link href="/services/relationship-coaching" onClick={() => window.scrollTo(0,0)} style={{ textDecoration: 'none', display: 'block' }}>
              <button className="service-btn" style={{ width: '100%' }}>
                <span>Learn More</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </Link>
            <button className="service-btn service-btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>Book a Call</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </motion.div>

        {/* CARD 02 — Family Legal Services */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="service-card"
        >
          <div className="card-top-bar">
            <span className="service-number">Service — 02</span>
            <div className="arrow-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          
          <h3 className={`service-title ${playfair.className}`}>Family Legal<br/>Services</h3>
          <p className="service-desc">
            Compassionate, confidential legal counsel for matters of the family — handled with discretion, rigor, and a deep respect for the lives involved.
          </p>

          <div style={{ borderTop: '1px solid rgba(13,13,13,0.08)', paddingTop: '32px' }}>
            <div className="practices-label">Core Practices &amp; Alignments:</div>
            <ul className="practice-list">
              <li className="practice-item">
                <span className="practice-num">05</span>
                <span className="practice-text">Marriage, separation &amp; divorce</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">06</span>
                <span className="practice-text">Custody, guardianship &amp; maintenance</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">07</span>
                <span className="practice-text">Mediation &amp; out-of-court settlement</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">08</span>
                <span className="practice-text">Estate, succession &amp; family agreements</span>
              </li>
            </ul>
          </div>

          <div className="service-actions">
            <button className="service-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="service-btn service-btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>Book a Call</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </motion.div>

        {/* CARD 03 — Coming Soon */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="service-card coming-soon"
        >
          <div className="coming-soon-inner">
            <div className="coming-soon-orbit">
              <div className="orbit-ring">
                <div className="orbit-dot" />
              </div>
              <div className="orbit-ring" />
              <div className="orbit-center-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
            </div>
            <p className="cs-service-num">Service — 03</p>
            <h3 className={`cs-title ${playfair.className}`}>Coming<br/><em>Soon</em></h3>
            <p className="cs-desc">
              A new exclusive service is currently under development. Stay tuned.
            </p>
            <div className="cs-pill">
              <span className="cs-pill-dot" />
              In Development
            </div>
          </div>
        </motion.div>

        {/* CARD 04 — Coming Soon */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="service-card coming-soon"
        >
          <div className="coming-soon-inner">
            <div className="coming-soon-orbit">
              <div className="orbit-ring">
                <div className="orbit-dot" />
              </div>
              <div className="orbit-ring" />
              <div className="orbit-center-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
            </div>
            <p className="cs-service-num">Service — 04</p>
            <h3 className={`cs-title ${playfair.className}`}>Coming<br/><em>Soon</em></h3>
            <p className="cs-desc">
              Something meaningful is being shaped behind the scenes. We&apos;ll share more when it&apos;s ready.
            </p>
            <div className="cs-pill">
              <span className="cs-pill-dot" />
              In Development
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
