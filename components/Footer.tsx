import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, CONTACT_INFO } from "@/lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-green text-ivory relative pt-16 pb-10 overflow-hidden border-t border-gold/30">
      {/* Signature Brand Tri-Color Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green via-gold to-redAccent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-ivory/15">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="Gold Mountain Wellness Resort">
              <div className="relative w-[180px] aspect-[2.16/1]">
                <Image
                  src="/assets/logos/logo-dark.png"
                  alt="Gold Mountain Wellness Resort"
                  fill
                  sizes="180px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-ivory/80 leading-relaxed max-w-sm">
              A peaceful wellness resort nestled between Arunachala and Parvati Malai. Traditional healing, wholesome nourishment, and quiet rest in sacred natural surroundings.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] uppercase tracking-widest text-gold font-medium bg-white/5 px-3 py-1.5 rounded border border-gold/30">
                Tiruvannamalai • Tamil Nadu • India
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-ivory/80 font-light">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practical & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              Location & Arrival
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-ivory/80 font-light leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  No.97, Kotangal Road, Adiannamalai, Tiruvannamalai, Tamil Nadu 606604, India
                </span>
              </p>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold hover:underline text-xs pt-1"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="pt-3 border-t border-ivory/10 text-xs text-ivory/70 space-y-1">
              <p>Chennai Airport: ~3.5 hrs drive</p>
              <p>Bengaluru Airport: ~4 hrs drive</p>
            </div>
          </div>

          {/* Col 4: Direct Enquiry Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              Personal Enquiry
            </h4>
            <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed font-light">
              We respond personally to every international and domestic guest enquiry.
            </p>

            <div className="pt-1 space-y-2.5">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-2.5 px-4 bg-[#1E7E34] hover:bg-[#19692C] text-ivory rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {CONTACT_INFO.phoneFormatted}
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center justify-center gap-2.5 w-full py-2.5 px-4 bg-white/10 hover:bg-white/15 text-ivory border border-ivory/20 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Content Safety & Disclaimer Note */}
        <div className="py-6 border-b border-ivory/10 text-[11px] text-ivory/60 leading-relaxed">
          <p>
            <strong>Wellness & Practice Notice:</strong> Gold Mountain Wellness Resort is a sanctuary for restorative stays, traditional Ayurvedic therapies, wholesome nourishment, and mindful living. Offerings are intended for general wellbeing and do not constitute clinical diagnosis, medical treatment, or guaranteed cures for medical conditions.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60 font-light">
          <p>© 2026 Gold Mountain Wellness Resort. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Contact & Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
