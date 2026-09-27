import Script from "next/script";

export const metadata = {
  title: "HCP Resources - PharmaCrop HCP Portal",
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
            <li><a href="/all-products">All Products</a></li>
            <li><a href="/hcp-resources" class="active">HCP Resources</a></li>
          </ul>
          <div class="cs_dash_header_right">
            <button type="button" class="cs_dash_search_btn" aria-label="Search" data-res-search-toggle><i class="fa-solid fa-magnifying-glass"></i></button>
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
    <!-- Start HCP Resources Hero -->
    <style>
      .cs_res_hero { position: relative; overflow: hidden; background: #f7faf8; }
      .cs_res_hero_bg { position: absolute; inset: 0; z-index: 0; }
      .cs_res_hero_bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_res_hero_bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, #f7faf8 0%, #f7faf8 34%, rgba(247,250,248,0.92) 44%, rgba(247,250,248,0.55) 56%, rgba(247,250,248,0.05) 68%); }
      .cs_res_hero_inner { position: relative; z-index: 1; min-height: 260px; display: flex; align-items: center; padding: 50px 0; }
      .cs_res_hero_content { max-width: 560px; }
      .cs_res_hero_eyebrow { display: block; color: #024242; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
      .cs_res_hero h1 { color: #024242; font-size: 36px; font-weight: 800; line-height: 1.2; margin: 0 0 12px; }
      .cs_res_hero p { color: #666; font-size: 15px; line-height: 1.7; margin: 0; }
      @media (max-width: 991px) {
        .cs_res_hero_bg::after { background: linear-gradient(180deg, #f7faf8 0%, #f7faf8 46%, rgba(247,250,248,0.85) 60%, rgba(247,250,248,0.55) 100%); }
        .cs_res_hero_inner { min-height: 0; padding: 130px 0 200px; }
        .cs_res_hero_content { max-width: 100%; }
        .cs_res_hero h1 { font-size: 28px; }
      }
    </style>
    <section class="cs_res_hero">
      <div class="cs_res_hero_bg">
        <img src="/assets/img/dashboard/HCP%20Resources/HCP%20resources%20banner.webp" alt="PharmaCrop professional resources">
      </div>
      <div class="container">
        <div class="cs_res_hero_inner">
          <div class="cs_res_hero_content wow fadeInUp">
            <span class="cs_res_hero_eyebrow">HCP Portal</span>
            <h1>HCP Resources</h1>
            <p>Access professional resources, product information and educational materials for healthcare professionals.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End HCP Resources Hero -->
    <!-- Start Featured Resource -->
    <style>
      .cs_res_feat_section { padding: 40px 0; background: #f7faf8; }
      .cs_res_feat_card { display: flex; align-items: stretch; gap: 40px; background: #fff; border-radius: 18px; border: 1px solid rgba(2,66,66,0.1); overflow: hidden; }
      .cs_res_feat_body { flex: 1; padding: 40px; }
      .cs_res_feat_badge { display: inline-flex; align-items: center; gap: 8px; color: #024242; background: rgba(120,220,166,0.15); border-radius: 20px; padding: 6px 16px; font-size: 12px; font-weight: 700; margin-bottom: 18px; }
      .cs_res_feat_body h2 { color: #024242; font-size: 26px; font-weight: 800; margin: 0 0 10px; }
      .cs_res_feat_meta { display: flex; align-items: center; gap: 8px; color: #999; font-size: 13px; margin-bottom: 16px; }
      .cs_res_feat_body p.cs_res_feat_desc { color: #666; font-size: 15px; line-height: 1.7; margin: 0 0 26px; max-width: 520px; }
      .cs_res_feat_ctas { display: flex; gap: 14px; flex-wrap: wrap; }
      .cs_res_btn_primary { display: inline-flex; align-items: center; gap: 8px; background: #024242; color: #fff; font-weight: 700; font-size: 14px; padding: 13px 22px; border-radius: 30px; text-decoration: none; }
      .cs_res_btn_primary:hover { background: #78dca6; color: #024242; }
      .cs_res_btn_outline { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #024242; font-weight: 700; font-size: 14px; padding: 13px 22px; border-radius: 30px; text-decoration: none; border: 1px solid rgba(2,66,66,0.2); }
      .cs_res_btn_outline:hover { border-color: #024242; }
      .cs_res_feat_img { flex: 0 0 42%; }
      .cs_res_feat_img img { width: 100%; height: 100%; object-fit: cover; display: block; }
      @media (max-width: 991px) {
        .cs_res_feat_card { flex-direction: column; }
        .cs_res_feat_img { min-height: 240px; }
      }
      @media (max-width: 575px) {
        .cs_res_feat_body { padding: 28px 22px; }
      }
    </style>
    <section class="cs_res_feat_section">
      <div class="container">
        <div class="cs_res_feat_card wow fadeInUp">
          <div class="cs_res_feat_body">
            <span class="cs_res_feat_badge"><i class="fa-solid fa-star"></i> Featured Resource</span>
            <h2>Professional Product Guide</h2>
            <div class="cs_res_feat_meta"><i class="fa-solid fa-file-lines"></i> PDF &nbsp;|&nbsp; 1.8 MB &nbsp;|&nbsp; Updated Jan 15, 2024</div>
            <p class="cs_res_feat_desc">Comprehensive product information and professional guidance for PharmaCrop&rsquo;s medical cannabis products, including product overview, quality information and supporting resources.</p>
            <div class="cs_res_feat_ctas">
              <a href="/assets/img/dashboard/HCP%20Resources/HCP%20resources%20banner.webp" target="_blank" rel="noopener" class="cs_res_btn_primary"><i class="fa-solid fa-eye"></i> View Resource <i class="fa-solid fa-arrow-right"></i></a>
              <a href="/contact" class="cs_res_btn_outline"><i class="fa-solid fa-download"></i> Download PDF</a>
            </div>
          </div>
          <div class="cs_res_feat_img">
            <img src="/assets/img/dashboard/HCP%20Resources/HCP%20resources%20banner.webp" alt="Professional Product Guide">
          </div>
        </div>
      </div>
    </section>
    <!-- End Featured Resource -->
    <!-- Start Resource Filters -->
    <style>
      .cs_res_filters_section { padding: 40px 0; background: #fff; }
      .cs_res_pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
      .cs_res_pill { display: inline-flex; align-items: center; background: #fff; border: 1px solid rgba(2,66,66,0.15); border-radius: 30px; padding: 9px 20px; color: #024242; font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; }
      .cs_res_pill.active { background: #024242; color: #fff; border-color: #024242; }
      .cs_res_bar { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; background: #f7faf8; border: 1px solid rgba(2,66,66,0.1); border-radius: 14px; padding: 16px 20px; margin-bottom: 30px; }
      .cs_res_search { flex: 1 1 220px; display: flex; align-items: center; gap: 10px; border: 1px solid #e2e5e2; border-radius: 30px; padding: 10px 18px; background: #fff; }
      .cs_res_search i { color: #999; }
      .cs_res_search input { border: none; outline: none; font-size: 14px; font-family: inherit; flex: 1; min-width: 0; background: transparent; }
      .cs_res_select_wrap { display: flex; flex-direction: column; gap: 4px; }
      .cs_res_select_wrap label { font-size: 11px; color: #999; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px; }
      .cs_res_select_wrap select { border: 1px solid #e2e5e2; border-radius: 8px; padding: 9px 30px 9px 12px; font-size: 14px; color: #024242; font-family: inherit; background: #fff; }
      .cs_res_meta_row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
      .cs_res_count { color: #999; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
      .cs_res_sort_view { display: flex; align-items: center; gap: 16px; }
      .cs_res_sort_view select { border: 1px solid #e2e5e2; border-radius: 8px; padding: 8px 12px; font-size: 13px; font-family: inherit; color: #024242; background: #fff; }
      .cs_res_view_toggle { display: flex; border: 1px solid rgba(2,66,66,0.15); border-radius: 8px; overflow: hidden; }
      .cs_res_view_toggle button { width: 36px; height: 36px; border: none; background: #fff; color: #999; cursor: pointer; display: flex; align-items: center; justify-content: center; }
      .cs_res_view_toggle button.active { background: #024242; color: #fff; }
      @media (max-width: 575px) {
        .cs_res_bar { flex-direction: column; align-items: stretch; }
      }
    </style>
    <section class="cs_res_filters_section">
      <div class="container">
        <div class="cs_res_pills">
          <button type="button" class="cs_res_pill active" data-res-pill="all">All Resources (8)</button>
          <button type="button" class="cs_res_pill" data-res-pill="prescribing-access">Prescribing &amp; Access (2)</button>
          <button type="button" class="cs_res_pill" data-res-pill="education">Education (1)</button>
          <button type="button" class="cs_res_pill" data-res-pill="product-resources">Product Resources (4)</button>
          <button type="button" class="cs_res_pill" data-res-pill="clinical-professional">Clinical / Professional (1)</button>
        </div>
        <div class="cs_res_bar">
          <div class="cs_res_search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search HCP resources..." data-res-search>
          </div>
          <div class="cs_res_select_wrap">
            <label>Resource Type</label>
            <select data-res-type>
              <option value="all">All types</option>
              <option value="pdf">PDF</option>
            </select>
          </div>
          <div class="cs_res_select_wrap">
            <label>Category</label>
            <select data-res-category-select>
              <option value="all">All categories</option>
              <option value="prescribing-access">Prescribing &amp; Access</option>
              <option value="education">Education</option>
              <option value="product-resources">Product Resources</option>
              <option value="clinical-professional">Clinical / Professional</option>
            </select>
          </div>
          <div class="cs_res_select_wrap">
            <label>Product</label>
            <select data-res-product>
              <option value="all">All products</option>
              <option value="sunridge 22">Sunridge 22</option>
              <option value="balance 10:10">Balance 10:10</option>
              <option value="highland 25">Highland 25</option>
            </select>
          </div>
        </div>
        <div class="cs_res_meta_row">
          <span class="cs_res_count" data-res-count>8 RESOURCES</span>
          <div class="cs_res_sort_view">
            <select data-res-sort>
              <option value="latest">Sort by: Latest</option>
              <option value="name">Sort by: Name (A-Z)</option>
            </select>
            <div class="cs_res_view_toggle">
              <button type="button" class="active" data-res-view="grid" aria-label="Grid view"><i class="fa-solid fa-table-cells"></i></button>
              <button type="button" data-res-view="list" aria-label="List view"><i class="fa-solid fa-list"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Resource Filters -->
    <!-- Start Resource Grid -->
    <style>
      .cs_res_grid_section { padding: 0 0 70px; background: #fff; }
      .cs_res_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
      .cs_res_grid.cs_res_grid_list { grid-template-columns: 1fr; }
      .cs_res_card { background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 16px; overflow: hidden; }
      .cs_res_grid_list .cs_res_card { display: flex; align-items: stretch; }
      .cs_res_img { height: 150px; overflow: hidden; position: relative; }
      .cs_res_grid_list .cs_res_img { width: 220px; height: auto; flex: none; }
      .cs_res_img img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_res_img_icon { position: absolute; left: 14px; bottom: -18px; width: 36px; height: 36px; border-radius: 50%; background: #024242; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 14px; border: 3px solid #fff; }
      .cs_res_body { padding: 26px 18px 18px; flex: 1; }
      .cs_res_body h3 { color: #024242; font-size: 15px; font-weight: 800; margin: 0 0 4px; line-height: 1.4; }
      .cs_res_category { color: #78dca6; font-weight: 700; font-size: 12px; margin: 0 0 8px; display: block; }
      .cs_res_meta { color: #999; font-size: 12px; line-height: 1.6; display: block; margin-bottom: 10px; }
      .cs_res_desc { color: #666; font-size: 12.5px; line-height: 1.6; margin: 0 0 12px; }
      .cs_res_tag { display: inline-block; background: #f2f5f2; color: #024242; font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: 20px; margin-bottom: 14px; text-decoration: none; }
      .cs_res_tag:hover { background: #78dca6; }
      .cs_res_actions { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
      .cs_res_actions a { color: #024242; font-weight: 700; font-size: 12.5px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
      .cs_res_actions a:hover { color: #78dca6; }
      .cs_res_empty { display: none; text-align: center; padding: 60px 20px; color: #999; }
      @media (max-width: 991px) {
        .cs_res_grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_res_grid { grid-template-columns: 1fr; }
        .cs_res_grid_list .cs_res_card { flex-direction: column; }
        .cs_res_grid_list .cs_res_img { width: 100%; height: 150px; }
      }
    </style>
    <section class="cs_res_grid_section">
      <div class="container">
        <div class="cs_res_grid" data-res-grid>
          <div class="cs_res_card" data-name="hcp product overview" data-category="product-resources" data-product="sunridge 22">
            <div class="cs_res_img"><img src="/assets/img/dashboard/HCP%20Resources/HCP%20Product%20Overview.webp" alt="HCP Product Overview"><span class="cs_res_img_icon"><i class="fa-solid fa-file-lines"></i></span></div>
            <div class="cs_res_body">
              <h3>HCP Product Overview</h3>
              <span class="cs_res_category">Product Resources</span>
              <span class="cs_res_meta">PDF &nbsp;|&nbsp; 1.1 MB &nbsp;|&nbsp; Updated Jan 15, 2024</span>
              <p class="cs_res_desc">Overview of PharmaCrop&rsquo;s product portfolio, including product information and key characteristics.</p>
              <a href="/all-products?category=dried-flower" class="cs_res_tag">Related Product: Sunridge 22</a>
              <div class="cs_res_actions">
                <a href="/assets/img/dashboard/HCP%20Resources/HCP%20Product%20Overview.webp" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View Resource</a>
                <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
              </div>
            </div>
          </div>
          <div class="cs_res_card" data-name="prescribing & access guide" data-category="prescribing-access" data-product="all">
            <div class="cs_res_img"><img src="/assets/img/dashboard/HCP%20Resources/Prescribing%20%26%20Access%20Guide.webp" alt="Prescribing and Access Guide"><span class="cs_res_img_icon"><i class="fa-solid fa-file-lines"></i></span></div>
            <div class="cs_res_body">
              <h3>Prescribing &amp; Access Guide</h3>
              <span class="cs_res_category">Prescribing &amp; Access</span>
              <span class="cs_res_meta">PDF &nbsp;|&nbsp; 980 KB &nbsp;|&nbsp; Updated Jan 10, 2024</span>
              <p class="cs_res_desc">Information to support healthcare professionals with product access pathways and prescribing considerations.</p>
              <a href="/all-products" class="cs_res_tag">All Products</a>
              <div class="cs_res_actions">
                <a href="/assets/img/dashboard/HCP%20Resources/Prescribing%20%26%20Access%20Guide.webp" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View Resource</a>
                <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
              </div>
            </div>
          </div>
          <div class="cs_res_card" data-name="product technical resource" data-category="product-resources" data-product="all">
            <div class="cs_res_img"><img src="/assets/img/dashboard/HCP%20Resources/Product%20Technical%20Resource.webp" alt="Product Technical Resource"><span class="cs_res_img_icon"><i class="fa-solid fa-file-lines"></i></span></div>
            <div class="cs_res_body">
              <h3>Product Technical Resource</h3>
              <span class="cs_res_category">Product Resources</span>
              <span class="cs_res_meta">PDF &nbsp;|&nbsp; 1.4 MB &nbsp;|&nbsp; Updated Jan 8, 2024</span>
              <p class="cs_res_desc">Detailed product technical information, including product specifications and quality details.</p>
              <a href="/all-products?category=dried-flower" class="cs_res_tag">Product Category: Dried Flower</a>
              <div class="cs_res_actions">
                <a href="/assets/img/dashboard/HCP%20Resources/Product%20Technical%20Resource.webp" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View Resource</a>
                <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
              </div>
            </div>
          </div>
          <div class="cs_res_card" data-name="clinical reference material" data-category="clinical-professional" data-product="all">
            <div class="cs_res_img"><img src="/assets/img/dashboard/HCP%20Resources/Clinical%20Reference%20Material.webp" alt="Clinical Reference Material"><span class="cs_res_img_icon"><i class="fa-solid fa-file-lines"></i></span></div>
            <div class="cs_res_body">
              <h3>Clinical Reference Material</h3>
              <span class="cs_res_category">Clinical / Professional</span>
              <span class="cs_res_meta">PDF &nbsp;|&nbsp; 1.4 MB &nbsp;|&nbsp; Updated Jan 8, 2024</span>
              <p class="cs_res_desc">Professional reference material supporting the clinical use of PharmaCrop products.</p>
              <a href="/all-products" class="cs_res_tag">All Products</a>
              <div class="cs_res_actions">
                <a href="/assets/img/dashboard/HCP%20Resources/Clinical%20Reference%20Material.webp" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View Resource</a>
                <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
              </div>
            </div>
          </div>
          <div class="cs_res_card" data-name="product information resource" data-category="product-resources" data-product="balance 10:10">
            <div class="cs_res_img"><img src="/assets/img/dashboard/HCP%20Resources/Product%20Information%20Resource.webp" alt="Product Information Resource"><span class="cs_res_img_icon"><i class="fa-solid fa-file-lines"></i></span></div>
            <div class="cs_res_body">
              <h3>Product Information Resource</h3>
              <span class="cs_res_category">Product Resources</span>
              <span class="cs_res_meta">PDF &nbsp;|&nbsp; 1.2 MB &nbsp;|&nbsp; Updated Dec 20, 2023</span>
              <p class="cs_res_desc">Comprehensive product information including product characteristics and formulation details.</p>
              <a href="/all-products?category=oral-liquid" class="cs_res_tag">Related Product: Balance 10:10</a>
              <div class="cs_res_actions">
                <a href="/assets/img/dashboard/HCP%20Resources/Product%20Information%20Resource.webp" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View Resource</a>
                <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
              </div>
            </div>
          </div>
          <div class="cs_res_card" data-name="educational resource" data-category="education" data-product="all">
            <div class="cs_res_img"><img src="/assets/img/dashboard/HCP%20Resources/Educational%20Resource.webp" alt="Educational Resource"><span class="cs_res_img_icon"><i class="fa-solid fa-file-lines"></i></span></div>
            <div class="cs_res_body">
              <h3>Educational Resource</h3>
              <span class="cs_res_category">Education</span>
              <span class="cs_res_meta">PDF &nbsp;|&nbsp; 1.0 MB &nbsp;|&nbsp; Updated Dec 18, 2023</span>
              <p class="cs_res_desc">Educational material to support healthcare professional understanding of PharmaCrop products.</p>
              <a href="/all-products" class="cs_res_tag">All Products</a>
              <div class="cs_res_actions">
                <a href="/assets/img/dashboard/HCP%20Resources/Educational%20Resource.webp" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View Resource</a>
                <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
              </div>
            </div>
          </div>
          <div class="cs_res_card" data-name="product overview document" data-category="product-resources" data-product="highland 25">
            <div class="cs_res_img"><img src="/assets/img/dashboard/HCP%20Resources/Product%20Overview%20Document.webp" alt="Product Overview Document"><span class="cs_res_img_icon"><i class="fa-solid fa-file-lines"></i></span></div>
            <div class="cs_res_body">
              <h3>Product Overview Document</h3>
              <span class="cs_res_category">Product Resources</span>
              <span class="cs_res_meta">PDF &nbsp;|&nbsp; 1.3 MB &nbsp;|&nbsp; Updated Dec 12, 2023</span>
              <p class="cs_res_desc">Product overview including key information and supporting resources for healthcare professionals.</p>
              <a href="/all-products?category=dried-flower" class="cs_res_tag">Related Product: Highland 25</a>
              <div class="cs_res_actions">
                <a href="/assets/img/dashboard/HCP%20Resources/Product%20Overview%20Document.webp" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View Resource</a>
                <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
              </div>
            </div>
          </div>
          <div class="cs_res_card" data-name="access information" data-category="prescribing-access" data-product="all">
            <div class="cs_res_img"><img src="/assets/img/dashboard/HCP%20Resources/Access%20Information.webp" alt="Access Information"><span class="cs_res_img_icon"><i class="fa-solid fa-file-lines"></i></span></div>
            <div class="cs_res_body">
              <h3>Access Information</h3>
              <span class="cs_res_category">Prescribing &amp; Access</span>
              <span class="cs_res_meta">PDF &nbsp;|&nbsp; 890 KB &nbsp;|&nbsp; Updated Dec 8, 2023</span>
              <p class="cs_res_desc">Information to support product access and ordering for healthcare professionals.</p>
              <a href="/all-products" class="cs_res_tag">All Products</a>
              <div class="cs_res_actions">
                <a href="/assets/img/dashboard/HCP%20Resources/Access%20Information.webp" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> View Resource</a>
                <a href="/contact"><i class="fa-solid fa-download"></i> Download</a>
              </div>
            </div>
          </div>
        </div>
        <div class="cs_res_empty" data-res-empty>
          <p>No resources match your filters. Try clearing them to see the full library.</p>
        </div>
      </div>
    </section>
    <!-- End Resource Grid -->
    <!-- Start Quick Links -->
    <style>
      .cs_res_links_section { padding: 0 0 70px; background: #fff; }
      .cs_res_links_row { display: flex; align-items: center; gap: 24px; background: #f7faf8; border-radius: 16px; padding: 30px; flex-wrap: wrap; }
      .cs_res_links_intro { flex: 1; min-width: 240px; }
      .cs_res_links_intro h3 { color: #024242; font-size: 20px; font-weight: 800; margin: 0 0 6px; }
      .cs_res_links_intro p { color: #666; font-size: 14px; margin: 0; }
      .cs_res_link_card { flex: 1; min-width: 220px; background: rgba(120,220,166,0.12); border-radius: 12px; padding: 20px; display: flex; align-items: center; justify-content: space-between; gap: 14px; text-decoration: none; }
      .cs_res_link_card.cs_res_link_alt { background: rgba(217,159,89,0.12); }
      .cs_res_link_icon { width: 40px; height: 40px; border-radius: 10px; background: #fff; color: #024242; display: flex; align-items: center; justify-content: center; font-size: 16px; flex: none; }
      .cs_res_link_card h4 { color: #024242; font-size: 15px; font-weight: 800; margin: 0 0 4px; }
      .cs_res_link_card p { color: #666; font-size: 12.5px; margin: 0; }
      .cs_res_link_go { width: 34px; height: 34px; border-radius: 50%; background: #fff; color: #024242; display: flex; align-items: center; justify-content: center; font-size: 13px; flex: none; }
      @media (max-width: 767px) {
        .cs_res_links_row { flex-direction: column; align-items: stretch; }
      }
    </style>
    <section class="cs_res_links_section">
      <div class="container">
        <div class="cs_res_links_row wow fadeInUp">
          <div class="cs_res_links_intro">
            <h3>Looking for specific product information?</h3>
            <p>Explore our product portfolio or browse all documents and downloads.</p>
          </div>
          <a href="/all-products" class="cs_res_link_card">
            <span class="cs_res_link_icon"><i class="fa-solid fa-cubes"></i></span>
            <span style="flex:1;">
              <h4>Product Portfolio</h4>
              <p>Explore all PharmaCrop products and product information.</p>
            </span>
            <span class="cs_res_link_go"><i class="fa-solid fa-arrow-right"></i></span>
          </a>
          <a href="/faq" class="cs_res_link_card cs_res_link_alt">
            <span class="cs_res_link_icon"><i class="fa-solid fa-download"></i></span>
            <span style="flex:1;">
              <h4>Documents &amp; Downloads</h4>
              <p>Browse all product monographs, certificates and supporting documents.</p>
            </span>
            <span class="cs_res_link_go"><i class="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </section>
    <!-- End Quick Links -->
    <!-- Start CTA -->
    <style>
      .cs_res_cta_section { padding: 70px 0; background: #024242 url('/assets/img/dashboard/working%20together.webp') center center / cover no-repeat; }
      .cs_res_cta_row { display: flex; align-items: center; justify-content: space-between; gap: 30px; flex-wrap: wrap; }
      .cs_res_cta_eyebrow { display: block; color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
      .cs_res_cta_row h2 { color: #fff; font-size: 32px; font-weight: 800; margin: 0 0 10px; max-width: 560px; }
      .cs_res_cta_row p { color: rgba(255,255,255,0.75); font-size: 15px; margin: 0; max-width: 480px; }
      .cs_res_cta_btn { display: inline-flex; align-items: center; gap: 10px; background: #fff; color: #024242; font-weight: 700; font-size: 14px; padding: 16px 28px; border-radius: 30px; text-decoration: none; white-space: nowrap; }
      .cs_res_cta_btn:hover { background: #78dca6; }
    </style>
    <section class="cs_res_cta_section">
      <div class="container">
        <div class="cs_res_cta_row wow fadeInUp">
          <div>
            <span class="cs_res_cta_eyebrow">Working Together</span>
            <h2>Better access. Better outcomes.</h2>
            <p>Supporting healthcare professionals with trusted medicinal cannabis products and resources.</p>
          </div>
          <a href="/about-us" class="cs_res_cta_btn">Explore our approach <i class="fa-solid fa-arrow-right"></i></a>
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
    <Script id="cs_hcp_resources_script" strategy="afterInteractive">
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

          var grid = document.querySelector('[data-res-grid]');
          var cards = Array.prototype.slice.call(document.querySelectorAll('.cs_res_card'));
          var pills = Array.prototype.slice.call(document.querySelectorAll('[data-res-pill]'));
          var categorySelect = document.querySelector('[data-res-category-select]');
          var productSelect = document.querySelector('[data-res-product]');
          var sortSelect = document.querySelector('[data-res-sort]');
          var searchInput = document.querySelector('[data-res-search]');
          var countEl = document.querySelector('[data-res-count]');
          var emptyEl = document.querySelector('[data-res-empty]');
          var viewBtns = Array.prototype.slice.call(document.querySelectorAll('[data-res-view]'));
          var originalOrder = cards.slice();

          function setPillActive(category) {
            pills.forEach(function (p) {
              p.classList.toggle('active', p.getAttribute('data-res-pill') === category);
            });
          }

          function applyFilters() {
            var category = categorySelect.value;
            var product = productSelect.value;
            var query = searchInput.value.trim().toLowerCase();
            var visibleCount = 0;

            cards.forEach(function (card) {
              var matchesCategory = category === 'all' || card.getAttribute('data-category') === category;
              var matchesProduct = product === 'all' || card.getAttribute('data-product') === product;
              var matchesSearch = !query || card.getAttribute('data-name').indexOf(query) !== -1;
              var visible = matchesCategory && matchesProduct && matchesSearch;
              card.style.display = visible ? '' : 'none';
              if (visible) visibleCount++;
            });

            countEl.textContent = visibleCount + (visibleCount === 1 ? ' RESOURCE' : ' RESOURCES');
            emptyEl.style.display = visibleCount === 0 ? 'block' : 'none';
            grid.style.display = visibleCount === 0 ? 'none' : 'grid';
          }

          pills.forEach(function (pill) {
            pill.addEventListener('click', function () {
              var category = pill.getAttribute('data-res-pill');
              categorySelect.value = category;
              setPillActive(category);
              applyFilters();
            });
          });

          categorySelect.addEventListener('change', function () {
            setPillActive(categorySelect.value);
            applyFilters();
          });
          productSelect.addEventListener('change', applyFilters);
          searchInput.addEventListener('input', applyFilters);

          sortSelect.addEventListener('change', function () {
            var mode = sortSelect.value;
            var ordered = mode === 'name'
              ? originalOrder.slice().sort(function (a, b) { return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name')); })
              : originalOrder;
            ordered.forEach(function (card) { grid.appendChild(card); });
          });

          viewBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
              viewBtns.forEach(function (b) { b.classList.remove('active'); });
              btn.classList.add('active');
              grid.classList.toggle('cs_res_grid_list', btn.getAttribute('data-res-view') === 'list');
            });
          });

          var searchToggle = document.querySelector('[data-res-search-toggle]');
          if (searchToggle) {
            searchToggle.addEventListener('click', function () {
              searchInput.focus();
            });
          }
        })();
      `}
    </Script>
    </>
  );
}
