
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
                width={150}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Pioneering futuristic technologies, quantum computing acceleration, and sovereign enterprise AI infrastructure.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#FF1E27]">
              <span className="w-2 h-2 rounded-full bg-[#FF1E27]" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products" className="hover:text-[#FF1E27] transition-colors">GPUs & Superchips</Link></li>
              <li><Link href="/products" className="hover:text-[#FF1E27] transition-colors">AI Enterprise Suite</Link></li>
              <li><Link href="/products" className="hover:text-[#FF1E27] transition-colors">Networking & Quantum</Link></li>
              <li><Link href="/products" className="hover:text-[#FF1E27] transition-colors">Edge & Robotics</Link></li>
            </ul>
          </div>

          {/* Developers & Ecosystem */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Developers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/docs" className="hover:text-[#FF1E27] transition-colors">Documentation</Link></li>
              <li><Link href="/developers" className="hover:text-[#FF1E27] transition-colors">Developer Program</Link></li>
              <li><Link href="/blog" className="hover:text-[#FF1E27] transition-colors">Technical Blog</Link></li>
              <li><Link href="/community" className="hover:text-[#FF1E27] transition-colors">Community Forums</Link></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-[#FF1E27] transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#FF1E27] transition-colors">Careers <span className="text-[10px] text-[#FF1E27] bg-[#FF1E27]/10 px-1 py-0.5 rounded-xs ml-1 font-semibold">HIRING</span></Link></li>
              <li><Link href="/contact" className="hover:text-[#FF1E27] transition-colors">Contact Sales</Link></li>
              <li><Link href="/support" className="hover:text-[#FF1E27] transition-colors">Global Support</Link></li>
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