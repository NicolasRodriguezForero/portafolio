import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initProjectsCarousel(): void {
  const track   = document.getElementById('projects-track');
  const wrapper = document.getElementById('projects-wrapper');
  const section = document.getElementById('projects');
  if (!track || !wrapper || !section) return;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile) return;

  const getScrollDistance = () => {
    const style = getComputedStyle(wrapper);
    const pl = parseFloat(style.paddingLeft);
    const pr = parseFloat(style.paddingRight);
    return track.scrollWidth - wrapper.clientWidth + pl + pr;
  };

  gsap.to(track, {
    x: () => -getScrollDistance(),
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${getScrollDistance()}`,
      pin: true,
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  });

  // 3D tilt on project cards
  const cards = document.querySelectorAll<HTMLElement>('.project-card[data-tilt]');
  const MAX_TILT = 10;

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { z: 20, duration: 0.3, ease: 'power2.out' });
    });

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
      const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
      gsap.to(card, {
        rotationY: dx * MAX_TILT,
        rotationX: -dy * MAX_TILT,
        transformPerspective: 900,
        ease: 'power1.out',
        duration: 0.25,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationY: 0, rotationX: 0, z: 0, duration: 0.5, ease: 'power2.out' });
    });
  });
}
