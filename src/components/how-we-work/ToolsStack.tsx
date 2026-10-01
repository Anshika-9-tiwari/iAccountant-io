import SectionHeading from "@/components/ui/SectionHeading";
import { tools } from "@/lib/data/how-we-work";
import { Plug } from "lucide-react";

export default function ToolsStack() {
  return (
    <section className="py-16 md:py-18 bg-base-200">
      <div className="section-container">
        <SectionHeading
          eyebrow="Tools We Work With"
          title="We meet you where your data already lives"
          desc="No forced migrations, no proprietary lock-in. We integrate with the accounting and financial tools your team already uses."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-3 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Plug className="text-primary" size={16} />
              </div>
              <span className="font-medium text-secondary text-sm truncate">
                {tool}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary/50 text-sm mt-8">
          Don&apos;t see your tool? <a href="/contact-us" className="text-primary font-semibold">Ask us — we probably support it.</a>
        </p>
      </div>
    </section>
  );
}