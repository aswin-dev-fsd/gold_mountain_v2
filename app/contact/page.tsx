"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { CONTACT_INFO } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    guests: "1",
    enquiryType: "Stay",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================================= */}
      {/* 01. CONTACT HERO */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-green text-ivory px-4 sm:px-6 lg:px-8 border-b border-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/10 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONTACT & ENQUIRIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ivory font-normal leading-tight tracking-tighter">
            Let's Plan Your Stay.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-ivory/85 font-light max-w-2xl mx-auto leading-relaxed">
            Have a question about staying, our wellness programmes, or traveling to Tiruvannamalai? Speak with our team directly.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. CONTACT CARDS & ENQUIRY FORM */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Direct Contact Options */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
                Direct Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-green mt-1">
                Reach Us Directly
              </h2>
              <p className="text-xs sm:text-sm text-green/75 mt-2 leading-relaxed font-light">
                We take time to understand your journey. Reach out through WhatsApp for prompt replies or send an email.
              </p>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-white rounded-sm border border-gold/40 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-gold-dark font-semibold">
                  Primary Channel
                </span>
                <span className="text-[11px] text-[#1E7E34] font-medium bg-[#1E7E34]/10 px-2 py-0.5 rounded">
                  Fastest Response
                </span>
              </div>
              <h3 className="text-lg font-serif text-green">
                WhatsApp Messaging
              </h3>
              <p className="text-xs text-green/75 leading-relaxed">
                Connect with our front desk team for quick availability checks, driving directions, or immediate questions.
              </p>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#1E7E34] hover:bg-[#19692C] text-ivory rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp (+91 94296 94026)
              </a>
            </div>

            {/* Email & Phone Card */}
            <div className="p-6 bg-white rounded-sm border border-green/15 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-green tracking-wide">
                    Email Correspondence
                  </h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-green/85 hover:text-gold transition-colors font-medium mt-0.5 block"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-green/10">
                <Phone className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-green tracking-wide">
                    Verified Telephone
                  </h4>
                  <p className="text-sm text-green/85 font-medium mt-0.5">
                    {CONTACT_INFO.phoneFormatted}
                  </p>
                  <span className="text-[11px] text-green/60">
                    Daily 9:00 AM – 8:00 PM IST
                  </span>
                </div>
              </div>
            </div>

            {/* Location Address */}
            <div className="p-6 bg-ivory-dark/40 rounded-sm border border-gold/30 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-green tracking-wide">
                    Property Location
                  </h4>
                  <p className="text-xs sm:text-sm text-green/80 mt-1 leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold-dark hover:underline font-medium inline-block mt-2"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-gold/40 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-serif text-green mb-2">
              Send Your Travel Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-green/75 mb-6 font-light leading-relaxed">
              Fill out the details below. Our team personally reviews each enquiry to advise on dates, room selection, and customized wellness pathways.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green/10 text-green rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-green" />
                </div>
                <h4 className="text-2xl font-serif text-green">
                  Thank You. Your Enquiry Has Been Received.
                </h4>
                <p className="text-sm text-green/80 max-w-md mx-auto leading-relaxed">
                  The Gold Mountain team will review your requested dates and get back to you with confirmed availability, package details, and pricing.
                </p>
                <div className="p-4 bg-ivory rounded border border-gold/30 text-xs text-green/70 max-w-md mx-auto">
                  <p>
                    <strong>Notice:</strong> This is an enquiry acknowledgment, not an automated booking confirmation.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        arrivalDate: "",
                        departureDate: "",
                        guests: "1",
                        enquiryType: "Stay",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-green text-ivory rounded text-xs font-semibold uppercase tracking-wider hover:bg-green-deep transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Full Name <span className="text-redAccent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="e.g. Maya Chen"
                    />
                    {errors.name && <p className="text-xs text-redAccent mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Email Address <span className="text-redAccent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="e.g. maya@example.com"
                    />
                    {errors.email && <p className="text-xs text-redAccent mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="e.g. +1 555 0192"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-arrival" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Arrival Date
                    </label>
                    <input
                      id="contact-arrival"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-departure" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Departure Date
                    </label>
                    <input
                      id="contact-departure"
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-type" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Enquiry Type
                    </label>
                    <select
                      id="contact-type"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="Stay">Short Stay (Accommodation)</option>
                      <option value="Wellness Stay">Wellness Stay (With Daily Rituals)</option>
                      <option value="7-Day Wellness Journey">7-Day Wellness Journey</option>
                      <option value="14-Day Healing Retreat">14-Day Healing Retreat</option>
                      <option value="21-Day Ayurveda Program">21-Day Ayurveda Program</option>
                      <option value="Monthly Stay">Monthly Sanctuary Stay</option>
                      <option value="Ayurveda Consultation">Ayurvedic Consultation</option>
                      <option value="General Enquiry">General / Other Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-guests" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Number of Guests
                    </label>
                    <select
                      id="contact-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4+">4 or More Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                    Your Message / Special Requests
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                    placeholder="Tell us about your wellness intentions, health background, transport coordination questions, or dietary preferences..."
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-green hover:bg-green-deep text-ivory rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting Enquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Enquiry Form
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. MAP & GETTING HERE EMBED / DETAILS */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white/60 border-t border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            kicker="MAP & DIRECTIONS"
            title="Finding Gold Mountain"
            subtitle="Nestled in Adiannamalai on the quiet western rim of Tiruvannamalai, in clear view of Arunachala and Parvati Malai."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
            <div className="lg:col-span-7 rounded-sm overflow-hidden border border-gold/40 shadow-sm bg-white aspect-[16/9] relative">
              <iframe
                title="Gold Mountain Wellness Resort Location"
                src="https://maps.google.com/maps?q=No.97,+Kotangal+Road,+Adiannamalai,+Tiruvannamalai,+Tamil+Nadu+606604,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-ivory rounded-sm border border-gold/30 space-y-3">
                <h4 className="font-serif text-green text-lg font-medium">
                  By Road from Airports
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-green/75 font-light">
                  <p>
                    <strong>From Chennai (MAA):</strong> ~185 km, approx 3.5 to 4 hours via NH32 / Tindivanam.
                  </p>
                  <p>
                    <strong>From Bengaluru (BLR):</strong> ~215 km, approx 4 to 4.5 hours via Krishnagiri / Chengam.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-ivory rounded-sm border border-gold/30 space-y-3">
                <h4 className="font-serif text-green text-lg font-medium">
                  Private Airport Transfers
                </h4>
                <p className="text-xs sm:text-sm text-green/75 font-light leading-relaxed">
                  We gladly coordinate trusted private chauffeurs to meet your flight with a welcome sign at either Chennai or Bengaluru airports directly to our resort doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
