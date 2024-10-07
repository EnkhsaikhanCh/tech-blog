export interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  social_image: string;
  tags: string[];
  tag_list: string[];
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  published_at: string;
  reading_time_minutes: number;
  body_html: string;
  user: User;
}

interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}
