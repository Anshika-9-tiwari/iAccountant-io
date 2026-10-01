import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

export default function ServiceSubHero({
  icon: Icon,
  eyebrow,
  title,
  highlight,
  desc,
  image,
  accent = "primary",
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  highlight: string;
  desc: string;
  image: string;
  accent?: "primary" | "info" | "accent" | "secondary";
}) {
  const accentText = {
    primary: "text-primary",
    info: "text-info",
    accent: "text-accent",
    secondary: "text-secondary",
  }[accent];

  return (
    <section className="relative overflow-hidden bg-base-200 bg-ledger-lines">
      <div className="section-container py-20 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 badge badge-outline py-4 px-4 mb-6 border-secondary/20 text-secondary">
            <Icon size={14} /> {eyebrow}
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary leading-[1.1]">
            {title}{" "}
            <span className={accentText}>{highlight}</span>
          </h1>
          <p className="text-lg text-secondary/60 mt-6 max-w-lg">{desc}</p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/free-trial" className="btn btn-primary rounded-full px-6 text-white">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="btn btn-outline rounded-full px-6">
              View Pricing
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl h-[420px]">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}