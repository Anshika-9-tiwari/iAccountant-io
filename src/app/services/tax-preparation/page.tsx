import type { Metadata } from "next";
import { FileText, ShieldCheck } from "lucide-react";
import ServiceSubHero from "@/components/services/sub/ServiceSubHero";
import ServiceSubCTA from "@/components/services/sub/ServiceSubCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import { taxServices, taxCalendar } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Tax Preparation Services | iAccounts.ai",
};

export default function TaxPrepPage() {
  return (
    <>
      <ServiceSubHero
        icon={FileText}
        eyebrow="Tax Preparation"
        title="Tax season,"
        highlight="handled calmly."
        desc="Federal, state, sales, and quarterly estimated taxes — prepared, reviewed, and filed by licensed tax professionals. No surprises, no penalties."
        image="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg"
        accent="accent"
      />

      {/* Services covered */}
      <section className="py-24 bg-base-100">
        <div className="section-container">
          <SectionHeading
            eyebrow="Tax Services"
            title="Every filing your business needs"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {taxServices.map((s, i) => (
              <div
                key={i}
                className="bg-base-100 border border-base-300 rounded-3xl p-8 flex gap-5 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
                  <s.icon className="text-accent" size={26} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-secondary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-secondary/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax calendar */}
      <section className="py-24 bg-secondary bg-ledger-lines">
        <div className="section-container">
          <SectionHeading
            eyebrow="Never Miss a Deadline"
            title="Your tax year, mapped out"
            dark
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {taxCalendar.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <p className="font-display font-bold text-accent text-2xl">
                  {item.month}
                </p>
                <p className="text-white/70 text-xs mt-2 leading-relaxed">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance badges */}
      <section className="py-16 bg-base-200">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-accent" size={28} />
              <p className="font-display font-semibold text-secondary">
                Prepared and signed by IRS-licensed professionals
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-secondary/40 font-display font-bold text-sm">
              <span>IRS-PTIN Registered</span>
              <span>AICPA Member</span>
              <span>State Board Licensed</span>
            </div>
          </div>
        </div>
      </section>

      <ServiceSubCTA
        title="Get ahead of tax season this year"
        desc="Book a free tax strategy call — we'll review your current setup and identify savings opportunities before year-end."
        cardColor="from-accent to-accent/70"
      />
    </>
  );
}