import { translations, type Lang } from '../i18n/translations';

const STORAGE_KEY = 'portfolio-lang';

// Each language is shown by its own name in the dropdown
const LANG_NAMES: Record<Lang, string> = { es: 'Español', en: 'English' };

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

  // href replacements (language-specific files such as the CV)
  document.querySelectorAll<HTMLAnchorElement>('[data-i18n-href]').forEach((el) => {
    const key = el.dataset.i18nHref!;
    if (t[key] !== undefined) el.href = t[key];
  });

  // aria-label replacements
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria!;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // Language dropdown: trigger shows the current language, options mark the active one
  document.querySelectorAll<HTMLElement>('.lang-current').forEach((el) => {
    el.textContent = LANG_NAMES[lang];
  });
  document.querySelectorAll<HTMLButtonElement>('.lang-option').forEach((opt) => {
    const isActive = opt.dataset.lang === lang;
    opt.classList.toggle('active', isActive);
    opt.setAttribute('aria-selected', String(isActive));
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

function selectLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
  applyTranslations(lang);
}

function setupLangSelect(): void {
  const selects = document.querySelectorAll<HTMLElement>('.lang-select');

  const close = (select: Element) => {
    select.classList.remove('open');
    select.querySelector('.lang-trigger')?.setAttribute('aria-expanded', 'false');
  };

  selects.forEach((select) => {
    const trigger = select.querySelector<HTMLButtonElement>('.lang-trigger');
    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = select.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(open));
    });
  });

  // Options live both in the dropdown and in the mobile menu
  document.querySelectorAll<HTMLButtonElement>('.lang-option').forEach((opt) => {
    opt.addEventListener('click', () => {
      const lang = opt.dataset.lang;
      if (lang === 'es' || lang === 'en') selectLang(lang);
      selects.forEach(close);
    });
  });

  document.addEventListener('click', (e) => {
    selects.forEach((select) => {
      if (!select.contains(e.target as Node)) close(select);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') selects.forEach(close);
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

  // Wire the language dropdown
  setupLangSelect();
}

// Public API - usable from inline scripts or other modules
(window as Record<string, unknown>).setLang = selectLang;
