const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "http://pharmacrop.local";

// Some WordPress security/firewall plugins block requests that don't look
// like they came from a real browser (no User-Agent, etc). Server-to-server
// fetches from Next.js don't send one by default, so set one explicitly.
const WP_FETCH_HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; PharmaCropSite/1.0; +https://pharmacrop.com.au)",
  Accept: "application/json",
};

const FALLBACK_IMG = "/assets/img/General Images/Blog/hero_bg_4.jpg";

// WordPress's REST API returns title/excerpt as pre-rendered HTML with
// numeric/named entities (e.g. "&#8217;"); these fields are plain JSX text
// here (not dangerouslySetInnerHTML), so decode rather than let them show
// up literally on the page.
function decodeEntities(text) {
  return String(text || "")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rdquo;/g, "”")
    .replace(/&ldquo;/g, "“")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–");
}

function stripHtml(html) {
  return decodeEntities(String(html || "").replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

function formatDate(dateString) {
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return "";
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function mapPost(raw) {
  const media = raw._embedded && raw._embedded["wp:featuredmedia"] && raw._embedded["wp:featuredmedia"][0];
  const image = (media && media.source_url) || FALLBACK_IMG;

  const termGroups = (raw._embedded && raw._embedded["wp:term"]) || [];
  const categoryTerms = termGroups.find((group) => group && group[0] && group[0].taxonomy === "category") || [];
  const tagTerms = termGroups.find((group) => group && group[0] && group[0].taxonomy === "post_tag") || [];
  const category = (categoryTerms[0] && decodeEntities(categoryTerms[0].name)) || "Uncategorised";
  const tags = tagTerms.map((t) => decodeEntities(t.name));

  return {
    slug: raw.slug,
    title: decodeEntities((raw.title && raw.title.rendered) || ""),
    date: formatDate(raw.date_gmt || raw.date),
    dateGmt: raw.date_gmt || raw.date || "",
    category,
    tags,
    image,
    excerpt: stripHtml((raw.excerpt && raw.excerpt.rendered) || ""),
    content: (raw.content && raw.content.rendered) || "",
  };
}

async function fetchLivePosts() {
  const url = `${WP_API_URL}/wp-json/wp/v2/posts?per_page=100&_embed`;
  try {
    const res = await fetch(url, { headers: WP_FETCH_HEADERS, next: { revalidate: 60 } });
    if (!res.ok) {
      console.error(`[wp-posts] WordPress returned ${res.status} ${res.statusText} for ${url}`);
      return [];
    }
    const raw = await res.json();
    if (!Array.isArray(raw)) {
      console.error(`[wp-posts] WordPress response was not a posts array for ${url}:`, JSON.stringify(raw).slice(0, 500));
      return [];
    }
    return raw.map(mapPost);
  } catch (err) {
    console.error(`[wp-posts] Failed to fetch ${url}:`, err && err.message ? err.message : err);
    return [];
  }
}

function sortByDateDesc(posts) {
  return posts.slice().sort((a, b) => new Date(b.dateGmt) - new Date(a.dateGmt));
}

export async function fetchBlogPosts() {
  return sortByDateDesc(await fetchLivePosts());
}

export async function getPostBySlug(slug) {
  const posts = await fetchBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export async function getRecentPosts(excludeSlug, count = 3) {
  const posts = await fetchBlogPosts();
  return posts.filter((p) => p.slug !== excludeSlug).slice(0, count);
}

export async function getRelatedPosts(post, count = 2) {
  const posts = await fetchBlogPosts();
  const sameCategory = posts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const rest = posts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, count);
}

export async function getCategories() {
  const posts = await fetchBlogPosts();
  const counts = {};
  posts.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

export async function getTags() {
  const posts = await fetchBlogPosts();
  const set = new Set();
  posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set);
}
