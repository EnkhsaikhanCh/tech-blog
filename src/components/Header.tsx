"use client";

import { Mountain, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
interface NavLinkPropsTypes {
  href: string;
  label: string;
}

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href={"/"} className="flex items-center gap-2">
          <Mountain className="h-6 w-6" />
          <span className="text-lg font-semibold">Tech Blog</span>
        </Link>

        {/* Main nav */}
        <nav className="hidden items-center gap-4 md:flex">
          <NavLink href="/" label="Home" pathname={pathname} />
          <NavLink href="/blogs" label="Blogs" pathname={pathname} />
          <NavLink href="/about" label="About" pathname={pathname} />
          <NavLink href="/contact" label="Contact" pathname={pathname} />
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                ></Link>
                <NavLink href="/" label="Home" pathname={pathname} />
                <NavLink href="/blogs" label="Blogs" pathname={pathname} />
                <NavLink href="/about" label="About" pathname={pathname} />
                <NavLink href="/contact" label="Contact" pathname={pathname} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({
  href,
  label,
  pathname,
}: NavLinkPropsTypes & { pathname: string }) => {
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
