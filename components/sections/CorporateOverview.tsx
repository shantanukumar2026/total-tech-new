"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Zap, ShieldCheck, Clock, Building2, Briefcase, ArrowRight } from "lucide-react";

export default function CorporateOverview() {
  const pillars = [
    {
      icon: Users,
      title: "Direct Principal Architect Engagement",
      description:
        "Enterprise clients interface directly with senior systems architects and principal software engineers, eliminating communication latency and management overhead.",
    },
    {
      icon: Zap,
      title: "High-Throughput Engineering Velocity",
      description:
        "Disciplined 2-week sprint cycles with continuous integration, automated testing suites, and weekly production-ready milestone releases.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Risk Mitigation & Compliance",
      description:
        "Full alignment with ISO 27001, SOC 2 Type II, and regional data privacy mandates across all software development lifecycles.",
    },
    {
      icon: Clock,
      title: "Guaranteed SLA & Mission-Critical Support",
      description:
        "Proactive 24/7 Site Reliability Engineering (SRE) with automated telemetry, instant failover, and strict contractually backed uptime SLAs.",
    },
  ];

  return (
    <section className="bg-[#0b0c10] text-white py-20 border-t border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
            Corporate Profile & Governance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Institutional-Grade Software & Systems Engineering
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            Total Tech provides enterprise organizations with high-velocity software engineering, cloud infrastructure modernization, and autonomous AI systems built for long-term scalability and regulatory rigor.
          </p>
        </div>

        {/* 2-Column Corporate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column: Corporate Team Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
              <Image
                src="/assets/web-app/gettyimages-2169040419-1024x1024.jpg"
                alt="Total Tech Senior Engineering Staff"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Engineering Headquarters</span>
                <span className="text-[#FF1E27] font-mono text-[10px] bg-black/60 px-2 py-0.5 rounded-xs border border-neutral-700">100% In-House</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Corporate Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-md bg-[#12141a] border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 text-[#FF1E27] flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
