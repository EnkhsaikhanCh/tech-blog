import { Article } from "@/types/article";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useFetchOneArticle = () => {
  const { username, slug } = useParams<{ username: string; slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArticle = async (
    username: string,
    slug: string,
  ): Promise<Article | null> => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dev.to/api/articles/${username}/${slug}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch the article");
      }
      const data: Article = await response.json();
      return data;
    } catch (error) {
      setError("Failed to load the article");
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username && slug) {
      fetchArticle(username, slug).then((data) => {
        if (data) {
          setArticle(data);
        }
      });
    }
  }, [username, slug]);

  return { article, loading, error };
};
