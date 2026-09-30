import PricingCard from "@/components/ui/PricingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function PricingTeaser() {
  const plans = await prisma.pricingPlan.findMany({ orderBy: { order: "asc" } });

  return (
    <section className="py-16 md:py-18 bg-base-100">
      <div className="section-container">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent plans that scale with you"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.monthlyPrice}
              description={plan.description}
              features={plan.features}
              featured={plan.isFeatured}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/pricing" className="link link-primary font-semibold">
            Compare all plan features →
          </Link>
        </div>
      </div>
    </section>
  );
}