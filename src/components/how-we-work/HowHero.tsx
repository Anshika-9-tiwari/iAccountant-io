import Link from "next/link";
import { ArrowRight, Workflow } from "lucide-react";

export default function HowHero() {
  return (
    <section className="relative overflow-hidden bg-base-200 bg-ledger-lines bg-radial-fade">
      <div className="section-container py-18 md:py-22 text-center relative z-10">
        <span className="inline-flex items-center gap-2 badge badge-outline text-primary border-primary/75 py-4 px-6 mb-6 backdrop-blur-lg">
          <Workflow size={14} /> Our Process
        </span>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] max-w-4xl mx-auto">
          Here&apos;s Exactly How We <span className="text-primary">Run Your Books.</span>
        </h1>
        <p className="text-lg text-secondary/60 mt-6 max-w-2xl mx-auto">
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
            className="btn btn-outline text-secondary border-secondary/30 rounded-full px-6 hover:bg-white hover:text-secondary"
          >
            See the Process
          </Link>
        </div>
      </div>

      {/* decorative floating cards */}
      <div className="absolute top-16 left-8 hidden lg:block bg-radial-fade border border-secondary/10 shadow-lg rounded-2xl p-4 backdrop-blur-lg animate-float">
        <p className="text-xs text-secondary/75">Avg. Monthly Close</p>
        <p className="text-secondary font-display font-bold text-xl mt-0.5">3 days</p>
      </div>
      <div className="absolute bottom-16 right-8 hidden lg:block bg-ledger-lines border border-secondary/10 shadow-lg  rounded-2xl p-4 backdrop-blur-md animate-float" style={{ animationDelay: "1s" }}>
        <p className="text-xs text-secondary/75">Human-Reviewed</p>
        <p className="text-secondary font-display font-bold text-xl mt-0.5">100%</p>
      </div>
    </section>
  );
}