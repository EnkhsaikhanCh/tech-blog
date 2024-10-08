import { ExploreTopics } from "@/components/home/ExploreTopics";
import { Hero } from "@/components/home/Hero";
import { RecentArticles } from "@/components/home/RecentArticles";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <RecentArticles />
      <ExploreTopics />
    </main>
  );
}
