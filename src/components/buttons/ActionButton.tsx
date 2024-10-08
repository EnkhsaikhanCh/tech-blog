import { LucideProps } from "lucide-react";
import { Button } from "../ui/button";

interface ActionButtonProps {
  label: string | number;
  variant?:
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost";
  showIcon?: boolean;
  Icon?: React.FC<LucideProps>;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const ActionButton = ({
  size,
  label,
  variant = "default",
  showIcon,
  Icon,
  className = "",
  onClick,
  isDisabled = false,
}: ActionButtonProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      className={`font-bold ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {showIcon && Icon && <Icon className="mr-2 h-4 w-4" />}
      {label}
    </Button>
  );
};
