import { BadgePercent } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-base-200 bg-ledger-lines bg-radial-fade">
      <div className="section-container py-20 lg:py-24 text-center">
        <span className="inline-flex items-center gap-2 badge badge-outline badge-primary py-4 px-4 mb-6">
          <BadgePercent size={14} /> Simple, Transparent Pricing
        </span>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] max-w-4xl mx-auto">
          Plans that <span className="text-primary">scale with your business,</span> not against it.
        </h1>
        <p className="text-lg text-secondary/60 mt-6 max-w-2xl mx-auto">
          No hidden fees, no per-transaction surprises, no long-term contracts.
          Pick a plan, start your free trial, and upgrade when you're ready.
        </p>
      </div>
    </section>
  );
}