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
  "password",
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

  if (String(body.password).length < 8) {
    return NextResponse.json({ ok: false, message: "Password must be at least 8 characters." }, { status: 400 });
  }

  // confirmPassword is a client-only check and should never reach WordPress.
  const { confirmPassword, ...wpBody } = body;

  // This hits a custom WordPress REST route (not part of WP core) that
  // creates a pending HCP account — see the PharmaCrop Connector plugin.
  // New User Approve then blocks sign-in until an admin approves it.
  let wpRes;
  try {
    wpRes = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wpBody),
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

  // Email the team the full submission so a new HCP registration doesn't
  // rely on someone noticing it in wp-admin. Never blocks or fails the
  // registration itself -- WordPress is the source of truth.
  const { password, ...notifyFields } = wpBody;
  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: "d109255d-9679-40d9-bab0-fa88574acbb1",
        subject: `New HCP Registration - ${notifyFields.firstName || ""} ${notifyFields.lastName || ""}`.trim(),
        ...notifyFields,
      }),
    });
  } catch (err) {
    console.error("[auth/register] Failed to send registration notification:", err && err.message ? err.message : err);
  }

  return NextResponse.json({ ok: true });
}
