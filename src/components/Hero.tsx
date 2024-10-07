import Image from "next/image";
import { Button } from "./ui/button";
import placeholder from "../../public/placeholder.svg";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto">
        <div className="container px-4 md:px-6">
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
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={"/blogs"}>
                  <Button size="lg" className="w-full font-semibold">
                    Read Latest Articles
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant={"outline"}
                  className="bg-white font-semibold text-black"
                >
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
            <Image
              alt="Featured Article Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src={placeholder}
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
