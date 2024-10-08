import { Article } from "@/types/article";
import { useEffect, useState } from "react";

export const useFetchRecentArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const articlesCount = 3;

  const fetchArticles = async (articlesCount: number) => {
    setLoading(true);
    setError(null);
    try {
      // eslint-disable-next-line prefer-const
      let url = `https://dev.to/api/articles?&per_page=${articlesCount}`;

      const response = await fetch(url);

      const data = await response.json();

      setArticles(data);
    } catch (error) {
      setError("Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(articlesCount);
  }, [articlesCount]);

  return { articles, loading, error };
};
