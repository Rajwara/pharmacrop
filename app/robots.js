import { headers } from "next/headers";

const CANONICAL_HOSTS = ["pharmacrop.com.au", "www.pharmacrop.com.au"];

export default async function robots() {
  const headersList = await headers();
  const host = (headersList.get("host") || "").toLowerCase();

  if (!CANONICAL_HOSTS.includes(host)) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/profile", "/all-products", "/hcp-resources", "/api/"],
      },
    ],
    sitemap: "https://pharmacrop.com.au/sitemap.xml",
  };
}
