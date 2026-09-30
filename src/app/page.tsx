import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/home/LogoMarquee";
import ServiceBento from "@/components/home/ServiceBento";
import ProcessSteps from "@/components/home/ProcessSteps";
import ComparisonTable from "@/components/home/ComparisonTable";
import StatsBand from "@/components/home/StatsBand";
import TestimonialSection from "@/components/home/TestimonialSection";
import PricingTeaser from "@/components/home/PricingTeaser";
import SecurityStrip from "@/components/home/SecurityStrip";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServiceBento />
      <ProcessSteps />
      <ComparisonTable />
      <StatsBand />
      <PricingTeaser />
      <SecurityStrip />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}