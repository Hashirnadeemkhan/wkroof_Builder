import { NextResponse } from "next/server";
import { Resend } from "resend";

// Basic server-side validation so we never trust the client alone.
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const firstname = (body.firstname || "").toString().trim();
    const lastname = (body.lastname || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const phone = (body.phone || "").toString().trim();
    const service = (body.service || "").toString().trim();
    const message = (body.message || "").toString().trim();

    // Honeypot: bots fill hidden fields, humans don't.
    if ((body.company || "").toString().trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.BUSINESS_EMAIL || "wkroofbuild@gmail.com";
    // Use a verified domain sender once available; falls back to Resend's shared sender.
    const from = process.env.CONTACT_FROM_EMAIL || "WK Roofbuild <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const fullName = `${firstname} ${lastname}`.trim();
    const html = `
      <div style="font-family: Arial, sans-serif; color: #1B2A41; line-height: 1.6;">
        <h2 style="color: #FF5A1A; margin-bottom: 4px;">New Contact Form Enquiry</h2>
        <p style="color: #6b7280; margin-top: 0;">From the WK Roofbuild website</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
          <tr><td style="padding: 6px 12px 6px 0; font-weight: bold;">Name</td><td style="padding: 6px 0;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 6px 12px 6px 0; font-weight: bold;">Email</td><td style="padding: 6px 0;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 6px 12px 6px 0; font-weight: bold;">Phone</td><td style="padding: 6px 0;">${escapeHtml(phone) || "—"}</td></tr>
          <tr><td style="padding: 6px 12px 6px 0; font-weight: bold;">Service</td><td style="padding: 6px 0;">${escapeHtml(service) || "—"}</td></tr>
        </table>
        <p style="font-weight: bold; margin-bottom: 4px;">Message</p>
        <p style="background: #F5F7FA; padding: 14px 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry from ${fullName}${service ? ` — ${service}` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send your message. Please try again or call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
