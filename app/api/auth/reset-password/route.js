import { NextResponse } from "next/server";
import { WP_API_URL, WP_FETCH_HEADERS } from "../../../all-products/wp-products";

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

  const login = body && body.login ? String(body.login) : "";
  const key = body && body.key ? String(body.key) : "";
  const password = body && body.password ? String(body.password) : "";

  if (!login || !key || !password) {
    return NextResponse.json({ ok: false, message: "Missing or invalid reset details." }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ ok: false, message: "Password must be at least 8 characters." }, { status: 400 });
  }

  let wpRes;
  try {
    wpRes = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/reset-password`, {
      method: "POST",
      headers: { ...WP_FETCH_HEADERS, "Content-Type": "application/json" },
      body: JSON.stringify({ login, key, password }),
      cache: "no-store",
    });
  } catch (err) {
    console.error("[auth/reset-password] Failed to reach WordPress:", err && err.message ? err.message : err);
    return NextResponse.json({ ok: false, message: "Could not reach the password reset service. Please try again shortly." }, { status: 502 });
  }

  const data = await wpRes.json().catch(() => null);

  if (!wpRes.ok || !data || data.ok === false) {
    const message = data && data.message ? stripHtml(data.message) : "This reset link is invalid or has expired. Please request a new one.";
    return NextResponse.json({ ok: false, message }, { status: wpRes.status || 400 });
  }

  return NextResponse.json({ ok: true });
}
