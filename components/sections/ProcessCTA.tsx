"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProcessCTA() {
  const steps = [
    {
      num: "01",
      title: "Plan & Scope",
      description:
        "We discuss your requirements, define feature goals, and outline a realistic timeline and budget.",
    },
    {
      num: "02",
      title: "Build & Review",
      description:
        "We develop your product in organized sprints with regular live demos so you see continuous progress.",
    },
    {
      num: "03",
      title: "Launch & Support",
      description:
        "We handle deployment, testing, and transition, followed by ongoing technical support whenever you need it.",
    },
  ];

  return (
    <section className="bg-[#0b0c10] text-white py-20 border-t border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our 3-step delivery process.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-400">
            A simple and transparent approach to getting your project built on time.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-md bg-[#12141a] border border-neutral-800"
            >
              <span className="text-2xl font-bold text-[#FF1E27] font-mono">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-white mt-3 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="rounded-md border border-neutral-800 bg-[#12141a] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to start your next project?
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed">
                Tell us about what you want to build. We&apos;ll schedule a brief call to discuss your goals and provide a straightforward estimate.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-sm transition-colors"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs sm:text-sm font-medium px-5 py-3 rounded-sm transition-colors"
                >
                  <span>View Services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
                <Image
                  src="/assets/web-app/gettyimages-2166322635-1024x1024.jpg"
                  alt="Total Tech team discussion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
