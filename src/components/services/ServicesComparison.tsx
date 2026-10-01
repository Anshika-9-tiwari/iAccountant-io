import SectionHeading from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

const rows = [
  { feature: "AI-powered automation", values: [true, true, true, true] },
  { feature: "Dedicated CPA review", values: [true, true, true, true] },
  { feature: "Monthly recurring", values: [true, true, false, false] },
  { feature: "Quarterly / annual", values: [false, false, true, true] },
  { feature: "Third-party ready report", values: [false, false, true, true] },
];

const columns = ["Bookkeeping", "AP & AR", "Tax Prep", "Compilation"];

export default function ServicesComparison() {
  return (
    <section className="py-24 bg-base-200">
      <div className="section-container">
        <SectionHeading
          eyebrow="At a Glance"
          title="Which service fits your business?"
          desc="A quick side-by-side look at what's included in each service tier."
        />

        <div className="overflow-x-auto rounded-3xl border border-base-300 bg-base-100">
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200 text-secondary">
                <th className="text-left py-5 px-6 font-display">Feature</th>
                {columns.map((col) => (
                  <th key={col} className="text-center py-5 px-6 font-display text-sm">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-t border-base-300">
                  <td className="py-4 px-6 font-medium text-secondary">{row.feature}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="py-4 px-6 text-center">
                      {v ? (
                        <Check className="mx-auto text-primary" size={18} />
                      ) : (
                        <span className="text-secondary/20">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}