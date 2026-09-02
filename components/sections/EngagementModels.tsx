"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap, Shield, Clock, Users, Flame } from "lucide-react";

export default function EngagementModels() {
  const models = [
    {
      title: "Fixed-Scope Delivery",
      tagline: "For well-defined MVPs and targeted feature modules",
      badge: "Predictable Budget",
      badgeColor: "bg-neutral-800 text-neutral-300 border-neutral-700",
      description: "Fixed scope, clear milestone milestones, and guaranteed delivery schedule for distinct projects.",
      features: [
        "Detailed architecture & discovery blueprint",
        "Clear deliverables & fixed milestone payments",
        "Weekly demo checkpoints & code reviews",
        "30-day post-launch warranty & bug fixes",
        "Full IP and source code handover",
      ],
      ctaText: "Request Scope Estimate",
      ctaHref: "/contact",
      highlight: false,
    },
    {
      title: "Dedicated Sprint Squad",
      tagline: "For scaling platforms and rapid product evolution",
      badge: "Most Popular",
      badgeColor: "bg-[#FF1E27] text-white border-[#FF1E27]",
      description: "Direct access to dedicated senior full-stack developers, AI engineers, and DevOps architects.",
      features: [
        "Dedicated senior engineers integrated in your Slack",
        "Flexible bi-weekly agile sprint allocation",
        "Direct daily collaboration without middle managers",
        "Continuous CI/CD deployment & code reviews",
        "Scale squad size up or down as required",
        "Direct access to Principal Solution Architect",
      ],
      ctaText: "Reserve Sprint Capacity",
      ctaHref: "/contact",
      highlight: true,
    },
    {
      title: "Cloud & AI SRE Retainer",
      tagline: "For enterprise maintenance, 24/7 reliability, & optimization",
      badge: "Mission Critical",
      badgeColor: "bg-neutral-800 text-neutral-300 border-neutral-700",
      description: "Proactive infrastructure monitoring, security patching, SLA uptime guarantees, and model fine-tuning.",
      features: [
        "24/7 automated monitoring & on-call SRE alerts",
        "99.99% system uptime SLA commitment",
        "Monthly security audits & dependency upgrades",
        "Continuous database & cloud cost optimization",
        "Guaranteed emergency incident response times",
      ],
      ctaText: "Discuss SLA Retainer",
      ctaHref: "/contact",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#0b0c10] text-white py-20 border-t border-neutral-800 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
            Flexible Partnership
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Transparent Engagement Models
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Choose the collaboration model that best aligns with your team&apos;s velocity, roadmap, and budget.
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {models.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-8 rounded-md bg-[#12141a] border transition-all duration-300 relative ${
                item.highlight
                  ? "border-[#FF1E27] shadow-[0_0_30px_rgba(255,30,39,0.15)] ring-1 ring-[#FF1E27]/50"
                  : "border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                  {item.highlight && (
                    <span className="flex items-center gap-1 text-xs text-[#FF1E27] font-semibold">
                      <Flame className="w-4 h-4 fill-[#FF1E27]" />
                      High Demand
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 mb-4">
                  {item.tagline}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed pb-6 border-b border-neutral-800">
                  {item.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 py-6 text-sm text-neutral-300">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#FF1E27] flex-shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-neutral-800/80">
                <Link
                  href={item.ctaHref}
                  className={`w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 py-3 rounded-sm transition-all ${
                    item.highlight
                      ? "bg-[#FF1E27] hover:bg-[#E0151E] text-white shadow-md"
                      : "bg-neutral-800 hover:bg-neutral-700 text-white"
                  }`}
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
