import { NextResponse } from "next/server";
import { HCP_TOKEN_COOKIE } from "../../../lib/wp-auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(HCP_TOKEN_COOKIE, "", { path: "/", maxAge: 0 });
  return response;
}
