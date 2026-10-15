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
        <p className="text-white/75 text-[16.5px] mt-6 max-w-lg mx-auto">
          Join 2,400+ businesses who trust iAccountant.io for accurate, AI-powered accounting.
        </p>
        <div className="flex justify-center gap-5 mt-8 flex-wrap">
          <Link href="/free-trial" className="btn btn-primary text-[16px] btn-md tracking-wide rounded-full px-6 text-white">
            Start Free Trial <ArrowRight size={18} />
          </Link>   
          <a href="tel:+18002948513" 
             className="btn btn-outline text-white border-white/50 text-[16px] btn-md tracking-wide rounded-full px-6 hover:bg-white hover:text-secondary">
             <PhoneCall size={18} /> Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}