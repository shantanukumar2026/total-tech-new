"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Server,
  Shield,
  Activity,
  ArrowRight,
  HardDrive,
  Cpu,
  Lock,
  RefreshCw,
} from "lucide-react";

export default function GlobalInfrastructure() {
  const pillars = [
    {
      icon: Server,
      title: "Multi-Zone Server Redundancy",
      description:
        "Your applications run across independent cloud server zones in the United States and abroad. If any server encounters an issue, traffic automatically reroutes to keep your business operating without interruption.",
      highlights: ["Automatic Failover Protection", "Zero Single Point of Failure"],
    },
    {
      icon: Lock,
      title: "Enterprise Network Security",
      description:
        "We configure isolated Virtual Private Clouds (VPC) with automated firewall rules, encrypted communications, and role-based permissions to protect your proprietary business data.",
      highlights: ["End-to-End Data Encryption", "Automated Threat Filtering"],
    },
    {
      icon: RefreshCw,
      title: "Automated Backups & Disaster Recovery",
      description:
        "Your databases and files are automatically backed up on daily and weekly cycles, stored in physically separated data centers so your records can be restored quickly in any event.",
      highlights: ["Isolated Redundant Storage", "Rapid Data Restoration"],
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-18 lg:py-22 border-t border-slate-200">
      <div className="max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#FF1E27] text-xs font-bold uppercase tracking-wider mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#FF1E27]" />
              Cloud Architecture & Reliability
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Enterprise Cloud Hosting Built for Zero Downtime
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We deploy and manage mission-critical software across tier-1 cloud providers including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud with continuous monitoring and automated disaster recovery.
            </p>
          </div>

          <Link
            href="/services/cloud-devops"
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#FF1E27] hover:text-[#E0151E] transition-colors self-start lg:self-end pb-1 group"
          >
            <span>Explore Cloud Engineering Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Spotlight Showcase (NVIDIA-style Enterprise Hero Card) */}
        <div className="rounded-2xl border border-slate-300 bg-white overflow-hidden mb-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Cinematic Visual */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] bg-slate-950">
              <Image
                src="/assets/web-app/gettyimages-2224771564-1024x1024.jpg"
                alt="Total Tech Enterprise Cloud Infrastructure"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white" />
            </div>

            {/* Right: Architectural Overview */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF1E27] block mb-2">
                  Production Infrastructure
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug mb-3">
                  High-Availability Cloud Hosting That Grows with Your Business
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
                  Whether serving hundreds of daily enterprise users or millions of public visitors, our infrastructure configurations scale dynamically to eliminate slowdowns and maintain flawless uptime.
                </p>

                {/* 3 Core Architecture Guarantees */}
                <div className="space-y-3.5 pt-3 border-t border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-red-50 border border-red-100 text-[#FF1E27] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Tier-1 Cloud Providers</h4>
                      <p className="text-xs sm:text-sm text-slate-600">Deployed exclusively on Amazon AWS, Google Cloud, or Microsoft Azure.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-red-50 border border-red-100 text-[#FF1E27] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Continuous Uptime Monitoring</h4>
                      <p className="text-xs sm:text-sm text-slate-600">24/7 automated telemetry with instant alerts to senior engineers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-red-50 border border-red-100 text-[#FF1E27] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Client Account Transfer</h4>
                      <p className="text-xs sm:text-sm text-slate-600">All cloud accounts and assets are configured directly in your name.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Dedicated Support Available 24/7</span>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#FF1E27] transition-colors flex items-center gap-1.5"
                >
                  <span>Request an Architecture Review</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF1E27]" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 3-Column Enterprise Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-300 hover:border-red-300 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#FF1E27] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-200 space-y-1.5">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E27]" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
