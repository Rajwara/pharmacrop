import { fetchBlogPosts } from "./blog/wp-posts";

const BASE_URL = "https://pharmacrop.com.au";

const STATIC_ROUTES = [
  "",
  "about-us",
  "advanced-growing-systems",
  "blog",
  "careers",
  "contact",
  "controlled-cultivation",
  "environmental-precision",
  "faq",
  "our-facilities",
  "our-team",
  "partnerships",
  "privacy-policy",
  "products",
  "terms-and-conditions",
];

export default async function sitemap() {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: route ? `${BASE_URL}/${route}` : BASE_URL,
    lastModified: new Date(),
  }));

  let blogEntries = [];
  try {
    const posts = await fetchBlogPosts();
    blogEntries = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
    }));
  } catch {
    blogEntries = [];
  }

  return [...staticEntries, ...blogEntries];
}
