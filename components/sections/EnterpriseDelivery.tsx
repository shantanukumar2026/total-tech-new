"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, FileCheck, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function EnterpriseDelivery() {
  const phases = [
    {
      step: "01",
      title: "Discovery & Planning",
      timeline: "Phase 01",
      description: "We define system architecture, data models, and a transparent delivery roadmap with fixed milestone estimates.",
      imageSrc: "/assets/web-app/gettyimages-2264962187-1024x1024.jpg",
      deliverables: [
        "Technical Architecture Plan",
        "Scope & Milestone Roadmap",
        "Fixed Timeline & Cost Model",
      ],
    },
    {
      step: "02",
      title: "Design & Development",
      timeline: "Phase 02",
      description: "Senior developers build in 2-week agile sprints, providing working demos on live staging links every 14 days.",
      imageSrc: "/assets/web-app/gettyimages-2262805356-1024x1024.jpg",
      deliverables: [
        "Bi-Weekly Progress Demos",
        "Automated Testing Suites",
        "Direct Engineer Collaboration",
      ],
    },
    {
      step: "03",
      title: "Testing & Security Audit",
      timeline: "Phase 03",
      description: "Rigorous quality assurance, penetration testing, and multi-device validation before production rollout.",
      imageSrc: "/assets/web-app/gettyimages-2251424960-1024x1024.jpg",
      deliverables: [
        "Zero-Downtime Cloud Deployment",
        "100% Source Code Handover",
        "Admin & Team Documentation",
      ],
    },
    {
      step: "04",
      title: "Cloud Support & Growth",
      timeline: "Phase 04",
      description: "Continuous 24/7 server monitoring, routine security patches, and ongoing engineering support.",
      imageSrc: "/assets/img/gettyimages-2148703154-1024x1024.jpg",
      deliverables: [
        "24/7 Cloud Monitoring",
        "Dedicated Technical Support",
        "Continuous Performance Tuning",
      ],
    },
  ];

  return (
    <section className="bg-slate-100/90 text-slate-900 py-12 lg:py-16 border-t border-slate-200">
      <div className="max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header - Balanced 12-Column Corporate Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-8 border-b border-slate-300">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#FF1E27] text-xs font-bold uppercase tracking-wider mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#FF1E27]" />
              How We Work &bull; Delivery Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Disciplined, Transparent Software Engineering Process
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We deliver enterprise software through structured, milestone-driven sprints. You receive continuous visibility, regular live demonstrations, and direct collaboration with senior engineers at every phase.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-300 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">2-Week Agile Delivery Cycles</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Test working software demos on live staging links every 14 days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Senior Engineer Access</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Speak directly to the developers building your software without middlemen.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Full Code & IP Ownership</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Complete source code and assets transferred to your accounts with zero lock-in.</p>
                </div>
              </div>
            </div>

            <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Need project pricing?</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-all shadow-sm"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Phase Visual Lifecycle Grid (More Visuals, Less Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {phases.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-300 shadow-sm hover:border-red-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Header Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/90 text-white font-bold text-xs uppercase tracking-wider border border-white/20">
                    Phase {item.step}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    <span className="text-xs font-bold uppercase text-slate-500 tracking-wider block mb-1">Key Deliverables</span>
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#FF1E27] shrink-0" />
                        <span className="leading-tight">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate RFP Banner */}
        <div className="rounded-2xl border border-slate-300 bg-white shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Have a Project Specification or Request for Proposal (RFP)?
            </h4>
            <p className="text-sm text-slate-600">
              Send us your project brief or specifications. Our engineering leadership will review it and prepare a detailed architecture plan and budget.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-md transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Send Us Your Specs</span>
            <ArrowRight className="w-4 h-4 text-[#FF1E27]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
