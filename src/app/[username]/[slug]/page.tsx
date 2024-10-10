"use client";

import { ArrowLeft, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Head from "next/head";
import parse from "html-react-parser";
import { LinkButton } from "@/components/buttons/LinkButton";
import { useFetchOneArticle } from "@/api/useFetchOneArticle";
import { ArticleActions } from "../_components/ArticleActions";
import { ArticleAuthorInfo } from "../_components/ArticleAuthorInfo";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const { article, loading, error } = useFetchOneArticle();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  if (loading) {
    return (
      <div className="my-5 flex min-h-screen items-center justify-center gap-2 font-semibold text-gray-500">
        <LoaderCircle className="animate-spin" /> <span>Blog loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-5 flex min-h-screen items-center justify-center gap-2 font-semibold text-red-400">
        {error}
      </div>
    );
  }

  if (!article) {
    return (
      <div className="my-5 flex min-h-screen items-center justify-center gap-2 font-semibold text-gray-500">
        <span>Article not found.</span>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title || "Article"}</title>
        <meta
          name="description"
          content={article.description || "Blog article"}
        />
        <meta
          property="og:image"
          content={article.cover_image || "/default-cover.jpg"}
        />
        <meta property="og:title" content={article.title || "Article"} />
        <meta
          property="og:description"
          content={article.description || "Blog article"}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="container mx-auto px-4 py-4 lg:w-[1000px]">
        <LinkButton
          href={"/blogs"}
          label={"Back to Blogs"}
          showIcon
          Icon={ArrowLeft}
        />
      </div>

      <main className="container mx-auto flex flex-col gap-6 pb-10 md:px-4 lg:w-[1000px]">
        <motion.article
          className="overflow-hidden bg-white shadow-sm md:rounded-lg"
          {...fadeInUp}
        >
          {/* Article Cover Image */}
          {article.cover_image ? (
            <Image
              src={article.cover_image}
              alt={article.title || "Article cover image"}
              layout="responsive"
              width={500}
              height={500}
              quality={100}
            />
          ) : null}

          <div className="p-6 md:p-8">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {article.title}
            </h1>

            {/* Article Author Info */}
            <ArticleAuthorInfo article={article} />

            {/* Article content */}
            <div className="prose">
              {parse(article.body_html || "<p>No content available.</p>")}
            </div>

            {/* Article tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {article.tags?.length > 0 ? (
                article.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant={"secondary"}
                    className="flex items-center text-sm"
                  >
                    {tag}
                  </Badge>
                ))
              ) : (
                <span className="text-gray-500">No tags available</span>
              )}
            </div>

            <Separator className="my-8" />

            {/* Article Actions */}
            <ArticleActions article={article} />
          </div>
        </motion.article>
      </main>
    </>
  );
}
