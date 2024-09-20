"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
import { Article } from "@/types/article";
import { BlogCard } from "./_components/BlogCard";
import { docsConfig } from "@/config/docs";

export default function ArticlesPageWithPagination() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const articlesPerPage = 9;

  useEffect(() => {
    const fetchArticles = async () => {
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

    fetchArticles();
  }, [currentPage, selectedCategory]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <motion.section className="mb-4 md:mb-6" {...fadeInUp}>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full bg-white md:w-[200px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="z-50">
              {docsConfig.selectCategoryItem.map((category, index) => (
                <SelectItem key={index} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.section>
        {error ? <p className="text-red-500">Error: {error}</p> : null}

        <AnimatePresence mode="wait">
          <motion.section
            key={selectedCategory + currentPage}
            initial="initial"
            animate="animate"
            exit="initial"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2 font-semibold text-gray-500">
                <LoaderCircle className="animate-spin" />
                <p>Loading articles...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <BlogCard
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    description={article.description}
                    tags={article.tags}
                    path={article.path}
                    published_at={article.published_at}
                    user={article.user}
                    cover_image={""}
                    social_image={""}
                    slug={""}
                    url={""}
                    body_html={""}
                    comments_count={0}
                    public_reactions_count={0}
                    reading_time_minutes={0}
                  />
                ))}
              </div>
            )}
          </motion.section>
        </AnimatePresence>

        <motion.section
          className="mt-12 flex items-center justify-center space-x-2"
          {...fadeInUp}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={articles.length < articlesPerPage}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </motion.section>
      </main>
    </div>
  );
}
