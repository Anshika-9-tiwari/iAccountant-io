import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-14 md:py-16 bg-gradient-to-br from-secondary/85 to-secondary/82 relative overflow-hidden">
      <div className="absolute inset-0 bg-ledger-lines opacity-30" />
      <div className="section-container text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
          Ready to simplify your books?
        </h2>
        <p className="text-white/60 mt-6 max-w-lg mx-auto">
          Join 2,400+ businesses who trust iAccountant.io for accurate, AI-powered accounting.
        </p>
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link href="/free-trial" className="btn btn-primary rounded-full px-8 text-white">
            Start Free Trial <ArrowRight size={18} />
          </Link>   
          <a href="tel:+919810017750" 
             className="btn btn-outline text-white border-white/50 rounded-full px-8 hover:bg-white hover:text-secondary">
             <PhoneCall size={18} /> Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}