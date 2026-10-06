import SectionHeading from "@/components/ui/SectionHeading";
import { securityPillars } from "@/lib/data/security";
import { CheckCircle2 } from "lucide-react";

export default function SecurityPillars() {
  return (
    <section id="pillars" className="py-16 md:py-18 bg-base-100">
      <div className="section-container">
        <SectionHeading
          eyebrow="Our Six Pillars of Security"
          title="Protection built into every layer of our platform"
          desc="From the physical infrastructure to the people who touch your data — every layer is designed with security as the default."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((pillar, i) => (
            <div
              key={i}
              className="group bg-base-100 border border-base-300 rounded-3xl p-7 hover:border-primary hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <pillar.icon
                  className="text-primary group-hover:text-white transition-colors"
                  size={22}
                />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary mb-2">
                {pillar.title}
              </h3>
              <p className="text-secondary/60 text-sm mb-5">{pillar.desc}</p>

              <ul className="space-y-2 pt-4 border-t border-base-200">
                {pillar.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-secondary/70">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={14} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}