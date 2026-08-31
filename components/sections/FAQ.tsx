"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who owns the source code and intellectual property (IP)?",
      answer:
        "You own 100% of all intellectual property, source code, data pipelines, and deployment scripts created during our engagement upon final payment. We do not lock you into proprietary vendor systems.",
    },
    {
      question: "How quickly can Total Tech kick off our project?",
      answer:
        "Once we align on technical requirements and scope in our initial discovery session, we typically assign a dedicated engineering sprint squad within 3 to 5 business days.",
    },
    {
      question: "Will we communicate directly with engineers or account managers?",
      answer:
        "You collaborate directly with the senior developers and architects building your product. We use shared Slack/Discord channels, weekly live sprint demos, and GitHub repos for full transparency.",
    },
    {
      question: "What security standards and compliance protocols do you follow?",
      answer:
        "We implement zero-trust architecture, automated vulnerability scanning, end-to-end encryption for sensitive data, and standard compliance frameworks including SOC2, HIPAA, and GDPR best practices.",
    },
    {
      question: "What post-launch maintenance and support options are available?",
      answer:
        "We provide warranty bug fixes after deployment alongside flexible ongoing SLA retainers, 24/7 server monitoring, DevOps updates, and continuous feature expansion.",
    },
    {
      question: "Can you take over and modernize an existing or legacy codebase?",
      answer:
        "Yes. We frequently conduct code audits, refactor legacy monolithic architectures into scalable microservices, upgrade outdated dependencies, and optimize performance bottlenecks.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#090a0d] text-white py-20 border-t border-neutral-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Clear answers regarding our engineering process, IP ownership, timelines, and security.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-md border border-neutral-800 bg-[#12141a] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 hover:bg-neutral-800/40 transition-colors cursor-pointer"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FF1E27] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-md bg-[#101217] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-semibold text-white">Have a specific question about your project?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">Our technical team is ready to answer any custom architectural inquiries.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF1E27] hover:bg-[#E0151E] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors flex-shrink-0"
          >
            <span>Ask an Engineer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
