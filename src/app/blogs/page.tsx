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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Article } from "@/types/article";
import { BlogCard } from "./_components/BlogCard";

export default function ArticlesPageWithPagination() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const articlesPerPage = 9;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        let url = `https://dev.to/api/articles?page=${currentPage}&per_page=${articlesPerPage}`;

        if (selectedCategory) {
          url += `&tag=${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage, selectedCategory]);

  const handlePageChange = (newPage: number) => {
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
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="nextjs">Next JS</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="graphql">GraphQL</SelectItem>
              <SelectItem value="apollo">Apollo</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="chatgpt">ChatGPT</SelectItem>
              <SelectItem value="tailwindcss">Tailwind CSS</SelectItem>
              <SelectItem value="jest">Jest</SelectItem>
              <SelectItem value="cypress">Cypress</SelectItem>
              <SelectItem value="threejs">Three JS</SelectItem>
              <SelectItem value="cloudinary">Cloudinary</SelectItem>
            </SelectContent>
          </Select>
        </motion.section>

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
              <p>Loading articles...</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <BlogCard
                    key={article.id}
                    id={article.id}
                    // url={article.url}
                    path={article.path}
                    title={article.title}
                    description={article.description}
                    published_at={article.published_at}
                    username={article.user.username}
                    tag_list={article.tag_list}
                    reading_time_minutes={article.reading_time_minutes}
                    user={{
                      username: "",
                      profile_image: "",
                    }}
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
