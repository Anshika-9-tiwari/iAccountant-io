import Link from "next/link";
import { ArrowRight, Users, Award, Globe2 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-base-200 bg-ledger-lines">
      <div className="section-container py-18 lg:py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* Image side */}
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl h-[440px]">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="iAccountant.io team collaborating"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-base-100 rounded-2xl shadow-xl p-5 flex items-center gap-4 animate-float">
            <Users className="text-primary" size={28} />
            <div>
              <p className="font-display font-bold text-xl text-secondary">120+</p>
              <p className="text-xs text-secondary/50">Accountants & Engineers</p>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 lg:order-2 animate-fade-up">
          <span className="inline-flex items-center gap-2 badge badge-outline badge-primary py-4 px-4 mb-6">
            <Award size={14} /> About iAccountant.io
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary leading-[1.1]">
            We Believe Accounting Should Feel{" "}
            <span className="text-primary">Effortless.</span>
          </h1>
          <p className="text-lg text-secondary/60 mt-6 max-w-lg">
            Founded by accountants and AI engineers frustrated with outdated
            bookkeeping practices, iAccountant.io was built to give businesses
            real-time financial clarity — without the overhead of a traditional
            finance department.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/free-trial" className="btn btn-primary rounded-full px-6 text-white">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn btn-outline rounded-full px-6">
              Explore Our Services
            </Link>
          </div>

          <div className="flex items-center gap-2 mt-10 text-sm text-secondary/60">
            <Globe2 size={18} className="text-primary" />
            Serving businesses across 12+ industries, in 4 countries.
          </div>
        </div>
      </div>
    </section>
  );
}