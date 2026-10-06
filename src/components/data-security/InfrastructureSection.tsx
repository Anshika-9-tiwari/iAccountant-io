import { Cloud, Database, Shield, Globe, Server, Lock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const layers = [
  { icon: Globe, label: "CloudFront CDN", desc: "DDoS protection + global edge caching" },
  { icon: Shield, label: "WAF Firewall", desc: "Blocks SQL injection, XSS, OWASP Top 10" },
  { icon: Cloud, label: "AWS Application Layer", desc: "Isolated VPC, auto-scaling, zero downtime deploys" },
  { icon: Server, label: "Encrypted Compute", desc: "EC2 instances with disk-level encryption" },
  { icon: Database, label: "RDS PostgreSQL", desc: "AES-256 at rest, automated backups, read replicas" },
  { icon: Lock, label: "KMS Key Management", desc: "Hardware security modules (HSM) for key storage" },
];

export default function InfrastructureSection() {
  return (
    <section className="py-16 md:py-18 bg-base-100">
      <div className="section-container grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Infrastructure"
            title="Six layers of defense between your data and the outside world"
          />
          <p className="text-secondary/60 text-lg leading-relaxed mb-4">
            We don't just rely on a single security measure. Every request to
            iAccounts.ai passes through multiple layers of hardened
            infrastructure — each independently monitored and audited.
          </p>
          <p className="text-secondary/60 leading-relaxed">
            Our stack runs entirely on AWS, inheriting their SOC 2, ISO 27001,
            and PCI DSS certifications on top of our own. If one layer fails,
            five more stand between an attacker and your financials.
          </p>
        </div>

        {/* Layered infrastructure diagram */}
        <div className="bg-secondary rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-ledger-lines opacity-40" />
          <p className="text-xs font-semibold uppercase tracking-wider text-white/85 mb-6 relative z-10">
            Request flow (top → bottom)
          </p>
          <div className="space-y-3 relative z-10">
            {layers.map((layer, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/15 border border-white/15 rounded-xl p-4 hover:bg-white/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/25 flex items-center justify-center shrink-0">
                  <layer.icon className="text-primary" size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">{layer.label}</p>
                  <p className="text-white/65 text-xs tracking-wide">{layer.desc}</p>
                </div>
                <span className="text-primary font-display font-bold text-sm">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}