import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Article } from "@/types/article";
import { Calendar, Clock } from "lucide-react";

interface ArticleAuthorInfoProp {
  article: Article;
}

export const ArticleAuthorInfo = ({ article }: ArticleAuthorInfoProp) => {
  return (
    <div className="mb-6 flex items-center">
      <Avatar className="mr-3 h-10 w-10">
        <AvatarImage src={article.user.profile_image} alt={article.user.name} />
        <AvatarFallback>{article.user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold text-gray-900">{article.user.name}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="mr-1 h-4 w-4" />
          <time dateTime={article.published_at}>
            {new Date(article.published_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mx-2">•</span>
          <Clock className="mr-1 h-4 w-4" />
          <span>{article.reading_time_minutes} min read</span>
        </div>
      </div>
    </div>
  );
};
