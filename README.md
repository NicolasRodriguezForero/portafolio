# Portafolio — Nicolas Rodriguez Forero

Portafolio personal construido desde cero. Dark/futurista, completamente estático, sin backend ni base de datos.

---

## Stack tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Astro | ^6.1.9 |
| CSS | Tailwind CSS v4 + @tailwindcss/vite | ^4.1.4 |
| Animaciones | GSAP (ScrollTrigger, Draggable, InertiaPlugin) | ^3.12.5 |
| Scroll suave | Lenis | ^1.1.14 |
| Íconos | astro-icon + devicon + lucide | ^1.1.5 |
| Fuentes | Plus Jakarta Sans (headings) + Inter (body) | Google Fonts |
| Imágenes | sharp (optimización) | ^0.33.5 |
| Sitemaps | @astrojs/sitemap | ^3.2.1 |
| Bundler | Vite ^7 (override para compatibilidad con Astro 6) | — |

> **Nota:** Tailwind v4 no usa `tailwind.config.js`. Toda la configuración del tema vive en `src/styles/global.css` dentro del bloque `@theme {}`.

---

## Estructura del proyecto

```
portafolio/
├── public/
│   ├── images/
│   │   ├── logo.png          # Logo del navbar
│   │   ├── profile.webp      # Foto de perfil (sección About)
│   │   ├── og-image.png      # Imagen Open Graph para redes sociales
│   │   └── noise.svg         # Textura de ruido del fondo
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML base: <head>, meta SEO, OG tags, carga de scripts
│   │
│   ├── pages/
│   │   └── index.astro       # Única página: importa y ordena todos los componentes
│   │
│   ├── components/
│   │   ├── Cursor.astro      # Cursor personalizado (dot + ring)
│   │   ├── Navbar.astro      # Barra de navegación fija, menú hamburguesa en mobile
│   │   ├── Hero.astro        # Sección 100vh con nombre, typewriter y CTA
│   │   ├── About.astro       # Foto de perfil + bio + estadísticas + cita
│   │   ├── Education.astro   # Cards de educación formal y diplomados
│   │   ├── TechStack.astro   # Grid de tecnologías agrupadas por categoría
│   │   ├── Projects.astro    # Carrusel horizontal con scroll (pin ScrollTrigger)
│   │   ├── Experience.astro  # Timeline vertical con línea animada
│   │   ├── Skills.astro      # Grid 2x2 de habilidades blandas + idiomas
│   │   ├── Contact.astro     # Cards de contacto + botón mailto
│   │   └── Footer.astro      # Copyright y créditos
│   │
│   ├── scripts/
│   │   ├── lenis.ts          # Inicializa Lenis y lo conecta con ScrollTrigger
│   │   ├── cursor.ts         # Lógica del cursor personalizado (posicionamiento instantáneo)
│   │   ├── typewriter.ts     # Efecto typewriter de roles en el Hero
│   │   ├── animations.ts     # Animaciones de entrada Hero, scroll reveals, timeline
│   │   └── carousel.ts       # Scroll horizontal con pin para la sección de Proyectos
│   │
│   ├── data/
│   │   ├── projects.ts       # Array con los datos de cada proyecto
│   │   ├── experience.ts     # Array con las entradas del timeline de experiencia
│   │   └── techStack.ts      # Array con las categorías y tecnologías del stack
│   │
│   └── styles/
│       ├── global.css        # @theme Tailwind v4, resets, utilidades globales
│       └── animations.css    # @keyframes (blink, pulse-glow, scroll-bounce, etc.)
│
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── README.md
└── DEPLOYMENT.md
```

---

## Cómo se conecta todo

### 1. Punto de entrada

`src/pages/index.astro` es la única ruta. Importa `BaseLayout` y dentro de él inserta todos los componentes en orden. Astro compila esto a HTML estático en tiempo de build.

### 2. BaseLayout

`src/layouts/BaseLayout.astro` contiene:
- Todo el `<head>`: charset, viewport, meta SEO, Open Graph, Twitter Card, preconnect a Google Fonts.
- El `<slot />` donde se inyectan los componentes de `index.astro`.
- Un bloque `<script>` que inicializa todos los scripts en el orden correcto:
  1. `initLenis()` — debe ir primero porque ScrollTrigger depende de él.
  2. `initHeroEntrance()` — animación de entrada del Hero.
  3. `initTypewriter()` — efecto de escritura de roles.
  4. `initCursor()` — cursor personalizado.
  5. `initScrollReveals()` — animaciones `data-reveal` al hacer scroll.
  6. `initTimelineLine()` — dibuja la línea del timeline con scrub.
  7. `initSectionLabels()` — anima las etiquetas de sección.
  8. `initProjectsCarousel()` — pin horizontal de la sección de proyectos.

### 3. Lenis + ScrollTrigger

`src/scripts/lenis.ts` inicializa Lenis (scroll suave) y lo conecta con GSAP ScrollTrigger de dos formas:
- `lenis.on('scroll', ScrollTrigger.update)` — mantiene ScrollTrigger sincronizado con la posición real de Lenis.
- `gsap.ticker.add((time) => lenis.raf(time * 1000))` — usa el ticker de GSAP como el loop de animación de Lenis, evitando dos `requestAnimationFrame` paralelos.
- `gsap.ticker.lagSmoothing(0)` — desactiva el suavizado de lag para que el scroll sea preciso.

### 4. Datos

Todo el contenido dinámico (proyectos, experiencia, tech stack) vive en `src/data/`. Los componentes lo importan directamente en el frontmatter de Astro (entre los `---`). Cambiar un proyecto o agregar experiencia es tan simple como editar el array correspondiente — no hay CMS ni API.

### 5. Carrusel horizontal

`src/scripts/carousel.ts` usa GSAP + ScrollTrigger para pinear la sección `#projects` mientras el usuario scrollea. Calcula la distancia a recorrer con:

```ts
track.scrollWidth - wrapper.clientWidth + paddingLeft + paddingRight
```

Esto asegura que la última card quede visible con el mismo margen que el primero. Una vez que se recorre toda la distancia, el pin se suelta y el scroll vertical continúa normalmente.

### 6. Cursor personalizado

El cursor se posiciona instantáneamente usando `gsap.set()` (sin duración, sin interpolación) en cada evento `mousemove`. El centering (`-50% -50%`) se maneja con `xPercent`/`yPercent` de GSAP para no conflictuar con otras transformaciones.

### 7. Estilos

- `global.css` define las variables de color y fuente en `@theme {}` (Tailwind v4). También contiene utilidades reutilizables: `.gradient-text`, `.gradient-border`, `.section`, `.section-label`, etc.
- `animations.css` contiene solo `@keyframes`.
- Cada componente tiene su propio bloque `<style>` con CSS scoped. Las fuentes se escriben directamente en los componentes como `font-family: 'Inter', system-ui, sans-serif` para no depender de que Tailwind las inyecte.

---

## Para editar contenido

| Qué quieres cambiar | Dónde |
|---|---|
| Proyectos | `src/data/projects.ts` |
| Experiencia laboral/académica | `src/data/experience.ts` |
| Tecnologías del stack | `src/data/techStack.ts` |
| Roles del typewriter | `src/scripts/typewriter.ts` → array `ROLES` |
| Foto de perfil | `public/images/profile.webp` |
| Logo del navbar | `public/images/logo.png` |
| Colores del tema | `src/styles/global.css` → bloque `@theme {}` |
| Bio y texto del About | `src/components/About.astro` |
| Educación | `src/components/Education.astro` → array `education` |
| Habilidades blandas | `src/components/Skills.astro` → arrays `skillCategories` y `languages` |

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (localhost:4321)
npm run dev

# Build de producción
npm run build

# Preview del build local
npm run preview
```

---

## Requisitos

- Node.js >= 22.12.0
- npm >= 10
