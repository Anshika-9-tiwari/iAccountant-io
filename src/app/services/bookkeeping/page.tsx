import type { Metadata } from "next";
import { BookOpen, CheckCircle2 } from "lucide-react";
import ServiceSubHero from "@/components/services/sub/ServiceSubHero";
import ServiceSubCTA from "@/components/services/sub/ServiceSubCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialSection from "@/components/home/TestimonialSection";
import { bookkeepingFeatures } from "@/lib/data/services";

export const metadata: Metadata = { title: "Bookkeeping Services | iAccountant.io" };

export default function BookkeepingPage() {
  return (
    <>
      <ServiceSubHero
        icon={BookOpen}
        eyebrow="Bookkeeping"
        title="Clean books, delivered"
        highlight="every single month."
        desc="Daily transaction categorization, bank reconciliation, and monthly closes — handled by a dedicated CPA team, powered by AI that eliminates 90% of manual data entry."
        image="https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg"
        accent="primary"
      />

      {/* Features bento */}
      <section className="py-16 md:py-18 bg-base-100">
        <div className="section-container">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything you need, nothing you don't"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookkeepingFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-base-100 border border-base-300 rounded-3xl p-7 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <f.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-secondary mb-2">
                  {f.title}
                </h3>
                <p className="text-secondary/60 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly deliverables */}
      <section className="py-16 md:py-18 bg-base-200">
        <div className="section-container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Monthly Deliverables"
              title="Here's what lands in your inbox every month"
            />
            <ul className="space-y-4">
              {[
                "Profit & Loss statement (month and YTD)",
                "Balance Sheet with comparative periods",
                "Cash Flow statement",
                "Bank and credit card reconciliation reports",
                "Plain-English summary of key changes",
                "Direct Slack/email thread with your dedicated CPA",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-secondary/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-base-100 rounded-3xl p-8 border border-base-300 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Sample monthly report
            </p>
            <div className="space-y-3">
              {[
                ["Revenue", "$48,230"],
                ["Operating Expenses", "$32,110"],
                ["Net Profit", "$16,120"],
                ["Cash on Hand", "$87,540"],
              ].map(([label, val], i) => (
                <div
                  key={i}
                  className="flex justify-between py-3 border-b border-base-300 last:border-0"
                >
                  <span className="text-secondary/60 text-sm">{label}</span>
                  <span className="font-display font-bold text-secondary">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <ServiceSubCTA
        title="Let us close your books this month"
        desc="Start a free trial and we'll handle your first month on us — no card, no commitment."
      />
    </>
  );
}