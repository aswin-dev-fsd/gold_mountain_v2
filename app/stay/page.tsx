"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Wifi,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Mail,
  Plane,
  Clock,
  Compass,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { EnquiryModal } from "@/components/EnquiryModal";
import { ROOMS, STAY_TYPES, CONTACT_INFO } from "@/lib/data";

export default function StayPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryCategory, setEnquiryCategory] = useState("Stay");

  const handleEnquire = (roomOrStay: string) => {
    setEnquiryCategory(roomOrStay);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================================= */}
      {/* 01. STAY HERO */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[70vh] md:min-h-[78vh] flex items-center justify-center bg-green-deep text-ivory px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 overflow-hidden"
        aria-label="Accommodation at Gold Mountain"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/resort-room.jpg"
            alt="Tranquil bedroom at Gold Mountain overlooking lush greenery and mountains"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/90 via-green-deep/60 to-green-deep/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/10 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SANCTUARY • ACCOMMODATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ivory font-normal leading-tight tracking-tighter">
            A Peaceful Place to Stay.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ivory/90 font-light max-w-2xl leading-relaxed">
            Comfortable spaces surrounded by nature, created for rest and reconnection. Each room provides a calm, quiet sanctuary supporting your wellness journey.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                const el = document.getElementById("rooms");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Rooms
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              onClick={() => handleEnquire("Stay")}
            >
              Check Availability
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      </section>

      {/* ========================================================================= */}
      {/* 02. STAY TAXONOMY EXPLANATION */}
      {/* ========================================================================= */}
      <section className="py-16 bg-ivory border-b border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
              Clear Choices
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-green mt-2">
              Understanding Our Stay Options
            </h2>
            <p className="text-xs sm:text-sm text-green/75 mt-2 font-light">
              We offer distinct options depending on your intention—from flexible stays to comprehensive structured wellness programmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STAY_TYPES.map((st) => (
              <div
                key={st.id}
                className="bg-white/70 p-6 rounded-sm border border-gold/30 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gold-dark font-semibold block">
                    {st.tagline}
                  </span>
                  <h3 className="text-xl font-serif text-green mt-1">
                    {st.name}
                  </h3>
                  <p className="text-xs text-green/80 mt-3 leading-relaxed font-light">
                    {st.description}
                  </p>

                  <ul className="mt-5 space-y-1.5 text-xs text-green/85 pt-3 border-t border-green/10">
                    {st.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-green/10">
                  <button
                    onClick={() => handleEnquire(st.name)}
                    className="w-full py-2.5 bg-green/10 hover:bg-green hover:text-ivory text-green rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Enquire for {st.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. ROOM CATEGORIES */}
      {/* ========================================================================= */}
      <section id="rooms" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          kicker="ACCOMMODATION"
          title="Serene Living Spaces"
          subtitle="All rooms feature generous natural lighting, private balconies or verandas overlooking tropical flora, and thoughtful amenities designed for stillness."
        />

        <div className="space-y-16 mt-12">
          {ROOMS.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={room.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white/50 p-6 sm:p-8 rounded-sm border border-gold/30 shadow-xs"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-md">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-green-deep/90 text-gold text-xs font-medium px-3 py-1 rounded">
                      {room.category}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-green/60 mb-2">
                      <span className="flex items-center gap-1 font-medium text-green">
                        <Users className="w-3.5 h-3.5 text-gold" />
                        {room.capacity}
                      </span>
                      <span>•</span>
                      <span>En-suite bath</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-green">
                      {room.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-green/80 mt-3 leading-relaxed font-light">
                      {room.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-green/10">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-green block mb-2">
                        Included Amenities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-green/75">
                        {room.amenities.map((am, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                            <span>{am}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-green/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-green/70">
                      Pricing provided upon enquiry based on dates & season.
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => handleEnquire(room.name)}
                      className="w-full sm:w-auto"
                    >
                      Enquire About This Room
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. PRACTICAL ARRIVAL & GUEST GUIDANCE */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white/60 border-t border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            kicker="INTERNATIONAL GUEST INFORMATION"
            title="Planning Your Journey to Gold Mountain"
            subtitle="Clear, practical guidance to help you travel with ease and know what to expect."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-ivory p-6 rounded-sm border border-gold/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-green font-medium">
                Airport & Transit
              </h3>
              <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                Chennai International Airport (MAA) is approximately 3.5 hours by car. Bengaluru International Airport (BLR) is approximately 4 hours away. Our team can arrange trusted private chauffeur transfers upon request.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-sm border border-gold/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-green font-medium">
                Enquiry to Confirmation
              </h3>
              <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                Submit your dates and preferences via our form or WhatsApp. We will confirm room availability, package pricing, and payment instructions directly, ensuring complete personal attention.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-sm border border-gold/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-green font-medium">
                What to Bring
              </h3>
              <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                We recommend comfortable cotton clothing for yoga, walking sandals for garden strolls, and a peaceful, open mindset. Organic toiletries, linens, yoga mats, and filtered spring water are all provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-20 bg-green text-ivory px-4 sm:px-6 lg:px-8 border-t border-gold/30 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory">
            Plan Your Stay at Gold Mountain
          </h2>
          <p className="text-base text-ivory/85 mt-3 max-w-xl mx-auto leading-relaxed font-light">
            Tell us when you wish to arrive and whether you seek a simple quiet stay or a structured wellness journey.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1E7E34] hover:bg-[#19692C] text-ivory rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire on WhatsApp
            </a>

            <button
              onClick={() => handleEnquire("Stay")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-ivory/30 text-ivory rounded text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Mail className="w-4 h-4 text-gold" />
              Send Enquiry Form
            </button>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory={enquiryCategory}
      />
    </div>
  );
}
