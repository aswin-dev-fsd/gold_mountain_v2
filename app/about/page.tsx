"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Heart, Compass, CheckCircle2, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { EnquiryModal } from "@/components/EnquiryModal";
import { CONTACT_INFO } from "@/lib/data";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================================= */}
      {/* 01. ABOUT HERO */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[65vh] md:min-h-[72vh] flex items-center justify-center bg-green-deep text-ivory px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 overflow-hidden"
        aria-label="About Gold Mountain Wellness Resort"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/resort-gardens.png"
            alt="Gold Mountain tranquil gardens and resort landscape"
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
            <span>ORIGIN • PHILOSOPHY • PURPOSE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ivory font-normal leading-tight tracking-tighter">
            A Place Created with Purpose.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ivory/90 font-light max-w-2xl leading-relaxed">
            Gold Mountain was born from a simple, profound realization: that true restoration begins when we step away from noise and place ourselves back in rhythm with nature.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      </section>

      {/* ========================================================================= */}
      {/* 02. OUR STORY */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              kicker="OUR STORY"
              title="A Sanctuary in Sacred Soil"
              subtitle="Located in Adiannamalai on the quiet outskirts of Tiruvannamalai, Gold Mountain is designed as a peaceful retreat where traditional wellness and nature flourish."
            />

            <div className="space-y-4 text-base text-green/80 font-light leading-relaxed">
              <p>
                Tiruvannamalai has long been revered across centuries as a beacon of inner stillness. In creating Gold Mountain, our vision was to build a gentle, welcoming sanctuary that allows guests—both from across India and around the globe—to experience this profound environment with comfort and authenticity.
              </p>
              <p>
                We chose to position Gold Mountain firmly as a <strong>wellness resort</strong> rather than a clinical hospital or a sterile retreat. Here, healing is understood as an organic way of living: waking to birdsong, drinking herbal teas freshly brewed from the garden, receiving nourishing Ayurvedic therapies, and sharing wholesome meals.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 w-full pt-6 border-t border-green/10">
              <div>
                <span className="text-2xl font-serif text-gold-dark font-semibold block">
                  100%
                </span>
                <span className="text-xs text-green/70">
                  Organic farm & local produce
                </span>
              </div>
              <div>
                <span className="text-2xl font-serif text-gold-dark font-semibold block">
                  2 Sacred Peaks
                </span>
                <span className="text-xs text-green/70">
                  Arunachala East & Parvati Malai West
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-gold/30">
              <Image
                src="/assets/images/resort-architecture.png"
                alt="Gold Mountain resort landscape and architectural design"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10 rounded-sm" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. CORE PILLARS OF OUR PURPOSE */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white/50 border-y border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            kicker="FOUNDATIONAL VALUES"
            title="What Shapes Gold Mountain"
            subtitle="Six timeless principles guiding every decision, therapy, and guest interaction."
            alignment="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-ivory p-6 rounded-sm border border-gold/30 space-y-3">
              <span className="text-xs uppercase font-semibold text-gold-dark tracking-wider block">
                01 / Sacred Geography
              </span>
              <h3 className="text-xl font-serif text-green font-medium">
                In Arunachala's Presence
              </h3>
              <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                The mountain is our silent partner. Its presence reminds us to slow down, listen deeply, and cultivate reverence for the natural world.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-sm border border-gold/30 space-y-3">
              <span className="text-xs uppercase font-semibold text-gold-dark tracking-wider block">
                02 / Ancient Wisdom
              </span>
              <h3 className="text-xl font-serif text-green font-medium">
                Traditional Ayurveda
              </h3>
              <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                We practice authentic classical therapies without shortcuts. Each treatment is administered with mindful intention and tailored to individual doshas.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-sm border border-gold/30 space-y-3">
              <span className="text-xs uppercase font-semibold text-gold-dark tracking-wider block">
                03 / Wholesome Food
              </span>
              <h3 className="text-xl font-serif text-green font-medium">
                Honest Nourishment
              </h3>
              <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                Food that heals. We prepare Sattvic meals from our chemical-free soil and herbal garden, proving that healthy food can be deeply satisfying and delicious.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-sm border border-gold/30 space-y-3">
              <span className="text-xs uppercase font-semibold text-gold-dark tracking-wider block">
                04 / Heartfelt Hospitality
              </span>
              <h3 className="text-xl font-serif text-green font-medium">
                Warm Indian Care
              </h3>
              <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                Rooted in the spirit of Atithi Devo Bhava (the guest is treated with reverence). Our staff is present to guide, listen, and ensure you feel genuinely at home.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-sm border border-gold/30 space-y-3">
              <span className="text-xs uppercase font-semibold text-gold-dark tracking-wider block">
                05 / Harmony with Nature
              </span>
              <h3 className="text-xl font-serif text-green font-medium">
                Living Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                From our indigenous cow shelter and fish pond to water conservation, we cultivate an ecosystem where animals, flora, and human life thrive together.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-sm border border-gold/30 space-y-3">
              <span className="text-xs uppercase font-semibold text-gold-dark tracking-wider block">
                06 / Accessible Rest
              </span>
              <h3 className="text-xl font-serif text-green font-medium">
                Clarity for All
              </h3>
              <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                We make Indian wellness traditions clear and accessible to international visitors, answering pre-booking questions with transparency and warmth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. FOUNDER & PRACTITIONERS */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          kicker="OUR GUIDING TEAM"
          title="The People Behind the Experience"
          subtitle="Meet the practitioners, therapists, and guides who shape daily healing and hospitality at Gold Mountain."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Founder Profile Card */}
          <div className="p-8 bg-white/70 rounded-sm border border-gold/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-gold-dark tracking-wider block mb-1">
                Founder & Visionary
              </span>
              <h3 className="text-2xl font-serif text-green">
                Founder of Gold Mountain
              </h3>
              <p className="text-xs text-green/60 mt-1 italic">
                [FOUNDER PROFILE TO BE PROVIDED BY CLIENT]
              </p>

              <p className="text-xs sm:text-sm text-green/80 mt-4 leading-relaxed font-light">
                Created with a passion to share the profound tranquility of Tiruvannamalai with travelers seeking genuine healing, wholesome living, and spiritual calm. The founder envisioned a space where ancient traditions meet comfortable, thoughtful resort hospitality.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-green/10 text-xs text-green/60">
              Verified resident of Tiruvannamalai region.
            </div>
          </div>

          {/* Practitioners & Therapists */}
          <div className="p-8 bg-white/70 rounded-sm border border-gold/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-gold-dark tracking-wider block mb-1">
                Wellness Team
              </span>
              <h3 className="text-2xl font-serif text-green">
                Ayurvedic Practitioners & Therapists
              </h3>
              <p className="text-xs text-green/60 mt-1 italic">
                [PRACTITIONER CREDENTIALS VERIFIED LOCALLY]
              </p>

              <p className="text-xs sm:text-sm text-green/80 mt-4 leading-relaxed font-light">
                Our resident therapists and yoga guides are trained in traditional lineages of South Indian Ayurveda and Hatha yoga. They bring caring hands, attentive listening, and intuitive skill to each treatment session.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-green/10 text-xs text-green/60">
              One-on-one personal attention for every guest.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-20 bg-green text-ivory px-4 sm:px-6 lg:px-8 text-center border-t border-gold/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory">
            Come Experience Gold Mountain
          </h2>
          <p className="text-base text-ivory/85 mt-3 max-w-xl mx-auto leading-relaxed font-light">
            We invite you to step into our quiet sanctuary, breathe the fresh mountain air, and rediscover your natural balance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => setModalOpen(true)}
            >
              Plan Your Visit
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              href="/stay"
            >
              Explore Rooms
            </Button>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="About"
      />
    </div>
  );
}
