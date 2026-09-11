"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { BLOG_POSTS, BlogPost } from "@/lib/data";

const CATEGORIES = [
  "All",
  "Wellness",
  "Ayurveda",
  "Food",
  "Nature",
  "Arunachala",
  "Life at Gold Mountain",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================================= */}
      {/* 01. BLOG HERO */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[50vh] md:min-h-[58vh] flex items-center justify-center bg-green-deep text-ivory px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 overflow-hidden"
        aria-label="Gold Mountain Journal & Stories"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-arunachala.png"
            alt="Arunachala mountain horizon"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep via-green-deep/70 to-green-deep/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/10 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>JOURNAL • ESSAYS & GUIDES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ivory font-normal leading-tight tracking-tighter">
            Stories from Gold Mountain.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-ivory/85 font-light max-w-2xl leading-relaxed">
            Thoughts on wellness, nature, food, Ayurveda and life around sacred Arunachala. Designed to inform, inspire, and answer your pre-travel questions.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      </section>

      {/* ========================================================================= */}
      {/* 02. CATEGORIES FILTER */}
      {/* ========================================================================= */}
      <section className="bg-ivory border-b border-gold/20 py-6 px-4 sm:px-6 lg:px-8 sticky top-[84px] z-30 backdrop-blur-md bg-ivory/95">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-green text-ivory shadow-sm"
                  : "bg-white/80 text-green/80 hover:text-green hover:bg-white border border-green/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. ARTICLES GRID */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-sm overflow-hidden border border-green/15 hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  <p className="text-xs text-green/75 mt-3 line-clamp-3 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-green/10 flex items-center justify-between text-xs text-gold font-medium">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
