export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'E-Commerce' | 'Food & Dining' | 'Fashion & Lifestyle' | 'Tech & Digital' | 'Trading & B2B';
  description: string;
  technologies: string[];
  liveUrl: string;
  posterImage: string;
  videoUrl?: string; // High-definition screen recording MP4
  featured: boolean;
  order: number;
  highlightPoints: string[];
  linkedinVideoUrl?: string;
  linkedinVideoUrl2?: string;
  hasBreakXToggle?: boolean; // For BreakX 1.0 vs 2.0 toggle
  statusBadge?: string;
}

export type CategoryFilter = 'All' | 'E-Commerce' | 'Food & Dining' | 'Fashion & Lifestyle' | 'Tech & Digital' | 'Trading & B2B';
