'use client';

import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
});

const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'Our Story',    path: '/#our-story' },
  { label: 'Our Founder',  path: '/our-founder' },
  { label: 'Services',     path: '/#services' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact Us',   path: '/#contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '80px',
        paddingBottom: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
      }}
      onMouseEnter={() => {
        document.querySelector('.cursor')?.classList.add('cursor--inverted');
      }}
      onMouseLeave={() => {
        document.querySelector('.cursor')?.classList.remove('cursor--inverted');
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          width: '100%',
          padding: '0 5vw',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '64px',
          marginBottom: '80px',
        }}
      >
        {/* ── LEFT: BRAND ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Logo & Brand Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src="/logoo.jpeg"
              alt="Viruthi Logo"
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
                borderRadius: '4px',
              }}
            />
            <span
              className={playfair.className}
              style={{
                fontSize: '32px',
                color: '#ffffff',
                fontStyle: 'italic',
                letterSpacing: '0.05em',
              }}
            >
              viruthi
            </span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '20px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '380px',
              margin: 0,
            }}
          >
            A centre for flourishing families — emotional, relational, and legal care, woven into one practice.
          </p>

          {/* Newsletter Section */}
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.85)',
                textTransform: 'uppercase',
              }}
            >
              Subscribe to our Newsletter
            </span>
            <form style={{ display: 'flex', gap: '8px', maxWidth: '380px' }} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                style={{ 
                  flex: 1, 
                  padding: '12px 16px', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '8px', 
                  color: '#ffffff', 
                  fontFamily: 'var(--font-satoshi)', 
                  fontSize: '14px', 
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }} 
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <button 
                type="submit" 
                style={{ 
                  padding: '12px 24px', 
                  background: '#ffffff', 
                  color: '#000000', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontFamily: 'var(--font-satoshi)', 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease' 
                }} 
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.8)'; }} 
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ── CENTER: QUICK LINKS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.85)',
              textTransform: 'uppercase',
            }}
          >
            Quick Links
          </span>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  width: 'fit-content',
                  cursor: 'none',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── RIGHT: REACH US ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.85)',
              textTransform: 'uppercase',
            }}
          >
            Reach Us
          </span>

          <a
            href="mailto:hello@viruthi.org"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-satoshi)',
              fontSize: '15px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              width: 'fit-content',
              cursor: 'none',
              transition: 'color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
              e.currentTarget.style.transform = 'translateX(0)';
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
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
              <path d="m2 6 10 7 10-7" />
            </svg>
            hello@viruthi.org
          </a>

          {/* Social Widgets */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
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
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg
                  width="16"
                  height="16"
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

          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: '13px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.5,
              }}
            >
              Ready to take the first step towards healing?
            </span>
            
            <Link
              href="/#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-satoshi)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: '#ffffff',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '10px 24px',
                borderRadius: '999px',
                textDecoration: 'none',
                width: 'fit-content',
                cursor: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          padding: '0 5vw',
        }}
      >
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span
            suppressHydrationWarning
            style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
            }}
          >
            © {new Date().getFullYear()} Viruthi. All rights reserved.
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <span
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.85)',
                textTransform: 'uppercase',
              }}
            >
              Powered by Akash Rajarathinam
            </span>
            <a
              href="mailto:akash@atyourservice.ind.in"
              style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: '11px',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
                cursor: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              akash@atyourservice.ind.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
