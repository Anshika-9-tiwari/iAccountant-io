import SectionHeading from "@/components/ui/SectionHeading";
import { pricingFAQs } from "@/lib/data/pricing";

export default function PricingFAQ() {
  return (
    <section className="py-16 md:py-18 bg-base-100">
      <div className="section-container max-w-4xl">
        <SectionHeading
          eyebrow="Pricing FAQ"
          title="Questions we get asked a lot"
        />

        <div className="space-y-3">
          {pricingFAQs.map((faq, i) => (
            <div
              key={i}
              className="collapse collapse-plus bg-base-200 border border-base-300 rounded-2xl"
            >
              <input
                type="radio"
                name="pricing-faq"
                defaultChecked={i === 0}
              />
              <div className="collapse-title font-display font-semibold text-secondary text-lg">
                {faq.q}
              </div>
              <div className="collapse-content text-secondary/70">
                <p className="pt-2 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}