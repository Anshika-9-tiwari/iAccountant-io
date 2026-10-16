// ── Shared layout wrapper ──
function layout(content: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#F6F8F9;font-family:Inter,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F6F8F9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background-color:#0B1F3A;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:24px;color:#ffffff;font-weight:700;">
                iAccountant<span style="color:#0F9D6D;">.io</span>
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F6F8F9;padding:24px 40px;text-align:center;border-top:1px solid #E7ECEF;">
              <p style="margin:0;font-size:12px;color:#6B7280;">
                © ${new Date().getFullYear()} iAccountant.io — All rights reserved.<br>
                350 Fifth Avenue, Suite 4200, New York, NY 10118
              </p>
              <p style="margin:8px 0 0;font-size:11px;color:#9CA3AF;">
                You received this email because you submitted a form on iaccountant.io.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Contact form confirmation ──
export function contactConfirmationEmail(name: string): string {
  return layout(`
    <h2 style="margin:0 0 16px;font-size:22px;color:#0B1F3A;">
      Thanks for reaching out, ${name}! 👋
    </h2>
    <p style="margin:0 0 16px;font-size:15px;color:#4B5563;line-height:1.6;">
      We've received your message and a member of our team will get back to you
      within <strong>4 business hours</strong>.
    </p>
    <p style="margin:0 0 24px;font-size:15px;color:#4B5563;line-height:1.6;">
      In the meantime, feel free to explore our services or check out our pricing:
    </p>
    <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
      <tr>
        <td style="padding-right:12px;">
          <a href="https://iaccountant.io/services"
             style="display:inline-block;padding:12px 24px;background-color:#0F9D6D;color:#ffffff;
                    text-decoration:none;border-radius:999px;font-size:14px;font-weight:600;">
            Explore Services
          </a>
        </td>
        <td>
          <a href="https://iaccountant.io/pricing"
             style="display:inline-block;padding:12px 24px;background-color:#ffffff;color:#0B1F3A;
                    text-decoration:none;border-radius:999px;font-size:14px;font-weight:600;
                    border:1px solid #E7ECEF;">
            View Pricing
          </a>
        </td>
      </tr>
    </table>
  `);
}

// ── Free trial welcome ──
export function trialWelcomeEmail(name: string, companyName: string): string {
  return layout(`
    <h2 style="margin:0 0 16px;font-size:22px;color:#0B1F3A;">
      Welcome to iAccountant.io, ${name}! 🎉
    </h2>
    <p style="margin:0 0 16px;font-size:15px;color:#4B5563;line-height:1.6;">
      Your 14-day free trial is being set up for <strong>${companyName}</strong>.
      Here's what happens next:
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
      <tr>
        <td style="padding:16px;background-color:#F6F8F9;border-radius:12px;border-left:4px solid #0F9D6D;">
          <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#0F9D6D;">STEP 1 — Today</p>
          <p style="margin:0;font-size:14px;color:#4B5563;">
            Your dedicated onboarding specialist will reach out within 24 hours
            to schedule a quick setup call.
          </p>
        </td>
      </tr>
      <tr><td style="height:12px;"></td></tr>
      <tr>
        <td style="padding:16px;background-color:#F6F8F9;border-radius:12px;border-left:4px solid #3ABEFF;">
          <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#3ABEFF;">STEP 2 — Day 2-3</p>
          <p style="margin:0;font-size:14px;color:#4B5563;">
            We'll securely connect your bank accounts and accounting software,
            then begin migrating your data.
          </p>
        </td>
      </tr>
      <tr><td style="height:12px;"></td></tr>
      <tr>
        <td style="padding:16px;background-color:#F6F8F9;border-radius:12px;border-left:4px solid #F5B841;">
          <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#F5B841;">STEP 3 — Day 3-5</p>
          <p style="margin:0;font-size:14px;color:#4B5563;">
            Your first reconciled reports and live dashboard will be ready for review.
          </p>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 24px;font-size:15px;color:#4B5563;line-height:1.6;">
      Have questions in the meantime? Just reply to this email — we read every message.
    </p>

    <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
      <tr>
        <td>
          <a href="https://iaccountant.io/how-we-work"
             style="display:inline-block;padding:12px 24px;background-color:#0F9D6D;color:#ffffff;
                    text-decoration:none;border-radius:999px;font-size:14px;font-weight:600;">
            See How We Work
          </a>
        </td>
      </tr>
    </table>
  `);
}

// ── Internal notification to your team ──
export function internalLeadNotificationEmail({
  type,
  name,
  email,
  company,
  details,
}: {
  type: "Contact" | "Free Trial";
  name: string;
  email: string;
  company?: string;
  details?: string;
}): string {
  return layout(`
    <h2 style="margin:0 0 16px;font-size:22px;color:#0B1F3A;">
      🔔 New ${type} Lead
    </h2>
    <table width="100%" cellpadding="8" cellspacing="0" style="font-size:14px;color:#4B5563;">
      <tr>
        <td style="font-weight:600;color:#0B1F3A;width:120px;">Name:</td>
        <td>${name}</td>
      </tr>
      <tr>
        <td style="font-weight:600;color:#0B1F3A;">Email:</td>
        <td><a href="mailto:${email}" style="color:#0F9D6D;">${email}</a></td>
      </tr>
      ${company ? `<tr><td style="font-weight:600;color:#0B1F3A;">Company:</td><td>${company}</td></tr>` : ""}
      ${details ? `<tr><td style="font-weight:600;color:#0B1F3A;vertical-align:top;">Details:</td><td>${details}</td></tr>` : ""}
    </table>
    <p style="margin:24px 0 0;font-size:13px;color:#9CA3AF;">
      This lead was captured via the iAccountant.io website and stored in your database.
    </p>
  `);
}