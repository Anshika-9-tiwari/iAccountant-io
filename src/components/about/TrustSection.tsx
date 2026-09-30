import { ShieldCheck, BadgeCheck, Clock, Headset } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    desc: "Every account is reviewed by a licensed CPA, not just an algorithm.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Level Security",
    desc: "256-bit encryption and SOC 2 Type II compliance protect your data.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    desc: "Books closed within 24-48 hours, every single month — guaranteed.",
  },
  {
    icon: Headset,
    title: "Real Human Support",
    desc: "Talk to your dedicated accountant directly — no ticket queues.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-18 bg-base-200">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why Businesses Trust Us"
          title="Reliability isn't a feature here — it's the foundation"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-base-100 border border-base-300 rounded-3xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary mb-2">
                {p.title}
              </h3>
              <p className="text-secondary/60 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Certification badges */}
        <div className="flex flex-wrap justify-center gap-10 mt-10 pt-10 border-t border-base-300">
          {["SOC 2 Type II", "GDPR Compliant", "AICPA Member", "ISO 27001"].map((cert, i) => (
            <span key={i} className="text-secondary/45 font-display font-semibold text-md tracking-wide">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}