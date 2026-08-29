import React from "react";
import { ArrowRight } from "lucide-react";

interface SparkleButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
}

export function SparkleButton({
  href,
  children,
  size = "md",
  showArrow = true,
  className = "",
  ...props
}: SparkleButtonProps) {
  const sizeClasses = {
    sm: "h-11 px-6 text-sm font-medium",
    md: "h-14 px-8 text-base font-semibold",
    lg: "h-16 px-10 text-lg sm:text-xl font-bold",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`sparkle-button group ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className="spark" />
      <span className="backdrop" />
      <span className="text">
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </span>
    </a>
  );
}
