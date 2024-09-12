import { docsConfig } from "@/config/docs";
import Link from "next/link";

interface MobileNavPropsTypes {
  toggleMenu: () => void;
  isOpen: boolean;
}

export const MobileNav = ({ toggleMenu, isOpen }: MobileNavPropsTypes) => {
  return (
    <>
      {/* Mobile Menu Overlay */}
      <nav
        className={`fixed left-0 top-0 z-40 h-full w-full bg-white p-4 pt-20 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="mt-2 flex flex-col space-y-6 px-5">
          {docsConfig.mainNav.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="text-lg text-[#696969]"
                onClick={toggleMenu} // Close menu when link is clicked
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
