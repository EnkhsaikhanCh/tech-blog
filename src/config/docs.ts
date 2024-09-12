import { MainNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Blogs", href: "/blogs" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
};
