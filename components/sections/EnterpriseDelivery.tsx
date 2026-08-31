"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, FileCheck, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function EnterpriseDelivery() {
  const phases = [
    {
      step: "01",
      title: "Architecture & Risk Discovery",
      timeline: "Phase 01",
      description:
        "Comprehensive analysis of existing systems, security threat modeling, API integration mapping, and architecture blueprint delivery.",
      deliverables: [
        "System Architecture Specification",
        "Security & Compliance Matrix",
        "Milestone Timeline & Cost Model",
      ],
    },
    {
      step: "02",
      title: "Dedicated POD Sprint Execution",
      timeline: "Phase 02",
      description:
        "Senior engineering squad builds modular services in bi-weekly sprints with automated CI/CD pipelines and live milestone demonstrations.",
      deliverables: [
        "Bi-Weekly Production-Ready Sprints",
        "Automated Test & SAST Pipelines",
        "Shared Slack/Git Collaboration",
      ],
    },
    {
      step: "03",
      title: "Commissioning & Full IP Transfer",
      timeline: "Phase 03",
      description:
        "Zero-downtime production cutover, load testing, comprehensive documentation, and 100% intellectual property transfer to your organization.",
      deliverables: [
        "Zero-Downtime Multi-Cloud Launch",
        "Full Source Code & Repository Handover",
        "Executive Handover Documentation",
      ],
    },
    {
      step: "04",
      title: "SRE Governance & SLA Assurance",
      timeline: "Phase 04",
      description:
        "Proactive infrastructure monitoring, continuous vulnerability patching, database optimization, and guaranteed uptime response.",
      deliverables: [
        "24/7 Automated SRE Monitoring",
        "Contractually Backed 99.99% SLA",
        "Continuous Security Patching",
      ],
    },
  ];

  return (
    <section className="bg-[#090a0d] text-white py-20 border-t border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
              Enterprise Delivery Framework
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Disciplined Engineering Lifecycle
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Our structured enterprise delivery methodology ensures predictable execution, regulatory compliance, and total transparency from inception to long-term operations.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-sm transition-colors"
          >
            <span>Initiate Discovery Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Phase Lifecycle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-md bg-[#12141a] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#FF1E27] font-mono">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {item.timeline}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="pt-4 border-t border-neutral-800/80 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">Key Deliverables:</span>
                {item.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3 h-3 text-[#FF1E27] flex-shrink-0" />
                    <span className="text-[11px] leading-tight">{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate RFP Banner */}
        <div className="rounded-md border border-neutral-800 bg-[#101217] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Submitting a Corporate RFP or Enterprise Specification?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Our solutions architecture group provides comprehensive RFP technical proposals within 3 to 5 business days.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#171922] hover:bg-[#222633] border border-neutral-700 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 py-3 rounded-sm transition-colors whitespace-nowrap"
          >
            <span>Submit RFP / Spec</span>
            <ArrowRight className="w-4 h-4 text-[#FF1E27]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
