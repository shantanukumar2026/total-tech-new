"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Terminal, Building2, FileCheck, Globe } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-[#07080b] text-white py-20 border-t border-neutral-800 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#FF1E27]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-md border border-neutral-800 bg-[#101217] p-8 sm:p-14 overflow-hidden">
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#FF1E27]/10 border border-[#FF1E27]/30 text-[#FF1E27] text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              Corporate Engineering Consultation
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Partner with Total Tech for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1E27] via-[#FF5E65] to-white">
                Enterprise Scale
              </span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Schedule an executive discovery session with our Principal Solutions Architects to evaluate architecture roadmaps, security compliance, and dedicated engineering squad allocation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-all shadow-[0_0_20px_rgba(255,30,39,0.3)] hover:shadow-[0_0_30px_rgba(255,30,39,0.5)]"
              >
                <span>Request Executive Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#181a24] hover:bg-[#222533] border border-neutral-700 text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-sm transition-all"
              >
                <Terminal className="w-4 h-4 text-[#FF1E27]" />
                <span>Explore Technical Capabilities</span>
              </Link>
            </div>

            {/* Corporate Assurances */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-xs text-neutral-400 font-mono border-t border-neutral-800/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF1E27]" />
                <span>Contractual 99.99% SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#FF1E27]" />
                <span>100% Client IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#FF1E27]" />
                <span>Global Multi-Cloud Footprint</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
