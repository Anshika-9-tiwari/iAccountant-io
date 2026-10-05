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
        monthlyPrice: 199,
        yearlyPrice: 1990,
        description: "For solopreneurs and small teams doing under $500K in revenue.",
        features: [
          "Monthly bookkeeping (up to 200 transactions)",
          "1 bank account + 1 credit card reconciliation",
          "Monthly P&L and Balance Sheet",
          "Quarterly cash flow report",
          "Email support (48hr response)",
          "AI transaction categorization",
        ],
        isFeatured: false,
        order: 1,
      },
      {
        name: "Growth",
        slug: "growth",
        monthlyPrice: 499,
        yearlyPrice: 4990,
        description: "For growing businesses that need weekly books and AP/AR management.",
        features: [
          "Weekly bookkeeping (up to 1,000 transactions)",
          "Up to 5 bank & credit card accounts",
          "Accounts Payable & Receivable management",
          "Monthly P&L, Balance Sheet, Cash Flow",
          "Dedicated CPA + account manager",
          "Priority Slack & email support (12hr response)",
          "AI categorization + anomaly detection",
          "Sales tax tracking",
        ],
        isFeatured: true,
        order: 2,
      },
      {
        name: "Scale",
        slug: "scale",
        monthlyPrice: 899,
        yearlyPrice: 8990,
        description: "For established businesses with complex finances and multi-entity needs.",
        features: [
          "Daily bookkeeping (unlimited transactions)",
          "Unlimited bank & credit card accounts",
          "Full AP/AR + payroll journal entries",
          "Weekly financial dashboards",
          "Tax preparation & filing (federal + state)",
          "Quarterly CFO advisory calls",
          "Multi-entity consolidation",
          "Dedicated 3-person pod (CPA + reviewer + AM)",
          "24/7 priority support",
          "Custom KPI reporting",
        ],
        isFeatured: false,
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