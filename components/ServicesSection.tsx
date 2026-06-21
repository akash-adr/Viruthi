'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'], style: ['italic', 'normal'] });

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ServicesSection() {
  return (
    <section id="services" style={{ width: '100%', background: '#FFFFFF', padding: '160px 5vw', position: 'relative' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1440px', margin: '0 auto 80px', textAlign: 'center' }}>
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
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 1200px) {
          .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: minmax(0, 1fr); }
        }

        .service-card {
          background: #FAFAFA;
          border: 1px solid rgba(13,13,13,0.08);
          border-radius: 24px;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .service-card:hover {
          background: #FFFFFF;
          border-color: rgba(13,13,13,0.15);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          transform: translateY(-4px);
        }
        .service-card.coming-soon {
          opacity: 0.6;
        }
        .service-card.coming-soon:hover {
          transform: none;
          box-shadow: none;
          background: #FAFAFA;
          border-color: rgba(13,13,13,0.08);
        }

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
          font-size: 32px;
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

        .service-btn {
          width: 100%;
          padding: 20px;
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
        .service-btn.disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .service-btn.disabled:hover {
          border-color: rgba(13,13,13,0.1);
          background: transparent;
        }
      `}</style>

      <div className="services-grid">
        
        {/* CARD 01 */}
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
            <div className="practices-label">Core Practices & Alignments:</div>
            <ul className="practice-list">
              <li className="practice-item">
                <span className="practice-num">01</span>
                <span className="practice-text">Premarital preparation & alignment</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">02</span>
                <span className="practice-text">Conflict, distance & communication</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">03</span>
                <span className="practice-text">Affair recovery & rebuilding trust</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">04</span>
                <span className="practice-text">Intimacy, sexuality & desire</span>
              </li>
            </ul>
          </div>

          <button className="service-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>Schedule Confidential Consultation</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </motion.div>

        {/* CARD 02 (COMING SOON) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="service-card coming-soon"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '600px' }}
        >
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px dashed rgba(13,13,13,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <h3 className={playfair.className} style={{ fontSize: '32px', color: '#0D0D0D', marginBottom: '16px' }}>Coming Soon</h3>
          <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '20px', color: 'rgba(13,13,13,0.85)', maxWidth: '240px' }}>
            A new exclusive service is currently under development.
          </p>
        </motion.div>

        {/* CARD 03 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
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
            <div className="practices-label">Core Practices & Alignments:</div>
            <ul className="practice-list">
              <li className="practice-item">
                <span className="practice-num">05</span>
                <span className="practice-text">Marriage, separation & divorce</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">06</span>
                <span className="practice-text">Custody, guardianship & maintenance</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">07</span>
                <span className="practice-text">Mediation & out-of-court settlement</span>
              </li>
              <li className="practice-item">
                <span className="practice-num">08</span>
                <span className="practice-text">Estate, succession & family agreements</span>
              </li>
            </ul>
          </div>

          <button className="service-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>Inquire With Legal Counsel</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
