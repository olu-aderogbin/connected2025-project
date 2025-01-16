import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const ProgressSpinner = ({ size = "md", className }: ProgressSpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className="flex items-center justify-center">
      <Loader2 className={cn("animate-spin", sizeClasses[size], className)} />
    </div>
  );
};