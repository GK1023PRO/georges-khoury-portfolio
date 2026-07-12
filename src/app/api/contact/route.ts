import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactFormSchema } from "@/lib/validations";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    const validationResult =
      contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors =
        validationResult.error.flatten().fieldErrors;

      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted fields.",
          fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    const {
      name,
      email,
      subject,
      message,
      company,
    } = validationResult.data;

    if (company) {
      return NextResponse.json({
        success: true,
        message: "Your message was sent successfully.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactRecipient =
      process.env.CONTACT_EMAIL_TO;
    const senderEmail =
      process.env.CONTACT_EMAIL_FROM;

    if (
      !apiKey ||
      !contactRecipient ||
      !senderEmail
    ) {
      console.error(
        "Missing contact-form environment variables.",
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "The contact service is not configured yet.",
        },
        {
          status: 500,
        },
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll(
      "\n",
      "<br />",
    );

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [contactRecipient],
      replyTo: email,
      subject: `Portfolio message: ${subject}`,
      text: [
        "New portfolio contact message",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div
          style="
            max-width: 640px;
            margin: 0 auto;
            padding: 32px;
            background: #0a0d12;
            color: #e9edf3;
            font-family: Arial, sans-serif;
          "
        >
          <h1
            style="
              margin: 0 0 24px;
              color: #22e0a4;
              font-size: 24px;
            "
          >
            New portfolio contact message
          </h1>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 24px;
            "
          >
            <tr>
              <td
                style="
                  padding: 10px;
                  border: 1px solid #232a35;
                  color: #8b95a5;
                "
              >
                Name
              </td>

              <td
                style="
                  padding: 10px;
                  border: 1px solid #232a35;
                "
              >
                ${safeName}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 10px;
                  border: 1px solid #232a35;
                  color: #8b95a5;
                "
              >
                Email
              </td>

              <td
                style="
                  padding: 10px;
                  border: 1px solid #232a35;
                "
              >
                ${safeEmail}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 10px;
                  border: 1px solid #232a35;
                  color: #8b95a5;
                "
              >
                Subject
              </td>

              <td
                style="
                  padding: 10px;
                  border: 1px solid #232a35;
                "
              >
                ${safeSubject}
              </td>
            </tr>
          </table>

          <div
            style="
              padding: 20px;
              border: 1px solid #232a35;
              border-radius: 8px;
              background: #11151c;
              line-height: 1.7;
            "
          >
            ${safeMessage}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "Your message could not be delivered. Please try again.",
        },
        {
          status: 502,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your message was sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}