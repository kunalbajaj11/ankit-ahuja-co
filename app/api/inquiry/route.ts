import { NextResponse } from "next/server";

const RECEIVER_EMAILS = ["caankitahuja1@gmail.com", "anshum.ahuja@gmail.com"];
export const runtime = "edge";

type InquiryPayload = {
  source: "contact-page" | "lead-popup";
  name: string;
  phone: string;
  email?: string;
  service: string;
  message?: string;
};

function sanitize(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function isValidPhone(phone: string) {
  return /^\+?\d{10,15}$/.test(phone);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<InquiryPayload>;

    const source = body.source;
    const name = sanitize(body.name ?? "");
    const phone = sanitize(body.phone ?? "");
    const email = sanitize(body.email ?? "");
    const service = sanitize(body.service ?? "");
    const message = sanitize(body.message ?? "");

    if (!source || (source !== "contact-page" && source !== "lead-popup")) {
      return NextResponse.json(
        { success: false, message: "Invalid inquiry source." },
        { status: 400 },
      );
    }

    if (!name || !phone || !service) {
      return NextResponse.json(
        { success: false, message: "Name, phone, and service are required." },
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const subject =
      source === "contact-page"
        ? "New Inquiry - Contact Form"
        : "New Inquiry - Lead Popup";

    const sendEmail = async (receiverEmail: string) => {
      const formData = new URLSearchParams();
      formData.append("_subject", subject);
      formData.append("Source", source);
      formData.append("Name", name);
      formData.append("Phone", phone);
      formData.append("Service", service);
      if (email) formData.append("Email", email);
      if (message) formData.append("Message", message);

      const response = await fetch(`https://formsubmit.co/ajax/${receiverEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: formData.toString(),
      });

      if (!response.ok) return false;

      const result = (await response.json()) as { success?: string };
      return Boolean(result.success);
    };

    const results = await Promise.all(RECEIVER_EMAILS.map(sendEmail));
    if (results.some((status) => !status)) {
      return NextResponse.json(
        { success: false, message: "Unable to send inquiry to all recipients." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request payload." },
      { status: 400 },
    );
  }
}
