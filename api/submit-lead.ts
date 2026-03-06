import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET || "production",
  token: process.env.SANITY_WRITE_TOKEN!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, city, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  try {
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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return res.status(500).json({ error: "Failed to submit" });
  }
}
