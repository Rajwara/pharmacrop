import Script from "next/script";

export const metadata = {
  title: "Leafline - PharmaCrop",
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
    <!-- Start Header Section -->
    <header class="cs_site_header cs_style_1 cs_sticky_header">
      <div class="cs_main_header">
        <div class="container">
          <div class="cs_main_header_in">
            <div class="cs_main_header_left">
              <a class="cs_site_branding" href="/">
                <img src="/assets/img/logo-light.png" alt="Logo" class="cs_logo_img">
              </a>
            </div>
            <div class="cs_main_header_center">
              <div class="cs_nav cs_heading_color">
                <nav class="cs_nav_list_wrap text-uppercase">
                  <ul class="cs_nav_list">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/commercial-partnerships">Commercial Partnerships</a></li>
                    <li><a href="/careers">Careers</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="cs_main_header_right">
              <a href="/login" class="cs_header_login_btn">Login to Portal</a>
              <a href="/contact" class="cs_header_cta_btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header Section -->

    <!-- Start Leafline Hero -->
    <style>
      .cs_leaf_hero { position: relative; padding: 170px 0 130px; overflow: hidden; text-align: center; background: #032b2b; }
      .cs_leaf_hero_bg { position: absolute; inset: 0; background-image: url('/assets/Leafline/10047.jpg'); background-size: cover; background-position: center; opacity: 0.38; }
      .cs_leaf_hero_overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2,66,66,0.75) 0%, rgba(2,42,42,0.92) 100%); }
      .cs_leaf_hero_content { position: relative; z-index: 2; max-width: 780px; margin: 0 auto; }
      .cs_leaf_hero_tag { display: inline-block; padding: 6px 18px; border-radius: 30px; background: rgba(120,220,166,0.15); color: #78dca6; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 22px; border: 1px solid rgba(120,220,166,0.35); }
      .cs_leaf_hero h1 { color: #fff; font-size: 56px; line-height: 1.15; margin-bottom: 20px; }
      .cs_leaf_hero h1 span { color: #78dca6; }
      .cs_leaf_hero p { color: rgba(255,255,255,0.8); font-size: 18px; margin-bottom: 36px; }
      .cs_leaf_hero_btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
      .cs_leaf_btn_primary { background: #78dca6; color: #023232; padding: 15px 34px; border-radius: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; display: inline-block; transition: 0.3s; }
      .cs_leaf_btn_primary:hover { background: #d99f59; color: #fff; }
      .cs_leaf_btn_outline { border: 1px solid rgba(255,255,255,0.4); color: #fff; padding: 15px 34px; border-radius: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; display: inline-block; transition: 0.3s; }
      .cs_leaf_btn_outline:hover { background: #fff; color: #023232; }
      @media (max-width: 768px) { .cs_leaf_hero h1 { font-size: 36px; } }
    </style>
    <section class="cs_leaf_hero">
      <div class="cs_leaf_hero_bg"></div>
      <div class="cs_leaf_hero_overlay"></div>
      <div class="container cs_leaf_hero_content">
        <span class="cs_leaf_hero_tag wow fadeInUp">Leafline &mdash; Controlled-Environment Cultivation</span>
        <h1 class="wow fadeInUp" data-wow-delay="0.1s">Cultivated With Precision. <span>Manufactured to GMP Standard.</span></h1>
        <p class="wow fadeInUp" data-wow-delay="0.2s">Leafline is PharmaCrop's controlled-environment cultivation programme &mdash; where genetics, growing conditions and post-harvest handling are managed with the same discipline that carries through to our GMP-certified manufacturing floor.</p>
        <div class="cs_leaf_hero_btns wow fadeInUp" data-wow-delay="0.3s">
          <a href="/industry" class="cs_leaf_btn_primary">Explore Industry</a>
          <a href="/contact" class="cs_leaf_btn_outline">Partner With Us</a>
        </div>
      </div>
    </section>
    <!-- End Leafline Hero -->

    <!-- Start Leafline About -->
    <style>
      .cs_leaf_about { padding: 110px 0; background: #fff; }
      .cs_leaf_about_row { display: flex; align-items: center; gap: 60px; }
      .cs_leaf_about_img { flex: 0 0 44%; position: relative; border-radius: 12px; overflow: hidden; }
      .cs_leaf_about_img img { width: 100%; height: 460px; object-fit: cover; display: block; }
      .cs_leaf_about_badge { position: absolute; bottom: 24px; left: 24px; background: #fff; border-radius: 10px; padding: 18px 24px; box-shadow: 0 15px 35px rgba(0,0,0,0.12); }
      .cs_leaf_about_badge strong { display: block; font-size: 28px; color: #024242; line-height: 1; margin-bottom: 4px; }
      .cs_leaf_about_badge span { font-size: 13px; color: #666; text-transform: uppercase; letter-spacing: 1px; }
      .cs_leaf_about_text { flex: 1; }
      .cs_leaf_about_text .cs_section_subtitle { color: #78dca6; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; font-size: 14px; margin-bottom: 14px; display: block; }
      .cs_leaf_about_text h2 { color: #024242; font-size: 38px; margin-bottom: 20px; line-height: 1.25; }
      .cs_leaf_about_text p { color: #555; font-size: 16px; line-height: 1.8; margin-bottom: 18px; }
      .cs_leaf_about_list { list-style: none; padding: 0; margin: 0 0 28px; }
      .cs_leaf_about_list li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; color: #333; font-size: 15px; }
      .cs_leaf_about_list i { color: #78dca6; margin-top: 3px; }
      @media (max-width: 991px) { .cs_leaf_about_row { flex-direction: column; } .cs_leaf_about_img { flex: 0 0 100%; width: 100%; } }
    </style>
    <section class="cs_leaf_about">
      <div class="container">
        <div class="cs_leaf_about_row">
          <div class="cs_leaf_about_img wow fadeInUp">
            <img src="/assets/Leafline/10045.jpg" alt="Controlled-environment cultivation bay">
            <div class="cs_leaf_about_badge">
              <strong>100%</strong>
              <span>Australian-Grown</span>
            </div>
          </div>
          <div class="cs_leaf_about_text wow fadeInUp" data-wow-delay="0.1s">
            <span class="cs_section_subtitle">Our Growing Philosophy</span>
            <h2>Genetics-Led Cultivation, Hinterland-Honed</h2>
            <p>Every Leafline crop begins long before the first seedling is planted. Our team draws on cultivation expertise built in California, Canada and South Africa, then applies it within the specific conditions of the Noosa Hinterland &mdash; phenohunting each cultivar to select the plants best suited to consistent, high-quality production.</p>
            <p>From propagation through to harvest and post-processing, every stage is monitored and recorded, so the crop that leaves our growing bays carries the same traceability that follows it onto the GMP-certified manufacturing floor.</p>
            <ul class="cs_leaf_about_list">
              <li><i class="fa-solid fa-circle-check"></i> Extensive phenohunting &amp; cultivar selection</li>
              <li><i class="fa-solid fa-circle-check"></i> Controlled-environment growing bays</li>
              <li><i class="fa-solid fa-circle-check"></i> Full traceability from genetics to finished product</li>
            </ul>
            <a href="/about" class="cs_leaf_btn_primary">Read Our Story</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Leafline About -->

    <!-- Start Leafline Services -->
    <style>
      .cs_leaf_services { padding: 110px 0; background: #f7faf8; }
      .cs_leaf_services_head { text-align: center; max-width: 640px; margin: 0 auto 60px; }
      .cs_leaf_services_head span { color: #78dca6; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; font-size: 14px; display: block; margin-bottom: 14px; }
      .cs_leaf_services_head h2 { color: #024242; font-size: 38px; line-height: 1.25; }
      .cs_leaf_services_grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
      .cs_leaf_service_card { background: #fff; border-radius: 12px; padding: 40px 32px; transition: 0.3s; border: 1px solid #eee; }
      .cs_leaf_service_card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(2,66,66,0.1); border-color: transparent; }
      .cs_leaf_service_icon { width: 62px; height: 62px; border-radius: 50%; background: rgba(120,220,166,0.15); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; font-size: 24px; color: #024242; }
      .cs_leaf_service_card h3 { color: #024242; font-size: 20px; margin-bottom: 12px; }
      .cs_leaf_service_card p { color: #666; font-size: 15px; line-height: 1.7; margin: 0; }
      @media (max-width: 991px) { .cs_leaf_services_grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 600px) { .cs_leaf_services_grid { grid-template-columns: 1fr; } }
    </style>
    <section class="cs_leaf_services">
      <div class="container">
        <div class="cs_leaf_services_head wow fadeInUp">
          <span>What We Do</span>
          <h2>From Genetics to GMP-Certified Manufacturing</h2>
        </div>
        <div class="cs_leaf_services_grid">
          <div class="cs_leaf_service_card wow fadeInUp">
            <div class="cs_leaf_service_icon"><i class="fa-solid fa-dna"></i></div>
            <h3>Genetics &amp; Phenohunting</h3>
            <p>Selecting and evaluating cultivars against the traits that matter most for quality and consistency.</p>
          </div>
          <div class="cs_leaf_service_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_leaf_service_icon"><i class="fa-solid fa-seedling"></i></div>
            <h3>Controlled-Environment Cultivation</h3>
            <p>Purpose-built growing bays in the Noosa Hinterland, monitored through every stage of the crop cycle.</p>
          </div>
          <div class="cs_leaf_service_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_leaf_service_icon"><i class="fa-solid fa-hand-holding-droplet"></i></div>
            <h3>Harvest &amp; Post-Processing</h3>
            <p>Careful post-harvest handling that preserves quality from the growing bay through to processing.</p>
          </div>
          <div class="cs_leaf_service_card wow fadeInUp">
            <div class="cs_leaf_service_icon"><i class="fa-solid fa-flask"></i></div>
            <h3>Extraction &amp; Formulation</h3>
            <p>Turning cultivated material into consistent, reliable inputs for our finished product range.</p>
          </div>
          <div class="cs_leaf_service_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_leaf_service_icon"><i class="fa-solid fa-industry"></i></div>
            <h3>GMP-Certified Manufacturing</h3>
            <p>Structured quality systems combined with carefully managed hand-packing processes on-site.</p>
          </div>
          <div class="cs_leaf_service_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_leaf_service_icon"><i class="fa-solid fa-shield-halved"></i></div>
            <h3>Quality &amp; Compliance</h3>
            <p>Full traceability and TGA-aligned compliance from cultivar selection through to finished product.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Leafline Services -->
    <!-- Start Licensing Compliance Section -->
    <style>
      .cs_licensing_section { padding: 110px 0; background: #fff; }
      .cs_licensing_head { text-align: center; max-width: 680px; margin: 0 auto 60px; }
      .cs_licensing_head span { color: #78dca6; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; font-size: 14px; display: block; margin-bottom: 14px; }
      .cs_licensing_head h2 { color: #024242; font-size: 38px; line-height: 1.25; margin: 0 0 20px; }
      .cs_licensing_head p { color: #666; font-size: 16px; line-height: 1.7; margin: 0; }
      .cs_licensing_grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
      .cs_licensing_card { background: #f7faf8; border-radius: 12px; padding: 40px 32px; transition: 0.3s; border: 1px solid #eee; }
      .cs_licensing_card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(2,66,66,0.1); border-color: transparent; }
      .cs_licensing_icon { width: 62px; height: 62px; border-radius: 50%; background: rgba(120,220,166,0.15); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; font-size: 24px; color: #024242; }
      .cs_licensing_card h3 { color: #024242; font-size: 20px; margin-bottom: 12px; }
      .cs_licensing_card p { color: #666; font-size: 15px; line-height: 1.7; margin: 0; }
      .cs_licensing_statement { margin-top: 50px; text-align: center; padding: 28px 32px; border-radius: 12px; background: #024242; }
      .cs_licensing_statement p { color: #fff; font-size: 17px; font-weight: 600; line-height: 1.6; margin: 0 auto; max-width: 720px; }
      @media (max-width: 991px) { .cs_licensing_grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 600px) {
        .cs_licensing_grid { grid-template-columns: 1fr; }
        .cs_licensing_head h2 { font-size: 30px; }
        .cs_licensing_statement { padding: 24px; }
        .cs_licensing_statement p { font-size: 15px; }
      }
    </style>
    <section class="cs_licensing_section">
      <div class="container">
        <div class="cs_licensing_head wow fadeInUp">
          <span>Licensing &amp; Compliance</span>
          <h2>FULLY LICENSED ACROSS THE VALUE CHAIN</h2>
          <p>End-to-end regulatory capability supporting PharmaCrop from seed import and cultivation through to manufacturing, wholesale and global export.</p>
        </div>
        <div class="cs_licensing_grid">
          <div class="cs_licensing_card wow fadeInUp">
            <div class="cs_licensing_icon"><i class="fa-solid fa-dna"></i></div>
            <h3>Seed Import</h3>
            <p>ODC Import Permit supporting the regulated import of seed and genetic material.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_licensing_icon"><i class="fa-solid fa-seedling"></i></div>
            <h3>Cultivation</h3>
            <p>ODC Cultivation &amp; Production Licence supporting regulated Australian cultivation and production.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_licensing_icon"><i class="fa-solid fa-industry"></i></div>
            <h3>Manufacturing</h3>
            <p>TGA Licence to Manufacture Therapeutic Goods within PharmaCrop&rsquo;s Australian manufacturing platform.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp">
            <div class="cs_licensing_icon"><i class="fa-solid fa-box"></i></div>
            <h3>Packaging</h3>
            <p>GMP Manufacturing Licence supporting compliant pharmaceutical packaging and finished-product preparation.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_licensing_icon"><i class="fa-solid fa-warehouse"></i></div>
            <h3>Wholesale</h3>
            <p>ODC Wholesale Licence supporting regulated commercial supply across the cannabinoid medicines value chain.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_licensing_icon"><i class="fa-solid fa-globe"></i></div>
            <h3>Export</h3>
            <p>ODC Export Permit supporting international supply and regulated global market access.</p>
          </div>
        </div>
        <div class="cs_licensing_statement wow fadeInUp">
          <p>Licensed across the entire value chain to support Australian manufacturing and global supply.</p>
        </div>
      </div>
    </section>
    <!-- End Licensing Compliance Section -->

    <!-- Start Leafline Stats -->
    <style>
      .cs_leaf_stats { padding: 90px 0; background: #024242; }
      .cs_leaf_stats_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; text-align: center; }
      .cs_leaf_stat h3 { color: #78dca6; font-size: 48px; margin-bottom: 8px; }
      .cs_leaf_stat span { color: rgba(255,255,255,0.75); text-transform: uppercase; letter-spacing: 1.5px; font-size: 13px; }
      @media (max-width: 767px) { .cs_leaf_stats_grid { grid-template-columns: repeat(2, 1fr); row-gap: 40px; } }
    </style>
    <section class="cs_leaf_stats">
      <div class="container">
        <div class="cs_leaf_stats_grid">
          <div class="cs_leaf_stat wow fadeInUp"><h3>100%</h3><span>Australian-Grown</span></div>
          <div class="cs_leaf_stat wow fadeInUp" data-wow-delay="0.1s"><h3>1</h3><span>Integrated Hinterland Site</span></div>
          <div class="cs_leaf_stat wow fadeInUp" data-wow-delay="0.2s"><h3>GMP</h3><span>Certified Manufacturing</span></div>
          <div class="cs_leaf_stat wow fadeInUp" data-wow-delay="0.3s"><h3>3</h3><span>Continents of Cultivation Expertise</span></div>
        </div>
      </div>
    </section>
    <!-- End Leafline Stats -->

    <!-- Start Leafline Facilities -->
    <style>
      .cs_leaf_facilities { padding: 110px 0; background: #fff; }
      .cs_leaf_facilities_head { text-align: center; max-width: 640px; margin: 0 auto 60px; }
      .cs_leaf_facilities_head span { color: #78dca6; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; font-size: 14px; display: block; margin-bottom: 14px; }
      .cs_leaf_facilities_head h2 { color: #024242; font-size: 38px; }
      .cs_leaf_facilities_grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
      .cs_leaf_facility_card { position: relative; border-radius: 12px; overflow: hidden; height: 420px; }
      .cs_leaf_facility_card img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
      .cs_leaf_facility_card:hover img { transform: scale(1.08); }
      .cs_leaf_facility_overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2,42,42,0) 40%, rgba(2,42,42,0.92) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 28px; }
      .cs_leaf_facility_overlay span { color: #78dca6; text-transform: uppercase; font-size: 12px; letter-spacing: 1.5px; margin-bottom: 6px; }
      .cs_leaf_facility_overlay h3 { color: #fff; font-size: 21px; margin-bottom: 8px; }
      .cs_leaf_facility_overlay p { color: rgba(255,255,255,0.8); font-size: 14px; margin: 0; }
      @media (max-width: 991px) { .cs_leaf_facilities_grid { grid-template-columns: 1fr; } }
    </style>
    <section class="cs_leaf_facilities">
      <div class="container">
        <div class="cs_leaf_facilities_head wow fadeInUp">
          <span>Our Facilities</span>
          <h2>One Site. Every Stage.</h2>
        </div>
        <div class="cs_leaf_facilities_grid">
          <div class="cs_leaf_facility_card wow fadeInUp">
            <img src="/assets/Leafline/10046.jpg" alt="Genetics and propagation suite">
            <div class="cs_leaf_facility_overlay">
              <span>Stage 01</span>
              <h3>Genetics &amp; Propagation</h3>
              <p>Where cultivar selection and phenohunting begin.</p>
            </div>
          </div>
          <div class="cs_leaf_facility_card wow fadeInUp" data-wow-delay="0.1s">
            <img src="/assets/Leafline/10047.jpg" alt="Controlled-environment cultivation">
            <div class="cs_leaf_facility_overlay">
              <span>Stage 02</span>
              <h3>Controlled-Environment Cultivation</h3>
              <p>Purpose-built growing bays across the Noosa Hinterland site.</p>
            </div>
          </div>
          <div class="cs_leaf_facility_card wow fadeInUp" data-wow-delay="0.2s">
            <img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="GMP manufacturing facility">
            <div class="cs_leaf_facility_overlay">
              <span>Stage 03</span>
              <h3>GMP-Certified Manufacturing</h3>
              <p>Structured quality systems and careful hand-packing on-site.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Leafline Facilities -->

    <!-- Start Testimonial Section -->
    <style>
      .cs_testi_section { display: flex; min-height: 720px; }
      .cs_testi_left { flex: 0 0 50%; background: #f4f4f2; padding: 100px 60px; display: flex; flex-direction: column; justify-content: center; }
      .cs_testi_eyebrow { display: inline-flex; align-items: center; gap: 8px; border: 1px solid #d1d5c9; border-radius: 30px; padding: 6px 16px; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #4b5142; margin-bottom: 24px; width: fit-content; }
      .cs_testi_eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #024242; }
      .cs_testi_title { font-size: 44px; font-weight: 800; color: #024242; line-height: 1.2; margin: 0 0 20px; }
      .cs_testi_desc { color: #6b7280; font-size: 16px; line-height: 1.7; margin: 0 0 32px; max-width: 480px; }
      .cs_testi_btn { display: inline-block; background: #024242; color: #fff; font-weight: 700; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-size: 14px; width: fit-content; margin-bottom: 40px; }
      .cs_testi_card_wrap { position: relative; max-width: 480px; min-height: 320px; }
      .cs_testi_card { position: absolute; inset: 0; background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.07); opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; pointer-events: none; }
      .cs_testi_card.active { opacity: 1; transform: translateY(0); pointer-events: auto; }
      .cs_testi_card_head { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
      .cs_testi_avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
      .cs_testi_name { font-weight: 700; color: #024242; margin: 0; font-size: 16px; }
      .cs_testi_role { color: #8a9086; font-size: 14px; margin: 0; }
      .cs_testi_quote_mark { position: absolute; top: 24px; right: 24px; width: 44px; height: 44px; background: #024242; color: #78dca6; border-radius: 12px 12px 12px 0; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; }
      .cs_testi_stars { color: #d99f59; margin-bottom: 14px; font-size: 14px; letter-spacing: 2px; }
      .cs_testi_text { color: #4b5142; font-size: 15px; line-height: 1.7; margin: 0; }
      .cs_testi_dots { display: flex; gap: 8px; margin-top: 24px; }
      .cs_testi_dot { width: 8px; height: 8px; border-radius: 50%; background: #d1d5c9; cursor: pointer; border: none; padding: 0; transition: all 0.3s ease; }
      .cs_testi_dot.active { background: #024242; width: 24px; border-radius: 4px; }
      .cs_testi_right { flex: 0 0 50%; position: relative; overflow: hidden; }
      .cs_testi_right_img { position: absolute; inset: 0; opacity: 0; transition: opacity 1s ease, transform 6s ease; transform: scale(1.08); }
      .cs_testi_right_img.active { opacity: 1; transform: scale(1); }
      .cs_testi_right_img img { width: 100%; height: 100%; object-fit: cover; display: block; }
      @media (min-width: 992px) { .cs_testi_left { padding-left: calc((100vw - 960px) / 2 + 12px); } }
      @media (min-width: 1200px) { .cs_testi_left { padding-left: calc((100vw - 1140px) / 2 + 12px); } }
      @media (min-width: 1400px) { .cs_testi_left { padding-left: calc((100vw - 1320px) / 2 + 12px); } }
      @media (max-width: 991px) {
        .cs_testi_section { flex-direction: column; }
        .cs_testi_left, .cs_testi_right { flex: none; width: 100%; }
        .cs_testi_left { padding: 70px 24px; }
        .cs_testi_right { min-height: 420px; }
        .cs_testi_title { font-size: 32px; }
      }
    </style>
    <section class="cs_testi_section">
      <div class="cs_testi_left">
        <span class="cs_testi_eyebrow">OUR TESTIMONIALS</span>
        <h2 class="cs_testi_title">Trusted by Our Industry Partners</h2>
        <p class="cs_testi_desc">Hear from pharmacists, prescribers and distributors who've partnered with PharmaCrop &mdash; building reliable supply, consistent quality and long-term relationships through our GMP-certified operations.</p>
        <a href="/industry" class="cs_testi_btn">View All Partners</a>
        <div class="cs_testi_card_wrap" id="cs_testi_cards">
          <div class="cs_testi_card active" data-index="0">
            <span class="cs_testi_quote_mark">&rdquo;</span>
            <div class="cs_testi_card_head">
              <img src="/assets/Leafline/10004.jpg" class="cs_testi_avatar" alt="">
              <div>
                <p class="cs_testi_name">Amanda Reyes</p>
                <p class="cs_testi_role">Pharmacy Owner</p>
              </div>
            </div>
            <div class="cs_testi_stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="cs_testi_text">"PharmaCrop's integrated approach, from cultivation to GMP-certified manufacturing, gives us complete confidence in every batch we dispense."</p>
          </div>
          <div class="cs_testi_card" data-index="1">
            <span class="cs_testi_quote_mark">&rdquo;</span>
            <div class="cs_testi_card_head">
              <img src="/assets/Leafline/10007.jpg" class="cs_testi_avatar" alt="">
              <div>
                <p class="cs_testi_name">Marcus Webb</p>
                <p class="cs_testi_role">Distribution Partner</p>
              </div>
            </div>
            <div class="cs_testi_stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="cs_testi_text">"Reliable supply and consistent quality every time. PharmaCrop's integrated operation makes forecasting and logistics genuinely straightforward."</p>
          </div>
          <div class="cs_testi_card" data-index="2">
            <span class="cs_testi_quote_mark">&rdquo;</span>
            <div class="cs_testi_card_head">
              <img src="/assets/Leafline/10006.jpg" class="cs_testi_avatar" alt="">
              <div>
                <p class="cs_testi_name">Dr. Priya Nathan</p>
                <p class="cs_testi_role">Prescribing Clinician</p>
              </div>
            </div>
            <div class="cs_testi_stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="cs_testi_text">"Full traceability from cultivar to finished product gives me real confidence when discussing options with patients."</p>
          </div>
        </div>
        <div class="cs_testi_dots" id="cs_testi_dots">
          <button class="cs_testi_dot active" data-goto="0" aria-label="Testimonial 1"></button>
          <button class="cs_testi_dot" data-goto="1" aria-label="Testimonial 2"></button>
          <button class="cs_testi_dot" data-goto="2" aria-label="Testimonial 3"></button>
        </div>
      </div>
      <div class="cs_testi_right">
        <div class="cs_testi_right_img active" data-index="0"><img src="/assets/img/pharmacists.webp" alt=""></div>
        <div class="cs_testi_right_img" data-index="1"><img src="/assets/img/distributors.webp" alt=""></div>
        <div class="cs_testi_right_img" data-index="2"><img src="/assets/img/prescribers.webp" alt=""></div>
      </div>
    </section>
    <!-- End Testimonial Section -->

    <!-- Start Leafline CTA -->
    <style>
      .cs_leaf_cta { position: relative; padding: 130px 0; text-align: center; overflow: hidden; }
      .cs_leaf_cta_bg { position: absolute; inset: 0; background-image: url('/assets/img/ready-to-partner-with-pharmacrop.jpg'); background-size: cover; background-position: center; }
      .cs_leaf_cta_overlay { position: absolute; inset: 0; background: rgba(2,36,36,0.82); }
      .cs_leaf_cta_content { position: relative; z-index: 2; max-width: 680px; margin: 0 auto; }
      .cs_leaf_cta h2 { color: #fff; font-size: 40px; margin-bottom: 20px; }
      .cs_leaf_cta p { color: rgba(255,255,255,0.82); font-size: 17px; margin-bottom: 34px; }
      @media (max-width: 768px) { .cs_leaf_cta h2 { font-size: 28px; } }
    </style>
    <section class="cs_leaf_cta">
      <div class="cs_leaf_cta_bg"></div>
      <div class="cs_leaf_cta_overlay"></div>
      <div class="container cs_leaf_cta_content">
        <h2 class="wow fadeInUp">Ready to Partner With PharmaCrop?</h2>
        <p class="wow fadeInUp" data-wow-delay="0.1s">Whether you're a pharmacy, prescriber or distributor, our team is ready to talk about supply, product range and partnership.</p>
        <a href="/contact" class="cs_leaf_btn_primary wow fadeInUp" data-wow-delay="0.2s">Get In Touch</a>
      </div>
    </section>
    <!-- End Leafline CTA -->

    <!-- Start Leafline Blog -->
    <style>
      .cs_leaf_blog { padding: 110px 0; background: #fff; }
      .cs_leaf_blog_head { text-align: center; max-width: 640px; margin: 0 auto 60px; }
      .cs_leaf_blog_head span { color: #78dca6; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; font-size: 14px; display: block; margin-bottom: 14px; }
      .cs_leaf_blog_head h2 { color: #024242; font-size: 38px; }
      .cs_leaf_blog_grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
      .cs_leaf_blog_card { border-radius: 12px; overflow: hidden; border: 1px solid #eee; transition: 0.3s; }
      .cs_leaf_blog_card:hover { box-shadow: 0 20px 40px rgba(2,66,66,0.1); transform: translateY(-6px); }
      .cs_leaf_blog_card img { width: 100%; height: 220px; object-fit: cover; display: block; }
      .cs_leaf_blog_card_body { padding: 26px; }
      .cs_leaf_blog_meta { color: #78dca6; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-bottom: 10px; display: block; }
      .cs_leaf_blog_card h3 { color: #024242; font-size: 19px; line-height: 1.4; margin-bottom: 14px; }
      .cs_leaf_blog_card_link { color: #024242; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
      .cs_leaf_blog_card_link:hover { color: #78dca6; }
      @media (max-width: 991px) { .cs_leaf_blog_grid { grid-template-columns: 1fr; } }
    </style>
    <section class="cs_leaf_blog">
      <div class="container">
        <div class="cs_leaf_blog_head wow fadeInUp">
          <span>From the Journal</span>
          <h2>Latest From PharmaCrop</h2>
        </div>
        <div class="cs_leaf_blog_grid">
          <div class="cs_leaf_blog_card wow fadeInUp">
            <img src="/assets/img/hero_bg.jpg" alt="The Noosa Hinterland: Home of PharmaCrop">
            <div class="cs_leaf_blog_card_body">
              <span class="cs_leaf_blog_meta">Cultivation &middot; 11 Aug 2026</span>
              <h3>The Noosa Hinterland: Home of PharmaCrop</h3>
              <a href="/blog/noosa-hinterland-home-of-pharmacrop" class="cs_leaf_blog_card_link">Read More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div class="cs_leaf_blog_card wow fadeInUp" data-wow-delay="0.1s">
            <img src="/assets/img/video_block_bg.jpg" alt="From Genetics to GMP-Certified Manufacturing">
            <div class="cs_leaf_blog_card_body">
              <span class="cs_leaf_blog_meta">Manufacturing &middot; 18 Aug 2026</span>
              <h3>From Genetics to GMP-Certified Manufacturing</h3>
              <a href="/blog/from-genetics-to-gmp-certified-manufacturing" class="cs_leaf_blog_card_link">Read More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div class="cs_leaf_blog_card wow fadeInUp" data-wow-delay="0.2s">
            <img src="/assets/img/post_1.jpg" alt="Global Cultivation Expertise, Hinterland-Honed">
            <div class="cs_leaf_blog_card_body">
              <span class="cs_leaf_blog_meta">Cultivation &middot; 25 Aug 2026</span>
              <h3>Global Cultivation Expertise, Hinterland-Honed</h3>
              <a href="/blog/global-cultivation-expertise-hinterland-honed" class="cs_leaf_blog_card_link">Read More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Leafline Blog -->

    <!-- Start CTA Section -->
    <style>
      .cs_contact_card_section { padding: 100px 0; overflow: hidden; }
      .cs_contact_card { position: relative; min-height: 700px; display: flex; flex-direction: column; justify-content: space-between; padding: 40px; }
      .cs_contact_card_bg { position: absolute; top: 0; bottom: 0; left: 50%; width: 100vw; margin-left: -50vw; z-index: 0; }
      .cs_contact_card_bg img { width: 100%; height: 100%; object-fit: cover; }
      .cs_contact_card_bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2, 34, 34, 0.55) 0%, rgba(2, 34, 34, 0.25) 40%, rgba(2, 20, 20, 0.85) 100%); }
      .cs_contact_card_top { position: relative; z-index: 2; }
      .cs_contact_info_label { color: #fff; font-weight: 700; font-size: 16px; margin: 0 0 16px; }
      .cs_contact_pill { display: inline-flex; align-items: center; gap: 10px; background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(6px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 30px; padding: 10px 20px 10px 10px; color: #fff; text-decoration: none; font-size: 14px; margin-right: 12px; margin-bottom: 12px; }
      .cs_contact_pill_icon { width: 30px; height: 30px; border-radius: 50%; background: #78dca6; color: #024242; display: flex; align-items: center; justify-content: center; font-size: 13px; flex: none; }
      .cs_contact_card_bottom { position: relative; z-index: 2; }
      .cs_contact_eyebrow_row { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
      .cs_contact_eyebrow_icon { width: 32px; height: 32px; border-radius: 50%; background: #fff; color: #024242; display: flex; align-items: center; justify-content: center; font-size: 14px; }
      .cs_contact_eyebrow_text { color: #fff; font-weight: 700; font-size: 13px; letter-spacing: 1px; }
      .cs_contact_card_title { color: #fff; font-size: 44px; font-weight: 800; margin: 0 0 12px; line-height: 1.2; }
      .cs_contact_card_sub { color: rgba(255, 255, 255, 0.8); font-size: 16px; margin: 0 0 28px; max-width: 520px; }
      .cs_contact_form_bar { background: #fff; border-radius: 16px; padding: 20px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
      .cs_contact_form_bar input, .cs_contact_form_bar select { flex: 1; min-width: 180px; border: none; border-bottom: 1px solid #e5e5e5; padding: 12px 4px; font-size: 14px; color: #1f2419; outline: none; }
      .cs_contact_form_btn { background: #024242; color: #fff; font-weight: 700; padding: 16px 32px; border-radius: 8px; border: none; cursor: pointer; font-size: 13px; letter-spacing: 0.5px; white-space: nowrap; }
      @media (max-width: 767px) {
        .cs_contact_card_title { font-size: 30px; }
        .cs_contact_form_bar { flex-direction: column; align-items: stretch; }
        .cs_contact_form_btn { width: 100%; }
        .cs_contact_card_section { padding-bottom: 40px !important; }
      }
    </style>
    <section class="cs_contact_card_section">
      <div class="container">
        <div class="cs_contact_card">
          <div class="cs_contact_card_bg"><img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt=""></div>
          <div class="cs_contact_card_top">
            <p class="cs_contact_info_label">Speak With Our Team:</p>
            <a href="mailto:enquiries@pharmacrop.com.au" class="cs_contact_pill"><span class="cs_contact_pill_icon"><i class="fa-solid fa-envelope"></i></span>enquiries@pharmacrop.com.au</a>
            <a href="tel:1300053533" class="cs_contact_pill"><span class="cs_contact_pill_icon"><i class="fa-solid fa-phone"></i></span>1300 053 533</a>
          </div>
          <div class="cs_contact_card_bottom">
            <div class="cs_contact_eyebrow_row">
              <span class="cs_contact_eyebrow_icon"><i class="fa-solid fa-seedling"></i></span>
              <span class="cs_contact_eyebrow_text">PARTNER WITH PHARMACROP</span>
            </div>
            <h2 class="cs_contact_card_title">Ready To Explore A Commercial Partnership?</h2>
            <p class="cs_contact_card_sub">Connect with our team to discuss Australian-grown products, GMP manufacturing, commercial pathways and supply opportunities.</p>
            <form action="https://api.web3forms.com/submit" method="POST" class="cs_contact_form_bar">
              <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c">
              <input type="hidden" name="subject" value="New Enquiry - PharmaCrop Website">
              <input type="text" name="name" placeholder="Your Name" required>
              <input type="email" name="email" placeholder="Your Email" required>
              <select name="interest" defaultValue="">
                <option value="" disabled selected>Select Your Interest</option>
                <option value="Retail">Retail</option>
                <option value="Green Label">Green Label</option>
                <option value="White Label">White Label</option>
                <option value="Bulk Flower">Bulk Flower</option>
                <option value="Distribution / Export">Distribution / Export</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
              <button type="submit" class="cs_contact_form_btn">Let's Connect</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End CTA Section -->
    <!-- Start Footer Section -->
    <style>
      .cs_footer_v2 { background: #eee9e3; padding: 90px 0 0; position: relative; overflow: hidden; }
      .cs_footer_v2_row { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.2fr; gap: 40px; padding-bottom: 56px; border-bottom: 1px solid rgba(2, 66, 66, 0.12); position: relative; z-index: 1; }
      .cs_footer_v2_brand_tagline { color: #024242; font-size: 20px; font-weight: 700; margin: 20px 0 12px; line-height: 1.4; }
      .cs_footer_v2_desc { color: rgba(2, 66, 66, 0.6); font-size: 14px; line-height: 1.6; margin: 0 0 20px; max-width: 320px; }
      .cs_footer_v2_newsletter { display: flex; border: 1px solid rgba(2, 66, 66, 0.2); border-radius: 30px; padding: 6px 6px 6px 20px; background: #fff; max-width: 340px; }
      .cs_footer_v2_newsletter input { flex: 1; border: none; outline: none; font-size: 14px; background: transparent; min-width: 0; }
      .cs_footer_v2_newsletter button { width: 36px; height: 36px; border-radius: 50%; border: none; background: #024242; color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; flex: none; }
      .cs_footer_v2_privacy { color: rgba(2, 66, 66, 0.45); font-size: 12px; margin: 12px 0 0; }
      .cs_footer_v2_col_title { color: #024242; font-weight: 700; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; margin: 0 0 8px; }
      .cs_footer_v2_col_underline { display: block; width: 26px; height: 2px; background: #d99f59; margin-bottom: 20px; }
      .cs_footer_v2_list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
      .cs_footer_v2_list a { color: #024242; opacity: 0.75; font-size: 14px; text-decoration: none; }
      .cs_footer_v2_list a:hover { opacity: 1; text-decoration: underline; }
      .cs_footer_v2_touch_item { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
      .cs_footer_v2_touch_icon { width: 34px; height: 34px; border-radius: 50%; background: rgba(120, 220, 166, 0.25); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 13px; flex: none; }
      .cs_footer_v2_touch_item a { color: #024242; font-size: 14px; text-decoration: none; }
      .cs_footer_v2_touch_item a:hover { text-decoration: underline; }
      .cs_footer_v2_bottom { display: flex; align-items: center; justify-content: space-between; padding: 28px 0; flex-wrap: wrap; gap: 20px; position: relative; z-index: 1; }
      .cs_footer_v2_copyright { color: rgba(2, 66, 66, 0.55); font-size: 13px; margin: 0; }
      .cs_footer_v2_badges { display: flex; align-items: center; gap: 28px; }
      .cs_footer_v2_badge { display: flex; flex-direction: column; align-items: center; gap: 6px; }
      .cs_footer_v2_badge_img { width: 60px; height: 60px; object-fit: contain; }
      .cs_footer_v2_badge_label { font-size: 10px; letter-spacing: 0.5px; text-transform: uppercase; color: rgba(2, 66, 66, 0.55); font-weight: 700; }
      .cs_footer_v2_tagline { display: flex; align-items: center; gap: 12px; color: rgba(2, 66, 66, 0.4); font-size: 12px; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; margin: 0; }
      .cs_footer_v2_tagline::before { content: ""; width: 30px; height: 1px; background: rgba(2, 66, 66, 0.3); }
      @media (max-width: 991px) {
        .cs_footer_v2_row { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_footer_v2_row { grid-template-columns: 1fr; }
        .cs_footer_v2_bottom { flex-direction: column; align-items: flex-start; }
      }
    </style>
    <footer class="cs_footer_v2">
      <div class="container">
        <div class="cs_footer_v2_row">
          <div>
            <img src="/assets/img/logo-dark.webp" alt="Logo" class="wow zoomIn cs_logo_img">
            <p class="cs_footer_v2_brand_tagline">Australian-grown.<br>Pharmaceutical by design.</p>
            <p class="cs_footer_v2_desc">Stay updated with our latest news, insights and product developments.</p>
            <form action="#" class="cs_footer_v2_newsletter">
              <input type="email" placeholder="Enter your email address">
              <button type="submit" aria-label="Subscribe">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
                </svg>
              </button>
            </form>
            <p class="cs_footer_v2_privacy">We respect your privacy. No spam, ever.</p>
          </div>
          <div>
            <h4 class="cs_footer_v2_col_title">Explore</h4>
            <span class="cs_footer_v2_col_underline"></span>
            <ul class="cs_footer_v2_list">
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/commercial-partnerships">Commercial Partnerships</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="cs_footer_v2_col_title">Support</h4>
            <span class="cs_footer_v2_col_underline"></span>
            <ul class="cs_footer_v2_list">
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 class="cs_footer_v2_col_title">Get In Touch</h4>
            <span class="cs_footer_v2_col_underline"></span>
            <div class="cs_footer_v2_touch_item">
              <span class="cs_footer_v2_touch_icon"><i class="fa-solid fa-phone"></i></span>
              <a href="tel:1300053533">1300 053 533</a>
            </div>
            <div class="cs_footer_v2_touch_item">
              <span class="cs_footer_v2_touch_icon"><i class="fa-solid fa-envelope"></i></span>
              <a href="mailto:enquiries@pharmacrop.com.au">enquiries@pharmacrop.com.au</a>
            </div>
            <div class="cs_footer_v2_touch_item">
              <span class="cs_footer_v2_touch_icon"><i class="fa-brands fa-linkedin-in"></i></span>
              <a href="https://www.linkedin.com/company/pharmacrop" target="_blank" rel="noopener">Follow us on LinkedIn</a>
            </div>
          </div>
        </div>
        <div class="cs_footer_v2_bottom">
          <p class="cs_footer_v2_copyright">&copy; 2026 PharmaCrop. All rights reserved.</p>
          <div class="cs_footer_v2_badges">
            <div class="cs_footer_v2_badge">
              <img src="/assets/img/AUSTRALIAN-MADE.png" alt="Australian Made" class="cs_footer_v2_badge_img">
              <span class="cs_footer_v2_badge_label">Australian Made</span>
            </div>
            <div class="cs_footer_v2_badge">
              <img src="/assets/img/GMP-CERTIFIED.png" alt="GMP Certified" class="cs_footer_v2_badge_img">
              <span class="cs_footer_v2_badge_label">GMP Certified</span>
            </div>
            <div class="cs_footer_v2_badge">
              <img src="/assets/img/TGA-LICENSED.png" alt="TGA Licensed" class="cs_footer_v2_badge_img">
              <span class="cs_footer_v2_badge_label">TGA Licensed</span>
            </div>
          </div>
          <p class="cs_footer_v2_tagline">Bring Balance To Your Life</p>
        </div>
      </div>
    </footer>
    <!-- End Footer Section -->
`,
      }}
    />
    <Script id="cs_home_testi_slider_script" strategy="afterInteractive">
      {`
        (function () {
          var cards = document.querySelectorAll('#cs_testi_cards .cs_testi_card');
          var imgs = document.querySelectorAll('.cs_testi_right_img');
          var dots = document.querySelectorAll('#cs_testi_dots .cs_testi_dot');
          if (!cards.length) return;
          var idx = 0;
          var timer;
          function show(i) {
            cards.forEach(function (c, ci) { c.classList.toggle('active', ci === i); });
            imgs.forEach(function (im, ii) { im.classList.toggle('active', ii === i); });
            dots.forEach(function (d, di) { d.classList.toggle('active', di === i); });
            idx = i;
          }
          function next() {
            show((idx + 1) % cards.length);
          }
          function restart() {
            clearInterval(timer);
            timer = setInterval(next, 5000);
          }
          dots.forEach(function (d) {
            d.addEventListener('click', function () {
              show(parseInt(d.getAttribute('data-goto'), 10));
              restart();
            });
          });
          restart();
        })();
      `}
    </Script>
    </>
  );
}
