import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailLimitStore = new Map<string, {count: number, timestamp: number}>();

const cleanupOldEntries = () => {
  const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
  for (const [email, data] of emailLimitStore.entries()) {
    if (data.timestamp < oneDayAgo) {
      emailLimitStore.delete(email);
    }
  }
};

export async function POST(request: Request) {
  try {
    cleanupOldEntries();
    
    // Extract form data
    const { name, email, subject, message } = await request.json();

    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check rate limit
    const currentTime = Date.now();
    const userLimit = emailLimitStore.get(email);
    
    if (userLimit) {
      // If entry is from a previous day, reset it
      if (currentTime - userLimit.timestamp >= 24 * 60 * 60 * 1000) {
        emailLimitStore.set(email, { count: 1, timestamp: currentTime });
      } 
      // If user has hit daily limit
      else if (userLimit.count >= 2) {
        return NextResponse.json(
          { error: "Daily email limit reached. Please try again tomorrow." },
          { status: 429 }
        );
      } 
      // Increment count
      else {
        emailLimitStore.set(email, { 
          count: userLimit.count + 1, 
          timestamp: userLimit.timestamp 
        });
      }
    } else {
      // First email from this address today
      emailLimitStore.set(email, { count: 1, timestamp: currentTime });
    }

    // Get environment variables
    const SMTP_HOST = process.env.SMTP_HOST || "send.smtp.mailtrap.io";
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
    const SENDER_EMAIL = process.env.SENDER_EMAIL || "noreply@example.com";
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "your@email.com";

    // Verify credentials exist
    if (!SMTP_USER || !SMTP_PASSWORD) {
      console.error("Missing SMTP credentials");
      throw new Error("Email service not configured properly");
    }

    // Create transporter using SMTP
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USER || "api",
        pass: SMTP_PASSWORD,
      },
    });

    // Send email
    await transport.sendMail({
      from: `"Pesan dari" <${SENDER_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Pesan: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <!doctype html>
        <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          </head>
          <body style="font-family: sans-serif;">
            <div style="display: block; margin: auto; max-width: 600px; padding: 20px;" class="main">
              <h1 style="font-size: 24px; font-weight: bold; margin-top: 20px; color: #FF6B7A;">Pesan masuk dari</h1>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
                </tr>
              </table>
              
              <h2 style="font-size: 18px; margin-top: 20px;">Message:</h2>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
              
              <p style="color: #777; font-size: 12px; margin-top: 30px;">
                This email was sent from the contact form on your website.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
