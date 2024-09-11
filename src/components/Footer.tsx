"use client";

"use client";

import {
  LucideProps,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  ChevronUp,
  LoaderCircle,
  Mountain,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "@radix-ui/react-separator";
import { Icons } from "./Icons";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    // Simulate async subscription action (e.g., send to backend)
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
      setLoading(false);
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1500);
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Use useEffect to manage the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="relative border-t bg-white pt-12 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href={"/"} className="flex items-center gap-2">
              <Mountain className="text-2xl font-bold text-gray-900" />
              <span className="text-2xl font-bold text-gray-900">
                Tech Blog
              </span>
            </Link>
            <p className="text-sm">
              Exploring the latest in technology, one article at a time.
            </p>
            <nav className="flex items-center">
              <SocialLink label="/" ariaLabel="Facebook" Icon={Facebook} />
              <SocialLink label="/" ariaLabel="Instagram" Icon={Instagram} />
              <SocialLink label="/" ariaLabel="LinkedIn" Icon={Linkedin} />
              <SocialLink label="/" ariaLabel="Twitter" Icon={Icons.twitter} />
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <WebsiteLinks href="/" label="Home" />
              <WebsiteLinks href="/blogs" label="Blogs" />
              <WebsiteLinks href="/about" label="About Us" />
              <WebsiteLinks href="/contact" label="Contact" />
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Categories
            </h3>
            <ul className="space-y-2">
              <WebsiteLinks href="/" label="Artificial Intelligence" />
              <WebsiteLinks href="/" label="Web Development" />
              <WebsiteLinks href="/" label="Cybersecurity" />
              <WebsiteLinks href="/" label="Data Science" />
            </ul>
          </div>
          <NewsletterForm
            email={email}
            setEmail={setEmail}
            handleSubscribe={handleSubscribe}
            isSubscribed={isSubscribed}
            loading={loading}
          />
        </div>
        <Separator className="my-16" />
        <div className="flex flex-col items-center justify-between pb-16 text-sm md:flex-row">
          <div className="flex items-center gap-2">
            <p>&copy; {new Date().getFullYear()}</p>
            <p>
              <Mountain size={14} />{" "}
            </p>
            <p>Tech Blog. All rights reserved.</p>
          </div>
          <nav className="mt-4 flex space-x-4 md:mt-0">
            <a href="#" className="transition-colors hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 rounded-full bg-gray-800 p-2 text-white shadow-lg transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            aria-label="Back to top"
            tabIndex={0}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

interface NewsletterFormPropsTypes {
  email: string;
  setEmail: (email: string) => void;
  handleSubscribe: (e: React.FormEvent) => void;
  isSubscribed: boolean;
  loading: boolean;
}

const NewsletterForm = ({
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

interface SocialMediaLinkPropsTypes {
  label: string;
  ariaLabel: string;
  Icon: React.FC<LucideProps>;
}

const SocialLink = ({ label, ariaLabel, Icon }: SocialMediaLinkPropsTypes) => {
  return (
    <Link href={label} aria-label={ariaLabel}>
      <div
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "h-8 w-8 px-2",
        )}
      >
        <Icon size={20} />
      </div>
    </Link>
  );
};

interface WebsiteLinksPropsTypes {
  href: string;
  label: string;
}

const WebsiteLinks = ({ href, label }: WebsiteLinksPropsTypes) => {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-gray-900">
        {label}
      </Link>
    </li>
  );
};
