import { NextRequest, NextResponse } from "next/server";
import { contact } from "@desertdiamond/shared/tokens";
import { programs } from "@desertdiamond/shared/content";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, program, cohort, message } = body;

    // Validate required fields
    if (!name || !email || !program || !cohort) {
      return NextResponse.json(
        { error: "Name, email, program, and cohort are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Validate program exists
    const selectedProgram = programs.find((p) => p.id === program);
    if (!selectedProgram) {
      return NextResponse.json({ error: "Invalid program selected" }, { status: 400 });
    }

    // TODO: Integrate with AWS SES or email service
    // For now, log the submission (in production, this would send an actual email)
    console.log("Registration form submission:", {
      name,
      email,
      phone,
      program: selectedProgram.title,
      programPrice: selectedProgram.price,
      cohort,
      message,
      timestamp: new Date().toISOString(),
      to: contact.email,
    });

    // In production, you would do something like:
    // await sesClient.send(new SendEmailCommand({
    //   Source: process.env.SES_FROM_EMAIL,
    //   Destination: { ToAddresses: [contact.email] },
    //   Message: {
    //     Subject: { Data: `New Registration: ${name} - ${selectedProgram.title}` },
    //     Body: { Text: { Data: `Name: ${name}\nEmail: ${email}\n...` } }
    //   }
    // }));

    return NextResponse.json(
      { success: true, message: "Registration submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Registration form error:", error);
    return NextResponse.json(
      { error: "Failed to submit registration. Please try again." },
      { status: 500 }
    );
  }
}
