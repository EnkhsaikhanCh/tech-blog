"use client";

import { Mountain, X, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavLinkPropsTypes {
  href: string;
  label: string;
  pathname: string;
}

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href={"/"} className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="text-lg font-semibold">Tech Blog</span>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-4 md:flex">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                label={item.name}
                pathname={pathname}
              />
            ))}
          </nav>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <nav
        className={`fixed left-0 top-0 z-40 h-full w-full bg-white p-4 pt-20 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="mt-2 flex flex-col space-y-6 px-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-lg text-[#696969]"
                onClick={toggleMenu} // Close menu when link is clicked
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

const NavLink = ({ href, label, pathname }: NavLinkPropsTypes) => {
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
