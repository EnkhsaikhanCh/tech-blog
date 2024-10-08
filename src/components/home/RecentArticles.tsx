"use client";

import { BlogCard } from "@/components/BlogCard";
import { LinkButton } from "../buttons/LinkButton";
// import { LoaderCircle } from "lucide-react";
import { useFetchRecentArticles } from "@/api/useFetchRecentArticles";
import { SpinnerLoader } from "../SpinnerLoader";

export const RecentArticles = () => {
  const { articles, loading, error } = useFetchRecentArticles();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
            Recent Articles
          </h2>
          {error ? <p className="text-red-500">Error: {error}</p> : null}
          {loading ? (
            // <div className="flex items-center justify-center gap-2 font-semibold text-gray-500">
            //   <LoaderCircle className="animate-spin" />
            //   <p>Loading articles...</p>
            // </div>
            <SpinnerLoader label="Loading articles..." />
          ) : (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          )}
          <div className="mt-12 text-center">
            <LinkButton href={"/blogs"} size="lg" label={"View All Blogs"} />
          </div>
        </div>
      </div>
    </section>
  );
};
