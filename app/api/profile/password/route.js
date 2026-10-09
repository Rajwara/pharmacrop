import { NextResponse } from "next/server";
import { WP_API_URL } from "../../../all-products/wp-products";
import { getHcpToken } from "../../../lib/wp-auth";

function stripHtml(value) {
  return String(value || "").replace(/<[^>]+>/g, "");
}

export async function POST(request) {
  const token = await getHcpToken();
  if (!token) {
    return NextResponse.json({ ok: false, message: "Not signed in." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const currentPassword = body && body.currentPassword;
  const newPassword = body && body.newPassword;
  if (!currentPassword || !newPassword) {
    return NextResponse.json({ ok: false, message: "Enter your current and new password." }, { status: 400 });
  }
  if (String(newPassword).length < 8) {
    return NextResponse.json({ ok: false, message: "New password must be at least 8 characters." }, { status: 400 });
  }

  let wpRes;
  try {
    wpRes = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/profile/password`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ currentPassword, newPassword }),
      cache: "no-store",
    });
  } catch (err) {
    console.error("[profile/password] Failed to reach WordPress:", err && err.message ? err.message : err);
    return NextResponse.json({ ok: false, message: "Could not reach WordPress." }, { status: 502 });
  }

  const data = await wpRes.json().catch(() => null);
  if (!wpRes.ok || !data || data.ok === false) {
    const message = data && data.message ? stripHtml(data.message) : "Could not change your password.";
    return NextResponse.json({ ok: false, message }, { status: wpRes.status || 400 });
  }

  return NextResponse.json({ ok: true });
}
