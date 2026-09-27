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
    otherCharacteristics: "Premium indoor cultivated flower, non-irradiated.",
    typeLabel: "Cultivar / Type",
    typeFieldLabel: "Cultivar",
    typeDesc: (name) => `${name} is a unique cultivar selected for its consistent quality and characteristic cannabinoid profile.`,
  },
  "oral-liquid": {
    categoryName: "Oral Liquid",
    dosageForm: "Oral Liquid",
    presentation: "Oral liquid in amber glass bottle with dropper",
    otherCharacteristics: "Formulated for accurate, flexible dosing.",
    typeLabel: "Formulation / Type",
    typeFieldLabel: "Formulation",
    typeDesc: (name) => `${name} is an oral liquid formulation developed for consistent, measurable dosing.`,
  },
  pastilles: {
    categoryName: "Pastilles",
    dosageForm: "Pastilles",
    presentation: "Pastilles in child-resistant pack",
    otherCharacteristics: "Discreet, convenient format for consistent dosing.",
    typeLabel: "Formulation / Type",
    typeFieldLabel: "Formulation",
    typeDesc: (name) => `${name} is a pastille formulation designed for discreet, convenient administration.`,
  },
  "inhaled-liquid": {
    categoryName: "Inhaled Liquid",
    dosageForm: "Inhaled Liquid",
    presentation: "Inhaled liquid cartridge (0.5 mL)",
    otherCharacteristics: "Formulated for rapid onset and dose control.",
    typeLabel: "Formulation / Type",
    typeFieldLabel: "Formulation",
    typeDesc: (name) => `${name} is an inhaled liquid formulation developed for rapid onset and precise dose control.`,
  },
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildProduct({ name, categorySlug, thc, cbd, packSize, quantity }) {
  const meta = categoryMeta[categorySlug];
  return {
    slug: slugify(name),
    name,
    categorySlug,
    category: meta.categoryName,
    dosageForm: meta.dosageForm,
    thc,
    cbd,
    packSize,
    quantity: quantity || `${packSize} per pack`,
    presentation: meta.presentation,
    otherCharacteristics: meta.otherCharacteristics,
    typeLabel: meta.typeLabel,
    typeFieldLabel: meta.typeFieldLabel,
    typeValue: name.split(" ")[0],
    typeDesc: meta.typeDesc(name),
    cannabinoid: `THC: ${thc} &nbsp;|&nbsp; CBD: ${cbd}`,
    image: categoryImages[categorySlug],
    altImage: featuredImages[categorySlug],
  };
}

export const products = [
  buildProduct({ name: "Sunridge 22", categorySlug: "dried-flower", thc: "22%", cbd: "<1%", packSize: "10 g" }),
  buildProduct({ name: "Meadowlands 18", categorySlug: "dried-flower", thc: "18%", cbd: "<1%", packSize: "10 g" }),
  buildProduct({ name: "Highland 25", categorySlug: "dried-flower", thc: "25%", cbd: "<1%", packSize: "10 g" }),
  buildProduct({ name: "Balance 10:10", categorySlug: "oral-liquid", thc: "10 mg/mL", cbd: "10 mg/mL", packSize: "30 mL bottle" }),
  buildProduct({ name: "Rest Easy", categorySlug: "oral-liquid", thc: "5 mg/mL", cbd: "15 mg/mL", packSize: "30 mL bottle" }),
  buildProduct({ name: "Clarity 1:20", categorySlug: "oral-liquid", thc: "1 mg/mL", cbd: "20 mg/mL", packSize: "30 mL bottle" }),
  buildProduct({ name: "Calm Pastilles", categorySlug: "pastilles", thc: "2.5 mg", cbd: "2.5 mg", packSize: "30 pastilles" }),
  buildProduct({ name: "Focus Pastilles", categorySlug: "pastilles", thc: "5 mg", cbd: "0 mg", packSize: "30 pastilles" }),
  buildProduct({ name: "Clear Flow", categorySlug: "inhaled-liquid", thc: "50 mg/mL", cbd: "0 mg/mL", packSize: "1 cartridge (0.5 mL)" }),
  buildProduct({ name: "Airis", categorySlug: "inhaled-liquid", thc: "25 mg/mL", cbd: "25 mg/mL", packSize: "1 cartridge (0.5 mL)" }),
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product, count = 4) {
  return products.filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, count);
}
