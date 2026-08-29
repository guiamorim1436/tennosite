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
    sm: "h-11 px-6 text-sm",
    md: "h-14 px-8 text-base",
    lg: "h-16 px-10 text-lg sm:text-xl",
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
      <svg className="sparkle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          fill="currentColor"
        />
      </svg>
      <span className="text">
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </span>
    </a>
  );
}
