import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import VisionMission from "@/components/about/VisionMission";
import AboutStats from "@/components/about/AboutStats";
import TrustSection from "@/components/about/TrustSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | iAccountant.io",
  description:
    "Learn how iAccountant.io combines AI automation with certified accountants to deliver accurate, real-time bookkeeping for modern businesses.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <AboutStats />
      <TrustSection />
      <TestimonialSection />
      <AboutCTA />
    </>
  );
}