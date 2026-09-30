import { CheckCircle2 } from "lucide-react";

const points = [
  "Founded in 2016 by CPAs tired of manual spreadsheet errors",
  "Combines AI transaction categorization with human-verified review",
  "500+ businesses trust us with their daily bookkeeping",
  "Team of certified accountants, CPAs, and financial engineers",
];

export default function WhoWeAre() {
  return (
    <section className="py-18 md:py-20 bg-base-100">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
            Who We Are
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary leading-tight mb-6">
            A team of accountants, powered by technology built to eliminate busywork
          </h2>
          <p className="text-secondary/60 text-lg mb-8">
            iAccountant.io started as a simple idea: businesses shouldn&apos;t have to
            choose between affordable bookkeeping and accurate bookkeeping. So we
            built a platform where AI handles repetitive data entry, and licensed
            accountants handle everything that requires judgment — giving you
            speed and confidence in every number.
          </p>

          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={22} />
                <span className="text-secondary/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.pexels.com/photos/7693201//pexels-photo-7693201.jpeg"
            alt="Accountant reviewing reports"
            className="rounded-3xl object-cover h-64 w-full"
          />
          <img
            src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
            alt="Financial dashboard on laptop"
            className="rounded-3xl object-cover h-64 w-full mt-8"
          />
          <img
            src="https://images.pexels.com/photos/6863262/pexels-photo-6863262.jpeg"
            alt="Team meeting"
            className="rounded-3xl object-cover h-64 w-full -mt-8"
          />
          <img
            src="https://images.pexels.com/photos/7792755/pexels-photo-7792755.jpeg"
            alt="Business owner reviewing finances"
            className="rounded-3xl object-cover h-64 w-full"
          />
        </div>
      </div>
    </section>
  );
}