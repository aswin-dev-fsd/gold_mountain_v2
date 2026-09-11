"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Sun,
  Moon,
  Clock,
  Compass,
  Heart,
  Trees,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { EnquiryModal } from "@/components/EnquiryModal";
import { EXPERIENCES, CONTACT_INFO } from "@/lib/data";

const DAY_TIMELINE = [
  {
    time: "06:00 AM – 07:30 AM",
    title: "Dawn & Morning Awakening",
    description: "Gentle sunrise light filters across the Arunachala ridge. Join our open-air pavilion for joint-loosening movements, guided breathwork (Pranayama), and quiet contemplation as nature awakens.",
  },
  {
    time: "08:00 AM – 09:30 AM",
    title: "Nourishing Sattvic Breakfast",
    description: "Freshly prepared stewed fruits, light grains, herbal teas, and seasonal morning broths formulated to awaken digestive fire without heaviness.",
  },
  {
    time: "10:00 AM – 01:00 PM",
    title: "Therapeutic Ayurvedic Sessions",
    description: "Dedicated time for individual herbal oil therapies (Abhyanga, Shirodhara, Pinda Sweda) administered by trained therapists in peaceful, fragrant treatment suites.",
  },
  {
    time: "01:00 PM – 02:30 PM",
    title: "Midday Farm Harvest Lunch",
    description: "The primary meal of the day featuring freshly plucked heirloom vegetables from our organic farm plots, seasoned with digestive Ayurvedic spices.",
  },
  {
    time: "02:30 PM – 05:00 PM",
    title: "Spacious Afternoon & Nature Walks",
    description: "Time for quiet rest, reading on your private veranda, observing our cow shelter, or strolling the herbal garden with our botanist.",
  },
  {
    time: "05:30 PM – 06:45 PM",
    title: "Sunset Meditation & Darshan",
    description: "As the sun dips behind Parvati Malai to the west, we gather for guided silent meditation facing the sacred eastern silhouette of Arunachala.",
  },
  {
    time: "07:15 PM – 08:30 PM",
    title: "Light Evening Nourishment & Rest",
    description: "A gentle, easily digestible evening meal followed by nightfall stillness under rural Tamil Nadu's starry skies, encouraging deep sleep.",
  },
];

export default function ExperiencePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================================= */}
      {/* 01. EXPERIENCE HERO */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[70vh] md:min-h-[78vh] flex items-center justify-center bg-green-deep text-ivory px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
        aria-label="Experiences at Gold Mountain"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/resort-architecture.png"
            alt="Gold Mountain Wellness Resort architecture and landscape gardens"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/90 via-green-deep/60 to-green-deep/35" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/10 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC CONNECTION • TRADITION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ivory font-normal leading-tight tracking-tighter">
            Experience the Place Beyond the Stay.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ivory/90 font-light max-w-2xl leading-relaxed">
            Gold Mountain is more than accommodation or treatment. It is a living sanctuary woven from nature, ancient spiritual geography, compassionate farm life, and quiet contemplation.
          </p>

          <div className="mt-8">
            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                const el = document.getElementById("stories");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Discover Our Experiences
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      </section>

      {/* ========================================================================= */}
      {/* 02. DETAILED EXPERIENCES */}
      {/* ========================================================================= */}
      <section id="stories" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          kicker="AUTHENTIC ENCOUNTERS"
          title="Rooted in Nature, Shaped by Tradition"
          subtitle="Each experience at Gold Mountain connects you intimately to the earth, the animals, and the ancient spiritual heritage of Tiruvannamalai."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-white/80 rounded-sm border border-gold/30 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-green-deep/90 text-gold text-[10px] uppercase font-semibold px-2.5 py-1 rounded">
                  {exp.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-green">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-gold-dark font-medium mt-1">
                    {exp.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-green/80 mt-3 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. SIGNATURE RHYTHM — A DAY AT GOLD MOUNTAIN */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white/50 border-y border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            kicker="CIRCADIAN HARMONY"
            title="A Day at Gold Mountain"
            subtitle="How time flows when guided by the natural sun, gentle movement, nourishing meals, and restorative therapies."
            alignment="center"
          />

          <div className="mt-14 space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-5 before:w-0.5 before:bg-gold/30">
            {DAY_TIMELINE.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 sm:gap-6 pl-8 sm:pl-12 group"
              >
                {/* Dot */}
                <div className="absolute left-1.5 sm:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-ivory border-2 border-gold group-hover:bg-gold transition-colors" />

                <div className="bg-ivory p-6 rounded-sm border border-gold/30 shadow-xs w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-xs uppercase font-semibold tracking-wider text-gold-dark">
                      {item.time}
                    </span>
                    <h4 className="text-lg font-serif text-green font-medium">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-green/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-green text-ivory px-4 sm:px-6 lg:px-8 text-center border-t border-gold/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory">
            There is More to Discover Here.
          </h2>
          <p className="text-base text-ivory/85 mt-3 max-w-xl mx-auto leading-relaxed font-light">
            Whether participating in morning farm walks or resting in evening contemplation, Gold Mountain welcomes you with open warmth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => setModalOpen(true)}
            >
              Plan Your Stay
            </Button>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1E7E34] hover:bg-[#19692C] text-ivory rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Speak with Our Team
            </a>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="Experience"
      />
    </div>
  );
}
