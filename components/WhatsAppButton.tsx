"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Optional gentle hint badge on hover */}
      {showTooltip && (
        <div className="hidden sm:block px-3 py-1.5 bg-green text-ivory text-xs font-medium rounded shadow-lg border border-gold/40 animate-fade-in whitespace-nowrap">
          Chat with Gold Mountain Team
        </div>
      )}

      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 p-3.5 bg-[#1E7E34] hover:bg-[#19692C] text-ivory rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 group"
        aria-label="Chat with Gold Mountain Wellness Resort on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
      </a>
    </div>
  );
};
