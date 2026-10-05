import Link from "next/link";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="py-16 md:py-18 bg-base-200 bg-ledger-lines bg-radial-fade relative overflow-hidden">
      <div className="section-container relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary max-w-3xl mx-auto leading-tight">
          Still not sure which plan is right?
        </h2>
        <p className="text-secondary/60 mt-5 max-w-xl mx-auto text-lg">
          Book a 15-minute call with our team. We'll review your transaction
          volume, tools, and goals — then recommend the exact plan you need.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <Link
            href="/free-trial"
            className="btn btn-primary rounded-full px-8 text-white"
          >
            Start Free Trial <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact-us"
            className="btn btn-outline btn-primary bg-white rounded-full px-8 hover:bg-base-200 hover:text-primary"
          >
            <MessageCircle size={18} /> Talk to Sales
          </Link>
          <a href="tel:+919810017750" 
             className="btn  btn-primary rounded-full px-8 hover:bg-base-200 hover:text-primary">
             <PhoneCall size={18} /> Book a Call
          </a>

        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-14 text-secondary/50 text-sm">
          <span>✓ 14-day free trial</span>
          <span>✓ No credit card required</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}