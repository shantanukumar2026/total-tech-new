"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Workflow, 
  Layers, 
  CheckCircle2, 
  Terminal,
  Server
} from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Full Ecosystem" },
    { id: "frontend", label: "Frontend & Mobile" },
    { id: "backend", label: "Backend & Systems" },
    { id: "ai", label: "AI & Intelligence" },
    { id: "cloud", label: "Cloud & Infrastructure" },
    { id: "data", label: "Databases & Storage" },
  ];

  const technologies = [
    // Frontend
    { name: "Next.js 15 & React 19", category: "frontend", desc: "Server components, hybrid streaming, and optimized SSR", badge: "Core Web" },
    { name: "TypeScript", category: "frontend", desc: "Strict end-to-end type safety across clients and APIs", badge: "Language" },
    { name: "React Native & Swift", category: "frontend", desc: "Cross-platform and native high-performance mobile apps", badge: "Mobile" },
    { name: "Tailwind CSS & Radix", category: "frontend", desc: "Accessible, responsive, design-system-first UI interfaces", badge: "Design" },

    // Backend
    { name: "Node.js & Bun", category: "backend", desc: "Event-driven asynchronous microservices and edge APIs", badge: "Runtime" },
    { name: "Python & FastAPI", category: "backend", desc: "High-throughput REST/gRPC endpoints & data pipelines", badge: "Services" },
    { name: "Go (Golang)", category: "backend", desc: "Concurrency-optimized network services & worker daemons", badge: "Low Latency" },
    { name: "GraphQL & gRPC", category: "backend", desc: "Strongly typed communication protocols for internal APIs", badge: "Protocol" },

    // AI
    { name: "PyTorch & Transformers", category: "ai", desc: "Deep learning model fine-tuning and inference pipelines", badge: "AI Core" },
    { name: "LangChain & LlamaIndex", category: "ai", desc: "Retrieval-Augmented Generation (RAG) and Agent orchestration", badge: "RAG / Agents" },
    { name: "vLLM & TensorRT-LLM", category: "ai", desc: "High-throughput GPU model serving with low-latency KV caching", badge: "Serving" },
    { name: "Vector Search & Embeddings", category: "ai", desc: "Semantic vector databases (Pinecone, Qdrant, pgvector)", badge: "Vector DB" },

    // Cloud & DevOps
    { name: "AWS & Microsoft Azure", category: "cloud", desc: "Resilient multi-region serverless and container clouds", badge: "Public Cloud" },
    { name: "Docker & Kubernetes (K8s)", category: "cloud", desc: "Containerized autoscaling orchestration and zero-downtime rollouts", badge: "DevOps" },
    { name: "Terraform & OpenTofu", category: "cloud", desc: "Reproducible Infrastructure as Code (IaC) pipelines", badge: "IaC" },
    { name: "Cloudflare & CDN Edge", category: "cloud", desc: "Global DDoS protection, edge caching, and DNS management", badge: "Security" },

    // Databases & Storage
    { name: "PostgreSQL & Supabase", category: "data", desc: "ACID-compliant relational data modeling with Row-Level Security", badge: "Relational" },
    { name: "Redis & Upstash", category: "data", desc: "Sub-millisecond memory caching, session states, and pub/sub queues", badge: "Cache" },
    { name: "MongoDB & DocumentDB", category: "data", desc: "Flexible JSON document store for rapid schema iteration", badge: "NoSQL" },
    { name: "Apache Kafka & RabbitMQ", category: "data", desc: "Distributed real-time event streaming and message queuing", badge: "Streaming" },
  ];

  const filteredTech = activeCategory === "all"
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="bg-[#0b0c10] text-white py-20 border-t border-neutral-800 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF1E27] mb-2">
              Technology Stack & Ecosystem
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineered with modern, proven technologies.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              We choose battle-tested frameworks, rock-solid databases, and scalable cloud architectures to ensure your software is resilient, fast, and future-proof.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#12141a] rounded-md border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#FF1E27] text-white shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-md bg-[#12141a] border border-neutral-800/80 hover:border-neutral-700 hover:bg-[#151821] transition-all group"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-neutral-800 text-neutral-300 border border-neutral-700/60 group-hover:border-[#FF1E27]/40 group-hover:text-[#FF1E27] transition-colors">
                  {tech.badge}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#FF1E27] transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-white mb-1.5">
                {tech.name}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Feature Note */}
        <div className="mt-8 p-4 rounded-md bg-[#101217] border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-4 h-4 text-[#FF1E27]" />
            <span>Need a custom stack or proprietary integration? We support on-prem, air-gapped, and hybrid configurations.</span>
          </div>
          <span className="text-neutral-500 font-mono">100% CI/CD & Automated Quality Checks</span>
        </div>

      </div>
    </section>
  );
}
