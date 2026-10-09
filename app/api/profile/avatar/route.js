import { NextResponse } from "next/server";
import { WP_API_URL } from "../../../all-products/wp-products";
import { getHcpToken } from "../../../lib/wp-auth";

function stripHtml(value) {
  return String(value || "").replace(/<[^>]+>/g, "");
}

// Kept comfortably under common serverless-platform request body limits
// (Vercel's default is ~4.5MB) so an oversized upload gets our own clear
// JSON error instead of a raw platform error page the client can't parse.
const MAX_SIZE = 4 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(request) {
  const token = await getHcpToken();
  if (!token) {
    return NextResponse.json({ ok: false, message: "Not signed in." }, { status: 401 });
  }

  let incomingForm;
  try {
    incomingForm = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid upload." }, { status: 400 });
  }

  const file = incomingForm.get("avatar");
  if (!file || typeof file === "string") {
    return NextResponse.json({ ok: false, message: "Choose an image to upload." }, { status: 400 });
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ ok: false, message: "Please upload a JPG, PNG or WEBP image." }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ ok: false, message: "Image must be under 4MB." }, { status: 400 });
  }

  const forwardForm = new FormData();
  forwardForm.append("avatar", file, file.name || "avatar.jpg");

  let wpRes;
  try {
    wpRes = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/profile/avatar`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: forwardForm,
      cache: "no-store",
    });
  } catch (err) {
    console.error("[profile/avatar] Failed to reach WordPress:", err && err.message ? err.message : err);
    return NextResponse.json({ ok: false, message: "Could not reach WordPress." }, { status: 502 });
  }

  const data = await wpRes.json().catch(() => null);
  if (!wpRes.ok || !data || data.ok === false) {
    const message = data && data.message ? stripHtml(data.message) : "Could not upload your photo.";
    return NextResponse.json({ ok: false, message }, { status: wpRes.status || 400 });
  }

  return NextResponse.json({ ok: true, avatarUrl: data.avatarUrl || "" });
}
