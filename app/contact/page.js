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
    <style>
      .cs_contact_page_heading.cs_page_heading.cs_style_1 { min-height: 320px; }
      @media (max-width: 991px) {
        .cs_contact_page_heading.cs_page_heading.cs_style_1 { min-height: 260px; }
      }
    </style>
    <section class="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg cs_contact_page_heading" data-src="/assets/img/pharmacrop-banner1.webp">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active">Contact</li>
        </ol>
        <h1 class="cs_page_title mb-0 cs_fs_80 wow fadeInUp">CONTACT US</h1>
      </div>
    </section>
    <!-- End Page Heading Sectoin -->
    <!-- Start Contact Hello Section -->
    <style>
      .cs_contact_hello { background: #eee9e3; padding: 100px 0; }
      .cs_contact_hello_row { display: flex; gap: 80px; align-items: flex-start; }
      .cs_contact_hello_left { flex: 0 0 420px; }
      .cs_contact_hello_right { flex: 1; padding-left: 80px; border-left: 1px solid rgba(2, 66, 66, 0.15); }
      .cs_contact_hello_eyebrow { display: block; font-weight: 700; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; color: #024242; margin-bottom: 16px; }
      .cs_contact_hello_title { font-size: 40px; font-weight: 800; line-height: 1.3; color: #024242; margin: 0 0 16px; }
      .cs_contact_hello_title span { color: #d99f59; }
      .cs_contact_hello_desc { font-size: 16px; line-height: 1.7; color: rgba(2, 66, 66, 0.65); max-width: 460px; margin: 0 0 40px; }
      .cs_contact_hello_info { display: flex; gap: 48px; flex-wrap: wrap; }
      .cs_contact_hello_info_col { display: flex; flex-direction: column; gap: 28px; }
      .cs_contact_hello_label { font-size: 13px; color: rgba(2, 66, 66, 0.6); margin: 0 0 6px; }
      .cs_contact_hello_value { font-size: 16px; font-weight: 700; color: #024242; margin: 0; line-height: 1.5; }
      .cs_contact_hello_value a { color: #024242; text-decoration: none; }
      .cs_contact_hello_social { display: flex; gap: 10px; }
      .cs_contact_hello_social a { width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(2, 66, 66, 0.25); color: #024242; display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 14px; transition: background-color 0.3s ease, color 0.3s ease; }
      .cs_contact_hello_social a:hover { background: #024242; color: #fff; border-color: #024242; }
      .cs_contact_hello_form { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .cs_contact_hello_form .cs_full { grid-column: 1 / -1; }
      .cs_contact_hello_form label { display: block; font-size: 14px; font-weight: 700; color: #024242; margin-bottom: 8px; }
      .cs_contact_hello_form input, .cs_contact_hello_form select, .cs_contact_hello_form textarea { width: 100%; border: 1px solid rgba(2, 66, 66, 0.15); background: #fff; border-radius: 8px; padding: 14px 16px; font-size: 14px; color: #1f2419; outline: none; box-sizing: border-box; font-family: inherit; }
      .cs_contact_hello_form textarea { min-height: 140px; resize: vertical; }
      .cs_contact_hello_submit { background: #024242; color: #fff; font-weight: 700; padding: 16px; border-radius: 8px; border: none; cursor: pointer; font-size: 14px; transition: background-color 0.3s ease, color 0.3s ease; }
      .cs_contact_hello_submit:hover { background: #78dca6; color: #024242; }
      @media (max-width: 991px) {
        .cs_contact_hello_row { flex-direction: column; gap: 48px; }
        .cs_contact_hello_left { flex: none; width: 100%; }
        .cs_contact_hello_right { padding-left: 0; border-left: none; width: 100%; }
        .cs_contact_hello_title { font-size: 32px; }
      }
      @media (max-width: 575px) {
        .cs_contact_hello_form { grid-template-columns: 1fr; }
        .cs_contact_hello_info { gap: 32px; }
      }
    </style>
    <section class="cs_contact_hello">
      <div class="container">
        <div class="cs_contact_hello_row">
          <div class="cs_contact_hello_left">
            <span class="cs_contact_hello_eyebrow">// Contact Us</span>
            <h2 class="cs_contact_hello_title">Start A Conversation With <span>PharmaCrop</span></h2>
            <p class="cs_contact_hello_desc">Connect with our team to discuss products, commercial partnerships, manufacturing, supply or general enquiries.</p>
            <div class="cs_contact_hello_info">
              <div class="cs_contact_hello_info_col">
                <div>
                  <p class="cs_contact_hello_label">Address</p>
                  <p class="cs_contact_hello_value">Noosa Hinterland,<br>Queensland, Australia</p>
                </div>
                <div>
                  <p class="cs_contact_hello_label">Get in touch</p>
                  <p class="cs_contact_hello_value"><a href="tel:1300053533">1300 053 533</a></p>
                  <p class="cs_contact_hello_value"><a href="mailto:enquiries@pharmacrop.com.au">enquiries@pharmacrop.com.au</a></p>
                </div>
              </div>
              <div class="cs_contact_hello_info_col">
                <div>
                  <p class="cs_contact_hello_label">Business Hours</p>
                  <p class="cs_contact_hello_value">Monday - Friday:<br>9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p class="cs_contact_hello_label">Follow Us</p>
                  <div class="cs_contact_hello_social">
                    <a href="https://www.linkedin.com/company/pharmacrop" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://wa.me/611300053533" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cs_contact_hello_right">
            <form action="https://api.web3forms.com/submit" method="POST" class="cs_contact_hello_form">
              <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c">
              <input type="hidden" name="subject" value="New Enquiry - PharmaCrop Contact Page">
              <div>
                <label>Name (required)</label>
                <input type="text" name="name" placeholder="Your name" required>
              </div>
              <div>
                <label>Email (required)</label>
                <input type="email" name="email" placeholder="Your email" required>
              </div>
              <div>
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="Your phone number">
              </div>
              <div>
                <label>Area of Interest</label>
                <select name="area_of_interest" defaultValue="">
                  <option value="" disabled selected>Select your area of interest</option>
                  <option value="Retail">Retail</option>
                  <option value="Green Label">Green Label</option>
                  <option value="White Label">White Label</option>
                  <option value="Bulk Flower">Bulk Flower</option>
                  <option value="Distribution / Export">Distribution / Export</option>
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
              <div class="cs_full">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us how we can help"></textarea>
              </div>
              <button type="submit" class="cs_contact_hello_submit cs_full">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Hello Section -->
    <!-- Start Trust Strip Section -->
    <style>
      .cs_trust_strip { background: #f7faf8; padding: 32px 0; border-top: 1px solid rgba(2, 66, 66, 0.08); border-bottom: 1px solid rgba(2, 66, 66, 0.08); }
      .cs_trust_strip_row { display: flex; align-items: center; justify-content: center; gap: 18px; flex-wrap: wrap; }
      .cs_trust_strip_item { display: flex; align-items: center; gap: 8px; color: #024242; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
      .cs_trust_strip_item i { color: #78dca6; font-size: 13px; }
      .cs_trust_strip_sep { color: rgba(2, 66, 66, 0.2); font-size: 14px; }
      @media (max-width: 575px) {
        .cs_trust_strip_sep { display: none; }
        .cs_trust_strip_row { gap: 12px; }
        .cs_trust_strip_item { width: 100%; justify-content: center; }
      }
    </style>
    <section class="cs_trust_strip">
      <div class="container">
        <div class="cs_trust_strip_row">
          <span class="cs_trust_strip_item"><i class="fa-solid fa-circle-check"></i>Australian Made</span>
          <span class="cs_trust_strip_sep">|</span>
          <span class="cs_trust_strip_item"><i class="fa-solid fa-circle-check"></i>GMP Certified</span>
          <span class="cs_trust_strip_sep">|</span>
          <span class="cs_trust_strip_item"><i class="fa-solid fa-circle-check"></i>TGA Licensed</span>
        </div>
      </div>
    </section>
    <!-- End Trust Strip Section -->
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
              <li><a href="/industry">Products</a></li>
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
    <!-- Script -->
    
    
    
    
    
    
  

`,
      }}
    />
  );
}
