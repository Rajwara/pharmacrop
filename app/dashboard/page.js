import Script from "next/script";

export const metadata = {
  title: "Dashboard - PharmaCrop HCP Portal",
};

export default function Page() {
  return (
    <>
    <div
      dangerouslySetInnerHTML={{
        __html: `
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
      .cs_dash_nav a:hover { color: #024242; }
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
      @media (max-width: 991px) {
        .cs_dash_nav { display: none; }
      }
      @media (max-width: 575px) {
        .cs_dash_user_name { display: none; }
      }
    </style>
    <header class="cs_dash_header">
      <div class="container">
        <div class="cs_dash_header_in">
          <a href="/dashboard" class="cs_dash_logo">
            <img src="/assets/img/favicon.png" alt="PharmaCrop" onerror="this.style.display='none'">
            PharmaCrop
          </a>
          <ul class="cs_dash_nav">
            <li><a href="/products">Products</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#clinical-resource">Clinical Information</a></li>
            <li><a href="/faq">Quality &amp; Compliance</a></li>
            <li><a href="/about-us">About</a></li>
          </ul>
          <div class="cs_dash_header_right">
            <button type="button" class="cs_dash_search_btn" aria-label="Search" data-dash-search-toggle><i class="fa-solid fa-magnifying-glass"></i></button>
            <div class="cs_dash_user" data-dash-user>
              <button type="button" class="cs_dash_user_btn" data-dash-user-toggle>
                <span class="cs_dash_avatar">DR</span>
                <span class="cs_dash_user_name">Dr. Sarah Mitchell</span>
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="cs_dash_user_menu">
                <a href="#resources">HCP Resources</a>
                <a href="/faq">Quality &amp; Compliance</a>
                <a href="/">Sign Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Dashboard Header -->
    <!-- Start Dashboard Hero -->
    <style>
      .cs_dash_hero { position: relative; overflow: hidden; }
      .cs_dash_hero_bg { position: absolute; inset: 0; z-index: 0; }
      .cs_dash_hero_bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_dash_hero_bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, #f7faf8 0%, #f7faf8 34%, rgba(247,250,248,0.92) 44%, rgba(247,250,248,0.55) 56%, rgba(247,250,248,0.05) 68%); }
      .cs_dash_hero_inner { position: relative; z-index: 1; min-height: 420px; display: flex; align-items: center; padding: 70px 0; }
      .cs_dash_hero_content { max-width: 540px; }
      .cs_dash_hero_eyebrow { display: block; color: #78dca6; background: rgba(120,220,166,0.15); border-radius: 20px; padding: 6px 16px; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 20px; width: fit-content; }
      .cs_dash_hero h1 { color: #024242; font-size: 40px; font-weight: 800; line-height: 1.25; margin: 0 0 16px; }
      .cs_dash_hero p.cs_dash_hero_desc { color: #666; font-size: 16px; line-height: 1.7; margin: 0 0 30px; max-width: 520px; }
      .cs_dash_search { display: flex; align-items: center; gap: 10px; background: #fff; border: 1px solid rgba(2,66,66,0.15); border-radius: 40px; padding: 8px 8px 8px 26px; box-shadow: 0 10px 30px rgba(2,66,66,0.06); max-width: 560px; }
      .cs_dash_search i { color: #999; }
      .cs_dash_search input { flex: 1; border: none; outline: none; font-size: 14px; font-family: inherit; background: transparent; min-width: 0; }
      .cs_dash_search button { width: 42px; height: 42px; border-radius: 50%; border: none; background: #024242; color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; flex: none; }
      .cs_dash_search button:hover { background: #78dca6; color: #024242; }
      .cs_dash_popular { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
      .cs_dash_popular span.cs_dash_popular_label { color: #666; font-size: 13px; font-weight: 600; }
      .cs_dash_chip { display: inline-flex; align-items: center; background: #fff; border: 1px solid rgba(2,66,66,0.15); border-radius: 20px; padding: 7px 16px; color: #024242; font-size: 13px; font-weight: 600; text-decoration: none; }
      .cs_dash_chip:hover { background: #024242; color: #fff; border-color: #024242; }
      .cs_dash_hero_card { position: absolute; right: 0; bottom: 0; width: 340px; background: rgba(2,42,42,0.82); backdrop-filter: blur(6px); border-radius: 16px; padding: 24px; display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; }
      .cs_dash_hero_card_icon { width: 40px; height: 40px; border-radius: 50%; background: rgba(120,220,166,0.2); color: #78dca6; display: flex; align-items: center; justify-content: center; font-size: 16px; flex: none; margin-bottom: 10px; }
      .cs_dash_hero_card h4 { color: #fff; font-size: 17px; font-weight: 800; margin: 0 0 6px; }
      .cs_dash_hero_card p { color: rgba(255,255,255,0.75); font-size: 13px; line-height: 1.6; margin: 0; }
      .cs_dash_hero_card_link { width: 42px; height: 42px; border-radius: 50%; background: #78dca6; color: #024242; display: flex; align-items: center; justify-content: center; font-size: 15px; flex: none; text-decoration: none; }
      @media (max-width: 991px) {
        .cs_dash_hero_bg::after { background: linear-gradient(180deg, #f7faf8 0%, #f7faf8 46%, rgba(247,250,248,0.85) 60%, rgba(247,250,248,0.55) 100%); }
        .cs_dash_hero_inner { flex-direction: column; align-items: flex-start; min-height: 0; padding: 130px 0 260px; }
        .cs_dash_hero_content { max-width: 100%; }
        .cs_dash_hero h1 { font-size: 32px; }
        .cs_dash_hero_card { left: 0; right: 0; width: auto; bottom: 40px; }
      }
      @media (max-width: 575px) {
        .cs_dash_hero_card { flex-direction: column; align-items: flex-start; }
        .cs_dash_hero_inner { padding-bottom: 320px; }
      }
    </style>
    <section class="cs_dash_hero">
      <div class="cs_dash_hero_bg">
        <img src="/assets/img/dashboard/good%20to%20see%20you.webp" alt="PharmaCrop cultivation team">
      </div>
      <div class="container">
        <div class="cs_dash_hero_inner">
          <div class="cs_dash_hero_content wow fadeInUp">
            <span class="cs_dash_hero_eyebrow">Welcome Back</span>
            <h1>Good to see you,<br>Dr. Sarah Mitchell</h1>
            <p class="cs_dash_hero_desc">Your trusted source for Australian-grown, pharmaceutical-grade medicinal cannabis information, products and clinical resources.</p>
            <form class="cs_dash_search" data-dash-search-form>
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search products, cultivars, resources and documents...">
              <button type="submit" aria-label="Search"><i class="fa-solid fa-arrow-right"></i></button>
            </form>
            <div class="cs_dash_popular">
              <span class="cs_dash_popular_label">Popular searches:</span>
              <a href="/products#dried-flower" class="cs_dash_chip">Dried flower</a>
              <a href="/faq" class="cs_dash_chip">Dosing guide</a>
              <a href="/faq" class="cs_dash_chip">TGA information</a>
              <a href="/products" class="cs_dash_chip">Product catalogue</a>
            </div>
          </div>
          <div class="cs_dash_hero_card wow fadeInRight">
            <div>
              <div class="cs_dash_hero_card_icon"><i class="fa-solid fa-leaf"></i></div>
              <h4>Australian-grown.<br>Complete control.</h4>
              <p>From cultivars to patient outcomes. Built for better care.</p>
            </div>
            <a href="/products" class="cs_dash_hero_card_link" aria-label="View products"><i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Dashboard Hero -->
    <!-- Start Product Category Section -->
    <style>
      .cs_dash_section_head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 36px; gap: 20px; flex-wrap: wrap; }
      .cs_dash_section_eyebrow { display: block; color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
      .cs_dash_section_head h2 { color: #024242; font-size: 30px; font-weight: 800; margin: 0; }
      .cs_dash_section_link { color: #024242; font-weight: 700; font-size: 14px; text-decoration: none; white-space: nowrap; }
      .cs_dash_section_link:hover { color: #78dca6; }
      .cs_dash_cat_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
      .cs_dash_cat_card { position: relative; border-radius: 16px; overflow: hidden; min-height: 260px; display: flex; align-items: flex-end; text-decoration: none; }
      .cs_dash_cat_card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
      .cs_dash_cat_card:hover img { transform: scale(1.06); }
      .cs_dash_cat_card::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2,34,34,0.1) 30%, rgba(2,20,20,0.85) 100%); }
      .cs_dash_cat_body { position: relative; z-index: 1; padding: 22px; width: 100%; }
      .cs_dash_cat_body_top { display: flex; align-items: center; justify-content: space-between; }
      .cs_dash_cat_body h3 { color: #fff; font-size: 18px; font-weight: 800; margin: 10px 0 8px; }
      .cs_dash_cat_body p { color: rgba(255,255,255,0.75); font-size: 13px; line-height: 1.6; margin: 0; }
      .cs_dash_cat_arrow { width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.35); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 13px; flex: none; }
      @media (max-width: 991px) {
        .cs_dash_cat_grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_dash_cat_grid { grid-template-columns: 1fr; }
      }
    </style>
    <section style="padding: 70px 0 20px; background: #fff;">
      <div class="container">
        <div class="cs_dash_section_head wow fadeInUp">
          <div>
            <span class="cs_dash_section_eyebrow">Our Product Range</span>
            <h2>Explore by product category</h2>
          </div>
          <a href="/products" class="cs_dash_section_link">View all products &rarr;</a>
        </div>
        <div class="cs_dash_cat_grid">
          <a href="/products#dried-flower" class="cs_dash_cat_card wow fadeInUp">
            <img src="/assets/img/dashboard/Dried%20Flower%20Category.webp" alt="Dried Flower">
            <div class="cs_dash_cat_body">
              <div class="cs_dash_cat_body_top"><span class="cs_dash_cat_arrow"><i class="fa-solid fa-arrow-right"></i></span></div>
              <h3>Dried Flower</h3>
              <p>Consistent quality, Australian-grown flower for a range of clinical needs.</p>
            </div>
          </a>
          <a href="/products#oral-liquid" class="cs_dash_cat_card wow fadeInUp" data-wow-delay="0.1s">
            <img src="/assets/img/dashboard/Oral%20Liquid%20Category.webp" alt="Oral Liquid">
            <div class="cs_dash_cat_body">
              <div class="cs_dash_cat_body_top"><span class="cs_dash_cat_arrow"><i class="fa-solid fa-arrow-right"></i></span></div>
              <h3>Oral Liquid</h3>
              <p>Precisely formulated oral liquids for flexible dosing options.</p>
            </div>
          </a>
          <a href="/products#pastilles" class="cs_dash_cat_card wow fadeInUp" data-wow-delay="0.2s">
            <img src="/assets/img/dashboard/Pastilles%20Category.webp" alt="Pastilles">
            <div class="cs_dash_cat_body">
              <div class="cs_dash_cat_body_top"><span class="cs_dash_cat_arrow"><i class="fa-solid fa-arrow-right"></i></span></div>
              <h3>Pastilles</h3>
              <p>Discreet, convenient pastilles for patient preference and ease of use.</p>
            </div>
          </a>
          <a href="/products#inhaled-liquid" class="cs_dash_cat_card wow fadeInUp" data-wow-delay="0.3s">
            <img src="/assets/img/dashboard/Inhaled%20liquid%20Category.webp" alt="Inhaled Liquid">
            <div class="cs_dash_cat_body">
              <div class="cs_dash_cat_body_top"><span class="cs_dash_cat_arrow"><i class="fa-solid fa-arrow-right"></i></span></div>
              <h3>Inhaled Liquid</h3>
              <p>Inhaled liquid formulations for rapid onset and dose control.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
    <!-- End Product Category Section -->
    <!-- Start Featured Products Section -->
    <style>
      .cs_dash_feat_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
      .cs_dash_feat_card { background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 16px; overflow: hidden; }
      .cs_dash_feat_img { height: 170px; overflow: hidden; }
      .cs_dash_feat_img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
      .cs_dash_feat_card:hover .cs_dash_feat_img img { transform: scale(1.06); }
      .cs_dash_feat_body { padding: 20px; }
      .cs_dash_feat_body h3 { color: #024242; font-size: 16px; font-weight: 800; margin: 0 0 8px; line-height: 1.4; }
      .cs_dash_feat_spec { color: #78dca6; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px; display: block; margin-bottom: 14px; }
      .cs_dash_feat_link { color: #024242; font-weight: 700; font-size: 13px; text-decoration: none; }
      .cs_dash_feat_link:hover { color: #78dca6; }
      @media (max-width: 991px) {
        .cs_dash_feat_grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_dash_feat_grid { grid-template-columns: 1fr; }
      }
    </style>
    <section style="padding: 70px 0; background: #f7faf8;">
      <div class="container">
        <div class="cs_dash_section_head wow fadeInUp">
          <div>
            <span class="cs_dash_section_eyebrow">Featured Products</span>
            <h2>Recently added</h2>
          </div>
          <a href="/products" class="cs_dash_section_link">View all products &rarr;</a>
        </div>
        <div class="cs_dash_feat_grid">
          <div class="cs_dash_feat_card wow fadeInUp">
            <div class="cs_dash_feat_img"><img src="/assets/img/dashboard/PharmaCrop%20THC25%20Dried%20Flower.webp" alt="PharmaCrop THC25 Dried Flower"></div>
            <div class="cs_dash_feat_body">
              <h3>PharmaCrop THC25 Dried Flower</h3>
              <span class="cs_dash_feat_spec">Dried Flower &nbsp;|&nbsp; THC 25%</span>
              <a href="/products#dried-flower" class="cs_dash_feat_link">View product &rarr;</a>
            </div>
          </div>
          <div class="cs_dash_feat_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_dash_feat_img"><img src="/assets/img/dashboard/pharmaCrop%20CBD100%20Oral%20Liquid.webp" alt="PharmaCrop CBD100 Oral Liquid"></div>
            <div class="cs_dash_feat_body">
              <h3>PharmaCrop CBD100 Oral Liquid</h3>
              <span class="cs_dash_feat_spec">Oral Liquid &nbsp;|&nbsp; CBD 100 mg/mL</span>
              <a href="/products#oral-liquid" class="cs_dash_feat_link">View product &rarr;</a>
            </div>
          </div>
          <div class="cs_dash_feat_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_dash_feat_img"><img src="/assets/img/dashboard/pharmaCrop%20Balance%20Pastilles.webp" alt="PharmaCrop Balance Pastilles"></div>
            <div class="cs_dash_feat_body">
              <h3>PharmaCrop Balance Pastilles</h3>
              <span class="cs_dash_feat_spec">Pastilles &nbsp;|&nbsp; THC 5 mg / CBD 5 mg</span>
              <a href="/products#pastilles" class="cs_dash_feat_link">View product &rarr;</a>
            </div>
          </div>
          <div class="cs_dash_feat_card wow fadeInUp" data-wow-delay="0.3s">
            <div class="cs_dash_feat_img"><img src="/assets/img/dashboard/pharmaCrop%20Relief%20Inhaled%20Liquid.webp" alt="PharmaCrop Relief Inhaled Liquid"></div>
            <div class="cs_dash_feat_body">
              <h3>PharmaCrop Relief Inhaled Liquid</h3>
              <span class="cs_dash_feat_spec">Inhaled Liquid &nbsp;|&nbsp; THC 10 mg/mL</span>
              <a href="/products#inhaled-liquid" class="cs_dash_feat_link">View product &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Featured Products Section -->
    <!-- Start Quick Access Section -->
    <style>
      .cs_dash_quick_grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .cs_dash_quick_card { position: relative; border-radius: 16px; overflow: hidden; min-height: 210px; display: flex; align-items: center; text-decoration: none; }
      .cs_dash_quick_card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
      .cs_dash_quick_card::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(2,42,42,0.75) 40%, rgba(2,20,20,0.25) 100%); }
      .cs_dash_quick_body { position: relative; z-index: 1; padding: 30px 34px; max-width: 320px; }
      .cs_dash_quick_icon { width: 42px; height: 42px; border-radius: 10px; background: rgba(120,220,166,0.2); color: #78dca6; display: flex; align-items: center; justify-content: center; font-size: 17px; margin-bottom: 16px; }
      .cs_dash_quick_body h3 { color: #fff; font-size: 20px; font-weight: 800; margin: 0 0 8px; }
      .cs_dash_quick_body p { color: rgba(255,255,255,0.75); font-size: 13px; line-height: 1.6; margin: 0; }
      .cs_dash_quick_go { position: absolute; right: 24px; bottom: 24px; z-index: 1; width: 38px; height: 38px; border-radius: 50%; background: #fff; color: #024242; display: flex; align-items: center; justify-content: center; font-size: 14px; }
      @media (max-width: 767px) {
        .cs_dash_quick_grid { grid-template-columns: 1fr; }
      }
    </style>
    <section id="resources" style="padding: 70px 0; background: #fff; scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_dash_section_head wow fadeInUp">
          <div>
            <span class="cs_dash_section_eyebrow">Quick Access</span>
            <h2>Key resources for HCPs</h2>
          </div>
        </div>
        <div class="cs_dash_quick_grid">
          <a href="#clinical-resource" class="cs_dash_quick_card wow fadeInUp">
            <img src="/assets/img/dashboard/hCP%20resource%20bg.webp" alt="HCP Resources">
            <div class="cs_dash_quick_body">
              <div class="cs_dash_quick_icon"><i class="fa-solid fa-file-lines"></i></div>
              <h3>HCP Resources</h3>
              <p>Clinical guides, product information, dosing resources and educational materials.</p>
            </div>
            <span class="cs_dash_quick_go"><i class="fa-solid fa-arrow-right"></i></span>
          </a>
          <a href="/faq" class="cs_dash_quick_card wow fadeInUp" data-wow-delay="0.1s">
            <img src="/assets/img/dashboard/documents%20%26%20downloads%20bg.webp" alt="Documents and Downloads">
            <div class="cs_dash_quick_body">
              <div class="cs_dash_quick_icon"><i class="fa-solid fa-download"></i></div>
              <h3>Documents &amp; Downloads</h3>
              <p>Product specifications, certifications, formularies and compliance documents.</p>
            </div>
            <span class="cs_dash_quick_go"><i class="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </section>
    <!-- End Quick Access Section -->
    <!-- Start Latest Professional Resource Section -->
    <style>
      .cs_dash_res_row { display: flex; align-items: center; gap: 60px; }
      .cs_dash_res_img { flex: 0 0 48%; border-radius: 16px; overflow: hidden; }
      .cs_dash_res_img img { width: 100%; height: 360px; object-fit: cover; display: block; }
      .cs_dash_res_content { flex: 1; }
      .cs_dash_res_eyebrow { display: block; color: #024242; background: #eef1ee; border-radius: 20px; padding: 6px 16px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; width: fit-content; }
      .cs_dash_res_content h2 { color: #024242; font-size: 28px; font-weight: 800; line-height: 1.3; margin: 0 0 16px; }
      .cs_dash_res_content p { color: #666; font-size: 15px; line-height: 1.7; margin: 0 0 26px; }
      @media (max-width: 991px) {
        .cs_dash_res_row { flex-direction: column; gap: 32px; }
        .cs_dash_res_img { flex: none; width: 100%; }
      }
    </style>
    <section id="clinical-resource" style="padding: 70px 0; background: #f7faf8; scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_dash_section_head wow fadeInUp">
          <div>
            <span class="cs_dash_section_eyebrow">Latest Professional Resource</span>
          </div>
        </div>
        <div class="cs_dash_res_row wow fadeInUp">
          <div class="cs_dash_res_img">
            <img src="/assets/img/dashboard/clinical%20guide.webp" alt="Integrating Medicinal Cannabis into Clinical Practice">
          </div>
          <div class="cs_dash_res_content">
            <span class="cs_dash_res_eyebrow">Clinical Guide</span>
            <h2>Integrating Medicinal Cannabis into Clinical Practice</h2>
            <p>A practical guide for healthcare professionals, covering patient selection, dosing considerations and monitoring.</p>
            <a href="/faq" class="cs_auth_btn_primary" style="width: auto; display: inline-flex; padding: 15px 28px;">Read the guide &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Latest Professional Resource Section -->
    <!-- Start Dashboard CTA -->
    <style>
      .cs_dash_cta_section { padding: 70px 0; background: #024242 url('/assets/img/dashboard/working%20together.webp') center center / cover no-repeat; }
      .cs_dash_cta_row { display: flex; align-items: center; justify-content: space-between; gap: 30px; flex-wrap: wrap; }
      .cs_dash_cta_eyebrow { display: block; color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
      .cs_dash_cta_row h2 { color: #fff; font-size: 32px; font-weight: 800; margin: 0 0 10px; max-width: 560px; }
      .cs_dash_cta_row p { color: rgba(255,255,255,0.75); font-size: 15px; margin: 0; max-width: 480px; }
      .cs_dash_cta_btn { display: inline-flex; align-items: center; gap: 10px; background: #fff; color: #024242; font-weight: 700; font-size: 14px; padding: 16px 28px; border-radius: 30px; text-decoration: none; white-space: nowrap; }
      .cs_dash_cta_btn:hover { background: #78dca6; }
    </style>
    <section class="cs_dash_cta_section">
      <div class="container">
        <div class="cs_dash_cta_row wow fadeInUp">
          <div>
            <span class="cs_dash_cta_eyebrow">Working Together</span>
            <h2>Better access. Better outcomes.</h2>
            <p>Supporting Australian healthcare professionals with trusted medicinal cannabis products and evidence-based resources.</p>
          </div>
          <a href="/products" class="cs_dash_cta_btn">Explore our range <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
    <!-- End Dashboard CTA -->
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
            <li><a href="/products">Products</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#clinical-resource">Clinical Information</a></li>
            <li><a href="/faq">Quality &amp; Compliance</a></li>
            <li><a href="/about-us">About</a></li>
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
`,
      }}
    />
    <Script id="cs_dashboard_script" strategy="afterInteractive">
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
          var searchForm = document.querySelector('[data-dash-search-form]');
          if (searchForm) {
            searchForm.addEventListener('submit', function (e) {
              e.preventDefault();
              window.location.href = '/products';
            });
          }
          var searchToggle = document.querySelector('[data-dash-search-toggle]');
          if (searchToggle) {
            searchToggle.addEventListener('click', function () {
              var input = document.querySelector('[data-dash-search-form] input');
              if (input) input.focus();
            });
          }
        })();
      `}
    </Script>
    </>
  );
}
