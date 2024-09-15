export interface Article {
  id: number;
  title: string;
  description: string;
  url?: string;
  tag_list: string[] | null;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
  cover_image?: string;
  published_at: string;
  username: string;
  reading_time_minutes: string;
  path: string;
  body_html?: string;
  readable_publish_date?: string;
  comments_count?: string;
  public_reactions_count?: string;
  tags: string[];
}
