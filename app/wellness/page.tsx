"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Heart,
  MessageCircle,
  Mail,
  ArrowRight,
  Info,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { EnquiryModal } from "@/components/EnquiryModal";
import {
  WELLNESS_PILLARS,
  THERAPIES,
  WELLNESS_PACKAGES,
  CONTACT_INFO,
} from "@/lib/data";

export default function WellnessPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState("Wellness Stay");
  const [activeTherapy, setActiveTherapy] = useState<string | null>(null);

  const handleEnquire = (programmeName: string) => {
    setSelectedProgramme(programmeName);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================================= */}
      {/* 01. WELLNESS HERO */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center bg-green-deep text-ivory px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 overflow-hidden"
        aria-label="Wellness at Gold Mountain"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-landscape-alt.png"
            alt="Tranquil landscape of Gold Mountain overlooking sacred hills"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/90 via-green-deep/55 to-green-deep/35" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/10 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WELLNESS • HEALING JOURNEY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ivory font-normal leading-[1.1] tracking-tighter max-w-3xl">
            A Journey Inward. A Life Transformed.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ivory/90 font-light max-w-2xl leading-relaxed">
            Our wellness programmes combine ancient Ayurvedic wisdom with holistic practices to help you restore balance, release stress, and create lasting lifestyle changes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                const el = document.getElementById("programmes");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Programmes
            </Button>

            <Button
              variant="outline-light"
              size="lg"
              onClick={() => {
                const el = document.getElementById("philosophy");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Approach
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      </section>

      {/* ========================================================================= */}
      {/* 02. WELLNESS PHILOSOPHY — HEALING BEYOND TREATMENT */}
      {/* ========================================================================= */}
      <section id="philosophy" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          kicker="OUR WELLNESS PHILOSOPHY"
          title="Healing Beyond Treatment"
          subtitle="True wellness is the harmony of body, mind, and spirit. At Gold Mountain, we focus on treating the root cause, not merely the symptoms."
          alignment="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          <div className="p-6 bg-white/70 rounded border border-gold/30 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif text-green font-medium">
              Holistic Healing
            </h3>
            <p className="text-xs text-green/75 mt-2 leading-relaxed font-light">
              Nurturing the whole human being—physical vitality, mental tranquility, and emotional lightness.
            </p>
          </div>

          <div className="p-6 bg-white/70 rounded border border-gold/30 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif text-green font-medium">
              Personalised Care
            </h3>
            <p className="text-xs text-green/75 mt-2 leading-relaxed font-light">
              Every body possesses a unique constitution (Prakriti). Therapies and diets are tailored to your needs.
            </p>
          </div>

          <div className="p-6 bg-white/70 rounded border border-gold/30 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif text-green font-medium">
              Natural & Pure
            </h3>
            <p className="text-xs text-green/75 mt-2 leading-relaxed font-light">
              Time-tested herbal oils, botanicals from our garden, and chemical-free whole foods.
            </p>
          </div>

          <div className="p-6 bg-white/70 rounded border border-gold/30 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif text-green font-medium">
              Lifestyle Integration
            </h3>
            <p className="text-xs text-green/75 mt-2 leading-relaxed font-light">
              Empowering you with daily rituals, breathwork, and routines that you continue long after you leave.
            </p>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1 p-6 bg-white/70 rounded border border-gold/30 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mb-4">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif text-green font-medium">
              Sacred Surroundings
            </h3>
            <p className="text-xs text-green/75 mt-2 leading-relaxed font-light">
              The silent gravity of Arunachala and Parvati Malai acts as a natural catalyst for restoration.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. THE FIVE PILLARS OF WELLNESS */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white/40 border-y border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            kicker="THE PILLARS OF WELLNESS"
            title="Nourish. Heal. Transform."
            subtitle="Five integrated dimensions working synchronously to bring lasting mental and bodily harmony."
            alignment="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {WELLNESS_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-ivory rounded-sm overflow-hidden border border-green/15 hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 shadow-xs flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-deep/90 text-gold text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded">
                    {pillar.title}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-serif text-green font-medium">
                      {pillar.subtitle}
                    </h3>
                    <p className="text-xs text-green/75 mt-2 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>

                  <ul className="mt-4 pt-3 border-t border-green/10 space-y-1 text-[11px] text-green/80">
                    {pillar.details.slice(0, 2).map((d, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. OUR THERAPIES — ANCIENT WISDOM, MODERN CARE */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          kicker="OUR THERAPIES"
          title="Ancient Wisdom. Modern Care."
          subtitle="Our experienced therapists use time-tested Ayurvedic techniques and holistic therapies to restore balance and promote deep healing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {THERAPIES.map((th) => (
            <div
              key={th.id}
              className="bg-white rounded-sm border border-green/15 overflow-hidden shadow-xs hover:border-gold/60 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={th.image}
                  alt={th.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-green/90 text-ivory text-[10px] font-medium px-2 py-0.5 rounded">
                  {th.duration}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold-dark font-semibold">
                    {th.type}
                  </span>
                  <h3 className="text-xl font-serif text-green mt-1">
                    {th.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-green/75 mt-2 leading-relaxed font-light">
                    {th.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-green/10">
                    <span className="text-[11px] font-semibold text-green uppercase tracking-wider block mb-2">
                      Key Benefits:
                    </span>
                    <ul className="space-y-1 text-xs text-green/80">
                      {th.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-green/10">
                  <button
                    onClick={() => handleEnquire(th.title)}
                    className="w-full py-2.5 bg-green/10 hover:bg-green hover:text-ivory text-green rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Enquire About This Therapy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. WELLNESS PROGRAMMES — CHOOSE YOUR JOURNEY */}
      {/* ========================================================================= */}
      <section id="programmes" className="py-20 lg:py-28 bg-white/50 border-t border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            kicker="WELLNESS PROGRAMMES"
            title="Choose Your Journey"
            subtitle="Whether you have a few days or a few weeks, our structured programmes are crafted to support your physical, mental, and emotional renewal."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {WELLNESS_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-ivory rounded-sm border border-gold/40 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-green mt-2">
                    {pkg.name}
                  </h3>

                  <div className="mt-3 py-2 border-y border-green/10">
                    <div className="text-xl font-serif text-green font-semibold">
                      {pkg.priceInr}
                    </div>
                    <div className="text-[11px] text-green/60 font-light mt-0.5">
                      Indicative: ≈ {pkg.indicativeUsd} USD • ≈ {pkg.indicativeEur} EUR
                    </div>
                  </div>

                  <p className="text-xs text-green/75 mt-3 leading-relaxed font-light">
                    {pkg.shortDesc}
                  </p>

                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] uppercase font-semibold tracking-wider text-green block">
                      Inclusions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-green/80">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span className="leading-snug">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-green/10">
                  <button
                    onClick={() => handleEnquire(pkg.name)}
                    className="w-full py-3 bg-green hover:bg-green-deep text-ivory rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Enquire for Dates
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Wellness Consultation Card */}
          <div className="mt-12 bg-green text-ivory rounded-sm border border-gold p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                Custom Tailored Pathway
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-ivory mt-1">
                Need Something Custom?
              </h3>
              <p className="text-sm text-ivory/80 mt-2 leading-relaxed font-light">
                Every individual carries unique intentions. If our standard 7, 14, or 21-day journeys do not align with your travel schedule, we will craft a bespoke programme combining accommodation, therapies, and meals.
              </p>
            </div>
            <Button
              variant="gold"
              size="lg"
              onClick={() => handleEnquire("Custom Wellness Programme")}
              className="shrink-0"
            >
              Request Custom Plan
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-green text-ivory px-4 sm:px-6 lg:px-8 border-t border-gold/30 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory">
            Begin Your Wellness Journey
          </h2>
          <p className="text-base text-ivory/85 mt-3 max-w-xl mx-auto leading-relaxed font-light">
            We are here to guide you every step of the way. Share your intentions or connect directly with our team.
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
              onClick={() => handleEnquire("Wellness")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-ivory/30 text-ivory rounded text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Mail className="w-4 h-4 text-gold" />
              Send an Email
            </button>
          </div>

          <p className="text-xs text-ivory/60 mt-6">
            We usually reply within the hour during business hours (9:00 AM – 8:00 PM IST).
          </p>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory={selectedProgramme}
      />
    </div>
  );
}
