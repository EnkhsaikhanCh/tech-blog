import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah L.",
    text: "TechBlog has become my go-to source for staying updated on the latest tech trends. Their articles are always insightful and easy to understand.",
  },
  {
    name: "Mike R.",
    text: "As a developer, I appreciate the depth of TechBlog's content. They cover complex topics in a way that's accessible to both beginners and experts.",
  },
];

export const Testimonials = () => {
  return (
    <div className="mb-20">
      <h2 className="mb-8 text-3xl font-semibold text-gray-900">
        What Our Readers Say
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full shadow-none">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">{testimonial.text}</p>
              <p className="text-right font-semibold">- {testimonial.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
