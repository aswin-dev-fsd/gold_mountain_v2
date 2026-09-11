import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "whatsapp" | "outline-light" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  icon,
  showArrow = false,
  children,
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs min-h-[36px]",
    md: "px-6 py-3 text-sm min-h-[44px]",
    lg: "px-8 py-4 text-base min-h-[50px]",
  };

  const variantClasses = {
    primary:
      "bg-green text-ivory hover:bg-green-deep border border-green-light/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-transparent text-green border border-green/30 hover:border-green hover:bg-green/5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    gold:
      "bg-gold text-green font-medium hover:bg-gold-light border border-gold shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#1E7E34] hover:bg-[#19692C] text-ivory border border-transparent shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    "outline-light":
      "bg-transparent text-ivory border border-ivory/40 hover:border-ivory hover:bg-ivory/10 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    link:
      "bg-transparent text-green p-0 min-h-0 underline-offset-4 hover:underline transition-colors inline-flex items-center gap-1 font-medium",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-wide uppercase rounded-sm text-center select-none cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-3 disabled:opacity-50 disabled:pointer-events-none group",
    variant !== "link" && sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};
