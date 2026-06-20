'use client';

import { useEffect, useRef, useState } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic', 'normal'],
});

const FRAME_COUNT = 240;
const SCROLL_HEIGHT_VH = 500; // 500vh to make scrolling feel deliberate

// Caption definitions mapped to scroll percentages
const CAPTIONS = [
  { text: "Every couple fights.", start: 0.0, end: 0.15 },
  { text: "Some fights feel impossible to come back from.", start: 0.15, end: 0.30 },
  { text: "But one of you still reaches out.", start: 0.30, end: 0.45 },
  { text: "That's where we come in.", start: 0.45, end: 0.60 },
  { text: "A safe space. A guide. Someone who listens to both sides.", start: 0.60, end: 0.75 },
  { text: "Slowly, the noise quiets.", start: 0.75, end: 0.88 },
  { text: "And what was broken... becomes whole again.", start: 0.88, end: 1.0 },
];

export default function StoryScroller() {
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
      // Format number to 3 digits e.g. 001
      const num = (index + 1).toString().padStart(3, '0');
      img.src = `/story/ezgif-frame-${num}.jpg`;
      img.onload = () => {
        if (!mounted) return;
        loadedImages[index] = img;
        loaded++;
        setLoadedCount(loaded);
        if (loaded === FRAME_COUNT) {
          setImages(loadedImages);
        } else if (loaded === 1 && !images.length) {
          // Temporarily set images so first frame can draw while others load
          setImages([...loadedImages]);
        }
      };
      img.onerror = () => {
        // Handle error by just skipping it
        loaded++;
        setLoadedCount(loaded);
      };
    };

    // Load sequentially or batched
    for (let i = 0; i < FRAME_COUNT; i++) {
      loadFrame(i);
    }

    return () => {
      mounted = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Scroll Tracking
  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Calculate progress through the section
            // We subtract window.innerHeight so progress is 0 when top hits top, and 1 when bottom hits bottom.
            const scrollRange = rect.height - window.innerHeight;
            // distance scrolled past the start of the element
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
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [reducedMotion]);

  // Canvas Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameIndex = 0;
    if (reducedMotion) {
      frameIndex = FRAME_COUNT - 1; // Show last frame if reduced motion
    } else {
      frameIndex = Math.floor(scrollProgress * (FRAME_COUNT - 1));
    }

    // Try to get the exact frame, or the closest loaded frame before it
    let imgToDraw: HTMLImageElement | undefined;
    for (let i = frameIndex; i >= 0; i--) {
      if (images[i] && images[i].complete) {
        imgToDraw = images[i];
        break;
      }
    }

    // Update canvas resolution to match display size for crispness
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Only resize if necessary
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
      // Draw image using object-fit: contain logic
      const canvasRatio = rect.width / rect.height;
      const imgRatio = imgToDraw.width / imgToDraw.height;
      
      let drawWidth = rect.width;
      let drawHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      // Smart scaling: Cover on landscape, Contain on portrait to avoid feeling zoomed in
      const isPortrait = rect.height > rect.width;

      if (isPortrait) {
        // Contain logic (mobile/portrait)
        if (imgRatio > canvasRatio) {
          drawWidth = rect.width;
          drawHeight = rect.width / imgRatio;
          offsetY = (rect.height - drawHeight) / 2;
        } else {
          drawHeight = rect.height;
          drawWidth = rect.height * imgRatio;
          offsetX = (rect.width - drawWidth) / 2;
        }
      } else {
        // Cover logic (desktop/landscape)
        if (imgRatio > canvasRatio) {
          drawHeight = rect.height;
          drawWidth = rect.height * imgRatio;
          offsetX = (rect.width - drawWidth) / 2;
        } else {
          drawWidth = rect.width;
          drawHeight = rect.width / imgRatio;
          offsetY = (rect.height - drawHeight) / 2;
        }
      }

      ctx.drawImage(imgToDraw, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, [scrollProgress, images, reducedMotion]);

  // Handle Resize for Canvas Redraw
  useEffect(() => {
    const handleResize = () => {
      // Forcing a small state update to trigger the canvas useEffect
      setScrollProgress(p => p); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{
        width: '100%',
        height: reducedMotion ? '100vh' : `${SCROLL_HEIGHT_VH}vh`,
        position: 'relative',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(13,13,13,0.08)'
      }}
    >
      <div 
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
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
            pointerEvents: 'none'
          }}
        />

        {/* Loading Indicator */}
        {loadedCount < FRAME_COUNT && !reducedMotion && (
          <div style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            zIndex: 10,
            fontFamily: 'var(--font-satoshi)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'rgba(13,13,13,0.4)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            Loading Story {Math.floor((loadedCount / FRAME_COUNT) * 100)}%
          </div>
        )}

        {/* Captions Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 5,
          pointerEvents: 'none'
        }}>
          {CAPTIONS.map((cap, idx) => {
            const isLeft = idx % 2 === 0;
            
            // If reduced motion, just show all text blocks stacked
            if (reducedMotion) {
              return (
                <div key={idx} className={playfair.className} style={{ 
                  margin: '8px 0',
                  textAlign: 'center',
                  fontSize: 'clamp(20px, 3vw, 32px)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  background: 'linear-gradient(to bottom, #000000, #4A4A4A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {cap.text}
                </div>
              );
            }

            // Normal scroll math
            const segmentLength = cap.end - cap.start;
            // How far are we into this specific caption's segment? (0 to 1)
            const relativeProgress = (scrollProgress - cap.start) / segmentLength;
            
            // If outside segment bounds, don't render
            if (relativeProgress < 0 || relativeProgress > 1) {
              return null;
            }

            // Calculate Opacity, TranslateY, Scale, and Blur
            let opacity = 1;
            let translateY = 0; // px
            let scale = 1;
            let blur = 0; // px
            const FADE_FRAC = 0.25; // 25% fade in, 25% fade out for smoother transition

            if (relativeProgress < FADE_FRAC) {
              // Fading in
              const localProgress = relativeProgress / FADE_FRAC;
              opacity = Math.pow(localProgress, 1.5); // Ease-in opacity
              translateY = 24 * (1 - localProgress); // Start 24px down, move to 0
              scale = 0.96 + (0.04 * localProgress); // Start at 0.96, move to 1
              blur = 8 * (1 - localProgress); // Start with 8px blur, move to 0
            } else if (relativeProgress > 1 - FADE_FRAC) {
              // Fading out
              const localProgress = (1 - relativeProgress) / FADE_FRAC;
              opacity = Math.pow(localProgress, 1.5);
              translateY = -24 * (1 - localProgress); // Start 0, drift upwards to -24px
              scale = 1 + (0.04 * (1 - localProgress)); // Drift slightly larger to 1.04
              blur = 8 * (1 - localProgress);
            }

            return (
              <div 
                key={idx}
                className={playfair.className}
                style={{
                  position: 'absolute',
                  top: '50%',
                  [isLeft ? 'left' : 'right']: '5vw',
                  width: '90vw',
                  maxWidth: '500px',
                  textAlign: isLeft ? 'left' : 'right',
                  fontSize: 'clamp(28px, 4vw, 46px)',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                  background: 'linear-gradient(135deg, #0A0A0A 0%, #6A6A6A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  opacity: opacity,
                  transform: `translateY(calc(-50% + ${translateY}px)) scale(${scale})`,
                  willChange: 'opacity, transform, filter',
                  // Soft white radial glow for legibility against black lines, plus the dynamic blur
                  filter: `drop-shadow(0 0 32px rgba(255,255,255,1)) drop-shadow(0 0 12px rgba(255,255,255,0.8)) blur(${blur}px)`,
                }}
              >
                {cap.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
