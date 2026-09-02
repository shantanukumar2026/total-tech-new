
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#07080b] text-neutral-300 border-t border-neutral-800">
      <div className="max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-6 py-16 lg:px-12">

        {/* Top Executive Consultation Bar */}
        <div className="rounded-2xl bg-[#0f1118] border border-neutral-800 p-8 sm:p-10 mb-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5E65] block mb-2">
              Start Your Next Project
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Have a software application or product idea to build?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl font-normal">
              Talk directly with our senior software engineers to discuss requirements, project architecture, and timeline with transparent pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-md transition-all shadow-md"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:contact@totaltech.com"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-md transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FF5E65]" />
              <span>contact@totaltech.com</span>
            </a>
          </div>
        </div>

        {/* Main 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/Logo.png"
                alt="Total Tech Logo"
                width={260}
                height={65}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-neutral-300 leading-relaxed font-normal max-w-sm">
              Total Tech designs and builds custom web applications, mobile platforms, and secure cloud infrastructure for ambitious companies across the United States.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#FF1E27] shrink-0" />
                <span>United States &bull; Remote & On-Site Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF1E27] shrink-0" />
                <span>contact@totaltech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FF1E27] shrink-0" />
                <span>Monday &ndash; Friday, 8:00 AM &ndash; 6:00 PM EST</span>
              </div>
            </div>
          </div>

          {/* Column 2: Software Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Software Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li><Link href="/services/custom-software-web" className="hover:text-white transition-colors">Custom Web Apps</Link></li>
              <li><Link href="/services/custom-software-web" className="hover:text-white transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services/cloud-devops" className="hover:text-white transition-colors">Cloud Architecture</Link></li>
              <li><Link href="/services/ai-data-solutions" className="hover:text-white transition-colors">AI & Smart Automation</Link></li>
              <li><Link href="/services/custom-software-web" className="hover:text-white transition-colors">API & Backend Systems</Link></li>
              <li><Link href="/services/cloud-devops" className="hover:text-white transition-colors">DevOps & CI/CD</Link></li>
            </ul>
          </div>

          {/* Column 3: How We Work & Delivery (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Our Process
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li><Link href="/services" className="hover:text-white transition-colors">2-Week Agile Sprints</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Direct Engineer Access</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">100% Code Ownership</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Security & QA Audits</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Zero-Downtime Launch</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">24/7 Support & Growth</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li><Link href="/blog" className="hover:text-white transition-colors">Engineering Blog</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Cloud Architecture Guide</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Technology Directory</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Client FAQ</Link></li>
            </ul>
          </div>

          {/* Column 5: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Total Tech</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Engineering Team</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Careers & Hiring</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Client Data Protection</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Compliance & Legal Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>&copy; {new Date().getFullYear()} Total Tech Corporation. All rights reserved. Full Source Code & IP Ownership Guaranteed.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/security" className="hover:text-white transition-colors">Security Standards</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Corporate Inquiries</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}