import type { Metadata } from "next";
import { ArrowLeftRight, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import ServiceSubHero from "@/components/services/sub/ServiceSubHero";
import ServiceSubCTA from "@/components/services/sub/ServiceSubCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import { apArFeatures } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Accounts Payable & Receivable | iAccounts.ai",
};

export default function APARPage() {
  return (
    <>
      <ServiceSubHero
        icon={ArrowLeftRight}
        eyebrow="Accounts Payable & Receivable"
        title="Your cash flow,"
        highlight="actively managed."
        desc="We handle vendor bills, customer invoicing, and collections — so you always know what's coming in, what's going out, and what's at risk."
        image="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg"
        accent="info"
      />

      {/* Split AP vs AR */}
      <section className="py-24 bg-base-100">
        <div className="section-container">
          <SectionHeading
            eyebrow="Two Workflows, One Team"
            title="End-to-end management of money in and money out"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Payables */}
            <div className="bg-base-100 border border-base-300 rounded-3xl p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-info/10 flex items-center justify-center mb-6">
                <ArrowUpRight className="text-info" size={26} />
              </div>
              <span className="text-info text-xs font-semibold uppercase tracking-wider">
                Accounts Payable
              </span>
              <h3 className="font-display font-bold text-2xl text-secondary mt-2 mb-6">
                Money going out
              </h3>
              <ul className="space-y-3">
                {apArFeatures.payable.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 py-2 border-b border-base-200 last:border-0"
                  >
                    <span className="w-6 h-6 rounded-full bg-info/10 text-info text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-secondary/80 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Receivables */}
            <div className="bg-secondary rounded-3xl p-8 text-white">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <ArrowDownLeft className="text-primary" size={26} />
              </div>
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                Accounts Receivable
              </span>
              <h3 className="font-display font-bold text-2xl mt-2 mb-6">
                Money coming in
              </h3>
              <ul className="space-y-3">
                {apArFeatures.receivable.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 py-2 border-b border-white/10 last:border-0"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/80 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="py-20 bg-base-200">
        <div className="section-container grid md:grid-cols-3 gap-6">
          {[
            { stat: "47%", label: "Faster invoice collection on average" },
            { stat: "$12k", label: "Avg. late-fees avoided annually per client" },
            { stat: "99.2%", label: "On-time vendor payment rate" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-base-100 border border-base-300 rounded-3xl p-8 text-center"
            >
              <p className="font-display text-4xl font-bold text-info">{s.stat}</p>
              <p className="text-secondary/60 mt-2 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceSubCTA
        title="Stop chasing invoices. Start collecting."
        desc="Let us take over your AP/AR workflow this month — you'll feel the difference by week two."
        cardColor="from-info to-info/70"
      />
    </>
  );
}