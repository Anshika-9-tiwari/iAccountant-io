import { UserCog, ShieldCheck, LineChart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  {
    icon: UserCog,
    role: "Your Dedicated Bookkeeper",
    resp: "Handles day-to-day transaction categorization, reconciliations, and monthly close.",
    tag: "Point of contact",
  },
  {
    icon: ShieldCheck,
    role: "Senior CPA Reviewer",
    resp: "Verifies every entry, resolves edge cases, and signs off on your monthly financials.",
    tag: "Accuracy guardian",
  },
  {
    icon: LineChart,
    role: "Account Manager",
    resp: "Quarterly financial reviews, growth insights, and coordinating any custom requests.",
    tag: "Strategic partner",
  },
];

export default function DedicatedTeam() {
  return (
    <section className="py-16 md:py-18 bg-base-100">
      <div className="section-container">
        <SectionHeading
          eyebrow="Your Team"
          title="Three specialists, one account — always the same people"
          desc="You'll never be handed off to a rotating team of strangers. Every iAccountant.io client gets the same three-person pod behind their books."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="relative bg-base-100 border border-base-300 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <span className="absolute top-6 right-6 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {member.tag}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <member.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary mb-3">
                {member.role}
              </h3>
              <p className="text-secondary/60 text-sm leading-relaxed">
                {member.resp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}