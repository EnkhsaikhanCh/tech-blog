"use client";

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
import { BlogCard } from "../../components/BlogCard";
import { docsConfig } from "@/config/docs";
import { FetchAllArticles } from "@/api/FetchAllArticles";
import { SpinnerLoader } from "@/components/SpinnerLoader";

export default function ArticlesPageWithPagination() {
  const {
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    articlesPerPage,
    articles,
    loading,
    error,
  } = FetchAllArticles();

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const NextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const BackPage = () => {
    handlePageChange(currentPage - 1);
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
              <SpinnerLoader label="Loading articles..." />
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <BlogCard key={article.id} article={article} />
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
            onClick={BackPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={NextPage}
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
