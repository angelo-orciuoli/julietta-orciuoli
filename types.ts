export interface Article {
  id: string;
  title: string;
  date: string;
  image?: string;
  link?: string;
}

export interface PlaylistItem {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  platform: 'Spotify' | 'Apple Music';
  mood: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  width?: number; // for grid logic if needed
}
