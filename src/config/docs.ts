import { Icons } from "@/components/Icons";
import {
  FooterCategoryItem,
  MainNavItem,
  SelectCategoryItem,
  SocialLink,
} from "@/types/nav";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export interface DocsConfig {
  mainNav: MainNavItem[];
  selectCategoryItem: SelectCategoryItem[];
  footerCategoryItem: FooterCategoryItem[];
  socialLink: SocialLink[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Blogs", href: "/blogs" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  selectCategoryItem: [
    { label: "Next JS", value: "nextjs" },
    { label: "Three JS", value: "threejs" },
    { label: "Typescript", value: "typescript" },
    { label: "GraphQL", value: "graphql" },
    { label: "Apollo", value: "apollo" },
    { label: "ChatGPT", value: "chatgpt" },
    { label: "Tailwindcss", value: "tailwindcss" },
    { label: "Cloudinary", value: "cloudinary" },
    { label: "Jest", value: "jest" },
    { label: "Cypress", value: "cypress" },
  ],
  footerCategoryItem: [
    { label: "Artificial Intelligence", href: "/" },
    { label: "Web Development", href: "/" },
    { label: "Cybersecurity", href: "/" },
    { label: "Data Science", href: "/" },
  ],
  socialLink: [
    { label: "Facebook", Icon: Facebook, href: "/" },
    { label: "Instagram", Icon: Instagram, href: "/" },
    { label: "LinkedIn", Icon: Linkedin, href: "/" },
    { label: "Twitter", Icon: Icons.twitter, href: "/" },
  ],
};
