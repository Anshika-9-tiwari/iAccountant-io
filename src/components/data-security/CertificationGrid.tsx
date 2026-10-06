import { certifications } from "@/lib/data/security";
import { Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CertificationGrid() {
  return (
    <section className="py-16 md:py-18 bg-base-200">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications & Audits"
          title="Independently verified, continuously audited"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-base-100 border border-base-300 rounded-2xl p-6 text-center hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Award className="text-primary" size={22} />
              </div>
              <p className="font-display font-bold text-secondary text-sm leading-tight">
                {cert.name}
              </p>
              <p className="text-secondary/50 text-xs mt-1">{cert.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary/60 text-sm max-w-xl mx-auto">
            Need our SOC 2 report, ISO 27001 certificate, or security
            questionnaire for your compliance team?{" "}
            <a href="/contact-us" className="text-primary font-semibold">
              Request them here →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}