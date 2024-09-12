import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinkPropsTypes {
  href: string;
  label: string;
  pathname: string;
}

export const NavLink = ({ href, label, pathname }: NavLinkPropsTypes) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "rounded px-5 py-1 font-semibold transition-colors hover:text-foreground/80",
        isActive ? "bg-accent text-foreground" : "text-muted-foreground",
      )}
    >
      {label}
    </Link>
  );
};
