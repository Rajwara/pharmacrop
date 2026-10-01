import Script from "next/script";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "../products-data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product - PharmaCrop HCP Portal" };
  }
  return { title: `${product.name} - PharmaCrop HCP Portal` };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }
  const related = getRelatedProducts(product, 4);

  const relatedHtml = related
    .map(
      (r) => `
          <a href="/all-products/${r.slug}" class="cs_pd_related_card">
            <div class="cs_pd_related_img"><img src="${r.image}" alt="${r.name}"></div>
            <div class="cs_pd_related_body">
              <h4>${r.name}</h4>
              <span>${r.category}</span>
              <span class="cs_pd_related_spec">THC ${r.thc} &nbsp;|&nbsp; CBD ${r.cbd}<br>${r.packSize}</span>
              <span class="cs_pd_related_link">View Product <i class="fa-solid fa-arrow-right"></i></span>
            </div>
          </a>`
    )
    .join("");

  const isBroadSpectrum = Boolean(product.cbg || product.cbn);
  const cannabinoidLine = [
    product.cbd ? `CBD ${product.cbd}` : "",
    product.cbg ? `CBG ${product.cbg}` : "",
    product.cbn ? `CBN ${product.cbn}` : "",
  ]
    .filter(Boolean)
    .join(" | ");

  function statTile(icon, label, value) {
    if (!value || value === "—") return "";
    return `<div class="cs_pd_stat"><span class="cs_pd_stat_icon"><i class="fa-solid ${icon}"></i></span><span><span class="label">${label}</span><span class="value">${value}</span></span></div>`;
  }
  function tableRow(icon, label, value) {
    if (!value || value === "—") return "";
    return `<div class="cs_pd_table_row"><i class="fa-solid ${icon}"></i><span class="k">${label}</span><span class="v">${value}</span></div>`;
  }

  const statsHtml = isBroadSpectrum
    ? statTile("fa-flask", "Cannabinoids", cannabinoidLine) +
      statTile("fa-atom", "Spectrum", product.spectrum) +
      statTile("fa-box", "Pack Size", product.packSize) +
      statTile("fa-tag", "RRP", product.price ? `$${product.price} (to patient)` : "")
    : statTile("fa-leaf", "THC", product.thc) +
      statTile("fa-flask", "CBD", product.cbd) +
      statTile("fa-box", "Pack Size", product.packSize) +
      statTile("fa-gear", "Dosage Form", product.dosageForm);

  const detailsTable1Html = isBroadSpectrum
    ? tableRow("fa-tag", "Product Name", product.name) +
      tableRow("fa-leaf", "Dosage Form", product.dosageForm) +
      tableRow("fa-flask", "CBD Strength", product.cbd) +
      tableRow("fa-flask", "CBG Strength", product.cbg) +
      tableRow("fa-flask", "CBN Strength", product.cbn)
    : tableRow("fa-tag", "Product Name", product.name) +
      tableRow("fa-leaf", "Dosage Form", product.dosageForm) +
      tableRow("fa-flask", "THC Strength", product.thc) +
      tableRow("fa-flask", "CBD Strength", product.cbd) +
      tableRow("fa-seedling", "Plant Species", product.strainType ? `${product.strainType}${product.speciesRatio ? ` (${product.speciesRatio})` : ""}` : "");

  const detailsTable2Html = isBroadSpectrum
    ? tableRow("fa-box-open", "Presentation", product.presentation) +
      tableRow("fa-box", "Pack Size", product.packSize) +
      tableRow("fa-atom", "Spectrum", product.spectrum) +
      tableRow("fa-vial", "Excipients", product.excipients) +
      tableRow("fa-heart-pulse", "Therapeutic Profile", product.therapeuticProfile) +
      tableRow("fa-shield-halved", "TGA Category", product.tgaCategory) +
      tableRow("fa-scale-balanced", "Schedule", product.schedule)
    : tableRow("fa-box-open", "Presentation", product.presentation) +
      tableRow("fa-box", "Pack Size", product.packSize) +
      tableRow("fa-wind", "Dominant Terpenes", product.dominantTerpenes) +
      tableRow("fa-heart-pulse", "Therapeutic Profile", product.therapeuticProfile) +
      tableRow("fa-shield-halved", "TGA Category", product.tgaCategory) +
      tableRow("fa-scale-balanced", "Schedule", product.schedule);

  function nutritionItem(icon, label, unit, value) {
    if (!value) return "";
    return `<div class="cs_pd_nutrition_item"><span class="cs_pd_nutrition_icon"><i class="fa-solid ${icon}"></i></span><span class="cs_pd_nutrition_label">${label}</span><span class="cs_pd_nutrition_unit">(${unit})</span><span class="cs_pd_nutrition_value">${value}</span></div>`;
  }
  const nutritionItemsHtml = [
    nutritionItem("fa-bolt", "Energy", "kJ", product.energyKj),
    nutritionItem("fa-cubes", "Sugars", "g", product.sugars),
    nutritionItem("fa-wheat-awn", "Carbs", "g", product.carbs),
    nutritionItem("fa-bottle-droplet", "Sodium", "mg", product.sodium),
    nutritionItem("fa-droplet", "Fat", "g", product.fat),
  ].join("");
  const nutritionHtml =
    product.categorySlug === "pastilles" && nutritionItemsHtml
      ? `<div class="cs_pd_nutrition_wrap wow fadeInUp"><div class="cs_pd_nutrition_row">${nutritionItemsHtml}</div><div class="cs_pd_nutrition_caption">Nutritional Facts (per pastille)</div></div>`
      : "";

  const html = `
    <!-- Start Preloader -->
    <div class="cs_preloader" style="background-color:#000;">
      <img src="/assets/img/pharma_Crop_logo_loader.gif" alt="Loading" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(70vw,480px);height:auto;">
    </div>
    <!-- End Preloader -->
    <!-- Start Dashboard Header -->
    <style>
      .cs_dash_body { background: #f7faf8; }
      .cs_dash_header { position: sticky; top: 0; z-index: 999; background: #fff; border-bottom: 1px solid rgba(2, 66, 66, 0.1); }
      .cs_dash_header_in { display: flex; align-items: center; justify-content: space-between; padding: 18px 0; gap: 24px; }
      .cs_dash_logo { display: flex; align-items: center; gap: 10px; color: #024242; font-size: 22px; font-weight: 800; text-decoration: none; flex: none; }
      .cs_dash_logo img { width: 30px; height: 30px; object-fit: contain; }
      .cs_dash_nav { display: flex; align-items: center; gap: 34px; list-style: none; margin: 0; padding: 0; flex: 1; justify-content: center; }
      .cs_dash_nav a { color: #333; font-size: 15px; font-weight: 600; text-decoration: none; }
      .cs_dash_nav a:hover, .cs_dash_nav a.active { color: #024242; }
      .cs_dash_header_right { display: flex; align-items: center; gap: 22px; flex: none; }
      .cs_dash_search_btn { width: 38px; height: 38px; border-radius: 50%; border: none; background: rgba(2, 66, 66, 0.06); color: #024242; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 14px; }
      .cs_dash_user { position: relative; }
      .cs_dash_user_btn { display: flex; align-items: center; gap: 10px; background: none; border: none; cursor: pointer; font-family: inherit; padding: 0; }
      .cs_dash_avatar { width: 38px; height: 38px; border-radius: 50%; background: #024242; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; flex: none; }
      .cs_dash_user_name { color: #024242; font-weight: 700; font-size: 14px; white-space: nowrap; }
      .cs_dash_user_btn i { color: #999; font-size: 11px; transition: transform 0.2s ease; }
      .cs_dash_user.active .cs_dash_user_btn i { transform: rotate(180deg); }
      .cs_dash_user_menu { position: absolute; right: 0; top: calc(100% + 14px); background: #fff; border-radius: 12px; box-shadow: 0 20px 50px rgba(2, 20, 20, 0.15); padding: 10px; min-width: 180px; opacity: 0; visibility: hidden; transform: translateY(-8px); transition: all 0.2s ease; }
      .cs_dash_user.active .cs_dash_user_menu { opacity: 1; visibility: visible; transform: translateY(0); }
      .cs_dash_user_menu a { display: block; padding: 10px 14px; border-radius: 8px; color: #024242; font-size: 14px; font-weight: 600; text-decoration: none; }
      .cs_dash_user_menu a:hover { background: rgba(120, 220, 166, 0.15); }
      @media (max-width: 991px) { .cs_dash_nav { display: none; } }
      @media (max-width: 575px) { .cs_dash_user_name { display: none; } }
    </style>
    <header class="cs_dash_header">
      <div class="container">
        <div class="cs_dash_header_in">
          <a href="/dashboard" class="cs_dash_logo">
            <img src="/assets/img/favicon.png" alt="PharmaCrop" onerror="this.style.display='none'">
            PharmaCrop
          </a>
          <ul class="cs_dash_nav">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/all-products" class="active">All Products</a></li>
            <li><a href="/hcp-resources">HCP Resources</a></li>
          </ul>
          <div class="cs_dash_header_right">
            <button type="button" class="cs_dash_search_btn" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
            <div class="cs_dash_user" data-dash-user>
              <button type="button" class="cs_dash_user_btn" data-dash-user-toggle>
                <span class="cs_dash_avatar">DR</span>
                <span class="cs_dash_user_name">Dr. Sarah Mitchell</span>
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="cs_dash_user_menu">
                <a href="/profile">My Profile / Account</a>
                <a href="/">Sign Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Dashboard Header -->
    <!-- Start Product Detail -->
    <style>
      .cs_pd_breadcrumb { padding: 18px 0; background: #f7faf8; font-size: 13px; color: #999; }
      .cs_pd_breadcrumb a { color: #999; text-decoration: none; }
      .cs_pd_breadcrumb a:hover { color: #024242; }
      .cs_pd_breadcrumb span.current { color: #024242; font-weight: 700; }
      .cs_pd_hero { padding: 40px 0 60px; background: #f7faf8; }
      .cs_pd_hero_grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start; }
      .cs_pd_gallery_main { border-radius: 16px; overflow: hidden; height: 380px; }
      .cs_pd_gallery_main img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_pd_gallery_thumbs { display: flex; gap: 12px; margin-top: 14px; }
      .cs_pd_gallery_thumbs button { padding: 0; border: 2px solid transparent; border-radius: 10px; overflow: hidden; width: 90px; height: 70px; cursor: pointer; background: none; }
      .cs_pd_gallery_thumbs button.active { border-color: #024242; }
      .cs_pd_gallery_thumbs img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_pd_origin_badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(120,220,166,0.15); color: #024242; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; padding: 6px 12px; border-radius: 20px; margin-bottom: 14px; }
      .cs_pd_origin_badge i.fa-circle-info { opacity: 0.55; font-size: 11px; }
      .cs_pd_hero h1 { color: #024242; font-size: 40px; font-weight: 800; margin: 0 0 6px; }
      .cs_pd_category { display: block; color: #024242; font-weight: 700; font-size: 15px; margin-bottom: 10px; }
      .cs_pd_category .strain { color: #78dca6; }
      .cs_pd_rrp { display: block; color: #024242; font-size: 15px; font-weight: 600; margin-bottom: 18px; }
      .cs_pd_rrp strong { font-size: 23px; font-weight: 800; }
      .cs_pd_desc { color: #666; font-size: 15px; line-height: 1.7; margin: 0 0 26px; }
      .cs_pd_stats { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 30px; }
      .cs_pd_stat { display: flex; align-items: center; gap: 10px; flex: 1 1 140px; min-width: 140px; }
      .cs_pd_stat_icon { width: 34px; height: 34px; border-radius: 8px; background: rgba(120,220,166,0.15); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 14px; flex: none; }
      .cs_pd_stat span.label { display: block; color: #999; font-size: 11px; }
      .cs_pd_stat span.value { display: block; color: #024242; font-weight: 800; font-size: 15px; }
      .cs_pd_ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 16px; }
      .cs_pd_btn_primary { display: inline-flex; align-items: center; gap: 8px; background: #024242; color: #fff; font-weight: 700; font-size: 14px; padding: 14px 22px; border-radius: 10px; text-decoration: none; }
      .cs_pd_btn_primary:hover { background: #78dca6; color: #024242; }
      .cs_pd_btn_outline { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #024242; font-weight: 700; font-size: 14px; padding: 14px 22px; border-radius: 10px; text-decoration: none; border: 1px solid rgba(2,66,66,0.2); }
      .cs_pd_btn_outline:hover { border-color: #024242; }
      .cs_pd_note { color: #999; font-size: 12px; margin: 0; }
      @media (max-width: 991px) {
        .cs_pd_hero_grid { grid-template-columns: 1fr; }
      }
    </style>
    <div class="cs_pd_breadcrumb">
      <div class="container">
        <a href="/all-products">Products</a> &gt; <a href="/all-products?category=${product.categorySlug}">${product.category}</a> &gt; <span class="current">${product.name}</span>
      </div>
    </div>
    <section class="cs_pd_hero">
      <div class="container">
        <div class="cs_pd_hero_grid">
          <div class="wow fadeInUp">
            <div class="cs_pd_gallery_main"><img src="${product.image}" alt="${product.name}" data-pd-main-img></div>
            <div class="cs_pd_gallery_thumbs">
              <button type="button" class="active" data-pd-thumb="${product.image}"><img src="${product.image}" alt="${product.name} thumbnail 1"></button>
              <button type="button" data-pd-thumb="${product.altImage}"><img src="${product.altImage}" alt="${product.name} thumbnail 2"></button>
              <button type="button" data-pd-thumb="${product.image}"><img src="${product.image}" alt="${product.name} thumbnail 3"></button>
            </div>
          </div>
          <div class="wow fadeInUp" data-wow-delay="0.1s">
            <span class="cs_pd_origin_badge"><i class="fa-solid fa-leaf"></i> Australian Grown <i class="fa-solid fa-circle-info"></i></span>
            <h1>${product.name}</h1>
            <span class="cs_pd_category">${product.category}${product.strainType ? ` | <span class="strain">${product.strainType}</span>` : ''}</span>
            ${product.price ? `<span class="cs_pd_rrp">RRP <strong>$${product.price}</strong>${product.packSize ? ` (${product.packSize} pack)` : ''}</span>` : ''}
            <p class="cs_pd_desc">A premium ${product.category.toLowerCase()} product, cultivated and processed to PharmaCrop&rsquo;s high quality standards. ${product.name} is available to healthcare professionals with detailed product information and supporting documentation.</p>
            <div class="cs_pd_stats">${statsHtml}
            </div>
            <div class="cs_pd_ctas">
              <a href="/contact" class="cs_pd_btn_primary"><i class="fa-solid fa-download"></i> Download Product Information <i class="fa-solid fa-arrow-right"></i></a>
              <a href="#documents" class="cs_pd_btn_outline"><i class="fa-solid fa-file-lines"></i> Download CMI</a>
            </div>
            <p class="cs_pd_note">For healthcare professionals only.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Product Detail Hero -->
    <!-- Start Product Overview -->
    <style>
      .cs_pd_section_head { margin-bottom: 24px; }
      .cs_pd_section_head h2 { color: #024242; font-size: 26px; font-weight: 800; margin: 0 0 8px; }
      .cs_pd_section_head p { color: #666; font-size: 14px; margin: 0; }
      .cs_pd_overview_row { display: flex; align-items: center; gap: 40px; }
      .cs_pd_overview_text { flex: 1; }
      .cs_pd_overview_text p { color: #666; font-size: 15px; line-height: 1.7; margin: 0; }
      .cs_pd_overview_img { flex: 0 0 42%; border-radius: 14px; overflow: hidden; height: 220px; }
      .cs_pd_overview_img img { width: 100%; height: 100%; object-fit: cover; display: block; }
      @media (max-width: 767px) {
        .cs_pd_overview_row { flex-direction: column; }
        .cs_pd_overview_img { width: 100%; }
      }
      .cs_pd_nutrition_wrap { background: #eef8f1; border-radius: 20px; padding: 36px 24px 26px; margin-top: 34px; }
      .cs_pd_nutrition_row { display: flex; align-items: stretch; justify-content: center; flex-wrap: wrap; }
      .cs_pd_nutrition_item { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 28px; position: relative; }
      .cs_pd_nutrition_item + .cs_pd_nutrition_item::before { content: ''; position: absolute; left: 0; top: 10%; bottom: 10%; width: 1px; background: rgba(2,66,66,0.15); }
      .cs_pd_nutrition_icon { width: 64px; height: 64px; border-radius: 50%; background: rgba(120,220,166,0.2); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 14px; }
      .cs_pd_nutrition_label { color: #024242; font-weight: 600; font-size: 15px; }
      .cs_pd_nutrition_unit { color: #8a9a95; font-size: 12px; margin-bottom: 8px; }
      .cs_pd_nutrition_value { color: #024242; font-weight: 800; font-size: 24px; }
      .cs_pd_nutrition_caption { text-align: center; color: #5c6f69; letter-spacing: 2px; font-size: 11.5px; font-weight: 700; margin-top: 26px; text-transform: uppercase; }
      @media (max-width: 767px) {
        .cs_pd_nutrition_item { padding: 14px 20px; flex: 0 0 50%; }
        .cs_pd_nutrition_item + .cs_pd_nutrition_item::before { display: none; }
      }
    </style>
    <section style="padding: 60px 0; background: #fff;">
      <div class="container">
        <div class="cs_pd_section_head wow fadeInUp">
          <h2>Product Overview</h2>
        </div>
        <div class="cs_pd_overview_row wow fadeInUp">
          <div class="cs_pd_overview_text">
            <p>${product.name} is a ${product.category.toLowerCase()} product, cultivated and processed to meet PharmaCrop&rsquo;s quality standards. This product is provided for healthcare professionals with detailed product information, including product specifications and supporting documentation.</p>
          </div>
          <div class="cs_pd_overview_img">
            <img src="${product.altImage}" alt="${product.name} overview">
          </div>
        </div>
        ${nutritionHtml}
      </div>
    </section>
    <!-- End Product Overview -->
    <!-- Start Product Details -->
    <style>
      .cs_pd_details_grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .cs_pd_table { background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 12px; overflow: hidden; }
      .cs_pd_table_row { display: flex; align-items: center; gap: 14px; padding: 16px 20px; border-bottom: 1px solid rgba(2,66,66,0.08); }
      .cs_pd_table_row:last-child { border-bottom: none; }
      .cs_pd_table_row i { color: #024242; width: 18px; text-align: center; flex: none; }
      .cs_pd_table_row span.k { flex: 1; color: #024242; font-weight: 700; font-size: 13.5px; }
      .cs_pd_table_row span.v { color: #666; font-size: 13.5px; }
      @media (max-width: 767px) {
        .cs_pd_details_grid { grid-template-columns: 1fr; }
      }
    </style>
    <section style="padding: 60px 0; background: #f7faf8;">
      <div class="container">
        <div class="cs_pd_section_head wow fadeInUp">
          <h2>Product Details</h2>
          <p>Key product information and specifications for ${product.name}.</p>
        </div>
        <div class="cs_pd_details_grid">
          <div class="cs_pd_table wow fadeInUp">${detailsTable1Html}
          </div>
          <div class="cs_pd_table wow fadeInUp" data-wow-delay="0.1s">${detailsTable2Html}
          </div>
        </div>
      </div>
    </section>
    <!-- End Product Details -->
    <!-- Start Presentation and Packaging -->
    <style>
      .cs_pd_pack_row { display: flex; align-items: center; gap: 28px; }
      .cs_pd_pack_head { flex: 0 0 240px; }
      .cs_pd_pack_head h2 { color: #024242; font-size: 24px; font-weight: 800; margin: 0 0 8px; }
      .cs_pd_pack_head p { color: #666; font-size: 14px; margin: 0; }
      .cs_pd_pack_img { flex: 0 0 32%; border-radius: 14px; overflow: hidden; align-self: stretch; }
      .cs_pd_pack_img img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 200px; }
      .cs_pd_pack_table { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 16px; }
      .cs_pd_pack_card { display: flex; align-items: center; gap: 18px; background: #fff; border: 1px solid rgba(2,66,66,0.08); border-radius: 16px; padding: 18px 22px; box-shadow: 0 4px 14px rgba(2,66,66,0.04); }
      .cs_pd_pack_card_icon { width: 50px; height: 50px; border-radius: 14px; background: rgba(120,220,166,0.15); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 19px; flex: none; }
      .cs_pd_pack_card_body { flex: 1; min-width: 0; }
      .cs_pd_pack_card_body h4 { margin: 0 0 3px; color: #024242; font-size: 16px; font-weight: 800; }
      .cs_pd_pack_card_body p { margin: 0; color: #8a9a95; font-size: 13px; }
      .cs_pd_pack_card_value { background: #eef1ee; color: #024242; font-weight: 700; font-size: 14px; padding: 10px 20px; border-radius: 10px; white-space: nowrap; flex: none; }
      @media (max-width: 991px) {
        .cs_pd_pack_row { flex-wrap: wrap; }
        .cs_pd_pack_head { flex: 0 0 100%; }
      }
      @media (max-width: 767px) {
        .cs_pd_pack_row { flex-direction: column; align-items: stretch; }
        .cs_pd_pack_card { flex-wrap: wrap; }
      }
    </style>
    <section style="padding: 60px 0; background: #fff;">
      <div class="container">
        <div class="cs_pd_pack_row wow fadeInUp">
          <div class="cs_pd_pack_head"><h2>Presentation &amp; Packaging</h2><p>Product presentation and packaging details for ${product.name}.</p></div>
          <div class="cs_pd_pack_img"><img src="${product.image}" alt="${product.name} packaging"></div>
          <div class="cs_pd_pack_table">
            <div class="cs_pd_pack_card"><span class="cs_pd_pack_card_icon"><i class="fa-solid fa-box"></i></span><div class="cs_pd_pack_card_body"><h4>Pack Size</h4><p>Product quantity per unit.</p></div><span class="cs_pd_pack_card_value">${product.packSize}</span></div>
            <div class="cs_pd_pack_card"><span class="cs_pd_pack_card_icon"><i class="fa-solid fa-box-open"></i></span><div class="cs_pd_pack_card_body"><h4>Presentation</h4><p>How the product is supplied.</p></div><span class="cs_pd_pack_card_value">${product.presentation}</span></div>
            <div class="cs_pd_pack_card"><span class="cs_pd_pack_card_icon"><i class="fa-solid fa-leaf"></i></span><div class="cs_pd_pack_card_body"><h4>Dosage Form</h4><p>Physical form of the product.</p></div><span class="cs_pd_pack_card_value">${product.dosageForm}</span></div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Presentation and Packaging -->
    <!-- Start Professional Information -->
    <style>
      .cs_pd_prof_row { display: flex; gap: 40px; align-items: flex-start; }
      .cs_pd_prof_row .cs_pd_section_head { flex: 0 0 320px; margin-bottom: 0; }
      .cs_pd_prof_row p.cs_pd_prof_text { flex: 1; color: #666; font-size: 15px; line-height: 1.7; margin: 0; }
      @media (max-width: 767px) {
        .cs_pd_prof_row { flex-direction: column; gap: 16px; }
      }
    </style>
    <section style="padding: 60px 0 30px; background: #fff;">
      <div class="container">
        <div class="cs_pd_prof_row wow fadeInUp">
          <div class="cs_pd_section_head">
            <h2>Professional Information</h2>
          </div>
          <p class="cs_pd_prof_text">Comprehensive professional information, including product specifications, analytical data and supporting documentation, is available for healthcare professionals. Please refer to the relevant documents below.</p>
        </div>
      </div>
    </section>
    <!-- End Professional Information -->
    <!-- Start Documents & Downloads -->
    <style>
      .cs_pd_doc_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; align-items: stretch; }
      .cs_pd_doc_card { display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(2,66,66,0.08); border-radius: 16px; padding: 26px 24px; box-shadow: 0 4px 14px rgba(2,66,66,0.04); }
      .cs_pd_doc_icon { width: 52px; height: 52px; border-radius: 14px; background: rgba(120,220,166,0.15); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 18px; flex: none; }
      .cs_pd_doc_card h4 { color: #024242; font-size: 17px; font-weight: 800; margin: 0 0 10px; line-height: 1.3; }
      .cs_pd_doc_card p.cs_pd_doc_desc { color: #7c8f89; font-size: 13.5px; line-height: 1.5; margin: 0; flex: 1; }
      .cs_pd_doc_actions { display: flex; gap: 18px; margin-top: 20px; padding-top: 18px; border-top: 1px solid rgba(2,66,66,0.08); }
      .cs_pd_doc_actions a { color: #024242; font-weight: 700; font-size: 13px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
      .cs_pd_doc_actions a:hover { color: #78dca6; }
      .cs_pd_doc_cta_wrap { margin-top: 20px; padding-top: 18px; border-top: 1px solid rgba(2,66,66,0.08); }
      .cs_pd_doc_cta_btn { width: 100%; display: inline-flex; align-items: center; justify-content: center; text-align: center; gap: 8px; line-height: 1.3; background: #024242; color: #fff !important; font-weight: 700; font-size: 13px; padding: 13px 14px; border-radius: 10px; text-decoration: none; }
      .cs_pd_doc_cta_btn:hover { background: #78dca6; color: #024242 !important; }
      @media (max-width: 991px) {
        .cs_pd_doc_grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_pd_doc_grid { grid-template-columns: 1fr; }
      }
    </style>
    <section id="documents" style="padding: 30px 0 60px; background: #fff; scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_pd_section_head wow fadeInUp">
          <h2>Documents &amp; Downloads</h2>
          <p>Access product information and supporting documentation.</p>
        </div>
        <div class="cs_pd_doc_grid">
          <div class="cs_pd_doc_card wow fadeInUp">
            <div class="cs_pd_doc_icon"><i class="fa-solid fa-file-lines"></i></div>
            <h4>Product Information</h4>
            <p class="cs_pd_doc_desc">Key product details, formulation information and intended use.</p>
            <div class="cs_pd_doc_actions">
              <a href="${product.image}" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View</a>
              <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
            </div>
          </div>
          <div class="cs_pd_doc_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_pd_doc_icon"><i class="fa-solid fa-file-lines"></i></div>
            <h4>Consumer Medicine Information</h4>
            <p class="cs_pd_doc_desc">Consumer medicine information for patients.</p>
            <div class="cs_pd_doc_actions">
              <a href="${product.altImage}" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View</a>
              <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
            </div>
          </div>
          <div class="cs_pd_doc_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_pd_doc_icon"><i class="fa-solid fa-hand-holding-heart"></i></div>
            <h4>Patient Support</h4>
            <p class="cs_pd_doc_desc">A patient-friendly booklet with dosing guidance and support information.</p>
            <div class="cs_pd_doc_actions">
              <a href="https://pharmacropglobal.sharepoint.com/:b:/r/sites/PharmaCropWebsiteRevampPortal2.0/Content/Portal/Doctor/Files%20to%20link/PC%20Patient%20A5%20booklet.pdf?d=wa4a1e692b93c419db6c7185b5bbef23c&csf=1&web=1&e=uZbhLY" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View</a>
              <a href="https://pharmacropglobal.sharepoint.com/:b:/r/sites/PharmaCropWebsiteRevampPortal2.0/Content/Portal/Doctor/Files%20to%20link/PC%20Patient%20A5%20booklet.pdf?d=wa4a1e692b93c419db6c7185b5bbef23c&csf=1&web=1&e=uZbhLY" target="_blank" rel="noopener"><i class="fa-solid fa-download"></i> Download</a>
            </div>
          </div>
          <div class="cs_pd_doc_card wow fadeInUp" data-wow-delay="0.3s">
            <div class="cs_pd_doc_icon"><i class="fa-solid fa-file-circle-check"></i></div>
            <h4>Request the Latest Certificate of Analysis</h4>
            <p class="cs_pd_doc_desc">Get the most recent Certificate of Analysis (CoA) for this product from our team.</p>
            <div class="cs_pd_doc_cta_wrap"><a href="https://pharmacropglobal.sharepoint.com/:b:/r/sites/PharmaCropWebsiteRevampPortal2.0/Content/Portal/Doctor/Files%20to%20link/PC%20Patient%20A5%20booklet.pdf?d=wa4a1e692b93c419db6c7185b5bbef23c&csf=1&web=1&e=uZbhLY" target="_blank" rel="noopener" class="cs_pd_doc_cta_btn"><i class="fa-solid fa-envelope"></i> Request Certificate of Analysis</a></div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Documents & Downloads -->
    ${
      related.length
        ? `
    <!-- Start Related Products -->
    <style>
      .cs_pd_related_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
      .cs_pd_related_card { background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 12px; overflow: hidden; text-decoration: none; display: block; }
      .cs_pd_related_img { height: 130px; overflow: hidden; }
      .cs_pd_related_img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
      .cs_pd_related_card:hover .cs_pd_related_img img { transform: scale(1.06); }
      .cs_pd_related_body { padding: 16px; }
      .cs_pd_related_body h4 { color: #024242; font-size: 14px; font-weight: 800; margin: 0 0 3px; }
      .cs_pd_related_body span { color: #78dca6; font-weight: 700; font-size: 11.5px; display: block; }
      .cs_pd_related_spec { color: #999 !important; font-weight: 400 !important; font-size: 11.5px !important; margin: 6px 0 10px; line-height: 1.5; }
      .cs_pd_related_link { color: #024242 !important; font-weight: 700 !important; font-size: 12px !important; }
      @media (max-width: 991px) {
        .cs_pd_related_grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_pd_related_grid { grid-template-columns: 1fr; }
      }
    </style>
    <section style="padding: 0 0 70px; background: #fff;">
      <div class="container">
        <div class="cs_dash_section_head wow fadeInUp" style="display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:24px; gap:20px; flex-wrap:wrap;">
          <div class="cs_pd_section_head" style="margin-bottom:0;">
            <h2>Related Products</h2>
            <p>Explore other ${product.category.toLowerCase()} products in our portfolio.</p>
          </div>
          <a href="/all-products?category=${product.categorySlug}" style="color:#024242; font-weight:700; font-size:14px; text-decoration:none;">View All ${product.category} Products &rarr;</a>
        </div>
        <div class="cs_pd_related_grid">${relatedHtml}
        </div>
      </div>
    </section>
    <!-- End Related Products -->`
        : ""
    }
    <!-- Start CTA -->
    <style>
      .cs_pd_cta_section { padding: 70px 0; background: #024242 url('/assets/img/dashboard/working%20together.webp') center center / cover no-repeat; }
      .cs_pd_cta_row { display: flex; align-items: center; justify-content: space-between; gap: 30px; flex-wrap: wrap; }
      .cs_pd_cta_eyebrow { display: block; color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
      .cs_pd_cta_row h2 { color: #fff; font-size: 32px; font-weight: 800; margin: 0 0 10px; max-width: 560px; }
      .cs_pd_cta_row p { color: rgba(255,255,255,0.75); font-size: 15px; margin: 0; max-width: 480px; }
      .cs_pd_cta_btn { display: inline-flex; align-items: center; gap: 10px; background: #fff; color: #024242; font-weight: 700; font-size: 14px; padding: 16px 28px; border-radius: 30px; text-decoration: none; white-space: nowrap; }
      .cs_pd_cta_btn:hover { background: #78dca6; }
    </style>
    <section class="cs_pd_cta_section">
      <div class="container">
        <div class="cs_pd_cta_row wow fadeInUp">
          <div>
            <span class="cs_pd_cta_eyebrow">Working Together</span>
            <h2>Better access. Better outcomes.</h2>
            <p>Supporting healthcare professionals with trusted medicinal cannabis products and resources.</p>
          </div>
          <a href="/about-us" class="cs_pd_cta_btn">Explore our approach <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
    <!-- End CTA -->
    <!-- Start Dashboard Footer -->
    <style>
      .cs_dash_footer { padding: 26px 0; background: #fff; border-top: 1px solid rgba(2,66,66,0.1); }
      .cs_dash_footer_row { display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
      .cs_dash_footer_brand { color: #024242; font-weight: 800; font-size: 16px; }
      .cs_dash_footer_nav { display: flex; gap: 24px; list-style: none; margin: 0; padding: 0; flex-wrap: wrap; }
      .cs_dash_footer_nav a { color: #666; font-size: 13px; font-weight: 600; text-decoration: none; }
      .cs_dash_footer_nav a:hover { color: #024242; }
      .cs_dash_footer_links { display: flex; gap: 20px; list-style: none; margin: 0; padding: 0; }
      .cs_dash_footer_links a { color: #999; font-size: 13px; text-decoration: none; }
      .cs_dash_footer_links a:hover { color: #024242; }
    </style>
    <footer class="cs_dash_footer">
      <div class="container">
        <div class="cs_dash_footer_row">
          <span class="cs_dash_footer_brand">PharmaCrop</span>
          <ul class="cs_dash_footer_nav">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/all-products">All Products</a></li>
            <li><a href="/hcp-resources">HCP Resources</a></li>
          </ul>
          <ul class="cs_dash_footer_links">
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy</a></li>
            <li><a href="/terms-and-conditions">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <!-- End Dashboard Footer -->
  `;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script id="cs_product_detail_script" strategy="afterInteractive">
        {`
          (function () {
            var userToggle = document.querySelector('[data-dash-user-toggle]');
            var userWrap = document.querySelector('[data-dash-user]');
            if (userToggle && userWrap) {
              userToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                userWrap.classList.toggle('active');
              });
              document.addEventListener('click', function () {
                userWrap.classList.remove('active');
              });
            }
            var mainImg = document.querySelector('[data-pd-main-img]');
            var thumbs = Array.prototype.slice.call(document.querySelectorAll('[data-pd-thumb]'));
            thumbs.forEach(function (btn) {
              btn.addEventListener('click', function () {
                thumbs.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                if (mainImg) mainImg.src = btn.getAttribute('data-pd-thumb');
              });
            });
          })();
        `}
      </Script>
    </>
  );
}
