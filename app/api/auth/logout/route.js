import { NextResponse } from "next/server";
import { HCP_TOKEN_COOKIE, HCP_NAME_COOKIE, HCP_EMAIL_COOKIE } from "../../../lib/wp-auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  [HCP_TOKEN_COOKIE, HCP_NAME_COOKIE, HCP_EMAIL_COOKIE].forEach((name) => {
    response.cookies.set(name, "", { path: "/", maxAge: 0 });
  });
  return response;
}
