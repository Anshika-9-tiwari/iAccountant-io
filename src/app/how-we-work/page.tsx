import type { Metadata } from "next";
import HowHero from "@/components/how-we-work/HowHero";
import ProcessTimeline from "@/components/how-we-work/ProcessTimeline";
import ToolsStack from "@/components/how-we-work/ToolsStack";
import DedicatedTeam from "@/components/how-we-work/DedicatedTeam";
import EngagementModels from "@/components/how-we-work/EngagementModels";
import FAQSection from "@/components/how-we-work/FAQSection";
import HowCTA from "@/components/how-we-work/HowCTA";

export const metadata: Metadata = {
  title: "How We Work | iAccountant.io",
  description:
    "See exactly how iAccountant.io handles your books — a 6-step process combining AI automation and certified human CPA review.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <HowHero />
      <ProcessTimeline />
      <ToolsStack />
      <DedicatedTeam />
      <EngagementModels />
      <FAQSection />
      <HowCTA />
    </>
  );
}