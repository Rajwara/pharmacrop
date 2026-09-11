export const metadata = {
  title: "Login to Portal - PharmaCrop",
};

export default function Page() {
  return (
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
                <img src="/assets/img/pharmacrop-logo-header-animation.gif" alt="Logo" class="cs_logo_img cs_logo_gif">
              </a>
            </div>
            <div class="cs_main_header_center">
              <div class="cs_nav cs_heading_color">
                <nav class="cs_nav_list_wrap text-uppercase">
                  <ul class="cs_nav_list">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/partnerships">Partnerships</a></li>
                    <li><a href="/careers">Careers</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="cs_main_header_right">
              <a href="/login" class="cs_header_login_btn">Pharmacy Portal</a>
              <a href="/contact" class="cs_header_cta_btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header Section -->
    <!-- Start Portal Login Section -->
    <style>
      .cs_portal_section { position: relative; padding: 170px 0 130px; background: #024242; overflow: hidden; }
      .cs_portal_section::before { content: ""; position: absolute; top: -180px; right: -140px; width: 460px; height: 460px; border-radius: 50%; background: radial-gradient(circle, rgba(120,220,166,0.18) 0%, rgba(120,220,166,0) 70%); }
      .cs_portal_section::after { content: ""; position: absolute; bottom: -220px; left: -160px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(217,159,89,0.14) 0%, rgba(217,159,89,0) 70%); }
      .cs_portal_head { position: relative; z-index: 2; max-width: 680px; margin: 0 auto 64px; text-align: center; }
      .cs_portal_pill { display: inline-flex; align-items: center; padding: 8px 22px; border-radius: 30px; background: rgba(120, 220, 166, 0.15); border: 1px solid rgba(120, 220, 166, 0.35); color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 22px; }
      .cs_portal_head h1 { color: #fff; font-size: 46px; font-weight: 800; line-height: 1.2; margin: 0 0 18px; }
      .cs_portal_head h1 span { color: #78dca6; }
      .cs_portal_head p { color: rgba(255, 255, 255, 0.72); font-size: 17px; line-height: 1.7; margin: 0; }
      .cs_portal_grid { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
      .cs_portal_card { background: #fff; border-radius: 20px; padding: 46px 34px; text-align: center; transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease; box-shadow: 0 20px 50px rgba(2, 20, 20, 0.25); }
      .cs_portal_card:hover { transform: translateY(-10px); box-shadow: 0 30px 70px rgba(2, 20, 20, 0.35); }
      .cs_portal_icon { width: 84px; height: 84px; margin: 0 auto 26px; border-radius: 50%; background: rgba(120, 220, 166, 0.15); display: flex; align-items: center; justify-content: center; font-size: 32px; color: #024242; transition: background-color 0.4s ease, transform 0.4s ease, color 0.4s ease; }
      .cs_portal_card:hover .cs_portal_icon { background: #024242; color: #78dca6; transform: scale(1.08) rotate(-6deg); }
      .cs_portal_card h3 { color: #024242; font-size: 22px; font-weight: 800; margin: 0 0 12px; }
      .cs_portal_card p { color: #666; font-size: 14px; line-height: 1.7; margin: 0 0 30px; min-height: 68px; }
      .cs_portal_btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%; background: #024242; color: #fff; font-weight: 700; font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase; padding: 15px 20px; border-radius: 8px; text-decoration: none; transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease; }
      .cs_portal_btn:hover { background: #78dca6; color: #024242; transform: translateY(-2px); }
      .cs_portal_note { position: relative; z-index: 2; text-align: center; margin-top: 44px; }
      .cs_portal_note p { color: rgba(255, 255, 255, 0.55); font-size: 13px; margin: 0; }
      .cs_portal_note a { color: #78dca6; text-decoration: underline; }
      @media (max-width: 991px) {
        .cs_portal_grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
        .cs_portal_head h1 { font-size: 34px; }
        .cs_portal_section { padding: 130px 0 90px; }
      }
    </style>
    <section class="cs_portal_section">
      <div class="container">
        <div class="cs_portal_head">
          <span class="cs_portal_pill wow fadeInUp">PharmaCrop Portal</span>
          <h1 class="wow fadeInUp" data-wow-delay="0.1s">Choose How You&rsquo;d Like To <span>Sign In</span></h1>
          <p class="wow fadeInUp" data-wow-delay="0.2s">Select your role below to access the information and services relevant to you.</p>
        </div>
        <div class="cs_portal_grid">
          <div class="cs_portal_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_portal_icon"><i class="fa-solid fa-hospital-user"></i></div>
            <h3>Patient</h3>
            <p>Access your treatment information and stay connected with your care.</p>
            <a href="/contact" class="cs_portal_btn">
              Login as Patient
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_portal_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_portal_icon"><i class="fa-solid fa-user-doctor"></i></div>
            <h3>Doctor</h3>
            <p>Review product information and manage patient prescribing pathways.</p>
            <a href="/contact" class="cs_portal_btn">
              Login as Doctor
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_portal_card wow fadeInUp" data-wow-delay="0.3s">
            <div class="cs_portal_icon"><i class="fa-solid fa-mortar-pestle"></i></div>
            <h3>Pharmacist</h3>
            <p>Order products, track supply and manage your pharmacy account.</p>
            <a href="/contact" class="cs_portal_btn">
              Login as Pharmacist
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="cs_portal_note wow fadeInUp" data-wow-delay="0.4s">
          <p>Don&rsquo;t have portal access yet? <a href="/contact">Get in touch with our team</a>.</p>
        </div>
      </div>
    </section>
    <!-- End Portal Login Section -->
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
      .cs_footer_v2_badge_img { width: 30px; height: 30px; object-fit: contain; flex: none; }
      .cs_footer_v2_badge_label { font-size: 11px; letter-spacing: 0.3px; text-transform: uppercase; color: rgba(2, 66, 66, 0.65); font-weight: 700; white-space: nowrap; }
      .cs_footer_v2_tagline { display: flex; align-items: center; gap: 12px; color: rgba(2, 66, 66, 0.4); font-size: 12px; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; margin: 0; }
      .cs_footer_v2_tagline::before { content: ""; width: 30px; height: 1px; background: rgba(2, 66, 66, 0.3); }
      @media (max-width: 991px) {
        .cs_footer_v2_row { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_footer_v2_row { grid-template-columns: 1fr; }
        .cs_footer_v2_bottom { flex-direction: column; align-items: flex-start; }
        .cs_footer_v2_badge { padding: 0 12px; gap: 7px; }
        .cs_footer_v2_badge_img { width: 24px; height: 24px; }
        .cs_footer_v2_badge_label { font-size: 10px; }
      }
    </style>
    <footer class="cs_footer_v2">
      <div class="container">
        <div class="cs_footer_v2_row">
          <div>
            <img src="/assets/img/pharmacrop-logo-footer-animation.gif" alt="Logo" class="wow zoomIn cs_logo_img cs_logo_gif">
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
              <li><a href="/partnerships">Partnerships</a></li>
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
  );
}
