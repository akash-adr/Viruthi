'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useTransition } from '@/context/TransitionContext';

/* ─────────────────────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────────────────────── */

const EASE   = [0.16, 1, 0.3, 1] as [number, number, number, number];
const SPRING = { type: 'spring', stiffness: 400, damping: 36, mass: 0.8 } as const;

const NAV_ITEMS = [
  { label: 'Home',         id: 'hero',          path: '/' },
  { label: 'Our Founder',  id: 'our-founder',   path: '/our-founder' },
  { label: 'Services',     id: 'services',      path: '/' },
  { label: 'Testimonials', id: 'testimonials',  path: '/testimonials' },
  { label: 'Contact Us',   id: 'contact',       path: '/' },
] as const;

/* ─────────────────────────────────────────────────────────────────────────────
   SHARED GLASS STYLES
───────────────────────────────────────────────────────────────────────────── */

const BORDER_SHELL: React.CSSProperties = {
  padding:      '1px',
  borderRadius: '999px',
  background:   `linear-gradient(
    175deg,
    rgba(255,255,255,0.8) 0%,
    rgba(255,255,255,0.85) 100%
  )`,
  boxShadow: [
    'inset 0 0 0 1px rgba(0,0,0,0.04)',
    '0 4px  12px rgba(0,0,0,0.04)',
    '0 16px 40px rgba(0,0,0,0.08)',
  ].join(', '),
};

const GLASS_SURFACE: React.CSSProperties = {
  position:             'relative',
  borderRadius:         '999px',
  background:           'rgba(255, 255, 255, 0.65)',
  backdropFilter:       'blur(24px) saturate(180%) brightness(102%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(102%)',
  overflow:             'hidden',
};

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export default function GlassNav() {
  const [active,             setActive]             = useState(0);
  const [mounted,            setMounted]            = useState(false);
  const [pill,               setPill]               = useState({ left: 0, width: 0 });
  const [isMobile,           setIsMobile]           = useState(false);
  const [menuOpen,           setMenuOpen]           = useState(false);
  // true  → user is inside a full-screen scroll sequence; hide nav completely
  const [inScrollSeq,        setInScrollSeq]        = useState(false);
  // true  → user stopped scrolling for >2 s; slide nav off-screen
  const [idleHidden,         setIdleHidden]         = useState(false);

  const navRef   = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();
  const { isActive, startTransition } = useTransition();

  const isActiveRef = useRef(isActive);
  useEffect(() => { isActiveRef.current = isActive; }, [isActive]);

  /* Set initial active state based on route and hash */
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    let idx = -1;
    if (hash) {
      idx = NAV_ITEMS.findIndex(item => item.path === pathname && item.id === hash);
    }
    if (idx === -1) {
      idx = NAV_ITEMS.findIndex(item => item.path === pathname);
    }
    if (idx !== -1) setActive(idx);
  }, [pathname]);

  /* measure pill geometry */
  const recalcPill = (idx: number) => {
    const btn = itemRefs.current[idx];
    const nav = navRef.current;
    if (!btn || !nav) return;
    const nb = nav.getBoundingClientRect();
    const bb = btn.getBoundingClientRect();
    setPill({ left: bb.left - nb.left, width: bb.width });
  };

  /* mount */
  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    
    // Slight delay to ensure layout is done before first measure
    const t = setTimeout(() => {
      const hash = window.location.hash.replace('#', '');
      let idx = -1;
      if (hash) {
        idx = NAV_ITEMS.findIndex(item => item.path === pathname && item.id === hash);
      }
      if (idx === -1) {
        idx = NAV_ITEMS.findIndex(item => item.path === pathname);
      }
      recalcPill(idx !== -1 ? idx : 0);
    }, 80);

    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', check);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* re-measure on active change */
  useEffect(() => {
    if (mounted && !isMobile) recalcPill(active);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, mounted, isMobile]);

  /* re-measure on resize */
  useEffect(() => {
    if (!mounted) return;
    const fn = () => { if (!isMobile) recalcPill(active); };
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, mounted, isMobile]);

  /* Scroll-sequence detection + idle-hide logic */
  const resetIdleTimer = useCallback(() => {
    // Immediately show nav when user scrolls
    setIdleHidden(false);
    // Clear any existing timer
    if (idleTimer.current) clearTimeout(idleTimer.current);
    // Hide again after 2 s of no scrolling
    idleTimer.current = setTimeout(() => {
      setIdleHidden(true);
    }, 2000);
  }, []);

  /* scroll -> section tracking + scroll-sequence + idle detection */
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      if (isActiveRef.current) return;

      const scrollY        = window.scrollY;
      const viewportH      = window.innerHeight;
      const viewportCenter = viewportH / 2;

      // 1. Detect if inside a scroll-sequence section
      // "intro" section (#intro) and the StoryScroller section (#story-scroller)
      // We detect by checking if the sticky canvas panels are the element covering the viewport center.
      const introEl = document.getElementById('intro');
      const storyEl = document.getElementById('story-scroller');

      let insideSeq = false;
      for (const el of [introEl, storyEl]) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        // Element's sticky viewport is active: its top is at or above 0
        // and its bottom is still below the viewport
        if (r.top <= 0 && r.bottom >= viewportH) {
          insideSeq = true;
          break;
        }
      }
      setInScrollSeq(insideSeq);

      // 2. Idle-hide: only when NOT inside a scroll sequence
      if (!insideSeq) {
        resetIdleTimer();
      } else {
        // Clear idle timer when inside sequence (nav is hidden anyway)
        if (idleTimer.current) clearTimeout(idleTimer.current);
        setIdleHidden(false);
      }

      // 3. Active section tracking
      let closestIdx = -1;
      let minDistance = Infinity;

      NAV_ITEMS.forEach((item, i) => {
        if (item.path !== pathname) return;
        const el = document.getElementById(item.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const isCenterInside = rect.top <= viewportCenter && rect.bottom >= viewportCenter;

        if (isCenterInside) {
          minDistance = 0;
          closestIdx = i;
        } else {
          const distance = Math.abs(viewportCenter - elCenter);
          if (distance < minDistance && minDistance !== 0) {
            minDistance = distance;
            closestIdx = i;
          }
        }
      });

      if (closestIdx !== -1) {
        setActive(prev => (prev !== closestIdx ? closestIdx : prev));
      }

      // Suppress unused warning
      void scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(updateActiveSection, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [pathname, resetIdleTimer]);

  const handleNav = (i: number, id: string, path: string) => {
    setActive(i);
    setMenuOpen(false);
    
    if (pathname === path) {
      // Same page, smooth scroll to section or top
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Different page, perform animated transition navigation
      // If it's not the top of the target page, append the hash
      const isTopSection = id === 'hero' || id === 'our-founder';
      startTransition(isTopSection ? path : `${path}#${id}`);
    }
  };



  /* render */

  // Combined visibility: hide if in scroll sequence OR idle for more than 2s
  const navHidden = inScrollSeq || idleHidden;

  return (
    <>
      {/* Logo - also hides in scroll sequences */}
      <motion.img
        src="/logoo.jpeg"
        alt="Viruthi Logo"
        onClick={() => startTransition('/')}
        animate={{
          opacity: navHidden ? 0 : 1,
          y:       navHidden ? -12 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: '20px',
          left: '24px',
          height: '42px',
          width: 'auto',
          zIndex: 1000,
          objectFit: 'contain',
          cursor: 'pointer',
          pointerEvents: navHidden ? 'none' : 'auto',
        }}
      />
      <div
        style={{
          position:  'fixed',
          top:       '20px',
          left:      isMobile ? 'auto' : '50%',
          right:     isMobile ? '20px' : 'auto',
          transform: isMobile ? 'none' : 'translateX(-50%)',
          zIndex:    1000,
          pointerEvents: navHidden ? 'none' : 'auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{
            opacity: navHidden ? 0 : 1,
            y:       navHidden ? -16 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
        {/* ── DESKTOP NAV ─────────────────────────────────────────────── */}
        {mounted && !isMobile && (
          <div style={BORDER_SHELL}>
            <div
              ref={navRef}
              style={{
                ...GLASS_SURFACE,
                display:     'flex',
                alignItems:  'center',
                gap:         '4px',
                padding:     '12px 16px',
              }}
            >
              {/* Refraction highlight */}
              <div
                aria-hidden="true"
                style={{
                  position:      'absolute',
                  top:           '1px',
                  left:          '6%',
                  right:         '6%',
                  height:        '1px',
                  background:    'linear-gradient(90deg,transparent,rgba(0,0,0,0.06) 25%,rgba(0,0,0,0.06) 75%,transparent)',
                  pointerEvents: 'none',
                  zIndex:        10,
                }}
              />

              {/* Sliding active pill */}
              <motion.div
                aria-hidden="true"
                animate={{ left: pill.left, width: pill.width }}
                transition={SPRING}
                style={{
                  position:      'absolute',
                  top:           '5px',
                  bottom:        '5px',
                  borderRadius:  '999px',
                  background:    '#ffffff',
                  border:        '1px solid rgba(0,0,0,0.04)',
                  boxShadow: [
                    '0 2px  8px rgba(0,0,0,0.06)',
                    '0 4px 16px rgba(0,0,0,0.04)',
                  ].join(', '),
                  pointerEvents: 'none',
                  zIndex:        1,
                }}
              />

              {/* Nav items */}
              {NAV_ITEMS.map((item, i) => {
                const active_ = i === active;
                return (
                  <button
                    key={item.id}
                    ref={el => { itemRefs.current[i] = el; }}
                    onClick={() => handleNav(i, item.id, item.path)}
                    style={{
                      position:      'relative',
                      zIndex:        2,
                      fontFamily:    'var(--font-satoshi)',
                      fontSize:      '12.5px',
                      fontWeight:    active_ ? 500 : 400,
                      letterSpacing: '0.01em',
                      color:         active_
                                       ? '#000000'
                                       : 'rgba(0,0,0,0.55)',
                      background:    'none',
                      border:        'none',
                      padding:       '10px 18px',
                      borderRadius:  '999px',
                      cursor:        'none',
                      whiteSpace:    'nowrap',
                      lineHeight:    1,
                      transition:    'color 0.3s ease',
                      userSelect:    'none',
                      WebkitFontSmoothing: 'antialiased',
                      transform:     'translateZ(0)',
                      backfaceVisibility: 'hidden',
                    }}
                    onMouseEnter={e => {
                      if (!active_)
                        (e.currentTarget as HTMLElement).style.color = 'rgba(0,0,0,0.85)';
                    }}
                    onMouseLeave={e => {
                      if (!active_)
                        (e.currentTarget as HTMLElement).style.color = 'rgba(0,0,0,0.55)';
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}


            </div>
          </div>
        )}

        {/* ── MOBILE NAV ──────────────────────────────────────────────── */}
        {mounted && isMobile && (
          <div>
            <div style={BORDER_SHELL}>
              <div
                style={{
                  ...GLASS_SURFACE,
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  padding:        '8px 16px',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position:      'absolute',
                    top:           '1px',
                    left:          '8%',
                    right:         '8%',
                    height:        '1px',
                    background:    'linear-gradient(90deg,transparent,rgba(0,0,0,0.06) 30%,rgba(0,0,0,0.06) 70%,transparent)',
                    pointerEvents: 'none',
                    zIndex:        10,
                  }}
                />

                <button
                  onClick={() => setMenuOpen(v => !v)}
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  style={{
                    position:       'relative',
                    zIndex:         2,
                    background:     'none',
                    border:         'none',
                    cursor:         'none',
                    padding:        '8px 0',
                    display:        'flex',
                    flexDirection:  'column',
                    alignItems:     'flex-end',
                    justifyContent: 'center',
                    gap:            '5px',
                    width:          '28px',
                    height:         '32px',
                  }}
                >
                  <motion.span
                    animate={menuOpen
                      ? { rotate: 45, y: 6, width: '100%' }
                      : { rotate: 0,  y: 0, width: '100%' }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{
                      display:         'block',
                      width:           '100%',
                      height:          '1px',
                      background:      'rgba(0,0,0,0.85)',
                      borderRadius:    '999px',
                      transformOrigin: 'center',
                    }}
                  />
                  <motion.span
                    animate={menuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display:      'block',
                      width:        '65%',
                      height:       '1px',
                      background:   'rgba(0,0,0,0.85)',
                      borderRadius: '999px',
                    }}
                  />
                  <motion.span
                    animate={menuOpen
                      ? { rotate: -45, y: -6, width: '100%' }
                      : { rotate: 0,   y: 0,  width: '100%' }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{
                      display:         'block',
                      width:           '100%',
                      height:          '1px',
                      background:      'rgba(0,0,0,0.85)',
                      borderRadius:    '999px',
                      transformOrigin: 'center',
                    }}
                  />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  key="mobile-menu"
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0,   scale: 1    }}
                  exit={{    opacity: 0, y: -10,  scale: 0.96 }}
                  transition={{ duration: 0.32, ease: EASE }}
                  style={{
                    marginTop:     '8px',
                    padding:       '1px',
                    borderRadius:  '20px',
                    background:    `linear-gradient(175deg, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.40) 100%)`,
                    boxShadow:     'inset 0 0 0 1px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.04)',
                    transformOrigin: 'top right',
                    minWidth:      '200px',
                    position:      'absolute',
                    right:         0,
                    top:           '100%',
                  }}
                >
                  <div
                    style={{
                      borderRadius:         '19px',
                      background:           'rgba(255, 255, 255, 0.65)',
                      backdropFilter:       'blur(36px) saturate(180%) brightness(102%)',
                      WebkitBackdropFilter: 'blur(36px) saturate(180%) brightness(102%)',
                      padding:              '8px',
                      overflow:             'hidden',
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        height:     '1px',
                        background: 'linear-gradient(90deg,transparent,rgba(0,0,0,0.06) 30%,rgba(0,0,0,0.06) 70%,transparent)',
                        marginBottom: '8px',
                      }}
                    />

                    {NAV_ITEMS.map((item, i) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -6  }}
                        animate={{ opacity: 1, x: 0   }}
                        transition={{ duration: 0.22, delay: i * 0.045, ease: EASE }}
                        onClick={() => handleNav(i, item.id, item.path)}
                        style={{
                          display:       'block',
                          width:         '100%',
                          fontFamily:    'var(--font-satoshi)',
                          fontSize:      '14px',
                          fontWeight:    i === active ? 500 : 400,
                          letterSpacing: '0.01em',
                          color:         i === active
                                           ? '#000000'
                                           : 'rgba(0,0,0,0.6)',
                          background:    i === active ? '#ffffff' : 'transparent',
                          border:        'none',
                          borderRadius:  '12px',
                          padding:       '14px 18px',
                          textAlign:     'left',
                          cursor:        'none',
                          lineHeight:    1,
                          transition:    'background 0.2s ease, color 0.2s ease',
                        }}
                        onMouseEnter={e => {
                          if (i !== active) {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.85)';
                            (e.currentTarget as HTMLElement).style.color = 'rgba(0,0,0,0.85)';
                          }
                        }}
                        onMouseLeave={e => {
                          if (i !== active) {
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                            (e.currentTarget as HTMLElement).style.color = 'rgba(0,0,0,0.6)';
                          }
                        }}
                      >
                        {item.label}
                      </motion.button>
                    ))}


                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        </motion.div>
      </div>
    </>
  );
}
