export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  status: 'active' | 'completed' | 'wip';
  featured: boolean;
  accentColor: 'green' | 'cyan';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | 'present';
  description: string;
  highlights: string[];
  tags: string[];
  type: 'work' | 'education' | 'academic' | 'research';
}

export interface TechCategory {
  name: string;
  icon: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  icon: string;
  level: 'primary' | 'secondary';
  invert?: boolean;
}
