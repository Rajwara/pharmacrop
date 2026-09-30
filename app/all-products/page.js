import Script from "next/script";

export const metadata = {
  title: "All Products - PharmaCrop HCP Portal",
};

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "http://pharmacrop.local";

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
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/all-products" class="active">All Products</a></li>
            <li><a href="/hcp-resources">HCP Resources</a></li>
          </ul>
          <div class="cs_dash_header_right">
            <button type="button" class="cs_dash_search_btn" aria-label="Search" data-prod-search-toggle><i class="fa-solid fa-magnifying-glass"></i></button>
            <div class="cs_dash_user" data-dash-user>
              <button type="button" class="cs_dash_user_btn" data-dash-user-toggle>
                <span class="cs_dash_avatar">DR</span>
                <span class="cs_dash_user_name">Dr. Sarah Mitchell</span>
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="cs_dash_user_menu">
                <a href="/profile">My Profile / Account</a>
                <a href="/" data-logout-link>Sign Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Dashboard Header -->
    <!-- Start Product Portfolio Hero -->
    <style>
      .cs_prod_hero { position: relative; overflow: hidden; background: #f7faf8; }
      .cs_prod_hero_bg { position: absolute; inset: 0; z-index: 0; }
      .cs_prod_hero_bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_prod_hero_bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(247,250,248,0) 55%, #f7faf8 100%), linear-gradient(90deg, #f7faf8 0%, #f7faf8 34%, rgba(247,250,248,0.92) 44%, rgba(247,250,248,0.55) 56%, rgba(247,250,248,0.05) 68%); }
      .cs_prod_hero_inner { position: relative; z-index: 1; min-height: 460px; display: flex; align-items: center; padding: 60px 0 20px; }
      .cs_prod_hero_content { max-width: 540px; }
      .cs_prod_hero_eyebrow { display: block; color: #024242; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
      .cs_prod_hero h1 { color: #024242; font-size: 38px; font-weight: 800; line-height: 1.2; margin: 0 0 16px; }
      .cs_prod_hero p { color: #666; font-size: 15px; line-height: 1.7; margin: 0 0 28px; }
      .cs_prod_hero_btn { display: inline-flex; align-items: center; gap: 10px; background: #024242; color: #fff; font-weight: 700; font-size: 14px; padding: 15px 24px; border-radius: 10px; text-decoration: none; }
      .cs_prod_hero_btn:hover { background: #78dca6; color: #024242; }
      .cs_prod_brochure_card { display: flex; align-items: center; gap: 16px; background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 14px; padding: 14px; box-shadow: 0 15px 40px rgba(2,66,66,0.08); text-decoration: none; max-width: 420px; }
      .cs_prod_brochure_thumb { width: 60px; height: 60px; border-radius: 8px; overflow: hidden; flex: none; }
      .cs_prod_brochure_thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_prod_brochure_body { flex: 1; min-width: 0; }
      .cs_prod_brochure_body h4 { color: #024242; font-size: 14px; font-weight: 800; margin: 0 0 3px; }
      .cs_prod_brochure_body span { color: #999; font-size: 12px; }
      .cs_prod_brochure_go { width: 38px; height: 38px; border-radius: 50%; background: #024242; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 14px; flex: none; }
      .cs_prod_brochure_card:hover .cs_prod_brochure_go { background: #78dca6; color: #024242; }
      .cs_prod_filters_wrap { position: relative; z-index: 1; padding: 20px 0 40px; }
      @media (max-width: 991px) {
        .cs_prod_hero_bg::after { background: linear-gradient(180deg, rgba(247,250,248,0) 55%, #f7faf8 100%), linear-gradient(180deg, #f7faf8 0%, #f7faf8 46%, rgba(247,250,248,0.85) 60%, rgba(247,250,248,0.55) 100%); }
        .cs_prod_hero_inner { min-height: 0; padding: 130px 0 260px; }
        .cs_prod_hero_content { max-width: 100%; }
        .cs_prod_hero h1 { font-size: 30px; }
      }
    </style>
    <section class="cs_prod_hero">
      <div class="cs_prod_hero_bg">
        <img src="/assets/img/dashboard/all%20products/product%20portfolio%20banner.webp" alt="PharmaCrop lab team reviewing product samples">
      </div>
      <div class="container">
        <div class="cs_prod_hero_inner">
          <div class="cs_prod_hero_content wow fadeInUp">
            <span class="cs_prod_hero_eyebrow">HCP Portal</span>
            <h1>Product Portfolio</h1>
            <p>Explore PharmaCrop&rsquo;s product portfolio and access detailed professional product information, including product specifications and supporting resources for healthcare professionals.</p>
            <a href="/contact" class="cs_prod_brochure_card">
              <span class="cs_prod_brochure_thumb"><img src="/assets/img/dashboard/all%20products/product%20portfolio%20brochure.webp" alt="PharmaCrop Product Portfolio brochure"></span>
              <span class="cs_prod_brochure_body">
                <h4>Download Full Product Portfolio</h4>
                <span>PDF &middot; Request from our team</span>
              </span>
              <span class="cs_prod_brochure_go"><i class="fa-solid fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
        <div class="cs_prod_filters_wrap">
    <!-- Start Product Filters -->
    <style>
      .cs_prod_pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
      .cs_prod_pill { display: inline-flex; align-items: center; background: #fff; border: 1px solid rgba(2,66,66,0.15); border-radius: 30px; padding: 9px 20px; color: #024242; font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; }
      .cs_prod_pill.active { background: #024242; color: #fff; border-color: #024242; }
      .cs_prod_bar { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 14px; padding: 16px 20px; margin-bottom: 30px; }
      .cs_prod_search { flex: 1 1 260px; display: flex; align-items: center; gap: 10px; border: 1px solid #e2e5e2; border-radius: 30px; padding: 10px 18px; }
      .cs_prod_search i { color: #999; }
      .cs_prod_search input { border: none; outline: none; font-size: 14px; font-family: inherit; flex: 1; min-width: 0; }
      .cs_prod_select_wrap { display: flex; flex-direction: column; gap: 4px; }
      .cs_prod_select_wrap label { font-size: 11px; color: #999; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px; }
      .cs_prod_select_wrap select { border: 1px solid #e2e5e2; border-radius: 8px; padding: 9px 30px 9px 12px; font-size: 14px; color: #024242; font-family: inherit; background: #fff; }
      .cs_prod_clear { color: #024242; font-weight: 700; font-size: 13px; text-decoration: underline; background: none; border: none; cursor: pointer; font-family: inherit; white-space: nowrap; }
      .cs_prod_meta_row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
      .cs_prod_count { color: #999; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
      .cs_prod_sort_view { display: flex; align-items: center; gap: 16px; }
      .cs_prod_sort_view select { border: 1px solid #e2e5e2; border-radius: 8px; padding: 8px 12px; font-size: 13px; font-family: inherit; color: #024242; background: #fff; }
      .cs_prod_view_toggle { display: flex; border: 1px solid rgba(2,66,66,0.15); border-radius: 8px; overflow: hidden; }
      .cs_prod_view_toggle button { width: 36px; height: 36px; border: none; background: #fff; color: #999; cursor: pointer; display: flex; align-items: center; justify-content: center; }
      .cs_prod_view_toggle button.active { background: #024242; color: #fff; }
      @media (max-width: 575px) {
        .cs_prod_bar { flex-direction: column; align-items: stretch; }
      }
    </style>
        <div class="cs_prod_pills" data-prod-pills>
          <button type="button" class="cs_prod_pill active" data-prod-pill="all">All Products (0)</button>
        </div>
        <div class="cs_prod_bar">
          <div class="cs_prod_search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search products, cultivars, or portfolio items..." data-prod-search>
          </div>
          <div class="cs_prod_select_wrap">
            <label>Category</label>
            <select data-prod-category-select>
              <option value="all">All categories</option>
            </select>
          </div>
          <div class="cs_prod_select_wrap">
            <label>THC / CBD</label>
            <select data-prod-strength>
              <option value="all">All strengths</option>
              <option value="thc">THC dominant</option>
              <option value="cbd">CBD dominant</option>
              <option value="balanced">Balanced</option>
            </select>
          </div>
          <div class="cs_prod_select_wrap">
            <label>Pack size</label>
            <select data-prod-packsize>
              <option value="all">All pack sizes</option>
            </select>
          </div>
          <button type="button" class="cs_prod_clear" data-prod-clear>Clear filters</button>
        </div>
        <div class="cs_prod_meta_row">
          <span class="cs_prod_count" data-prod-count>10 PRODUCTS</span>
          <div class="cs_prod_sort_view">
            <select data-prod-sort>
              <option value="featured">Sort by: Featured</option>
              <option value="name">Sort by: Name (A-Z)</option>
            </select>
            <div class="cs_prod_view_toggle">
              <button type="button" class="active" data-prod-view="grid" aria-label="Grid view"><i class="fa-solid fa-table-cells"></i></button>
              <button type="button" data-prod-view="list" aria-label="List view"><i class="fa-solid fa-list"></i></button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <!-- End Product Filters -->
    <!-- Start Product Grid -->
    <style>
      .cs_prod_grid_section { padding: 0 0 70px; background: #f7faf8; }
      .cs_prod_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
      .cs_prod_grid.cs_prod_grid_list { grid-template-columns: 1fr; }
      .cs_prod_card { background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 16px; overflow: hidden; display: block; text-decoration: none; transition: box-shadow 0.3s ease, transform 0.3s ease; }
      .cs_prod_card:hover { box-shadow: 0 15px 40px rgba(2,66,66,0.12); transform: translateY(-3px); }
      .cs_prod_card:hover .cs_prod_link { color: #78dca6; }
      .cs_prod_grid_list .cs_prod_card { display: flex; align-items: stretch; }
      .cs_prod_img { height: 220px; overflow: hidden; position: relative; }
      .cs_prod_grid_list .cs_prod_img { width: 220px; height: auto; flex: none; }
      .cs_prod_img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
      .cs_prod_card:hover .cs_prod_img img { transform: scale(1.06); }
      .cs_prod_origin_badge { position: absolute; top: 14px; left: 14px; display: inline-flex; align-items: center; gap: 6px; background: #fff; border-radius: 20px; padding: 6px 14px; font-size: 12px; font-weight: 700; color: #024242; box-shadow: 0 4px 12px rgba(2,66,66,0.15); }
      .cs_prod_body { padding: 20px; flex: 1; }
      .cs_prod_body h3 { color: #024242; font-size: 16px; font-weight: 800; margin: 0; }
      .cs_prod_category { color: #999; font-size: 13px; margin: 4px 0 8px; display: block; }
      .cs_prod_spec { color: #666; font-size: 13px; font-weight: 600; display: block; margin-bottom: 14px; }
      .cs_prod_meta_row { display: flex; align-items: flex-end; justify-content: space-between; gap: 10px; margin-bottom: 16px; }
      .cs_prod_strain_pill { display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; background: #eef1ee; color: #024242; margin-bottom: 8px; }
      .cs_prod_strain_indica { background: #e6e0f5; color: #5b3fa0; }
      .cs_prod_strain_sativa { background: #e1f3e1; color: #2f7d32; }
      .cs_prod_strain_hybrid { background: #faecd6; color: #b5751f; }
      .cs_prod_packsize { display: block; color: #999; font-size: 12.5px; }
      .cs_prod_price { text-align: right; }
      .cs_prod_price_value { color: #024242; font-size: 17px; font-weight: 800; }
      .cs_prod_price_rrp { color: #024242; font-size: 12px; font-weight: 700; }
      .cs_prod_price_sub { display: block; color: #999; font-size: 11px; }
      .cs_prod_link { color: #024242; font-weight: 700; font-size: 13px; text-decoration: none; }
      .cs_prod_link:hover { color: #78dca6; }
      .cs_prod_empty { display: none; text-align: center; padding: 60px 20px; color: #999; }
      .cs_prod_empty[data-prod-loading] { display: block; }
      @media (max-width: 991px) {
        .cs_prod_grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_prod_grid { grid-template-columns: 1fr; }
        .cs_prod_grid_list .cs_prod_card { flex-direction: column; }
        .cs_prod_grid_list .cs_prod_img { width: 100%; height: 200px; }
      }
    </style>
    <section class="cs_prod_grid_section">
      <div class="container">
        <div class="cs_prod_grid" data-prod-grid></div>
        <div class="cs_prod_empty" data-prod-empty>
          <p>No products match your filters. Try clearing them to see the full portfolio.</p>
        </div>
        <div class="cs_prod_empty" data-prod-loading>
          <p>Loading products...</p>
        </div>
      </div>
    </section>
    <!-- End Product Grid -->
    <!-- Start Related Resources -->
    <style>
      .cs_prod_quick_grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .cs_prod_quick_card { position: relative; border-radius: 16px; overflow: hidden; min-height: 190px; display: flex; align-items: center; text-decoration: none; }
      .cs_prod_quick_card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
      .cs_prod_quick_card::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(2,42,42,0.75) 40%, rgba(2,20,20,0.25) 100%); }
      .cs_prod_quick_body { position: relative; z-index: 1; padding: 28px 32px; max-width: 320px; }
      .cs_prod_quick_icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(120,220,166,0.2); color: #78dca6; display: flex; align-items: center; justify-content: center; font-size: 16px; margin-bottom: 14px; }
      .cs_prod_quick_body h3 { color: #fff; font-size: 19px; font-weight: 800; margin: 0 0 8px; }
      .cs_prod_quick_body p { color: rgba(255,255,255,0.75); font-size: 13px; line-height: 1.6; margin: 0; }
      .cs_prod_quick_go { position: absolute; right: 22px; bottom: 22px; z-index: 1; width: 36px; height: 36px; border-radius: 50%; background: #fff; color: #024242; display: flex; align-items: center; justify-content: center; font-size: 13px; }
      @media (max-width: 767px) {
        .cs_prod_quick_grid { grid-template-columns: 1fr; }
      }
    </style>
    <section style="padding: 70px 0; background: #fff;">
      <div class="container">
        <div class="cs_dash_section_head wow fadeInUp" style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 36px; gap: 20px; flex-wrap: wrap;">
          <div>
            <span style="display: block; color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px;">HCP Resources</span>
            <h2 style="color: #024242; font-size: 30px; font-weight: 800; margin: 0;">Related professional resources</h2>
          </div>
          <a href="/hcp-resources" style="color: #024242; font-weight: 700; font-size: 14px; text-decoration: none;">View all resources &rarr;</a>
        </div>
        <div class="cs_prod_quick_grid">
          <a href="/hcp-resources" class="cs_prod_quick_card wow fadeInUp">
            <img src="/assets/img/dashboard/hCP%20resource%20bg.webp" alt="HCP Resources">
            <div class="cs_prod_quick_body">
              <div class="cs_prod_quick_icon"><i class="fa-solid fa-file-lines"></i></div>
              <h3>HCP Resources</h3>
              <p>Access product information, technical specifications and professional resources.</p>
            </div>
            <span class="cs_prod_quick_go"><i class="fa-solid fa-arrow-right"></i></span>
          </a>
          <a href="/faq" class="cs_prod_quick_card wow fadeInUp" data-wow-delay="0.1s">
            <img src="/assets/img/dashboard/documents%20%26%20downloads%20bg.webp" alt="Documents and Downloads">
            <div class="cs_prod_quick_body">
              <div class="cs_prod_quick_icon"><i class="fa-solid fa-download"></i></div>
              <h3>Documents &amp; Downloads</h3>
              <p>Product monographs, certificates and supporting documentation.</p>
            </div>
            <span class="cs_prod_quick_go"><i class="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </section>
    <!-- End Related Resources -->
    <!-- Start CTA -->
    <style>
      .cs_prod_cta_section { padding: 70px 0; background: #024242 url('/assets/img/dashboard/working%20together.webp') center center / cover no-repeat; }
      .cs_prod_cta_row { display: flex; align-items: center; justify-content: space-between; gap: 30px; flex-wrap: wrap; }
      .cs_prod_cta_eyebrow { display: block; color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
      .cs_prod_cta_row h2 { color: #fff; font-size: 32px; font-weight: 800; margin: 0 0 10px; max-width: 560px; }
      .cs_prod_cta_row p { color: rgba(255,255,255,0.75); font-size: 15px; margin: 0; max-width: 480px; }
      .cs_prod_cta_btn { display: inline-flex; align-items: center; gap: 10px; background: #fff; color: #024242; font-weight: 700; font-size: 14px; padding: 16px 28px; border-radius: 30px; text-decoration: none; white-space: nowrap; }
      .cs_prod_cta_btn:hover { background: #78dca6; }
    </style>
    <section class="cs_prod_cta_section">
      <div class="container">
        <div class="cs_prod_cta_row wow fadeInUp">
          <div>
            <span class="cs_prod_cta_eyebrow">Working Together</span>
            <h2>Better access. Better outcomes.</h2>
            <p>Supporting healthcare professionals with trusted medicinal cannabis products and resources.</p>
          </div>
          <a href="/about-us" class="cs_prod_cta_btn">Explore our approach <i class="fa-solid fa-arrow-right"></i></a>
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
`,
      }}
    />
    <Script id="cs_all_products_script" strategy="afterInteractive">
      {`
        (function () {
          var WP_API_URL = ${JSON.stringify(WP_API_URL)};

          if (window.PharmaCropAuth) {
            if (!window.PharmaCropAuth.requireAuth()) return;
            window.PharmaCropAuth.personalizeHeader();
            window.PharmaCropAuth.wireLogout();
          }

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

          function formatLabel(slug) {
            return String(slug || '').replace(/[-_]+/g, ' ').replace(/\\b\\w/g, function (c) { return c.toUpperCase(); }).trim();
          }

          function classifyStrength(thc, cbd) {
            var thcNum = parseFloat(String(thc || '').replace(/[^0-9.]/g, '')) || 0;
            var cbdNum = parseFloat(String(cbd || '').replace(/[^0-9.]/g, '')) || 0;
            if (thcNum > cbdNum * 1.5) return 'thc';
            if (cbdNum > thcNum * 1.5) return 'cbd';
            return 'balanced';
          }

          var FALLBACK_IMG = '/assets/img/dashboard/Dried%20Flower%20Category.webp';

          function mapProduct(raw) {
            var acf = raw.acf || {};
            var media = raw._embedded && raw._embedded['wp:featuredmedia'] && raw._embedded['wp:featuredmedia'][0];
            var image = (media && media.source_url) || FALLBACK_IMG;
            var altImage = (typeof acf.alt_image === 'string' && acf.alt_image.indexOf('http') === 0) ? acf.alt_image : image;
            var categorySlug = acf.category || 'uncategorised';
            return {
              slug: raw.slug,
              name: raw.title && raw.title.rendered,
              categorySlug: categorySlug,
              category: formatLabel(categorySlug),
              thc: acf.thc || '',
              cbd: acf.cbd || '',
              packSize: acf.pack_size || '',
              strength: classifyStrength(acf.thc, acf.cbd),
              strainType: acf.type_value || '',
              price: acf.price || '',
              image: image,
              altImage: altImage,
            };
          }

          var grid = document.querySelector('[data-prod-grid]');
          var loadingEl = document.querySelector('[data-prod-loading]');
          var pillsWrap = document.querySelector('[data-prod-pills]');
          var categorySelect = document.querySelector('[data-prod-category-select]');
          var strengthSelect = document.querySelector('[data-prod-strength]');
          var packSelect = document.querySelector('[data-prod-packsize]');
          var sortSelect = document.querySelector('[data-prod-sort]');
          var searchInput = document.querySelector('[data-prod-search]');
          var countEl = document.querySelector('[data-prod-count]');
          var emptyEl = document.querySelector('[data-prod-empty]');
          var clearBtn = document.querySelector('[data-prod-clear]');
          var viewBtns = Array.prototype.slice.call(document.querySelectorAll('[data-prod-view]'));

          function strainPillClass(strainType) {
            var normalized = String(strainType || '').toLowerCase();
            if (normalized === 'indica') return 'cs_prod_strain_pill cs_prod_strain_indica';
            if (normalized === 'sativa') return 'cs_prod_strain_pill cs_prod_strain_sativa';
            if (normalized === 'hybrid') return 'cs_prod_strain_pill cs_prod_strain_hybrid';
            return 'cs_prod_strain_pill';
          }

          function cardHtml(p) {
            var specLine = [p.thc ? 'THC ' + p.thc : '', p.cbd ? 'CBD ' + p.cbd : ''].filter(Boolean).join(' &nbsp;|&nbsp; ');
            var strainPill = p.strainType ? '<span class="' + strainPillClass(p.strainType) + '">' + p.strainType + '</span>' : '<span></span>';
            var priceBlock = p.price
              ? '<div class="cs_prod_price"><span class="cs_prod_price_value">$' + p.price + '</span> <span class="cs_prod_price_rrp">RRP</span><span class="cs_prod_price_sub">(to patient)</span></div>'
              : '<div class="cs_prod_price"></div>';
            return '<a class="cs_prod_card" href="/all-products/' + p.slug + '" data-name="' + p.name.toLowerCase() + '" data-category="' + p.categorySlug + '" data-strength="' + p.strength + '" data-packsize="' + p.packSize + '">' +
              '<div class="cs_prod_img"><span class="cs_prod_origin_badge">&#127807; Australian Grown</span><img src="' + p.image + '" alt="' + p.name + '"></div>' +
              '<div class="cs_prod_body"><h3>' + p.name + '</h3>' +
              '<span class="cs_prod_category">' + p.category + '</span>' +
              '<span class="cs_prod_spec">' + specLine + '</span>' +
              '<div class="cs_prod_meta_row">' +
              '<div>' + strainPill + (p.packSize ? '<span class="cs_prod_packsize">' + p.packSize + '</span>' : '') + '</div>' +
              priceBlock +
              '</div>' +
              '<span class="cs_prod_link">View Product &rarr;</span></div></a>';
          }

          function initFilters(products) {
            grid.innerHTML = products.map(cardHtml).join('');

            var categories = {};
            var packSizes = {};
            products.forEach(function (p) {
              categories[p.categorySlug] = (categories[p.categorySlug] || { label: p.category, count: 0 });
              categories[p.categorySlug].count++;
              if (p.packSize) packSizes[p.packSize] = true;
            });

            Object.keys(categories).forEach(function (slug) {
              var btn = document.createElement('button');
              btn.type = 'button';
              btn.className = 'cs_prod_pill';
              btn.setAttribute('data-prod-pill', slug);
              btn.textContent = categories[slug].label + ' (' + categories[slug].count + ')';
              pillsWrap.appendChild(btn);

              var opt = document.createElement('option');
              opt.value = slug;
              opt.textContent = categories[slug].label;
              categorySelect.appendChild(opt);
            });

            Object.keys(packSizes).forEach(function (size) {
              var opt = document.createElement('option');
              opt.value = size;
              opt.textContent = size;
              packSelect.appendChild(opt);
            });

            var allPill = document.querySelector('[data-prod-pill="all"]');
            if (allPill) allPill.textContent = 'All Products (' + products.length + ')';

            var pills = Array.prototype.slice.call(document.querySelectorAll('[data-prod-pill]'));
            var cards = Array.prototype.slice.call(document.querySelectorAll('.cs_prod_card'));
            var originalOrder = cards.slice();

            function setPillActive(category) {
              pills.forEach(function (p) {
                p.classList.toggle('active', p.getAttribute('data-prod-pill') === category);
              });
            }

            function applyFilters() {
              var category = categorySelect.value;
              var strength = strengthSelect.value;
              var pack = packSelect.value;
              var query = searchInput.value.trim().toLowerCase();
              var visibleCount = 0;

              cards.forEach(function (card) {
                var matchesCategory = category === 'all' || card.getAttribute('data-category') === category;
                var matchesStrength = strength === 'all' || card.getAttribute('data-strength') === strength;
                var matchesPack = pack === 'all' || card.getAttribute('data-packsize') === pack;
                var matchesSearch = !query || card.getAttribute('data-name').indexOf(query) !== -1 || card.getAttribute('data-category').indexOf(query) !== -1;
                var visible = matchesCategory && matchesStrength && matchesPack && matchesSearch;
                card.style.display = visible ? '' : 'none';
                if (visible) visibleCount++;
              });

              countEl.textContent = visibleCount + (visibleCount === 1 ? ' PRODUCT' : ' PRODUCTS');
              emptyEl.style.display = visibleCount === 0 ? 'block' : 'none';
              grid.style.display = visibleCount === 0 ? 'none' : 'grid';
            }

            pills.forEach(function (pill) {
              pill.addEventListener('click', function () {
                var category = pill.getAttribute('data-prod-pill');
                categorySelect.value = category;
                setPillActive(category);
                applyFilters();
              });
            });

            categorySelect.addEventListener('change', function () {
              setPillActive(categorySelect.value);
              applyFilters();
            });
            strengthSelect.addEventListener('change', applyFilters);
            packSelect.addEventListener('change', applyFilters);
            searchInput.addEventListener('input', applyFilters);

            sortSelect.addEventListener('change', function () {
              var mode = sortSelect.value;
              var ordered = mode === 'name'
                ? originalOrder.slice().sort(function (a, b) { return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name')); })
                : originalOrder;
              ordered.forEach(function (card) { grid.appendChild(card); });
            });

            clearBtn.addEventListener('click', function () {
              categorySelect.value = 'all';
              strengthSelect.value = 'all';
              packSelect.value = 'all';
              searchInput.value = '';
              setPillActive('all');
              applyFilters();
            });

            viewBtns.forEach(function (btn) {
              btn.addEventListener('click', function () {
                viewBtns.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                grid.classList.toggle('cs_prod_grid_list', btn.getAttribute('data-prod-view') === 'list');
              });
            });

            var searchToggle = document.querySelector('[data-prod-search-toggle]');
            if (searchToggle) {
              searchToggle.addEventListener('click', function () {
                searchInput.focus();
              });
            }

            var urlParams = new URLSearchParams(window.location.search);
            var initialCategory = urlParams.get('category');
            if (initialCategory) {
              categorySelect.value = initialCategory;
              setPillActive(initialCategory);
            }
            applyFilters();
          }

          fetch(WP_API_URL + '/wp-json/wp/v2/product?per_page=100&_embed')
            .then(function (res) { return res.ok ? res.json() : []; })
            .then(function (raw) {
              var products = (raw || []).map(mapProduct);
              if (loadingEl) loadingEl.style.display = 'none';
              initFilters(products);
            })
            .catch(function () {
              if (loadingEl) loadingEl.textContent = 'Could not load products right now.';
            });
        })();
      `}
    </Script>
    </>
  );
}
