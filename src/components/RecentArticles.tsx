"use client";

import { BlogCard } from "@/app/blogs/_components/BlogCard";
import { Article } from "@/types/article";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const RecentArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const articlesCount = 3;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // eslint-disable-next-line prefer-const
        let url = `https://dev.to/api/articles?&per_page=${articlesCount}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        setArticles(data);
      } catch (error) {
        throw new Error("Failed to fetch articles");
      }
    };

    fetchArticles();
  }, [articlesCount]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
            Recent Articles
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <BlogCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                tag_list={article.tag_list}
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
                reading_time_minutes={article.reading_time_minutes}
                tags={[]}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={"/articles"}>
              <Button size="lg" className="h-12 font-semibold">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
