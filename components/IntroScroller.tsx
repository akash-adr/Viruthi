'use client';

import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 180;
const SCROLL_HEIGHT_VH = 600; // Extended for more cinematic pacing

// Caption definitions with precise placement based on frame analysis
// Frame analysis:
// F001-040 (0.00-0.22): Dots scattered in center. Clear: top-left corner, bottom strip.
// F040-090 (0.22-0.48): Kolam forming diagonally top-right to bottom-left. Clear: top-left, bottom-right.
// F090-150 (0.48-0.68): Full 4-arm kolam, centered x:35-65%, y:10-88%. Clear: far-left or far-right strip.
// F150-180 (0.68-1.00): Completed kolam. Clear: bottom strip (y:89-100%) or far left/right.
const CAPTIONS = [
  {
    text: "One line, never broken.",
    start: 0.0,
    end: 0.22,
    // Dots are sparse center-right; top-left corner is completely clear
    placement: 'top-left',
  },
  {
    text: "It bends, it loops, it returns to where it started.",
    start: 0.22,
    end: 0.48,
    // Kolam forming diagonally; bottom-right corner is empty
    placement: 'bottom-right',
  },
  {
    text: "That's what we believe a relationship is.",
    start: 0.48,
    end: 0.68,
    // Full kolam centered x:35-65%; far-left strip x:0-28% is clear
    placement: 'far-left',
  },
  {
    text: "Welcome to Viruthi",
    subtitle: "CENTER FOR FLOURISHING FAMILIES",
    start: 0.68,
    end: 1.0,
    // Completed kolam; far-right strip is completely clear
    placement: 'far-right',
  },
] satisfies {
  text: string;
  subtitle?: string;
  start: number;
  end: number;
  placement: string;
}[];

type Placement = 'top-left' | 'bottom-right' | 'far-left' | 'far-right';

// Returns absolute positioning style per placement — derived from pixel-level frame analysis
function getPlacementStyle(placement: Placement): React.CSSProperties {
  switch (placement) {
    case 'top-left':
      // F1-40: dots forming at center. Top-left corner (x:0-35%, y:0-30%) is clear.
      return {
        position: 'absolute',
        top: '9vh',
        left: '7vw',
        width: '36vw',
        maxWidth: '500px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      };
    case 'bottom-right':
      // F40-90: kolam draws diagonally top-right to bottom-left. Bottom-right corner is clear.
      return {
        position: 'absolute',
        bottom: '9vh',
        right: '7vw',
        width: '38vw',
        maxWidth: '520px',
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      };
    case 'far-left':
      // F90-150: full 4-arm kolam x:35-65%. Far-left strip x:0-28% is entirely clear.
      return {
        position: 'absolute',
        top: '50%',
        left: '4vw',
        transform: 'translateY(-50%)',
        width: '26vw',
        maxWidth: '360px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      };
    case 'far-right':
      // F150-180: completed kolam y:10-88%. Far-right strip x:72-100% is clear.
      return {
        position: 'absolute',
        top: '50%',
        right: '4vw',
        transform: 'translateY(-50%)',
        width: '26vw',
        maxWidth: '360px',
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      };
  }
}

export default function IntroScroller() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Preload images
  useEffect(() => {
    let mounted = true;
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loaded = 0;

    const loadFrame = (index: number) => {
      const img = new Image();
      const num = (index + 1).toString().padStart(3, '0');
      img.src = `/intro/ezgif-frame-${num}.jpg`;
      img.onload = () => {
        if (!mounted) return;
        loadedImages[index] = img;
        loaded++;
        setLoadedCount(loaded);
        if (loaded === FRAME_COUNT) {
          setImages(loadedImages);
        } else if (loaded === 1 && !images.length) {
          setImages([...loadedImages]);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
      };
    };

    for (let i = 0; i < FRAME_COUNT; i++) loadFrame(i);
    return () => { mounted = false; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll Tracking
  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const scrollRange = rect.height - window.innerHeight;
            const scrolled = -rect.top;
            let progress = scrolled / scrollRange;
            progress = Math.max(0, Math.min(1, progress));
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [reducedMotion]);

  // Canvas Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameIndex = reducedMotion
      ? FRAME_COUNT - 1
      : Math.floor(scrollProgress * (FRAME_COUNT - 1));

    let imgToDraw: HTMLImageElement | undefined;
    for (let i = frameIndex; i >= 0; i--) {
      if (images[i] && images[i].complete) {
        imgToDraw = images[i];
        break;
      }
    }

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    } else {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }

    if (imgToDraw) {
      const canvasRatio = rect.width / rect.height;
      const imgRatio = imgToDraw.width / imgToDraw.height;
      let drawWidth = rect.width;
      let drawHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawHeight = rect.height;
        drawWidth = rect.height * imgRatio;
        offsetX = (rect.width - drawWidth) / 2;
      } else {
        drawWidth = rect.width;
        drawHeight = rect.width / imgRatio;
        offsetY = (rect.height - drawHeight) / 2;
      }

      ctx.drawImage(imgToDraw, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, [scrollProgress, images, reducedMotion]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setScrollProgress(p => p);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute scroll-driven gradient mask for text illumination.
  // Uses mask-image (universally supported) instead of background-clip:text
  // which is broken in Chrome when parent has overflow:hidden or composited layers.
  const getGradientStyle = (relativeProgress: number, isFinal: boolean): React.CSSProperties => {
    const sweepPos = relativeProgress * 200 - 50; // -50% to 150%
    const baseAlpha = isFinal ? 0.08 : 0.0;
    const mask = `linear-gradient(
      90deg,
      rgba(0,0,0,${baseAlpha}) 0%,
      rgba(0,0,0,${baseAlpha}) ${sweepPos - 30}%,
      rgba(0,0,0,1) ${sweepPos}%,
      rgba(0,0,0,1) ${sweepPos + 20}%,
      rgba(0,0,0,${baseAlpha}) ${sweepPos + 50}%,
      rgba(0,0,0,${baseAlpha}) 100%
    )`;
    return {
      color: '#0D0D0D',
      WebkitMaskImage: mask,
      maskImage: mask,
    };
  };

  return (
    <section
      id="intro"
      ref={containerRef}
      style={{
        width: '100%',
        height: reducedMotion ? '100vh' : `${SCROLL_HEIGHT_VH}vh`,
        position: 'relative',
        background: '#FFFFFF',
      }}
    >
      {/* Google Fonts — Inter Tight */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&family=Inter:wght@300;400;500&display=swap');

        .intro-statement {
          font-family: 'Inter Tight', 'SF Pro Display', system-ui, sans-serif;
          font-size: clamp(2.8rem, 7vw, 7rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin: 0;
          display: inline-block;
        }

        .intro-final-title {
          font-family: 'Inter Tight', 'SF Pro Display', system-ui, sans-serif;
          font-size: clamp(3.5rem, 9vw, 9rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 0.9;
          margin: 0;
          text-transform: lowercase;
        }

        .intro-subtitle {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(9px, 1vw, 11px);
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.45);
          margin-top: 28px;
        }

        .intro-loading {
          position: absolute;
          bottom: 28px;
          right: 32px;
          z-index: 10;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: rgba(13,13,13,0.4);
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .intro-scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(13,13,13,0.35);
          animation: scrollHintBob 2s ease-in-out infinite;
        }

        @keyframes scrollHintBob {
          0%, 100% { transform: translateX(-50%) translateY(0px); opacity: 0.3; }
          50% { transform: translateX(-50%) translateY(6px); opacity: 0.6; }
        }

        .intro-progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          background: rgba(255,255,255,0.15);
          z-index: 10;
          transition: width 0.1s linear;
        }
      `}</style>

      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          background: '#FFFFFF',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Subtle dark vignette for text legibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 100%)',
        }} />

        {/* Loading Indicator */}
        {loadedCount < FRAME_COUNT && !reducedMotion && (
          <div className="intro-loading">
            {Math.floor((loadedCount / FRAME_COUNT) * 100)}%
          </div>
        )}

        {/* Scroll progress bar */}
        {!reducedMotion && (
          <div
            className="intro-progress-bar"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        )}

        {/* Scroll hint — visible only at start */}
        {!reducedMotion && scrollProgress < 0.05 && (
          <div className="intro-scroll-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(13,13,13,0.5)" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Scroll
          </div>
        )}

        {/* Captions Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          {/* Reduced motion: stack all text */}
          {reducedMotion && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60vw',
              maxWidth: '900px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}>
              {CAPTIONS.map((cap, idx) => (
                <div key={idx}>
                  {cap.subtitle ? (
                    <>
                      <h2 className="intro-final-title" style={{ color: '#0D0D0D' }}>
                        {cap.text}
                      </h2>
                      <span className="intro-subtitle">{cap.subtitle}</span>
                    </>
                  ) : (
                    <p className="intro-statement" style={{ color: '#0D0D0D' }}>
                      {cap.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Scroll-driven captions */}
          {!reducedMotion && CAPTIONS.map((cap, idx) => {
            const segmentLength = cap.end - cap.start;
            const relativeProgress = (scrollProgress - cap.start) / segmentLength;

            if (relativeProgress < 0 || relativeProgress > 1) return null;

            // Fade timing
            const FADE_IN  = 0.18;
            const FADE_OUT = 0.15;
            const isFinal  = cap.placement === 'far-right';

            let opacity    = 1;
            let translateY = 0;

            if (relativeProgress < FADE_IN) {
              const t        = relativeProgress / FADE_IN;
              const eased    = t * t * (3 - 2 * t);
              opacity        = eased;
              translateY     = 40 * (1 - eased);
            } else if (relativeProgress > 1 - FADE_OUT && !isFinal) {
              // Final caption never fades out — stays until end of section
              const t        = (1 - relativeProgress) / FADE_OUT;
              const eased    = t * t * (3 - 2 * t);
              opacity        = eased;
              translateY     = -24 * (1 - eased);
            }

            const placementStyle = getPlacementStyle(cap.placement as Placement);
            const gradStyle      = getGradientStyle(relativeProgress, isFinal);

            // Merge placement transform with animation translateY
            let baseTransform = (placementStyle.transform as string) || '';
            if (baseTransform.includes('translateY(-50%)')) {
              baseTransform = `translateY(calc(-50% + ${translateY}px))`;
            } else if (baseTransform.includes('translate(-50%, -50%)')) {
              baseTransform = `translate(-50%, calc(-50% + ${translateY}px))`;
            } else if (baseTransform.includes('translateX(-50%)')) {
              // bottom-center: only shift Y, preserve X centering
              baseTransform = `translateX(-50%) translateY(${translateY}px)`;
            } else {
              baseTransform = `translateY(${translateY}px)`;
            }

            return (
              <div
                key={idx}
                style={{
                  ...placementStyle,
                  transform: baseTransform,
                  opacity,
                  willChange: 'opacity, transform',
                }}
              >
                {cap.subtitle ? (
                  <>
                    <h2
                      className="intro-final-title"
                      style={{ ...gradStyle }}
                    >
                      {cap.text}
                    </h2>
                    <span className="intro-subtitle">{cap.subtitle}</span>
                  </>
                ) : (
                  <p
                    className="intro-statement"
                    style={{ ...gradStyle }}
                  >
                    {cap.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
