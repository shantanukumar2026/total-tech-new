"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Globe,
  User,
  Cpu,
  Layers,
  Server,
  Terminal,
  ArrowRight,
  Laptop,
  ShieldCheck,
  Zap,
  Code2,
  Database,
  Smartphone,
  Cloud,
  Lock,
  Boxes,
  Eye,
  Activity,
  Workflow,
  Radio,
  Share2,
  FileCheck,
  BarChart3,
  Network,
  Briefcase,
  PlayCircle,
} from "lucide-react";

// =========================================================================
// SERVICES & MEGA-MENU DATA (NVIDIA STYLE)
// =========================================================================
export interface ServiceSubItem {
  name: string;
  badge?: string;
}

export interface ServiceSubSection {
  title: string;
  icon: React.ElementType;
  items: ServiceSubItem[];
}

export interface ServiceCategory {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  sections: ServiceSubSection[];
  featured: {
    tag: string;
    title: string;
    description: string;
    badge?: string;
    href: string;
    cta: string;
    metric?: {
      value: string;
      label: string;
    };
  };
}

export const servicesMegaMenuData: ServiceCategory[] = [
  {
    id: "custom-software-web",
    num: "01",
    title: "Custom Software & Web",
    shortDesc: "Enterprise full-stack systems, Next.js web applications, and native mobile apps.",
    icon: Code2,
    sections: [
      {
        title: "Web & Applications",
        icon: Laptop,
        items: [
          { name: "Next.js & React Enterprise" },
          { name: "Node.js & Python Backend" },
          { name: "Modern Web Platforms" },
          { name: "API & Microservices" },
        ],
      },
      {
        title: "Mobile Development",
        icon: Smartphone,
        items: [
          { name: "iOS Apps (Swift)" },
          { name: "Android Apps (Kotlin)" },
          { name: "Cross-Platform Mobile" },
          { name: "Enterprise Apps" },
        ],
      },
      {
        title: "Custom Engineering",
        icon: Terminal,
        items: [
          { name: "Full-Stack Systems" },
          { name: "Cloud Migration" },
          { name: "Legacy Modernization" },
          { name: "Database Architecture" },
        ],
      },
    ],
    featured: {
      tag: "NEXT-GEN PLATFORMS",
      title: "Hyper-Scale Web & Enterprise Architectures",
      description: "Engineer resilient, lightning-fast digital products engineered with zero-downtime microservices and cloud-native backends.",
      href: "/services/custom-software",
      cta: "Explore Software Engineering",
      badge: "High Performance",
      metric: {
        value: "99.99%",
        label: "Operational SLA",
      },
    },
  },
  {
    id: "ai-data-solutions",
    num: "02",
    title: "AI & Data Solutions",
    shortDesc: "Custom enterprise LLMs, multi-modal vision systems, and automated real-time data pipelines.",
    icon: Database,
    sections: [
      {
        title: "Artificial Intelligence",
        icon: Cpu,
        items: [
          { name: "Custom Enterprise LLMs" },
          { name: "AI Agents & Automation" },
          { name: "Document Intelligence" },
          { name: "Model Integration & Fine-tuning" },
        ],
      },
      {
        title: "Computer Vision",
        icon: Eye,
        items: [
          { name: "Object Detection" },
          { name: "Visual Quality Inspection" },
          { name: "OCR & Document Scanning" },
          { name: "Image Recognition & Segmentation" },
        ],
      },
      {
        title: "Data & Analytics",
        icon: BarChart3,
        items: [
          { name: "Data Warehousing & BI" },
          { name: "Real-Time Data Pipelines" },
          { name: "Predictive Analytics" },
          { name: "Reporting Dashboards" },
        ],
      },
    ],
    featured: {
      tag: "GENERATIVE AI SUITE",
      title: "Autonomous Enterprise Intelligence",
      description: "Deploy private sovereign LLMs, custom reasoning agents, and real-time vision pipelines with ultra-low latency inference.",
      href: "/services/ai-data",
      cta: "Explore AI Solutions",
      badge: "30x Speedup",
      metric: {
        value: "30x",
        label: "Inference Throughput",
      },
    },
  },
  {
    id: "robotics-iot",
    num: "03",
    title: "Robotics & IoT",
    shortDesc: "ROS 2 robotics software, industrial automation, edge computing, and smart IoT sensor networks.",
    icon: Radio,
    sections: [
      {
        title: "Industrial Automation",
        icon: Workflow,
        items: [
          { name: "Warehouse Automation" },
          { name: "Robotics Software (ROS 2)" },
          { name: "Machine Integration" },
          { name: "Automated Logistics" },
        ],
      },
      {
        title: "Embedded Systems",
        icon: Cpu,
        items: [
          { name: "Firmware Development" },
          { name: "Microcontroller Logic" },
          { name: "Hardware Prototyping" },
          { name: "Real-Time Control (RTOS)" },
        ],
      },
      {
        title: "IoT Networks",
        icon: Radio,
        items: [
          { name: "Industrial IoT (IIoT)" },
          { name: "Smart Sensor Arrays" },
          { name: "Fleet Telematics" },
          { name: "Facility Monitoring & Digital Twins" },
        ],
      },
    ],
    featured: {
      tag: "PHYSICAL AI & ROBOTICS",
      title: "Omniverse Digital Twins & Smart Robotics",
      description: "Bridge the physical and digital world with GPU-accelerated ROS 2 simulation, industrial robotics control, and telemetry arrays.",
      href: "/services/robotics-iot",
      cta: "Explore Robotics & IoT",
      badge: "RTOS Certified",
      metric: {
        value: "<1ms",
        label: "Deterministic Latency",
      },
    },
  },
  {
    id: "cloud-devops",
    num: "04",
    title: "Cloud & DevOps",
    shortDesc: "Multi-cloud infrastructure, Kubernetes orchestration, CI/CD automation, and high-throughput networking.",
    icon: Cloud,
    sections: [
      {
        title: "Cloud Infrastructure",
        icon: Cloud,
        items: [
          { name: "AWS, Azure & Google Cloud" },
          { name: "Kubernetes & Docker" },
          { name: "Serverless Systems" },
          { name: "Hybrid Cloud Setup" },
        ],
      },
      {
        title: "DevOps & CI/CD",
        icon: Activity,
        items: [
          { name: "Automated Deployment" },
          { name: "Infrastructure as Code (IaC)" },
          { name: "24/7 Monitoring & SRE" },
          { name: "Disaster Recovery" },
        ],
      },
      {
        title: "Network Systems",
        icon: Network,
        items: [
          { name: "Enterprise Networking" },
          { name: "SD-WAN Setup" },
          { name: "VPN & Remote Access" },
          { name: "Global Load Balancing" },
        ],
      },
    ],
    featured: {
      tag: "CLOUD EXCELLENCE",
      title: "Zero-Downtime Infrastructure Fabric",
      description: "Scale from single clusters to multi-region hybrid clouds with automated GitOps pipelines, IaC, and 24/7 SRE resilience.",
      href: "/services/cloud-devops",
      cta: "Explore Cloud & DevOps",
      badge: "Multi-Cloud",
      metric: {
        value: "10x",
        label: "Deployment Velocity",
      },
    },
  },
  {
    id: "cybersecurity",
    num: "05",
    title: "Cybersecurity",
    shortDesc: "Zero-Trust defense, penetration testing, automated threat intelligence, and compliance certification.",
    icon: Lock,
    sections: [
      {
        title: "Security Audits",
        icon: ShieldCheck,
        items: [
          { name: "Penetration Testing" },
          { name: "Vulnerability Assessments" },
          { name: "Security Auditing" },
          { name: "Static & Dynamic Code Review" },
        ],
      },
      {
        title: "Zero-Trust Defense",
        icon: Lock,
        items: [
          { name: "Identity & Access (IAM)" },
          { name: "End-to-End Encryption" },
          { name: "Network Segmentation" },
          { name: "Endpoint Security & EDR" },
        ],
      },
      {
        title: "Compliance & Risk",
        icon: FileCheck,
        items: [
          { name: "SOC2 Type II Readiness" },
          { name: "ISO 27001 Compliance" },
          { name: "HIPAA Security" },
          { name: "Data Privacy (GDPR/CCPA)" },
        ],
      },
    ],
    featured: {
      tag: "SOVEREIGN SECURITY",
      title: "Zero-Trust Defense & Sovereign Security",
      description: "Fortify mission-critical data with proactive red-team penetration testing, cryptographic isolation, and audit readiness.",
      href: "/services/cybersecurity",
      cta: "Explore Security Solutions",
      badge: "ISO 27001",
      metric: {
        value: "100%",
        label: "Zero-Trust Coverage",
      },
    },
  },
  {
    id: "enterprise-solutions",
    num: "06",
    title: "Enterprise Solutions",
    shortDesc: "ERP cloud integration, digital transformation consulting, and next-generation smart automation.",
    icon: Boxes,
    sections: [
      {
        title: "Business Platforms",
        icon: Briefcase,
        items: [
          { name: "ERP Cloud Integration" },
          { name: "Enterprise CRM Setup" },
          { name: "ERP Customization" },
          { name: "Supply Chain Tech" },
        ],
      },
      {
        title: "IT Consulting",
        icon: Share2,
        items: [
          { name: "Digital Transformation" },
          { name: "IT Strategy & Advisory" },
          { name: "IT Service Management" },
          { name: "Vendor Management" },
        ],
      },
      {
        title: "Emerging Tech",
        icon: Workflow,
        items: [
          { name: "Digital Twins" },
          { name: "Smart Automation" },
          { name: "Web3 & Blockchain" },
          { name: "Green IT Solutions" },
        ],
      },
    ],
    featured: {
      tag: "STRATEGIC TRANSFORMATION",
      title: "Intelligent Enterprise Modernization",
      description: "Re-platform mission-critical business workflows with modern ERP integrations, automated supply chains, and AI-enabled digital strategy.",
      href: "/services/enterprise-solutions",
      cta: "Explore Enterprise Solutions",
      badge: "Strategic Advisory",
      metric: {
        value: "45%",
        label: "TCO Reduction",
      },
    },
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Mega-Menu State (Services Dropdown)
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string>("custom-software-web");
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Lock body scroll for mobile drawer
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnterNav = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeaveNav = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const activeCategory =
    servicesMegaMenuData.find((cat) => cat.id === activeCategoryId) ||
    servicesMegaMenuData[0];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/95 backdrop-blur-md border-b border-[#222] shadow-2xl"
        : "bg-black/90 backdrop-blur-sm border-b border-[#1c1c1c]"
        }`}
    >
      {/* Top NVIDIA-style Tech Ticker Bar */}


      {/* Main Navigation Bar */}
      <div className="max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[76px] lg:h-[84px]">
          {/* Left Section: Brand Logo */}
          <div className="flex items-center gap-6 lg:gap-10">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none shrink-0 py-1"
              onClick={() => {
                setSearchOpen(false);
                setMobileMenuOpen(false);
                setIsServicesOpen(false);
              }}
            >
              <div className="relative flex items-center">
                <Image
                  src="/assets/Logo.png"
                  alt="Total Tech Logo"
                  width={260}
                  height={68}
                  className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className="px-3.5 py-2 text-[14px] font-medium tracking-wide text-neutral-300 hover:text-white hover:bg-neutral-900/70 rounded-xs transition-colors"
              >
                Home
              </Link>

              {/* SERVICES MEGA-MENU TRIGGER (NVIDIA STYLE) */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterNav}
                onMouseLeave={handleMouseLeaveNav}
              >
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-semibold tracking-wide rounded-xs transition-all cursor-pointer ${isServicesOpen
                    ? "text-white bg-neutral-900 border-b-2 border-[#FF1E27]"
                    : "text-neutral-200 hover:text-white hover:bg-neutral-900/70"
                    }`}
                  aria-expanded={isServicesOpen}
                >
                  <span className="flex items-center gap-1.5">
                    Services
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-[#FF1E27]" : ""
                      }`}
                  />
                </button>
              </div>

              <Link
                href="/products"
                className="px-3.5 py-2 text-[14px] font-medium tracking-wide text-neutral-300 hover:text-white hover:bg-neutral-900/70 rounded-xs transition-colors"
              >
                Products
              </Link>

              <Link
                href="/solutions"
                className="px-3.5 py-2 text-[14px] font-medium tracking-wide text-neutral-300 hover:text-white hover:bg-neutral-900/70 rounded-xs transition-colors"
              >
                Solutions
              </Link>

              <Link
                href="/developers"
                className="px-3.5 py-2 text-[14px] font-medium tracking-wide text-neutral-300 hover:text-white hover:bg-neutral-900/70 rounded-xs transition-colors"
              >
                Developers
              </Link>

              <Link
                href="/about"
                className="px-3.5 py-2 text-[14px] font-medium tracking-wide text-neutral-300 hover:text-white hover:bg-neutral-900/70 rounded-xs transition-colors"
              >
                Company
              </Link>
            </nav>
          </div>

          {/* Right Section: Search, User, and CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-xs text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer ${searchOpen ? "text-[#FF1E27] bg-neutral-900" : ""
                }`}
              title="Search Total Tech Services & Solutions"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Account Icon */}
            <Link
              href="/account"
              className="hidden sm:flex p-2 rounded-xs text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
              title="Client Portal / Account"
              aria-label="Account"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            {/* Red Action CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs md:text-[13px] font-bold tracking-wider uppercase px-4 py-2 rounded-xs transition-all duration-200 shadow-[0_0_15px_rgba(255,30,39,0.35)] hover:shadow-[0_0_24px_rgba(255,30,39,0.6)]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setSearchOpen(false);
                setIsServicesOpen(false);
              }}
              className="lg:hidden p-2 text-neutral-200 hover:text-white hover:bg-neutral-900 rounded-xs transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#FF1E27]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================= */}
      {/* SERVICES MEGA-MENU (CLEAN GRAY & WHITE WITH LARGER FONTS) */}
      {/* ======================================================= */}
      {isServicesOpen && (
        <div
          onMouseEnter={handleMouseEnterNav}
          onMouseLeave={handleMouseLeaveNav}
          className="hidden lg:block w-full bg-[#121622] border-b border-[#2d364a] shadow-[0_30px_90px_rgba(0,0,0,0.85)] animate-in fade-in slide-in-from-top-1 duration-200"
        >
          <div className="max-w-[1780px] mx-auto px-6 lg:px-10 py-7">
            {/* 2-Section Clean Mega Menu: Sidebar Categories (4 cols) | Submenu 3-Columns (8 cols) */}
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* 1. Left Sidebar: 6 Service Categories */}
              <div className="col-span-4 space-y-2.5 pr-6 border-r border-[#262f42]">
                {servicesMegaMenuData.map((cat) => {
                  const IconComp = cat.icon;
                  const isActive = activeCategoryId === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onMouseEnter={() => setActiveCategoryId(cat.id)}
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`w-full text-left p-4 rounded-md transition-all flex items-center justify-between group cursor-pointer border ${isActive
                        ? "bg-[#202738] border-l-4 border-l-[#FF1E27] border-y-[#36425c] border-r-[#36425c] text-white shadow-lg"
                        : "bg-[#161c28] border-[#242d3e] hover:bg-[#1d2434] hover:border-[#36425c] text-slate-200"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-[#FF1E27] bg-[#FF1E27]/10 px-1.5 py-0.5 rounded-xs border border-[#FF1E27]/20">
                              {cat.num}
                            </span>
                            <span
                              className={`text-[15px] font-bold tracking-wide ${isActive ? "text-white" : "text-slate-100"
                                }`}
                            >
                              {cat.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-1 max-w-[280px]">
                            {cat.shortDesc}
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 shrink-0 ${isActive
                          ? "text-[#FF1E27] translate-x-1"
                          : "text-slate-500 group-hover:text-slate-300"
                          }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* 2. Submenu: 3 Subsections with larger fonts, bright white text & gray hover background */}
              <div className="col-span-8 grid grid-cols-3 gap-6 pl-2">
                {activeCategory.sections.map((sub, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-md bg-[#161c28] border border-[#262f42] space-y-4"
                    >
                      {/* Section Title */}
                      <div className="flex items-center gap-2 pb-3 border-b border-[#283246]">
                        <div className="w-1.5 h-3.5 bg-[#FF1E27] rounded-xs shrink-0" />
                        <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
                          {sub.title}
                        </h4>
                      </div>

                      {/* Items List - bordered cards with bright white text & gray hover background */}
                      <ul className="space-y-2.5">
                        {sub.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={`/services/${activeCategory.id}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="group/item flex items-center justify-between p-3 rounded-sm bg-[#1e2536] hover:bg-[#2b354c] border border-[#2a3449] hover:border-slate-400 transition-all text-sm text-slate-100 hover:text-white"
                            >
                              <span className="flex items-center gap-2.5 group-hover/item:translate-x-1 transition-transform">
                                <span className="w-2 h-2 rounded-full bg-[#FF1E27] shrink-0" />
                                <span className="font-semibold text-[13.5px] leading-snug">{item.name}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH BAR OVERLAY */}
      {searchOpen && (
        <div className="w-full bg-[#0c0c0c] border-b border-[#252525] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-[1200px] mx-auto px-6 py-6">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-[#FF1E27]" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 6 service pillars, AI architectures, cloud systems, and technical docs..."
                className="w-full bg-[#161616] border border-[#333] focus:border-[#FF1E27] text-white placeholder-neutral-500 rounded-xs pl-12 pr-12 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF1E27] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-neutral-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER ACCORDION NAVIGATION */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-black/98 backdrop-blur-2xl border-t border-[#222] z-50 overflow-y-auto p-6 animate-in fade-in duration-200">
          {/* Mobile Search Box */}
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF1E27]" />
            <input
              type="text"
              placeholder="Search services, products..."
              className="w-full bg-[#141414] border border-[#333] text-white text-sm rounded-xs pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#FF1E27]"
            />
          </div>

          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-semibold text-neutral-100 hover:text-[#FF1E27] border-b border-[#1a1a1a]"
            >
              Home
            </Link>

            {/* MOBILE SERVICES ACCORDION LIST */}
            <div className="border-b border-[#1a1a1a] py-2">
              <div className="py-2 text-xs font-bold uppercase tracking-widest text-[#FF1E27]">
                Services & Capabilities
              </div>

              <div className="space-y-2 mt-1">
                {servicesMegaMenuData.map((cat) => {
                  const isCatOpen = mobileActiveCategory === cat.id;

                  return (
                    <div key={cat.id} className="border border-[#1f1f1f] rounded-xs overflow-hidden bg-[#0d0d0d]">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActiveCategory(isCatOpen ? null : cat.id)
                        }
                        className="w-full flex items-center justify-between p-3 text-left font-semibold text-sm text-neutral-200 hover:text-white"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#FF1E27] font-mono text-xs">{cat.num}.</span>
                          <span>{cat.title}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-500 transition-transform ${isCatOpen ? "rotate-180 text-[#FF1E27]" : ""
                            }`}
                        />
                      </button>

                      {isCatOpen && (
                        <div className="p-3 bg-black border-t border-[#1a1a1a] space-y-4">
                          {cat.sections.map((sub, sIdx) => (
                            <div key={sIdx} className="space-y-2">
                              <h5 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                                {sub.title}
                              </h5>
                              <ul className="space-y-1.5 pl-2 border-l border-[#222]">
                                {sub.items.map((it, itIdx) => (
                                  <li key={itIdx}>
                                    <Link
                                      href={`/services/${cat.id}`}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-xs text-neutral-300 hover:text-[#FF1E27] block py-1"
                                    >
                                      {it.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-semibold text-neutral-100 hover:text-[#FF1E27] border-b border-[#1a1a1a]"
            >
              Products
            </Link>

            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-semibold text-neutral-100 hover:text-[#FF1E27] border-b border-[#1a1a1a]"
            >
              Solutions
            </Link>

            <Link
              href="/developers"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-semibold text-neutral-100 hover:text-[#FF1E27] border-b border-[#1a1a1a]"
            >
              Developers
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-semibold text-neutral-100 hover:text-[#FF1E27] border-b border-[#1a1a1a]"
            >
              Company
            </Link>
          </div>

          <div className="mt-8 pt-4 space-y-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white font-bold uppercase text-sm py-3.5 rounded-xs transition-all shadow-[0_0_20px_rgba(255,30,39,0.4)]"
            >
              <span>Get Started / Consult Architect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Sleek Gradient Separator Line After Header */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2a3042] via-50% via-[#FF1E27]/40 to-transparent" />
    </header>
  );
}