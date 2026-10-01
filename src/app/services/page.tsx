import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesComparison from "@/components/services/ServicesComparison";
import TestimonialSection from "@/components/home/TestimonialSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Services | iAccountant.io",
  description:
    "Bookkeeping, accounts payable & receivable, tax preparation, and account compilation — all handled by one dedicated team.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesComparison />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}