import { LucideProps } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  label?: string;
}

export interface SelectCategoryItem {
  label: string;
  value: string;
}

export interface FooterCategoryItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  Icon: React.FC<LucideProps>;
  href: string;
}

export interface MainNavItem extends NavItem {}

// <SocialLink label="/" ariaLabel="Facebook" Icon={Facebook} />
