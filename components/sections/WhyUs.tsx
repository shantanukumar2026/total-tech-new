"use client";

import React from "react";
import Image from "next/image";
import { Users, Zap, ShieldCheck, Clock } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      icon: Users,
      title: "Direct Access to Senior Engineers",
      description:
        "You work directly with the developers building your software. No account managers or outsourced handoffs.",
    },
    {
      icon: Zap,
      title: "Fast and Scalable Code",
      description:
        "We build clean web and mobile applications using modern frameworks that load quickly and scale smoothly.",
    },
    {
      icon: ShieldCheck,
      title: "Secure by Default",
      description:
        "Industry-standard security practices, encrypted data handling, and reliable cloud setups protect your business.",
    },
    {
      icon: Clock,
      title: "Clear Timelines & Communication",
      description:
        "We keep projects on schedule with weekly demos, clear milestones, and straightforward pricing.",
    },
  ];

  return (
    <section className="bg-[#0b0c10] text-white py-20 border-t border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
            Why Total Tech
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Reliable engineering for growing businesses.
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            We help companies design and launch custom software, web platforms, and automated workflows with clear communication from start to finish.
          </p>
        </div>

        {/* 2-Column Layout: Image on Left, 4 Clean Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean Real Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
              <Image
                src="/assets/web-app/gettyimages-2169040419-1024x1024.jpg"
                alt="Total Tech Team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: 4 Clean Point Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-md bg-[#12141a] border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-neutral-800/80 text-[#FF1E27] flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
