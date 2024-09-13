export interface Article {
  id: number;
  title: string;
  description: string;
  url?: string;
  tag_list: string[] | null;
  user: {
    username: string;
    profile_image: string;
  };
  cover_image?: string;
  published_at: string;
  username: string;
  reading_time_minutes: string;
}
