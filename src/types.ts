export type Page = 'dashboard' | 'curriculum' | 'archive' | 'trends' | 'members';

export interface Module {
  id: string;
  title: string;
  status: 'completed' | 'ongoing' | 'locked';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  author: string;
  authorAbbr: string;
  timeAgo: string;
  imageUrl: string;
}

export interface Presentation {
  id: string;
  title: string;
  presenter: string;
  date: string;
  type: 'pdf' | 'slides';
}

export interface Event {
  id: string;
  title: string;
  time: string;
  location: string;
  month: string;
  day: string;
}
