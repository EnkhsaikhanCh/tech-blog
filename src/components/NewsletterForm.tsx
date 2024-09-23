import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { AnimatePresence, motion } from "framer-motion";

interface NewsletterFormPropsTypes {
  email: string;
  setEmail: (email: string) => void;
  handleSubscribe: (e: React.FormEvent) => void;
  isSubscribed: boolean;
  loading: boolean;
}

export const NewsletterForm = ({
  email,
  setEmail,
  handleSubscribe,
  isSubscribed,
  loading,
}: NewsletterFormPropsTypes) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Newsletter</h3>
      <p className="mb-4 text-sm">
        Stay updated with our latest tech insights.
      </p>
      <form onSubmit={handleSubscribe} className="space-y-2">
        <div className="flex">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-r-none"
            disabled={loading}
          />
          <Button type="submit" className="rounded-l-none" disabled={loading}>
            {loading ? (
              <LoaderCircle size={20} className="animate-spin" />
            ) : (
              <ArrowRight size={20} />
            )}
          </Button>
        </div>
      </form>
      <AnimatePresence>
        {isSubscribed && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="mt-2 font-semibold text-green-600"
          >
            Thanks for subscribing!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
