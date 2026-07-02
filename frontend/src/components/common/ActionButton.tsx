import { ReactNode } from "react";

interface ActionButtonProps {
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  secondary:
    "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 active:bg-secondary/70",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function ActionButton({
  variant = "primary",
  size = "md",
  children,
  icon,
  onClick,
  className = "",
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
