import { NextResponse } from "next/server";
import { WP_API_URL, WP_FETCH_HEADERS } from "../../../all-products/wp-products";

// Same message whether or not the account exists, so this endpoint can't be
// used to check which emails are registered.
const GENERIC_MESSAGE = "If an account exists for that email, we've sent a password reset link.";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const email = (body && body.email ? String(body.email) : "").trim();
  if (!email) {
    return NextResponse.json({ ok: false, message: "Enter your email address." }, { status: 400 });
  }

  try {
    // Hits a custom WordPress REST route (PharmaCrop HCP Password Reset
    // plugin) that emails a reset link pointing back at /reset-password on
    // this site, instead of WordPress's own wp-login.php screen.
    await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/forgot-password`, {
      method: "POST",
      headers: { ...WP_FETCH_HEADERS, "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      cache: "no-store",
    });
  } catch (err) {
    console.error("[auth/forgot-password] Failed to reach WordPress:", err && err.message ? err.message : err);
    // Still return the generic success message below — a transient network
    // error here shouldn't change what the UI tells the visitor.
  }

  return NextResponse.json({ ok: true, message: GENERIC_MESSAGE });
}
