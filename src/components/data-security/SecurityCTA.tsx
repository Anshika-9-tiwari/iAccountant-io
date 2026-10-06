import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function SecurityCTA() {
  return (
    <section className="py-24 bg-base-100">
      <div className="section-container">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-ledger-lines opacity-20" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to hand off your books with confidence?
              </h2>
              <p className="text-white/80 mt-4 max-w-lg">
                Thousands of businesses trust iAccounts.ai with their most
                sensitive financial data. Here's your invitation to join them.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/free-trial"
                className="btn bg-white text-primary hover:bg-white/90 border-none rounded-full px-8"
              >
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact-us"
                className="btn btn-outline text-white border-white/60 rounded-full px-8 hover:bg-white hover:text-primary"
              >
                <FileText size={18} /> Request Security Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}