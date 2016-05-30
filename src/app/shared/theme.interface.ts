export interface themes {
  title: string;
  description: string;
  source: { title: string, url: string };
  created: string,
  updated: string,
  data: theme[]
}

export interface theme {
    id: string;
    question: string;
    topics: topic[]
}

export interface topic {
    id: string;
    topic: string;
}