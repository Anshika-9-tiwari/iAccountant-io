import Link from "next/link";
import { ArrowRight, Calendar, PhoneCall } from "lucide-react";

export default function ServiceSubCTA({
  title,
  desc,
  cardColor = "from-primary to-primary/80",
}: {
  title: string;
  desc: string;
  cardColor?: string;
}) {
  return (
    <section className="py-20 bg-base-100">
      <div className="section-container">
        <div className={`bg-gradient-to-br ${cardColor} rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-ledger-lines opacity-20" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                {title}
              </h2>
              <p className="text-white/80 mt-4 max-w-lg">{desc}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/free-trial"
                className="btn bg-white text-secondary hover:bg-white/90 border-none rounded-full px-8"
              >
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <a href="tel:+919810017750" 
                className="btn btn-outline text-white border-white/60 rounded-full px-8 hover:bg-white hover:text-primary">
                <PhoneCall size={18} /> Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}