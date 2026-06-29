'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const FRAME_COUNT = 240;
const SCROLL_HEIGHT_VH = 700;

type Placement = {
  style: React.CSSProperties;
  animY: string;
};

type CaptionItem = {
  text: string;
  start: number;
  end: number;
  placement: Placement;
};

const CAPTIONS: CaptionItem[] = [
  {
    text: "Every couple fights.",
    start: 0.0, end: 0.15,
    placement: {
      style: {
        position: 'absolute' as const,
        bottom: '8vh',
        left: '6vw',
        width: '32vw',
        maxWidth: '380px',
        textAlign: 'left' as const,
        alignItems: 'flex-start' as const,
      },
      animY: 'bottom',
    },
  },
  {
    text: "Some fights feel impossible to come back from.",
    start: 0.15, end: 0.30,
    placement: {
      style: {
        position: 'absolute' as const,
        top: '50%',
        left: '3vw',
        transform: 'translateY(-50%)',
        width: '22vw',
        maxWidth: '280px',
        textAlign: 'left' as const,
        alignItems: 'flex-start' as const,
      },
      animY: 'center',
    },
  },
  {
    text: "But one of you still reaches out.",
    start: 0.30, end: 0.45,
    placement: {
      style: {
        position: 'absolute' as const,
        top: '5vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '52vw',
        maxWidth: '680px',
        textAlign: 'center' as const,
        alignItems: 'center' as const,
      },
      animY: 'top',
    },
  },
  {
    text: "That's where we come in.",
    start: 0.45, end: 0.60,
    placement: {
      style: {
        position: 'absolute' as const,
        top: '5vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '44vw',
        maxWidth: '600px',
        textAlign: 'center' as const,
        alignItems: 'center' as const,
      },
      animY: 'top',
    },
  },
  {
    text: "A safe space. A guide. Someone who listens to both sides.",
    start: 0.60, end: 0.75,
    placement: {
      style: {
        position: 'absolute' as const,
        top: '5vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '56vw',
        maxWidth: '740px',
        textAlign: 'center' as const,
        alignItems: 'center' as const,
      },
      animY: 'top',
    },
  },
  {
    text: "Slowly, the noise quiets.",
    start: 0.75, end: 0.88,
    placement: {
      style: {
        position: 'absolute' as const,
        bottom: '8vh',
        right: '5vw',
        width: '30vw',
        maxWidth: '360px',
        textAlign: 'right' as const,
        alignItems: 'flex-end' as const,
      },
      animY: 'bottom',
    },
  },
  {
    text: "And what was broken... becomes whole again.",
    start: 0.88, end: 1.0,
    placement: {
      style: {
        position: 'absolute' as const,
        top: '5vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '58vw',
        maxWidth: '820px',
        textAlign: 'center' as const,
        alignItems: 'center' as const,
      },
      animY: 'top',
    },
  },
];

// Build the correct CSS transform string, preserving existing translate if any
function buildTransform(placement: CaptionItem['placement'], translateY: number): string {
  const existing = (placement.style.transform as string) || '';
  if (existing.includes('translateY(-50%)')) {
    return `translateY(calc(-50% + ${translateY}px))`;
  }
  if (existing.includes('translateX(-50%)')) {
    return `translateX(-50%) translateY(${translateY}px)`;
  }
  return `translateY(${translateY}px)`;
}

// Draw frame onto canvas with proper DPR handling
function drawFrame(canvas: HTMLCanvasElement, img: HTMLImageElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const w = Math.round(rect.width * dpr);
  const h = Math.round(rect.height * dpr);

  // Only resize if dimensions actually changed (prevents constant rescaling)
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }

  ctx.save();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);

  // Object-fit: cover — fill the canvas, crop to center
  const cr = rect.width / rect.height;
  const ir = img.naturalWidth / img.naturalHeight;

  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;

  if (ir > cr) {
    // Image is wider than canvas — crop left/right
    sw = img.naturalHeight * cr;
    sx = (img.naturalWidth - sw) / 2;
  } else {
    // Image is taller than canvas — crop top/bottom
    sh = img.naturalWidth / cr;
    sy = (img.naturalHeight - sh) / 2;
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, rect.width, rect.height);
  ctx.restore();
}

export default function StoryScroller() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const imagesRef    = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));

  const [loadedCount, setLoadedCount]        = useState(0);
  const [scrollProgress, setScrollProgress]  = useState(0);
  const [reducedMotion, setReducedMotion]    = useState(false);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  // Load all frames
  useEffect(() => {
    let mounted = true;
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const num = (i + 1).toString().padStart(3, '0');
      img.src = `/story/ezgif-frame-${num}.jpg`;

      img.onload = () => {
        if (!mounted) return;
        imagesRef.current[i] = img;
        loaded++;
        setLoadedCount(loaded);
        if (i === 0) setFirstFrameReady(true);
      };
      img.onerror = () => {
        if (!mounted) return;
        loaded++;
        setLoadedCount(loaded);
      };
    }

    return () => { mounted = false; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Calculate scroll progress
  const updateProgress = useCallback(() => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, -r.top / (r.height - window.innerHeight)));
    setScrollProgress(p);
  }, []);

  // Scroll listener
  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion, updateProgress]);

  // Resize listener — recalculate progress AND redraw canvas
  useEffect(() => {
    const onResize = () => {
      updateProgress();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateProgress]);

  // Draw the correct frame on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const fi = reducedMotion
      ? FRAME_COUNT - 1
      : Math.min(FRAME_COUNT - 1, Math.floor(scrollProgress * (FRAME_COUNT - 1)));

    // Find the nearest loaded frame at or before the target
    let img: HTMLImageElement | null = null;
    for (let i = fi; i >= 0; i--) {
      const candidate = imagesRef.current[i];
      if (candidate?.complete && candidate.naturalWidth > 0) {
        img = candidate;
        break;
      }
    }

    if (img) {
      drawFrame(canvas, img);
    }
  }, [scrollProgress, loadedCount, reducedMotion, firstFrameReady]);

  return (
    <section
      id="story-scroller"
      ref={containerRef}
      style={{
        width: '100%',
        height: reducedMotion ? '100vh' : `${SCROLL_HEIGHT_VH}vh`,
        position: 'relative',
        background: '#FAFAFA',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,800;0,900;1,800&family=Inter:wght@400;500&display=swap');

        .ss-text {
          font-family: 'Inter Tight', 'SF Pro Display', system-ui, sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.0;
          margin: 0;
          color: #0D0D0D;
        }

        .ss-text-sm  { font-size: clamp(1.5rem, 3vw, 3.5rem); }
        .ss-text-md  { font-size: clamp(1.8rem, 4vw, 4.5rem); }
        .ss-text-lg  { font-size: clamp(2.2rem, 5.5vw, 6rem); }

        .ss-eyebrow {
          display: block;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.35);
          margin-bottom: 10px;
        }

        .ss-progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: rgba(13,13,13,0.15);
          z-index: 10;
          transition: width 0.08s linear;
          pointer-events: none;
        }

        .ss-loading {
          position: absolute;
          bottom: 24px;
          right: 28px;
          z-index: 10;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: rgba(13,13,13,0.35);
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .ss-caption {
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%) !important;
            top: auto !important;
            bottom: 10vh !important;
            width: 86vw !important;
            max-width: none !important;
            text-align: center !important;
            align-items: center !important;
          }
          .ss-text-sm  { font-size: clamp(1.4rem, 5vw, 2.5rem); }
          .ss-text-md  { font-size: clamp(1.6rem, 5.5vw, 3rem); }
          .ss-text-lg  { font-size: clamp(1.8rem, 6vw, 3.5rem); }
        }
      `}</style>

      {/* ── STICKY VIEWPORT ── */}
      <div style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#FAFAFA',
      }}>
        {/* Canvas for frame animation */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
            display: 'block',
          }}
        />

        {/* Loading indicator */}
        {loadedCount < FRAME_COUNT && !reducedMotion && (
          <div className="ss-loading">
            {Math.floor((loadedCount / FRAME_COUNT) * 100)}%
          </div>
        )}

        {/* Scroll progress bar */}
        {!reducedMotion && (
          <div className="ss-progress-bar" style={{ width: `${scrollProgress * 100}%` }} />
        )}

        {/* Caption overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>

          {/* Reduced motion: all captions stacked */}
          {reducedMotion && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '70vw',
              maxWidth: '800px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              textAlign: 'center',
              alignItems: 'center',
            }}>
              {CAPTIONS.map((c, i) => (
                <p key={i} className="ss-text ss-text-md">{c.text}</p>
              ))}
            </div>
          )}

          {/* Scroll-driven captions */}
          {!reducedMotion && CAPTIONS.map((cap, idx) => {
            const segLen = cap.end - cap.start;
            const rel    = (scrollProgress - cap.start) / segLen;

            if (rel < -0.05 || rel > 1.05) return null;

            const FADE_IN  = 0.18;
            const FADE_OUT = 0.18;
            const isFinal  = idx === CAPTIONS.length - 1;

            let opacity = 1;
            let translateY = 0;

            if (rel < FADE_IN) {
              const t = Math.max(0, rel) / FADE_IN;
              const e = t * t * (3 - 2 * t); // smoothstep
              opacity    = e;
              translateY = 28 * (1 - e);
            } else if (rel > 1 - FADE_OUT) {
              const t = (1 - Math.min(1, rel)) / FADE_OUT;
              const e = t * t * (3 - 2 * t);
              opacity    = e;
              translateY = -16 * (1 - e);
            }

            const transform = buildTransform(cap.placement, translateY);

            const sizeClass = cap.placement.animY === 'top'
              ? 'ss-text-sm'
              : isFinal
                ? 'ss-text-lg'
                : 'ss-text-md';

            const num = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={idx}
                className="ss-caption"
                style={{
                  ...cap.placement.style,
                  display: 'flex',
                  flexDirection: 'column',
                  transform,
                  opacity,
                  willChange: 'opacity, transform',
                  transition: 'opacity 0.05s linear',
                }}
              >
                <span className="ss-eyebrow">{num} / 07</span>
                <p className={`ss-text ${sizeClass}`}>
                  {cap.text}
                </p>
                {isFinal && (
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(13,13,13,0.3)',
                    marginTop: '18px',
                  }}>
                    Viruthi · Centre for Flourishing Families
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
