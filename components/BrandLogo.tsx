import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "primary" | "light" | "dark";
  className?: string;
  width?: number;
  height?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "primary",
  className,
  width = 160,
  height = 96,
}) => {
  const logoSrc =
    variant === "dark"
      ? "/assets/logos/logo-dark.png"
      : variant === "light"
      ? "/assets/logos/logo-light.png"
      : "/assets/logos/logo-primary.png";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded transition-opacity hover:opacity-90",
        className
      )}
      aria-label="Gold Mountain Wellness Resort — Return to Home"
    >
      <div className="relative" style={{ width: `${width}px`, aspectRatio: "2.16 / 1" }}>
        <Image
          src={logoSrc}
          alt="Gold Mountain Wellness Resort"
          fill
          sizes={`${width}px`}
          priority
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
};
