import {
  Lock,
  ShieldCheck,
  KeyRound,
  ServerCog,
  UserCheck,
  FileSearch,
  RefreshCcw,
  Eye,
  AlertTriangle,
  Mail,
} from "lucide-react";

export const securityPillars = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 — the same standard used by major banks.",
    details: ["TLS 1.3 for all connections", "AES-256 at-rest encryption", "Encrypted database backups", "Rotating encryption keys"],
  },
  {
    icon: KeyRound,
    title: "Access Controls",
    desc: "Role-based permissions, mandatory 2FA for all team members, and SSO support for enterprise clients.",
    details: ["Role-based access control (RBAC)", "Mandatory 2FA for all accounts", "SSO/SAML available on Scale plan", "Session timeout policies"],
  },
  {
    icon: ServerCog,
    title: "Secure Infrastructure",
    desc: "Hosted on AWS with isolated VPCs, automated patching, and 24/7 infrastructure monitoring.",
    details: ["AWS SOC 2 compliant hosting", "Isolated VPC per environment", "Automated security patches", "DDoS protection via CloudFront"],
  },
  {
    icon: UserCheck,
    title: "Background-Checked Team",
    desc: "Every accountant and engineer passes criminal background checks and signs strict NDAs before accessing client data.",
    details: ["Criminal background checks", "Annual security training", "Strict NDAs for all staff", "Least-privilege access model"],
  },
  {
    icon: RefreshCcw,
    title: "Daily Backups",
    desc: "Automated daily snapshots stored in geographically redundant locations — your data is never a single point of failure.",
    details: ["Daily automated backups", "Multi-region replication", "30-day backup retention", "Point-in-time recovery"],
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    desc: "Real-time intrusion detection, anomaly alerts, and 24/7 SOC monitoring across all production systems.",
    details: ["24/7 Security Operations Center", "Real-time intrusion detection", "Anomaly-based alerting", "Audit logs for every action"],
  },
];

export const complianceTimeline = [
  {
    year: "2017",
    title: "GDPR Compliance",
    desc: "Full compliance with EU General Data Protection Regulation, including data portability and the right to deletion.",
  },
  {
    year: "2019",
    title: "SOC 2 Type I Certification",
    desc: "Independent audit of our security controls across the five AICPA Trust Services Criteria.",
  },
  {
    year: "2021",
    title: "SOC 2 Type II Certification",
    desc: "Upgraded to Type II — proving operational effectiveness of controls over a 12-month observation period.",
  },
  {
    year: "2022",
    title: "ISO 27001 Certified",
    desc: "International standard for information security management systems (ISMS) — audited and certified annually.",
  },
  {
    year: "2024",
    title: "CCPA & State Privacy Compliance",
    desc: "Full compliance with California Consumer Privacy Act and emerging state-level privacy regulations.",
  },
];

export const certifications = [
  { name: "SOC 2 Type II", desc: "AICPA Trust Services" },
  { name: "ISO 27001", desc: "Information Security" },
  { name: "GDPR", desc: "EU Data Protection" },
  { name: "CCPA", desc: "California Privacy" },
  { name: "AICPA Member", desc: "Professional CPA Body" },
  { name: "PCI DSS", desc: "Payment Card Industry" },
];

export const incidentSteps = [
  {
    icon: AlertTriangle,
    title: "Immediate Detection",
    time: "Within minutes",
    desc: "Our SOC team is alerted automatically via real-time monitoring and anomaly detection.",
  },
  {
    icon: FileSearch,
    title: "Investigation & Containment",
    time: "Within 1 hour",
    desc: "Dedicated incident response team isolates affected systems and begins forensic analysis.",
  },
  {
    icon: Mail,
    title: "Client Notification",
    time: "Within 24 hours",
    desc: "If your data is affected, you'll receive direct, transparent notification with full details.",
  },
  {
    icon: ShieldCheck,
    title: "Resolution & Postmortem",
    time: "Within 7 days",
    desc: "Public postmortem published, systems hardened, and preventive controls deployed.",
  },
];