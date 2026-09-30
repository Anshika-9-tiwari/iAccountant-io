import { Target, Eye, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To give every business — regardless of size — access to accurate, real-time financial insight without the cost of a full in-house finance team.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A world where bookkeeping is invisible: fully automated, always accurate, and instantly understandable for every business owner.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    desc: "Accuracy over speed, transparency over jargon, and long-term partnership over one-off transactions.",
  },
];

export default function VisionMission() {
  return (
    <section className="py-16 md:py-18 bg-secondary bg-ledger-lines relative overflow-hidden">
      <div className="section-container relative z-10">
        <SectionHeading
           eyebrow="What Drives Us"
           title="Built on principles, not just algorithms"
           align="center"
           dark
        />
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/35 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/40 flex items-center justify-center mb-6">
                <card.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {card.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}