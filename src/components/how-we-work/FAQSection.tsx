import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data/how-we-work";

export default function FAQSection() {
  return (
    <section className="py-16 md:py-18 bg-base-100">
      <div className="section-container max-w-4xl">
        <SectionHeading
          eyebrow="Common Questions"
          title="Everything you probably want to ask before signing up"
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="collapse collapse-plus bg-base-200 border border-base-300 rounded-2xl"
            >
              <input type="radio" name="faq-accordion" defaultChecked={i === 0} />
              <div className="collapse-title font-display font-semibold text-secondary text-lg">
                {faq.q}
              </div>
              <div className="collapse-content text-secondary/70">
                <p className="pt-2">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}