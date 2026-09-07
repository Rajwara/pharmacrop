export const metadata = {
  title: "PharmaCrop - Bring Balance To Your Life",
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
                <img src="/assets/img/logo-light.png" alt="Logo" class="cs_logo_img">
              </a>
            </div>
            <div class="cs_main_header_center">
              <div class="cs_nav cs_heading_color">
                <nav class="cs_nav_list_wrap text-uppercase">
                  <ul class="cs_nav_list">
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/industry">INDUSTRY</a></li>
                    <li><a href="/careers">CAREERS</a></li>
                    <li><a href="/blog">BLOG</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                    <li class="menu-item-has-children">
                      <a href="#">MORE</a>
                      <ul>
                        <li><a href="/services">SERVICES</a></li>
                        <li><a href="/projects">PROJECTS</a></li>
                        <li><a href="/gallery">GALLERY</a></li>
                        <li><a href="/test">TEST</a></li>
                        <li><a href="/leafline">LEAFLINE</a></li>
                        <li><a href="/home-v2">HOME V2</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="cs_main_header_right">
              <div class="cs_header_icon_btns">
                <button type="button" class="cs_header_icon_btn cs_search_tobble_btn cs_center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path d="M19.7556 18.5774L14.0682 12.89C15.1699 11.5292 15.8332 9.8 15.8332 7.91669C15.8332 3.55174 12.2815 9.15527e-05 7.91656 9.15527e-05C3.55161 9.15527e-05 0 3.5517 0 7.91666C0 12.2816 3.55165 15.8333 7.9166 15.8333C9.7999 15.8333 11.5291 15.1699 12.8899 14.0683L18.5773 19.7557C18.7398 19.9182 18.9531 19.9999 19.1665 19.9999C19.3798 19.9999 19.5932 19.9182 19.7557 19.7557C20.0815 19.4299 20.0815 18.9032 19.7556 18.5774ZM7.9166 14.1666C4.46996 14.1666 1.66666 11.3633 1.66666 7.91666C1.66666 4.47001 4.46996 1.66672 7.9166 1.66672C11.3632 1.66672 14.1665 4.47001 14.1665 7.91666C14.1665 11.3633 11.3632 14.1666 7.9166 14.1666Z" fill="currentColor"></path>
                    </g>
                    <defs>
                    <clipPath>
                    <rect width="20" height="20" fill="currentColor"></rect>
                    </clipPath>
                    </defs>
                  </svg>
                </button>
                <a href="#" class="cs_header_icon_btn cs_center" aria-label="Login">
                  <i class="fa-solid fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="cs_header_form_wrap cs_center">
      <div class="cs_header_form_overlay"></div>
      <form action="#" class="cs_header_form">
        <input type="text" class="cs_header_form_input" placeholder="Search...">
        <button type="button" class="cs_header_form_btn cs_center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path d="M19.7556 18.5774L14.0682 12.89C15.1699 11.5292 15.8332 9.8 15.8332 7.91669C15.8332 3.55174 12.2815 9.15527e-05 7.91656 9.15527e-05C3.55161 9.15527e-05 0 3.5517 0 7.91666C0 12.2816 3.55165 15.8333 7.9166 15.8333C9.7999 15.8333 11.5291 15.1699 12.8899 14.0683L18.5773 19.7557C18.7398 19.9182 18.9531 19.9999 19.1665 19.9999C19.3798 19.9999 19.5932 19.9182 19.7557 19.7557C20.0815 19.4299 20.0815 18.9032 19.7556 18.5774ZM7.9166 14.1666C4.46996 14.1666 1.66666 11.3633 1.66666 7.91666C1.66666 4.47001 4.46996 1.66672 7.9166 1.66672C11.3632 1.66672 14.1665 4.47001 14.1665 7.91666C14.1665 11.3633 11.3632 14.1666 7.9166 14.1666Z" fill="currentColor"></path>
            </g>
            <defs>
            <clipPath>
            <rect width="20" height="20" fill="currentColor"></rect>
            </clipPath>
            </defs>
          </svg>
        </button>
      </form>
    </div>
    <!-- End Header Section -->
    <!-- Start Page Heading Sectoin -->
    <section class="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg" data-src="/assets/img/about_heading_bg.jpg">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active">Terms &amp; Condition</li>
        </ol>
        <h1 class="cs_page_title mb-0 cs_fs_80 wow fadeInUp">TERMS &amp; CONDITIONS</h1>
      </div>
    </section>
    <!-- End Page Heading Sectoin -->
    <!-- Start Terms & Conditions Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <p class="cs_fs_20"><em>Last updated: 1 September 2026</em></p>
            <p class="cs_fs_20">These Terms &amp; Conditions govern your use of pharmacrop.com.au. By accessing or using this website, you agree to be bound by these terms. If you do not agree, please do not use this website.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">1. Who we are</h2>
            <p>This website is operated by PharmaCrop ("PharmaCrop", "we", "us", "our"), a cultivator and GMP-certified manufacturer of Australian-grown products based in the Noosa Hinterland, Queensland.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">2. Use of this website</h2>
            <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any third party. You must not attempt to gain unauthorised access to this website, the server on which it is hosted, or any server, computer or database connected to it.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">3. No medical or professional advice</h2>
            <p>Content on this website is provided for general informational purposes only and does not constitute medical, clinical, legal or professional advice. Nothing on this website should be relied upon as a substitute for advice from a qualified health professional. Access to and supply of PharmaCrop products is subject to applicable Australian laws and Therapeutic Goods Administration (TGA) requirements, including any relevant prescribing and access pathways.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">4. Intellectual property</h2>
            <p>Unless otherwise indicated, all content on this website, including text, graphics, logos, images and the PharmaCrop name and branding, is owned by or licensed to PharmaCrop and is protected by applicable intellectual property laws. You may not reproduce, distribute or otherwise use any content from this website without our prior written consent, except as necessary for personal, non-commercial viewing.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">5. Forms and submissions</h2>
            <p>When you submit information through our Contact or Careers forms, you confirm that the information you provide is accurate and that you have the right to provide it. Submitting an Expression of Interest through our Careers page does not guarantee an interview, offer of employment, or any other outcome. See our <a href="/privacy-policy">Privacy Policy</a> for how we handle information you submit.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">6. Third-party links</h2>
            <p>This website may contain links to third-party websites, including the Therapeutic Goods Administration and LinkedIn. We do not control and are not responsible for the content, accuracy or practices of any third-party website, and inclusion of a link does not imply endorsement.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">7. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, PharmaCrop makes no warranties about the accuracy, completeness or currency of the content on this website and excludes all liability for any loss or damage arising from your use of, or inability to use, this website. Nothing in these terms excludes, restricts or modifies any consumer guarantee, right or remedy under the Australian Consumer Law that cannot lawfully be excluded.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">8. Governing law</h2>
            <p>These Terms &amp; Conditions are governed by the laws of Queensland, Australia, and you submit to the non-exclusive jurisdiction of the courts of Queensland in relation to any dispute arising from your use of this website.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">9. Changes to these terms</h2>
            <p>We may update these Terms &amp; Conditions from time to time. The updated version will be posted on this page with a revised "Last updated" date, and continued use of this website after changes are posted constitutes acceptance of the updated terms.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">10. Contact us</h2>
            <p>If you have questions about these Terms &amp; Conditions, please contact us:</p>
            <ul class="cs_mp_0">
              <li>Phone: <a href="tel:1300053533">1300 053 533</a></li>
              <li>Email: <a href="mailto:enquiries@pharmacrop.com.au">enquiries@pharmacrop.com.au</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/company/pharmacrop" target="_blank" rel="noopener">@pharmacrop</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Terms & Conditions Section -->
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
              <li><a href="/privacy-policy">Cookie Policy</a></li>
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
