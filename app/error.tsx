"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error cleanly without leaking raw details
    console.error("Route error:", error.message);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold mb-2">
        Notice
      </span>
      <h1 className="text-3xl sm:text-4xl font-serif text-green max-w-md">
        A Moment of Stillness.
      </h1>
      <p className="mt-4 text-sm text-green/75 max-w-md leading-relaxed font-light">
        We encountered an unexpected error while preparing this view. Please try refreshing or return to the main pages.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-green text-ivory text-xs uppercase font-semibold tracking-wider rounded"
        >
          Try Again
        </button>
        <Button variant="secondary" href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
