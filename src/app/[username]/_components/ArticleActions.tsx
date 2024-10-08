import { ActionButton } from "@/components/buttons/ActionButton";
import { Article } from "@/types/article";
import { Bookmark, MessageSquare, Share2, ThumbsUp } from "lucide-react";

interface ArticleActionsProp {
  article: Article;
}

export const ArticleActions = ({ article }: ArticleActionsProp) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:justify-between">
      <div className="flex items-center space-x-2">
        <ActionButton
          label={article.public_reactions_count}
          showIcon
          Icon={ThumbsUp}
          variant="outline"
        />
        <ActionButton
          label={article.comments_count}
          showIcon
          Icon={MessageSquare}
          variant="outline"
        />
      </div>
      <div className="flex items-center space-x-2">
        <ActionButton label="Save" showIcon Icon={Bookmark} variant="outline" />
        <ActionButton label="Share" showIcon Icon={Share2} variant="outline" />
      </div>
    </div>
  );
};
