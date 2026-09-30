import Link from "next/link";
import { ArrowRight, Workflow } from "lucide-react";

export default function HowHero() {
  return (
    <section className="relative overflow-hidden bg-secondary bg-ledger-lines">
      <div className="section-container py-20 lg:py-28 text-center relative z-10">
        <span className="inline-flex items-center gap-2 badge badge-outline text-primary border-primary/40 py-4 px-4 mb-6">
          <Workflow size={14} /> Our Process
        </span>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-4xl mx-auto">
          Here&apos;s Exactly How We <span className="text-primary">Run Your Books.</span>
        </h1>
        <p className="text-lg text-white/60 mt-6 max-w-2xl mx-auto">
          Six repeatable steps — combining AI automation and certified human
          review — that turn messy financial data into clean, audit-ready books
          every single month.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <Link href="/free-trial" className="btn btn-primary rounded-full px-6 text-white">
            Start Free Trial <ArrowRight size={18} />
          </Link>
          <Link
            href="#process"
            className="btn btn-outline text-white border-white/30 rounded-full px-6 hover:bg-white hover:text-secondary"
          >
            See the Process
          </Link>
        </div>
      </div>

      {/* decorative floating cards */}
      <div className="absolute top-16 left-8 hidden lg:block bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm animate-float">
        <p className="text-xs text-white/50">Avg. Monthly Close</p>
        <p className="text-white font-display font-bold text-xl">3 days</p>
      </div>
      <div className="absolute bottom-16 right-8 hidden lg:block bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm animate-float" style={{ animationDelay: "1s" }}>
        <p className="text-xs text-white/50">Human-Reviewed</p>
        <p className="text-white font-display font-bold text-xl">100%</p>
      </div>
    </section>
  );
}