import { NextResponse } from "next/server";

const HCP_TOKEN_COOKIE = "cs_hcp_token";

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

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get(HCP_TOKEN_COOKIE)?.value;
  if (!token || isTokenExpired(token)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    const response = NextResponse.redirect(loginUrl);
    if (token) response.cookies.set(HCP_TOKEN_COOKIE, "", { path: "/", maxAge: 0 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/all-products/:path*", "/hcp-resources/:path*"],
};
