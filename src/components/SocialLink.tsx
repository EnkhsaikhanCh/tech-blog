import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";

interface SocialLinkProps {
  href: string;
  label: string;
  Icon: React.FC<LucideProps>;
}

export const SocialLink = ({ href, label, Icon }: SocialLinkProps) => {
  return (
    <Link href={href} aria-label={label}>
      <div
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "h-8 w-8 px-2",
        )}
      >
        <Icon size={20} />
      </div>
    </Link>
  );
};
