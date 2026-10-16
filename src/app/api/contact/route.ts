import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import {contactConfirmationEmail, internalLeadNotificationEmail} from "@/lib/email-templates";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    // ── Validation ──
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
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

    if (message.length < 5) {
      return NextResponse.json(
        { error: "Message must be at least 5 characters." },
        { status: 400 }
      );
    }

    // ── Save to DB ──
    const submission = await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        company: company?.trim() || null,
        message: message.trim(),
      },
    });

    // ── Send emails (non-blocking — don't fail the request if email breaks) ──
    const firstName = name.trim().split(" ")[0];

    // 1. Confirmation to the user
    sendEmail({
      to: email.trim().toLowerCase(),
      subject: "We received your message — iAccountant.io",
      html: contactConfirmationEmail(firstName),
    });

    // 2. Internal notification to your team
    sendEmail({
      to: process.env.SMTP_USER!, // or a dedicated inbox like leads@iaccounts.ai
      subject: `🔔 New Contact: ${name.trim()}`,
      html: internalLeadNotificationEmail({
        type: "Contact",
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim(),
        details: message.trim(),
      }),
    });

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}