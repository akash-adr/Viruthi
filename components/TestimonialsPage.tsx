'use client';

import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { Playfair_Display } from 'next/font/google';

/* ─────────────────────────────────────────────────────────────────────────────
   FONTS
───────────────────────────────────────────────────────────────────────────── */

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic', 'normal'],
});

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: '1',
    role: 'Married couple, 8 years',
    quote:
      'We walked in expecting to be given a script. What we found instead was someone who helped us hear each other again — really hear, not just wait for our turn to speak. The silence in our house has changed its quality.',
  },
  {
    id: 2,
    name: '2',
    role: 'Individual, relationship transition',
    quote:
      'I had convinced myself the problem was my partner. Three sessions later I realised I had never learned how to stay present in intimacy. Uncomfortable truth. Necessary one.',
  },
  {
    id: 3,
    name: '3',
    role: 'Couple, pre-marital counselling',
    quote:
      'Every conversation we had about money, family, children ended in a wall. We now have a shared language. Not agreement on everything — a language. That is worth more than I imagined.',
  },
  {
    id: 4,
    name: '4',
    role: 'Mother and daughter',
    quote:
      'My daughter and I were strangers who shared a home. We started counselling expecting mediation. What happened felt more like an excavation — gentle, slow, and strangely hopeful.',
  },
  {
    id: 5,
    name: '5',
    role: 'Individual, grief and partnership',
    quote:
      'After the miscarriage, my husband and I grieved separately, in the same room, for months. The counselling gave us a map back to each other. We are still walking it.',
  },
  {
    id: 6,
    name: '6',
    role: 'Couple, 14 years together',
    quote:
      'We came close to ending things. I am glad we were too tired to argue one more time and decided to try this instead. That tiredness turned out to be a door.',
  },
  {
    id: 7,
    name: '7',
    role: 'Professional, work-relationship balance',
    quote:
      'I have built a career on being articulate. I could not say a single honest sentence to my partner without it turning defensive. Learning why took time. The quiet afterwards was extraordinary.',
  },
  {
    id: 8,
    name: '8',
    role: 'Couple, intercultural relationship',
    quote:
      'Our families were the easy part. We were the hard part. The counselling held a mirror up and neither of us looked away. That was the beginning of something real.',
  },
  {
    id: 9,
    name: '9',
    role: 'Individual, recurring patterns',
    quote:
      'I kept leaving relationships at the same point — just before they could become real. Understanding the pattern did not dissolve it immediately, but it made it visible. Visibility is the first mercy.',
  },
  {
    id: 10,
    name: '10',
    role: 'Couple, after affair',
    quote:
      'Trust is not rebuilt in a session. But we were given a place to start from, and a guide who did not flinch at the difficult parts. A year on, we are still building. Slowly. Together.',
  },
  {
    id: 11,
    name: '11',
    role: 'Siblings, estrangement',
    quote:
      'My brother and I had not spoken for three years. Coming to counselling felt strange — siblings rarely do this. What I found was that estrangement had its own grammar, and someone who spoke it.',
  },
  {
    id: 12,
    name: '12',
    role: 'Couple, new parents',
    quote:
      'Having a child broke us open in ways we were not ready for. Viruthi helped us understand that the exhaustion and distance were not the end of our story — they were a chapter. We are still writing.',
  },
];

const WORD_STRIP_ITEMS = ['Real.', 'Honest.', 'Stories.', 'From real couples.'];

/* ─────────────────────────────────────────────────────────────────────────────
   EXPANDED CARD MODAL  (flip-in overlay)
───────────────────────────────────────────────────────────────────────────── */

function ExpandedModal({
  t,
  onClose,
}: {
  t: Testimonial | null;
  onClose: () => void;
}) {
  const [show, setShow] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (t) {
      // slight stagger: overlay first, then flip
      requestAnimationFrame(() => {
        setShow(true);
        setTimeout(() => setFlipped(true), 80);
      });
    } else {
      setFlipped(false);
      const tid = setTimeout(() => setShow(false), 400);
      return () => clearTimeout(tid);
    }
  }, [t]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!t && !show) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        cursor: 'default',
        background: show
          ? 'rgba(6,6,6,0.88)'
          : 'rgba(6,6,6,0)',
        backdropFilter: show ? 'blur(18px)' : 'blur(0px)',
        WebkitBackdropFilter: show ? 'blur(18px)' : 'blur(0px)',
        transition: 'background 0.45s ease, backdrop-filter 0.45s ease, -webkit-backdrop-filter 0.45s ease',
      }}
    >
      {/* Perspective wrapper */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          perspective: '1200px',
          width: '100%',
          maxWidth: '640px',
          cursor: 'default',
        }}
      >
        {/* The flipping card */}
        <div
          style={{
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(0deg) scale(1)' : 'rotateY(-90deg) scale(0.85)',
            transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
            borderRadius: '28px',
          }}
        >
          {/* Card face */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              padding: 'clamp(40px, 6vw, 64px)',
              boxShadow: '0 48px 120px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
              position: 'relative',
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(13,13,13,0.12)',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: '#0D0D0D',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#0D0D0D';
                e.currentTarget.style.borderColor = '#0D0D0D';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(13,13,13,0.12)';
                e.currentTarget.style.color = '#0D0D0D';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Decorative quote mark */}
            <div
              className={playfair.className}
              style={{
                fontSize: '120px',
                lineHeight: 0.8,
                color: 'rgba(13,13,13,0.05)',
                fontStyle: 'italic',
                marginBottom: '16px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              &ldquo;
            </div>

            {/* Quote text */}
            <p
              className={playfair.className}
              style={{
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                lineHeight: 1.65,
                color: '#1A1A1A',
                fontStyle: 'italic',
                fontWeight: 400,
                margin: '0 0 48px',
              }}
            >
              {t?.quote}
            </p>

            {/* Thin divider */}
            <div
              style={{
                width: '48px',
                height: '1px',
                background: 'rgba(13,13,13,0.12)',
                marginBottom: '24px',
              }}
            />

            {/* Attribution */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Avatar placeholder */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F5F0EB 0%, #E8DDD4 100%)',
                  border: '1px solid rgba(13,13,13,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#0D0D0D',
                    marginBottom: '3px',
                  }}
                >
                  Anonymous
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#888888',
                  }}
                >
                  {t?.role}
                </div>
              </div>
            </div>

            {/* Viruthi badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '28px',
                right: '32px',
                fontFamily: 'var(--font-satoshi)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(13,13,13,0.2)',
              }}
            >
              Viruthi · Verified
            </div>
          </div>
        </div>
      </div>

      {/* Hint text */}
      <div
        style={{
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-satoshi)',
          fontSize: '12px',
          fontWeight: 400,
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.3)',
          opacity: flipped ? 1 : 0,
          transition: 'opacity 0.5s ease 0.3s',
          whiteSpace: 'nowrap',
        }}
      >
        Press <kbd style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '4px', padding: '2px 6px', fontFamily: 'inherit' }}>Esc</kbd> or click outside to close
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CARD COMPONENT
───────────────────────────────────────────────────────────────────────────── */

function TestimonialCard({
  t,
  style,
  className,
  onClick,
  interactive,
}: {
  t: Testimonial;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onClick={onClick}
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
      style={{
        width: '272px',
        flexShrink: 0,
        background: hovered ? '#0D0D0D' : '#FFFFFF',
        border: hovered ? '0.5px solid #333' : '0.5px solid #EEEEEE',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.25)'
          : '0 4px 24px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        cursor: interactive ? 'pointer' : 'default',
        transform: hovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        ...style,
      }}
    >
      <p
        className={playfair.className}
        style={{
          fontSize: '15px',
          lineHeight: 1.7,
          color: hovered ? 'rgba(255,255,255,0.9)' : '#1A1A1A',
          fontStyle: 'italic',
          fontWeight: 400,
          margin: 0,
          transition: 'color 0.4s ease',
          // Clamp text to ~4 lines in marquee to keep uniform card height
          display: '-webkit-box',
          WebkitLineClamp: interactive ? 4 : undefined,
          WebkitBoxOrient: interactive ? 'vertical' : undefined,
          overflow: interactive ? 'hidden' : undefined,
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      <div
        style={{
          marginTop: 'auto',
          paddingTop: '4px',
          borderTop: hovered ? '0.5px solid rgba(255,255,255,0.1)' : '0.5px solid #F0F0F0',
          transition: 'border-color 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: hovered ? 'rgba(255,255,255,0.45)' : '#888888',
            transition: 'color 0.4s ease',
          }}
        >
          — {t.name} &middot; {t.role}
        </span>

        {/* "Read more" hint icon */}
        {interactive && (
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              border: hovered ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(13,13,13,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.4s ease',
              transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke={hovered ? 'rgba(255,255,255,0.7)' : 'rgba(13,13,13,0.4)'}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MARQUEE ROW
───────────────────────────────────────────────────────────────────────────── */

const CARD_W = 272;
const CARD_GAP = 20;
const CARD_STRIDE = CARD_W + CARD_GAP;
const DRIFT_SPEED = 0.4; // px per rAF frame at 60fps

function MarqueeRow({
  items,
  direction,
  sectionInView,
  scrollDelta,
  reducedMotion,
  entranceVisible,
  paused,
  onCardClick,
}: {
  items: Testimonial[];
  direction: 1 | -1;
  sectionInView: boolean;
  scrollDelta: number;
  reducedMotion: boolean;
  entranceVisible: boolean;
  paused: boolean;
  onCardClick: (t: Testimonial) => void;
}) {
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [offset, setOffset] = useState(0);
  const [cardsReady, setCardsReady] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isScrollingRef = useRef(false);
  const lastScrollDeltaRef = useRef(scrollDelta);

  // Detect scroll activity
  useEffect(() => {
    if (scrollDelta !== lastScrollDeltaRef.current) {
      lastScrollDeltaRef.current = scrollDelta;
      isScrollingRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1300);
    }
  }, [scrollDelta]);

  // Map scroll delta to offset
  useEffect(() => {
    if (isScrollingRef.current) {
      offsetRef.current += scrollDelta * direction * 0.6;
    }
  }, [scrollDelta, direction]);

  const totalWidth = items.length * CARD_STRIDE;

  useEffect(() => {
    if (reducedMotion || !sectionInView || !cardsReady) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const animate = () => {
      if (!isScrollingRef.current && !paused) {
        offsetRef.current += DRIFT_SPEED * direction;
      }

      // Wrap offset within [0, totalWidth] range
      const wrapped =
        ((offsetRef.current % totalWidth) + totalWidth) % totalWidth;
      setOffset(wrapped);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion, sectionInView, cardsReady, direction, totalWidth, paused]);

  // Trigger entrance
  useEffect(() => {
    if (entranceVisible) {
      const t = setTimeout(() => setCardsReady(true), 80);
      return () => clearTimeout(t);
    }
  }, [entranceVisible]);

  // Duplicate cards for seamless loop (3x)
  const loopedItems = [...items, ...items, ...items];

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        paddingBottom: '4px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: `${CARD_GAP}px`,
          willChange: 'transform',
          transform: `translateX(${-offset}px)`,
        }}
      >
        {loopedItems.map((t, i) => {
          const cardDelay = reducedMotion ? 0 : Math.min(i, items.length - 1) * 70;
          return (
            <div
              key={`${t.id}-${i}`}
              style={{
                transition: cardsReady
                  ? 'none'
                  : `opacity 600ms ease ${cardDelay}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${cardDelay}ms`,
                opacity: cardsReady || reducedMotion ? 1 : 0,
                transform:
                  cardsReady || reducedMotion
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.92)',
              }}
            >
              <TestimonialCard
                t={t}
                interactive
                onClick={() => onCardClick(t)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CAROUSEL  (mobile)
───────────────────────────────────────────────────────────────────────────── */

function Carousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(items.length - 1, idx));
      setActive(clamped);
    },
    [items.length]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goTo(active - 1);
    if (e.key === 'ArrowRight') goTo(active + 1);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    startXRef.current = e.clientX;
    isDraggingRef.current = true;
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || startXRef.current === null) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 40) {
      goTo(active + (dx < 0 ? 1 : -1));
    }
    isDraggingRef.current = false;
    startXRef.current = null;
  };

  return (
    <div
      style={{ width: '100%', maxWidth: '860px', margin: '0 auto', userSelect: 'none' }}
      tabIndex={0}
      role="region"
      aria-label="Testimonials carousel"
      onKeyDown={handleKeyDown}
    >
      {/* Card wrapper — solid white, clearly visible on light bg */}
      <div
        ref={trackRef}
        style={{
          overflow: 'hidden',
          borderRadius: '28px',
          cursor: 'grab',
          background: '#FFFFFF',
          border: '1px solid rgba(13,13,13,0.08)',
          boxShadow: '0 24px 80px rgba(13,13,13,0.1), 0 4px 16px rgba(13,13,13,0.04)',
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Slide track */}
        <div
          style={{
            display: 'flex',
            transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            transform: `translateX(${-active * 100}%)`,
          }}
        >
          {items.map((item, i) => (
            <div key={item.id} style={{ minWidth: '100%', padding: 'clamp(40px, 6vw, 72px)' }}>
              {/* Counter */}
              <div style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(13,13,13,0.25)',
                marginBottom: '40px',
              }}>
                {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </div>

              {/* Big decorative quote mark */}
              <div
                className={playfair.className}
                style={{
                  fontSize: '80px',
                  lineHeight: 0.7,
                  color: 'rgba(13,13,13,0.06)',
                  fontStyle: 'italic',
                  marginBottom: '24px',
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p
                className={playfair.className}
                style={{
                  fontSize: 'clamp(20px, 2.8vw, 30px)',
                  lineHeight: 1.65,
                  color: '#1A1A1A',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  margin: '0 0 48px',
                }}
              >
                {item.quote}
              </p>

              {/* Divider + attribution */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{
                  width: '40px',
                  height: '1px',
                  background: 'rgba(13,13,13,0.15)',
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#0D0D0D',
                    marginBottom: '4px',
                  }}>
                    Anonymous
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '14px',
                    color: 'rgba(13,13,13,0.45)',
                    fontWeight: 300,
                  }}>
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '36px',
          padding: '0 4px',
        }}
      >
        {/* Prev button */}
        <button
          aria-label="Previous testimonial"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: '1px solid rgba(13,13,13,0.2)',
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: active === 0 ? 0.25 : 1,
            transition: 'all 0.35s ease',
            cursor: active === 0 ? 'default' : 'pointer',
            boxShadow: '0 2px 8px rgba(13,13,13,0.06)',
          }}
          onMouseOver={(e) => {
            if (active !== 0) {
              (e.currentTarget as HTMLElement).style.background = '#0D0D0D';
              (e.currentTarget as HTMLElement).style.borderColor = '#0D0D0D';
              const svg = (e.currentTarget as HTMLElement).querySelector('svg');
              if (svg) svg.setAttribute('stroke', '#FFFFFF');
            }
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(13,13,13,0.2)';
            const svg = (e.currentTarget as HTMLElement).querySelector('svg');
            if (svg) svg.setAttribute('stroke', '#0D0D0D');
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: active === i ? '28px' : '7px',
                height: '7px',
                borderRadius: '4px',
                background: active === i ? '#0D0D0D' : 'rgba(13,13,13,0.18)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          aria-label="Next testimonial"
          onClick={() => goTo(active + 1)}
          disabled={active === items.length - 1}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: '1px solid rgba(13,13,13,0.2)',
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: active === items.length - 1 ? 0.25 : 1,
            transition: 'all 0.35s ease',
            cursor: active === items.length - 1 ? 'default' : 'pointer',
            boxShadow: '0 2px 8px rgba(13,13,13,0.06)',
          }}
          onMouseOver={(e) => {
            if (active !== items.length - 1) {
              (e.currentTarget as HTMLElement).style.background = '#0D0D0D';
              (e.currentTarget as HTMLElement).style.borderColor = '#0D0D0D';
              const svg = (e.currentTarget as HTMLElement).querySelector('svg');
              if (svg) svg.setAttribute('stroke', '#FFFFFF');
            }
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(13,13,13,0.2)';
            const svg = (e.currentTarget as HTMLElement).querySelector('svg');
            if (svg) svg.setAttribute('stroke', '#0D0D0D');
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   WORD STRIP
───────────────────────────────────────────────────────────────────────────── */

function WordStrip() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const settled = wordIndex === WORD_STRIP_ITEMS.length - 1;

  useEffect(() => {
    if (settled) return;

    const cycle = () => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => i + 1);
        setVisible(true);
      }, 300);
    };

    const t = setTimeout(cycle, 1400);
    return () => clearTimeout(t);
  }, [wordIndex, settled]);

  return (
    <div
      style={{
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-satoshi)',
          fontSize: 'clamp(21px, 2.5vw, 28px)',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          color: '#0D0D0D',
          display: 'inline-block',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 280ms ease, transform 280ms ease',
        }}
      >
        {WORD_STRIP_ITEMS[wordIndex]}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export default function TestimonialsPage() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [marqueeInView, setMarqueeInView] = useState(false);
  const [entranceVisible, setEntranceVisible] = useState(false);
  const [scrollDelta, setScrollDelta] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const headingRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Detect reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Heading fade-in
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Marquee in/out of view + entrance trigger
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let entranceFired = false;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setMarqueeInView(entry.isIntersecting);
        if (entry.isIntersecting && !entranceFired) {
          entranceFired = true;
          setEntranceVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Scroll delta tracking
  useEffect(() => {
    const onScroll = () => {
      const dy = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      setScrollDelta(dy);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedTestimonial]);

  const handleCardClick = useCallback((t: Testimonial) => {
    setSelectedTestimonial(t);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedTestimonial(null);
  }, []);

  // Split into 2 rows
  const row1 = TESTIMONIALS.slice(0, 6);
  const row2 = TESTIMONIALS.slice(6, 12);

  return (
    <>
      <style>{`
        .tp-section {
          width: 100%;
          background-image: url(/c2.jpeg);
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
        }

        /* Hero Header */
        .tp-hero {
          padding: 160px 5vw 100px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .tp-eyebrow {
          font-family: var(--font-satoshi);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #888888;
          margin-bottom: 32px;
        }

        .tp-heading {
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 400;
          color: #0D0D0D;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 36px;
        }

        .tp-word-strip {
          margin-bottom: 0;
        }

        /* Click hint */
        .tp-click-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 48px;
          font-family: var(--font-satoshi);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #0D0D0D;
          animation: pulse-hint 2.5s ease-in-out infinite;
        }

        @keyframes pulse-hint {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Marquee section */
        .tp-marquee-section {
          padding: 80px 0 100px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Divider */
        .tp-divider {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5vw;
          width: 100%;
        }

        .tp-divider-line {
          border: none;
          border-top: 0.5px solid #E8E8E8;
          width: 100%;
        }

        /* Carousel section */
        .tp-carousel-section {
          padding: 140px 5vw 160px;
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .tp-carousel-label {
          font-family: var(--font-satoshi);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #AAAAAA;
          margin-bottom: 48px;
        }

        .tp-carousel-heading {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 400;
          color: #0D0D0D;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 12px;
          text-align: center;
        }

        .tp-carousel-sub {
          font-family: var(--font-satoshi);
          font-size: 15px;
          color: #888888;
          margin-bottom: 60px;
          text-align: center;
        }

        /* Reduced motion: static grid */
        @media (prefers-reduced-motion: reduce) {
          .tp-static-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 20px;
            padding: 80px 5vw;
          }
        }

        /* CTA strip */
        .tp-cta-strip {
          background: #0D0D0D;
          padding: 80px 5vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          text-align: center;
        }

        .tp-cta-label {
          font-family: var(--font-satoshi);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        .tp-cta-heading {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 400;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0;
        }

        .tp-cta-btn {
          margin-top: 8px;
          padding: 18px 48px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          background: transparent;
          color: #FFFFFF;
          font-family: var(--font-satoshi);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        .tp-cta-btn:hover {
          background: #FFFFFF;
          color: #0D0D0D;
          border-color: #FFFFFF;
          transform: translateY(-2px);
        }
      `}</style>

      {/* ── FLIP MODAL ── */}
      <ExpandedModal t={selectedTestimonial} onClose={handleClose} />

      <div className="tp-section">
        {/* ── HERO HEADING ── */}
        <div className="tp-hero" ref={headingRef}>

          <h1
            className={`tp-heading ${playfair.className}`}
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 600ms ease, transform 600ms ease',
              transitionDelay: '100ms',
            }}
          >
            Proof, not
            <span style={{ fontStyle: 'italic' }}> promises.</span>
          </h1>

          <div
            className="tp-word-strip"
            style={{
              opacity: headingVisible ? 1 : 0,
              transition: 'opacity 600ms ease',
              transitionDelay: '300ms',
            }}
          >
            <WordStrip />
          </div>

          {/* Click hint */}
          <div
            className="tp-click-hint"
            style={{
              opacity: headingVisible ? 1 : 0,
              transition: 'opacity 800ms ease',
              transitionDelay: '600ms',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 15l-2 5L9 9l11 4-5 2z"/>
            </svg>
            Click any card to read the full story
          </div>
        </div>

        {/* ── MARQUEE (or reduced-motion static grid) ── */}
        {reducedMotion ? (
          <div className="tp-static-grid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard
                key={t.id}
                t={t}
                interactive
                onClick={() => handleCardClick(t)}
              />
            ))}
          </div>
        ) : (
          <div className="tp-marquee-section" ref={marqueeRef}>
            <MarqueeRow
              items={row1}
              direction={-1}
              sectionInView={marqueeInView}
              scrollDelta={scrollDelta}
              reducedMotion={reducedMotion}
              entranceVisible={entranceVisible}
              paused={!!selectedTestimonial}
              onCardClick={handleCardClick}
            />
            <MarqueeRow
              items={row2}
              direction={1}
              sectionInView={marqueeInView}
              scrollDelta={scrollDelta}
              reducedMotion={reducedMotion}
              entranceVisible={entranceVisible}
              paused={!!selectedTestimonial}
              onCardClick={handleCardClick}
            />
          </div>
        )}

        {/* ── DIVIDER ── */}
        <div className="tp-divider">
          <hr className="tp-divider-line" />
        </div>

        {/* ── CAROUSEL ── */}
        <div className="tp-carousel-section">
          <h2 className={`tp-carousel-heading ${playfair.className}`}>
            One story at a time
          </h2>

          <Carousel items={TESTIMONIALS} />
        </div>

        {/* ── CTA STRIP ── */}
        <div className="tp-cta-strip">
          <p className="tp-cta-label">Your story, next</p>
          <h2 className={`tp-cta-heading ${playfair.className}`}>
            Ready to trace your own story?
          </h2>
          <button
            className="tp-cta-btn"
            onClick={() => {
              window.location.href = '/#contact';
            }}
          >
            Begin the journey
          </button>
        </div>
      </div>
    </>
  );
}
