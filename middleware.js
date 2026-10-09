import { NextResponse } from "next/server";

const HCP_TOKEN_COOKIE = "cs_hcp_token";
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "http://pharmacrop.local";

// Everything in the dashboard area (the product catalogue, HCP resources,
// account pages) sits behind the HCP login — none of it is linked from the
// public marketing site.
const PROTECTED_PREFIXES = ["/dashboard", "/profile", "/all-products", "/hcp-resources"];

function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    return typeof payload.exp === "number" && payload.exp * 1000 < Date.now();
  } catch {
    // Not a decodable JWT — treat as invalid/expired rather than trusting it.
    return true;
  }
}

// Catches an account being deleted, denied or put back to pending *after*
// its token was issued — a JWT stays structurally "valid" until it expires,
// so this is the only way to notice an admin revoked access in the
// meantime. Returns a reason string when access should be cut off, or null
// when the account is fine or WordPress couldn't be reached (fails open on
// network errors so a WordPress hiccup doesn't lock everyone out).
async function checkRevoked(token) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/session-check`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data.ok === false) return data.reason || "invalid";
    return null;
  } catch {
    return null;
  }
}

function redirectToLogin(request, pathname, reason, clearCookie) {
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", pathname);
  if (reason) loginUrl.searchParams.set("reason", reason);
  const response = NextResponse.redirect(loginUrl);
  if (clearCookie) response.cookies.set(HCP_TOKEN_COOKIE, "", { path: "/", maxAge: 0 });
  return response;
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get(HCP_TOKEN_COOKIE)?.value;
  if (!token || isTokenExpired(token)) {
    return redirectToLogin(request, pathname, null, !!token);
  }

  const revokedReason = await checkRevoked(token);
  if (revokedReason) {
    return redirectToLogin(request, pathname, revokedReason, true);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/all-products/:path*", "/hcp-resources/:path*"],
};
