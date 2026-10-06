import { incidentSteps } from "@/lib/data/security";
import SectionHeading from "@/components/ui/SectionHeading";

export default function IncidentResponse() {
  return (
    <section className="py-16 md:py-18 bg-secondary bg-ledger-lines relative overflow-hidden">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Incident Response"
          title="Prepared for the worst, so you don't have to be"
          desc="In the unlikely event something goes wrong, here's exactly how we respond — fast, transparent, and documented."
          dark
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {incidentSteps.map((step, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/25 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/15 transition-colors relative"
            >
              <div className="absolute top-5 right-5 font-display font-bold text-5xl text-white/20">
                0{i + 1}
              </div>

              <div className="w-12 h-12 rounded-2xl bg-primary/30 flex items-center justify-center mb-5">
                <step.icon className="text-primary" size={22} />
              </div>
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                {step.time}
              </p>
              <h3 className="font-display font-bold text-lg text-white mb-2 tracking-wide">
                {step.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 border border-white/30 rounded-2xl p-6 max-w-2xl mx-auto text-center">
          <p className="text-white/75 text-sm">
            Report a security concern directly to our team:{" "}
            <a
              href="mailto:info@iaccountant.io"
              className="text-primary font-semibold underline"
            >
              info@iaccountant.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}