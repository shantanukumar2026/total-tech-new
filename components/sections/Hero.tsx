"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

interface HeroSlide {
  id: string;
  title: string;
  highlightText: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  imageSrc: string;
  imageAlt: string;
  keyFeatures: string[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "custom-software-platforms",
    title: "Build Custom Software &",
    highlightText: "Modern Web Apps",
    description:
      "We design and build fast, reliable web platforms and mobile apps tailored to your business needs, built for high performance and easy growth.",
    primaryCta: {
      label: "Explore Software Services",
      href: "/services/custom-software-web",
    },
    secondaryCta: {
      label: "Get in Touch",
      href: "/contact",
    },
    imageSrc: "/assets/web-app/gettyimages-2215157615-1024x1024.jpg",
    imageAlt: "Custom Software & Web Application Development",
    keyFeatures: [
      "Custom Web & Mobile App Development",
      "Fast, Scalable APIs & Cloud Backends",
      "Modern React & Next.js Technologies",
      "24/7 Dedicated Support & High Reliability",
    ],
  },
  {
    id: "ai-data-solutions",
    title: "Smart AI Solutions &",
    highlightText: "Real-Time Data Analytics",
    description:
      "Automate daily workflows, gain clear insights from your data, and use custom AI tools designed to help your team work faster and make better decisions.",
    primaryCta: {
      label: "Explore AI Solutions",
      href: "/services/ai-data-solutions",
    },
    secondaryCta: {
      label: "Free Consultation",
      href: "/contact",
    },
    imageSrc: "/assets/web-app/gettyimages-2260719877-1024x1024.jpg",
    imageAlt: "AI Solutions and Data Analytics",
    keyFeatures: [
      "Custom AI Models & Smart Automation",
      "Real-Time Dashboards & Analytics",
      "Computer Vision & Visual Inspection",
      "Secure, Enterprise-Grade Data Protection",
    ],
  },
];

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section className="relative min-h-[calc(100vh-68px)] flex items-center bg-gradient-to-b from-[#0b0c10] via-[#101218] to-[#0c0d12] text-white overflow-hidden pt-[110px] lg:pt-[140px] pb-16 lg:pb-24">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#FF1E27]/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[8%] w-[500px] h-[500px] rounded-full bg-slate-500/5 blur-[170px] pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-[1780px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Clean Typography, Features & Actions */}
          <div className="lg:col-span-6 space-y-6 animate-in fade-in duration-300">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12]">
              {currentSlide.title}{" "}
              <span className="text-red-500">
                {currentSlide.highlightText}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {currentSlide.description}
            </p>

            {/* Key Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {currentSlide.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF1E27] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons & Slide Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={currentSlide.primaryCta.href}
                  className="inline-flex items-center gap-2.5 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all duration-200 shadow-[0_0_20px_rgba(255,30,39,0.35)] hover:shadow-[0_0_30px_rgba(255,30,39,0.6)] group"
                >
                  <span>{currentSlide.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={currentSlide.secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-100 text-sm sm:text-base font-semibold px-6 py-3.5 rounded-sm transition-all duration-200"
                >
                  <span>{currentSlide.secondaryCta.label}</span>
                </Link>
              </div>

              {/* Minimalist Slider Navigation */}
              <div className="flex items-center gap-3 pt-2 sm:pt-0">
                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlideIndex === idx
                        ? "w-8 bg-[#FF1E27]"
                        : "w-2 bg-slate-700 hover:bg-slate-500"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1 pl-2">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="p-2 rounded-sm bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="p-2 rounded-sm bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Image Showcase Frame without Badges or Overlays */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-md border border-slate-700/60 bg-slate-950 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">

              {/* Slide Image */}
              <Image
                src={currentSlide.imageSrc}
                alt={currentSlide.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Clean Subtle Gradient & Border */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
