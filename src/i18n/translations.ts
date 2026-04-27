export type Lang = 'es' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // ── META ─────────────────────────────────────────────────────────────────
    'meta.title': 'Nicolas Rodriguez Forero — Desarrollador Full Stack & IA',
    'meta.description':
      'Portfolio de Nicolas Rodriguez Forero, Desarrollador Full Stack e Ingeniero en Ciencias de la Computación e Inteligencia Artificial. Universidad Sergio Arboleda, Bogotá.',

    // ── NAVBAR ───────────────────────────────────────────────────────────────
    'nav.about': 'Sobre mí',
    'nav.education': 'Educación',
    'nav.stack': 'Stack',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'nav.menu.aria': 'Abrir menú',
    'nav.lang.aria': 'Cambiar idioma',

    // ── HERO ─────────────────────────────────────────────────────────────────
    'hero.eyebrow': 'Bogotá, Colombia · Disponible para proyectos y trabajo',
    'hero.desc':
      'Construyo sistemas que piensan — desde backends escalables hasta agentes de IA en producción.',
    'hero.cta.contact': 'Contactar',
    'hero.cta.projects': 'Ver proyectos',
    'hero.scroll': 'Scroll',
    'hero.scroll.aria': 'Hacer scroll hacia abajo',

    // ── TYPEWRITER ───────────────────────────────────────────────────────────
    'typewriter.0': 'Desarrollador Full Stack',
    'typewriter.1': 'Ing. en Ciencias de la Computación e IA',
    'typewriter.2': 'Co-fundador @ Tech Craft Solutions',
    'typewriter.3': 'Construyo sistemas que piensan',

    // ── ABOUT ────────────────────────────────────────────────────────────────
    'about.label': '01 — SOBRE MÍ',
    'about.heading':
      'Desarrollador que<br /><span class="gradient-text">piensa en sistemas.</span>',
    'about.stat.since': 'Inicio en programación',
    'about.stat.projects': 'Proyectos en producción',
    'about.stat.english': 'Inglés',
    'about.bio1':
      'Soy Nicolas, desarrollador Full Stack e ingeniero en Ciencias de la Computación e Inteligencia Artificial cursando Ingeniería en Ciencias de la Computación e Inteligencia Artificial en la Universidad Sergio Arboleda (Bogotá), donde hago parte del Programa de Honores Rodrigo Noguera Laborde. Co-fundé <strong>Tech Craft Solutions</strong>, una empresa de software e IA, donde defino arquitecturas y entrego soluciones end-to-end a clientes reales.',
    'about.bio2':
      'Me especializo en construir productos que integran IA de manera significativa: sistemas RAG en producción, plataformas SaaS multi-tenant, agentes LangGraph, y aplicaciones móviles con Flutter. Disfruto especialmente los proyectos donde el backend, la IA y la experiencia de usuario deben funcionar en perfecta armonía para resolver un problema concreto.',
    'about.bio3':
      'Creo que el criterio técnico no se mide solo en líneas de código, sino en las decisiones de arquitectura que hacen que un sistema sea mantenible, escalable y confiable. Aprendo continuamente, me adapto rápido, y siempre entrego con calidad.',
    'about.quote':
      '<span class="quote-mark gradient-text">"</span>No solo escribo código — diseño soluciones que duran.<span class="quote-mark gradient-text">"</span>',
    'about.badge.university': 'Universidad Sergio Arboleda',
    'about.badge.honors': 'Programa de Honores 2025-II · 2026-I',
    'about.badge.location': 'Bogotá, Colombia',

    // ── EDUCATION ────────────────────────────────────────────────────────────
    'edu.label': '02 — EDUCACIÓN',
    'edu.heading': 'Donde aprendí a<br /><span class="gradient-text">pensar en grande.</span>',
    'edu.pregrado.degree': 'Ingeniería en Ciencias de la Computación e Inteligencia Artificial',
    'edu.pregrado.type': 'Pregrado',
    'edu.pregrado.period': '2022 — Presente',
    'edu.pregrado.h0': 'Programa de Honores "Rodrigo Noguera Laborde" — 2025-II y 2026-I',
    'edu.pregrado.h1': 'Enfoque en sistemas de IA, arquitecturas de software y ciencias de la computación',
    'edu.pregrado.h2': 'Proyectos académicos con integración de aprendizaje de máquina y desarrollo de software',
    'edu.diplomado.degree': 'Diplomado en Analítica de Datos y Big Data',
    'edu.diplomado.type': 'Diplomado ejecutivo',
    'edu.diplomado.period': 'Abr 2026 — Presente',
    'edu.diplomado.h0': 'Análisis descriptivo, estadístico y predictivo de datos',
    'edu.diplomado.h1': 'Procesamiento de datos con Python y R',
    'edu.diplomado.h2': 'Fundamentos de Big Data y arquitecturas de datos a escala',

    // ── TECH STACK ───────────────────────────────────────────────────────────
    'stack.label': '03 — STACK',
    'stack.heading': 'Herramientas que<br /><span class="gradient-text">domino.</span>',
    'stack.cat.lenguajes': 'Lenguajes',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.backend': 'Backend',
    'stack.cat.ia': 'IA / Datos',
    'stack.cat.databases': 'Bases de Datos',
    'stack.cat.cloud': 'Cloud / DevOps',

    // ── PROJECTS ─────────────────────────────────────────────────────────────
    'projects.label': '04 — PROYECTOS',
    'projects.heading': 'Lo que he<br /><span class="gradient-text">construido.</span>',
    'projects.hint': 'Desplázate para explorar',
    'project.agente-jurisprudencia.title': 'Agente de Jurisprudencia Costera',
    'project.agente-jurisprudencia.description':
      'Sistema RAG en producción para consulta de jurisprudencia colombiana asistida por IA. Investigación legal a escala conversacional.',
    'project.orbitengine.title': 'OrbitEngine — SaaS ERP',
    'project.orbitengine.description':
      'Plataforma SaaS multi-tenant para gestión de inventario, clientes y ventas en PYMEs. Desplegado en producción en Railway.',
    'project.neurochallenge.title': 'NeuroChallenge',
    'project.neurochallenge.description':
      'Plataforma educativa full-stack para entrenamiento cognitivo mediante desafíos interactivos. Desarrollado en Software Como Innovación.',
    'project.gizmo-tictactoe.title': 'Tic-Tac-Toe — Gizmo Dev Studio',
    'project.gizmo-tictactoe.description':
      'Juego móvil cross-platform desarrollado con Flutter. Primer producto publicado de Gizmo Dev Studio.',
    'project.tech-craft.title': 'Tech Craft Solutions',
    'project.tech-craft.description':
      'Empresa de desarrollo de software e inteligencia artificial co-fundada en 2025. Arquitectura, liderazgo técnico y entrega de soluciones a clientes.',

    // ── EXPERIENCE ───────────────────────────────────────────────────────────
    'exp.label': '05 — EXPERIENCIA',
    'exp.heading': 'El camino<br /><span class="gradient-text">recorrido.</span>',
    'exp.type.work': 'Trabajo',
    'exp.type.academic': 'Académico',
    'exp.type.education': 'Educación',
    'exp.type.research': 'Investigación',
    'exp.monitor-academico.role': 'Monitor Académico',
    'exp.monitor-academico.period': 'Abr 2026 — Presente',
    'exp.monitor-academico.description':
      'Monitor del Diplomado en Analítica de Datos y Big Data — programa ejecutivo que abarca análisis descriptivo, estadístico y predictivo, Python, R y fundamentos de Big Data.',
    'exp.monitor-academico.h0': 'Coordinación logística y académica de cada sesión del diplomado',
    'exp.monitor-academico.h1': 'Resolución de dudas e inquietudes de los participantes ejecutivos',
    'exp.monitor-academico.h2': 'Administración de horarios, asistencia y distribución de material del curso',
    'exp.jurisprudencia.role': 'Desarrollador Full Stack & Agentes de IA',
    'exp.jurisprudencia.period': 'Mar 2026 — Presente',
    'exp.jurisprudencia.description':
      'Desarrollo de sistema RAG en producción para consulta de jurisprudencia colombiana costera asistida por IA.',
    'exp.jurisprudencia.h0': 'Pipeline de ingesta y procesamiento de PDFs legales, vectorización y embeddings',
    'exp.jurisprudencia.h1': 'Orquestación de agentes LangGraph con ChromaDB + Ollama para RAG local',
    'exp.jurisprudencia.h2': 'Integración de autenticación Firebase, persistencia de chat y sistema de feedback',
    'exp.tech-craft.role': 'Co-fundador & CEO',
    'exp.tech-craft.period': 'Jun 2025 — Presente',
    'exp.tech-craft.description':
      'Co-fundé y lidero técnicamente una empresa de desarrollo de software e inteligencia artificial, definiendo arquitecturas y entregando soluciones end-to-end a clientes.',
    'exp.tech-craft.h0': 'Definición de arquitecturas y decisiones tecnológicas alineadas a objetivos de negocio',
    'exp.tech-craft.h1': 'Dirección del desarrollo full-stack y entrega de soluciones end-to-end',
    'exp.tech-craft.h2': 'Integración de IA en productos para automatización de procesos de clientes',
    'exp.gizmo.role': 'Diseñador & Desarrollador',
    'exp.gizmo.period': 'Dic 2025 — Presente',
    'exp.gizmo.description':
      'Estudio de desarrollo móvil fundado con foco en usabilidad, rendimiento y calidad. Primer producto publicado en producción.',
    'exp.gizmo.h0': 'Desarrollo de aplicación Tic-Tac-Toe en Flutter como primer producto del estudio',
    'exp.gizmo.h1': 'Diseño, programación y testing de soluciones end-to-end',
    'exp.orbitengine.role': 'Proyecto de Grado — Desarrollador Full Stack',
    'exp.orbitengine.period': 'Nov 2025 — Abr 2026',
    'exp.orbitengine.description':
      'Trabajo de grado: desarrollo y despliegue de plataforma SaaS multi-tenant para gestión de inventario, clientes y ventas en PYMEs.',
    'exp.orbitengine.h0': 'Arquitectura multi-tenant con esquema PostgreSQL aislado por tenant',
    'exp.orbitengine.h1': 'Dashboard de métricas comerciales y alertas en tiempo real',
    'exp.orbitengine.h2': 'Liderazgo end-to-end: arquitectura, desarrollo y mantenimiento en producción',
    'exp.software-innovacion.role': 'Semillero de Investigación — Desarrollador e Investigador',
    'exp.software-innovacion.period': 'Feb 2025 — Presente',
    'exp.software-innovacion.description':
      'Semillero académico de investigación aplicada: formulación y desarrollo de proyectos que integran frontend, backend y bases de datos en soluciones full-stack.',
    'exp.software-innovacion.h0': 'Construcción de NeuroChallenge, aplicación de entrenamiento cognitivo',
    'exp.software-innovacion.h1': 'Participación en formulación y desarrollo desde investigación hasta implementación',

    // ── SKILLS ───────────────────────────────────────────────────────────────
    'skills.label': '06 — HABILIDADES',
    'skills.heading': 'Más allá del<br /><span class="gradient-text">código.</span>',
    'skills.cat.liderazgo': 'Liderazgo & Gestión',
    'skills.cat.comunicacion': 'Comunicación',
    'skills.cat.pensamiento': 'Pensamiento',
    'skills.cat.actitud': 'Actitud',
    'skills.liderazgo.0': 'Liderazgo técnico',
    'skills.liderazgo.1': 'Gestión de proyectos',
    'skills.liderazgo.2': 'Emprendimiento',
    'skills.liderazgo.3': 'Toma de decisiones técnicas',
    'skills.comunicacion.0': 'Comunicación técnica',
    'skills.comunicacion.1': 'Trabajo en equipo',
    'skills.comunicacion.2': 'Atención al cliente',
    'skills.comunicacion.3': 'Documentación de proyectos',
    'skills.pensamiento.0': 'Pensamiento analítico',
    'skills.pensamiento.1': 'Resolución de problemas',
    'skills.pensamiento.2': 'Investigación aplicada',
    'skills.pensamiento.3': 'Diseño de arquitecturas',
    'skills.actitud.0': 'Proactividad',
    'skills.actitud.1': 'Aprendizaje continuo',
    'skills.actitud.2': 'Adaptación a tecnologías',
    'skills.actitud.3': 'Orientación a la calidad',
    'skills.languages.title': 'Idiomas',
    'skills.lang.es.level': 'Nativo',
    'skills.lang.en.level': 'B2 — Avanzado',
    'skills.lang.fr.level': 'A1 — Básico',

    // ── CONTACT ──────────────────────────────────────────────────────────────
    'contact.label': '07 — CONTACTO',
    'contact.heading':
      '¿Quieres<br />trabajar<br /><span class="gradient-text">conmigo?</span>',
    'contact.sub':
      'Estoy disponible para proyectos freelance, posiciones full-time y colaboraciones interesantes. Respondo en menos de 24 horas.',
    'contact.cta': 'Escríbeme ahora por correo',
    'contact.copy.aria': 'Copiar email al portapapeles',
    'contact.github.aria': 'Perfil de GitHub de Nicolas Rodriguez',
    'contact.linkedin.aria': 'Perfil de LinkedIn de Nicolas Rodriguez',

    // ── FOOTER ───────────────────────────────────────────────────────────────
    'footer.built': 'Hecho con <span class="gradient-text">Astro + GSAP</span>',
  },

  en: {
    // ── META ─────────────────────────────────────────────────────────────────
    'meta.title': 'Nicolas Rodriguez Forero — Full Stack Developer & AI',
    'meta.description':
      'Portfolio of Nicolas Rodriguez Forero, Full Stack Developer and Computer Science & AI Engineer. Universidad Sergio Arboleda, Bogotá.',

    // ── NAVBAR ───────────────────────────────────────────────────────────────
    'nav.about': 'About me',
    'nav.education': 'Education',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.menu.aria': 'Open menu',
    'nav.lang.aria': 'Switch language',

    // ── HERO ─────────────────────────────────────────────────────────────────
    'hero.eyebrow': 'Bogotá, Colombia · Available for projects and work',
    'hero.desc':
      'I build systems that think — from scalable backends to AI agents in production.',
    'hero.cta.contact': 'Contact',
    'hero.cta.projects': 'View projects',
    'hero.scroll': 'Scroll',
    'hero.scroll.aria': 'Scroll down',

    // ── TYPEWRITER ───────────────────────────────────────────────────────────
    'typewriter.0': 'Full Stack Developer',
    'typewriter.1': 'Computer Science & AI Engineer',
    'typewriter.2': 'Co-founder @ Tech Craft Solutions',
    'typewriter.3': 'I build systems that think',

    // ── ABOUT ────────────────────────────────────────────────────────────────
    'about.label': '01 — ABOUT ME',
    'about.heading':
      'Developer who<br /><span class="gradient-text">thinks in systems.</span>',
    'about.stat.since': 'Start in programming',
    'about.stat.projects': 'Production projects',
    'about.stat.english': 'English',
    'about.bio1':
      "I'm Nicolas, a Full Stack developer and Computer Science & AI engineer studying at Universidad Sergio Arboleda (Bogotá), where I'm part of the Rodrigo Noguera Laborde Honors Program. I co-founded <strong>Tech Craft Solutions</strong>, a software & AI company, where I define architectures and deliver end-to-end solutions to real clients.",
    'about.bio2':
      'I specialize in building products that integrate AI meaningfully: RAG systems in production, multi-tenant SaaS platforms, LangGraph agents, and Flutter mobile apps. I especially enjoy projects where the backend, AI, and user experience must work in perfect harmony to solve a concrete problem.',
    'about.bio3':
      'I believe technical judgment is measured not just in lines of code, but in the architectural decisions that make a system maintainable, scalable, and reliable. I learn continuously, adapt fast, and always deliver with quality.',
    'about.quote':
      '<span class="quote-mark gradient-text">"</span>I don\'t just write code — I design solutions that last.<span class="quote-mark gradient-text">"</span>',
    'about.badge.university': 'Universidad Sergio Arboleda',
    'about.badge.honors': 'Honors Program 2025-II · 2026-I',
    'about.badge.location': 'Bogotá, Colombia',

    // ── EDUCATION ────────────────────────────────────────────────────────────
    'edu.label': '02 — EDUCATION',
    'edu.heading': 'Where I learned to<br /><span class="gradient-text">think big.</span>',
    'edu.pregrado.degree': 'Computer Science & Artificial Intelligence Engineering',
    'edu.pregrado.type': 'Undergraduate',
    'edu.pregrado.period': '2022 — Present',
    'edu.pregrado.h0': 'Rodrigo Noguera Laborde Honors Program — 2025-II and 2026-I',
    'edu.pregrado.h1': 'Focus on AI systems, software architectures, and computer science',
    'edu.pregrado.h2': 'Academic projects integrating machine learning and software development',
    'edu.diplomado.degree': 'Diploma in Data Analytics and Big Data',
    'edu.diplomado.type': 'Executive Diploma',
    'edu.diplomado.period': 'Apr 2026 — Present',
    'edu.diplomado.h0': 'Descriptive, statistical and predictive data analysis',
    'edu.diplomado.h1': 'Data processing with Python and R',
    'edu.diplomado.h2': 'Big Data fundamentals and large-scale data architectures',

    // ── TECH STACK ───────────────────────────────────────────────────────────
    'stack.label': '03 — STACK',
    'stack.heading': 'Tools I<br /><span class="gradient-text">master.</span>',
    'stack.cat.lenguajes': 'Languages',
    'stack.cat.frontend': 'Frontend',
    'stack.cat.backend': 'Backend',
    'stack.cat.ia': 'AI / Data',
    'stack.cat.databases': 'Databases',
    'stack.cat.cloud': 'Cloud / DevOps',

    // ── PROJECTS ─────────────────────────────────────────────────────────────
    'projects.label': '04 — PROJECTS',
    'projects.heading': "What I've<br /><span class=\"gradient-text\">built.</span>",
    'projects.hint': 'Scroll to explore',
    'project.agente-jurisprudencia.title': 'Coastal Jurisprudence Agent',
    'project.agente-jurisprudencia.description':
      'RAG system in production for AI-assisted Colombian jurisprudence research. Legal research at conversational scale.',
    'project.orbitengine.title': 'OrbitEngine — SaaS ERP',
    'project.orbitengine.description':
      'Multi-tenant SaaS platform for inventory, client and sales management for SMBs. Deployed in production on Railway.',
    'project.neurochallenge.title': 'NeuroChallenge',
    'project.neurochallenge.description':
      'Full-stack educational platform for cognitive training through interactive challenges. Developed at Software Como Innovación.',
    'project.gizmo-tictactoe.title': 'Tic-Tac-Toe — Gizmo Dev Studio',
    'project.gizmo-tictactoe.description':
      'Cross-platform mobile game developed with Flutter. First published product of Gizmo Dev Studio.',
    'project.tech-craft.title': 'Tech Craft Solutions',
    'project.tech-craft.description':
      'Software and AI development company co-founded in 2025. Architecture, technical leadership and solution delivery for clients.',

    // ── EXPERIENCE ───────────────────────────────────────────────────────────
    'exp.label': '05 — EXPERIENCE',
    'exp.heading': 'The road<br /><span class="gradient-text">traveled.</span>',
    'exp.type.work': 'Work',
    'exp.type.academic': 'Academic',
    'exp.type.education': 'Education',
    'exp.type.research': 'Research',
    'exp.monitor-academico.role': 'Academic Monitor',
    'exp.monitor-academico.period': 'Apr 2026 — Present',
    'exp.monitor-academico.description':
      'Monitor for the Data Analytics & Big Data Diploma — executive program covering descriptive, statistical and predictive analysis, Python, R, and Big Data fundamentals.',
    'exp.monitor-academico.h0': 'Logistical and academic coordination of each diploma session',
    'exp.monitor-academico.h1': 'Resolving questions and concerns from executive participants',
    'exp.monitor-academico.h2': 'Managing schedules, attendance, and course material distribution',
    'exp.jurisprudencia.role': 'Full Stack Developer & AI Agents',
    'exp.jurisprudencia.period': 'Mar 2026 — Present',
    'exp.jurisprudencia.description':
      'Development of a production RAG system for AI-assisted coastal Colombian jurisprudence research.',
    'exp.jurisprudencia.h0': 'Pipeline for legal PDF ingestion, processing, vectorization and embeddings',
    'exp.jurisprudencia.h1': 'LangGraph agent orchestration with ChromaDB + Ollama for local RAG',
    'exp.jurisprudencia.h2': 'Firebase authentication integration, chat persistence and feedback system',
    'exp.tech-craft.role': 'Co-founder & CEO',
    'exp.tech-craft.period': 'Jun 2025 — Present',
    'exp.tech-craft.description':
      'Co-founded and technically lead a software & AI development company, defining architectures and delivering end-to-end solutions to clients.',
    'exp.tech-craft.h0': 'Architecture definition and technology decisions aligned to business objectives',
    'exp.tech-craft.h1': 'Full-stack development leadership and end-to-end solution delivery',
    'exp.tech-craft.h2': 'AI integration in products for client process automation',
    'exp.gizmo.role': 'Designer & Developer',
    'exp.gizmo.period': 'Dec 2025 — Present',
    'exp.gizmo.description':
      'Mobile development studio founded with a focus on usability, performance and quality. First product published in production.',
    'exp.gizmo.h0': "Development of Flutter Tic-Tac-Toe app as the studio's first product",
    'exp.gizmo.h1': 'Design, programming and testing of end-to-end solutions',
    'exp.orbitengine.role': 'Degree Project — Full Stack Developer',
    'exp.orbitengine.period': 'Nov 2025 — Apr 2026',
    'exp.orbitengine.description':
      'Thesis project: development and deployment of a multi-tenant SaaS platform for inventory, client and sales management for SMBs.',
    'exp.orbitengine.h0': 'Multi-tenant architecture with isolated PostgreSQL schema per tenant',
    'exp.orbitengine.h1': 'Business metrics dashboard and real-time alerts',
    'exp.orbitengine.h2': 'End-to-end leadership: architecture, development and production maintenance',
    'exp.software-innovacion.role': 'Research Seedbed — Developer & Researcher',
    'exp.software-innovacion.period': 'Feb 2025 — Present',
    'exp.software-innovacion.description':
      'Applied research seedbed: formulation and development of projects integrating frontend, backend and databases into full-stack solutions.',
    'exp.software-innovacion.h0': 'Built NeuroChallenge, a cognitive training application',
    'exp.software-innovacion.h1': 'Participation in formulation and development from research to implementation',

    // ── SKILLS ───────────────────────────────────────────────────────────────
    'skills.label': '06 — SKILLS',
    'skills.heading': 'Beyond the<br /><span class="gradient-text">code.</span>',
    'skills.cat.liderazgo': 'Leadership & Management',
    'skills.cat.comunicacion': 'Communication',
    'skills.cat.pensamiento': 'Thinking',
    'skills.cat.actitud': 'Mindset',
    'skills.liderazgo.0': 'Technical leadership',
    'skills.liderazgo.1': 'Project management',
    'skills.liderazgo.2': 'Entrepreneurship',
    'skills.liderazgo.3': 'Technical decision-making',
    'skills.comunicacion.0': 'Technical communication',
    'skills.comunicacion.1': 'Teamwork',
    'skills.comunicacion.2': 'Client support',
    'skills.comunicacion.3': 'Project documentation',
    'skills.pensamiento.0': 'Analytical thinking',
    'skills.pensamiento.1': 'Problem solving',
    'skills.pensamiento.2': 'Applied research',
    'skills.pensamiento.3': 'Architecture design',
    'skills.actitud.0': 'Proactivity',
    'skills.actitud.1': 'Continuous learning',
    'skills.actitud.2': 'Technology adaptation',
    'skills.actitud.3': 'Quality orientation',
    'skills.languages.title': 'Languages',
    'skills.lang.es.level': 'Native',
    'skills.lang.en.level': 'B2 — Advanced',
    'skills.lang.fr.level': 'A1 — Basic',

    // ── CONTACT ──────────────────────────────────────────────────────────────
    'contact.label': '07 — CONTACT',
    'contact.heading':
      'Want to<br />work<br /><span class="gradient-text">with me?</span>',
    'contact.sub':
      "I'm available for freelance projects, full-time positions and interesting collaborations. I respond in under 24 hours.",
    'contact.cta': 'Write me an email now',
    'contact.copy.aria': 'Copy email to clipboard',
    'contact.github.aria': "Nicolas Rodriguez's GitHub Profile",
    'contact.linkedin.aria': "Nicolas Rodriguez's LinkedIn Profile",

    // ── FOOTER ───────────────────────────────────────────────────────────────
    'footer.built': 'Built with <span class="gradient-text">Astro + GSAP</span>',
  },
};
