import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Shield, Users, Zap } from "lucide-react";

export const WhatWeCanCover = () => {
  return (
    <div className="mb-20">
      <h2 className="mb-8 text-3xl font-semibold text-gray-900">
        What We Cover
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Laptop,
            title: "Latest Tech",
            description:
              "Stay updated with the newest gadgets and innovations.",
            color: "text-blue-500",
          },
          {
            icon: Zap,
            title: "AI & ML",
            description:
              "Dive deep into artificial intelligence and machine learning.",
            color: "text-yellow-500",
          },
          {
            icon: Shield,
            title: "Cybersecurity",
            description:
              "Learn about the latest in digital security and privacy.",
            color: "text-green-500",
          },
          {
            icon: Users,
            title: "Tech Culture",
            description:
              "Explore the impact of technology on society and culture.",
            color: "text-purple-500",
          },
        ].map((item, index) => (
          <Card key={index} className="h-full shadow-none">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <item.icon className={`h-12 w-12 ${item.color} mb-4`} />
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
