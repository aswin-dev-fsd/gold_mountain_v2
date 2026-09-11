"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Sparkles,
  Heart,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Mail,
  Feather,
  Leaf,
  Flower2,
  Trees,
  Play,
  X,
} from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryModal } from "@/components/EnquiryModal";
import {
  WELLNESS_PILLARS,
  EXPERIENCES,
  BLOG_POSTS,
  CONTACT_INFO,
} from "@/lib/data";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Stay");
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const openEnquiry = (category: string = "Stay") => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* 01. HERO SECTION — CINEMATIC ARUNACHALA REVEAL */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[90vh] lg:min-h-[96vh] flex items-center bg-ivory text-green px-4 sm:px-6 lg:px-12 pt-28 pb-16 sm:py-32 overflow-hidden"
        aria-label="Welcome to Gold Mountain Wellness Resort"
      >
        {/* Background Image: Arunachala mountain & pavilion gazebo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-arunachala.png"
            alt="Gold Mountain Wellness Resort pavilion overlooking sacred Mount Arunachala amidst tropical palm groves"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center] md:object-right scale-100 transition-transform duration-1000 ease-out"
          />
          {/* Authentic morning mist scrim: soft warm ivory gradient across left half for optimal editorial contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/90 via-35% md:via-ivory/70 md:via-50% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory/40 via-transparent to-ivory/20 pointer-events-none" />
        </div>

        {/* Hero Content: Left-aligned editorial typography matching client design */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start text-left">
          <div className="max-w-2xl">
            {/* Kicker */}
            <div className="text-gold font-medium tracking-[0.25em] text-xs uppercase mb-4 sm:mb-6 animate-fade-in flex items-center gap-2">
              <span className="font-serif">01</span>
              <span>•</span>
              <span>HEAL. RECONNECT. RENEW.</span>
            </div>

            {/* Main Display Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-green tracking-tight leading-[1.12] text-balance">
              A Wellness Resort<br className="hidden sm:inline" /> in the Presence of<br className="hidden sm:inline" /> Arunachala
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-green/85 font-light leading-relaxed max-w-xl">
              Traditional healing, healthy living and meaningful experiences amidst nature and the spiritual presence of Arunachala.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <Button
                variant="primary"
                size="lg"
                href="/wellness"
                className="px-7 py-3.5 text-xs tracking-widest font-semibold uppercase"
              >
                Explore Wellness
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => openEnquiry("Stay")}
                className="px-7 py-3.5 text-xs tracking-widest font-semibold uppercase bg-white/90"
              >
                Plan Your Stay
              </Button>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-green/85 hover:text-green py-2 px-1 transition-colors group cursor-pointer"
                aria-label="Watch video story about Gold Mountain Wellness Resort"
              >
                <div className="w-10 h-10 rounded-full border border-green/30 group-hover:border-gold flex items-center justify-center text-green group-hover:text-gold transition-all duration-300 bg-white/60 backdrop-blur-xs shadow-xs">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="group-hover:text-gold transition-colors">Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom signature accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      </section>

      {/* ========================================================================= */}
      {/* FEATURE STRIP — 4 FOUNDATIONAL PILLARS */}
      {/* ========================================================================= */}
      <section className="bg-ivory border-b border-gold/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex items-start gap-4 p-3 rounded hover:bg-white/60 transition-colors">
            <div className="w-10 h-10 rounded-full bg-green/10 text-green flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <h3 className="text-xs uppercase font-semibold tracking-wider text-green">
                Wellness
              </h3>
              <p className="text-xs text-green/75 mt-1 leading-relaxed">
                Healing for body, mind & soul tailored to your natural constitution.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded hover:bg-white/60 transition-colors">
            <div className="w-10 h-10 rounded-full bg-green/10 text-green flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <h3 className="text-xs uppercase font-semibold tracking-wider text-green">
                Nourishing Food
              </h3>
              <p className="text-xs text-green/75 mt-1 leading-relaxed">
                Farm-fresh, seasonal Sattvic meals prepared with mindful Ayurvedic care.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded hover:bg-white/60 transition-colors">
            <div className="w-10 h-10 rounded-full bg-green/10 text-green flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <h3 className="text-xs uppercase font-semibold tracking-wider text-green">
                Sacred Location
              </h3>
              <p className="text-xs text-green/75 mt-1 leading-relaxed">
                Arunachala to the east and Parvati Malai to the west in pure natural peace.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded hover:bg-white/60 transition-colors">
            <div className="w-10 h-10 rounded-full bg-green/10 text-green flex items-center justify-center shrink-0">
              <Sun className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <h3 className="text-xs uppercase font-semibold tracking-wider text-green">
                Meaningful Experiences
              </h3>
              <p className="text-xs text-green/75 mt-1 leading-relaxed">
                Darshan, cow shelter, fish pond, herbal walks and daily rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. WELLNESS SECTION — BODY, MIND & SOUL */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl border border-gold/30">
              <Image
                src="/assets/images/meditation-valley.jpg"
                alt="Meditation overlooking lush tropical valley at Gold Mountain"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <p className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Mind & Presence
                </p>
                <p className="text-sm font-serif italic mt-1 text-ivory/90">
                  "Stillness is not the absence of life, but the quiet rhythm of returning home."
                </p>
              </div>
            </div>
            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10 rounded-sm" />
          </div>

          {/* Right Column: Editorial Philosophy & Pillars */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              kicker="02 / WELLNESS PHILOSOPHY"
              title="Wellness for Body, Mind & Soul"
              subtitle="Ancient wisdom. Personalised care. A holistic approach to help you restore balance, release stress and create lasting lifestyle changes."
            />

            <p className="text-base text-green/80 leading-relaxed font-light mb-8">
              At Gold Mountain, wellness is not a clinical transaction or a rigid medical schedule. It is an experiential way of living where traditional therapies, mindful movement, organic nourishment, and natural serenity harmoniously converge.
            </p>

            {/* 5 Pillar Mini Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              {WELLNESS_PILLARS.slice(0, 4).map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-4 rounded bg-white/70 border border-green/10 hover:border-gold/50 transition-colors shadow-xs"
                >
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-dark">
                    {pillar.title}
                  </span>
                  <h4 className="text-sm font-serif text-green mt-1 font-medium">
                    {pillar.subtitle}
                  </h4>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/wellness" showArrow>
                Explore Wellness
              </Button>
              <Button
                variant="secondary"
                onClick={() => openEnquiry("Wellness")}
              >
                Enquire About Programmes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. STAY SECTION — A PEACEFUL PLACE TO STAY */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white/50 border-y border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Room Qualities */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
            <SectionHeading
              kicker="03 / SANCTUARY"
              title="A Peaceful Place to Stay"
              subtitle="Comfortable rooms, warm hospitality and serene surroundings designed for deep rest and rejuvenation."
            />

            <p className="text-base text-green/80 leading-relaxed font-light mb-6">
              Accommodation at Gold Mountain is created to support your healing journey. Natural timber, expansive balconies opening to tropical vegetation, and quiet ventilation allow you to unplug completely from external noise.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="border-l-2 border-gold pl-3 py-1">
                <span className="text-xs uppercase tracking-wider text-green font-semibold block">
                  Nature Surrounded
                </span>
                <span className="text-xs text-green/70">
                  Gardens, trees & clean air
                </span>
              </div>
              <div className="border-l-2 border-gold pl-3 py-1">
                <span className="text-xs uppercase tracking-wider text-green font-semibold block">
                  Thoughtful Spaces
                </span>
                <span className="text-xs text-green/70">
                  Private verandas & reading nooks
                </span>
              </div>
              <div className="border-l-2 border-gold pl-3 py-1">
                <span className="text-xs uppercase tracking-wider text-green font-semibold block">
                  Long Stay Friendly
                </span>
                <span className="text-xs text-green/70">
                  Comfortable weekly & monthly rates
                </span>
              </div>
              <div className="border-l-2 border-gold pl-3 py-1">
                <span className="text-xs uppercase tracking-wider text-green font-semibold block">
                  Comfort & Simplicity
                </span>
                <span className="text-xs text-green/70">
                  Natural materials & organic linen
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/stay" showArrow>
                View Rooms & Facilities
              </Button>
              <Button
                variant="secondary"
                onClick={() => openEnquiry("Stay")}
              >
                Enquire for Dates
              </Button>
            </div>
          </div>

          {/* Right Column: Room Photo */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[16/11] rounded-sm overflow-hidden shadow-xl border border-gold/30">
              <Image
                src="/assets/images/resort-room.jpg"
                alt="Serene resort room with wooden furnishings opening onto private nature terrace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full border border-gold/30 -z-10 rounded-sm" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. LOCATION SECTION — ARUNACHALA & PARVATI MALAI */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-green-deep text-ivory px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Subtle Mountain Panorama */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/images/location-panorama.png"
            alt="Arunachala mountain landscape panorama"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <SectionHeading
            kicker="04 / SACRED GEOGRAPHY"
            title="A Sacred Location Like No Other"
            subtitle="Arunachala to the east, Parvati Malai to the west, and nature all around."
            alignment="center"
            theme="dark"
          />

          {/* Spatial Relationship Diagram */}
          <div className="w-full my-8 p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-lg border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
            <div className="flex-1">
              <span className="text-xs uppercase tracking-widest text-gold font-medium">
                West Horizon
              </span>
              <h4 className="text-xl font-serif mt-1 text-ivory">
                Parvati Malai
              </h4>
              <p className="text-xs text-ivory/70 mt-1">
                Divine Shakti energy • Serene sunset ridges
              </p>
            </div>

            <div className="px-6 py-3 rounded-full bg-gold/20 border border-gold text-xs uppercase tracking-widest text-ivory font-semibold shrink-0">
              Gold Mountain Wellness Resort
            </div>

            <div className="flex-1">
              <span className="text-xs uppercase tracking-widest text-gold font-medium">
                East Horizon
              </span>
              <h4 className="text-xl font-serif mt-1 text-ivory">
                Arunachala
              </h4>
              <p className="text-xs text-ivory/70 mt-1">
                Tejolinga • Holy mountain of silence & awakening
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-light max-w-3xl mb-8">
            Situated on Kotangal Road in Adiannamalai, Gold Mountain rests in a tranquil agrarian basin just outside the busy temple town. The sacred mountain is not merely a sight—it is a tangible presence of stillness that calms restless thoughts and invites reflection.
          </p>

          <Button
            variant="gold"
            href="/experience"
            showArrow
          >
            Explore Location & Atmosphere
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. DINING / NOURISHMENT — LAND TO TABLE */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Land to Table Story */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              kicker="05 / NOURISHMENT"
              title="Food That Nourishes and Heals"
              subtitle="Wholesome, Ayurvedic meals made with farm-fresh ingredients and mindful care."
            />

            <p className="text-base text-green/80 leading-relaxed font-light mb-6">
              In our philosophy, food is an active medicine. We serve wholesome Sattvic meals prepared with produce gathered daily from our organic farm and herbal garden. Every recipe balances the doshas and aids gentle digestion.
            </p>

            {/* Step Progression: Farm -> Garden -> Kitchen -> Meal */}
            <div className="space-y-4 w-full mb-8">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark text-xs flex items-center justify-center shrink-0 font-semibold mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-green uppercase tracking-wide">
                    Organic Farm
                  </h4>
                  <p className="text-xs text-green/75">
                    Chemical-free local vegetables nurtured in living soil.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark text-xs flex items-center justify-center shrink-0 font-semibold mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-green uppercase tracking-wide">
                    Herbal Garden
                  </h4>
                  <p className="text-xs text-green/75">
                    Fresh tulsi, medicinal herbs, and digestive spices picked before each meal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark text-xs flex items-center justify-center shrink-0 font-semibold mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-green uppercase tracking-wide">
                    Mindful Kitchen
                  </h4>
                  <p className="text-xs text-green/75">
                    Cooked with love, gentle heat, and Ayurvedic balance—free of heavy preservatives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark text-xs flex items-center justify-center shrink-0 font-semibold mt-0.5">
                  4
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-green uppercase tracking-wide">
                    Restorative Meal
                  </h4>
                  <p className="text-xs text-green/75">
                    Light, sustaining nourishment that clears lethargy and supports therapy.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="primary" href="/wellness" showArrow>
              Discover Food Philosophy
            </Button>
          </div>

          {/* Right Column: Authentic Food Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-gold/30">
              <Image
                src="/assets/images/nourishing-food.jpg"
                alt="Ayurvedic Sattvic roasted vegetable bowl with fragrant golden spices"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10 rounded-sm" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. EXPERIENCE TRACK — MORE THAN A STAY */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white/40 border-t border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              kicker="06 / EXPERIENCES"
              title="Experiences That Stay With You"
              subtitle="More than a stay. A place shaped by nature, tradition, and a deeper connection to sacred rhythm."
              className="mb-0"
            />
            <Button variant="link" href="/experience" showArrow className="shrink-0">
              View All Experiences
            </Button>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="bg-ivory rounded-sm overflow-hidden border border-green/15 hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-green-deep/85 backdrop-blur-xs text-gold text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                    {exp.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-green font-normal group-hover:text-gold-dark transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-green/75 mt-2 leading-relaxed font-light">
                      {exp.summary}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-green/10 flex items-center justify-between text-xs text-green font-medium">
                    <span>Discover More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. STAY & PACKAGES — CHOOSE YOUR JOURNEY */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          kicker="07 / CHOOSE YOUR JOURNEY"
          title="Stays & Structured Programmes"
          subtitle="Whether visiting for a weekend reset or an extended month of restoration, find the stay that matches your intention."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1: Wellness Packages */}
          <div className="bg-white/80 rounded-sm border border-gold/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold block mb-2">
                Structured Programmes
              </span>
              <h3 className="text-2xl font-serif text-green">
                Wellness Packages
              </h3>
              <p className="text-xs text-green/75 mt-2 leading-relaxed">
                Tailored journeys combining daily therapies, guided meditation, and Sattvic food.
              </p>

              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-green/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span><strong>7-Day</strong> Wellness Journey (from ₹45,000)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span><strong>14-Day</strong> Healing Retreat (from ₹88,000)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span><strong>21-Day</strong> Ayurveda Program (from ₹1,25,000)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-green/10 mt-8">
              <Button
                variant="secondary"
                href="/wellness#programmes"
                className="w-full"
                showArrow
              >
                View Programmes
              </Button>
            </div>
          </div>

          {/* Card 2: Monthly Stays */}
          <div className="bg-white/80 rounded-sm border border-gold/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold block mb-2">
                Extended Sanctuary
              </span>
              <h3 className="text-2xl font-serif text-green">
                Monthly Stays
              </h3>
              <p className="text-xs text-green/75 mt-2 leading-relaxed">
                Long-stay living rooted in nature, calm work routines, and ongoing rejuvenation.
              </p>

              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-green/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span><strong>30-Day</strong> Wellness Living (from ₹1,25,000)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Private garden or mountain veranda suite</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Full access to daily morning yoga & gardens</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-green/10 mt-8">
              <Button
                variant="secondary"
                href="/stay"
                className="w-full"
                showArrow
              >
                Explore Monthly Stays
              </Button>
            </div>
          </div>

          {/* Card 3: Plan Your Stay Conversion Card */}
          <div className="bg-green text-ivory rounded-sm border border-gold p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                Direct Inquiry
              </span>
              <h3 className="text-2xl font-serif text-ivory">
                Plan Your Stay
              </h3>
              <p className="text-xs sm:text-sm text-ivory/80 mt-2 leading-relaxed font-light">
                Share your dates and preferences. We will review availability and get back to you personally.
              </p>

              <div className="mt-6 p-3 bg-white/10 rounded border border-gold/20 text-xs text-ivory/70">
                <p>
                  <strong>No automated booking engine:</strong> Every inquiry is handled personally by our guest relations team.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <button
                onClick={() => openEnquiry("General")}
                className="w-full py-3 bg-gold hover:bg-gold-light text-green font-semibold rounded text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                Send Enquiry Form
              </button>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1E7E34] hover:bg-[#19692C] text-ivory rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Enquire on WhatsApp
              </a>

              <p className="text-center text-[11px] text-ivory/60 pt-1">
                We usually reply within the hour (9am – 8pm).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08. TRUST BAR — GENUINE VALUES */}
      {/* ========================================================================= */}
      <section className="bg-ivory border-y border-gold/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="space-y-1.5 p-2">
            <span className="text-xs uppercase font-semibold text-green block">
              100% Private
            </span>
            <span className="text-xs text-green/70">
              One-on-one personal guidance
            </span>
          </div>

          <div className="space-y-1.5 p-2">
            <span className="text-xs uppercase font-semibold text-green block">
              Experienced Experts
            </span>
            <span className="text-xs text-green/70">
              Traditional therapists & yoga guides
            </span>
          </div>

          <div className="space-y-1.5 p-2">
            <span className="text-xs uppercase font-semibold text-green block">
              Natural & Authentic
            </span>
            <span className="text-xs text-green/70">
              Rooted in tradition and pure nature
            </span>
          </div>

          <div className="space-y-1.5 p-2">
            <span className="text-xs uppercase font-semibold text-green block">
              Global Guests
            </span>
            <span className="text-xs text-green/70">
              Warmly welcoming world travelers
            </span>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-1.5 p-2">
            <span className="text-xs uppercase font-semibold text-green block">
              Safe & Trusted
            </span>
            <span className="text-xs text-green/70">
              Your peace and comfort are priority
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09. BLOG / JOURNAL — STORIES FROM GOLD MOUNTAIN */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            kicker="09 / JOURNAL"
            title="Stories from Gold Mountain"
            subtitle="Thoughts on wellness, nature, food, Ayurveda and life around sacred Arunachala."
            className="mb-0"
          />
          <Button variant="link" href="/blog" showArrow className="shrink-0">
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-sm overflow-hidden border border-green/10 hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-green-deep/90 text-gold text-[10px] uppercase font-semibold px-2 py-0.5 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-green/60 uppercase tracking-wider mb-2">
                    {post.date} • {post.readTime}
                  </div>
                  <h3 className="text-xl font-serif text-green leading-snug group-hover:text-gold-dark transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-green/75 mt-3 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-green/10 flex items-center justify-between text-xs text-gold font-medium">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FINAL CONVERSION BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-green text-ivory px-4 sm:px-6 lg:px-8 border-t border-gold/40 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Begin Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-ivory mt-3 mb-6 font-normal">
            Your Time at Gold Mountain Begins Here.
          </h2>
          <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-light max-w-2xl mx-auto mb-10">
            Plan your stay, explore our wellness offerings, or simply speak with our team to understand how Gold Mountain can support your restoration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1E7E34] hover:bg-[#19692C] text-ivory rounded text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>

            <Button
              variant="outline-light"
              size="lg"
              onClick={() => openEnquiry("General")}
              className="w-full sm:w-auto"
            >
              Send an Enquiry
            </Button>
          </div>

          <p className="text-xs text-ivory/60 mt-8">
            Or email us directly at: <a href={`mailto:${CONTACT_INFO.email}`} className="text-gold underline">{CONTACT_INFO.email}</a>
          </p>
        </div>
      </section>

      {/* Reusable Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory={selectedCategory}
      />

      {/* Video Story Modal */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gold Mountain Story"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div className="relative w-full max-w-4xl bg-green-deep border border-gold/40 rounded-sm overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-ivory/15 bg-green">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Gold Mountain Story • Sacred Arunachala
                </span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 text-ivory/70 hover:text-ivory hover:bg-white/10 rounded transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cinematic Still & Ambient Presentation */}
            <div className="relative aspect-video w-full bg-black">
              <Image
                src="/assets/images/hero-arunachala.png"
                alt="Gold Mountain Wellness Resort overview"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-end p-6 sm:p-10">
                <span className="text-gold text-xs uppercase tracking-widest font-semibold mb-2">
                  Tiruvannamalai, Tamil Nadu
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-ivory max-w-xl">
                  Where Sacred Tradition Meets Pristine Serenity
                </h3>
                <p className="text-xs sm:text-sm text-ivory/80 mt-2 max-w-lg font-light leading-relaxed">
                  Nestled quietly between holy Arunachala and Parvati Malai, Gold Mountain is designed for restorative wellness, authentic Ayurvedic care, and peaceful contemplation.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => {
                      setVideoModalOpen(false);
                      openEnquiry("Stay");
                    }}
                  >
                    Plan Your Visit
                  </Button>
                  <button
                    onClick={() => setVideoModalOpen(false)}
                    className="text-xs uppercase tracking-widest text-ivory/70 hover:text-ivory font-medium transition-colors"
                  >
                    Return to Site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
