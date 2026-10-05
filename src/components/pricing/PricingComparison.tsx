import { Check, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { comparisonFeatures } from "@/lib/data/pricing";

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto text-primary" size={18} />
    ) : (
      <X className="mx-auto text-secondary/20" size={16} />
    );
  }
  return <span className="text-secondary/80 text-sm">{value}</span>;
}

export default function PricingComparison() {
  return (
    <section className="py-16 md:py-18 bg-base-200">
      <div className="section-container">
        <SectionHeading
          eyebrow="Full Comparison"
          title="Every feature, side by side"
          desc="See exactly what's included in each plan so you can pick the right fit."
        />

        <div className="overflow-x-auto rounded-3xl border border-base-300 bg-base-100">
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200">
                <th className="text-left py-5 px-6 font-display text-secondary w-[40%]">
                  Feature
                </th>
                <th className="text-center py-5 px-6 font-display text-secondary">
                  Starter
                </th>
                <th className="text-center py-5 px-6 font-display text-primary bg-primary/5">
                  Growth
                </th>
                <th className="text-center py-5 px-6 font-display text-secondary">
                  Scale
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((group) => (
                <>
                  {/* Category header row */}
                  <tr key={`cat-${group.category}`} className="bg-base-200/60">
                    <td
                      colSpan={4}
                      className="py-3 px-6 font-display font-bold text-secondary text-sm uppercase tracking-wider"
                    >
                      {group.category}
                    </td>
                  </tr>
                  {group.rows.map((row, i) => (
                    <tr
                      key={`${group.category}-${i}`}
                      className="border-t border-base-300 hover:bg-base-200/40 transition-colors"
                    >
                      <td className="py-3.5 px-6 text-secondary font-medium text-sm">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-6 text-center">
                        <CellValue value={row.starter} />
                      </td>
                      <td className="py-3.5 px-6 text-center bg-primary/[0.02]">
                        <CellValue value={row.growth} />
                      </td>
                      <td className="py-3.5 px-6 text-center">
                        <CellValue value={row.scale} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}