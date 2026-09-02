"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap, Shield } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter Architecture",
      price: "Custom",
      desc: "Ideal for growth teams building and deploying custom web applications and initial AI integrations.",
      features: [
        "Dedicated Engineering Sprint Team",
        "Next.js & Cloud-Native Stack",
        "API & Microservice Integration",
        "Standard CI/CD Deployment",
        "99.9% Uptime SLA",
      ],
      badge: "Fast Track",
      cta: "Start Project",
      href: "/contact",
      highlight: false,
    },
    {
      name: "Enterprise Accelerate",
      price: "Custom",
      desc: "For enterprises deploying custom LLMs, autonomous agents, and high-throughput cloud infrastructure.",
      features: [
        "Custom Enterprise LLM Fine-Tuning",
        "Zero-Trust Security & SOC2 Alignment",
        "Multi-Cloud Kubernetes Architecture",
        "24/7 SRE Monitoring & Support",
        "99.999% Fault-Tolerant SLA",
        "Direct Principal Architect Access",
      ],
      badge: "Most Popular",
      cta: "Schedule Architecture Review",
      href: "/contact",
      highlight: true,
    },
    {
      name: "Autonomous & Sovereign",
      price: "Custom",
      desc: "Full-scale custom engineering for physical robotics, digital twins, and sovereign supercomputing clusters.",
      features: [
        "End-to-End ROS 2 Robotics & Telemetry",
        "Omniverse Digital Twin Simulation",
        "On-Premise / Sovereign SuperPOD Setup",
        "Hardware-in-the-Loop Integration",
        "Dedicated 24/7 Mission-Critical Team",
        "Custom Cryptographic Zero-Trust",
      ],
      badge: "Sovereign AI",
      cta: "Deploy Sovereign Tier",
      href: "/contact",
      highlight: false,
    },
  ];

  return (
    <section className="relative bg-[#060606] text-white py-24 border-t border-[#181818]">
      <div className="max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#FF1E27]/10 border border-[#FF1E27]/25 text-[#FF1E27] text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            ENGAGEMENT MODELS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Enterprise Engagement & Deployment Tiers
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Transparent, SLA-backed engineering partnerships tailored to your mission-critical computing requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xs flex flex-col justify-between relative transition-all ${
                tier.highlight
                  ? "bg-[#111] border-2 border-[#FF1E27] shadow-[0_0_35px_rgba(255,30,39,0.2)]"
                  : "bg-[#0c0c0c] border border-[#222] hover:border-[#333]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF1E27] text-white text-[10px] uppercase font-extrabold px-3 py-0.5 rounded-xs tracking-widest">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  {!tier.highlight && (
                    <span className="text-[10px] font-mono text-neutral-400 border border-[#2a2a2a] px-2 py-0.5 rounded-xs">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {tier.desc}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#1c1c1c] mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#FF1E27] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={tier.href}
                className={`w-full text-center py-3 rounded-xs text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  tier.highlight
                    ? "bg-[#FF1E27] hover:bg-[#E0151E] text-white shadow-[0_0_15px_rgba(255,30,39,0.4)]"
                    : "bg-[#161616] hover:bg-[#222] text-white border border-[#2b2b2b]"
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
