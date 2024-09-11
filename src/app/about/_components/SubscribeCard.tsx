import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const SubscribeCard = () => {
  return (
    <Card className="mb-24 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <CardContent className="flex flex-col items-center justify-between p-8 md:flex-row">
        <div className="mb-4 md:mb-0 md:mr-8">
          <h2 className="mb-2 text-2xl font-semibold">Join Our Community</h2>
          <p className="text-lg">
            Subscribe to our newsletter for the latest updates and tech
            insights.
          </p>
        </div>
        <div className="flex w-full md:w-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="rounded-r-none bg-white text-gray-900"
          />
          <Button variant="secondary" className="rounded-l-none">
            Subscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
