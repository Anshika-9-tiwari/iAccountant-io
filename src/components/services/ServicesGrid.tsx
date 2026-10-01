import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesOverview } from "@/lib/data/services";

const accentClasses: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "hover:border-primary" },
  info: { bg: "bg-info/10", text: "text-info", border: "hover:border-info" },
  accent: { bg: "bg-accent/15", text: "text-accent", border: "hover:border-accent" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "hover:border-secondary" },
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-base-100">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-6">
          {servicesOverview.map((service) => {
            const a = accentClasses[service.accent];
            return (
              <Link
                key={service.slug}
                href={service.href}
                className={`group relative bg-base-100 border border-base-300 rounded-3xl p-10 transition-all hover:-translate-y-1 hover:shadow-xl ${a.border}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${a.bg} flex items-center justify-center`}>
                    <service.icon className={a.text} size={26} />
                  </div>
                  <ArrowUpRight
                    className={`${a.text} opacity-0 group-hover:opacity-100 transition-opacity`}
                    size={22}
                  />
                </div>

                <p className={`text-xs font-semibold uppercase tracking-wider ${a.text} mb-2`}>
                  {service.tagline}
                </p>
                <h3 className="font-display text-2xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary/60 leading-relaxed">{service.desc}</p>

                <span className={`inline-flex items-center gap-1 mt-6 font-semibold text-sm ${a.text}`}>
                  Explore {service.title} →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}