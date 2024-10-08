import { LinkButton } from "./LinkButton";

export const ExploreTopics = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
            Explore Topics
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Artificial Intelligence",
              "Blockchain",
              "Cybersecurity",
              "Data Science",
              "Internet of Things",
              "Machine Learning",
              "Robotics",
              "Virtual Reality",
            ].map((topic, index) => (
              <LinkButton
                key={index}
                variant="outline"
                href={"#"}
                label={topic}
                className="h-12 w-full text-lg font-semibold shadow-none md:h-16"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
