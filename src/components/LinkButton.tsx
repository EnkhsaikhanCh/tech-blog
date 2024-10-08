import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LucideProps } from "lucide-react";

interface LinkButtonProps {
  href: string;
  label: string;
  variant?:
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | undefined;
  size?: "default" | "sm" | "lg" | "icon";
  Icon?: React.FC<LucideProps>;
  showIcon?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const LinkButton = ({
  href,
  label,
  variant = "default",
  size = "default",
  Icon,
  showIcon,
  isDisabled = false,
  className = "",
  onClick,
}: LinkButtonProps) => {
  return (
    <Link href={isDisabled ? "#" : href} passHref>
      <Button
        variant={variant}
        size={size}
        className={`font-semibold ${className}`}
        disabled={isDisabled}
        onClick={onClick}
      >
        {showIcon && Icon && <Icon className="mr-2 h-4 w-4" />}
        <p>{label}</p>
      </Button>
    </Link>
  );
};
