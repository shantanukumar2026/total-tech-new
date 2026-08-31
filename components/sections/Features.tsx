"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Sparkles,
  Bot,
  Cloud,
  Lock,
  Boxes,
  Laptop,
  Smartphone,
  Terminal,
  Eye,
  BarChart3,
  Workflow,
  Cpu,
  Radio,
  Activity,
  Network,
  ShieldCheck,
  FileCheck,
  Briefcase,
  Share2,
  ArrowRight,
  ChevronRight,
  Zap,
} from "lucide-react";

export const servicesList = [
  {
    num: "01",
    id: "custom-software-web",
    title: "Custom Software & Web",
    desc: "Enterprise full-stack systems, modern Next.js/React applications, and native mobile apps engineered for hyper-scale performance.",
    icon: Code2,
    badge: "Enterprise Grade",
    subgroups: [
      {
        title: "Web & Applications",
        icon: Laptop,
        items: [
          "Next.js & React Enterprise",
          "Node.js & Python Backend",
          "Modern Web Platforms",
          "API & Microservices",
        ],
      },
      {
        title: "Mobile Development",
        icon: Smartphone,
        items: [
          "iOS Apps (Swift)",
          "Android Apps (Kotlin)",
          "Cross-Platform Mobile",
          "Enterprise Apps",
        ],
      },
      {
        title: "Custom Engineering",
        icon: Terminal,
        items: [
          "Full-Stack Systems",
          "Cloud Migration",
          "Legacy Modernization",
          "Database Architecture",
        ],
      },
    ],
  },
  {
    num: "02",
    id: "ai-data-solutions",
    title: "AI & Data Solutions",
    desc: "Frontier enterprise LLMs, multi-modal computer vision, autonomous AI agents, and real-time big data pipelines.",
    icon: Sparkles,
    badge: "30x Acceleration",
    subgroups: [
      {
        title: "Artificial Intelligence",
        icon: Sparkles,
        items: [
          "Custom Enterprise LLMs",
          "AI Agents & Automation",
          "Document Intelligence",
          "Model Integration",
        ],
      },
      {
        title: "Computer Vision",
        icon: Eye,
        items: [
          "Object Detection",
          "Visual Quality Inspection",
          "OCR & Document Scanning",
          "Image Recognition",
        ],
      },
      {
        title: "Data & Analytics",
        icon: BarChart3,
        items: [
          "Data Warehousing & BI",
          "Real-Time Data Pipelines",
          "Predictive Analytics",
          "Reporting Dashboards",
        ],
      },
    ],
  },
  {
    num: "03",
    id: "robotics-iot",
    title: "Robotics & IoT",
    desc: "Industrial ROS 2 robotics automation, real-time embedded firmware, and deterministic IoT sensor arrays.",
    icon: Bot,
    badge: "Deterministic RTOS",
    subgroups: [
      {
        title: "Industrial Automation",
        icon: Workflow,
        items: [
          "Warehouse Automation",
          "Robotics Software (ROS 2)",
          "Machine Integration",
          "Automated Logistics",
        ],
      },
      {
        title: "Embedded Systems",
        icon: Cpu,
        items: [
          "Firmware Development",
          "Microcontroller Logic",
          "Hardware Prototyping",
          "Real-Time Control",
        ],
      },
      {
        title: "IoT Networks",
        icon: Radio,
        items: [
          "Industrial IoT (IIoT)",
          "Smart Sensor Arrays",
          "Fleet Telematics",
          "Facility Monitoring",
        ],
      },
    ],
  },
  {
    num: "04",
    id: "cloud-devops",
    title: "Cloud & DevOps",
    desc: "Multi-cloud Kubernetes fabrics, automated CI/CD GitOps pipelines, and resilient 24/7 SRE monitoring.",
    icon: Cloud,
    badge: "Zero Downtime",
    subgroups: [
      {
        title: "Cloud Infrastructure",
        icon: Cloud,
        items: [
          "AWS, Azure & Google Cloud",
          "Kubernetes & Docker",
          "Serverless Systems",
          "Hybrid Cloud Setup",
        ],
      },
      {
        title: "DevOps & CI/CD",
        icon: Activity,
        items: [
          "Automated Deployment",
          "Infrastructure as Code",
          "24/7 Monitoring & SRE",
          "Disaster Recovery",
        ],
      },
      {
        title: "Network Systems",
        icon: Network,
        items: [
          "Enterprise Networking",
          "SD-WAN Setup",
          "VPN & Remote Access",
          "Load Balancing",
        ],
      },
    ],
  },
  {
    num: "05",
    id: "cybersecurity",
    title: "Cybersecurity",
    desc: "Zero-Trust defense architecture, offensive penetration testing, cryptographic security, and compliance readiness.",
    icon: Lock,
    badge: "Zero-Trust Sovereign",
    subgroups: [
      {
        title: "Security Audits",
        icon: ShieldCheck,
        items: [
          "Penetration Testing",
          "Vulnerability Assessments",
          "Security Auditing",
          "Code Review",
        ],
      },
      {
        title: "Zero-Trust Defense",
        icon: Lock,
        items: [
          "Identity & Access (IAM)",
          "End-to-End Encryption",
          "Network Segmentation",
          "Endpoint Security",
        ],
      },
      {
        title: "Compliance & Risk",
        icon: FileCheck,
        items: [
          "SOC2 Type II Readiness",
          "ISO 27001 Compliance",
          "HIPAA Security",
          "Data Privacy (GDPR/CCPA)",
        ],
      },
    ],
  },
  {
    num: "06",
    id: "enterprise-solutions",
    title: "Enterprise Solutions",
    desc: "Enterprise ERP cloud platforms, digital transformation consulting, and next-generation smart automation.",
    icon: Boxes,
    badge: "Strategic Advisory",
    subgroups: [
      {
        title: "Business Platforms",
        icon: Briefcase,
        items: [
          "ERP Cloud Integration",
          "Enterprise CRM Setup",
          "ERP Customization",
          "Supply Chain Tech",
        ],
      },
      {
        title: "IT Consulting",
        icon: Share2,
        items: [
          "Digital Transformation",
          "IT Strategy & Advisory",
          "IT Service Management",
          "Vendor Management",
        ],
      },
      {
        title: "Emerging Tech",
        icon: Sparkles,
        items: [
          "Digital Twins",
          "Smart Automation",
          "Web3 & Blockchain",
          "Green IT Solutions",
        ],
      },
    ],
  },
];

export default function Features() {
  const [selectedPillar, setSelectedPillar] = useState<string>("01");

  const currentService =
    servicesList.find((s) => s.num === selectedPillar) || servicesList[0];

  return (
    <section className="relative bg-[#070707] text-white py-24 border-t border-[#181818] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-[-150px] w-[500px] h-[500px] rounded-full bg-[#FF1E27]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-150px] w-[500px] h-[500px] rounded-full bg-[#FF1E27]/7 blur-[160px] pointer-events-none" />

      <div className="max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[#1c1c1c] pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#FF1E27]/10 border border-[#FF1E27]/25 text-[#FF1E27] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E27]"></span>
              CAPABILITY MATRIX & SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              End-to-End Enterprise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1E27] to-[#FFA0A4]">
                Technology Pillars
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
              Engineered with world-class precision across software development, AI supercomputing, robotics, cloud orchestration, and sovereign cybersecurity.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF1E27] hover:text-white transition-colors"
          >
            <span>Consult Solution Architects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 PILLARS INTERACTIVE TABS & GRID (NVIDIA SHOWCASE STYLE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Category Selection Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {servicesList.map((service) => {
              const isSelected = selectedPillar === service.num;
              const IconComp = service.icon;

              return (
                <button
                  key={service.num}
                  type="button"
                  onClick={() => setSelectedPillar(service.num)}
                  className={`w-full text-left p-4 rounded-xs transition-all flex items-center justify-between group cursor-pointer border ${
                    isSelected
                      ? "bg-[#121212] border-[#FF1E27]/50 shadow-xl border-l-4 border-l-[#FF1E27]"
                      : "bg-[#0a0a0a] border-[#1a1a1a] hover:bg-[#101010] text-neutral-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xs transition-colors ${
                        isSelected
                          ? "bg-[#FF1E27]/20 text-[#FF1E27]"
                          : "bg-[#141414] text-neutral-500 group-hover:text-neutral-300"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#FF1E27]">
                          {service.num}
                        </span>
                        <span
                          className={`text-sm font-bold tracking-wide ${
                            isSelected ? "text-white" : "text-neutral-300"
                          }`}
                        >
                          {service.title}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5 max-w-[240px]">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-[#FF1E27] translate-x-1"
                        : "text-neutral-600 group-hover:text-neutral-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Active Pillar Detailed Breakdown */}
          <div className="lg:col-span-8 bg-[#0d0d0d] border border-[#222] p-6 sm:p-8 rounded-xs relative overflow-hidden">
            {/* Top Accent */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1f1f1f]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#FF1E27] bg-[#FF1E27]/10 px-2.5 py-1 rounded-xs border border-[#FF1E27]/20">
                  PILLAR {currentService.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {currentService.title}
                </h3>
              </div>

              <span className="text-xs font-mono font-bold text-neutral-400 bg-[#161616] px-3 py-1 rounded-xs border border-[#282828] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#FF1E27]" />
                {currentService.badge}
              </span>
            </div>

            <p className="text-sm text-neutral-300 py-4 leading-relaxed">
              {currentService.desc}
            </p>

            {/* 3 Subgroup Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {currentService.subgroups.map((group, gIdx) => {
                const GroupIcon = group.icon;
                return (
                  <div
                    key={gIdx}
                    className="p-4 rounded-xs bg-[#121212] border border-[#202020] space-y-3 hover:border-[#333] transition-colors"
                  >
                    <div className="flex items-center gap-2 pb-2 border-b border-[#1d1d1d]">
                      <div className="p-1.5 rounded-xs bg-[#1a1a1a] text-[#FF1E27]">
                        <GroupIcon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                        {group.title}
                      </h4>
                    </div>

                    <ul className="space-y-2">
                      {group.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="text-xs text-neutral-300 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E27]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                Ready to deploy enterprise {currentService.title.toLowerCase()}?
              </div>

              <Link
                href={`/services/${currentService.id}`}
                className="inline-flex items-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs font-bold uppercase px-5 py-2.5 rounded-xs transition-all shadow-[0_0_15px_rgba(255,30,39,0.35)]"
              >
                <span>Explore {currentService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
