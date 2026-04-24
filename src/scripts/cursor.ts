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

document.addEventListener('mouseleave', () => {
    gsap.to([dot, ring], { opacity: 0, duration: 0.15 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to([dot, ring], { opacity: 1, duration: 0.15 });
  });
}
