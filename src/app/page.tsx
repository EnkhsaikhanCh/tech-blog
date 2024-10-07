import { ExploreTopics } from "@/components/ExploreTopics";
import { Hero } from "@/components/Hero";
import { RecentArticles } from "@/components/RecentArticles";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <RecentArticles />
      <ExploreTopics />
    </main>
  );
}
