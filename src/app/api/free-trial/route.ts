import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import { trialWelcomeEmail, internalLeadNotificationEmail } from "@/lib/email-templates";

const VALID_SERVICES = [
  "bookkeeping",
  "accounts-payable-receivable",
  "tax-preparation",
  "account-compilation",
];

const SERVICE_LABELS: Record<string, string> = {
  "bookkeeping": "Bookkeeping",
  "accounts-payable-receivable": "AP & AR",
  "tax-preparation": "Tax Preparation",
  "account-compilation": "Account Compilation",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, companyName, servicesNeeded, employeeCount } = body;

    // ── Validation ──
    if (!fullName || !email || !companyName) {
      return NextResponse.json(
        { error: "Full name, email, and company name are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!Array.isArray(servicesNeeded) || servicesNeeded.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one service." },
        { status: 400 }
      );
    }

    const invalidServices = servicesNeeded.filter(
      (s: string) => !VALID_SERVICES.includes(s)
    );
    if (invalidServices.length > 0) {
      return NextResponse.json(
        { error: `Invalid service(s): ${invalidServices.join(", ")}` },
        { status: 400 }
      );
    }

    // ── Save to DB ──
    const lead = await prisma.freeTrialLead.create({
      data: {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        companyName: companyName.trim(),
        servicesNeeded,
        employeeCount: employeeCount?.trim() || null,
      },
    });

    // ── Send emails (non-blocking) ──
    const firstName = fullName.trim().split(" ")[0];

    // 1. Welcome email to the user
    sendEmail({
      to: email.trim().toLowerCase(),
      subject: "Welcome to iAccountant.io — Your trial is being set up! 🎉",
      html: trialWelcomeEmail(firstName, companyName.trim()),
    });

    // 2. Internal notification to your team 
    const serviceNames = servicesNeeded
      .map((s: string) => SERVICE_LABELS[s] || s)
      .join(", ");

    sendEmail({
      to: process.env.SMTP_USER!,
      subject: `🔔 New Trial Lead: ${fullName.trim()} (${companyName.trim()})`,
      html: internalLeadNotificationEmail({
        type: "Free Trial",
        name: fullName.trim(),
        email: email.trim().toLowerCase(),
        company: companyName.trim(),
        details: `Services: ${serviceNames}${employeeCount ? ` | Employees: ${employeeCount}` : ""}`,
      }),
    });

    return NextResponse.json(
      { success: true, id: lead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Free trial form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}