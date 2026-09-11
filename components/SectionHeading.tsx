import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  theme?: "light" | "dark";
  showDivider?: boolean;
  className?: string;
  titleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  alignment = "left",
  theme = "light",
  showDivider = true,
  className,
  titleClassName,
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col mb-10 md:mb-14",
        alignment === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {kicker && (
        <span
          className={cn(
            "text-xs md:text-sm uppercase tracking-widest font-semibold mb-3 transition-colors",
            isDark ? "text-gold" : "text-gold-dark"
          )}
        >
          {kicker}
        </span>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-serif leading-tight font-normal tracking-tight max-w-3xl",
          isDark ? "text-ivory" : "text-green",
          titleClassName
        )}
      >
        {title}
      </h2>

      {showDivider && (
        <div
          className={cn(
            "w-14 h-[2px] mt-4 mb-5 rounded-full",
            isDark ? "bg-gold" : "bg-gold"
          )}
        />
      )}

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-2xl font-light",
            isDark ? "text-ivory/80" : "text-green/80"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
