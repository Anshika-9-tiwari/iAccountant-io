import { Rocket, ShieldCheck, CreditCard, Clock } from "lucide-react";

export default function TrialHero() {
  return (
    <section className="relative overflow-hidden bg-base-200 bg-ledger-lines bg-radial-fade">
      <div className="section-container py-20 lg:py-24 text-center">
        <span className="inline-flex items-center gap-2 badge badge-outline badge-primary py-4 px-4 mb-6">
          <Rocket size={14} /> 14-Day Free Trial
        </span>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] max-w-4xl mx-auto">
          Try iAccounts.ai <span className="text-primary">risk-free.</span>
        </h1>
        <p className="text-lg text-secondary/60 mt-6 max-w-2xl mx-auto">
          Get 14 days of our Growth plan — full bookkeeping, AP/AR, and
          reporting. No credit card, no commitment, no setup fees.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-secondary/60">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-primary" /> No credit card
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-primary" /> 14 days full access
          </div>
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-primary" /> Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}