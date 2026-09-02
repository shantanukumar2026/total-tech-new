"use client";

import React from "react";
import { ShieldCheck, Zap, Server, Users, Award, Clock } from "lucide-react";

export default function StatsMetrics() {
  const stats = [
    {
      value: "250+",
      label: "Projects Delivered",
      description: "Custom web applications, mobile apps, and cloud platforms shipped on schedule.",
      icon: Server,
    },
    {
      value: "99.9%",
      label: "Uptime & Reliability",
      description: "Tested cloud architectures built to keep your operations running 24/7.",
      icon: ShieldCheck,
    },
    {
      value: "100%",
      label: "In-House Senior Team",
      description: "Work directly with experienced developers and architects—no outsourced handoffs.",
      icon: Users,
    },
    {
      value: "10+ Yrs",
      label: "Industry Experience",
      description: "Proven track record building modern, scalable software across various industries.",
      icon: Clock,
    },
  ];

  return (
    <section className="bg-[#08090c] text-white py-16 border-t border-neutral-800/80 relative overflow-hidden">
      {/* Background glow ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#FF1E27]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-md bg-[#101217] border border-neutral-800/90 hover:border-[#FF1E27]/40 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(255,30,39,0.08)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF1E27] group-hover:bg-[#FF1E27]/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-300 group-hover:from-white group-hover:to-[#FFA0A4] transition-all">
                  {item.value}
                </div>

                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {item.label}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
