import { gsap } from 'gsap';

export function initCursor(): void {
  const isMobile = window.matchMedia('(pointer: coarse)').matches;
  if (isMobile) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  document.documentElement.style.cursor = 'none';

  const dotX  = gsap.quickTo(dot,  'x', { duration: 0.08, ease: 'none' });
  const dotY  = gsap.quickTo(dot,  'y', { duration: 0.08, ease: 'none' });
  const ringX = gsap.quickTo(ring, 'x', { duration: 0.12, ease: 'power2.out' });
  const ringY = gsap.quickTo(ring, 'y', { duration: 0.12, ease: 'power2.out' });

  window.addEventListener('mousemove', (e: MouseEvent) => {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  });

  // Grow on hoverable elements
  document.addEventListener('mouseover', (e: MouseEvent) => {
    const target = (e.target as Element).closest('a, button, [data-cursor-grow]');
    if (target) {
      gsap.to(ring, { scale: 2.2, opacity: 0.6, duration: 0.25, ease: 'power2.out' });
      gsap.to(dot,  { scale: 0.4, duration: 0.25, ease: 'power2.out' });
    }
  });
  document.addEventListener('mouseout', (e: MouseEvent) => {
    const target = (e.target as Element).closest('a, button, [data-cursor-grow]');
    if (target) {
      gsap.to(ring, { scale: 1, opacity: 0.35, duration: 0.25, ease: 'power2.out' });
      gsap.to(dot,  { scale: 1, duration: 0.25, ease: 'power2.out' });
    }
  });

  document.addEventListener('mouseleave', () => {
    gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
  });
}
