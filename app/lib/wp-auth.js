import { cookies } from "next/headers";
import { WP_API_URL, WP_FETCH_HEADERS } from "../all-products/wp-products";

export const HCP_TOKEN_COOKIE = "cs_hcp_token";
export const HCP_NAME_COOKIE = "cs_hcp_name";
export const HCP_EMAIL_COOKIE = "cs_hcp_email";

export const HCP_SESSION_COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
};

// Name/email come back in the WordPress JWT token response itself at login
// time (see /api/auth/login), so this just reads the cookies set then — no
// extra WordPress request needed, and nothing depends on the Authorization
// header making it through the host's proxy (some hosts strip it).
export async function getCurrentHcpUser() {
  const jar = await cookies();
  const token = jar.get(HCP_TOKEN_COOKIE)?.value;
  if (!token) return null;
  return {
    name: jar.get(HCP_NAME_COOKIE)?.value || "",
    email: jar.get(HCP_EMAIL_COOKIE)?.value || "",
  };
}

export async function getHcpToken() {
  return (await cookies()).get(HCP_TOKEN_COOKIE)?.value || null;
}

// Full profile (contact/professional details + avatar) lives in WordPress
// user meta behind the PharmaCrop HCP Profile endpoint, which does need the
// Authorization header to reach WordPress. Returns null on any failure so
// the profile page can show placeholders instead of crashing.
export async function getHcpProfile() {
  const token = await getHcpToken();
  if (!token) return null;

  try {
    const res = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/profile`, {
      headers: { ...WP_FETCH_HEADERS, Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return (data && data.ok && data.profile) || null;
  } catch (err) {
    console.error("[wp-auth] Failed to fetch HCP profile:", err && err.message ? err.message : err);
    return null;
  }
}
