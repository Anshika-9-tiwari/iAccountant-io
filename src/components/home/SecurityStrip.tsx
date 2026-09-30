import { ShieldCheck, Lock, FileCheck, ServerCog } from "lucide-react";
import Link from "next/link";

const badges = [
  { icon: ShieldCheck, label: "SOC 2 Type II" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: FileCheck, label: "GDPR Compliant" },
  { icon: ServerCog, label: "Daily Backups" },
];

export default function SecurityStrip() {
  return (
    <section className="py-16 bg-base-200 border-y border-base-300">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-wrap justify-center gap-8">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-3 text-secondary/70">
              <b.icon className="text-primary" size={20} />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
        <Link href="/data-security" className="btn btn-outline btn-sm rounded-full">
          Learn About Our Security →
        </Link>
      </div>
    </section>
  );
}