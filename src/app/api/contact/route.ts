import { NextResponse } from "next/server";

type Payload = {
  fullName?: string;
  organization?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  category?: string;
  company?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ message: "Thank you. Your inquiry has been received." });
  }

  const fullName = (body.fullName || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();

  if (!fullName) return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  if (!email || !isValidEmail(email))
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  if (!subject) return NextResponse.json({ error: "Subject is required." }, { status: 400 });
  if (!message || message.length < 10)
    return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });

  // NOTE: Email delivery is not configured. In production, integrate an email provider
  // or CRM using environment variables (e.g., SMTP_HOST, SMTP_USER, CONTACT_TO_EMAIL).
  // For now, log the inquiry server-side.
  console.log("Contact inquiry received:", {
    fullName,
    organization: (body.organization || "").trim(),
    email,
    phone: (body.phone || "").trim(),
    category: body.category,
    subject,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    message:
      "Thank you. Your inquiry has been received. Our team will get back to you shortly.",
  });
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
