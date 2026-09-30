import { processSteps } from "@/lib/data/process";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-18 bg-base-200">
      <div className="section-container">
        <SectionHeading
          eyebrow="How We Work"
          title="From onboarding to insights in four simple steps"
        />

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-base-300 z-0" />
          {processSteps.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-base-100 border-2 border-primary flex items-center justify-center mb-5 shadow-sm">
                <step.icon className="text-primary" size={26} />
              </div>
              <span className="text-primary font-display font-bold text-sm">
                STEP {i + 1}
              </span>
              <h3 className="font-display font-bold text-lg text-secondary mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-secondary/60 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/how-we-work" className="btn btn-outline btn-primary rounded-full px-6">
            See Full Process →
          </Link>
        </div>
      </div>
    </section>
  );
}