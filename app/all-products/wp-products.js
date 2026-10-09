import { products as demoProducts } from "./products-data";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "http://pharmacrop.local";

const categoryMeta = {
  "dried-flower": {
    categoryName: "Dried Flower",
    dosageForm: "Dried Flower",
    presentation: "Dried flower in sealed container",
  },
  "oral-liquid": {
    categoryName: "Oral Liquid",
    dosageForm: "Oral Liquid",
    presentation: "Oral liquid in amber glass bottle with dropper",
  },
  pastilles: {
    categoryName: "Pastilles",
    dosageForm: "Pastilles",
    presentation: "Pastilles in child-resistant pack",
  },
  "inhaled-liquid": {
    categoryName: "Inhaled Liquid",
    dosageForm: "Inhaled Liquid",
    presentation: "Inhaled liquid cartridge (1 g)",
  },
};

const FALLBACK_IMG = "/assets/img/dashboard/Dried%20Flower%20Category.webp";

// Some WordPress security/firewall plugins block requests that don't look
// like they came from a real browser (no User-Agent, etc). Server-to-server
// fetches from Next.js don't send one by default, so set one explicitly.
const WP_FETCH_HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; PharmaCropSite/1.0; +https://pharmacrop.com.au)",
  Accept: "application/json",
};

function formatLabel(slug) {
  return String(slug || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function classifyStrength(thc, cbd) {
  const thcNum = parseFloat(String(thc || "").replace(/[^0-9.]/g, "")) || 0;
  const cbdNum = parseFloat(String(cbd || "").replace(/[^0-9.]/g, "")) || 0;
  if (thcNum > cbdNum * 1.5) return "thc";
  if (cbdNum > thcNum * 1.5) return "cbd";
  return "balanced";
}

function isImageUrl(value) {
  return typeof value === "string" && value.indexOf("http") === 0;
}

// No dedicated "strain type" field exists in WordPress yet — the Indica/
// Sativa/Hybrid label lives at the start of species_ratio instead, e.g.
// "Hybrid – Indica 50% : Sativa 50%" or just "Sativa". Pull it out so the
// strain pill and "Plant Species" row render the same way the demo data did.
function parseStrain(speciesRatioRaw) {
  const raw = String(speciesRatioRaw || "").trim();
  const match = raw.match(/^(indica|sativa|hybrid)\s*[–-]?\s*(.*)$/i);
  if (!match) return { strainType: "", speciesRatio: raw };
  const strainType = match[1][0].toUpperCase() + match[1].slice(1).toLowerCase();
  return { strainType, speciesRatio: match[2].trim() };
}

// The client's product spreadsheet lists species_ratio as bare numbers
// (e.g. "50% : 50%" or "70% : 30%"), always in Indica : Sativa order per
// its own column header. Label it the same way on the site so it's not
// ambiguous to a visitor without that column header for context.
function formatSpeciesRatio(raw) {
  const value = String(raw || "").trim();
  const match = value.match(/^(\d+%?)\s*:\s*(\d+%?)$/);
  if (!match) return value;
  const withPercent = (n) => (n.endsWith("%") ? n : `${n}%`);
  return `Indica ${withPercent(match[1])} : Sativa ${withPercent(match[2])}`;
}

const mediaUrlCache = new Map();

function resolveMediaUrl(value) {
  if (isImageUrl(value)) return Promise.resolve(value);
  // ACF's "Image" field can also return an Array/Object (Return Format
  // set to "Image Array" or "Image Object" instead of "Image URL"/"Image ID").
  if (value && typeof value === "object" && isImageUrl(value.url)) {
    return Promise.resolve(value.url);
  }
  if (typeof value === "number" && value > 0) {
    if (mediaUrlCache.has(value)) return mediaUrlCache.get(value);
    const promise = fetch(`${WP_API_URL}/wp-json/wp/v2/media/${value}`, {
      headers: WP_FETCH_HEADERS,
      next: { revalidate: 60 },
    })
      .then((res) => {
        if (!res.ok) {
          console.error(`[wp-products] Media ${value} returned ${res.status} ${res.statusText}`);
          return null;
        }
        return res.json();
      })
      .then((media) => (media && media.source_url) || null)
      .catch((err) => {
        console.error(`[wp-products] Failed to fetch media ${value}:`, err && err.message ? err.message : err);
        return null;
      });
    // Don't let a transient failure get stuck forever in this long-lived
    // module-level cache — only cache successful resolutions.
    promise.then((url) => {
      if (!url) mediaUrlCache.delete(value);
    });
    mediaUrlCache.set(value, promise);
    return promise;
  }
  return Promise.resolve(null);
}

async function mapProduct(raw) {
  const acf = raw.acf || {};
  const media = raw._embedded && raw._embedded["wp:featuredmedia"] && raw._embedded["wp:featuredmedia"][0];
  const featured = (media && media.source_url) || null;
  const gallery = await Promise.all([
    resolveMediaUrl(acf.gallery_image_1),
    resolveMediaUrl(acf.gallery_image_2),
    resolveMediaUrl(acf.gallery_image_3),
    resolveMediaUrl(acf.gallery_image_4),
  ]);
  // The card/grid photo is the WordPress Featured Image; the detail page's
  // gallery is the 4 ACF images only, kept separate so the Featured Image
  // doesn't also show up as an extra 5th gallery thumbnail.
  const galleryImages = gallery.filter(isImageUrl);
  const images = galleryImages.length ? galleryImages : featured ? [featured] : [FALLBACK_IMG];
  const cardImage = featured || galleryImages[0] || FALLBACK_IMG;

  const categorySlug = acf.category || "uncategorised";
  const meta = categoryMeta[categorySlug] || {
    categoryName: formatLabel(categorySlug),
    dosageForm: formatLabel(categorySlug),
    presentation: "",
  };
  // ACF sometimes auto-generates an awkward field name from the label
  // ("Species Ratio (Indica : Sativa)" -> "species_ratio_indica_:_sativa")
  // instead of the plain "species_ratio" the rest of this file expects.
  const speciesRatioRaw = acf.species_ratio || acf["species_ratio_indica_:_sativa"] || "";
  const derivedStrain = parseStrain(speciesRatioRaw);

  return {
    slug: raw.slug,
    name: (raw.title && raw.title.rendered) || "",
    categorySlug,
    category: meta.categoryName,
    dosageForm: meta.dosageForm,
    presentation: acf.presentation || meta.presentation,
    thc: acf.thc || "",
    cbd: acf.cbd || "",
    cbg: acf.cbg || "",
    cbn: acf.cbn || "",
    packSize: acf.pack_size || "",
    price: acf.price || "",
    strength: classifyStrength(acf.thc, acf.cbd),
    strainType: acf.strain_type || derivedStrain.strainType,
    speciesRatio: acf.strain_type ? formatSpeciesRatio(speciesRatioRaw) : derivedStrain.speciesRatio,
    cultivar: acf.cultivar || acf.cultivar_name || acf.strain_name || "",
    dominantTerpenes: acf.dominant_terpenes || "",
    excipients: acf.excipients || "",
    therapeuticProfile: acf.therapeutic_profile || "",
    tgaCategory: acf.tga_category || "",
    schedule: acf.schedule || "",
    spectrum: acf.spectrum || "",
    flavour: acf.flavour || acf.flavor || "",
    dietaryTags: acf.dietary_tags || acf.dietary_info || "",
    energyKj: acf.energy_kj || "",
    sugars: acf.sugars || acf.sugars_g || "",
    carbs: acf.carbs || acf.carbs_g || "",
    sodium: acf.sodium || acf.sodium_mg || "",
    fat: acf.fat || acf.fat_g || "",
    images,
    image: cardImage,
    altImage: images[1] || images[0],
    dateGmt: raw.date_gmt || raw.date || "",
  };
}

async function fetchLiveProducts() {
  const url = `${WP_API_URL}/wp-json/wp/v2/product?per_page=100&_embed`;
  try {
    const res = await fetch(url, { headers: WP_FETCH_HEADERS, next: { revalidate: 60 } });
    if (!res.ok) {
      console.error(`[wp-products] WordPress returned ${res.status} ${res.statusText} for ${url}`);
      return [];
    }
    const raw = await res.json();
    if (!Array.isArray(raw)) {
      console.error(`[wp-products] WordPress response was not a product array for ${url}:`, JSON.stringify(raw).slice(0, 500));
      return [];
    }
    return await Promise.all(raw.map(mapProduct));
  } catch (err) {
    console.error(`[wp-products] Failed to fetch ${url}:`, err && err.message ? err.message : err);
    return [];
  }
}

// Client-specified display order for the HCP portal product listing. Any
// product not named here (i.e. a newly added product) is appended after
// this fixed sequence, newest first, so it reads as "the latest arrivals" —
// and this sequence itself never moves as new products are added.
const FEATURED_PRODUCT_ORDER = [
  "Noosa Selects T19 Hybrid",
  "Noosa Selects T21 Indica",
  "Noosa Selects T23 Sativa",
  "Noosa Selects T25 Sativa",
  "Noosa Select T26 Indica",
  "Noosa Selects T28 Indica",
  "Ravine T19",
  "Valley T21",
  "Valley T23",
  "Summit T25",
  "Valley T25",
  "Pastille",
  "Serene 200 Isolate",
  "Serene 200 Plus",
  "Horizon 30:30",
  "Luminous",
  "Daydream",
];

function normalizeName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

// Matches loosely (either name containing the other) since WordPress titles
// are sometimes prefixed/suffixed differently than the client's own list
// (e.g. "PharmaCrop Horizon 30:30" vs "Horizon 30:30").
function matchesOrderName(productName, orderName) {
  const a = normalizeName(productName);
  const b = normalizeName(orderName);
  if (!a || !b) return false;
  return a === b || a.includes(b) || b.includes(a);
}

function orderIndex(product) {
  const index = FEATURED_PRODUCT_ORDER.findIndex((name) => matchesOrderName(product.name, name));
  return index === -1 ? FEATURED_PRODUCT_ORDER.length : index;
}

function sortByFeaturedOrder(products) {
  return products
    .map((product, i) => ({ product, i, order: orderIndex(product) }))
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order;
      // Unmatched products (new arrivals) show newest-added first; within
      // the fixed sequence itself, preserve the order given above.
      if (a.order === FEATURED_PRODUCT_ORDER.length) {
        return new Date(b.product.dateGmt) - new Date(a.product.dateGmt);
      }
      return a.i - b.i;
    })
    .map((entry) => entry.product);
}

// Each category shows live WordPress products once any exist for it; until
// then it keeps showing the demo products so the live site is never empty
// for a category you haven't migrated yet.
export async function fetchAllProducts() {
  const live = await fetchLiveProducts();
  const liveCategories = new Set(live.map((p) => p.categorySlug));
  const demoFallback = demoProducts
    .filter((p) => !liveCategories.has(p.categorySlug))
    .map((p) => ({ ...p, dateGmt: p.dateGmt || "1970-01-01T00:00:00" }));
  return sortByFeaturedOrder([...live, ...demoFallback]);
}

export async function getProductBySlug(slug) {
  const products = await fetchAllProducts();
  return products.find((p) => p.slug === slug) || null;
}

export async function getRelatedProducts(product, count = 4) {
  const products = await fetchAllProducts();
  return products.filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, count);
}

export async function getFeaturedProducts(count = 4) {
  const products = await fetchAllProducts();
  return products.slice().sort((a, b) => new Date(b.dateGmt) - new Date(a.dateGmt)).slice(0, count);
}

export { WP_API_URL };
