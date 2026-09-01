export const posts = [
  {
    slug: "noosa-hinterland-home-of-pharmacrop",
    title: "The Noosa Hinterland: Home of PharmaCrop",
    date: "11 Aug 2026",
    category: "Cultivation",
    tags: ["Noosa Hinterland", "Cultivation", "Australian-Grown"],
    image: "/assets/img/hero_bg.jpg",
    excerpt:
      "The Noosa Hinterland provides the home for our cultivation and manufacturing operations, bringing local production together within a single region.",
    content: [
      "PharmaCrop is built in the Noosa Hinterland in Queensland, a region chosen for the way its climate and conditions support consistent, high-quality cultivation. Rather than spreading operations across multiple sites, we've brought cultivation, processing and GMP-certified manufacturing together within a single region.",
      "That local integration matters. When cultivation and manufacturing sit close together, oversight follows the product every step of the way, from cultivar selection through to the finished item leaving our facility. It's a simpler, more traceable path than shipping raw material between disconnected sites.",
      "The Hinterland setting also shapes how we work day to day. Our team is on-site through every stage of the growing cycle, able to respond quickly to what the crop and the season are telling them rather than managing cultivation at a distance.",
      "As PharmaCrop continues to grow, the Noosa Hinterland remains the constant: the place that anchors our cultivation expertise, our manufacturing discipline, and the Australian-grown identity behind everything we produce.",
    ],
  },
  {
    slug: "from-genetics-to-gmp-certified-manufacturing",
    title: "From Genetics to GMP-Certified Manufacturing",
    date: "18 Aug 2026",
    category: "Manufacturing",
    tags: ["GMP", "Manufacturing", "Integrated Operations"],
    image: "/assets/img/video_block_bg.jpg",
    excerpt:
      "By bringing cultivation, processing and GMP-certified manufacturing together, PharmaCrop maintains oversight from cultivar selection through to finished product.",
    content: [
      "Integration is at the centre of how PharmaCrop operates. Bringing cultivation, processing and GMP-certified manufacturing together under one roof lets us maintain oversight from the earliest genetic and cultivar decisions all the way through to a finished, packed product.",
      "Our GMP-certified manufacturing facility combines structured quality systems with carefully managed hand-packing processes. Structured systems give us consistency batch to batch; the hand-packing process gives us a level of care and attention that's harder to achieve at arm's length from cultivation.",
      "This integrated model also means fewer handoffs. Every additional site, supplier or transfer point in a supply chain is another place where consistency can slip. By keeping genetics, growing, processing and manufacturing within a single integrated operation, PharmaCrop reduces that risk and keeps quality and product integrity front and centre.",
      "The result is a manufacturing process built on pharmaceutical discipline from the ground up, not bolted on at the end of the line.",
    ],
  },
  {
    slug: "global-cultivation-expertise-hinterland-honed",
    title: "Global Cultivation Expertise, Hinterland-Honed",
    date: "25 Aug 2026",
    category: "Cultivation",
    tags: ["Global Expertise", "Cultivation Philosophy", "Phenohunting"],
    image: "/assets/img/post_1.jpg",
    excerpt:
      "Drawing on cultivation expertise from California, Canada and South Africa, our team applies international insights within the unique conditions of the Noosa Hinterland.",
    content: [
      "Great cultivation doesn't happen in isolation. Our team draws on cultivation expertise built in California, Canada and South Africa, three very different growing environments, and applies those international insights within the unique conditions of the Noosa Hinterland.",
      "A central part of that work is phenohunting: the process of growing out multiple expressions of a cultivar and closely evaluating each one against the traits that matter for quality and consistency, before selecting the plants best suited to our environment.",
      "It's a deliberate, patient process. The right cultivar changes everything downstream, from how predictably a crop performs to the quality and consistency of the finished product. Extensive phenohunting and selection is how we establish that foundation before a cultivar ever reaches full-scale production.",
      "The outcome is a cultivation programme shaped by global knowledge but tuned specifically to the Noosa Hinterland, global expertise, Hinterland-honed.",
    ],
  },
  {
    slug: "tga-guidance-for-patients-and-health-professionals",
    title: "Understanding TGA Guidance for Patients and Health Professionals",
    date: "27 Aug 2026",
    category: "Compliance",
    tags: ["TGA", "Compliance", "Patients", "Health Professionals"],
    image: "/assets/img/hero_bg_4.jpg",
    excerpt:
      "The Therapeutic Goods Administration (TGA) publishes dedicated guidance for both patients and health professionals on medicinal cannabis.",
    content: [
      "Australia's Therapeutic Goods Administration (TGA) plays a central role in how medicinal cannabis products are accessed and prescribed. As an Australian-grown, GMP-certified manufacturer, PharmaCrop operates within that regulatory framework at every stage of production.",
      "The TGA publishes separate guidance depending on who you are. Patients can refer to TGA patient information to understand access pathways and what to expect. Health professionals have their own dedicated resource, TGA medicinal cannabis information for health professionals, covering prescribing considerations and regulatory requirements in more clinical detail.",
      "We point both audiences to these official TGA resources directly rather than attempting to summarise or interpret clinical guidance ourselves. Nothing on the PharmaCrop website is intended as medical advice, and any questions about prescribing, dosage or suitability should go to a qualified health professional.",
      "For PharmaCrop, staying aligned with TGA guidance isn't a compliance checkbox, it's part of the same pharmaceutical discipline that runs through our cultivation and GMP-certified manufacturing.",
    ],
  },
  {
    slug: "growing-portfolio-of-australian-grown-products",
    title: "A Growing Portfolio of Australian-Grown Products",
    date: "01 Sep 2026",
    category: "Company News",
    tags: ["Portfolio", "Australian-Grown", "Company News"],
    image: "/assets/img/feature_thumb.jpg",
    excerpt:
      "PharmaCrop continues to expand its portfolio of Australian-grown products, combining cultivation expertise with GMP-certified manufacturing and carefully managed production.",
    content: [
      "PharmaCrop continues to expand its portfolio of Australian-grown products, combining cultivation expertise with GMP-certified manufacturing and carefully managed production processes at every step.",
      "That growth is supported by hand-packed medicines and the same pharmaceutical discipline that shapes our cultivation and manufacturing operations. As the portfolio grows, our focus stays fixed on the same three things: quality, consistency and supply confidence.",
      "It's also why we describe PharmaCrop's mission the way we do, to elevate Australian-grown medicines to ensure they are trusted, accessible and profoundly transformative for those who need them most. A growing product range only matters if every product in it meets that same standard.",
      "Pharmacists, prescribers and distributors interested in the current and upcoming portfolio can find more detail on our Industry page, or get in touch directly through our Contact page.",
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(excludeSlug, count = 3) {
  return posts.filter((p) => p.slug !== excludeSlug).slice(0, count);
}

export function getRelatedPosts(post, count = 3) {
  const sameCategory = posts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );
  const rest = posts.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  );
  return [...sameCategory, ...rest].slice(0, count);
}

export function getCategories() {
  const counts = {};
  posts.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

export function getTags() {
  const set = new Set();
  posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set);
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
