import { Building2, Users2, MapPin, RefreshCcw } from "lucide-react";

const stats = [
  { icon: Building2, value: "2021", label: "Year Founded" },
  { icon: Users2, value: "500+", label: "Businesses Served" },
  { icon: MapPin, value: "12+", label: "Industries Supported" },
  { icon: RefreshCcw, value: "94%", label: "Client Retention Rate" },
];

export default function AboutStats() {
  return (
    <section className="py-14 md:py-16 bg-base-100 border-y border-base-300">
      <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <stat.icon className="text-primary" size={24} />
            </div>
            <p className="font-display text-3xl font-bold text-secondary">{stat.value}</p>
            <p className="text-secondary/50 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}