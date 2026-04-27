const DEFAULT_ROLES = [
  'Desarrollador Full Stack',
  'Ing. en Ciencias de la Computación e IA',
  'Co-fundador @ Tech Craft Solutions',
  'Construyo sistemas que piensan',
];

export function initTypewriter(elementId: string): void {
  const el = document.getElementById(elementId);
  if (!el) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Use roles pre-set by i18n.ts (or fall back to default Spanish roles)
  let roles: string[] =
    ((window as Record<string, unknown>).__typewriterRoles as string[] | undefined) ??
    DEFAULT_ROLES;

  if (prefersReduced) {
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const TYPING_SPEED = 65;
  const DELETING_SPEED = 32;
  const PAUSE_AFTER_TYPE = 2400;
  const PAUSE_AFTER_DELETE = 350;

  function tick() {
    const current = roles[roleIndex];

    if (isDeleting) {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeoutId = setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
      timeoutId = setTimeout(tick, DELETING_SPEED);
    } else {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        timeoutId = setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      timeoutId = setTimeout(tick, TYPING_SPEED);
    }
  }

  // Expose restart function for language switching
  (window as Record<string, unknown>).__restartTypewriter = (newRoles: string[]) => {
    roles = newRoles.length ? newRoles : DEFAULT_ROLES;
    if (timeoutId !== null) clearTimeout(timeoutId);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    el.textContent = '';
    timeoutId = setTimeout(tick, 300);
  };

  tick();
}
