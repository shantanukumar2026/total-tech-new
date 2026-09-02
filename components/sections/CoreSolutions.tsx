"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface SolutionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  ctaHref: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "web-mobile",
    category: "Web & Mobile",
    title: "Custom Web & Mobile Apps",
    description:
      "Fast, responsive web applications, customer portals, and native iOS & Android apps built for performance and growth.",
    imageSrc: "/assets/web-app/gettyimages-2226999346-1024x1024.jpg",
    imageAlt: "Custom Web and Mobile Applications",
    features: [
      "Modern React & Next.js platforms",
      "Native iOS & Android mobile apps",
      "Customer portals & admin dashboards",
      "REST & GraphQL API integrations",
    ],
    ctaHref: "/services/custom-software-web",
  },
  {
    id: "ai-workflows",
    category: "AI & Automation",
    title: "AI Tools & Workflow Automation",
    description:
      "Automate repetitive daily workflows, process business documents, and integrate smart tools that help your team work faster.",
    imageSrc: "/assets/web-app/gettyimages-2281055229-1024x1024.jpg",
    imageAlt: "AI and Workflow Automation",
    features: [
      "Custom internal search & AI assistants",
      "Automated document processing & OCR",
      "Data extraction & automated reports",
      "Workflow integration with your tools",
    ],
    ctaHref: "/services/ai-data-solutions",
  },
  {
    id: "cloud-ops",
    category: "Cloud & DevOps",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Reliable cloud setup on AWS, Google Cloud, or Azure with automated deployments, daily backups, and 24/7 monitoring.",
    imageSrc: "/assets/web-app/gettyimages-2262805356-1024x1024.jpg",
    imageAlt: "Cloud Infrastructure and DevOps",
    features: [
      "Cloud setup (AWS, GCP, Azure)",
      "Automated CI/CD deployment pipelines",
      "24/7 uptime monitoring & backups",
      "Secure role-based access control",
    ],
    ctaHref: "/services/cloud-devops",
  },
  {
    id: "crm-erp",
    category: "Business Systems",
    title: "Custom CRM & ERP Systems",
    description:
      "Tailored operational platforms, sales pipelines, and billing systems designed around your exact business processes.",
    imageSrc: "/assets/web-app/gettyimages-2264962187-1024x1024.jpg",
    imageAlt: "Custom CRM and ERP Enterprise Systems",
    features: [
      "Client & lead tracking pipelines",
      "Billing & invoicing automation",
      "Inventory & resource management",
      "Custom analytics & reporting",
    ],
    ctaHref: "/services/custom-software-web",
  },
  {
    id: "robotics-iot",
    category: "IoT & Hardware",
    title: "IoT & Connected Device Software",
    description:
      "Remote device dashboards, sensor data telemetry, and firmware connectivity built for real-time monitoring.",
    imageSrc: "/assets/web-app/gettyimages-2264299087-1024x1024.jpg",
    imageAlt: "Robotics and IoT Industrial Systems",
    features: [
      "Live sensor dashboards & alerts",
      "Remote device management",
      "Data logging & telemetry",
      "Predictive equipment maintenance",
    ],
    ctaHref: "/services/custom-software-web",
  },
  {
    id: "cyber-security",
    category: "Security & Compliance",
    title: "Security & Data Protection",
    description:
      "Security audits, vulnerability scans, and encryption to ensure your software meets modern privacy and compliance standards.",
    imageSrc: "/assets/web-app/gettyimages-1038838928-1024x1024.jpg",
    imageAlt: "Enterprise Cybersecurity & Zero Trust",
    features: [
      "Vulnerability & code security audits",
      "End-to-end data encryption",
      "SOC 2 & ISO compliance readiness",
      "Access control & security logging",
    ],
    ctaHref: "/services/custom-software-web",
  },
];

export default function CoreSolutions() {
  return (
    <section className="bg-[#090a0d] text-white py-14 lg:py-18 border-t border-neutral-800">
      <div className="max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E27]/10 border border-[#FF1E27]/30 text-[#FF1E27] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF1E27]" />
              What We Do &bull; Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Software & Technology Solutions We Build
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              We design and build custom web platforms, mobile apps, smart automation tools, and secure cloud systems tailored to your business.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#FF5E65] hover:text-[#FF1E27] transition-colors self-start md:self-end"
          >
            <span>View all software services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-[#141721] border border-neutral-700 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full bg-neutral-900">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E65]">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 pt-4 border-t border-neutral-800">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-sm sm:text-base text-neutral-200">
                        <Check className="w-4 h-4 text-[#FF1E27] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Link
                  href={item.ctaHref}
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-md bg-neutral-800 hover:bg-[#FF1E27] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
