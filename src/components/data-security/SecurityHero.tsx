import Link from "next/link";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";

export default function SecurityHero() {
  return (
    <section className="relative overflow-hidden bg-secondary bg-ledger-lines">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-info/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />

      <div className="section-container py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 badge badge-outline text-primary border-primary/80 py-4 px-4 mb-6">
            <ShieldCheck size={16} /> Bank-Level Security
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Your financial data,{" "}
            <span className="text-primary">locked down tight.</span>
          </h1>
          <p className="text-lg text-white/65 mt-6 max-w-lg">
            We hold ourselves to the same security standards as the banks we
            integrate with — SOC 2 Type II certified, ISO 27001 compliant, and
            audited independently every year.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/free-trial" className="btn btn-primary rounded-full px-6 text-white">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link
              href="#pillars"
              className="btn btn-outline text-white border-white/30 rounded-full px-6 hover:bg-white hover:text-secondary"
            >
              Explore Our Controls
            </Link>
          </div>
        </div>

        {/* Visual shield card */}
        <div className="relative hidden lg:block">
          <div className="bg-white/5 border border-primary/60 rounded-[2rem] p-10 backdrop-blur-lg">
            <div className="w-24 h-24 rounded-3xl bg-primary/40 flex items-center justify-center mb-6 animate-float">
              <Lock className="text-primary" size={48} />
            </div>
            <p className="text-white font-display text-2xl font-bold mb-2">
              AES-256 Encryption
            </p>
            <p className="text-white/65 text-sm mb-6">
              The same standard used to protect classified government data and
              major financial institutions worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-primary font-display font-bold text-3xl">99.99%</p>
                <p className="text-white/65 text-xs mt-1">Uptime SLA</p>
              </div>
              <div>
                <p className="text-primary font-display font-bold text-3xl">0</p>
                <p className="text-white/65 text-xs mt-1">Data breaches since 2016</p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-6 -right-6 bg-base-100 rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
            <ShieldCheck className="text-primary" size={24} />
            <div>
              <p className="text-xs text-secondary/50">Certified</p>
              <p className="font-bold text-secondary text-sm">SOC 2 Type II</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}