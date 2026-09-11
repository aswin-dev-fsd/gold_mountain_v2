import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Privacy Policy | Gold Mountain Wellness Resort",
  description: "Privacy and guest data handling policy of Gold Mountain Wellness Resort.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-xs text-green/70 hover:text-gold transition-colors font-medium mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Home</span>
      </Link>

      <SectionHeading
        kicker="LEGAL & PRIVACY"
        title="Privacy Policy"
        subtitle="Last updated: September 2026. How we protect and respect your personal information."
      />

      <div className="prose prose-green max-w-none text-xs sm:text-sm text-green/85 leading-relaxed font-light space-y-6">
        <section className="space-y-2">
          <h3 className="text-lg font-serif text-green font-semibold">
            1. Information We Collect
          </h3>
          <p>
            When you submit an enquiry on our website or communicate with us via WhatsApp or email, we collect only the necessary details to process your travel request, including your full name, email address, telephone/WhatsApp contact, requested travel dates, guest party size, and any special wellness preferences you share.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-serif text-green font-semibold">
            2. How We Use Your Information
          </h3>
          <p>
            Your information is used strictly to respond to your booking inquiries, coordinate accommodation availability, arrange customized Ayurvedic therapies, and assist with transport from Chennai or Bengaluru airports. We never sell, rent, or lease guest information to third-party marketing companies.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-serif text-green font-semibold">
            3. Health & Wellness Information
          </h3>
          <p>
            Any personal wellness or health background shared during consultation is treated with strict confidentiality by our resident practitioners and therapists. It is used solely to recommend safe, balanced therapies and dietary choices.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-serif text-green font-semibold">
            4. Contacting Us Regarding Your Data
          </h3>
          <p>
            If you wish to review, modify, or delete your contact details from our enquiry records, please email us directly at <span className="font-medium text-green">enquiry@goldmountainresort.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
