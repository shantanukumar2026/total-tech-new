
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#070707] text-neutral-400 border-t border-[#1a1a1a]">
      <div className="max-w-[1720px] mx-auto px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/Logo.png"
                alt="Total Tech Logo"
                width={240}
                height={60}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Total Tech designs and builds custom web platforms, mobile apps, and cloud software for growing companies and modern enterprises.
            </p>
            <p className="text-xs text-neutral-500">
              United States &bull; Global Engineering Services
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/custom-software-web" className="hover:text-[#FF1E27] transition-colors">Web & Mobile Apps</Link></li>
              <li><Link href="/services/ai-data-solutions" className="hover:text-[#FF1E27] transition-colors">AI & Automation</Link></li>
              <li><Link href="/services/cloud-devops" className="hover:text-[#FF1E27] transition-colors">Cloud & DevOps</Link></li>
              <li><Link href="/services/custom-software-web" className="hover:text-[#FF1E27] transition-colors">Custom CRM & ERP</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/blog" className="hover:text-[#FF1E27] transition-colors">Engineering Blog</Link></li>
              <li><Link href="/services" className="hover:text-[#FF1E27] transition-colors">Tech Capabilities</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF1E27] transition-colors">Project Estimator</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF1E27] transition-colors">Request a Consultation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-[#FF1E27] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF1E27] transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF1E27] transition-colors">Contact Support</Link></li>
              <li><Link href="/privacy" className="hover:text-[#FF1E27] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 border-t border-[#181818] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Total Tech Corporation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
            <Link href="/security" className="hover:text-neutral-300 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}