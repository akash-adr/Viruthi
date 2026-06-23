'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const LERP = 0.14;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      currentPos.current.x = lerp(currentPos.current.x, posRef.current.x, LERP);
      currentPos.current.y = lerp(currentPos.current.y, posRef.current.y, LERP);
      cursor.style.left = `${currentPos.current.x}px`;
      cursor.style.top = `${currentPos.current.y}px`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onMouseEnterInteractive = () => cursor.classList.add('cursor--expanded');
    const onMouseLeaveInteractive = () => cursor.classList.remove('cursor--expanded');

    // White cursor when inside #contact section
    const contactEl = document.getElementById('contact');
    const onEnterContact = () => cursor.classList.add('cursor--inverted');
    const onLeaveContact = () => cursor.classList.remove('cursor--inverted');

    if (contactEl) {
      contactEl.addEventListener('mouseenter', onEnterContact);
      contactEl.addEventListener('mouseleave', onLeaveContact);
    }

    // Track hover on all interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll<HTMLElement>(
        'a, button, [role="button"], p, h1, span'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(tick);

    // Wait a tick so DOM is ready
    setTimeout(addHoverListeners, 100);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      if (contactEl) {
        contactEl.removeEventListener('mouseenter', onEnterContact);
        contactEl.removeEventListener('mouseleave', onLeaveContact);
      }
    };
  }, []);

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />;
}
