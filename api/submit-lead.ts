import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@sanity/client";
import { Resend } from "resend";

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET || "production",
  token: process.env.SANITY_WRITE_TOKEN!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAILS = [
  "dinko@dinkodesign.com",
  "Cfrancoandsons@yahoo.com",
  "cfranco3848@gmail.com",
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, city, message } = req.body;

  if (!name || (!phone && !email)) {
    return res.status(400).json({ error: "Name and at least a phone or email are required" });
  }

  try {
    // Save lead to Sanity
    await client.create({
      _type: "lead",
      name,
      email: email || "",
      phone,
      service: service || "",
      city: city || "",
      message: message || "",
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    // Send email notifications (don't block response on failure)
    const serviceName = service || "Not specified";
    const cityName = city || "Not specified";
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "medium",
      timeStyle: "short",
    });

    resend.emails.send({
      from: "Franco and Sons Leads <leads@francoandsonsconstruction.net>",
      to: NOTIFY_EMAILS,
      subject: `New Lead: ${name} — ${serviceName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1E2D4A; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #8BC34A; margin: 0; font-size: 20px;">New Lead Submitted</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 14px;">${timestamp} PT</p>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; font-weight: 600;">${name}</td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; font-weight: 600;">
                  <a href="tel:${phone}" style="color: #1E2D4A; text-decoration: none;">${phone}</a>
                </td>
              </tr>` : ""}
              ${email ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Email</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${email}" style="color: #1E2D4A; text-decoration: none;">${email}</a>
                </td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Service</td>
                <td style="padding: 10px 0;">${serviceName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">City / Zip</td>
                <td style="padding: 10px 0;">${cityName}</td>
              </tr>
              ${message ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Message</td>
                <td style="padding: 10px 0;">${message}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              ${phone
                ? `<a href="tel:${phone}" style="display: inline-block; background: #8BC34A; color: #1E2D4A; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 14px;">
                    Call ${name} Now
                  </a>`
                : `<a href="mailto:${email}" style="display: inline-block; background: #8BC34A; color: #1E2D4A; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 14px;">
                    Email ${name} Now
                  </a>`
              }
            </div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
              This lead was submitted on francoandsonsconstruction.net and saved to Sanity CMS.
            </p>
          </div>
        </div>
      `,
    }).catch((err) => {
      console.error("Failed to send email notification:", err);
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return res.status(500).json({ error: "Failed to submit" });
  }
}
