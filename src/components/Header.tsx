"use client";

import { Mountain, X, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";

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

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href={"/"} className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="text-lg font-semibold">{siteConfig.name}</span>
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
            {docsConfig.mainNav.map((item) => (
              <NavLink
                key={item.title}
                href={item.href}
                label={item.title}
                pathname={pathname}
              />
            ))}
          </nav>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <MobileNav toggleMenu={toggleMenu} isOpen={isOpen} />
    </>
  );
};
