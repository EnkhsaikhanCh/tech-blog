import Link from "next/link";

interface FooterLinkProps {
  href: string;
  label: string;
}

export const FooterLink = ({ href, label }: FooterLinkProps) => {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-gray-900">
        {label}
      </Link>
    </li>
  );
};
