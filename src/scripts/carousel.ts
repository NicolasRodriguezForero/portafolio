import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { getLenis } from './lenis';

gsap.registerPlugin(Draggable, InertiaPlugin);

export function initProjectsCarousel(): void {
  const track = document.getElementById('projects-track');
  const wrapper = document.getElementById('projects-wrapper');
  if (!track || !wrapper) return;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile) return;

  const getMaxX = () => -(track.scrollWidth - wrapper.clientWidth + 48);

  const draggables = Draggable.create(track, {
    type: 'x',
    bounds: { minX: getMaxX(), maxX: 0 },
    inertia: true,
    edgeResistance: 0.85,
    cursor: 'grab',
    activeCursor: 'grabbing',
    onDragStart() {
      const lenis = getLenis();
      lenis?.stop();
    },
    onDragEnd() {
      const lenis = getLenis();
      lenis?.start();
    },
  });

  window.addEventListener('resize', () => {
    if (draggables[0]) {
      draggables[0].applyBounds({ minX: getMaxX(), maxX: 0 });
    }
  });

  // 3D tilt on project cards
  const cards = document.querySelectorAll<HTMLElement>('.project-card[data-tilt]');
  const MAX_TILT = 12;

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { z: 20, duration: 0.3, ease: 'power2.out' });
    });

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      gsap.to(card, {
        rotationY: dx * MAX_TILT,
        rotationX: -dy * MAX_TILT,
        transformPerspective: 900,
        ease: 'power1.out',
        duration: 0.25,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        z: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  });
}
