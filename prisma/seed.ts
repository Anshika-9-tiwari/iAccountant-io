import {prisma} from '@/lib/prisma'

async function main() {
  console.log("🌱 Seeding database...");

  await prisma.testimonial.createMany({
    data: [
      {
        name: "Sarah Johnson",
        role: "CEO",
        company: "RetailCo",
        quote:
          "iAccountant.io cut our monthly close time in half. Their AI + human review combo is unmatched.",
        rating: 5,
        featured: true,
      },
      {
        name: "Michael Torres",
        role: "Founder",
        company: "SaaSly",
        quote: "Finally, books I can trust without hiring an in-house controller.",
        rating: 5,
      },
      {
        name: "Priya Kapoor",
        role: "Operations Lead",
        company: "BuildRight Construction",
        quote: "Their tax team caught an error that saved us thousands in penalties.",
        rating: 5,
      },
      {
        name: "David Lin",
        role: "Owner",
        company: "Lin & Co. Cafes",
        quote: "Onboarding took two days. My books have never been this clean.",
        rating: 5,
      },
    ],
  });

  await prisma.pricingPlan.createMany({
    data: [
      {
        name: "Starter",
        slug: "starter",
        monthlyPrice: 599,
        yearlyPrice: 7188,
        description: "For solopreneurs & small teams",
        features: ["Monthly bookkeeping", "Bank reconciliation", "Basic reports", "Email support"],
        order: 1,
      },
      {
        name: "Growth",
        slug: "growth",
        monthlyPrice: 999,
        yearlyPrice: 11988,
        description: "For growing businesses",
        features: [
          "Weekly bookkeeping",
          "AP/AR management",
          "Custom dashboards",
          "Dedicated accountant",
          "Priority support",
        ],
        isFeatured: true,
        order: 2,
      },
      {
        name: "Enterprise",
        slug: "enterprise",
        monthlyPrice: 1199-1499,
        yearlyPrice: 14388-17988,
        description: "For high-volume operations",
        features: [
          "Daily bookkeeping",
          "Full AP/AR + payroll support",
          "Tax prep & filing",
          "CFO advisory calls",
          "24/7 support",
        ],
        order: 3,
      },
    ],
  });

  await prisma.stat.createMany({
    data: [
      { label: "Businesses Served", value: "2,400", suffix: "+", order: 1 },
      { label: "Transactions Processed", value: "18M", suffix: "+", order: 2 },
      { label: "Bookkeeping Accuracy", value: "99.9", suffix: "%", order: 3 },
      { label: "Avg. Response Time", value: "2", suffix: "hrs", order: 4 },
    ],
  });

  console.log("✅ Seed completed successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });