import { Check, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const rows = [
  { label: "Setup Time", trad: "2-4 weeks", ia: "Under 48 hours" },
  { label: "Monthly Cost", trad: "$1,500+", ia: "Starting at $199" },
  { label: "AI-Powered Categorization", trad: false, ia: true },
  { label: "Real-time Dashboard", trad: false, ia: true },
  { label: "Dedicated Accountant", trad: true, ia: true },
  { label: "Weekend Support", trad: false, ia: true },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 md:py-18 bg-base-100">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why iAccountant.io"
          title="Traditional Firms vs. iAccountant.io"
        />

        <div className="overflow-x-auto rounded-3xl border border-base-300">
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200 text-secondary">
                <th className="text-left py-5 px-6 font-display">Feature</th>
                <th className="text-center py-5 px-6 font-display">Traditional Firms</th>
                <th className="text-center py-5 px-6 font-display bg-primary/10 text-primary">
                  iAccountant.io
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-t border-base-300">
                  <td className="py-4 px-6 font-medium text-secondary">{row.label}</td>
                  <td className="py-4 px-6 text-center text-secondary/60">
                    {typeof row.trad === "boolean" ? (
                      row.trad ? (
                        <Check className="mx-auto text-secondary/40" size={18} />
                      ) : (
                        <X className="mx-auto text-error/50" size={18} />
                      )
                    ) : (
                      row.trad
                    )}
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-secondary bg-primary/5">
                    {typeof row.ia === "boolean" ? (
                      row.ia ? (
                        <Check className="mx-auto text-primary" size={18} />
                      ) : (
                        <X className="mx-auto text-error/50" size={18} />
                      )
                    ) : (
                      row.ia
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}