import { translations, type Lang } from '../i18n/translations';

const STORAGE_KEY = 'portfolio-lang';

function detectLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    // localStorage unavailable
  }
  const browser = (navigator.language ?? '').toLowerCase();
  return browser.startsWith('en') ? 'en' : 'es';
}

function applyTranslations(lang: Lang): void {
  const t = translations[lang];

  // html[lang] attribute
  document.documentElement.lang = lang;

  // <title>
  if (t['meta.title']) document.title = t['meta.title'];

  // <meta name="description">
  const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (metaDesc && t['meta.description']) metaDesc.content = t['meta.description'];

  // textContent replacements
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n!;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML replacements (for elements with markup: spans, <br>, <strong>)
  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml!;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // aria-label replacements
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria!;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // Update lang toggle button labels
  document.querySelectorAll<HTMLElement>('.lang-label').forEach((el) => {
    el.textContent = lang === 'es' ? 'EN' : 'ES';
  });

  // Restart typewriter with new language strings
  const roles = (
    [t['typewriter.0'], t['typewriter.1'], t['typewriter.2'], t['typewriter.3']] as string[]
  ).filter(Boolean);

  const restart = (window as Record<string, unknown>).__restartTypewriter as
    | ((r: string[]) => void)
    | undefined;
  restart?.(roles);
}

function setupToggleButtons(): void {
  document.querySelectorAll<HTMLButtonElement>('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = detectLang();
      const next: Lang = current === 'es' ? 'en' : 'es';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      applyTranslations(next);
    });
  });
}

export function initI18n(): void {
  const lang = detectLang();

  // Store initial roles so typewriter.ts can pick them up before it starts
  const t = translations[lang];
  (window as Record<string, unknown>).__typewriterRoles = [
    t['typewriter.0'],
    t['typewriter.1'],
    t['typewriter.2'],
    t['typewriter.3'],
  ].filter(Boolean);

  // Patch DOM to the detected language
  applyTranslations(lang);

  // Wire toggle buttons
  setupToggleButtons();
}

// Public API — usable from inline scripts or other modules
(window as Record<string, unknown>).setLang = (lang: Lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
  applyTranslations(lang);
};
