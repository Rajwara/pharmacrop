import { NextResponse } from "next/server";

const HCP_TOKEN_COOKIE = "cs_hcp_token";
const HCP_NAME_COOKIE = "cs_hcp_name";
const HCP_EMAIL_COOKIE = "cs_hcp_email";
const HCP_LAST_SEEN_COOKIE = "cs_hcp_last_seen";
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "http://pharmacrop.local";

// Signs a visitor out after this long with no request to a protected page --
// distinct from the JWT's own (much longer) expiry, which only bounds the
// total session length, not how long it can sit idle.
const IDLE_TIMEOUT_MS = 6 * 60 * 60 * 1000;

// Everything in the dashboard area (the product catalogue, HCP resources,
// account pages) sits behind the HCP login — none of it is linked from the
// public marketing site.
const PROTECTED_PREFIXES = ["/dashboard", "/profile", "/all-products", "/hcp-resources"];

function decodeJwtPayload(token) {
  try {
    return JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return null;
  }
}

function isTokenExpired(token) {
  const payload = decodeJwtPayload(token);
  if (!payload) return true; // Not a decodable JWT — treat as invalid/expired rather than trusting it.
  return typeof payload.exp === "number" && payload.exp * 1000 < Date.now();
}

// Changing a password doesn't invalidate already-issued JWTs on its own, so
// this is what actually logs out any other active session once a password
// changes. Fails open (same reasoning as checkRevoked) if the token has no
// issued-at claim to compare against, or WordPress can't be reached.
async function checkPasswordChanged(token) {
  const payload = decodeJwtPayload(token);
  if (!payload || typeof payload.iat !== "number") return false;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`${WP_API_URL}/wp-json/pharmacrop/v1/profile/password-changed-at`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);
    if (!res.ok) return false;
    const data = await res.json();
    const changedAt = data && typeof data.changedAt === "number" ? data.changedAt : 0;
    return changedAt > 0 && changedAt > payload.iat;
  } catch {
    return false;
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
  if (clearCookie) {
    response.cookies.set(HCP_TOKEN_COOKIE, "", { path: "/", maxAge: 0 });
    response.cookies.set(HCP_NAME_COOKIE, "", { path: "/", maxAge: 0 });
    response.cookies.set(HCP_EMAIL_COOKIE, "", { path: "/", maxAge: 0 });
    response.cookies.set(HCP_LAST_SEEN_COOKIE, "", { path: "/", maxAge: 0 });
  }
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

  const now = Date.now();
  const lastSeenRaw = request.cookies.get(HCP_LAST_SEEN_COOKIE)?.value;
  const lastSeen = lastSeenRaw ? parseInt(lastSeenRaw, 10) : NaN;
  if (!isNaN(lastSeen) && now - lastSeen > IDLE_TIMEOUT_MS) {
    return redirectToLogin(request, pathname, "idle_timeout", true);
  }

  if (await checkPasswordChanged(token)) {
    return redirectToLogin(request, pathname, "password_changed", true);
  }

  const revokedReason = await checkRevoked(token);
  if (revokedReason) {
    return redirectToLogin(request, pathname, revokedReason, true);
  }

  const response = NextResponse.next();
  response.cookies.set(HCP_LAST_SEEN_COOKIE, String(now), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/all-products/:path*", "/hcp-resources/:path*"],
};
