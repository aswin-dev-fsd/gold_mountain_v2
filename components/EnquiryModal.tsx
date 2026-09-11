"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, MessageCircle, Send, Loader2 } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = "Stay",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    guests: "1",
    category: defaultCategory,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultCategory) {
      setFormData((prev) => ({ ...prev, category: defaultCategory }));
    }
  }, [defaultCategory]);

  // Focus trap & Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => initialFocusRef.current?.focus(), 50);
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable enquiry receipt submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      arrivalDate: "",
      departureDate: "",
      guests: "1",
      category: defaultCategory || "Stay",
      message: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-green/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-ivory text-green rounded-md shadow-2xl overflow-hidden border border-gold/40 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-green text-ivory border-b border-gold/30">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-medium">
              Gold Mountain Wellness Resort
            </span>
            <h2 id="enquiry-modal-title" className="text-xl sm:text-2xl font-serif">
              Plan Your Stay / Send Enquiry
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-ivory/80 hover:text-ivory hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green/10 text-green rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-green" />
              </div>
              <h3 className="text-2xl font-serif text-green">
                Thank You. Your Enquiry Has Been Received.
              </h3>
              <p className="text-base text-green/80 max-w-md mx-auto leading-relaxed">
                The Gold Mountain team will review your requested dates and preferences, and reply personally with confirmed availability and pricing details.
              </p>
              <div className="p-4 bg-ivory-dark/60 rounded border border-gold/20 text-xs text-green/70 max-w-md mx-auto">
                <p>
                  <strong>Note:</strong> This is an enquiry acknowledgment, not an automated booking confirmation. For immediate queries, you may also reach us directly via WhatsApp.
                </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E7E34] text-white rounded text-sm font-medium uppercase tracking-wider hover:bg-[#19692C] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-green/30 text-green rounded text-sm font-medium uppercase tracking-wider hover:bg-green/5 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <p className="text-xs text-green/70">
                Fields marked with an asterisk (<span className="text-redAccent">*</span>) are required. We usually respond within the hour during daytime hours (9:00 AM – 8:00 PM IST).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                    Full Name <span className="text-redAccent">*</span>
                  </label>
                  <input
                    ref={initialFocusRef}
                    id="modal-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="e.g. Eleanor Vance"
                  />
                  {errors.name && <p className="text-xs text-redAccent mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                    Email Address <span className="text-redAccent">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="e.g. eleanor@example.com"
                  />
                  {errors.email && <p className="text-xs text-redAccent mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="e.g. +44 7911 123456"
                  />
                </div>

                <div>
                  <label htmlFor="modal-arrival" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                    Preferred Arrival
                  </label>
                  <input
                    id="modal-arrival"
                    type="date"
                    value={formData.arrivalDate}
                    onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label htmlFor="modal-departure" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                    Preferred Departure
                  </label>
                  <input
                    id="modal-departure"
                    type="date"
                    value={formData.departureDate}
                    onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-category" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                    Interested In
                  </label>
                  <select
                    id="modal-category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="Stay">Short Stay (Flexible Accommodation)</option>
                    <option value="Wellness Stay">Wellness Stay (Accommodation + Daily Practices)</option>
                    <option value="7-Day Wellness Journey">7-Day Wellness Journey</option>
                    <option value="14-Day Healing Retreat">14-Day Healing Retreat</option>
                    <option value="21-Day Ayurveda Program">21-Day Ayurveda Program</option>
                    <option value="Monthly Stay">Monthly Extended Stay</option>
                    <option value="Ayurveda Consultation">Ayurvedic Consultation</option>
                    <option value="General Enquiry">General / Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-guests" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="modal-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-green/30 rounded text-sm text-green focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4+">4 or More Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs uppercase font-medium tracking-wider text-green mb-1">
                  How can we make your stay meaningful?
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-green/30 rounded text-sm text-green placeholder:text-green/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                  placeholder="Tell us about your wellness intentions, health goals, or any questions regarding transport from Chennai or Bengaluru..."
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-green/10">
                <div className="text-xs text-green/60 text-center sm:text-left">
                  Direct contact: <a href={CONTACT_INFO.whatsappUrl} className="text-[#1E7E34] font-medium hover:underline">WhatsApp Us</a> or call <span className="font-medium">{CONTACT_INFO.phone}</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-green text-ivory rounded text-xs font-semibold uppercase tracking-wider hover:bg-green-deep transition-all shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
