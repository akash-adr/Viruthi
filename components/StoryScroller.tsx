'use client';

import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 240;
const SCROLL_HEIGHT_VH = 700;

/*
  PIXEL-PRECISE CLEAR ZONE ANALYSIS (image is 1456×816 landscape)
  ────────────────────────────────────────────────────────────────
  F001–036  Angry couple (arms crossed). Characters: x 27–73%, y 13–92%.
            Smoke clouds at top-center ~x35–73%, y0–18%.
            → CLEAR: far-left strip x0–20% (mid-height), bottom band y88–100%
            → USE: bottom-left strip (below characters, left side clear)

  F036–072  One reaches out. Characters shift slightly left: x28–75%, y15–92%.
            Exclamation marks top-right ~x55–75%, y12–28%.
            → CLEAR: far-left strip x0–22% (mid-height)
            → USE: left edge mid-height — character doesn't reach there

  F072–144  Three people (couple left x12–58%, counsellor right x62–88%).
            Full-width coverage y15–90%.
            → CLEAR: top band ONLY y0–12% (narrow but safe)
            → USE: very top-center above all heads

  F144–180  Same counselling scene + transition to broken hearts.
            → CLEAR: top band y0–12% only
            → USE: very top-center

  F180–220  Couple with broken heart pieces, centered x27–73%, y13–90%.
            → CLEAR: far-left x0–20%, far-right x80–100%, bottom y88–100%
            → USE: bottom-right strip (below & beside characters)

  F220–240  Smiling couple + red heart, centered x27–73%, y13–92%.
            → CLEAR: top band y0–12% and bottom band y88–100%
            → USE: very top-center (above the joy — dramatic contrast)
*/

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
    // Bottom-left: characters end at x27% left and y88% bottom
    // Place text flush to bottom, left quarter — fully clear
    placement: {
      style: {
        position: 'absolute' as const,
        bottom: '7vh',
        left: '6vw',
        width: '32vw',
        maxWidth: '380px',
        textAlign: 'left' as const,
        alignItems: 'flex-start' as const,
      },
      animY: 'bottom', // animation direction: upward means reducing bottom offset
    },
  },
  {
    text: "Some fights feel impossible to come back from.",
    start: 0.15, end: 0.30,
    // Far-left mid-height: x0–22% is empty at mid height (characters start at x27%)
    placement: {
      style: {
        position: 'absolute' as const,
        top: '50%',
        left: '3vw',
        transform: 'translateY(-50%)',
        width: '20vw',
        maxWidth: '260px',
        textAlign: 'left' as const,
        alignItems: 'flex-start' as const,
      },
      animY: 'center',
    },
  },
  {
    text: "But one of you still reaches out.",
    start: 0.30, end: 0.45,
    // Top band: Only clear zone when 3 people are in frame
    // Characters' tallest point (counsellor head) starts ~y14%
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
    // Top band — same 3-person scene, only top is safe
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
    // Top band — still 3-person / transition frames
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
    // Bottom-right: couple with broken hearts centered x27–73%
    // Bottom band y88–100% is safe, right side x74–100% also safe
    placement: {
      style: {
        position: 'absolute' as const,
        bottom: '7vh',
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
    // Top band — final couple with red heart centered y13–92%
    // Top strip y0–11% is the only safe zone for this wide frame
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

function getGradientStyle(rel: number, isFinal: boolean): React.CSSProperties {
  const sweep = rel * 200 - 50;
  const baseAlpha = isFinal ? 0.08 : 0.0;
  const mask = `linear-gradient(90deg,
    rgba(0,0,0,${baseAlpha}) 0%,
    rgba(0,0,0,${baseAlpha}) ${sweep - 25}%,
    rgba(0,0,0,1) ${sweep}%,
    rgba(0,0,0,1) ${sweep + 18}%,
    rgba(0,0,0,${baseAlpha}) ${sweep + 48}%,
    rgba(0,0,0,${baseAlpha}) 100%)`;
  return {
    color: '#0D0D0D',
    WebkitMaskImage: mask,
    maskImage: mask,
  };
}

// Builds the animated transform that works for each placement type
function buildTransform(placement: (typeof CAPTIONS)[0]['placement'], translateY: number): string {
  const existingTransform = (placement.style.transform as string) || '';
  if (existingTransform.includes('translateY(-50%)')) {
    return `translateY(calc(-50% + ${translateY}px))`;
  }
  if (existingTransform.includes('translateX(-50%)')) {
    return `translateX(-50%) translateY(${translateY}px)`;
  }
  return `translateY(${translateY}px)`;
}

export default function StoryScroller() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);

  const [images, setImages]             = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount]   = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion]   = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  useEffect(() => {
    let mounted = true;
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const num = (i + 1).toString().padStart(3, '0');
      img.src = `/story/ezgif-frame-${num}.jpg`;
      img.onload = () => {
        if (!mounted) return;
        loadedImages[i] = img;
        loaded++;
        setLoadedCount(loaded);
        if (loaded === FRAME_COUNT) setImages([...loadedImages]);
        else if (loaded === 1) setImages([...loadedImages]);
      };
      img.onerror = () => { loaded++; setLoadedCount(loaded); };
    }

    return () => { mounted = false; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const r = containerRef.current.getBoundingClientRect();
            const p = Math.max(0, Math.min(1, -r.top / (r.height - window.innerHeight)));
            setScrollProgress(p);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fi = reducedMotion
      ? FRAME_COUNT - 1
      : Math.floor(scrollProgress * (FRAME_COUNT - 1));

    let img: HTMLImageElement | undefined;
    for (let i = fi; i >= 0; i--) {
      if (images[i]?.complete) { img = images[i]; break; }
    }

    const rect = canvas.getBoundingClientRect();
    const dpr  = window.devicePixelRatio || 1;

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width  = rect.width  * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    } else {
      ctx.save(); ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.restore();
    }

    if (img) {
      const cr = rect.width / rect.height;
      const ir = img.width / img.height;
      let dw = rect.width, dh = rect.height, ox = 0, oy = 0;
      const portrait = rect.height > rect.width;
      if (portrait) {
        if (ir > cr) { dw = rect.width; dh = rect.width / ir; oy = (rect.height - dh) / 2; }
        else         { dh = rect.height; dw = rect.height * ir; ox = (rect.width - dw) / 2; }
      } else {
        if (ir > cr) { dh = rect.height; dw = rect.height * ir; ox = (rect.width - dw) / 2; }
        else         { dw = rect.width; dh = rect.width / ir; oy = (rect.height - dh) / 2; }
      }
      ctx.drawImage(img, ox, oy, dw, dh);
    }
  }, [scrollProgress, images, reducedMotion]);

  useEffect(() => {
    const h = () => setScrollProgress(p => p);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  return (
    <section
      id="story-scroller"
      ref={containerRef}
      style={{
        width: '100%',
        height: reducedMotion ? '100vh' : `${SCROLL_HEIGHT_VH}vh`,
        position: 'relative',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(13,13,13,0.08)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;700;800;900&family=Inter:wght@400;500&display=swap');

        .ss-text {
          font-family: 'Inter Tight', 'SF Pro Display', system-ui, sans-serif;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin: 0;
        }

        /* Responsive size: smaller for cramped top-band captions, bigger for isolated ones */
        .ss-text-sm  { font-size: clamp(1.6rem, 3.5vw, 4rem);  }
        .ss-text-md  { font-size: clamp(2rem,   4.5vw, 5rem);  }
        .ss-text-lg  { font-size: clamp(2.6rem, 6vw,   7rem);  }

        .ss-eyebrow {
          display: block;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.3);
          margin-bottom: 12px;
        }

        .ss-progress {
          position: absolute;
          bottom: 0; left: 0;
          height: 1px;
          background: rgba(13,13,13,0.12);
          z-index: 10;
          transition: width 0.1s linear;
        }

        .ss-loading {
          position: absolute;
          bottom: 28px; right: 32px;
          z-index: 10;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 10px; font-weight: 500;
          color: rgba(13,13,13,0.3);
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
      `}</style>

      <div style={{ position:'sticky', top:0, left:0, width:'100%', height:'100vh', overflow:'hidden', background:'#FFF' }}>
        <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:1, pointerEvents:'none' }} />

        {loadedCount < FRAME_COUNT && !reducedMotion && (
          <div className="ss-loading">{Math.floor((loadedCount / FRAME_COUNT) * 100)}%</div>
        )}

        {!reducedMotion && (
          <div className="ss-progress" style={{ width: `${scrollProgress * 100}%` }} />
        )}

        <div style={{ position:'absolute', inset:0, zIndex:5, pointerEvents:'none' }}>

          {/* Reduced motion: stacked text */}
          {reducedMotion && (
            <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'60vw', maxWidth:'800px', display:'flex', flexDirection:'column', gap:'24px', textAlign:'center', alignItems:'center' }}>
              {CAPTIONS.map((c, i) => (
                <p key={i} className="ss-text ss-text-md" style={{ color: '#0D0D0D' }}>
                  {c.text}
                </p>
              ))}
            </div>
          )}

          {/* Scroll-driven captions */}
          {!reducedMotion && CAPTIONS.map((cap, idx) => {
            const segLen = cap.end - cap.start;
            const rel    = (scrollProgress - cap.start) / segLen;

            if (rel < 0 || rel > 1) return null;

            const FADE_IN  = 0.20;
            const FADE_OUT = 0.20;
            const isFinal  = idx === CAPTIONS.length - 1;

            let opacity = 1, translateY = 0;

            if (rel < FADE_IN) {
              const t = rel / FADE_IN;
              const e = t * t * (3 - 2 * t); // smoothstep
              opacity    = e;
              translateY = 36 * (1 - e);
            } else if (rel > 1 - FADE_OUT) {
              const t = (1 - rel) / FADE_OUT;
              const e = t * t * (3 - 2 * t);
              opacity    = e;
              translateY = -20 * (1 - e);
            }

            const gradStyle = getGradientStyle(rel, isFinal);
            const transform = buildTransform(cap.placement, translateY);

            // Pick size: top-band captions get sm (space is narrow), isolated ones get lg
            const sizeClass = cap.placement.animY === 'top'
              ? 'ss-text-sm'
              : isFinal
                ? 'ss-text-lg'
                : 'ss-text-md';

            const num = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={idx}
                style={{
                  ...cap.placement.style,
                  display: 'flex',
                  flexDirection: 'column',
                  transform,
                  opacity,
                  willChange: 'opacity, transform',
                }}
              >
                <span className="ss-eyebrow">{num} / 07</span>
                <p className={`ss-text ${sizeClass}`} style={{ ...gradStyle }}>
                  {cap.text}
                </p>
                {isFinal && (
                  <span style={{ fontFamily:'Inter,sans-serif', fontSize:'10px', fontWeight:500, letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(13,13,13,0.28)', marginTop:'20px' }}>
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
