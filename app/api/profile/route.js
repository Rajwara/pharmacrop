import { NextResponse } from "next/server";
import { WP_API_URL } from "../../all-products/wp-products";
import { getHcpToken } from "../../lib/wp-auth";

function stripHtml(value) {
  return String(value || "").replace(/<[^>]+>/g, "");
}

const EDITABLE_FIELDS = [
  "hcp_mobile",
  "hcp_profession",
  "hcp_profession_other",
  "hcp_practice_name",
  "hcp_street_address",
  "hcp_suburb",
  "hcp_state",
  "hcp_postcode",
];

export async function GET() {
  const token = await getHcpToken();
  if (!token) {
    return NextResponse.json({ ok: false, message: "Not signed in." }, { status: 401 });
  }

  let wpRes;
  try {
    wpRes = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/profile`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
  } catch (err) {
    console.error("[profile] Failed to reach WordPress:", err && err.message ? err.message : err);
    return NextResponse.json({ ok: false, message: "Could not reach WordPress." }, { status: 502 });
  }

  const data = await wpRes.json().catch(() => null);
  if (!wpRes.ok || !data || data.ok === false) {
    const message = data && data.message ? stripHtml(data.message) : "Could not load your profile.";
    return NextResponse.json({ ok: false, message }, { status: wpRes.status || 400 });
  }

  return NextResponse.json(data);
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

  const update = {};
  for (const field of EDITABLE_FIELDS) {
    if (field in (body || {})) update[field] = body[field];
  }

  let wpRes;
  try {
    wpRes = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/profile`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(update),
      cache: "no-store",
    });
  } catch (err) {
    console.error("[profile] Failed to reach WordPress:", err && err.message ? err.message : err);
    return NextResponse.json({ ok: false, message: "Could not reach WordPress." }, { status: 502 });
  }

  const data = await wpRes.json().catch(() => null);
  if (!wpRes.ok || !data || data.ok === false) {
    const message = data && data.message ? stripHtml(data.message) : "Could not save your details.";
    return NextResponse.json({ ok: false, message }, { status: wpRes.status || 400 });
  }

  return NextResponse.json({ ok: true });
}
