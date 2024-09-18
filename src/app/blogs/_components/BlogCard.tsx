import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { Calendar, Tag, User } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const BlogCard = ({
  id,
  title,
  description,
  published_at,
  username,
  tag_list,
  reading_time_minutes,
  path,
}: Article) => {
  return (
    <motion.div key={id} {...fadeInUp}>
      <Link href={path}>
        <Card className="flex h-full cursor-pointer flex-col justify-between overflow-hidden shadow-none transition-shadow duration-300 hover:shadow-md">
          <CardContent className="p-6">
            <h2 className="mb-2 line-clamp-2 text-xl font-semibold transition-colors duration-300 hover:text-blue-600">
              {title}
            </h2>
            <p className="mb-4 line-clamp-3 text-gray-600">{description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(published_at).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {username}
              </span>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 px-6 py-3">
            <div className="flex w-full items-center justify-between">
              <span className="flex items-center text-sm text-gray-500">
                <Tag className="mr-1 h-4 w-4" />
                {tag_list?.join(", ")}
              </span>
              <span className="text-sm text-gray-500">
                {reading_time_minutes} min read
              </span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
