const GLOW_SELECTOR = ['.bento-cell', '.contact-card', '.stat'].join(',');

// Marks cards with [data-glow] and feeds the cursor position to the CSS spotlight
export function initCardGlow(): void {
  if (!window.matchMedia('(hover: hover)').matches) return;

  document.querySelectorAll<HTMLElement>(GLOW_SELECTOR).forEach((card) => {
    card.dataset.glow = '';
    // Rect is read once per hover (not on every move) and writes are batched per frame
    let rect: DOMRect | null = null;
    let frame = 0;
    card.addEventListener('pointerenter', () => {
      rect = card.getBoundingClientRect();
    });
    card.addEventListener('pointermove', (e: PointerEvent) => {
      if (!rect || frame) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      frame = requestAnimationFrame(() => {
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
        frame = 0;
      });
    });
  });
}

export function initScrollProgress(): void {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  let frame = 0;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    frame = 0;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!frame) frame = requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}

// Pauses the hero's always-running animations once it scrolls out of view
export function initHeroPause(): void {
  const hero = document.getElementById('hero');
  if (!hero) return;
  new IntersectionObserver(([entry]) => {
    hero.classList.toggle('is-offscreen', !entry.isIntersecting);
  }).observe(hero);
}
