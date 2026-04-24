const ROLES = [
  'Desarrollador Full Stack',
  'Ing. en Ciencias de la Computación e IA',
  'Co-fundador @ Tech Craft Solutions',
  'Construyo sistemas que piensan',
];

export function initTypewriter(elementId: string): void {
  const el = document.getElementById(elementId);
  if (!el) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    el.textContent = ROLES[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const TYPING_SPEED = 65;
  const DELETING_SPEED = 32;
  const PAUSE_AFTER_TYPE = 2400;
  const PAUSE_AFTER_DELETE = 350;

  function tick() {
    const current = ROLES[roleIndex];

    if (isDeleting) {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
      setTimeout(tick, DELETING_SPEED);
    } else {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPING_SPEED);
    }
  }

  tick();
}
