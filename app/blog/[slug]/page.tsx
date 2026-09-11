import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, MessageCircle } from "lucide-react";
import { BLOG_POSTS, CONTACT_INFO } from "@/lib/data";
import { Button } from "@/components/Button";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Gold Mountain Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="flex flex-col w-full">
      {/* Header / Breadcrumb */}
      <div className="bg-white/60 border-b border-gold/20 pt-28 sm:pt-32 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-green/70">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 hover:text-gold transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Stories</span>
          </Link>
          <span className="uppercase tracking-wider text-[11px] font-semibold text-gold-dark">
            {post.category}
          </span>
        </div>
      </div>

      {/* Article Hero */}
      <header className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-semibold mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-green leading-[1.18] tracking-tight">
          {post.title}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-green/80 font-light max-w-2xl mx-auto leading-relaxed italic">
          "{post.excerpt}"
        </p>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full mt-10 rounded-sm overflow-hidden shadow-xl border border-gold/30">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </header>

      {/* Article Body */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full leading-relaxed font-light text-base sm:text-lg text-green/85 space-y-6">
        {post.content.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Informative International Note */}
        <div className="my-10 p-6 bg-white rounded border-l-4 border-gold text-sm text-green/80 space-y-2">
          <h4 className="font-serif text-green text-base font-semibold">
            Experiencing Life at Gold Mountain
          </h4>
          <p className="text-xs sm:text-sm leading-relaxed">
            Our wellness resort in Tiruvannamalai is dedicated to restorative stays, traditional South Indian therapies, and seasonal organic nutrition. If you are planning an international journey to India, our guest services team can assist with private transportation, accommodation arrangements, and custom therapy sequencing.
          </p>
        </div>
      </section>

      {/* Mid-Article CTA to Resort */}
      <section className="my-12 max-w-3xl mx-auto px-4 sm:px-6 w-full">
        <div className="p-8 bg-green text-ivory rounded-sm border border-gold text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Begin Your Stay
          </span>
          <h3 className="text-2xl font-serif text-ivory">
            Ready to Experience This in Person?
          </h3>
          <p className="text-sm text-ivory/80 max-w-md mx-auto leading-relaxed font-light">
            Enquire about our Short Stays, Wellness Stays, or tailored 7–21 day programmes in the presence of Arunachala.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="gold" href="/book">
              Plan Your Stay
            </Button>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E7E34] text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#19692C] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white/50 border-t border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xs uppercase tracking-widest text-gold-dark font-semibold mb-6">
            Related Stories
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-5 bg-ivory rounded-sm border border-green/15 hover:border-gold/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-green/60">
                    {rel.category} • {rel.readTime}
                  </span>
                  <h4 className="text-base font-serif text-green mt-1 group-hover:text-gold-dark transition-colors">
                    {rel.title}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-green/10 flex items-center justify-between text-xs text-gold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
