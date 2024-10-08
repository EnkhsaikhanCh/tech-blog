"use client";

import { Article } from "@/types/article";
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Clock,
  LoaderCircle,
  LucideProps,
  MessageSquare,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import parse from "html-react-parser";
import { LinkButton } from "@/components/LinkButton";

export default function Page() {
  const { username, slug } = useParams<{ username: string; slug: string }>();
  const [article, setArticle] = useState<Article>();
  const [error, setError] = useState<string | null>(null);

  const fetchArticle = async (username: string, slug: string) => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles/${username}/${slug}`,
      );
      return await response.json();
    } catch (error) {
      setError("Failed to load the article");
    }
  };

  useEffect(() => {
    if (username && slug) {
      fetchArticle(username, slug).then(setArticle);
    }
  }, [username, slug]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  if (!article) {
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

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta property="og:image" content={article.cover_image} />
      </Head>

      <div className="container mx-auto px-4 py-4 lg:w-[1000px]">
        <LinkButton
          href={"/blogs"}
          label={"Back to Articles"}
          showIcon
          Icon={ArrowLeft}
        />
      </div>

      <main className="container mx-auto flex flex-col gap-6 pb-10 md:px-4 lg:w-[1000px]">
        <motion.article
          className="overflow-hidden bg-white shadow-sm md:rounded-lg"
          {...fadeInUp}
        >
          {article.cover_image ? (
            <Image
              src={article.cover_image}
              alt={article.title}
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
            <div className="mb-6 flex items-center">
              <Avatar className="mr-3 h-10 w-10">
                <AvatarImage
                  src={article.user.profile_image}
                  alt={article.user.name}
                />
                <AvatarFallback>{article.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-900">
                  {article.user.name}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-1 h-4 w-4" />
                  <time dateTime={article.published_at}>
                    {new Date(article.published_at).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </time>
                  <span className="mx-2">•</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{article.reading_time_minutes} min read</span>
                </div>
              </div>
            </div>
            <div className="prose">{parse(article.body_html || "")}</div>
            <div className="mt-8 flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-2 py-1 text-sm text-blue-800"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              <div className="flex items-center space-x-2">
                <ActionButton
                  label={article.public_reactions_count}
                  Icon={ThumbsUp}
                />
                <ActionButton
                  label={article.comments_count}
                  Icon={MessageSquare}
                />
              </div>
              <div className="flex items-center space-x-2">
                <ActionButton label="Save" Icon={Bookmark} />
                <ActionButton label="Share" Icon={Share2} />
              </div>
            </div>
          </div>
        </motion.article>
      </main>
    </>
  );
}

const ActionButton = ({
  label,
  Icon,
}: {
  label: string | number;
  Icon: React.FC<LucideProps>;
}) => {
  return (
    <Button variant="outline" className="font-bold">
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
};
