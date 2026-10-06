import type { Metadata } from "next";
import TrialHero from "@/components/free-trial/TrialHero";
import TrialForm from "@/components/free-trial/TrialForm";
import TrialTimeline from "@/components/free-trial/TrialTimeline";
import TestimonialSection from "@/components/home/TestimonialSection";

export const metadata: Metadata = {
  title: "Start Free Trial | iAccountant.io",
  description:
    "Start your 14-day free trial of iAccountant.io. Full access to bookkeeping, AP/AR, and reporting — no credit card required.",
};

export default function FreeTrialPage() {
  return (
    <>
      <TrialHero />

      <section className="py-20 bg-base-100">
        <div className="section-container">
          <TrialForm />
        </div>
      </section>

      <TrialTimeline />

      <TestimonialSection/>
    </>
  );
}