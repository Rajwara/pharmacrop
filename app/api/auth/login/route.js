import { NextResponse } from "next/server";
import { WP_API_URL } from "../../../all-products/wp-products";
import { HCP_TOKEN_COOKIE, HCP_NAME_COOKIE, HCP_EMAIL_COOKIE, HCP_SESSION_COOKIE_OPTS } from "../../../lib/wp-auth";

function stripHtml(value) {
  return String(value || "").replace(/<[^>]+>/g, "");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const email = (body && body.email ? String(body.email) : "").trim();
  const password = body && body.password ? String(body.password) : "";
  if (!email || !password) {
    return NextResponse.json({ ok: false, message: "Enter your email and password." }, { status: 400 });
  }

  let wpRes;
  try {
    wpRes = await fetch(`${WP_API_URL}/wp-json/jwt-auth/v1/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
      cache: "no-store",
    });
  } catch (err) {
    console.error("[auth/login] Failed to reach WordPress:", err && err.message ? err.message : err);
    return NextResponse.json({ ok: false, message: "Could not reach the login service. Please try again shortly." }, { status: 502 });
  }

  const data = await wpRes.json().catch(() => null);

  if (!wpRes.ok || !data || !data.token) {
    // WordPress (via New User Approve) returns a readable message here for
    // pending/denied accounts, not just "incorrect password".
    const message = data && data.message ? stripHtml(data.message) : "Incorrect email or password.";
    return NextResponse.json({ ok: false, message }, { status: 401 });
  }

  const name = data.user_display_name || data.user_nicename || email;
  const userEmail = data.user_email || email;

  const response = NextResponse.json({ ok: true, name });

  response.cookies.set(HCP_TOKEN_COOKIE, data.token, HCP_SESSION_COOKIE_OPTS);
  response.cookies.set(HCP_NAME_COOKIE, name, HCP_SESSION_COOKIE_OPTS);
  response.cookies.set(HCP_EMAIL_COOKIE, userEmail, HCP_SESSION_COOKIE_OPTS);

  return response;
}
