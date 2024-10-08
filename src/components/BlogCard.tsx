import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

interface BlogCardProp {
  article: Article;
}

export const BlogCard = ({ article }: BlogCardProp) => {
  return (
    <motion.div key={article.id} {...fadeInUp}>
      <Link href={article.path}>
        <Card className="flex h-full cursor-pointer flex-col justify-between overflow-hidden shadow transition-shadow duration-300 hover:shadow-md">
          <CardContent className="p-6">
            <h2 className="mb-2 line-clamp-2 text-xl font-semibold transition-colors duration-300 hover:text-blue-600">
              {article.title}
            </h2>
            <p className="mb-4 line-clamp-3 text-gray-600">
              {article.description}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(article.published_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {article.user.username}
              </span>
            </div>
          </CardContent>
          <CardFooter className="p-6">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {article.tag_list.map((tag, index) => (
                  <Badge
                    key={index}
                    className="flex items-center text-sm"
                    variant="secondary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {article.reading_time_minutes} min read
              </span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
