/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from "@/components/ui/card";

export const OurMission = () => {
  return (
    <div className="mb-20">
      <h1 className="mb-4 text-3xl font-semibold text-gray-900">Our Mission</h1>
      <Card className="shadow-none">
        <CardContent className="flex items-center justify-center p-8 text-justify text-xl leading-loose">
          At Tech Blog, our passion for technology runs deep. We are dedicated
          to constantly exploring the rapidly evolving world of tech and
          uncovering the latest innovations that shape our future. Our team is
          driven by a commitment to making these technological advancements not
          only understandable but also accessible to everyone, from tech
          enthusiasts to casual readers. We believe that technology should
          empower people, and part of that empowerment comes from knowledge.
          That’s why our mission is to deliver insightful, accurate, and
          compelling content that keeps our readers well-informed and ahead of
          the curve. Whether it's groundbreaking developments in artificial
          intelligence, emerging trends in software development, or the latest
          gadgets on the market, we aim to provide thorough, engaging coverage
          that sparks curiosity and fosters a deeper understanding of the tech
          landscape. Our goal is to be your trusted guide in navigating the
          ever-changing world of technology, making it more approachable and
          exciting for everyone.
        </CardContent>
      </Card>
    </div>
  );
};
