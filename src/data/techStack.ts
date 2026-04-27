import type { TechCategory } from '../types/index';

export const techStack: TechCategory[] = [
  {
    name: 'Lenguajes',
    icon: 'lucide:code-2',
    items: [
      { name: 'Python',      icon: 'devicon:python',      level: 'primary' },
      { name: 'TypeScript',  icon: 'devicon:typescript',  level: 'primary' },
      { name: 'JavaScript',  icon: 'devicon:javascript',  level: 'primary' },
      { name: 'SQL',         icon: 'devicon:postgresql',  level: 'primary' },
      { name: 'Java',        icon: 'devicon:java',        level: 'secondary' },
      { name: 'C#',          icon: 'devicon:csharp',      level: 'secondary' },
      { name: 'Go',          icon: 'devicon:go',          level: 'secondary' },
      { name: 'Dart',        icon: 'devicon:dart',        level: 'secondary' },
    ],
  },
  {
    name: 'Frontend',
    icon: 'lucide:monitor',
    items: [
      { name: 'React',        icon: 'devicon:react',          level: 'primary' },
      { name: 'Next.js',      icon: 'devicon:nextjs',         level: 'primary' },
      { name: 'Flutter',      icon: 'devicon:flutter',        level: 'primary' },
      { name: 'Tailwind CSS', icon: 'devicon:tailwindcss',    level: 'primary' },
      { name: 'Astro',        icon: 'devicon:astro',          level: 'secondary' },
    ],
  },
  {
    name: 'Backend',
    icon: 'lucide:server',
    items: [
      { name: 'FastAPI',  icon: 'devicon:fastapi',      level: 'primary' },
      { name: 'Node.js',  icon: 'devicon:nodejs',       level: 'primary' },
      { name: 'Django',   icon: 'devicon:djangorest',   level: 'secondary' },
      { name: 'Flask',    icon: 'devicon:flask',        level: 'secondary', invert: true },
      { name: '.NET',     icon: 'devicon:dotnetcore',   level: 'secondary' },
      { name: 'Express',  icon: 'devicon:express',      level: 'secondary', invert: true },
    ],
  },
  {
    name: 'IA / Datos',
    icon: 'lucide:brain',
    items: [
      { name: 'LangGraph',   icon: 'lucide:git-branch', level: 'primary' },
      { name: 'RAG Systems', icon: 'lucide:search',     level: 'primary' },
      { name: 'ChromaDB',    icon: 'lucide:database',   level: 'primary' },
      { name: 'Ollama',      icon: 'lucide:cpu',        level: 'secondary' },
      { name: 'Pandas',      icon: 'devicon:pandas',    level: 'secondary' },
      { name: 'NumPy',       icon: 'devicon:numpy',     level: 'secondary' },
    ],
  },
  {
    name: 'Bases de Datos',
    icon: 'lucide:database',
    items: [
      { name: 'PostgreSQL', icon: 'devicon:postgresql', level: 'primary' },
      { name: 'MongoDB',    icon: 'devicon:mongodb',    level: 'secondary' },
      { name: 'Firebase',   icon: 'devicon:firebase',   level: 'secondary' },
      { name: 'MySQL',      icon: 'devicon:mysql',      level: 'secondary' },
      { name: 'Oracle SQL', icon: 'devicon:oracle',     level: 'secondary' },
    ],
  },
  {
    name: 'Cloud / DevOps',
    icon: 'lucide:cloud',
    items: [
      { name: 'Docker',  icon: 'devicon:docker',                level: 'primary' },
      { name: 'Railway', icon: 'lucide:train-front',            level: 'primary' },
      { name: 'AWS',     icon: 'devicon:amazonwebservices',     level: 'secondary' },
      { name: 'GCP',     icon: 'devicon:googlecloud',           level: 'secondary' },
    ],
  },
];
