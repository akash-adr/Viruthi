'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'], style: ['italic', 'normal'] });

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    subject: '',
    message: ''
  });

  const handleNext = () => {
    if (step === 1 && (!formData.firstName.trim() || !formData.email.trim())) return;
    if (step < 3) setStep(step + 1);
    else setStep(4); // 4 is Success state
  };

  const isNextDisabled = step === 1 && (!formData.firstName.trim() || !formData.email.trim());

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      topic: '',
      subject: '',
      message: ''
    });
    setStep(1);
  };

  // --- RENDER SUCCESS STATE ---
  if (step === 4) {
    return (
      <section id="contact" style={{ width: '100%', background: '#FFFFFF', padding: '160px 5vw', display: 'flex', justifyContent: 'center', borderTop: '1px solid rgba(13,13,13,0.08)' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{
            background: '#FAFAFA',
            padding: '100px 40px',
            borderRadius: '24px',
            maxWidth: '640px',
            width: '100%',
            textAlign: 'center',
            border: '1px solid rgba(13,13,13,0.05)',
          }}
        >
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#FFFFFF', border: '1px solid rgba(13,13,13,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 40px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D2B48C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className={playfair.className} style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#0D0D0D', marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Message Sent<br/>Successfully
          </h2>
          <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 300, color: 'rgba(13,13,13,0.6)', lineHeight: 1.6, marginBottom: '48px', maxWidth: '400px', margin: '0 auto 48px' }}>
            Thank you for reaching out, {formData.firstName || 'there'}. We have received your message and will get back to you within 24-48 hours.
          </p>
          <button 
            onClick={resetForm}
            style={{
              padding: '18px 40px',
              background: 'transparent',
              border: '1px solid #0D0D0D',
              color: '#0D0D0D',
              borderRadius: '999px',
              fontFamily: 'var(--font-satoshi)',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#0D0D0D';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#0D0D0D';
            }}
          >
            Send Another Message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" style={{ width: '100%', background: '#FFFFFF', borderTop: '1px solid rgba(13,13,13,0.08)', position: 'relative' }}>
      
      {/* --- HEADER SECTION --- */}
      <div style={{ width: '100%', padding: '120px 5vw 80px', borderBottom: '1px solid rgba(13,13,13,0.08)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'flex-start' }}>
          
          <div>
            <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', color: 'rgba(13,13,13,0.4)', textTransform: 'uppercase', marginBottom: '24px', display: 'block' }}>
              Viruthi Centre · Est. 2024
            </span>
            <h2 style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 400, color: '#0D0D0D', margin: '0 0 24px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Let&apos;s <span className={playfair.className} style={{ fontStyle: 'italic', color: '#0D0D0D' }}>connect</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 300, color: 'rgba(13,13,13,0.6)', margin: 0 }}>
              Three quick steps and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <div style={{ padding: '24px 32px', border: '1px solid rgba(13,13,13,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '24px', transition: 'all 0.3s ease', cursor: 'pointer' }}
                 onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(13,13,13,0.3)'}
                 onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(13,13,13,0.1)'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div>
                <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(13,13,13,0.5)', marginBottom: '4px' }}>Call Us</div>
                <div style={{ fontSize: '18px', fontWeight: 500, color: '#0D0D0D' }}>+91 98400 00000</div>
              </div>
            </div>
            
            <div style={{ padding: '24px 32px', border: '1px solid rgba(13,13,13,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '24px', transition: 'all 0.3s ease', cursor: 'pointer' }}
                 onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(13,13,13,0.3)'}
                 onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(13,13,13,0.1)'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div>
                <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(13,13,13,0.5)', marginBottom: '4px' }}>Email Us</div>
                <div style={{ fontSize: '18px', fontWeight: 500, color: '#0D0D0D' }}>hello@viruthi.org</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <a href="#" style={{ padding: '24px 16px', border: '1px solid rgba(13,13,13,0.1)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', transition: 'all 0.3s ease', cursor: 'pointer', color: '#0D0D0D', textDecoration: 'none', background: '#FFFFFF' }}
                 onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(13,13,13,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                 onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(13,13,13,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(13,13,13,0.6)' }}>LinkedIn</span>
              </a>
              <a href="#" style={{ padding: '24px 16px', border: '1px solid rgba(13,13,13,0.1)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', transition: 'all 0.3s ease', cursor: 'pointer', color: '#0D0D0D', textDecoration: 'none', background: '#FFFFFF' }}
                 onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(13,13,13,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                 onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(13,13,13,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(13,13,13,0.6)' }}>Instagram</span>
              </a>
              <a href="#" style={{ padding: '24px 16px', border: '1px solid rgba(13,13,13,0.1)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', transition: 'all 0.3s ease', cursor: 'pointer', color: '#0D0D0D', textDecoration: 'none', background: '#FFFFFF' }}
                 onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(13,13,13,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                 onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(13,13,13,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(13,13,13,0.6)' }}>YouTube</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* --- FORM SECTION --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
        }
        @media (max-width: 900px) {
          .contact-container {
            flex-direction: column;
          }
        }
        
        /* Stepper Styles */
        .stepper-col {
          flex: 0 0 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding: 80px 0;
          background: #FFFFFF;
          border-right: 1px solid rgba(13,13,13,0.08);
        }
        @media (max-width: 900px) {
          .stepper-col {
            flex-direction: row;
            justify-content: space-between;
            flex: none;
            width: 100%;
            padding: 40px 5vw;
            border-right: none;
            border-bottom: 1px solid rgba(13,13,13,0.08);
          }
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
          background: #FFFFFF;
          padding: 16px 0;
        }
        @media (max-width: 900px) {
          .step-item { padding: 0 16px; }
        }

        .step-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-satoshi);
          font-size: 18px;
          font-weight: 500;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 16px;
        }
        .step-circle.active {
          background: #0D0D0D;
          color: #FFFFFF;
          border: 1px solid #0D0D0D;
          box-shadow: 0 8px 24px rgba(13,13,13,0.2);
        }
        .step-circle.completed {
          background: #FFFFFF;
          color: #0D0D0D;
          border: 1px solid rgba(13,13,13,0.3);
        }
        .step-circle.inactive {
          background: transparent;
          color: rgba(13,13,13,0.4);
          border: 1px solid rgba(13,13,13,0.15);
        }

        .step-label {
          font-family: var(--font-satoshi);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          text-align: center;
          transition: all 0.4s ease;
          line-height: 1.4;
        }
        .step-label.active { color: #0D0D0D; }
        .step-label.completed { color: #0D0D0D; }
        .step-label.inactive { color: rgba(13,13,13,0.3); }

        /* Vertical Connector Line */
        .stepper-line {
          position: absolute;
          top: 80px;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          background: rgba(13,13,13,0.1);
          z-index: 1;
        }
        @media (max-width: 900px) {
          .stepper-line {
            top: 68px;
            left: 5vw;
            right: 5vw;
            bottom: auto;
            width: auto;
            height: 1px;
            transform: none;
          }
        }

        /* Form Area */
        .form-col {
          flex: 1;
          padding: 80px 10%;
          min-height: 600px;
        }
        @media (max-width: 900px) {
          .form-col { padding: 60px 5vw; }
        }
        
        .form-title {
          font-family: var(--font-satoshi);
          font-size: clamp(28px, 3vw, 36px);
          color: #0D0D0D;
          margin-bottom: 8px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .form-subtitle {
          font-family: var(--font-satoshi);
          font-size: 18px;
          font-weight: 300;
          color: rgba(13,13,13,0.6);
          margin-bottom: 64px;
        }

        .input-group {
          margin-bottom: 32px;
        }
        .input-label {
          display: block;
          font-family: var(--font-satoshi);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          color: rgba(13,13,13,0.5);
          margin-bottom: 12px;
        }
        .form-input, .form-textarea {
          width: 100%;
          padding: 20px 24px;
          background: #FFFFFF;
          border: 1px solid rgba(13,13,13,0.15);
          border-radius: 12px;
          font-family: var(--font-satoshi);
          font-size: 18px;
          font-weight: 400;
          color: #0D0D0D;
          transition: all 0.4s ease;
          outline: none;
        }
        .form-input:focus, .form-textarea:focus {
          border-color: #0D0D0D;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(13,13,13,0.3);
          font-weight: 300;
        }
        .form-textarea {
          min-height: 200px;
          resize: vertical;
        }

        /* Topic Cards */
        .topic-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .topic-card {
          padding: 24px 32px;
          border-radius: 12px;
          border: 1px solid rgba(13,13,13,0.15);
          background: #FFFFFF;
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .topic-card:hover {
          border-color: rgba(13,13,13,0.3);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .topic-card.selected {
          border-color: #0D0D0D;
          background: #FFFFFF;
          box-shadow: 0 8px 30px rgba(13,13,13,0.06);
        }
        .topic-card.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #FFFFFF;
        }
        .topic-card.disabled:hover {
          border-color: rgba(13,13,13,0.15);
          box-shadow: none;
        }
        
        .topic-radio {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid rgba(13,13,13,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .topic-card.selected .topic-radio {
          border-color: #0D0D0D;
        }
        .topic-card.selected .topic-radio::after {
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #0D0D0D;
        }

        /* Buttons */
        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid rgba(13,13,13,0.08);
        }
        .btn-back {
          background: transparent;
          border: none;
          font-family: var(--font-satoshi);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.5);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: color 0.3s ease;
        }
        .btn-back:hover { color: #0D0D0D; }
        
        .btn-next {
          background: #0D0D0D;
          color: #FFFFFF;
          border: none;
          padding: 18px 40px;
          border-radius: 999px;
          font-family: var(--font-satoshi);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.4s ease;
        }
        .btn-next:hover:not(:disabled) {
          background: #222222;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          transform: translateY(-2px);
        }
        .btn-next:disabled {
          background: #E5E5E5;
          color: #A3A3A3;
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }
      `}} />

      <div className="contact-container">
        
        {/* LEFT: STEPPER */}
        <div className="stepper-col">
          <div className="stepper-line"></div>
          
          <div className="step-item" style={{ marginBottom: '12vh' }}>
            <div className={`step-circle ${step === 1 ? 'active' : step > 1 ? 'completed' : 'inactive'}`}>
              {step > 1 ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> : '1'}
            </div>
            <div className={`step-label ${step === 1 ? 'active' : step > 1 ? 'completed' : 'inactive'}`}>
              WHO<br/>YOU ARE
            </div>
          </div>
          
          <div className="step-item" style={{ marginBottom: '12vh' }}>
            <div className={`step-circle ${step === 2 ? 'active' : step > 2 ? 'completed' : 'inactive'}`}>
              {step > 2 ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> : '2'}
            </div>
            <div className={`step-label ${step === 2 ? 'active' : step > 2 ? 'completed' : 'inactive'}`}>
              YOUR<br/>TOPIC
            </div>
          </div>
          
          <div className="step-item">
            <div className={`step-circle ${step === 3 ? 'active' : 'inactive'}`}>
              3
            </div>
            <div className={`step-label ${step === 3 ? 'active' : 'inactive'}`}>
              YOUR<br/>MESSAGE
            </div>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="form-col">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: WHO YOU ARE */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <h2 className="form-title">Tell us who you are</h2>
                <p className="form-subtitle">We&apos;ll use this to personalise our response.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                  <div className="input-group">
                    <label className="input-label">First Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Jane"
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Last Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Doe"
                      value={formData.lastName}
                      onChange={e => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Email *</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Phone</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      placeholder="+91 98400 00000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: YOUR TOPIC */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <h2 className="form-title">Tell us your topic</h2>
                <p className="form-subtitle">What do you need help with?</p>
                
                <div className="topic-grid">
                  <div 
                    className={`topic-card ${formData.topic === 'Family Legal Services' ? 'selected' : ''}`}
                    onClick={() => setFormData({...formData, topic: 'Family Legal Services'})}
                  >
                    <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 500, color: '#0D0D0D' }}>
                      Family Legal Services
                    </span>
                    <div className="topic-radio"></div>
                  </div>
                  
                  <div 
                    className={`topic-card ${formData.topic === 'Relationship Counselling' ? 'selected' : ''}`}
                    onClick={() => setFormData({...formData, topic: 'Relationship Counselling'})}
                  >
                    <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 500, color: '#0D0D0D' }}>
                      Relationship Counselling
                    </span>
                    <div className="topic-radio"></div>
                  </div>

                  <div className="topic-card disabled">
                    <span style={{ fontFamily: 'var(--font-satoshi)', fontSize: '18px', fontWeight: 500, color: '#0D0D0D' }}>
                      Coming Soon...
                    </span>
                    <div className="topic-radio"></div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: YOUR MESSAGE */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <h2 className="form-title">Tell us more</h2>
                <p className="form-subtitle">Share your message and we&apos;ll get back to you as soon as possible.</p>
                
                <div className="input-group">
                  <label className="input-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                
                <div className="input-group">
                  <label className="input-label">Message</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="Please describe your query in detail..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <p style={{ fontFamily: 'var(--font-satoshi)', fontSize: '14px', fontStyle: 'italic', color: 'rgba(13,13,13,0.5)', marginTop: '16px' }}>
                  We usually respond within 24–48 hours.
                </p>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Form Navigation Footer */}
          <div className="form-footer">
            <div style={{ flex: 1 }}>
              {step > 1 && (
                <button className="btn-back" onClick={handleBack}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  Back
                </button>
              )}
            </div>
            
            <div style={{ fontFamily: 'var(--font-satoshi)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(13,13,13,0.3)', textAlign: 'center', flex: 1 }}>
              Step {step} of 3
            </div>
            
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-next" onClick={handleNext} disabled={isNextDisabled}>
                {step === 3 ? 'Send Message' : 'Next Step'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
