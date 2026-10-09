import { NextResponse } from "next/server";
import { WP_API_URL } from "../../../all-products/wp-products";

function stripHtml(value) {
  return String(value || "").replace(/<[^>]+>/g, "");
}

const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "workEmail",
  "mobile",
  "profession",
  "ahpra",
  "practiceName",
  "streetAddress",
  "suburb",
  "state",
  "postcode",
  "consent",
];

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!body || !body[field]) {
      return NextResponse.json({ ok: false, message: "Please complete all required fields." }, { status: 400 });
    }
  }

  // This hits a custom WordPress REST route (not part of WP core) that
  // creates a pending HCP account — see the PharmaCrop Connector plugin.
  // New User Approve then blocks sign-in until an admin approves it.
  let wpRes;
  try {
    wpRes = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
  } catch (err) {
    console.error("[auth/register] Failed to reach WordPress:", err && err.message ? err.message : err);
    return NextResponse.json({ ok: false, message: "Could not reach the registration service. Please try again shortly." }, { status: 502 });
  }

  const data = await wpRes.json().catch(() => null);

  if (!wpRes.ok || !data || data.ok === false) {
    const message = data && data.message ? stripHtml(data.message) : "Something went wrong submitting your registration.";
    return NextResponse.json({ ok: false, message }, { status: wpRes.status || 400 });
  }

  return NextResponse.json({ ok: true });
}
