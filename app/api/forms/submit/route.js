import { NextResponse } from "next/server";

const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";
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
    console.error("[forms/submit] reCAPTCHA verify request failed:", err && err.message ? err.message : err);
    return NextResponse.json({ success: false, message: "Could not verify reCAPTCHA. Please try again." }, { status: 502 });
  }

  if (!verifyData || !verifyData.success) {
    return NextResponse.json({ success: false, message: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
  }

  formData.delete("g-recaptcha-response");

  let web3formsData;
  try {
    const web3formsRes = await fetch(WEB3FORMS_SUBMIT_URL, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        Referer: "https://pharmacrop.com.au/",
        Origin: "https://pharmacrop.com.au",
      },
    });
    const web3formsText = await web3formsRes.text();
    try {
      web3formsData = JSON.parse(web3formsText);
    } catch {
      console.error("[forms/submit] Web3Forms returned non-JSON response:", web3formsRes.status, web3formsText.slice(0, 500));
      return NextResponse.json({ success: false, message: "Could not send your submission. Please try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("[forms/submit] Web3Forms request failed:", err && err.message ? err.message : err);
    return NextResponse.json({ success: false, message: "Could not send your submission. Please try again." }, { status: 502 });
  }

  return NextResponse.json(web3formsData);
}
