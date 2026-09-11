import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Terms & Conditions | Gold Mountain Wellness Resort",
  description: "Terms and conditions of stay at Gold Mountain Wellness Resort.",
};

export default function TermsPage() {
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
        kicker="TERMS OF STAY"
        title="Terms & Conditions"
        subtitle="Last updated: September 2026. Important policies regarding reservations, cancellations, and wellness conduct."
      />

      <div className="prose prose-green max-w-none text-xs sm:text-sm text-green/85 leading-relaxed font-light space-y-6">
        <section className="space-y-2">
          <h3 className="text-lg font-serif text-green font-semibold">
            1. Enquiries and Booking Confirmation
          </h3>
          <p>
            Submission of an enquiry form on this website represents a request for reservation. A booking is only confirmed once availability has been verified by our team, official booking details have been communicated, and the agreed advance deposit has been received.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-serif text-green font-semibold">
            2. Currency and Rates
          </h3>
          <p>
            Indian Rupee (INR ₹) is the official base currency for all rates, packages, and services at Gold Mountain. Any foreign currency conversions (USD $, EUR €) shown on this website are approximate indicative guides based on prevailing exchange estimates and do not constitute binding fixed exchange commitments.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-serif text-green font-semibold">
            3. Resort Character & Atmosphere
          </h3>
          <p>
            Gold Mountain is a quiet wellness resort dedicated to healing, contemplation, and natural stillness. To preserve the sanctuary for all guests, loud music, excessive digital noise in communal spaces, and non-peaceful conduct are strictly discouraged.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-serif text-green font-semibold">
            4. Health & Wellness Disclaimer
          </h3>
          <p>
            Therapies and Ayurvedic recommendations provided at Gold Mountain are designed for general wellness, relaxation, and physical balance. They are not intended as clinical hospital treatment or a substitute for qualified medical care. Guests with acute medical conditions or chronic diseases should consult their primary physician before undertaking intensive wellness regimens.
          </p>
        </section>
      </div>
    </div>
  );
}
