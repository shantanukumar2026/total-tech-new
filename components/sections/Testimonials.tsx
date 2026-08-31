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
        "Their automated OCR and document classification AI pipeline saved our operations team over 120 hours each week. The system has run with zero downtime since day one.",
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
    <section className="bg-[#0b0c10] text-white py-20 border-t border-neutral-800 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
            Client Success & Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Trusted by tech leaders and fast-growing teams.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Here is what engineering managers and founders say about collaborating directly with Total Tech.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-md bg-[#12141a] border border-neutral-800 hover:border-neutral-700 transition-colors relative"
            >
              <div>
                {/* Rating & Metric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FF1E27]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FF1E27]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-xs bg-[#FF1E27]/10 text-[#FF1E27] border border-[#FF1E27]/20">
                    {item.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-xs text-white">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF1E27]" />
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {item.role} &bull; <span className="text-neutral-300">{item.company}</span>
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
