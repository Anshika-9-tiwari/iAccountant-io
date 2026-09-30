import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-14 md:py-16 bg-gradient-to-br from-secondary/90 to-secondary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-ledger-lines opacity-30" />
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-4xl font-bold text-white leading-tight">
            Want to see if we&apos;re the right fit for your business?
          </h2>
          <p className="text-white/65 mt-4 max-w-lg">
            Talk to our team about your current bookkeeping setup — no pressure,
            just an honest conversation about what would help most.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
          <Link href="/free-trial" className="btn btn-primary rounded-full px-8 text-white">
            Start Free Trial <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact-us"
            className="btn btn-outline text-white border-white/30 rounded-full px-8 hover:bg-white hover:text-secondary"
          >
            <MessageCircle size={18} /> Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}