import { NextResponse } from "next/server";
import { getCurrentHcpUser } from "../../../lib/wp-auth";

// Lightweight — reads the session cookies only, no WordPress call — so
// pages that are otherwise cached (ISR) can fetch the signed-in user's
// name/email client-side without losing that caching themselves.
export async function GET() {
  const user = await getCurrentHcpUser();
  return NextResponse.json({ name: (user && user.name) || "", email: (user && user.email) || "" });
}
