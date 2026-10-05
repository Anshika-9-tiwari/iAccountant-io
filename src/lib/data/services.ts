import {
  BookOpen,
  ArrowLeftRight,
  FileText,
  FileSpreadsheet,
  ClipboardList,
  Calculator,
  Receipt,
  BarChart4,
  ShieldCheck,
  Banknote,
  Landmark,
  CalendarCheck,
  FileCheck2,
  TrendingUp,
  AlertCircle,
  Users,
} from "lucide-react";

export const servicesOverview = [
  {
    slug: "bookkeeping",
    icon: BookOpen,
    title: "Bookkeeping",
    tagline: "Daily books, done right",
    desc: "Transaction categorization, bank reconciliation, and monthly closes — delivered by a dedicated CPA team.",
    accent: "primary", // emerald
    href: "/services/bookkeeping",
  },
  {
    slug: "accounts-payable-receivable",
    icon: ArrowLeftRight,
    title: "Accounts Payable & Receivable",
    tagline: "Cash flow, managed end-to-end",
    desc: "Automated invoicing, bill payments, collections, and vendor management — all in one workflow.",
    accent: "primary",
    href: "/services/accounts-payable-receivable",
  },
  {
    slug: "tax-preparation",
    icon: FileText,
    title: "Tax Preparation",
    tagline: "Compliant and stress-free",
    desc: "Federal, state, and sales tax filing — prepared, reviewed, and filed by licensed tax professionals.",
    accent: "primary", 
    href: "/services/tax-preparation",
  },
  {
    slug: "account-compilation",
    icon: FileSpreadsheet,
    title: "Account Compilation",
    tagline: "Audit-ready financials",
    desc: "CPA-compiled financial statements for lenders, investors, and compliance — formatted to GAAP standards.",
    accent: "primary",
    href: "/services/account-compilation",
  },
];

// ---------- BOOKKEEPING ----------
export const bookkeepingFeatures = [
  { icon: ClipboardList, title: "Daily Transaction Entry", desc: "Every transaction categorized and tagged within 24 hours." },
  { icon: Banknote, title: "Bank Reconciliation", desc: "Weekly reconciliation across all your accounts — no mystery balances." },
  { icon: BarChart4, title: "Monthly Financial Reports", desc: "P&L, Balance Sheet, and Cash Flow delivered by the 5th of each month." },
  { icon: ShieldCheck, title: "Audit-Ready Records", desc: "Books organized to GAAP standards, ready for any audit or review." },
  { icon: AlertCircle, title: "Anomaly Detection", desc: "AI flags unusual spending patterns and potential errors before you see them." },
  { icon: Users, title: "Dedicated CPA Team", desc: "Same bookkeeper + reviewer every month — never a rotating team." },
];

// ---------- AP & AR ----------
export const apArFeatures = {
  payable: [
    "Vendor onboarding & management",
    "Bill capture via email or upload",
    "Payment scheduling & approval workflows",
    "ACH, wire, and check payment processing",
    "1099 tracking and preparation",
  ],
  receivable: [
    "Automated recurring invoicing",
    "Payment reminders & dunning emails",
    "Credit card & ACH collection setup",
    "Aging reports & collection tracking",
    "Customer statement generation",
  ],
};

// ---------- TAX PREPARATION ----------
export const taxServices = [
  { icon: Receipt, title: "Business Income Tax", desc: "Federal and state corporate, S-Corp, partnership, and sole-prop returns." },
  { icon: Landmark, title: "Sales & Use Tax", desc: "Monthly filing across multiple jurisdictions, including nexus analysis." },
  { icon: CalendarCheck, title: "Quarterly Estimated Taxes", desc: "Proactive estimate calculations to avoid penalties and surprises." },
  { icon: FileCheck2, title: "1099 & W-2 Filing", desc: "End-of-year contractor and employee tax form preparation." },
];

export const taxCalendar = [
  { month: "Jan", event: "W-2s & 1099s due to recipients" },
  { month: "Mar", event: "S-Corp & Partnership returns (Form 1120-S / 1065)" },
  { month: "Apr", event: "Individual & C-Corp returns (Form 1040 / 1120)" },
  { month: "Jun", event: "Q2 estimated taxes due" },
  { month: "Sep", event: "Q3 estimated taxes due" },
  { month: "Dec", event: "Year-end tax planning window closes" },
];

// ---------- ACCOUNT COMPILATION ----------
export const compilationFeatures = [
  { icon: FileSpreadsheet, title: "Compiled Financial Statements", desc: "P&L, Balance Sheet, and Cash Flow prepared to AICPA SSARS standards." },
  { icon: TrendingUp, title: "Comparative Reporting", desc: "Side-by-side comparisons across months, quarters, or years." },
  { icon: Calculator, title: "Notes & Disclosures", desc: "Properly formatted disclosures that lenders and investors expect." },
  { icon: ShieldCheck, title: "CPA Letter Included", desc: "Official compilation letter signed by a licensed CPA for third-party use." },
];

export const compilationUseCases = [
  "Bank loan applications and line-of-credit renewals",
  "Investor due diligence and fundraising rounds",
  "Franchise or licensing compliance reporting",
  "Internal board or shareholder reporting",
  "Mergers, acquisitions, or business valuations",
];