'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // Slower duration = that heavy, deliberate Apple-like scroll feel
      duration: 2.2,
      easing: (t: number) => {
        // Smooth cubic ease-out — identical to Apple's scroll physics
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      smoothWheel: true,
      wheelMultiplier: 0.7,   // Resistance — each scroll tick moves less
      touchMultiplier: 1.2,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
