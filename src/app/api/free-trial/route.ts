import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const VALID_SERVICES = [
  "bookkeeping",
  "accounts-payable-receivable",
  "tax-preparation",
  "account-compilation",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, companyName, servicesNeeded, employeeCount } = body;

    // Validation
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