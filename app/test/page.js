import Script from "next/script";

export const metadata = {
  title: "Test - PharmaCrop",
};

export default function Page() {
  return (
    <>
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <!-- Start Preloader -->
    <div class="cs_preloader">
      <div class="cs_preloader_in">
        <span></span>
        <span></span>
      </div>
      <div class="cs_preloader_text">Loading...</div>
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
                    <li><a href="#">SEE OUR DOCTORS</a></li>
                    <li class="menu-item-has-children">
                      <a href="#">MORE</a>
                      <ul>
                        <li><a href="/services">SERVICES</a></li>
                        <li><a href="/projects">PROJECTS</a></li>
                        <li><a href="/gallery">GALLERY</a></li>
                        <li><a href="/test">TEST</a></li>
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
          <li class="breadcrumb-item active">Test</li>
        </ol>
        <h1 class="cs_page_title mb-0 cs_fs_80 wow fadeInUp">TEST</h1>
      </div>
    </section>
    <!-- End Page Heading Sectoin -->
    <!-- Start Rotating Hero Banner -->
    <style>
      .cs_rotate_hero { position: relative; padding: 140px 0 100px; overflow: hidden; text-align: center; }
      .cs_rotate_hero_bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
      .cs_rotate_hero_bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1); animation: cs_rotate_zoom 10s ease-in-out infinite alternate; }
      @keyframes cs_rotate_zoom { from { transform: scale(1); } to { transform: scale(1.18); } }
      .cs_rotate_hero::before { content: ""; position: absolute; inset: 0; background: rgba(247, 247, 245, 0.78); z-index: 1; }
      .cs_rotate_hero_content { position: relative; z-index: 2; max-width: 900px; margin: 0 auto; }
      .cs_rotate_hero_title { font-size: 56px; font-weight: 800; color: #1f2419; line-height: 1.35; margin: 0 0 24px; }
      .cs_rotate_highlight { background: #fff; color: #024242; padding: 4px 18px; border-radius: 8px; display: inline-block; transition: opacity 0.4s ease; box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1); }
      .cs_rotate_hero_sub { font-size: 18px; color: #4b5142; margin: 0 0 36px; }
      .cs_rotate_hero_btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
      .cs_rotate_btn_primary { background: #78dca6; color: #024242; font-weight: 700; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-size: 13px; letter-spacing: 0.5px; }
      .cs_rotate_btn_dark { background: #024242; color: #fff; font-weight: 700; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-size: 13px; letter-spacing: 0.5px; }
      @media (max-width: 767px) {
        .cs_rotate_hero_title { font-size: 32px; }
        .cs_rotate_hero { padding: 100px 0 70px; }
      }
    </style>
    <section class="cs_rotate_hero">
      <div class="cs_rotate_hero_bg">
        <img src="/assets/img/pharmacrop-banner1.webp" alt="">
      </div>
      <div class="container">
        <div class="cs_rotate_hero_content">
          <h2 class="cs_rotate_hero_title">Grow Your <span class="cs_rotate_highlight" id="cs_rotate_word">Cultivation Business</span> with PharmaCrop</h2>
          <p class="cs_rotate_hero_sub">Australian-Grown, GMP-Certified Cultivation &amp; Manufacturing.</p>
          <div class="cs_rotate_hero_btns">
            <a href="/contact" class="cs_rotate_btn_primary">GET A QUOTE</a>
            <a href="/industry" class="cs_rotate_btn_dark">VISIT INDUSTRIES</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Rotating Hero Banner -->
    <!-- Start What We Offer Section -->
    <style>
      .cs_offer_section { padding: 100px 0; background: #f7f7f5; }
      .cs_offer_eyebrow { color: #7cb342; font-weight: 600; font-size: 14px; letter-spacing: 0.5px; display: block; margin-bottom: 12px; }
      .cs_offer_heading_row { display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; flex-wrap: wrap; margin-bottom: 48px; }
      .cs_offer_title { font-size: 44px; font-weight: 800; color: #1f2419; line-height: 1.2; margin: 0; max-width: 560px; }
      .cs_offer_desc { color: #6b7280; font-size: 16px; line-height: 1.7; max-width: 380px; margin: 0; }
      .cs_offer_grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 300px); gap: 24px; }
      .cs_offer_img { border-radius: 16px; overflow: hidden; }
      .cs_offer_img img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_offer_card { background: #e3e8db; border-radius: 16px; padding: 32px; display: flex; flex-direction: column; justify-content: space-between; }
      .cs_offer_card_num { color: #7cb342; font-size: 20px; font-weight: 700; margin-bottom: 12px; display: block; }
      .cs_offer_card_title { font-size: 24px; font-weight: 700; color: #1f2419; margin: 0 0 16px; line-height: 1.3; }
      .cs_offer_card_text { color: #6b7280; font-size: 15px; line-height: 1.6; margin: 0 0 20px; }
      .cs_offer_card_link { color: #1f2419; font-weight: 600; font-size: 14px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
      @media (max-width: 991px) {
        .cs_offer_grid { grid-template-columns: 1fr; grid-template-rows: auto; }
        .cs_offer_title { font-size: 32px; }
      }
    </style>
    <section class="cs_offer_section">
      <div class="container">
        <div class="cs_offer_heading_row">
          <div>
            <span class="cs_offer_eyebrow">What We Offer</span>
            <h2 class="cs_offer_title">Bringing You Nature's Best, Every Day</h2>
          </div>
          <p class="cs_offer_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce id mauris nec libero vehicula dictum. Integer at justo ut arcu cursus fringilla. Sed volutpat, ipsum eget sagittis luctus.</p>
        </div>
        <div class="cs_offer_grid">
          <div class="cs_offer_img">
            <img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="">
          </div>
          <div class="cs_offer_card">
            <div>
              <span class="cs_offer_card_num">01</span>
              <h3 class="cs_offer_card_title">We Offer Fresh Produce</h3>
              <p class="cs_offer_card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus</p>
            </div>
            <a href="#" class="cs_offer_card_link">Learn More &rarr;</a>
          </div>
          <div class="cs_offer_img">
            <img src="/assets/img/pharmacrop-banner1.webp" alt="">
          </div>
          <div class="cs_offer_card">
            <div>
              <span class="cs_offer_card_num">02</span>
              <h3 class="cs_offer_card_title">We Offer Organic Solutions</h3>
              <p class="cs_offer_card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus</p>
            </div>
            <a href="#" class="cs_offer_card_link">Learn More &rarr;</a>
          </div>
          <div class="cs_offer_img">
            <img src="/assets/img/pharmacrop-banner2.webp" alt="">
          </div>
          <div class="cs_offer_card">
            <div>
              <span class="cs_offer_card_num">03</span>
              <h3 class="cs_offer_card_title">We Offer Agricultural Support</h3>
              <p class="cs_offer_card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus</p>
            </div>
            <a href="#" class="cs_offer_card_link">Learn More &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End What We Offer Section -->
    <!-- Start CTA Split Section -->
    <style>
      .cs_cta_split { position: relative; padding: 100px 0; background-image: url('/assets/img/pharmacrop-banner1.webp'); background-size: cover; background-position: center; }
      .cs_cta_split::before { content: ""; position: absolute; inset: 0; background: rgba(2, 20, 20, 0.55); }
      .cs_cta_split .container { position: relative; z-index: 1; }
      .cs_cta_split_grid { display: grid; grid-template-columns: 1fr 1.6fr 1fr; gap: 24px; align-items: stretch; }
      .cs_cta_split_img { border-radius: 16px; overflow: hidden; min-height: 380px; }
      .cs_cta_split_img img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_cta_split_panel { background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 16px; padding: 48px 32px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
      .cs_cta_split_eyebrow { color: #78dca6; font-weight: 700; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; }
      .cs_cta_split_title { color: #fff; font-size: 36px; font-weight: 700; line-height: 1.3; margin: 0 0 20px; }
      .cs_cta_split_text { color: rgba(255, 255, 255, 0.8); font-size: 16px; line-height: 1.6; margin: 0 0 28px; max-width: 420px; }
      .cs_cta_split_btn { background: #78dca6; color: #024242; font-weight: 700; padding: 14px 28px; border-radius: 50px; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; }
      @media (max-width: 991px) {
        .cs_cta_split_grid { grid-template-columns: 1fr; }
        .cs_cta_split_img { min-height: 220px; }
        .cs_cta_split_title { font-size: 28px; }
      }
    </style>
    <section class="cs_cta_split">
      <div class="container">
        <div class="cs_cta_split_grid">
          <div class="cs_cta_split_img">
            <img src="/assets/img/prescribers.webp" alt="">
          </div>
          <div class="cs_cta_split_panel">
            <span class="cs_cta_split_eyebrow">Get Started</span>
            <h2 class="cs_cta_split_title">Start Your Partnership Journey with PharmaCrop Today</h2>
            <p class="cs_cta_split_text">From cultivation to GMP-certified manufacturing, we're ready to support pharmacists, prescribers and distributors with reliable, Australian-grown supply.</p>
            <a href="/contact" class="cs_cta_split_btn">Contact Us &rarr;</a>
          </div>
          <div class="cs_cta_split_img">
            <img src="/assets/img/distributors.webp" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- End CTA Split Section -->
    <!-- Start Sticky Services Section -->
    <style>
      .cs_sticky_services { padding: 100px 0; background: #f7f7f5; }
      .cs_sticky_services_grid { display: flex; gap: 48px; align-items: flex-start; }
      .cs_sticky_services_left { flex: 0 0 400px; position: sticky; top: 140px; }
      .cs_sticky_eyebrow { display: inline-block; border: 1px solid #d1d5c9; border-radius: 30px; padding: 6px 16px; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #4b5142; margin-bottom: 24px; }
      .cs_sticky_title { font-size: 44px; font-weight: 800; color: #1f2419; line-height: 1.2; margin: 0 0 24px; }
      .cs_sticky_text { color: #6b7280; font-size: 16px; line-height: 1.7; margin: 0 0 32px; max-width: 380px; }
      .cs_sticky_btn { display: inline-block; background: #024242; color: #fff; font-weight: 700; font-size: 13px; letter-spacing: 0.5px; padding: 16px 28px; border-radius: 6px; text-decoration: none; }
      .cs_sticky_services_right { flex: 1; display: flex; flex-direction: column; gap: 32px; }
      .cs_sticky_card { position: relative; border-radius: 20px; overflow: hidden; min-height: 560px; display: flex; align-items: flex-end; }
      .cs_sticky_card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
      .cs_sticky_card::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2,34,34,0) 45%, rgba(2,20,20,0.85) 100%); z-index: 1; }
      .cs_sticky_card_icon { position: absolute; top: 28px; left: 28px; z-index: 2; width: 44px; height: 44px; border: 1px solid rgba(255,255,255,0.5); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 18px; }
      .cs_sticky_card_body { position: relative; z-index: 2; padding: 32px; }
      .cs_sticky_card_title { color: #fff; font-size: 30px; font-weight: 700; margin: 0 0 12px; }
      .cs_sticky_card_link { color: #78dca6; font-weight: 700; font-size: 13px; letter-spacing: 0.5px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; }
      .cs_sticky_card_link span { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; background: #78dca6; color: #024242; border-radius: 5px; }
      @media (max-width: 991px) {
        .cs_sticky_services_grid { flex-direction: column; }
        .cs_sticky_services_left { position: static; flex: none; }
        .cs_sticky_card { min-height: 380px; }
      }
    </style>
    <section class="cs_sticky_services">
      <div class="container">
        <div class="cs_sticky_services_grid">
          <div class="cs_sticky_services_left">
            <span class="cs_sticky_eyebrow">SERVICES &amp; SOLUTIONS</span>
            <h2 class="cs_sticky_title">Built for Every Stage of Production</h2>
            <p class="cs_sticky_text">From genetics and cultivation through to GMP-certified manufacturing and packaging, discover how PharmaCrop supports quality and consistency at every stage.</p>
            <a href="/services" class="cs_sticky_btn">VIEW ALL SERVICES</a>
          </div>
          <div class="cs_sticky_services_right">
            <div class="cs_sticky_card">
              <img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="Cultivation and Genetics">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-seedling"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Cultivation &amp; Genetics</h3>
                <a href="/industry" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
            <div class="cs_sticky_card">
              <img src="/assets/img/pharmacrop-banner2.webp" alt="GMP Manufacturing">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-industry"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">GMP-Certified Manufacturing</h3>
                <a href="/industry" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
            <div class="cs_sticky_card">
              <img src="/assets/img/pharmacrop-banner4.webp" alt="Quality and Packaging">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-boxes-stacked"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Quality &amp; Packaging</h3>
                <a href="/industry" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Sticky Services Section -->
    <!-- Start Testimonial Slider Section -->
    <style>
      .cs_testi_section { display: flex; min-height: 720px; }
      .cs_testi_left { flex: 0 0 50%; background: #f4f4f2; padding: 100px 60px; display: flex; flex-direction: column; justify-content: center; }
      .cs_testi_eyebrow { display: inline-flex; align-items: center; gap: 8px; border: 1px solid #d1d5c9; border-radius: 30px; padding: 6px 16px; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #4b5142; margin-bottom: 24px; width: fit-content; }
      .cs_testi_eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #024242; }
      .cs_testi_title { font-size: 44px; font-weight: 800; color: #1f2419; line-height: 1.2; margin: 0 0 20px; }
      .cs_testi_desc { color: #6b7280; font-size: 16px; line-height: 1.7; margin: 0 0 32px; max-width: 480px; }
      .cs_testi_btn { display: inline-block; background: #024242; color: #fff; font-weight: 700; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-size: 14px; width: fit-content; margin-bottom: 40px; }
      .cs_testi_card_wrap { position: relative; max-width: 480px; min-height: 320px; }
      .cs_testi_card { position: absolute; inset: 0; background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.07); opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; pointer-events: none; }
      .cs_testi_card.active { opacity: 1; transform: translateY(0); pointer-events: auto; }
      .cs_testi_card_head { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
      .cs_testi_avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
      .cs_testi_name { font-weight: 700; color: #1f2419; margin: 0; font-size: 16px; }
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
      .cs_testi_play_btn { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 68px; height: 68px; background: #78dca6; color: #024242; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; z-index: 3; box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25); }
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
        <h2 class="cs_testi_title">Real Stories From Our Industry Partners</h2>
        <p class="cs_testi_desc">Hear from pharmacists, prescribers and distributors who've partnered with PharmaCrop &mdash; building reliable supply, consistent quality and long-term relationships through our GMP-certified operations.</p>
        <a href="/industry" class="cs_testi_btn">View All Partners</a>
        <div class="cs_testi_card_wrap" id="cs_testi_cards">
          <div class="cs_testi_card active" data-index="0">
            <span class="cs_testi_quote_mark">&rdquo;</span>
            <div class="cs_testi_card_head">
              <img src="/assets/img/avatar.jpg" class="cs_testi_avatar" alt="">
              <div>
                <p class="cs_testi_name">David Chen</p>
                <p class="cs_testi_role">Pharmacy Owner</p>
              </div>
            </div>
            <div class="cs_testi_stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="cs_testi_text">"PharmaCrop's integrated approach, from cultivation to GMP-certified manufacturing, gives us complete confidence in every batch we receive."</p>
          </div>
          <div class="cs_testi_card" data-index="1">
            <span class="cs_testi_quote_mark">&rdquo;</span>
            <div class="cs_testi_card_head">
              <img src="/assets/img/avatar.jpg" class="cs_testi_avatar" alt="">
              <div>
                <p class="cs_testi_name">Sarah Mitchell</p>
                <p class="cs_testi_role">Distribution Partner</p>
              </div>
            </div>
            <div class="cs_testi_stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="cs_testi_text">"Reliable supply and consistent quality every time. PharmaCrop's integrated operation makes forecasting and logistics genuinely straightforward."</p>
          </div>
          <div class="cs_testi_card" data-index="2">
            <span class="cs_testi_quote_mark">&rdquo;</span>
            <div class="cs_testi_card_head">
              <img src="/assets/img/avatar.jpg" class="cs_testi_avatar" alt="">
              <div>
                <p class="cs_testi_name">Dr. James Whitfield</p>
                <p class="cs_testi_role">Prescriber</p>
              </div>
            </div>
            <div class="cs_testi_stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
            <p class="cs_testi_text">"Their pharmaceutical discipline and batch-to-batch consistency give me confidence when discussing options with patients."</p>
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
        <span class="cs_testi_play_btn"><i class="fa-solid fa-play"></i></span>
      </div>
    </section>
    <!-- End Testimonial Slider Section -->
    <!-- Start Footer Section -->
    <footer class="cs_footer cs_style_1 cs_color_1">
      <div class="container">
        <div class="cs_footer_row">
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <div class="cs_text_widget">
                <img src="/assets/img/logo-light.png" alt="" class="cs_logo_img">
                <p>Stay updated with our latest <br>
                  news and product updates.</p>
                <ul class="cs_footer_widget_menu cs_mp_0 cs_footer_contact_list">
                  <li><a href="tel:1300053533">Phone: 1300 053 533</a></li>
                  <li><a href="mailto:enquiries@pharmacrop.com.au">Email: enquiries@pharmacrop.com.au</a></li>
                  <li><a href="https://www.linkedin.com/company/pharmacrop" target="_blank" rel="noopener">LinkedIn: @pharmacrop</a></li>
                </ul>
              </div>
            </div>
            <div class="cs_footer_widget">
              <form action="#" class="cs_newsletter cs_style_1">
                <input type="email" placeholder="Enter your email address ..." class="cs_newsletter_input">
                <button type="submit" class="cs_newsletter_btn cs_arrow_btn cs_white_bg cs_heading_color">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <h4 class="cs_footer_widget_title">SUPPORT</h4>
              <ul class="cs_footer_widget_menu cs_mp_0">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/industry">INDUSTRY</a></li>
                <li><a href="/careers">CAREERS</a></li>
                <li><a href="/contact">CONTACT</a></li>
                <li><a href="#">SEE OUR DOCTORS</a></li>
              </ul>
            </div>
          </div>
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <h4 class="cs_footer_widget_title">LINKS</h4>
              <ul class="cs_footer_widget_menu cs_mp_0">
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/gallery">GALLERY</a></li>
                <li><a href="/projects">PROJECTS</a></li>
                <li><a href="/blog">BLOG</a></li>
              </ul>
            </div>
          </div>
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <h4 class="cs_footer_widget_title">SERVICES</h4>
              <ul class="cs_footer_widget_menu cs_mp_0">
                <li><a href="/service-details">HOME GARDEN</a></li>
                <li><a href="/service-details">PLANT SELECTION</a></li>
                <li><a href="/service-details">HARDSCAPING</a></li>
                <li><a href="/service-details">PUBLIC GARDEN</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cs_bottom_footer">
          <div class="cs_bottom_footer_left">
            <div class="cs_copyright">© 2026 PHARMACROP. ALL RIGHTS RESERVED. WEBSITE MAINTAINED BY PHARMACROP.</div>
          </div>
          <div class="cs_bottom_footer_right">
            <ul class="cs_footer_links cs_mp_0">
              <li>
                <a href="/privacy-policy">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="/terms-and-conditions">TERMS &amp; CONDITION</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer Section -->
`,
      }}
    />
    <Script id="cs_rotate_word_script" strategy="afterInteractive">
      {`
        (function () {
          var words = ["Cultivation Business", "GMP Manufacturing", "Industry Partnership", "Product Portfolio"];
          var i = 0;
          var el = document.getElementById('cs_rotate_word');
          if (!el) return;
          setInterval(function () {
            i = (i + 1) % words.length;
            el.style.opacity = 0;
            setTimeout(function () {
              el.textContent = words[i];
              el.style.opacity = 1;
            }, 400);
          }, 2500);
        })();
      `}
    </Script>
    <Script id="cs_testi_slider_script" strategy="afterInteractive">
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
