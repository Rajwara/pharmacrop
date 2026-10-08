export const metadata = {
  title: "Our Team - PharmaCrop",
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
    <!-- Start Page Heading Sectoin -->
    <section class="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg" data-src="/assets/img/General%20Images/Site%20Content/about_heading_bg.jpg">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active">Our Team</li>
        </ol>
        <h1 class="cs_page_title mb-0 cs_fs_80 wow fadeInUp">OUR TEAM</h1>
      </div>
    </section>
    <!-- End Page Heading Sectoin -->
    <!-- Start Team Expertise Section -->
    <style>
      .cs_team_section { padding: 110px 0; background: #f7faf8; }
      .cs_team_head { max-width: 700px; margin: 0 auto 60px; text-align: center; }
      .cs_team_eyebrow { display: block; color: #78dca6; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; font-size: 14px; margin-bottom: 14px; }
      .cs_team_head h2 { color: #024242; font-size: 38px; line-height: 1.25; margin: 0 0 20px; }
      .cs_team_head p { color: #666; font-size: 16px; line-height: 1.7; margin: 0; }
      .cs_team_grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; }
      .cs_team_card { flex: 0 1 340px; max-width: 340px; background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #eee; display: flex; flex-direction: column; transition: 0.3s; }
      .cs_team_card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(2,66,66,0.1); border-color: transparent; }
      .cs_team_photo { width: 100%; aspect-ratio: 1 / 1; overflow: hidden; }
      .cs_team_photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_team_body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
      .cs_team_name_row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin: 0 0 4px; }
      .cs_team_name { color: #024242; font-size: 19px; font-weight: 700; margin: 0; }
      .cs_team_title { color: #666; font-size: 13px; font-weight: 600; margin: 0 0 10px; }
      .cs_team_role { color: #78dca6; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 14px; }
      .cs_team_credential { color: #024242; font-size: 14px; line-height: 1.6; font-weight: 600; margin: 0 0 10px; }
      .cs_team_supporting { color: #666; font-size: 14px; line-height: 1.6; margin: 0; }
      .cs_team_social a { width: 28px; height: 28px; border-radius: 50%; background: rgba(120, 220, 166, 0.18); color: #024242; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; flex: none; transition: 0.3s; }
      .cs_team_social a:hover { background: #024242; color: #fff; }
      .cs_team_statement { margin-top: 56px; text-align: center; }
      .cs_team_statement p { color: #024242; font-size: 20px; font-style: italic; font-weight: 600; line-height: 1.6; max-width: 760px; margin: 0 auto; }
      @media (max-width: 767px) {
        .cs_team_section { padding: 80px 0; }
        .cs_team_head h2 { font-size: 28px; }
        .cs_team_card { flex-basis: 100%; }
        .cs_team_statement p { font-size: 17px; }
      }
    </style>
    <section class="cs_team_section">
      <div class="container">
        <div class="cs_team_head">
          <span class="cs_team_eyebrow">Our Team</span>
          <h2>EXPERIENCE ACROSS THE FULL JOURNEY</h2>
          <p>From science and cultivation through to pharmaceutical quality and commercialisation, our team brings experience across every stage of the journey.</p>
        </div>
        <div class="cs_team_grid">
          <div class="cs_team_card wow fadeInUp">
            <div class="cs_team_photo"><img src="/assets/img/About-Us/TEAM%20IMAGES/Team%20Image-Dr%20Adel%20Zarei.webp" alt="Dr Adel Zarei"></div>
            <div class="cs_team_body">
              <div class="cs_team_name_row">
                <h3 class="cs_team_name">Dr Adel Zarei</h3>
                <div class="cs_team_social"><a href="#" aria-label="Dr Adel Zarei on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div>
              </div>
              <p class="cs_team_title">Chief Operating Officer</p>
              <span class="cs_team_role">Research to Innovation</span>
              <p class="cs_team_credential">20+ publications. PhD in plant molecular biology.</p>
              <p class="cs_team_supporting">Converts science into commercially viable products.</p>
            </div>
          </div>
          <div class="cs_team_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_team_photo"><img src="/assets/img/About-Us/TEAM%20IMAGES/Team%20Image-Paul%20Barker.webp" alt="Paul Barker"></div>
            <div class="cs_team_body">
              <div class="cs_team_name_row">
                <h3 class="cs_team_name">Paul Barker</h3>
                <div class="cs_team_social"><a href="#" aria-label="Paul Barker on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div>
              </div>
              <p class="cs_team_title">Chief Financial Officer</p>
              <span class="cs_team_role">Finance to Foresight</span>
              <p class="cs_team_credential">25+ years across global finance, strategy and commercial leadership.</p>
              <p class="cs_team_supporting">Turns financial insight into confident business decisions.</p>
            </div>
          </div>
          <div class="cs_team_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_team_photo"><img src="/assets/img/About-Us/TEAM%20IMAGES/Team%20Image-George%20Polimenakos.webp" alt="George Polimenakos"></div>
            <div class="cs_team_body">
              <div class="cs_team_name_row">
                <h3 class="cs_team_name">George Polimenakos</h3>
                <div class="cs_team_social"><a href="#" aria-label="George Polimenakos on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div>
              </div>
              <p class="cs_team_title">General Manager Commercial</p>
              <span class="cs_team_role">Products to Patients</span>
              <p class="cs_team_credential">Global pharmaceutical and healthcare industry leadership.</p>
              <p class="cs_team_supporting">Turns pharmaceutical capability into sustainable commercial growth.</p>
            </div>
          </div>
          <div class="cs_team_card wow fadeInUp">
            <div class="cs_team_photo"><img src="/assets/img/About-Us/TEAM%20IMAGES/Team%20Image-Chad%20Esch.webp" alt="Chad Esch"></div>
            <div class="cs_team_body">
              <div class="cs_team_name_row">
                <h3 class="cs_team_name">Chad Esch</h3>
                <div class="cs_team_social"><a href="#" aria-label="Chad Esch on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div>
              </div>
              <p class="cs_team_title">Master Grower</p>
              <span class="cs_team_role">Cultivation to Consistency</span>
              <p class="cs_team_credential">International cultivation leadership across 3 continents.</p>
              <p class="cs_team_supporting">Delivers repeatable quality at scale.</p>
            </div>
          </div>
          <div class="cs_team_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_team_photo"><img src="/assets/img/About-Us/TEAM%20IMAGES/Team%20Image-Audrey%20Kuang.webp" alt="Audrey Kuang"></div>
            <div class="cs_team_body">
              <div class="cs_team_name_row">
                <h3 class="cs_team_name">Audrey Kuang</h3>
                <div class="cs_team_social"><a href="#" aria-label="Audrey Kuang on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div>
              </div>
              <p class="cs_team_title">Head of Quality</p>
              <span class="cs_team_role">Quality to Confidence</span>
              <p class="cs_team_credential">14+ years across laboratory science, validation and pharmaceutical quality.</p>
              <p class="cs_team_supporting">Builds confidence through rigorous pharmaceutical quality systems.</p>
            </div>
          </div>
          <div class="cs_team_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_team_photo"><img src="/assets/img/About-Us/TEAM%20IMAGES/Team%20Image-Carolyn%20Fennell.webp" alt="Carolyn Fennell"></div>
            <div class="cs_team_body">
              <div class="cs_team_name_row">
                <h3 class="cs_team_name">Carolyn Fennell</h3>
                <div class="cs_team_social"><a href="#" aria-label="Carolyn Fennell on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div>
              </div>
              <p class="cs_team_title">GMP Production Manager</p>
              <span class="cs_team_role">Flower to Medicine</span>
              <p class="cs_team_credential">20+ years across pharmaceutical manufacturing, compliance and GMP operations.</p>
              <p class="cs_team_supporting">Delivers pharmaceutical quality from harvest to finished medicine.</p>
            </div>
          </div>
          <div class="cs_team_card wow fadeInUp">
            <div class="cs_team_photo"><img src="/assets/img/About-Us/TEAM%20IMAGES/Team%20Image-Johanna%20Faccini.webp" alt="Johanna Faccini"></div>
            <div class="cs_team_body">
              <div class="cs_team_name_row">
                <h3 class="cs_team_name">Johanna Faccini</h3>
                <div class="cs_team_social"><a href="#" aria-label="Johanna Faccini on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div>
              </div>
              <p class="cs_team_title">Marketing Director</p>
              <span class="cs_team_role">Strategy to Growth</span>
              <p class="cs_team_credential">25+ years across pharmaceutical, healthcare and regulated markets.</p>
              <p class="cs_team_supporting">Turns market insight into strategy, brands and growth.</p>
            </div>
          </div>
          <div class="cs_team_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_team_photo"><img src="/assets/img/About-Us/TEAM%20IMAGES/Team%20Image-Suzanne%20Roberts.webp" alt="Suzanne Roberts"></div>
            <div class="cs_team_body">
              <div class="cs_team_name_row">
                <h3 class="cs_team_name">Suzanne Roberts</h3>
                <div class="cs_team_social"><a href="#" aria-label="Suzanne Roberts on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div>
              </div>
              <p class="cs_team_title">Sales Director</p>
              <span class="cs_team_role">Relationships to Results</span>
              <p class="cs_team_credential">15+ years across pharmaceutical and healthcare sales.</p>
              <p class="cs_team_supporting">Builds trusted partnerships that deliver commercial results.</p>
            </div>
          </div>
          <div class="cs_team_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_team_photo"><img src="/assets/img/About-Us/TEAM%20IMAGES/Team%20Image-Margs.webp" alt="Margaret Meldrum"></div>
            <div class="cs_team_body">
              <div class="cs_team_name_row">
                <h3 class="cs_team_name">Margaret Meldrum</h3>
                <div class="cs_team_social"><a href="#" aria-label="Margaret Meldrum on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div>
              </div>
              <p class="cs_team_title">Commercial Operations &amp; Supply Chain Manager</p>
              <span class="cs_team_role">Demand to Delivery</span>
              <p class="cs_team_credential">7+ years&rsquo; medicinal cannabis experience across commercial operations, product and supply chain.</p>
              <p class="cs_team_supporting">Connects demand, supply and distribution to ensure reliable product delivery.</p>
            </div>
          </div>
        </div>
        <div class="cs_team_statement wow fadeInUp">
          <p>&ldquo;Cannabinoid medicines sit at the intersection of science, cultivation and healthcare. So does our team.&rdquo;</p>
        </div>
      </div>
    </section>
    <!-- End Team Expertise Section -->
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
