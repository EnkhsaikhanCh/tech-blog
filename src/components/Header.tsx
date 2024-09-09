import { Mountain, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavLinkPropsTypes {
  href: string;
  label: string;
}

export const Header = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background shadow">
        <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
          <Link href={"/"} className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="text-lg font-semibold">Tech Blog</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/" label="Home" />
            <NavLink href="/blogs" label="Blogs" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
          </nav>
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
                  <NavLink href="/" label="Home" />
                  <NavLink href="/blogs" label="Blogs" />
                  <NavLink href="/about" label="About" />
                  <NavLink href="/contact" label="Contact" />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

const NavLink = ({ href, label }: NavLinkPropsTypes) => {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground"
      prefetch={false}
    >
      {label}
    </Link>
  );
};
