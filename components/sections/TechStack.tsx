"use client";

import React, { useState } from "react";
import {
  Code2,
  Cpu,
  Database,
  Cloud,
  Shield,
  Layers,
  CheckCircle2,
  Server,
  Smartphone,
  Globe
} from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Websites & Mobile Apps" },
    { id: "backend", label: "Servers & Systems" },
    { id: "cloud", label: "Cloud Hosting & Security" },
    { id: "data", label: "Databases & Storage" },
  ];

  const technologies = [
    // Websites & Mobile Apps
    {
      name: "React & Next.js",
      category: "frontend",
      desc: "Fast, modern web platforms and customer portals that load instantly on all computers and phones.",
      badge: "Web Platform",
    },
    {
      name: "iOS & Android Apps",
      category: "frontend",
      desc: "Mobile apps built for iPhone, iPad, and Android devices that your customers can download easily.",
      badge: "Mobile Apps",
    },
    {
      name: "TypeScript",
      category: "frontend",
      desc: "Clean, strictly checked code that prevents bugs and keeps your software running without crashes.",
      badge: "Code Quality",
    },
    {
      name: "Tailwind & Clean UI",
      category: "frontend",
      desc: "Modern visual styling and easy-to-read screen layouts that look great on any display size.",
      badge: "User Interface",
    },

    // Servers & Systems
    {
      name: "Node.js & Python",
      category: "backend",
      desc: "Secure server engines that handle user logins, customer accounts, business logic, and orders.",
      badge: "Server Engine",
    },
    {
      name: "Go (Golang)",
      category: "backend",
      desc: "High-speed backend programming for services that process thousands of requests at the same time.",
      badge: "High Speed",
    },
    {
      name: "Secure API Integrations",
      category: "backend",
      desc: "Connects your software smoothly to payment gateways (Stripe), email providers, and third-party tools.",
      badge: "Integrations",
    },
    {
      name: "Smart Automation",
      category: "backend",
      desc: "Background programs that automatically run reports, send notifications, and handle repetitive tasks.",
      badge: "Automation",
    },

    // Cloud & Security
    {
      name: "Amazon Web Services (AWS)",
      category: "cloud",
      desc: "Industry-standard cloud hosting that keeps your website running smoothly and securely 24/7.",
      badge: "Cloud Hosting",
    },
    {
      name: "Microsoft Azure & Google Cloud",
      category: "cloud",
      desc: "Enterprise cloud platforms for reliable data storage, high availability, and corporate compliance.",
      badge: "Enterprise Cloud",
    },
    {
      name: "Docker & Fast Deployments",
      category: "cloud",
      desc: "Package and update software quickly with zero downtime or interruptions for your users.",
      badge: "Deployment",
    },
    {
      name: "Cloudflare & Firewall Protection",
      category: "cloud",
      desc: "Automatic protection against online threats, cyber attacks, and network slowdowns.",
      badge: "Security",
    },

    // Databases & Storage
    {
      name: "PostgreSQL Database",
      category: "data",
      desc: "Safe, highly reliable database that protects and organizes customer accounts and transaction history.",
      badge: "Primary Database",
    },
    {
      name: "High-Speed Memory Cache",
      category: "data",
      desc: "Fast in-memory storage (Redis) that makes searches and dashboards feel immediate and responsive.",
      badge: "Fast Cache",
    },
    {
      name: "Document & File Storage",
      category: "data",
      desc: "Secure encrypted storage for PDFs, customer invoices, contracts, photos, and company files.",
      badge: "File Storage",
    },
    {
      name: "Automated Daily Backups",
      category: "data",
      desc: "Continuous automated backups stored safely in multiple locations so your data is never lost.",
      badge: "Data Protection",
    },
  ];

  const filteredTech = activeCategory === "all"
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="bg-[#0e1017] text-white py-14 lg:py-18 border-t border-neutral-800">
      <div className="max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E27]/15 border border-[#FF1E27]/40 text-[#FF5E65] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF1E27]" />
              Technology We Use
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built with reliable, industry-proven tools.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              We select software tools that are stable, well-supported, and widely trusted across American businesses. This ensures your project is easy to maintain and runs reliably for years to come.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#161922] rounded-lg border border-neutral-700 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#FF1E27] text-white shadow-md"
                    : "text-neutral-200 hover:text-white hover:bg-neutral-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#141721] border border-neutral-700 hover:border-neutral-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-800 text-neutral-200 border border-neutral-600">
                    {tech.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {tech.name}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
