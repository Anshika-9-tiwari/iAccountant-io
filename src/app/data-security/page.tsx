import type { Metadata } from "next";
import SecurityHero from "@/components/data-security/SecurityHero";
import SecurityPillars from "@/components/data-security/SecurityPillars";
import ComplianceTimeline from "@/components/data-security/ComplianceTimeline";
import InfrastructureSection from "@/components/data-security/InfrastructureSection";
import CertificationGrid from "@/components/data-security/CertificationGrid";
import IncidentResponse from "@/components/data-security/IncidentResponse";
import SecurityCTA from "@/components/data-security/SecurityCTA";

export const metadata: Metadata = {
  title: "Data Security | iAccountant.io",
  description:
    "Bank-level security for your financial data. SOC 2 Type II certified, ISO 27001 compliant, AES-256 encryption, and continuous monitoring.",
};

export default function DataSecurityPage() {
  return (
    <>
      <SecurityHero />
      <SecurityPillars />
      <ComplianceTimeline />
      <InfrastructureSection />
      <CertificationGrid />
      <IncidentResponse />
      <SecurityCTA />
    </>
  );
}