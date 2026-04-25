import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function initLenis(): Lenis | null {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    ScrollTrigger.refresh();
    return null;
  }

  const lenis = new Lenis({
    duration: 0.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.1,
    touchMultiplier: 2,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  lenisInstance = lenis;
  return lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function initSmoothAnchorLinks(): void {
  document.addEventListener('click', (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#') return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -68, duration: 2.8 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
