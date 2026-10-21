import { NextResponse } from "next/server";

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export async function POST(request) {
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid form submission." }, { status: 400 });
  }

  const recaptchaResponse = formData.get("g-recaptcha-response");
  if (!recaptchaResponse) {
    return NextResponse.json({ success: false, message: "Please complete the reCAPTCHA." }, { status: 400 });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("[forms/submit] RECAPTCHA_SECRET_KEY is not set.");
    return NextResponse.json({ success: false, message: "Form submission is temporarily unavailable." }, { status: 500 });
  }

  let verifyData;
  try {
    const verifyRes = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: recaptchaResponse }),
    });
    verifyData = await verifyRes.json();
  } catch (err) {
    const detail = err && err.message ? err.message : String(err);
    console.error("[forms/submit] reCAPTCHA verify request failed:", detail);
    return NextResponse.json({ success: false, message: "Could not verify reCAPTCHA. Please try again.", debug: detail }, { status: 502 });
  }

  if (!verifyData || !verifyData.success) {
    return NextResponse.json({ success: false, message: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
  }

  // Web3Forms sits behind Cloudflare bot protection that blocks server-to-server
  // requests, so we only verify reCAPTCHA here. The browser sends the actual
  // submission to Web3Forms directly afterward (see the client-side handlers).
  return NextResponse.json({ success: true });
}
