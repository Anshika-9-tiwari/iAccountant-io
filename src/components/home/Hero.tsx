"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

const slides = [
  "https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg",
  "https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg",
  "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
];

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3800 })]);

  return (
    <section className="relative overflow-hidden bg-base-200 bg-ledger-lines bg-radial-fade">
      <div className="section-container py-14 lg:py-18 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 badge badge-outline badge-primary py-4 px-4 mb-6">
            <Sparkles size={14} /> AI + Certified Accountants
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary leading-[1.1]">
            Your Books, <span className="text-primary">Perfectly</span> Balanced.
          </h1>
          <p className="text-lg text-secondary/60 mt-6 max-w-md">
            Bookkeeping, accounts payable & receivable, and tax preparation —
            automated by AI, verified by real accountants. Save 10+ hours every month.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/free-trial" className="btn btn-primary rounded-full px-6 text-white">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link href="/contact-us" className="btn btn-outline rounded-full px-6">
              Book a Demo
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-sm text-secondary/60">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-primary" /> SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-primary" /> 99.9% Accuracy
            </div>
          </div>
        </div>

        {/* Right - Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((src, i) => (
                <div key={i} className="flex-[0_0_100%] relative h-[420px]">
                  <img
                    src={src}
                    alt="Accounting dashboard preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-base-100 rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              $
            </div>
            <div>
              <p className="text-xs text-secondary/50">Monthly Close</p>
              <p className="font-bold text-secondary text-sm">Completed in 24hrs</p>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 bg-base-100 rounded-2xl shadow-xl p-4 hidden md:block">
            <p className="text-xs text-secondary/50">Accuracy Rate</p>
            <p className="font-bold text-primary text-lg">99.9%</p>
          </div>
        </div>
      </div>
    </section>
  );
}