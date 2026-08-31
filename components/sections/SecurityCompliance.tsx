"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Key, FileCheck, EyeOff, Server, ArrowRight } from "lucide-react";

export default function SecurityCompliance() {
  const pillars = [
    {
      title: "Zero-Trust Architecture",
      desc: "Strict identity verification, least-privilege role-based access control (RBAC), and continuous session validation across all microservices.",
      icon: Key,
    },
    {
      title: "Quantum-Resistant Encryption",
      desc: "AES-256 encryption for data at rest and TLS 1.3 with forward secrecy for all internal and customer-facing data transmissions.",
      icon: Lock,
    },
    {
      title: "Continuous Automated Audits",
      desc: "Automated vulnerability scanning, daily static code analysis (SAST/DAST), and third-party penetration testing protocols.",
      icon: FileCheck,
    },
    {
      title: "Sovereign Air-Gapped Deployments",
      desc: "Full support for on-premise, air-gapped, and sovereign cloud private enclaves for defense and sensitive data workloads.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#090a0d] text-white py-20 border-t border-neutral-800 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
              Corporate Governance & Cyber Defense
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Security Built into the Foundation
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Every system Total Tech builds adheres to strict defense-in-depth security standards, global regulatory compliance, and rigorous privacy protocols.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#171922] hover:bg-[#202430] border border-neutral-700 text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 py-3 rounded-sm transition-colors"
          >
            <span>Request Security Whitepaper</span>
            <ArrowRight className="w-4 h-4 text-[#FF1E27]" />
          </Link>
        </div>

        {/* 4 Security Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-md bg-[#12141a] border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
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
            );
          })}
        </div>

        {/* Corporate Trust Banner */}
        <div className="rounded-md border border-neutral-800 bg-[#12141a] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] font-mono">
                Enterprise Assurance
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Comprehensive Source Code & IP Handover Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Total Tech operates under clean corporate contractual governance. Clients retain 100% ownership of source code, intellectual property, machine learning weights, and deployment pipelines.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="p-3 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#FF1E27] flex-shrink-0" />
                <span className="text-xs font-mono text-neutral-200">100% Client IP Ownership</span>
              </div>
              <div className="p-3 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-[#FF1E27] flex-shrink-0" />
                <span className="text-xs font-mono text-neutral-200">Non-Disclosure & Data Sovereignty</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
