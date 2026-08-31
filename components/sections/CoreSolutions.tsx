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
    category: "Software Development",
    title: "Custom Web & Mobile Apps",
    description:
      "Modern web applications, internal tools, and iOS/Android mobile apps built to support your daily operations.",
    imageSrc: "/assets/web-app/gettyimages-2226999346-1024x1024.jpg",
    imageAlt: "Custom Web and Mobile Applications",
    features: [
      "Next.js & React web platforms",
      "Native iOS & Android apps",
      "Customer portals & dashboards",
      "API & third-party integrations",
    ],
    ctaHref: "/services/custom-software-web",
  },
  {
    id: "ai-workflows",
    category: "Automation & Data",
    title: "AI & Workflow Automation",
    description:
      "Automate repetitive daily tasks, organize business documents, and integrate AI tools that help your team work faster.",
    imageSrc: "/assets/web-app/gettyimages-2281055229-1024x1024.jpg",
    imageAlt: "AI and Workflow Automation",
    features: [
      "Custom AI assistants and search",
      "Document scanning and OCR extraction",
      "Automated business pipelines",
      "Custom reporting dashboards",
    ],
    ctaHref: "/services/ai-data-solutions",
  },
  {
    id: "cloud-ops",
    category: "Cloud & Infrastructure",
    title: "Cloud Setup & DevOps",
    description:
      "Reliable cloud architecture on AWS, Azure, or GCP with automated backups, monitoring, and Devops controls.",
    imageSrc: "/assets/web-app/gettyimages-2262805356-1024x1024.jpg",
    imageAlt: "Cloud Infrastructure and DevOps",
    features: [
      "Cloud migration (AWS, Azure, GCP)",
      "Daily automated backups",
      "24/7 server monitoring",
      "Security compliance & access control",
    ],
    ctaHref: "/services/cloud-devops",
  },
  {
    id: "Crm And erp",
    category: "Software Development",
    title: "Custom crm & erp",
    description:
      "Modern web applications, internal tools, and iOS/Android mobile apps built to support your daily operations.",
    imageSrc: "/assets/web-app/gettyimages-2264962187-1024x1024.jpg",
    imageAlt: "Custom Web and Mobile Applications",
    features: [
      "Contact Management",
      "Sales Pipeline Tracking",
      "Marketing Automation",
      "Customer Support",
    ],
    ctaHref: "/services/custom-software-web",
  },
  {
    id: "Robotics And IoT",
    category: "Robotics And IoT",
    title: "Robotics And IoT",
    description:
      "Modern web applications, internal tools, and iOS/Android mobile apps built to support your daily operations.",
    imageSrc: "/assets/web-app/gettyimages-2264299087-1024x1024.jpg",
    imageAlt: "Robotics And IoT",
    features: [
      "Remote Monitoring and Control",
      "Sensors and Data Fusion",
      "Autonomous Decision-Making",
      "Predictive Maintenance",
    ],
    ctaHref: "/services/custom-software-web",
  },
  {
    id: "Cyber Security",
    category: "Cyber Security",
    title: "Cyber Security",
    description:
      "Modern web applications, internal tools, and iOS/Android mobile apps built to support your daily operations.",
    imageSrc: "/assets/web-app/gettyimages-1038838928-1024x1024.jpg",
    imageAlt: "Cyber Security",
    features: [
      "Network Security and Intrusion Detection",
      "Endpoint Protection and Antivirus Solutions",
      "Security Audits and Vulnerability Assessments",
      "Data Encryption and Privacy Compliance",
    ],
    ctaHref: "/services/custom-software-web",
  },
];

export default function CoreSolutions() {
  return (
    <section className="bg-[#090a0d] text-white py-20 border-t border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What we build for our clients.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400">
              Straightforward technology services designed to solve specific business needs.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF1E27] hover:underline"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="rounded-md bg-[#12141a] border border-neutral-800 overflow-hidden flex flex-col justify-between"
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
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF1E27]">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2 pt-4 border-t border-neutral-800/80">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#FF1E27] shrink-0" />
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
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-sm bg-neutral-800 hover:bg-[#FF1E27] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
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
