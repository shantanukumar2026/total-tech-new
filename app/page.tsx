import Hero from "@/components/sections/Hero";
import StatsMetrics from "@/components/sections/StatsMetrics";
import StrategicPartnerships from "@/components/sections/StrategicPartnerships";
import CorporateOverview from "@/components/sections/CorporateOverview";
import CoreSolutions from "@/components/sections/CoreSolutions";
import GlobalInfrastructure from "@/components/sections/GlobalInfrastructure";
// import Industries from "@/components/sections/Industries";
// import TechStack from "@/components/sections/TechStack";
// import SecurityCompliance from "@/components/sections/SecurityCompliance";
// import EnterpriseDelivery from "@/components/sections/EnterpriseDelivery";
// import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-[#0b0c10] selection:bg-[#FF1E27] selection:text-white">
      {/* 1. Hero Showcase Slider */}
      <Hero />




      {/* 4. Corporate Profile & Governance */}
      <CorporateOverview />

      {/* 5. Enterprise Core Solutions */}
      <CoreSolutions />

      {/* 6. Global Cloud & Data Center Infrastructure */}
      <GlobalInfrastructure />


    </main>
  );
}
