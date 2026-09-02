"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Clock,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CorporateOverview() {
  const reasons = [
    {
      icon: Users,
      title: "Talk Directly with the Developers",
      description:
        "When you have a question or want to make changes, you speak directly with the engineers working on your project. No middlemen, no sales reps, and no long email chains.",
      benefit: "Fast answers and clear communication every day.",
    },
    {
      icon: Clock,
      title: "See Real Progress Every 2 Weeks",
      description:
        "We build your software in clear, two-week steps. Every two weeks, we give you a live link to test what we built, so you always see exactly what you are paying for.",
      benefit: "Predictable schedules with no surprises.",
    },
    {
      icon: FileCheck,
      title: "You Own Everything We Build",
      description:
        "All the code, designs, and files belong 100% to your company from day one. You can host it anywhere, hire any team, or take it with you whenever you want.",
      benefit: "Complete freedom with zero vendor lock-in.",
    },
    {
      icon: ShieldCheck,
      title: "Safe, Secure, and Built to Last",
      description:
        "We test every screen and feature before it goes live. Your app is protected with strong security standards, loads quickly, and is ready for thousands of users.",
      benefit: "Reliable software that works smoothly 24/7.",
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-12 lg:py-16 border-t border-slate-200">
      <div className="max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header - Balanced 2-Column (Eliminates Blank Space) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#FF1E27] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF1E27]" />
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We are a software engineering team that builds apps people love to use.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-4">
              Total Tech is a dedicated team of software developers and designers. We help businesses create custom websites, mobile applications, and reliable business tools that make work easier and help companies grow.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-800">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Direct Developer Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Working Demos Every 2 Weeks
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                100% Code Ownership
              </span>
            </div>
          </div>
        </div>

        {/* Dual Corporate Visual Showcase (More Visuals, Less Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-8">
          
          {/* Visual 1: Engineering Team */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-300 bg-slate-900 shadow-sm group">
            <Image
              src="/assets/web-app/gettyimages-2169040419-1024x1024.jpg"
              alt="Total Tech Software Engineers & System Architects"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="px-2.5 py-1 rounded bg-[#FF1E27] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 inline-block">
                Software Engineering
              </span>
              <p className="text-base sm:text-lg font-bold text-white">Total Tech Development Team</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Senior full-stack developers, cloud architects, and QA engineers.</p>
            </div>
          </div>

          {/* Visual 2: Product Strategy & Client Collaboration */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-300 bg-slate-900 shadow-sm group">
            <Image
              src="/assets/img/gettyimages-1927881398-1024x1024.jpg"
              alt="Total Tech Client Collaboration & Product Strategy Session"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="px-2.5 py-1 rounded bg-slate-900 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 inline-block border border-white/20">
                Design & Strategy
              </span>
              <p className="text-base sm:text-lg font-bold text-white">Client Collaboration & Architecture</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Interactive wireframing, sprint reviews, and technical scoping sessions.</p>
            </div>
          </div>

        </div>

        {/* 4-Column Punchy Feature Grid (Visual & Concise) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-300 shadow-sm hover:border-red-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-[#FF1E27] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {item.benefit}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Have questions about your project or need advice?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Talk directly with our team to discuss ideas, costs, and timelines with no sales pressure.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-md transition-all shrink-0 shadow-sm"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
