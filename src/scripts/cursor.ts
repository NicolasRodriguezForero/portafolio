import { gsap } from 'gsap';

export function initCursor(): void {
  const isMobile = window.matchMedia('(pointer: coarse)').matches;
  if (isMobile) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  document.documentElement.style.cursor = 'none';

  // Centering via GSAP so it composes correctly with scale animations
  gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

  window.addEventListener('mousemove', (e: MouseEvent) => {
    gsap.set(dot,  { x: e.clientX, y: e.clientY });
    gsap.set(ring, { x: e.clientX, y: e.clientY });
  }, { passive: true });

  document.addEventListener('mouseover', (e: MouseEvent) => {
    if ((e.target as Element).closest('a, button, [data-cursor-grow]')) {
      gsap.to(ring, { scale: 2.2, opacity: 0.6, duration: 0.2, ease: 'power2.out' });
      gsap.to(dot,  { scale: 0.4, duration: 0.2, ease: 'power2.out' });
    }
  });

  document.addEventListener('mouseout', (e: MouseEvent) => {
    if ((e.target as Element).closest('a, button, [data-cursor-grow]')) {
      gsap.to(ring, { scale: 1, opacity: 0.35, duration: 0.2, ease: 'power2.out' });
      gsap.to(dot,  { scale: 1, duration: 0.2, ease: 'power2.out' });
    }
  });

  document.addEventListener('mouseleave', () => {
    gsap.to([dot, ring], { opacity: 0, duration: 0.15 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to([dot, ring], { opacity: 1, duration: 0.15 });
  });
}
