import Link from "next/link";
import { LucideIcon, ArrowUpRight } from "lucide-react";

export default function BentoCard({
  icon: Icon,
  title,
  desc,
  href,
  size = "default",
  dark = false,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  size?: "default" | "large";
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-3xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl
      ${size === "large" ? "md:col-span-2 md:row-span-2 flex flex-col justify-between p-10" : ""}
      ${dark ? "bg-secondary border-secondary text-white" : "bg-base-100 border-base-300"}`}
    >
      <div>
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors
          ${dark ? "bg-white/10 text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"}`}
        >
          <Icon size={24} />
        </div>
        <h3 className={`font-display font-bold text-xl mb-2 ${dark ? "text-white" : "text-secondary"}`}>
          {title}
        </h3>
        <p className={dark ? "text-white/60" : "text-secondary/60"}>{desc}</p>
      </div>
      <ArrowUpRight
        className={`absolute top-7 right-7 opacity-0 group-hover:opacity-100 transition-opacity ${
          dark ? "text-white" : "text-primary"
        }`}
        size={20}
      />
    </Link>
  );
}