"use client";

import React from "react";
import { ShieldCheck, Award, Server, Cpu, Globe, Cloud } from "lucide-react";

export default function StrategicPartnerships() {
  const partners = [
    {
      name: "AWS Partner Network",
      tier: "Advanced Tier Services",
      domain: "Cloud Architecture & Migration",
      icon: Cloud,
    },
    {
      name: "Microsoft Solutions Partner",
      tier: "Enterprise Cloud & AI",
      domain: "Azure Infrastructure & OpenAI",
      icon: Server,
    },
    {
      name: "NVIDIA Partner Network",
      tier: "Compute & Accelerated AI",
      domain: "GPU Clusters & Edge Robotics",
      icon: Cpu,
    },
    {
      name: "Google Cloud Ecosystem",
      tier: "Premier Services Tier",
      domain: "BigQuery, Kubernetes & MLOps",
      icon: Globe,
    },
  ];

  const standards = [
    { label: "ISO/IEC 27001", sub: "Information Security" },
    { label: "SOC 2 Type II", sub: "Security & Confidentiality" },
    { label: "HIPAA Compliant", sub: "Health Data Protection" },
    { label: "GDPR / CCPA", sub: "Global Data Privacy" },
    { label: "PCI-DSS Level 1", sub: "Financial Grade Processing" },
  ];

  return (
    <section className="bg-[#08090c] text-white py-14 border-t border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier Alliances */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF1E27] mb-2">
            Strategic Alliances & Ecosystem
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Enterprise Technology Alliances
          </h3>
          <p className="mt-2 text-sm text-neutral-400">
            Total Tech maintains deep engineering alliances with Tier-1 cloud providers, semiconductor leaders, and security consortia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {partners.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-md bg-[#101217] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF1E27] mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-0.5">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#FF1E27] uppercase tracking-wider mb-2">
                    {item.tier}
                  </p>
                </div>
                <p className="text-xs text-neutral-400 border-t border-neutral-800/80 pt-2.5">
                  {item.domain}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compliance Strip */}
        <div className="rounded-md bg-[#0d0f14] border border-neutral-800/80 p-5 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#FF1E27] flex-shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Corporate Compliance & Security Certifications:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {standards.map((std, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-sm bg-[#151821] border border-neutral-700/80 text-center"
              >
                <span className="block text-xs font-bold text-white font-mono">{std.label}</span>
                <span className="block text-[10px] text-neutral-400 font-sans">{std.sub}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
