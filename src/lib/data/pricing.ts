export const comparisonFeatures = [
  {
    category: "Bookkeeping",
    rows: [
      { feature: "Transaction volume", starter: "Up to 200/mo", growth: "Up to 1,000/mo", scale: "Unlimited" },
      { feature: "Bank & credit card accounts", starter: "2", growth: "5", scale: "Unlimited" },
      { feature: "Bookkeeping frequency", starter: "Monthly", growth: "Weekly", scale: "Daily" },
      { feature: "AI transaction categorization", starter: true, growth: true, scale: true },
      { feature: "Anomaly & fraud detection", starter: false, growth: true, scale: true },
      { feature: "Bank reconciliation", starter: true, growth: true, scale: true },
    ],
  },
  {
    category: "Accounts Payable & Receivable",
    rows: [
      { feature: "Invoice generation & sending", starter: false, growth: true, scale: true },
      { feature: "Bill capture & payment scheduling", starter: false, growth: true, scale: true },
      { feature: "Collections & dunning emails", starter: false, growth: true, scale: true },
      { feature: "Vendor management", starter: false, growth: true, scale: true },
      { feature: "1099 tracking & preparation", starter: false, growth: false, scale: true },
    ],
  },
  {
    category: "Reporting & Advisory",
    rows: [
      { feature: "P&L and Balance Sheet", starter: "Monthly", growth: "Monthly", scale: "Weekly" },
      { feature: "Cash Flow statement", starter: "Quarterly", growth: "Monthly", scale: "Weekly" },
      { feature: "Custom KPI dashboards", starter: false, growth: false, scale: true },
      { feature: "Multi-entity consolidation", starter: false, growth: false, scale: true },
      { feature: "CFO advisory calls", starter: false, growth: false, scale: "Quarterly" },
    ],
  },
  {
    category: "Tax & Compliance",
    rows: [
      { feature: "Sales tax tracking", starter: false, growth: true, scale: true },
      { feature: "Federal & state tax filing", starter: false, growth: false, scale: true },
      { feature: "Quarterly estimated tax calculations", starter: false, growth: false, scale: true },
      { feature: "Year-end tax planning", starter: false, growth: false, scale: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Dedicated CPA", starter: false, growth: true, scale: true },
      { feature: "Dedicated account manager", starter: false, growth: true, scale: true },
      { feature: "Support channels", starter: "Email", growth: "Slack + Email", scale: "Slack + Email + Phone" },
      { feature: "Response time", starter: "48 hours", growth: "12 hours", scale: "4 hours" },
      { feature: "Onboarding specialist", starter: false, growth: true, scale: true },
    ],
  },
];

export const pricingFAQs = [
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any mid-cycle upgrades.",
  },
  {
    q: "What happens if I exceed my transaction limit?",
    a: "We'll notify you when you're approaching your limit. You can either upgrade your plan or we'll handle the overage at a per-transaction rate — no surprise charges.",
  },
  {
    q: "Is there a setup fee or long-term contract?",
    a: "No setup fees, no contracts. All plans are month-to-month (or annual if you choose the discount). You can cancel anytime with 30 days' notice.",
  },
  {
    q: "Do you offer discounts for nonprofits or startups?",
    a: "Yes. We offer 20% off for registered nonprofits and early-stage startups (pre-Series A). Contact our team to apply.",
  },
  {
    q: "What's included in the free trial?",
    a: "You get 14 days of our Growth plan — full access to bookkeeping, AP/AR, and reporting. No credit card required. At the end, pick any plan or walk away.",
  },
  {
    q: "How does annual billing work?",
    a: "You pay for 12 months upfront and get roughly 2 months free compared to monthly billing. Annual plans auto-renew unless you cancel 30 days before renewal.",
  },
];