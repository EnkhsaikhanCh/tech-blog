"use client";

import { Mountain } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@radix-ui/react-separator";
import { SocialLink } from "./SocialLink";
import { NewsletterForm } from "./NewsletterForm";
import { FooterLink } from "./FooterLink";
import { docsConfig } from "@/config/docs";
import { ScrollToTop } from "./ScrollToTop";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = usePathname();
  const isHomePage = router === "/";

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

  return (
    <footer
      className={`relative border-t pt-12 text-gray-600 ${isHomePage ? "bg-grey-50" : "bg-white"}`}
    >
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
              {docsConfig.socialLink.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.href}
                  label={social.label}
                  Icon={social.Icon}
                />
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {docsConfig.mainNav.map((item, index) => (
                <FooterLink key={index} href={item.href} label={item.title} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Categories
            </h3>
            <ul className="space-y-2">
              {docsConfig.footerCategoryItem.map((category, index) => (
                <FooterLink
                  key={index}
                  href={category.href}
                  label={category.label}
                />
              ))}
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
      <ScrollToTop />
    </footer>
  );
};
