"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, Terminal } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#FF1E27] text-white py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>Let&apos;s Build Your Project</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Ready to build your next software application?
          </h2>

          <p className="text-white/95 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Schedule a conversation with our senior software engineers to review your product ideas, technical architecture, and project budget.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-950 text-sm sm:text-base font-bold uppercase tracking-wider px-8 py-4 rounded-md transition-all shadow-xl"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="w-5 h-5 text-[#FF1E27]" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-black text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-md border border-white/20 transition-all shadow-md"
            >
              <Terminal className="w-4 h-4 text-[#FF5E65]" />
              <span>Explore All Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
