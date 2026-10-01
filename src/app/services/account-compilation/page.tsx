import type { Metadata } from "next";
import { FileSpreadsheet, CheckCircle2 } from "lucide-react";
import ServiceSubHero from "@/components/services/sub/ServiceSubHero";
import ServiceSubCTA from "@/components/services/sub/ServiceSubCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import { compilationFeatures, compilationUseCases } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Account Compilation Services | iAccountant.io",
};

export default function CompilationPage() {
  return (
    <>
      <ServiceSubHero
        icon={FileSpreadsheet}
        eyebrow="Account Compilation"
        title="Audit-ready financials,"
        highlight="CPA-compiled."
        desc="Formal financial statements compiled to AICPA SSARS standards — ready for lenders, investors, boards, or compliance reviews."
        image="https://images.pexels.com/photos/6693662/pexels-photo-6693662.jpeg"
        accent="secondary"
      />

      {/* Features grid */}
      <section className="py-16 md:py-18 bg-base-100">
        <div className="section-container">
          <SectionHeading
            eyebrow="What You Get"
            title="A complete compilation package"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {compilationFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-base-100 border border-base-300 rounded-3xl p-8 flex gap-5 hover:border-secondary hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <f.icon className="text-secondary" size={26} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-secondary mb-2">
                    {f.title}
                  </h3>
                  <p className="text-secondary/60">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases split */}
      <section className="py-24 bg-base-200">
        <div className="section-container grid lg:grid-cols-2 gap-14 items-center">
          <div className="bg-base-100 rounded-3xl p-8 border border-base-300 shadow-lg order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Sample compilation cover
            </p>
            <div className="border-t-4 border-secondary pt-5">
              <p className="font-display font-bold text-secondary text-lg mb-1">
                Compiled Financial Statements
              </p>
              <p className="text-secondary/60 text-sm">
                For the year ended December 31, 2024
              </p>
              <div className="my-6 py-6 border-y border-base-300 text-sm text-secondary/70 italic leading-relaxed">
                &quot;Management is responsible for the accompanying financial
                statements. We have performed the compilation engagement in
                accordance with Statements on Standards for Accounting and
                Review Services...&quot;
              </div>
              <p className="font-display font-bold text-secondary text-sm">
                iAccounts.ai, CPA
              </p>
              <p className="text-secondary/50 text-xs">Licensed Public Accountants</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="When You'll Need It"
              title="Common use cases for compiled statements"
            />
            <ul className="space-y-4">
              {compilationUseCases.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-secondary/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServiceSubCTA
        title="Need compiled statements for a lender or investor?"
        desc="Most compilation engagements turn around in 7-10 business days. Book a scoping call to get started."
        cardColor="from-secondary to-secondary/80"
      />
    </>
  );
}