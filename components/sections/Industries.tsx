"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Landmark, Truck, Factory, ShoppingCart, ShieldCheck } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "FinTech & Financial Services",
      tag: "Security & Compliance",
      icon: Landmark,
      description:
        "High-throughput transaction systems, PCI-DSS compliant customer portals, and real-time fraud prevention algorithms.",
      imageSrc: "/assets/web-app/gettyimages-2017676994-1024x1024.jpg",
      metric: "Sub-50ms Transaction Latency",
    },
    {
      title: "Healthcare & MedTech",
      tag: "HIPAA Compliant",
      icon: Activity,
      description:
        "Telehealth platforms, electronic health records (EHR) integrations, and automated patient intake systems with strict encryption.",
      imageSrc: "/assets/web-app/gettyimages-2215157615-1024x1024.jpg",
      metric: "100% HIPAA & SOC2 Compliant",
    },
    {
      title: "Logistics & Supply Chain",
      tag: "Real-time Telemetry",
      icon: Truck,
      description:
        "Fleet tracking dispatch dashboards, automated warehouse routing, and predictive inventory analytics platforms.",
      imageSrc: "/assets/web-app/gettyimages-2251424960-1024x1024.jpg",
      metric: "32% Operational Cost Reduction",
    },
    {
      title: "Manufacturing & Industrial IoT",
      tag: "Edge Automation",
      icon: Factory,
      description:
        "Real-time sensor telemetry, automated quality assurance computer vision pipelines, and predictive machinery maintenance.",
      imageSrc: "/assets/web-app/gettyimages-2260719877-1024x1024.jpg",
      metric: "99.9% Machine Uptime",
    },
  ];

  return (
    <section className="bg-[#090a0d] text-white py-20 border-t border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
              Tailored Industry Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Domain expertise across specialized industries.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              We design software architectures tailored to the unique regulatory, compliance, and throughput demands of your sector.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FF1E27] hover:underline"
          >
            <span>Discuss your industry needs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col rounded-md bg-[#12141a] border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-xs bg-black/70 backdrop-blur-md border border-neutral-700 text-[10px] font-medium text-neutral-200">
                    <Icon className="w-3 h-3 text-[#FF1E27]" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#FFA0A4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Impact Metric Banner */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono">Impact:</span>
                    <span className="font-semibold text-neutral-200 font-mono text-[11px] text-[#FF1E27]">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
