import { MainNavItem, SelectCategoryItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  selectCategoryItem: SelectCategoryItem[];
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
};
