import { LinkButton } from "../buttons/LinkButton";

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover the Future of Tech
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Explore cutting-edge innovations, industry insights, and
                  expert analysis on our tech blog.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2 md:flex">
                <LinkButton
                  href={"/blogs"}
                  size="lg"
                  label={"Read Latest Blogs"}
                />
                <LinkButton
                  href={"/"}
                  size="lg"
                  variant="outline"
                  isDisabled
                  label={"Subscribe to Newsletter"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
