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

const mediaUrlCache = new Map();

function resolveMediaUrl(value) {
  if (isImageUrl(value)) return Promise.resolve(value);
  if (typeof value === "number" && value > 0) {
    if (mediaUrlCache.has(value)) return mediaUrlCache.get(value);
    const promise = fetch(`${WP_API_URL}/wp-json/wp/v2/media/${value}`, { next: { revalidate: 60 } })
      .then((res) => (res.ok ? res.json() : null))
      .then((media) => (media && media.source_url) || null)
      .catch(() => null);
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
  const images = [featured, ...gallery].filter(isImageUrl);
  if (!images.length) images.push(FALLBACK_IMG);

  const categorySlug = acf.category || "uncategorised";
  const meta = categoryMeta[categorySlug] || {
    categoryName: formatLabel(categorySlug),
    dosageForm: formatLabel(categorySlug),
    presentation: "",
  };

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
    strainType: acf.strain_type || "",
    speciesRatio: acf.species_ratio || "",
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
    image: images[0],
    altImage: images[1] || images[0],
    dateGmt: raw.date_gmt || raw.date || "",
  };
}

export async function fetchAllProducts() {
  try {
    const res = await fetch(`${WP_API_URL}/wp-json/wp/v2/product?per_page=100&_embed`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const raw = await res.json();
    return Array.isArray(raw) ? await Promise.all(raw.map(mapProduct)) : [];
  } catch (err) {
    return [];
  }
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
