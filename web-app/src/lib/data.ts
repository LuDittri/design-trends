

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  date: string;

  tags: string[];
  content: {
    intro: string;
    whyItMatters: string;
    paragraphs: string[];
  };
  featured?: boolean;
  url?: string;
  week_number?: number;
  fetched_at?: string;
  num_comments?: number;
  score?: number;
}

export const CATEGORIES = [
  { id: 'ui-ux', label: 'UI/UX', description: 'Interface patterns and user behaviors' },
  { id: 'visual', label: 'Design Gráfico', description: 'Aesthetics, typography, and color' },
  { id: 'figma', label: 'Figma', description: 'Workflows and technical mastery' },
  { id: 'industrial', label: 'Design Industrial', description: '3D modeling, prototyping, and manufacturing' },
  { id: 'culture', label: 'Cultura', description: 'Design in the broader context' },
];
