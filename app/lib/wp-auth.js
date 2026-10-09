import { cookies } from "next/headers";
import { WP_API_URL, WP_FETCH_HEADERS } from "../all-products/wp-products";

export const HCP_TOKEN_COOKIE = "cs_hcp_token";

// Reads the signed-in HCP's WordPress profile for the current request using
// the JWT stored in the httpOnly cookie set by /api/auth/login. Returns null
// if there's no token or WordPress rejects it (expired/invalid), so pages
// can fall back to a generic greeting instead of crashing.
export async function getCurrentHcpUser() {
  const token = (await cookies()).get(HCP_TOKEN_COOKIE)?.value;
  if (!token) return null;

  try {
    // context=edit is required for WordPress to include the email field for
    // the authenticated user (the default "view" context omits it).
    const res = await fetch(`${WP_API_URL}/wp-json/wp/v2/users/me?context=edit`, {
      headers: { ...WP_FETCH_HEADERS, Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      name: data.name || data.slug || "",
      email: data.email || "",
    };
  } catch (err) {
    console.error("[wp-auth] Failed to fetch current user:", err && err.message ? err.message : err);
    return null;
  }
}
