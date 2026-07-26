import { NextRequest, NextResponse } from "next/server";
import { contact } from "@desertdiamond/shared/tokens";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // TODO: Integrate with AWS SES or email service
    // For now, log the submission (in production, this would send an actual email)
    console.log("Contact form submission:", {
      name,
      email,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
      to: contact.email,
    });

    // In production, you would do something like:
    // await sesClient.send(new SendEmailCommand({
    //   Source: process.env.SES_FROM_EMAIL,
    //   Destination: { ToAddresses: [contact.email] },
    //   Message: {
    //     Subject: { Data: `New Contact Form Submission from ${name}` },
    //     Body: { Text: { Data: `Name: ${name}\nEmail: ${email}\n...` } }
    //   }
    // }));

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
