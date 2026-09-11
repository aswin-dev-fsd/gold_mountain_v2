"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  MessageCircle,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Loader2,
  Calendar,
  Users,
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    guests: "1",
    interest: "Stay",
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
    <div className="flex flex-col w-full min-h-[85vh] justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold-dark text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PERSONAL BOOKING & ENQUIRY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-green tracking-tight font-normal">
            Your Stay Begins with a Conversation.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-green/80 font-light leading-relaxed">
            Tell us when you would like to visit, what you are looking for, and how we can make your stay meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Enquiry Form */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-sm border border-gold/40 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green/10 text-green rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-green" />
                </div>
                <h3 className="text-2xl font-serif text-green">
                  Thank You. Your Enquiry Has Been Received.
                </h3>
                <p className="text-sm text-green/80 max-w-md mx-auto leading-relaxed">
                  The Gold Mountain team will get back to you with confirmed availability and pricing details based on your dates.
                </p>
                <div className="p-4 bg-ivory rounded border border-gold/30 text-xs text-green/70 max-w-md mx-auto text-left space-y-1">
                  <p>
                    <strong>Notice:</strong> This is an enquiry acknowledgment, not an automated booking confirmation.
                  </p>
                  <p>
                    Our reservations team reviews each date manually to ensure quiet room allocation.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E7E34] text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#19692C] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-green/30 text-green rounded text-xs font-semibold uppercase tracking-wider hover:bg-green/5 transition-colors"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="book-name" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Full Name <span className="text-redAccent">*</span>
                    </label>
                    <input
                      id="book-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="e.g. Julian Hayes"
                    />
                    {errors.name && <p className="text-xs text-redAccent mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="book-email" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Email Address <span className="text-redAccent">*</span>
                    </label>
                    <input
                      id="book-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="e.g. julian@example.com"
                    />
                    {errors.email && <p className="text-xs text-redAccent mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="book-phone" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      id="book-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="+44 7911 123456"
                    />
                  </div>

                  <div>
                    <label htmlFor="book-arrival" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Arrival Date
                    </label>
                    <input
                      id="book-arrival"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="book-departure" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Departure Date
                    </label>
                    <input
                      id="book-departure"
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="book-interest" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Interested In
                    </label>
                    <select
                      id="book-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="Stay">Short Stay (Accommodation Only)</option>
                      <option value="Wellness Stay">Wellness Stay (With Daily Rituals)</option>
                      <option value="7-Day Wellness Journey">7-Day Wellness Journey (₹45,000)</option>
                      <option value="14-Day Healing Retreat">14-Day Healing Retreat (₹88,000)</option>
                      <option value="21-Day Ayurveda Program">21-Day Ayurveda Program (₹1,25,000)</option>
                      <option value="Monthly Stay">Monthly Sanctuary Stay (₹1,25,000)</option>
                      <option value="Other">Other / Custom Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="book-guests" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                      Number of Guests
                    </label>
                    <select
                      id="book-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="1">1 Guest (Single Occupancy)</option>
                      <option value="2">2 Guests (Double Occupancy)</option>
                      <option value="3">3 Guests</option>
                      <option value="4+">4 or More Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="book-message" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                    Message or Wellness Intentions
                  </label>
                  <textarea
                    id="book-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory/50 border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                    placeholder="Tell us about what brings you to Gold Mountain, transport assistance from Chennai or Bengaluru, or dietary preferences..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-green hover:bg-green-deep text-ivory rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting Enquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Travel Enquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Info Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white rounded-sm border border-gold/40 shadow-xs space-y-4">
              <span className="text-xs uppercase tracking-wider text-gold-dark font-semibold block">
                Direct Channels
              </span>
              <h3 className="text-lg font-serif text-green">
                Prefer to Chat Instantly?
              </h3>
              <p className="text-xs text-green/75 leading-relaxed">
                Our team is readily available on WhatsApp for quick checks on dates or to guide your travel itinerary.
              </p>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#1E7E34] hover:bg-[#19692C] text-ivory rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {CONTACT_INFO.phoneFormatted}
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-ivory hover:bg-ivory-dark/40 text-green border border-green/20 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-dark" />
                Email: {CONTACT_INFO.email}
              </a>
            </div>

            <div className="p-6 bg-ivory-dark/40 rounded-sm border border-gold/30 text-xs text-green/80 space-y-2">
              <h4 className="font-semibold text-green uppercase tracking-wider text-[11px]">
                Enquiry Process
              </h4>
              <p>
                1. <strong>Submit:</strong> Share your dates and goals.
              </p>
              <p>
                2. <strong>Consult:</strong> We review accommodation and therapy availability.
              </p>
              <p>
                3. <strong>Confirm:</strong> We send pricing, deposit instructions, and travel arrival coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
