"use client";

import React from "react";
import Image from "next/image";
import { Globe, Server, Cpu, Shield, Radio, Activity, Network } from "lucide-react";

export default function GlobalInfrastructure() {
  const regions = [
    {
      region: "North America",
      hubs: "Virginia (US-East), Oregon (US-West), Toronto",
      latency: "< 12ms Edge SLA",
      status: "Operational",
    },
    {
      region: "Europe & UK",
      hubs: "Frankfurt (DE), London (UK), Dublin (IE)",
      latency: "< 15ms Edge SLA",
      status: "Operational",
    },
    {
      region: "Asia-Pacific",
      hubs: "Tokyo, Singapore, Sydney",
      latency: "< 24ms Edge SLA",
      status: "Operational",
    },
    {
      region: "Middle East & LATAM",
      hubs: "Dubai (UAE), São Paulo (BR)",
      latency: "< 35ms Edge SLA",
      status: "Operational",
    },
  ];

  const capabilities = [
    {
      title: "Tier IV Redundant Data Centers",
      desc: "N+2 power and cooling architecture providing continuous availability without single points of failure.",
      icon: Server,
    },
    {
      title: "Sovereign Data Residency",
      desc: "Strict localized storage protocols ensuring compliance with national and regional data sovereignty mandates.",
      icon: Shield,
    },
    {
      title: "Ultra Low-Latency Fiber Mesh",
      desc: "Direct multi-cloud interconnects and private fiber backbones bypassing congested public routing.",
      icon: Network,
    },
    {
      title: "Real-Time Telemetry & SRE",
      desc: "Continuous autonomous health monitoring with sub-second automated failover protocols.",
      icon: Activity,
    },
  ];

  return (
    <section className="bg-[#0b0c10] text-white py-20 border-t border-neutral-800 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
              Global Scale & Reliability
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Enterprise Global Infrastructure
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Engineered to support mission-critical enterprise workloads with multi-region redundancy, sovereign cloud clusters, and millisecond edge execution.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#12141a] px-4 py-2.5 rounded-sm border border-neutral-800">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E27] animate-pulse" />
            <span className="text-xs font-mono text-neutral-300 font-semibold">
              Global Backbone Status: 100% Operational
            </span>
          </div>
        </div>

        {/* 2-Column: Map/Visual on Left, Infrastructure Matrix on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative rounded-md overflow-hidden border border-neutral-800 bg-[#12141a] flex flex-col">
            <div className="relative aspect-[16/10] w-full bg-neutral-950">
              <Image
                src="/assets/web-app/gettyimages-2224771564-1024x1024.jpg"
                alt="Total Tech Global Cloud Infrastructure"
                fill
                className="object-cover opacity-85"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-black/80 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Edge Node Array</p>
                  <p className="text-[11px] text-neutral-400 font-mono">BGP Anycast &bull; 99.999% SLA</p>
                </div>
                <Globe className="w-5 h-5 text-[#FF1E27]" />
              </div>
            </div>

            {/* Region Footprint Table */}
            <div className="p-6 divide-y divide-neutral-800/80 flex-1 flex flex-col justify-between">
              {regions.map((reg, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{reg.region}</span>
                    <span className="text-neutral-400 text-[11px]">{reg.hubs}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#FF1E27] font-mono font-medium block">{reg.latency}</span>
                    <span className="text-[10px] text-neutral-500 font-mono">{reg.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Grid on Right */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-md bg-[#12141a] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF1E27] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E27]" />
                    <span>Enterprise Tier Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
