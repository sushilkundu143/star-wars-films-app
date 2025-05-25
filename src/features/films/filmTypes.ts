export type Film = {
  episode_id: number;
  title: string;
  director: string;
  producer: string;
  release_date: string;
  opening_crawl: string;
};

export type FilmsState = {
  items: Film[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  selected: Film | null;
};