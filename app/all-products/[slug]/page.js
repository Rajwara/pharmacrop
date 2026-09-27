import Script from "next/script";

export const metadata = {
  title: "Product - PharmaCrop HCP Portal",
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
                <a href="/" data-logout-link>Sign Out</a>
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
      .cs_pd_eyebrow { display: block; color: #024242; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
      .cs_pd_hero h1 { color: #024242; font-size: 40px; font-weight: 800; margin: 0 0 6px; }
      .cs_pd_category { display: block; color: #78dca6; font-weight: 700; font-size: 15px; margin-bottom: 18px; }
      .cs_pd_desc { color: #666; font-size: 15px; line-height: 1.7; margin: 0 0 26px; }
      .cs_pd_stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 30px; }
      .cs_pd_stat { display: flex; align-items: center; gap: 10px; }
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
        .cs_pd_stats { grid-template-columns: repeat(2, 1fr); }
      }
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
      .cs_pd_cultivar_grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
      .cs_pd_cultivar_card { background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 12px; padding: 24px; }
      .cs_pd_cultivar_icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(120,220,166,0.15); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 16px; margin-bottom: 16px; }
      .cs_pd_cultivar_card h4 { color: #024242; font-size: 15px; font-weight: 800; margin: 0 0 10px; }
      .cs_pd_cultivar_card p { color: #666; font-size: 13.5px; line-height: 1.7; margin: 0; }
      @media (max-width: 767px) {
        .cs_pd_cultivar_grid { grid-template-columns: 1fr; }
      }
      .cs_pd_pack_row { display: flex; align-items: stretch; gap: 24px; }
      .cs_pd_pack_img { flex: 0 0 42%; border-radius: 14px; overflow: hidden; }
      .cs_pd_pack_img img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 200px; }
      .cs_pd_pack_table { flex: 1; }
      @media (max-width: 767px) {
        .cs_pd_pack_row { flex-direction: column; }
      }
      .cs_pd_prof_row { display: flex; gap: 40px; align-items: flex-start; }
      .cs_pd_prof_row .cs_pd_section_head { flex: 0 0 320px; margin-bottom: 0; }
      .cs_pd_prof_row p.cs_pd_prof_text { flex: 1; color: #666; font-size: 15px; line-height: 1.7; margin: 0; }
      @media (max-width: 767px) {
        .cs_pd_prof_row { flex-direction: column; gap: 16px; }
      }
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
      .cs_pd_loading { text-align: center; padding: 80px 20px; color: #999; }
    </style>
    <div data-pd-content>
      <div class="cs_pd_loading">Loading product...</div>
    </div>
    <!-- End Product Detail -->
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
`,
      }}
    />
    <Script id="cs_product_detail_script" strategy="afterInteractive">
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

          var FALLBACK_IMG = '/assets/img/dashboard/Dried%20Flower%20Category.webp';

          function mapProduct(raw) {
            var acf = raw.acf || {};
            var media = raw._embedded && raw._embedded['wp:featuredmedia'] && raw._embedded['wp:featuredmedia'][0];
            var image = (media && media.source_url) || FALLBACK_IMG;
            var altImage = (typeof acf.alt_image === 'string' && acf.alt_image.indexOf('http') === 0) ? acf.alt_image : image;
            var categorySlug = acf.category || 'uncategorised';
            var category = formatLabel(categorySlug);
            return {
              slug: raw.slug,
              name: (raw.title && raw.title.rendered) || '',
              categorySlug: categorySlug,
              category: category,
              dosageForm: category,
              thc: acf.thc || '—',
              cbd: acf.cbd || '—',
              packSize: acf.pack_size || '—',
              quantity: acf.quantity || '—',
              presentation: acf.presentation || '—',
              otherCharacteristics: acf.other_characteristics || '',
              typeLabel: acf.type_label || 'Type',
              typeFieldLabel: acf.type_label || 'Type',
              typeValue: acf.type_value || '—',
              typeDesc: acf.type_desc || '',
              cannabinoid: acf.cannabinoid || '',
              image: image,
              altImage: altImage,
            };
          }

          function relatedCardHtml(r) {
            return '<a href="/all-products/' + r.slug + '" class="cs_pd_related_card">' +
              '<div class="cs_pd_related_img"><img src="' + r.image + '" alt="' + r.name + '"></div>' +
              '<div class="cs_pd_related_body"><h4>' + r.name + '</h4><span>' + r.category + '</span>' +
              '<span class="cs_pd_related_spec">THC ' + r.thc + ' &nbsp;|&nbsp; CBD ' + r.cbd + '<br>' + r.packSize + '</span>' +
              '<span class="cs_pd_related_link">View Product <i class="fa-solid fa-arrow-right"></i></span></div></a>';
          }

          function renderContent(p, related) {
            var relatedHtml = related.map(relatedCardHtml).join('');
            var relatedSection = related.length ? (
              '<section style="padding: 0 0 70px; background: #fff;">' +
              '<div class="container">' +
              '<div class="cs_dash_section_head wow fadeInUp" style="display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:24px; gap:20px; flex-wrap:wrap;">' +
              '<div class="cs_pd_section_head" style="margin-bottom:0;"><h2>Related Products</h2><p>Explore other ' + p.category.toLowerCase() + ' products in our portfolio.</p></div>' +
              '<a href="/all-products?category=' + p.categorySlug + '" style="color:#024242; font-weight:700; font-size:14px; text-decoration:none;">View All ' + p.category + ' Products &rarr;</a>' +
              '</div>' +
              '<div class="cs_pd_related_grid">' + relatedHtml + '</div>' +
              '</div></section>'
            ) : '';

            return (
              '<div class="cs_pd_breadcrumb"><div class="container">' +
              '<a href="/all-products">Products</a> &gt; <a href="/all-products?category=' + p.categorySlug + '">' + p.category + '</a> &gt; <span class="current">' + p.name + '</span>' +
              '</div></div>' +
              '<section class="cs_pd_hero"><div class="container"><div class="cs_pd_hero_grid">' +
              '<div class="wow fadeInUp">' +
              '<div class="cs_pd_gallery_main"><img src="' + p.image + '" alt="' + p.name + '" data-pd-main-img></div>' +
              '<div class="cs_pd_gallery_thumbs">' +
              '<button type="button" class="active" data-pd-thumb="' + p.image + '"><img src="' + p.image + '" alt="' + p.name + ' thumbnail 1"></button>' +
              '<button type="button" data-pd-thumb="' + p.altImage + '"><img src="' + p.altImage + '" alt="' + p.name + ' thumbnail 2"></button>' +
              '</div></div>' +
              '<div class="wow fadeInUp" data-wow-delay="0.1s">' +
              '<span class="cs_pd_eyebrow">HCP Portal</span><h1>' + p.name + '</h1>' +
              '<span class="cs_pd_category">' + p.category + '</span>' +
              '<p class="cs_pd_desc">A premium ' + p.category.toLowerCase() + ' product, cultivated and processed to PharmaCrop’s high quality standards. ' + p.name + ' is available to healthcare professionals with detailed product information and supporting documentation.</p>' +
              '<div class="cs_pd_stats">' +
              '<div class="cs_pd_stat"><span class="cs_pd_stat_icon"><i class="fa-solid fa-leaf"></i></span><span><span class="label">THC</span><span class="value">' + p.thc + '</span></span></div>' +
              '<div class="cs_pd_stat"><span class="cs_pd_stat_icon"><i class="fa-solid fa-flask"></i></span><span><span class="label">CBD</span><span class="value">' + p.cbd + '</span></span></div>' +
              '<div class="cs_pd_stat"><span class="cs_pd_stat_icon"><i class="fa-solid fa-box"></i></span><span><span class="label">Pack Size</span><span class="value">' + p.packSize + '</span></span></div>' +
              '<div class="cs_pd_stat"><span class="cs_pd_stat_icon"><i class="fa-solid fa-gear"></i></span><span><span class="label">Dosage Form</span><span class="value">' + p.dosageForm + '</span></span></div>' +
              '</div>' +
              '<div class="cs_pd_ctas">' +
              '<a href="/contact" class="cs_pd_btn_primary"><i class="fa-solid fa-download"></i> Download Product Information <i class="fa-solid fa-arrow-right"></i></a>' +
              '<a href="#documents" class="cs_pd_btn_outline"><i class="fa-solid fa-file-lines"></i> View Documents</a>' +
              '</div><p class="cs_pd_note">For healthcare professionals only.</p>' +
              '</div></div></div></section>' +
              '<section style="padding: 60px 0; background: #fff;"><div class="container">' +
              '<div class="cs_pd_section_head wow fadeInUp"><h2>Product Overview</h2></div>' +
              '<div class="cs_pd_overview_row wow fadeInUp">' +
              '<div class="cs_pd_overview_text"><p>' + p.name + ' is a ' + p.category.toLowerCase() + ' product, cultivated and processed to meet PharmaCrop’s quality standards. This product is provided for healthcare professionals with detailed product information, including product specifications and supporting documentation.</p></div>' +
              '<div class="cs_pd_overview_img"><img src="' + p.altImage + '" alt="' + p.name + ' overview"></div>' +
              '</div></div></section>' +
              '<section style="padding: 60px 0; background: #f7faf8;"><div class="container">' +
              '<div class="cs_pd_section_head wow fadeInUp"><h2>Product Details</h2><p>Key product information and specifications for ' + p.name + '.</p></div>' +
              '<div class="cs_pd_details_grid">' +
              '<div class="cs_pd_table wow fadeInUp">' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-tag"></i><span class="k">Product Name</span><span class="v">' + p.name + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-leaf"></i><span class="k">Dosage Form</span><span class="v">' + p.dosageForm + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-flask"></i><span class="k">THC Strength</span><span class="v">' + p.thc + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-flask"></i><span class="k">CBD Strength</span><span class="v">' + p.cbd + '</span></div>' +
              '</div>' +
              '<div class="cs_pd_table wow fadeInUp" data-wow-delay="0.1s">' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-seedling"></i><span class="k">' + p.typeLabel + '</span><span class="v">' + p.typeValue + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-box-open"></i><span class="k">Presentation</span><span class="v">' + p.presentation + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-box"></i><span class="k">Pack Size</span><span class="v">' + p.packSize + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-list"></i><span class="k">Quantity</span><span class="v">' + p.quantity + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-file-lines"></i><span class="k">Other Product Characteristics</span><span class="v">' + p.otherCharacteristics + '</span></div>' +
              '</div></div></div></section>' +
              '<section style="padding: 60px 0; background: #fff;"><div class="container">' +
              '<div class="cs_pd_section_head wow fadeInUp"><h2>Cultivar Information</h2><p>Information about the cultivar and product characteristics.</p></div>' +
              '<div class="cs_pd_cultivar_grid">' +
              '<div class="cs_pd_cultivar_card wow fadeInUp"><div class="cs_pd_cultivar_icon"><i class="fa-solid fa-seedling"></i></div><h4>' + p.typeFieldLabel + '</h4><p>' + p.typeDesc + '</p></div>' +
              '<div class="cs_pd_cultivar_card wow fadeInUp" data-wow-delay="0.1s"><div class="cs_pd_cultivar_icon"><i class="fa-solid fa-diagram-project"></i></div><h4>Cannabinoid Composition</h4><p><strong>' + p.cannabinoid + '</strong><br>Full cannabinoid profile and additional analysis information is available in the product documentation.</p></div>' +
              '<div class="cs_pd_cultivar_card wow fadeInUp" data-wow-delay="0.2s"><div class="cs_pd_cultivar_icon"><i class="fa-solid fa-gear"></i></div><h4>Other Characteristics</h4><p>' + p.otherCharacteristics + ' Grown and processed in accordance with PharmaCrop’s quality standards.</p></div>' +
              '</div></div></section>' +
              '<section style="padding: 60px 0; background: #f7faf8;"><div class="container">' +
              '<div class="cs_pd_section_head wow fadeInUp"><h2>Presentation &amp; Packaging</h2><p>Product presentation and packaging details for ' + p.name + '.</p></div>' +
              '<div class="cs_pd_pack_row wow fadeInUp">' +
              '<div class="cs_pd_pack_img"><img src="' + p.image + '" alt="' + p.name + ' packaging"></div>' +
              '<div class="cs_pd_pack_table cs_pd_table">' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-box"></i><span class="k">Pack Size</span><span class="v">' + p.packSize + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-list"></i><span class="k">Quantity</span><span class="v">' + p.quantity + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-box-open"></i><span class="k">Presentation</span><span class="v">' + p.presentation + '</span></div>' +
              '<div class="cs_pd_table_row"><i class="fa-solid fa-leaf"></i><span class="k">Dosage Form</span><span class="v">' + p.dosageForm + '</span></div>' +
              '</div></div></div></section>' +
              '<section style="padding: 60px 0 30px; background: #fff;"><div class="container">' +
              '<div class="cs_pd_prof_row wow fadeInUp">' +
              '<div class="cs_pd_section_head"><h2>Professional Information</h2><p>Detailed product information for healthcare professionals.</p></div>' +
              '<p class="cs_pd_prof_text">Comprehensive professional information, including product specifications, analytical data and supporting documentation, is available for healthcare professionals. Please refer to the relevant documents below.</p>' +
              '</div></div></section>' +
              '<section id="documents" style="padding: 30px 0 60px; background: #fff; scroll-margin-top: 100px;"><div class="container">' +
              '<div class="cs_pd_section_head wow fadeInUp"><h2>Documents &amp; Downloads</h2><p>Access product information and supporting documentation.</p></div>' +
              '<div class="cs_pd_doc_grid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:20px;">' +
              '<div class="cs_pd_doc_card wow fadeInUp" style="background:#fff; border:1px solid rgba(2,66,66,0.1); border-radius:12px; padding:20px;">' +
              '<div class="cs_pd_doc_icon" style="width:34px;height:34px;border-radius:8px;background:rgba(120,220,166,0.15);color:#024242;display:flex;align-items:center;justify-content:center;font-size:14px;margin-bottom:14px;"><i class="fa-solid fa-file-lines"></i></div>' +
              '<h4 style="color:#024242;font-size:14px;font-weight:800;margin:0 0 4px;">Product Information</h4><span class="meta" style="color:#999;font-size:12px;display:block;margin-bottom:14px;">PDF</span>' +
              '<div style="display:flex; gap:16px;"><a href="' + p.image + '" target="_blank" rel="noopener" style="color:#024242;font-weight:700;font-size:12.5px;text-decoration:none;"><i class="fa-solid fa-eye"></i> View</a><a href="/contact" style="color:#024242;font-weight:700;font-size:12.5px;text-decoration:none;"><i class="fa-solid fa-download"></i> Download</a></div>' +
              '</div>' +
              '<div class="cs_pd_doc_card wow fadeInUp" style="background:#fff; border:1px solid rgba(2,66,66,0.1); border-radius:12px; padding:20px;">' +
              '<div class="cs_pd_doc_icon" style="width:34px;height:34px;border-radius:8px;background:rgba(120,220,166,0.15);color:#024242;display:flex;align-items:center;justify-content:center;font-size:14px;margin-bottom:14px;"><i class="fa-solid fa-file-lines"></i></div>' +
              '<h4 style="color:#024242;font-size:14px;font-weight:800;margin:0 0 4px;">Consumer Medicine Information</h4><span class="meta" style="color:#999;font-size:12px;display:block;margin-bottom:14px;">PDF</span>' +
              '<div style="display:flex; gap:16px;"><a href="' + p.altImage + '" target="_blank" rel="noopener" style="color:#024242;font-weight:700;font-size:12.5px;text-decoration:none;"><i class="fa-solid fa-eye"></i> View</a><a href="/contact" style="color:#024242;font-weight:700;font-size:12.5px;text-decoration:none;"><i class="fa-solid fa-download"></i> Download</a></div>' +
              '</div>' +
              '</div></div></section>' +
              relatedSection
            );
          }

          function wireGallery() {
            var mainImg = document.querySelector('[data-pd-main-img]');
            var thumbs = Array.prototype.slice.call(document.querySelectorAll('[data-pd-thumb]'));
            thumbs.forEach(function (btn) {
              btn.addEventListener('click', function () {
                thumbs.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                if (mainImg) mainImg.src = btn.getAttribute('data-pd-thumb');
              });
            });
          }

          var slug = window.location.pathname.split('/').filter(Boolean).pop();
          var content = document.querySelector('[data-pd-content]');

          fetch(WP_API_URL + '/wp-json/wp/v2/product?slug=' + encodeURIComponent(slug) + '&_embed')
            .then(function (res) { return res.ok ? res.json() : []; })
            .then(function (results) {
              if (!results || !results.length) {
                if (content) content.innerHTML = '<div class="cs_pd_loading"><p>Product not found.</p><a href="/all-products" class="cs_pd_btn_primary" style="display:inline-flex;">Back to All Products</a></div>';
                return;
              }
              var p = mapProduct(results[0]);
              document.title = p.name + ' - PharmaCrop HCP Portal';

              return fetch(WP_API_URL + '/wp-json/wp/v2/product?per_page=100&_embed')
                .then(function (res) { return res.ok ? res.json() : []; })
                .then(function (all) {
                  var related = (all || [])
                    .map(mapProduct)
                    .filter(function (r) { return r.categorySlug === p.categorySlug && r.slug !== p.slug; })
                    .slice(0, 4);

                  if (content) content.innerHTML = renderContent(p, related);
                  wireGallery();
                });
            })
            .catch(function () {
              if (content) content.innerHTML = '<div class="cs_pd_loading"><p>Could not load this product right now.</p></div>';
            });
        })();
      `}
    </Script>
    </>
  );
}
