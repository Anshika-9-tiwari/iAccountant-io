import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingCard({
  name,
  price,
  description,
  features,
  featured,
}: {
  name: string;
  price: number;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-8 border flex flex-col transition-transform hover:-translate-y-2
      ${featured ? "bg-secondary text-white border-secondary shadow-2xl md:scale-105" : "bg-base-100 border-base-300"}`}
    >
      {featured && <span className="badge badge-accent mb-4 w-fit">Most Popular</span>}
      <h3 className="font-display text-2xl font-bold mb-1">{name}</h3>
      <p className={`text-sm mb-6 ${featured ? "text-white/60" : "text-secondary/60"}`}>{description}</p>
      <p className="text-4xl font-bold mb-6">
        ${price}
        <span className="text-base font-normal">/mo</span>
      </p>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check size={18} className={featured ? "text-accent shrink-0" : "text-primary shrink-0"} />
            <span className={featured ? "text-white/80" : "text-secondary/70"}>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/free-trial"
        className={`btn w-full rounded-full text-white ${featured ? "btn-accent text-secondary" : "btn-primary"}`}
      >
        Choose Plan
      </Link>
    </div>
  );
}