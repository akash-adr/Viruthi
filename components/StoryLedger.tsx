'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['italic'],
});

const TABS = [
  { id: 1, number: '01', title: 'The Long Search', subtitle: 'Exploring Growth & Purpose' },
  { id: 2, number: '02', title: 'The Fracture', subtitle: 'A Haunting Realisation' },
  { id: 3, number: '03', title: 'The Practicalities', subtitle: 'Clinical Footsteps' },
  { id: 4, number: '04', title: 'The Realisation', subtitle: 'Children & Mothers/Fathers' },
  { id: 5, number: '05', title: 'The Life\'s Work', subtitle: 'The Flourishing Compass' },
];

export default function StoryLedger() {
  const [activeTab, setActiveTab] = useState(1);
  const [statState, setStatState] = useState<'chaotic' | 'nurtured'>('chaotic');

  return (
    <section style={{ width: '100%', background: '#FFFFFF', padding: '120px 5vw', display: 'flex', justifyContent: 'center' }}>
      <style>{`
        .ledger-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          gap: 6vw;
          align-items: flex-start;
        }
        @media (max-width: 900px) {
          .ledger-container {
            flex-direction: column;
          }
        }
        
        .tab-btn {
          width: 100%;
          text-align: left;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid rgba(13,13,13,0.08);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }
        .tab-btn:hover {
          background: rgba(13,13,13,0.02);
        }
        .tab-btn.active {
          background: #F8F3ED; /* Subtle premium beige */
          border-color: #E6D5C3;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        
        .tab-number {
          font-family: var(--font-satoshi);
          font-size: 12px;
          font-weight: 600;
          color: rgba(13,13,13,0.4);
        }
        .tab-btn.active .tab-number {
          color: #0D0D0D;
        }
        
        .tab-title {
          font-family: var(--font-satoshi);
          font-size: 16px;
          font-weight: 500;
          color: rgba(13,13,13,0.6);
          margin-bottom: 4px;
        }
        .tab-btn.active .tab-title {
          color: #0D0D0D;
        }
        
        .tab-subtitle {
          font-family: var(--font-satoshi);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(13,13,13,0.4);
        }
        .tab-btn.active .tab-subtitle {
          color: rgba(13,13,13,0.6);
        }

        .content-panel {
          flex: 1;
          width: 100%;
          min-height: 600px;
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 16px;
          padding: 48px;
          position: relative;
          background: #FFFFFF;
        }
        @media (max-width: 600px) {
          .content-panel {
            padding: 32px 24px;
          }
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(13,13,13,0.1);
          padding-bottom: 24px;
          margin-bottom: 40px;
        }
        .panel-chapter {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: rgba(13,13,13,0.4);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .panel-title {
          font-family: var(--font-satoshi);
          font-size: 14px;
          font-weight: 400;
          color: rgba(13,13,13,0.5);
          font-style: italic;
        }

        .corner-bracket {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: rgba(13,13,13,0.15);
          border-style: solid;
        }
        .tl { top: 16px; left: 16px; border-width: 1px 0 0 1px; }
        .tr { top: 16px; right: 16px; border-width: 1px 1px 0 0; }
        .bl { bottom: 16px; left: 16px; border-width: 0 0 1px 1px; }
        .br { bottom: 16px; right: 16px; border-width: 0 1px 1px 0; }

        .body-text {
          font-size: clamp(16px, 1.5vw, 18px);
          line-height: 1.8;
          color: rgba(13,13,13,0.8);
          font-weight: 300;
          margin-bottom: 24px;
        }

        /* Unique Elements */
        .info-box {
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          gap: 16px;
          align-items: center;
          margin-top: 48px;
          background: #FAFAFA;
        }
        
        .grid-4 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 40px;
        }
        @media (max-width: 600px) {
          .grid-4 { grid-template-columns: 1fr; }
        }
        .grid-card {
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 8px;
          padding: 24px;
          position: relative;
          background: #FAFAFA;
        }
        
        .stat-box {
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 12px;
          padding: 32px;
          margin: 40px 0;
          background: #FAFAFA;
        }

        .covenant-form {
          border: 1px solid rgba(13,13,13,0.1);
          border-radius: 12px;
          padding: 32px;
          margin-top: 40px;
          background: #FAFAFA;
        }
        .form-input {
          width: 100%;
          padding: 16px;
          background: transparent;
          border: 1px solid rgba(13,13,13,0.15);
          border-radius: 8px;
          font-family: var(--font-satoshi);
          font-size: 14px;
          margin-bottom: 16px;
          outline: none;
        }
        .form-btn {
          width: 100%;
          padding: 16px;
          background: #0D0D0D;
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
        }
      `}</style>

      <div className="ledger-container">
        
        {/* LEFT NAV */}
        <div style={{ flex: '0 0 340px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.2em', fontWeight: 600, color: 'rgba(13,13,13,0.4)', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>
            The Active Story Ledger
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 3vw, 42px)', fontWeight: 400, color: '#0D0D0D', marginBottom: '16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            An Inescapable <span className={playfair.className}>Truth</span>
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(13,13,13,0.6)', lineHeight: 1.6, marginBottom: '48px' }}>
            An experiential chronicle detailing self-development, friends&apos; divorce, psychiatric social practice, and the eventual parent-centered paradigm shift.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {TABS.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                <span className="tab-number">{tab.number}</span>
                <div>
                  <div className="tab-title">{tab.title}</div>
                  <div className="tab-subtitle">{tab.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="content-panel">
          <div className="corner-bracket tl"></div>
          <div className="corner-bracket tr"></div>
          <div className="corner-bracket bl"></div>
          <div className="corner-bracket br"></div>

          <div className="panel-header">
            <div className="panel-chapter">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              CHRONICLE CHAPTER {TABS.find(t => t.id === activeTab)?.number}
            </div>
            <div className="panel-title">{TABS.find(t => t.id === activeTab)?.title}</div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{ paddingBottom: '80px' }}
            >
              
              {/* CHAPTER 1 */}
              {activeTab === 1 && (
                <div>
                  <h3 className={playfair.className} style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#0D0D0D', marginBottom: '40px', lineHeight: 1.3 }}>
                    &quot;I always knew I wanted to work with people, but for a long time I didn&apos;t know how.&quot;
                  </h3>
                  <p className="body-text">
                    During my college years and the years that followed, I immersed myself deeply in the world of self-help and personal development. For nearly seven years, I was reading books, blogs, and constantly exploring what makes people grow, heal, and live meaningful lives.
                  </p>
                  <div className="info-box">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(13,13,13,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(13,13,13,0.5)', marginBottom: '4px' }}>Continuous Horizon</div>
                      <div style={{ fontSize: '14px', color: '#0D0D0D' }}>Seven years of self-directed research & philosophical inquiry.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* CHAPTER 2 */}
              {activeTab === 2 && (
                <div>
                  <div style={{ borderLeft: '3px solid #8B2C2C', paddingLeft: '24px', marginBottom: '40px' }}>
                    <h3 className={playfair.className} style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 400, color: '#8B2C2C', margin: 0, lineHeight: 1.3 }}>
                      &quot;Why are people struggling so much in something that is supposed to be a source of love and joy?&quot;
                    </h3>
                  </div>
                  <p className="body-text">
                    Around the same time, two close friends were going through a divorce. Watching people I cared about struggle made me ask a deeper question. Relationships are meant to give us belonging, safety, and companionship. Yet for many people, they become a source of pain and confusion.
                  </p>
                </div>
              )}

              {/* CHAPTER 3 */}
              {activeTab === 3 && (
                <div>
                  <p className="body-text">
                    That curiosity slowly became a <span className={playfair.className} style={{ fontStyle: 'italic', color: '#0D0D0D' }}>calling</span>. I enrolled for my Master&apos;s in Medical and Psychiatric Social Work at the <strong style={{ fontWeight: 500 }}>Madras School of Social Work</strong>, known for its intensive fieldwork.
                  </p>
                  
                  <div className="grid-4">
                    <div className="grid-card">
                      <div style={{ position: 'absolute', top: 16, right: 16, fontSize: '10px', color: 'rgba(13,13,13,0.3)' }}>01</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Childline (ICCW)</div>
                      <div style={{ fontSize: '12px', color: 'rgba(13,13,13,0.6)', lineHeight: 1.5 }}>Child protection & clinical field intervention</div>
                    </div>
                    <div className="grid-card">
                      <div style={{ position: 'absolute', top: 16, right: 16, fontSize: '10px', color: 'rgba(13,13,13,0.3)' }}>02</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>I Love Mondays</div>
                      <div style={{ fontSize: '12px', color: 'rgba(13,13,13,0.6)', lineHeight: 1.5 }}>Howard Gardner&apos;s multiple intelligences with preteens</div>
                    </div>
                    <div className="grid-card">
                      <div style={{ position: 'absolute', top: 16, right: 16, fontSize: '10px', color: 'rgba(13,13,13,0.3)' }}>03</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>ICMR Research</div>
                      <div style={{ fontSize: '12px', color: 'rgba(13,13,13,0.6)', lineHeight: 1.5 }}>PUBG gaming addiction at peak epidemic</div>
                    </div>
                    <div className="grid-card">
                      <div style={{ position: 'absolute', top: 16, right: 16, fontSize: '10px', color: 'rgba(13,13,13,0.3)' }}>04</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>NIMHANS training</div>
                      <div style={{ fontSize: '12px', color: 'rgba(13,13,13,0.6)', lineHeight: 1.5 }}>Premier psychiatric care residency & diagnostics</div>
                    </div>
                  </div>
                </div>
              )}

              {/* CHAPTER 4 */}
              {activeTab === 4 && (
                <div>
                  <p className="body-text">
                    Much of my work in those years was with children. Slowly, a realisation emerged — <span style={{ color: '#8B2C2C' }}>children are deeply affected by the emotional health of their parents</span>. When parents are struggling, disconnected, or unhappy, children inevitably carry that emotional burden.
                  </p>
                  
                  <div style={{ margin: '40px 0' }}>
                    {/* Toggle */}
                    <div style={{ 
                      display: 'flex', 
                      background: 'transparent',
                      border: '1px solid rgba(13,13,13,0.1)', 
                      borderRadius: '999px',
                      padding: '4px',
                      marginBottom: '16px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '4px',
                        bottom: '4px',
                        left: statState === 'chaotic' ? '4px' : 'calc(50% + 2px)',
                        width: 'calc(50% - 6px)',
                        background: statState === 'chaotic' ? 'rgba(13,13,13,0.04)' : '#F8F3ED',
                        border: statState === 'nurtured' ? '1px solid #E6D5C3' : '1px solid transparent',
                        borderRadius: '999px',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }} />
                      <button 
                        onClick={() => setStatState('chaotic')}
                        style={{ flex: 1, padding: '14px 0', textAlign: 'center', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: statState === 'chaotic' ? '#0D0D0D' : 'rgba(13,13,13,0.4)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 1, transition: 'color 0.3s ease' }}
                      >
                        CHAOTIC
                      </button>
                      <button 
                        onClick={() => setStatState('nurtured')}
                        style={{ flex: 1, padding: '14px 0', textAlign: 'center', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: statState === 'nurtured' ? '#0D0D0D' : 'rgba(13,13,13,0.4)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 1, transition: 'color 0.3s ease' }}
                      >
                        NURTURED
                      </button>
                    </div>

                    {/* Stats Card */}
                    <div style={{ 
                      border: '1px solid rgba(13,13,13,0.1)', 
                      borderRadius: '16px', 
                      padding: '32px 40px', 
                      background: '#FAFAFA',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{ fontSize: '10px', color: 'rgba(13,13,13,0.4)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Parent Stat</div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={statState}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className={playfair.className}
                            style={{ fontSize: '20px', color: '#0D0D0D', fontStyle: 'italic' }}
                          >
                            {statState === 'chaotic' ? 'Dysregulation' : 'Equilibrium'}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      
                      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                         <AnimatePresence mode="wait">
                           <motion.svg
                             key={statState}
                             initial={{ opacity: 0, scale: 0.8 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 0.8 }}
                             transition={{ duration: 0.2 }}
                             width="64" height="24" viewBox="0 0 64 24" fill="none" stroke={statState === 'chaotic' ? 'rgba(13,13,13,0.8)' : '#B8A38E'} strokeWidth="1.5"
                           >
                             {statState === 'chaotic' ? (
                               <path d="M0 12h20l4-10 8 20 6-15 4 5h22" strokeLinejoin="round" />
                             ) : (
                               <path d="M0 12h24l4-4 4 8 4-4h28" strokeLinejoin="round" />
                             )}
                           </motion.svg>
                         </AnimatePresence>
                      </div>

                      <div style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{ fontSize: '10px', color: 'rgba(13,13,13,0.4)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Child Stat</div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={statState}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className={playfair.className}
                            style={{ fontSize: '20px', color: '#0D0D0D', fontStyle: 'italic' }}
                          >
                            {statState === 'chaotic' ? 'Carried Burden' : 'Flourishing Bloom'}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <h3 className={playfair.className} style={{ fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 400, fontStyle: 'italic', color: '#0D0D0D', margin: 0 }}>
                    &quot;If I truly want to help children, I must help their parents.&quot;
                  </h3>
                </div>
              )}

              {/* CHAPTER 5 */}
              {activeTab === 5 && (
                <div>
                  <p className="body-text">
                    Couples enter marriage with very little preparation. There is no manual, no structured education about relationships. People often enter with assumptions and expectations, and when reality feels different, they struggle silently. Many couples don&apos;t flourish in marriage. They simply endure it.
                  </p>
                  
                  <div className="covenant-form">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(13,13,13,0.5)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                        Draft the Covenant
                      </span>
                      <span>Interactive Instrument</span>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <input type="text" placeholder="Your Name *" className="form-input" />
                      <input type="text" placeholder="Partner Name (Optional)" className="form-input" />
                    </div>
                    <input type="text" placeholder="Your Commitment Vow (e.g., 10 mins quiet dialogue)" className="form-input" />
                    <button className="form-btn">COMMIT & SEAL INTENTION</button>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Bottom Footer of Content Panel */}
          <div style={{ position: 'absolute', bottom: '48px', left: '48px', right: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(13,13,13,0.05)', paddingTop: '24px' }}>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(13,13,13,0.4)', fontWeight: 600 }}>Active Parchment Encoder</div>
            <button 
              onClick={() => setActiveTab(prev => prev < 5 ? prev + 1 : 1)}
              style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0D0D0D', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              {activeTab < 5 ? 'Next Act' : 'Restart'} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
