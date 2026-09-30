import { BookOpen, ArrowLeftRight, FileText, Settings2 } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServiceBento() {
  return (
    <section className="py-16 md:py-18 bg-base-100">
      <div className="section-container">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything your finance team needs, minus the overhead"
          desc="From daily bookkeeping to tax season — we handle the numbers so you can run your business."
        />

        <div className="grid md:grid-cols-2 gap-6 md:auto-rows-[220px]">
          <BentoCard
            icon={BookOpen}
            title="Bookkeeping"
            desc="Daily transaction categorization, bank reconciliation, and financial statements — always accurate, always on time."
            href="/services/bookkeeping"
            dark
          />
          <BentoCard
            icon={ArrowLeftRight}
            title="Accounts Payable & Receivable"
            desc="Automated invoicing, bill payments, and cash flow tracking."
            href="/services/accounts-payable-receivable"
          />
          <BentoCard
            icon={FileText}
            title="Tax Preparation"
            desc="Federal, state, and sales tax filing — fully compliant, fully managed."
            href="/services/tax-preparation"
          />
          <BentoCard
            icon={FileText}
            title="Account Compilation"
            desc="Prepare structured financial statements and reports for better business analysis and decision-making."
            href="/services/account-compilation"
          />
        </div>
      </div>
    </section>
  );
}