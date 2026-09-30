import {
  UserPlus,
  DatabaseZap,
  Wand2,
  UserCheck,
  BarChart3,
  RefreshCw,
} from "lucide-react";

export const processSteps = [
  {
    id: "onboarding",
    step: "01",
    icon: UserPlus,
    title: "Discovery & Onboarding",
    duration: "Day 1 – 2",
    desc: "We start with a short call to understand your business, chart of accounts, and reporting needs. You'll get a dedicated onboarding specialist who guides you through every setup step.",
    checklist: [
      "Discovery call to map your finance workflow",
      "Secure bank & accounting software connection",
      "Chart of accounts audit and cleanup",
      "Dedicated account manager assigned",
    ],
  },
  {
    id: "migration",
    step: "02",
    icon: DatabaseZap,
    title: "Data Migration & Cleanup",
    duration: "Day 3 – 7",
    desc: "We import historical transactions from QuickBooks, Xero, or spreadsheets, then reconcile prior periods so you start on a clean baseline. No mystery balances left behind.",
    checklist: [
      "Import last 12 months of transactions",
      "Reconcile bank and credit card statements",
      "Categorize and tag legacy entries",
      "Deliver a clean opening balance report",
    ],
  },
  {
    id: "automation",
    step: "03",
    icon: Wand2,
    title: "AI-Powered Categorization",
    duration: "Ongoing (Daily)",
    desc: "Our AI engine categorizes new transactions in real time using rules trained on your business. This eliminates 90% of manual data entry — before a human even touches the books.",
    checklist: [
      "Automatic transaction categorization",
      "Vendor recognition & matching",
      "Duplicate detection and flagging",
      "Anomaly alerts for unusual spending",
    ],
  },
  {
    id: "review",
    step: "04",
    icon: UserCheck,
    title: "Human CPA Review",
    duration: "Weekly",
    desc: "Every AI decision is reviewed by a certified accountant on your team. They resolve edge cases, adjust categorizations, and make sure your books stay audit-ready.",
    checklist: [
      "Weekly CPA-verified transaction review",
      "Adjusting journal entries when needed",
      "Direct Slack / email access to your accountant",
      "Month-end close within 3 business days",
    ],
  },
  {
    id: "reporting",
    step: "05",
    icon: BarChart3,
    title: "Reporting & Insights",
    duration: "Monthly",
    desc: "You get a real-time dashboard plus a monthly report with P&L, balance sheet, cash flow, and a plain-English summary of what changed and why.",
    checklist: [
      "Live financial dashboard access",
      "Monthly P&L, Balance Sheet, Cash Flow",
      "Plain-English performance summary",
      "Custom reports on request (KPIs, segments)",
    ],
  },
  {
    id: "advisory",
    step: "06",
    icon: RefreshCw,
    title: "Continuous Improvement",
    duration: "Quarterly",
    desc: "Every quarter, your account manager reviews trends, flags opportunities, and adjusts your accounting setup as your business grows. Bookkeeping should scale with you — not slow you down.",
    checklist: [
      "Quarterly financial review call",
      "Cash flow forecasting",
      "Tax-savings opportunity flagging",
      "System adjustments as you scale",
    ],
  },
];

export const engagementModels = [
  {
    name: "Managed Bookkeeping",
    desc: "We handle 100% of your day-to-day books — you approve monthly reports.",
    best: "Best for founders who want to stay hands-off.",
  },
  {
    name: "Hybrid Model",
    desc: "Your internal team codes AP/AR; we handle reconciliation, review, and reporting.",
    best: "Best for businesses with a light in-house finance function.",
  },
  {
    name: "Advisory + Compliance",
    desc: "Full-service bookkeeping plus quarterly CFO-level reviews and tax prep.",
    best: "Best for growth-stage businesses preparing to raise or scale.",
  },
];

export const tools = [
  "QuickBooks Online", "Xero", "NetSuite", "Sage Intacct",
  "Stripe", "Bill.com", "Gusto", "Ramp",
  "Brex", "Expensify", "Plaid", "HubSpot",
];

export const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Most businesses are fully onboarded within 7 days. Simpler setups (single bank account, clean historical data) go live in 48 hours.",
  },
  {
    q: "Do I get a dedicated accountant, or a rotating team?",
    a: "You get one dedicated CPA plus a backup — always the same faces. No ticket queues, no repeating your situation to strangers.",
  },
  {
    q: "What if my books are a mess right now?",
    a: "We specialize in cleanup work. Our discovery call includes a free books audit, and we quote cleanup separately from ongoing bookkeeping.",
  },
  {
    q: "Can you work with our existing accountant or CFO?",
    a: "Absolutely. Many of our clients keep their strategic CFO or tax preparer — we handle the operational bookkeeping that frees them up for high-value work.",
  },
  {
    q: "What happens if I want to leave?",
    a: "Your data is yours. We'll export everything in your accounting software's native format and hand off cleanly — no contracts, no exit fees.",
  },
];