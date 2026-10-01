import { engagementModels } from "@/lib/data/how-we-work";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EngagementModels() {
  return (
    <section className="py-16 md:py-18 bg-secondary bg-ledger-lines">
      <div className="section-container">
        <SectionHeading
          eyebrow="Engagement Models"
          title="Choose how much (or how little) you want to hand off"
          dark
        />

        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((model, i) => (
            <div
              key={i}
              className="bg-white/8 border border-white/30 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <span className="text-primary font-display font-bold text-sm">
                MODEL 0{i + 1}
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-2 mb-4">
                {model.name}
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">{model.desc}</p>
              <p className="text-sm text-primary italic">{model.best}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="tel:+9198100 17750"
            className="btn btn-primary rounded-full px-6 text-white"
           >
             Not sure which fits? Talk to us 
             <ArrowRight size={18}/>
           </a>
        </div>
      </div>
    </section>
  );
}