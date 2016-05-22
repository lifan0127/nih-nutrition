export interface events {
  title: string;
  description: string;
  source: { title: string, url: string };
  created: string,
  updated: string,
  data: event[]
}

export interface event {
  date: string;
  title: string;
  description: string;
  url: string;
  funding?: string[];
  trial?: string[];
  youtube?: string;
  image?: { file: string, caption: string }[];
}