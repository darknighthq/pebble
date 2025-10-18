import Mailjet from "node-mailjet";
import { NextResponse } from "next/server";

type WaitlistPayload = {
  email?: string;
  store?: string;
};

const waitlistRecipient = process.env.MAILJET_WAITLIST_RECIPIENT;
const senderEmail = process.env.MAILJET_SENDER_EMAIL;
const senderName = process.env.MAILJET_SENDER_NAME ?? "PebbleCRM";
const mailjetApiKey = process.env.MAILJET_API_KEY;
const mailjetApiSecret = process.env.MAILJET_API_SECRET;

if (!waitlistRecipient || !senderEmail || !mailjetApiKey || !mailjetApiSecret) {
  console.warn(
    "[waitlist] Missing Mailjet environment variables: MAILJET_API_KEY, MAILJET_API_SECRET, MAILJET_SENDER_EMAIL, MAILJET_WAITLIST_RECIPIENT",
  );
}

const mailjetClient =
  mailjetApiKey && mailjetApiSecret
    ? Mailjet.apiConnect(mailjetApiKey, mailjetApiSecret)
    : null;

export async function POST(request: Request) {
  if (!mailjetClient || !waitlistRecipient || !senderEmail) {
    return NextResponse.json(
      {
        error: "Waitlist email service misconfigured. Please contact support.",
      },
      { status: 500 },
    );
  }

  let payload: WaitlistPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = payload.email?.toString().trim().toLowerCase();
  const store = payload.store?.toString().trim();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const storeLine = store ? `Store URL: ${store}` : "Store URL: (not provided)";

  try {
    await mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: senderEmail,
            Name: senderName,
          },
          To: [
            {
              Email: waitlistRecipient,
            },
          ],
          Subject: "New PebbleCRM waitlist signup",
          TextPart: `New waitlist signup\nEmail: ${email}\n${storeLine}`,
          HTMLPart: `<p><strong>New waitlist signup</strong></p><p>Email: <a href="mailto:${email}">${email}</a></p><p>${storeLine}</p>`
            .replace(/\n/g, ""),
          CustomID: "waitlist_signup",
        },
      ],
    });
  } catch (error) {
    console.error("[waitlist] Failed to send Mailjet message", error);
    return NextResponse.json(
      { error: "We could not submit your request right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, message: "Thanks! We'll be in touch soon." });
}

