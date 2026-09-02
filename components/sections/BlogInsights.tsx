"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen, ArrowUpRight, FileText } from "lucide-react";

interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageSrc: string;
  author: {
    name: string;
    role: string;
  };
  slug: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "nextjs-scaling",
    category: "Software Development",
    title: "How to Build Fast, Scalable Web Apps with Next.js and React",
    excerpt:
      "A practical guide on structuring scalable frontends, server components, and API routes for high traffic and fast page load times.",
    date: "Aug 28, 2026",
    readTime: "5 min read",
    imageSrc: "/assets/web-app/gettyimages-2224771409-1024x1024.jpg",
    author: {
      name: "Marcus Vance",
      role: "Lead Frontend Engineer",
    },
    slug: "/blog/building-scalable-nextjs-apps",
  },
  {
    id: "practical-ai-automation",
    category: "AI & Automation",
    title: "Practical AI for Business: Automating Repetitive Workflows Safely",
    excerpt:
      "How modern companies use custom AI models and document scanning to save hundreds of hours every month without exposing private data.",
    date: "Aug 20, 2026",
    readTime: "6 min read",
    imageSrc: "/assets/web-app/gettyimages-2282715524-1024x1024.jpg",
    author: {
      name: "David Chen",
      role: "AI Solutions Architect",
    },
    slug: "/blog/practical-ai-workflow-automation",
  },
  {
    id: "cloud-migration-guide",
    category: "Cloud & DevOps",
    title: "Cloud Migration 101: Moving from Legacy Servers to Modern Cloud",
    excerpt:
      "Key lessons and step-by-step checklists for moving databases, microservices, and apps to AWS and Azure with zero downtime.",
    date: "Aug 12, 2026",
    readTime: "7 min read",
    imageSrc: "/assets/web-app/gettyimages-2251424960-1024x1024.jpg",
    author: {
      name: "Elena Rostova",
      role: "Head of Cloud Operations",
    },
    slug: "/blog/legacy-to-cloud-migration-guide",
  },
];

export default function BlogInsights() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Software Development", "AI & Automation", "Cloud & DevOps"];

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <section className="bg-[#0b0c10] text-white py-18 lg:py-22 border-t border-neutral-800 relative">
      <div className="max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E27]/15 border border-[#FF1E27]/40 text-[#FF5E65] text-xs font-bold uppercase tracking-wider mb-3.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Latest Articles & Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineering Insights & Tech Guides
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              Practical guides, architecture tips, and technical writeups written directly by our software and cloud developers.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#161922] p-1.5 rounded-lg border border-neutral-700 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#FF1E27] text-white shadow-sm"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between rounded-xl bg-[#141721] border border-neutral-700 hover:border-neutral-500 transition-all duration-200 overflow-hidden group"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-sm bg-neutral-950 text-[#FF5E65] font-bold text-xs uppercase tracking-wider border border-neutral-700 shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 sm:p-7">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF5E65] transition-colors leading-snug mb-3">
                    <Link href={post.slug} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-0 border-t border-neutral-800 flex items-center justify-between mt-auto">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">{post.author.name}</p>
                  <p className="text-xs text-neutral-400">{post.author.role}</p>
                </div>

                <Link
                  href={post.slug}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#FF5E65] hover:text-[#FF1E27] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Enterprise Whitepaper Download & Dispatch Callout */}
        <div className="rounded-xl border border-neutral-700 bg-[#141721] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 text-[#FF5E65] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Download Our 2026 Web & Cloud Architecture Guide
              </h4>
              <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
                A practical guide covering best practices for building high-speed web apps, reducing cloud hosting costs, and structuring reliable backend APIs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-md transition-all shadow-md w-full sm:w-auto text-center"
            >
              <span>Download Free Guide</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded-md transition-colors border border-neutral-700 w-full sm:w-auto text-center"
            >
              <span>View All Articles</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
