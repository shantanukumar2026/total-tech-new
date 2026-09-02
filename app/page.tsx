import Hero from "@/components/sections/Hero";
import CorporateOverview from "@/components/sections/CorporateOverview";
import CoreSolutions from "@/components/sections/CoreSolutions";
import EnterpriseDelivery from "@/components/sections/EnterpriseDelivery";
import TechStack from "@/components/sections/TechStack";
import GlobalInfrastructure from "@/components/sections/GlobalInfrastructure";
import BlogInsights from "@/components/sections/BlogInsights";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-[#0b0c10] selection:bg-[#FF1E27] selection:text-white">
      {/* 1. Hero Showcase Slider */}
      <Hero />

      {/* 2. WHO WE ARE: Corporate Profile & Governance (Light Contrast Section) */}
      <CorporateOverview />

      {/* 3. WHAT WE DO: Enterprise Core Solutions & Engineering Capabilities (Dark Slate Showcase) */}
      <CoreSolutions />

      {/* 4. HOW WE WORK: Disciplined 4-Phase Delivery Lifecycle (Light Slate Section) */}
      <EnterpriseDelivery />

      {/* 5. OUR TECHNOLOGY: Stack & Framework Ecosystem */}
      <TechStack />

      {/* 6. OUR SCALE: Global Cloud & Data Center Infrastructure */}
      <GlobalInfrastructure />

      {/* 7. LATEST INSIGHTS: Engineering Blog & Research Whitepapers (Dark Section) */}
      <BlogInsights />
    </main>
  );
}
