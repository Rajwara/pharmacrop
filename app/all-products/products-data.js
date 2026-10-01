const categoryImages = {
  "dried-flower": "/assets/img/dashboard/Dried%20Flower%20Category.webp",
  "oral-liquid": "/assets/img/dashboard/Oral%20Liquid%20Category.webp",
  pastilles: "/assets/img/dashboard/Pastilles%20Category.webp",
  "inhaled-liquid": "/assets/img/dashboard/Inhaled%20liquid%20Category.webp",
};

const featuredImages = {
  "dried-flower": "/assets/img/dashboard/PharmaCrop%20THC25%20Dried%20Flower.webp",
  "oral-liquid": "/assets/img/dashboard/pharmaCrop%20CBD100%20Oral%20Liquid.webp",
  pastilles: "/assets/img/dashboard/pharmaCrop%20Balance%20Pastilles.webp",
  "inhaled-liquid": "/assets/img/dashboard/pharmaCrop%20Relief%20Inhaled%20Liquid.webp",
};

const categoryMeta = {
  "dried-flower": {
    categoryName: "Dried Flower",
    dosageForm: "Dried Flower",
    presentation: "Dried flower in sealed container",
    dominantTerpenes: "Myrcene, Limonene, Caryophyllene",
    therapeuticProfile: "Analgesic, Anti-inflammatory, Anxiolytic",
  },
  "oral-liquid": {
    categoryName: "Oral Liquid",
    dosageForm: "Oral Liquid",
    presentation: "Oral liquid in amber glass bottle with dropper",
    dominantTerpenes: "Linalool, Pinene, Terpinolene",
    therapeuticProfile: "Anxiolytic, Sedative, Analgesic",
  },
  pastilles: {
    categoryName: "Pastilles",
    dosageForm: "Pastilles",
    presentation: "Pastilles in child-resistant pack",
    dominantTerpenes: "Limonene, Humulene",
    therapeuticProfile: "Mood Support, Anxiolytic",
  },
  "inhaled-liquid": {
    categoryName: "Inhaled Liquid",
    dosageForm: "Inhaled Liquid",
    presentation: "Inhaled liquid cartridge (0.5 mL)",
    dominantTerpenes: "Terpinolene, Ocimene",
    therapeuticProfile: "Rapid-onset Analgesic, Anxiolytic",
  },
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildProduct({ name, categorySlug, thc, cbd, cbg, cbn, packSize, price, strainType, speciesRatio, tgaCategory, schedule, spectrum, excipients, energyKj, sugars, carbs, sodium, fat }) {
  const meta = categoryMeta[categorySlug];
  return {
    slug: slugify(name),
    name,
    categorySlug,
    category: meta.categoryName,
    dosageForm: meta.dosageForm,
    thc,
    cbd,
    cbg: cbg || "",
    cbn: cbn || "",
    packSize,
    price,
    strainType,
    speciesRatio: speciesRatio || "",
    presentation: meta.presentation,
    dominantTerpenes: meta.dominantTerpenes,
    excipients: excipients || "",
    therapeuticProfile: meta.therapeuticProfile,
    tgaCategory: tgaCategory || "Unapproved Therapeutic Good – Category B",
    schedule: schedule || "Schedule 8 (S8)",
    spectrum: spectrum || "",
    energyKj: energyKj || "",
    sugars: sugars || "",
    carbs: carbs || "",
    sodium: sodium || "",
    fat: fat || "",
    image: categoryImages[categorySlug],
    altImage: featuredImages[categorySlug],
  };
}

export const products = [
  buildProduct({ name: "Sunridge 22", categorySlug: "dried-flower", thc: "22%", cbd: "<1%", packSize: "10 g", price: "135", strainType: "Indica" }),
  buildProduct({ name: "Meadowlands 18", categorySlug: "dried-flower", thc: "18%", cbd: "<1%", packSize: "10 g", price: "120", strainType: "Sativa" }),
  buildProduct({ name: "Highland 25", categorySlug: "dried-flower", thc: "25%", cbd: "<1%", packSize: "10 g", price: "150", strainType: "Hybrid", speciesRatio: "Indica 60% : Sativa 40%" }),
  buildProduct({ name: "Balance 10:10", categorySlug: "oral-liquid", thc: "10 mg/mL", cbd: "10 mg/mL", packSize: "30 mL bottle", price: "95", strainType: "Sativa" }),
  buildProduct({ name: "Rest Easy", categorySlug: "oral-liquid", thc: "5 mg/mL", cbd: "15 mg/mL", packSize: "30 mL bottle", price: "90", strainType: "Hybrid", speciesRatio: "Indica 50% : Sativa 50%" }),
  buildProduct({ name: "Clarity 1:20", categorySlug: "oral-liquid", thc: "1 mg/mL", cbd: "20 mg/mL", packSize: "30 mL bottle", price: "85", strainType: "Indica" }),
  buildProduct({ name: "Calm Pastilles", categorySlug: "pastilles", thc: "2.5 mg", cbd: "2.5 mg", packSize: "30 pastilles", price: "60", strainType: "Indica", energyKj: "37.5", sugars: "1.5", carbs: "2.19", sodium: "7.8", fat: "<0.01" }),
  buildProduct({ name: "Focus Pastilles", categorySlug: "pastilles", thc: "5 mg", cbd: "0 mg", packSize: "30 pastilles", price: "65", strainType: "Indica" }),
  buildProduct({ name: "Clear Flow", categorySlug: "inhaled-liquid", thc: "50 mg/mL", cbd: "0 mg/mL", packSize: "1 cartridge (0.5 mL)", price: "110", strainType: "Sativa" }),
  buildProduct({ name: "Airis", categorySlug: "inhaled-liquid", thc: "25 mg/mL", cbd: "25 mg/mL", packSize: "1 cartridge (0.5 mL)", price: "100", strainType: "Sativa" }),
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product, count = 4) {
  return products.filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, count);
}
