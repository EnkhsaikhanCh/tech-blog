import { Article } from "@/types/article";
import { useEffect, useState } from "react";

export const FetchAllArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const articlesPerPage = 9;

  const fetchArticles = async (
    currentPage: number,
    selectedCategory: string,
  ) => {
    setLoading(true);
    setError(null);

    try {
      let url = `https://dev.to/api/articles?page=${currentPage}&per_page=${articlesPerPage}`;
      if (selectedCategory) {
        url += `&tag=${selectedCategory}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();
      setArticles(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error("Error fetching articles:", error.message);
      } else {
        setError("An unknown error occurred");
        console.error("Unknown error fetching articles:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(currentPage, selectedCategory);
  }, [currentPage, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    articlesPerPage,
    articles,
    loading,
    error,
  };
};
