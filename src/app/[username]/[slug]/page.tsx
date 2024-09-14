"use client";

import { Article } from "@/types/article";
import parse, { HTMLReactParserOptions } from "html-react-parser";
import { LoaderCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ArticleContentProps {
  parse: (
    input: string,
    options?: HTMLReactParserOptions,
  ) => JSX.Element | JSX.Element[] | string;
  article: Article;
}

interface UserInfoProps {
  article: Article;
}

export default function Page() {
  const { username, slug } = useParams<{ username: string; slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (username && slug) {
      const fetchArticle = async () => {
        try {
          const response = await fetch(
            `https://dev.to/api/articles/${username}/${slug}`,
          );
          const data: Article = await response.json();
          setArticle(data);
        } catch (error) {
          console.error("Error fetching article:", error);
        }
      };
      fetchArticle();
    }
  }, [username, slug]);

  if (!article) {
    return (
      <div className="my-5 flex items-center justify-center gap-2 font-semibold text-gray-500">
        <LoaderCircle className="animate-spin" /> <span>Blog loading...</span>
      </div>
    );
  }

  return (
    <>
      <main className="container mx-auto my-10 flex flex-col gap-6">
        <UserInfo article={article} />
        <ArticleContent parse={parse} article={article} />
      </main>
    </>
  );
}

const ArticleContent = ({ parse, article }: ArticleContentProps) => {
  return (
    <div className="pb-[30px] md:px-4">
      <div className="rounded-md border bg-white px-1 py-4">
        <h1 className="mb-8 text-center text-4xl font-bold">
          {article.title || "Untitled"}
        </h1>
        <div className="prose mx-auto w-full px-4">
          {article.body_html ? (
            parse(article.body_html)
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </div>
  );
};

const UserInfo = ({ article }: UserInfoProps) => (
  <div className="px-4">
    <div className="flex items-center justify-between gap-6 rounded-md border bg-white px-5 py-2 text-[#696A75]">
      <div className="flex items-center gap-4">
        <p className="text-blue-500">
          {article.user?.username || "Unknown User"}
        </p>
      </div>
      <p>{article.readable_publish_date || "Unknown Date"}</p>
    </div>
  </div>
);
