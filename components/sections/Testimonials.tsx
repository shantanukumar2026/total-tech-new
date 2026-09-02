"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Total Tech built our core customer portal from scratch in under 8 weeks. What impressed us most was having direct Slack access to their principal engineers—no translation layers, just flawless execution.",
      name: "Marcus Vance",
      role: "VP of Engineering",
      company: "Apex Cloud Networks",
      metric: "Launched in 8 Weeks",
      avatar: "MV",
    },
    {
      quote:
        "Their automated OCR and document classification AI pipeline saved our operations team over 120 hours each week. The system has run with zero uptime degradation since day one.",
      name: "Elena Rostova",
      role: "Chief Operating Officer",
      company: "Vanguard Logistics Global",
      metric: "120+ Hours Saved / Wk",
      avatar: "ER",
    },
    {
      quote:
        "We migrated our entire legacy infrastructure to AWS Kubernetes with Total Tech. They restructured our microservices, dropped our latency by 65%, and stayed strictly on budget.",
      name: "David Chen",
      role: "Head of Infrastructure",
      company: "Synapse Financial",
      metric: "65% Latency Drop",
      avatar: "DC",
    },
  ];

  return (
    <section className="bg-[#090b10] text-white py-20 lg:py-24 border-t border-neutral-800/90 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF1E27]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF1E27]/10 border border-[#FF1E27]/30 text-[#FF1E27] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E27]" />
            Client Success & Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted by tech leaders and enterprise engineering teams.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Here is what engineering leaders and founders report when collaborating directly with Total Tech principal architects.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-7 rounded-lg bg-[#11131a] border border-neutral-800 hover:border-[#FF1E27]/50 hover:shadow-[0_8px_30px_rgba(255,30,39,0.12)] transition-all duration-300 relative group"
            >
              <div>
                {/* Rating & Metric Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#FF1E27]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF1E27]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-xs bg-[#FF1E27]/10 text-[#FF1E27] border border-[#FF1E27]/30 shadow-xs">
                    {item.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-neutral-800/90 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-xs text-white shadow-inner">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF1E27]" />
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role} &bull; <span className="text-slate-300 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
