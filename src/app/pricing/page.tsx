import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

import PricingCards from "@/components/pricing/PricingCards";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";
import PricingHero from "@/components/pricing/PricingHero";

export const metadata: Metadata = {  
  title: "Pricing | iAccountant.io",
  description:
    "Simple, transparent pricing for AI-powered bookkeeping, AP/AR, tax prep, and account compilation. Plans start at $199/mo.",
};

export default async function PricingPage() {
  const plans = await prisma.pricingPlan.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <>
      <PricingHero/>
      <PricingCards plans={plans} />
      <PricingComparison />
      <PricingFAQ />
      <PricingCTA /> 
    </>
  );
}