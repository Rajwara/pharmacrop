export const metadata = {
  title: "Environmental Precision - PharmaCrop",
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <!-- Start Preloader -->
    <div class="cs_preloader" style="background-color:#000;">
      <img src="/assets/img/General Images/Branding/pharma_Crop_logo_loader.gif" alt="Loading" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(70vw,480px);height:auto;">
    </div>
    <!-- End Preloader -->
    <!-- Start Header Section -->
    <header class="cs_site_header cs_style_1 cs_sticky_header">
      <div class="cs_main_header">
        <div class="container">
          <div class="cs_main_header_in">
            <div class="cs_main_header_left">
              <a class="cs_site_branding" href="/">
                <img src="/assets/img/General Images/Branding/pharmacrop-logo-header-animation.gif" alt="Logo" class="cs_logo_img cs_logo_gif">
              </a>
            </div>
            <div class="cs_main_header_center">
              <div class="cs_nav cs_heading_color">
                <nav class="cs_nav_list_wrap text-uppercase">
                  <ul class="cs_nav_list">
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/our-team">Our Team</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/partnerships">Partnerships</a></li>
                    <li><a href="https://aleafiate.com.au/meet-our-prescribing-practitioners/" target="_blank" rel="noopener">See Our Doctors</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="cs_main_header_right">
              <a href="/portals" class="cs_header_login_btn">HCP Portals</a>
              <a href="/contact" class="cs_header_cta_btn" aria-label="Contact Us"><i class="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header Section -->
    <!-- Start Page Heading Section -->
    <section class="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg" data-src="/assets/img/Home/Precision%20Cultivation/Environmental%20Precision.webp">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active">Environmental Precision</li>
        </ol>
        <h1 class="cs_page_title mb-0 cs_fs_80 wow fadeInUp">UNDERSTANDING NATURE.<br>CONTROLLING THE CONDITIONS.</h1>
      </div>
    </section>
    <!-- End Page Heading Section -->
    <!-- Start Article Intro Section -->
    <style>
      .cs_article_section { padding: 90px 0; }
      .cs_article_section.cs_article_alt { background: #f7faf8; }
      .cs_article_eyebrow_wrap { text-align: center; margin-bottom: 24px; }
      .cs_article_eyebrow { display: inline-flex; align-items: center; padding: 8px 22px; border: 1px solid rgba(2, 66, 66, 0.18); border-radius: 30px; background: #fff; color: #024242; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
      .cs_article_intro { max-width: 760px; margin: 0 auto; text-align: center; }
      .cs_article_intro p { color: #444; font-size: 18px; line-height: 1.85; margin: 0 0 22px; }
      .cs_article_intro p:last-child { margin-bottom: 0; }
      .cs_feature_row { display: flex; align-items: center; gap: 64px; }
      .cs_feature_row.cs_feature_row_rev { flex-direction: row-reverse; }
      .cs_feature_img { flex: 0 0 44%; border-radius: 16px; overflow: hidden; }
      .cs_feature_img img { width: 100%; height: 400px; object-fit: cover; display: block; }
      .cs_feature_content { flex: 1; }
      .cs_feature_icon { width: 54px; height: 54px; border-radius: 14px; background: rgba(120,220,166,0.18); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 22px; }
      .cs_feature_content h2 { color: #024242; font-size: 28px; font-weight: 800; margin: 0 0 18px; }
      .cs_feature_content p { color: #555; font-size: 16px; line-height: 1.8; margin: 0 0 16px; }
      .cs_feature_content p:last-child { margin-bottom: 0; }
      .cs_feature_stack { display: flex; flex-direction: column; gap: 90px; }
      @media (max-width: 991px) {
        .cs_feature_row, .cs_feature_row.cs_feature_row_rev { flex-direction: column; gap: 32px; }
        .cs_feature_img { flex: none; width: 100%; }
        .cs_feature_img img { height: 280px; }
      }
      @media (max-width: 575px) {
        .cs_article_section { padding: 60px 0; }
        .cs_feature_content h2 { font-size: 24px; }
        .cs_article_intro p { font-size: 16px; }
      }
    </style>
    <section class="cs_article_section">
      <div class="container">
        <div class="cs_article_eyebrow_wrap wow fadeInUp">
          <span class="cs_article_eyebrow">Precision Cultivation</span>
        </div>
        <div class="cs_article_intro wow fadeInUp">
          <p>At PharmaCrop, environmental precision goes beyond monitoring temperature and humidity. It requires understanding how growing conditions interact, how individual cultivars respond and how subtle variations can influence plant development.</p>
          <p>Our hybrid greenhouse systems combine natural sunlight with carefully managed environmental conditions, allowing us to support plant health, flower development and consistent cultivation outcomes.</p>
        </div>
      </div>
    </section>
    <!-- End Article Intro Section -->
    <!-- Start Environmental Precision Detail Sections -->
    <section class="cs_article_section cs_article_alt">
      <div class="container">
        <div class="cs_feature_stack">
          <div class="cs_feature_row wow fadeInUp">
            <div class="cs_feature_img">
              <img src="/assets/img/Our-Facilities/2.webp" alt="Staff inspecting cannabis plants in the greenhouse">
            </div>
            <div class="cs_feature_content">
              <span class="cs_feature_icon"><i class="fa-solid fa-wind"></i></span>
              <h2>Precision Beyond the Parameters</h2>
              <p>Light, temperature, humidity and airflow each play an important role in plant development. But it is the relationship between these factors that makes environmental management critical.</p>
              <p>Even within a controlled greenhouse, subtle variations can occur across different growing areas. Understanding these differences allows us to make informed adjustments and refine conditions throughout the crop cycle.</p>
              <p>Rather than relying solely on fixed environmental settings, our approach combines continuous monitoring with responsive management to support consistent growing conditions.</p>
            </div>
          </div>
          <div class="cs_feature_row cs_feature_row_rev wow fadeInUp">
            <div class="cs_feature_img">
              <img src="/assets/img/Our-Facilities/our%20facility%203.webp" alt="Staff closely inspecting a flowering cannabis plant">
            </div>
            <div class="cs_feature_content">
              <span class="cs_feature_icon"><i class="fa-solid fa-temperature-half"></i></span>
              <h2>Balancing Temperature, Humidity &amp; Airflow</h2>
              <p>Maintaining appropriate environmental conditions throughout flowering requires a careful balance between plant development and the management of moisture-related risks.</p>
              <p>While excessive humidity can increase the risk of microbial growth, overly dry conditions can affect the physical integrity of delicate flower structures.</p>
              <p>By carefully managing temperature, humidity and airflow, we maintain conditions that support healthy flower development while protecting the quality of the crop.</p>
              <p>Our approach recognises that environmental precision is not simply about maintaining a particular temperature or humidity level, but understanding how these conditions work together.</p>
            </div>
          </div>
          <div class="cs_feature_row wow fadeInUp">
            <div class="cs_feature_img">
              <img src="/assets/img/Our-Facilities/3.webp" alt="Technician carrying a tray of propagated clones">
            </div>
            <div class="cs_feature_content">
              <span class="cs_feature_icon"><i class="fa-solid fa-dna"></i></span>
              <h2>Conditions Tailored to the Cultivar</h2>
              <p>Different cannabis cultivars respond differently to their growing environment.</p>
              <p>Our approach recognises that consistent quality is not achieved by applying identical conditions to every crop, but by understanding the requirements of the genetics being cultivated.</p>
              <p>Through careful environmental monitoring and ongoing observation, we refine growing conditions to support the development of each cultivar&rsquo;s individual characteristics.</p>
            </div>
          </div>
          <div class="cs_feature_row cs_feature_row_rev wow fadeInUp">
            <div class="cs_feature_img">
              <img src="/assets/img/Our-Facilities/our%20facility%206.webp" alt="Potted cannabis plants on greenhouse benches">
            </div>
            <div class="cs_feature_content">
              <span class="cs_feature_icon"><i class="fa-solid fa-chart-line"></i></span>
              <h2>Continuous Environmental Refinement</h2>
              <p>Environmental precision is an ongoing process of measurement, evaluation and improvement.</p>
              <p>By monitoring growing conditions throughout each crop cycle, we develop a deeper understanding of how environmental factors influence plant development.</p>
              <p>These insights inform adjustments to our environmental management practices, helping us manage variability and strengthen consistency across successive crops.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Environmental Precision Detail Sections -->
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
      .cs_footer_v2_badges { display: inline-flex; align-items: center; padding: 8px 6px; border: 1px solid rgba(2, 66, 66, 0.15); border-radius: 40px; background: #fff; }
      .cs_footer_v2_badge { display: flex; align-items: center; gap: 10px; padding: 0 18px; position: relative; }
      .cs_footer_v2_badge + .cs_footer_v2_badge::before { content: ""; position: absolute; left: 0; top: 4px; bottom: 4px; width: 1px; background: rgba(2, 66, 66, 0.15); }
      .cs_footer_v2_badge_img { width: 42px; height: 42px; object-fit: contain; flex: none; }
      .cs_footer_v2_badge_label { font-size: 11px; letter-spacing: 0.3px; text-transform: uppercase; color: rgba(2, 66, 66, 0.65); font-weight: 700; white-space: nowrap; }
      @media (max-width: 991px) {
        .cs_footer_v2_row { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_footer_v2_row { grid-template-columns: 1fr; }
        .cs_footer_v2_bottom { flex-direction: column; align-items: flex-start; }
        .cs_footer_v2_badge { padding: 0 12px; gap: 7px; }
        .cs_footer_v2_badge_img { width: 32px; height: 32px; }
        .cs_footer_v2_badge_label { font-size: 10px; }
      }
    </style>
    <footer class="cs_footer_v2">
      <div class="container">
        <div class="cs_footer_v2_row">
          <div>
            <img src="/assets/img/General Images/Branding/pharmacrop-logo-footer-animation.gif" alt="Logo" class="wow zoomIn cs_logo_img cs_logo_gif">
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
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/partnerships">Partnerships</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/our-facilities">Our Facility</a></li>
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
              <img src="/assets/img/General Images/Certifications/AUSTRALIAN-MADE.png" alt="Australian Made" class="cs_footer_v2_badge_img">
              <span class="cs_footer_v2_badge_label">Australian Made</span>
            </div>
            <div class="cs_footer_v2_badge">
              <img src="/assets/img/General Images/Certifications/GMP-CERTIFIED.png" alt="GMP Certified" class="cs_footer_v2_badge_img">
              <span class="cs_footer_v2_badge_label">GMP Certified</span>
            </div>
            <div class="cs_footer_v2_badge">
              <img src="/assets/img/General Images/Certifications/TGA-LICENSED.png" alt="TGA Licensed" class="cs_footer_v2_badge_img">
              <span class="cs_footer_v2_badge_label">TGA Licensed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer Section -->
`,
      }}
    />
  );
}
