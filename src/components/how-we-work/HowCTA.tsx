import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function HowCTA() {
  return (
    <section className="py-16 md:py-18 bg-base-200">
      <div className="section-container">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] p-8 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-ledger-lines opacity-20" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to see this process in action?
              </h2>
              <p className="text-white/80 mt-4 max-w-lg">
                Start your free trial and get your first month of books cleaned
                up on us — no card required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/free-trial"
                className="btn bg-white text-primary hover:bg-white/90 border-none rounded-full px-8"
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
// +91 