"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { NAV_ITEMS, CONTACT_INFO } from "@/lib/data";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/Button";
import { EnquiryModal } from "@/components/EnquiryModal";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold/20 py-2.5"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <BrandLogo variant="primary" width={160} />
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-widest font-medium"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-green transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold group",
                    isActive && "text-gold font-semibold"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                      isActive && "scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Enquire Now & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border border-green/35 text-green bg-transparent hover:bg-green hover:text-ivory rounded-sm transition-all duration-300 shadow-xs hover:shadow active:scale-95 cursor-pointer"
            >
              Enquire Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-green hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-green/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-ivory text-green shadow-2xl p-6 flex flex-col justify-between transition-transform duration-500 ease-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-gold/20">
              <BrandLogo variant="primary" width={130} height={78} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-green hover:text-gold rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-serif tracking-wide py-2 border-b border-green/10 flex items-center justify-between text-green hover:text-gold transition-colors",
                      isActive && "text-gold font-semibold border-gold"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Drawer Bottom Actions */}
          <div className="pt-6 border-t border-gold/20 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setEnquiryModalOpen(true);
              }}
              className="w-full py-3.5 bg-green text-ivory text-xs font-semibold uppercase tracking-widest rounded-sm text-center shadow-md hover:bg-green-deep transition-all"
            >
              Book / Enquire
            </button>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#1E7E34] text-ivory text-xs font-semibold uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 hover:bg-[#19692C] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>

            <p className="text-center text-[11px] text-green/60 pt-2">
              Tiruvannamalai, Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>

      {/* Enquiry Modal instance */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </>
  );
};
