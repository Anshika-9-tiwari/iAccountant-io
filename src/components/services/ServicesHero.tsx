import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-base-200 bg-ledger-lines bg-radial-fade">
      <div className="section-container py-16 md:py-20 text-center">
        <span className="inline-flex items-center gap-2 badge badge-outline badge-primary py-4 px-4 mb-6">
          <Layers size={14} /> Four Services, One Finance Team
        </span>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] max-w-4xl mx-auto">
          Everything your business needs for{" "}
          <span className="text-primary">clean, compliant finances.</span>
        </h1>
        <p className="text-lg text-secondary/60 mt-6 max-w-2xl mx-auto">
          From daily bookkeeping to compiled financial statements — all handled
          by one dedicated team of certified accountants, backed by AI that
          eliminates the busywork.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <Link href="/free-trial" className="btn btn-primary rounded-full px-6 text-white">
            Start Free Trial <ArrowRight size={18} />
          </Link>
          <Link href="/pricing" className="btn btn-outline rounded-full px-6">
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}