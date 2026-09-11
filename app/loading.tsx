import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <Loader2 className="w-8 h-8 text-gold animate-spin mb-4" />
      <p className="text-xs uppercase tracking-widest text-green/70 font-medium">
        Loading Gold Mountain Experience...
      </p>
    </div>
  );
}
