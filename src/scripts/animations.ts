import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroEntrance(): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    gsap.set(['.hero-eyebrow', '.hero-name', '.hero-typewriter', '.hero-desc', '.hero-cta > *', '.scroll-indicator'], { opacity: 1, y: 0 });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl
    .from('.hero-eyebrow',     { y: 24, opacity: 0, duration: 0.6 }, 0.15)
    .from('.hero-name',        { y: 60, opacity: 0, duration: 1.0 }, 0.35)
    .from('.hero-typewriter',  { y: 20, opacity: 0, duration: 0.6 }, 0.75)
    .from('.hero-desc',        { y: 20, opacity: 0, duration: 0.6 }, 0.9)
    .from('.hero-cta > *',     { y: 24, opacity: 0, duration: 0.5, stagger: 0.12 }, 1.1)
    .from('.scroll-indicator', { opacity: 0, duration: 0.6 }, 1.6);
}

export function initScrollReveals(): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 44,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((parent) => {
    const children = parent.querySelectorAll('[data-stagger-item]');
    if (!children.length) return;
    gsap.from(children, {
      y: 28,
      opacity: 0,
      duration: 0.55,
      ease: 'power2.out',
      stagger: 0.065,
      scrollTrigger: {
        trigger: parent,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

export function initTimelineLine(): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const line = document.getElementById('timeline-line');
  if (line && !prefersReduced) {
    gsap.fromTo(line,
      { scaleY: 0, transformOrigin: 'top center' },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 65%',
          end: 'bottom 35%',
          scrub: 1.2,
        },
      }
    );
  }

  if (!prefersReduced) {
    gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    });
  }
}

export function initSectionLabels(): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  gsap.utils.toArray<HTMLElement>('.section-label').forEach((label) => {
    gsap.from(label, {
      x: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: label,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });
}
