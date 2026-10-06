import SectionHeading from "@/components/ui/SectionHeading";
import { complianceTimeline } from "@/lib/data/security";
import { BadgeCheck } from "lucide-react";

export default function ComplianceTimeline() {
  return (
    <section className="py-16 md:py-18 bg-base-200">
      <div className="section-container">
        <SectionHeading
          eyebrow="Our Compliance Journey"
          title="A track record of security, not just promises"
          desc="Compliance isn't a one-time checkbox — it's a continuous commitment we've invested in since day one."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-base-300 md:-translate-x-1/2" />

          <div className="space-y-10">
            {complianceTimeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative grid md:grid-cols-2 gap-6 items-center ${
                    isLeft ? "" : "md:[&>:first-child]:order-2"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-base-200 md:-translate-x-1/2 z-10" />

                  {/* Year side */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      isLeft ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <span className="font-display font-bold text-5xl text-primary/80">
                      {item.year}
                    </span>
                  </div>

                  {/* Content side */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      isLeft ? "md:pl-12" : "md:text-right md:pr-12"
                    }`}
                  >
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                      <div
                        className={`flex items-center gap-2 mb-3 ${
                          isLeft ? "" : "md:justify-end"
                        }`}
                      >
                        <BadgeCheck className="text-primary" size={18} />
                        <h3 className="font-display font-bold text-secondary">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-secondary/60 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}