import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold mb-2">
        404 • Page Not Found
      </span>
      <h1 className="text-4xl sm:text-5xl font-serif text-green max-w-md">
        This Path Leads Back to Stillness.
      </h1>
      <p className="mt-4 text-base text-green/75 max-w-sm leading-relaxed font-light">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="mt-8">
        <Button variant="primary" href="/" showArrow>
          Return to Sanctuary
        </Button>
      </div>
    </div>
  );
}
