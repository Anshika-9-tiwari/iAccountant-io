"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  slug: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  isFeatured: boolean;
};

export default function PricingCards({ plans }: { plans: Plan[] }) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-base-100">
      <div className="section-container">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span
            className={`text-sm font-semibold transition-colors ${
              !annual ? "text-secondary" : "text-secondary/40"
            }`}
          >
            Monthly
          </span>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={annual}
              onChange={() => setAnnual(!annual)}
              className="toggle toggle-primary toggle-lg"
            />
          </label>
          <span
            className={`text-sm font-semibold transition-colors ${
              annual ? "text-secondary" : "text-secondary/40"
            }`}
          >
            Annual
          </span>
          {annual && (
            <span className="badge badge-accent text-xs font-bold animate-fade-up">
              Save ~17%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => {
            const price = annual ? plan.yearlyPrice : plan.monthlyPrice;
            const period = annual ? "/yr" : "/mo";
            const monthlyEquiv = annual
              ? Math.round(plan.yearlyPrice / 12)
              : null;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 border flex flex-col transition-all hover:-translate-y-2
                  ${
                    plan.isFeatured
                      ? "bg-secondary text-white border-secondary shadow-2xl md:scale-105 z-10"
                      : "bg-base-100 border-base-300 hover:shadow-xl"
                  }`}
              >
                {plan.isFeatured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 badge badge-accent gap-1 py-3 px-4 text-xs font-bold">
                    <Sparkles size={12} /> Most Popular
                  </span>
                )}

                <h3 className="font-display text-2xl font-bold mb-1">
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.isFeatured ? "text-white/60" : "text-secondary/60"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <p className="font-display text-5xl font-bold">
                    ${price.toLocaleString()}
                    <span className="text-lg font-normal">{period}</span>
                  </p>
                  {monthlyEquiv && (
                    <p
                      className={`text-sm mt-1 ${
                        plan.isFeatured ? "text-white/50" : "text-secondary/40"
                      }`}
                    >
                      ${monthlyEquiv}/mo billed annually
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={18}
                        className={`shrink-0 mt-0.5 ${
                          plan.isFeatured ? "text-accent" : "text-primary"
                        }`}
                      />
                      <span
                        className={
                          plan.isFeatured ? "text-white/80" : "text-secondary/70"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/free-trial"
                  className={`btn w-full rounded-full text-white ${
                    plan.isFeatured
                      ? "btn-accent text-secondary font-bold"
                      : "btn-primary"
                  }`}
                >
                  Start Free Trial <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-center text-secondary/40 text-sm mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}