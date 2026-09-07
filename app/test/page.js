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
    <!-- Start Leafline Testimonials -->
    <style>
      .cs_leaf_testi { padding: 110px 0; background: #f7faf8; }
      .cs_leaf_testi_row { display: flex; align-items: center; gap: 60px; }
      .cs_leaf_testi_imgs { flex: 0 0 340px; position: relative; height: 380px; }
      .cs_leaf_testi_img { position: absolute; inset: 0; border-radius: 12px; overflow: hidden; opacity: 0; transform: scale(0.96); transition: opacity 0.6s ease, transform 0.6s ease; }
      .cs_leaf_testi_img.active { opacity: 1; transform: scale(1); }
      .cs_leaf_testi_img img { width: 100%; height: 100%; object-fit: cover; }
      .cs_leaf_testi_content { flex: 1; }
      .cs_leaf_testi_content h2 { color: #024242; margin-bottom: 30px; }
      .cs_leaf_testi_cards { position: relative; min-height: 200px; }
      .cs_leaf_testi_card { position: absolute; inset: 0; opacity: 0; visibility: hidden; transform: translateY(12px); transition: opacity 0.5s ease, transform 0.5s ease; }
      .cs_leaf_testi_card.active { opacity: 1; visibility: visible; transform: translateY(0); position: relative; }
      .cs_leaf_testi_stars { color: #d99f59; margin-bottom: 16px; font-size: 14px; }
      .cs_leaf_testi_card p { font-size: 19px; line-height: 1.7; color: #333; margin-bottom: 22px; font-style: italic; }
      .cs_leaf_testi_author strong { display: block; color: #024242; font-size: 16px; }
      .cs_leaf_testi_author span { color: #888; font-size: 14px; }
      .cs_leaf_testi_dots { display: flex; gap: 10px; margin-top: 30px; }
      .cs_leaf_testi_dot { width: 10px; height: 10px; border-radius: 50%; background: #d7e8dd; cursor: pointer; transition: 0.3s; border: none; padding: 0; }
      .cs_leaf_testi_dot.active { background: #78dca6; width: 26px; border-radius: 6px; }
      @media (max-width: 991px) { .cs_leaf_testi_row { flex-direction: column; } .cs_leaf_testi_imgs { flex: 0 0 auto; width: 100%; } }
    </style>
    <section class="cs_leaf_testi">
      <div class="container">
        <div class="cs_leaf_testi_row">
          <div class="cs_leaf_testi_imgs wow fadeInUp">
            <div class="cs_leaf_testi_img active"><img src="/assets/Leafline/10004.jpg" alt=""></div>
            <div class="cs_leaf_testi_img"><img src="/assets/Leafline/10005.jpg" alt=""></div>
            <div class="cs_leaf_testi_img"><img src="/assets/Leafline/10006.jpg" alt=""></div>
            <div class="cs_leaf_testi_img"><img src="/assets/Leafline/10007.jpg" alt=""></div>
            <div class="cs_leaf_testi_img"><img src="/assets/Leafline/10031.jpg" alt=""></div>
            <div class="cs_leaf_testi_img"><img src="/assets/Leafline/10032.jpg" alt=""></div>
          </div>
          <div class="cs_leaf_testi_content wow fadeInUp" data-wow-delay="0.1s">
            <span class="cs_sticky_eyebrow">TRUSTED ACROSS THE SUPPLY CHAIN</span>
            <h2 class="cs_two_tone cs_home_heading_sz">WHAT OUR <br><span>PARTNERS SAY</span></h2>
            <div class="cs_leaf_testi_cards" id="cs_leaf_testi_cards">
              <div class="cs_leaf_testi_card active">
                <div class="cs_leaf_testi_stars">★★★★★</div>
                <p>"PharmaCrop's consistency batch to batch makes compounding straightforward. We always know what we're getting."</p>
                <div class="cs_leaf_testi_author"><strong>Compounding Pharmacist</strong><span>Community Pharmacy Partner</span></div>
              </div>
              <div class="cs_leaf_testi_card">
                <div class="cs_leaf_testi_stars">★★★★★</div>
                <p>"Supply confidence is everything in this industry. PharmaCrop has never let a delivery window slip on us."</p>
                <div class="cs_leaf_testi_author"><strong>Distribution Partner</strong><span>National Wholesale Distributor</span></div>
              </div>
              <div class="cs_leaf_testi_card">
                <div class="cs_leaf_testi_stars">★★★★★</div>
                <p>"The traceability from cultivar to finished product gives me real confidence when discussing options with patients."</p>
                <div class="cs_leaf_testi_author"><strong>Prescribing Clinician</strong><span>Telehealth Provider</span></div>
              </div>
              <div class="cs_leaf_testi_card">
                <div class="cs_leaf_testi_stars">★★★★★</div>
                <p>"You can tell cultivation and manufacturing sit under one roof. The quality is genuinely consistent, order after order."</p>
                <div class="cs_leaf_testi_author"><strong>Pharmacy Owner</strong><span>Independent Pharmacy Group</span></div>
              </div>
              <div class="cs_leaf_testi_card">
                <div class="cs_leaf_testi_stars">★★★★★</div>
                <p>"Working with an Australian-grown, GMP-certified supplier has simplified our entire procurement process."</p>
                <div class="cs_leaf_testi_author"><strong>Industry Partner</strong><span>Healthcare Procurement Lead</span></div>
              </div>
              <div class="cs_leaf_testi_card">
                <div class="cs_leaf_testi_stars">★★★★★</div>
                <p>"Their hand-packing process and quality systems are the most disciplined I've seen from an integrated grower."</p>
                <div class="cs_leaf_testi_author"><strong>Operations Lead</strong><span>Contract Manufacturing Partner</span></div>
              </div>
            </div>
            <div class="cs_leaf_testi_dots" id="cs_leaf_testi_dots">
              <button class="cs_leaf_testi_dot active" data-goto="0" aria-label="Testimonial 1"></button>
              <button class="cs_leaf_testi_dot" data-goto="1" aria-label="Testimonial 2"></button>
              <button class="cs_leaf_testi_dot" data-goto="2" aria-label="Testimonial 3"></button>
              <button class="cs_leaf_testi_dot" data-goto="3" aria-label="Testimonial 4"></button>
              <button class="cs_leaf_testi_dot" data-goto="4" aria-label="Testimonial 5"></button>
              <button class="cs_leaf_testi_dot" data-goto="5" aria-label="Testimonial 6"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Leafline Testimonials -->
    <!-- Start Contact Card Section -->
    <style>
      .cs_contact_card_section { padding: 100px 0; }
      .cs_contact_card { position: relative; border-radius: 24px; overflow: hidden; min-height: 700px; display: flex; flex-direction: column; justify-content: space-between; padding: 40px; }
      .cs_contact_card_bg { position: absolute; inset: 0; z-index: 0; }
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
              <input type="hidden" name="subject" value="New Enquiry - PharmaCrop Test Page">
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
              <button type="submit" class="cs_contact_form_btn">Get a Quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Card Section -->
    <!-- Start Form Info Split Section -->
    <style>
      .cs_form_info_split { display: flex; min-height: 700px; }
      .cs_form_info_left, .cs_form_info_right { flex: 0 0 50%; padding: 100px 60px; display: flex; align-items: center; }
      .cs_form_info_left { background: #eaf5ee; justify-content: flex-end; }
      .cs_form_info_right { background: #023030; justify-content: flex-start; }
      .cs_split_form { background: #024242; border-radius: 20px; padding: 40px; width: 100%; max-width: 480px; }
      .cs_split_form_label { color: #fff; font-weight: 700; font-size: 14px; margin: 0 0 8px; display: block; }
      .cs_split_form_group { margin-bottom: 20px; }
      .cs_split_form_row { display: flex; gap: 16px; }
      .cs_split_form_row .cs_split_form_group { flex: 1; }
      .cs_split_form input, .cs_split_form textarea { width: 100%; border: none; border-radius: 8px; padding: 14px 16px; font-size: 14px; color: #1f2419; outline: none; box-sizing: border-box; }
      .cs_split_form textarea { resize: vertical; min-height: 110px; font-family: inherit; }
      .cs_split_form_btn { background: #1a1a1a; color: #fff; font-weight: 700; padding: 16px; border-radius: 8px; border: none; width: 100%; cursor: pointer; font-size: 14px; }
      .cs_info_panel { width: 100%; max-width: 480px; }
      .cs_info_eyebrow { color: #78dca6; font-weight: 700; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 16px; }
      .cs_info_title { color: #fff; font-size: 40px; font-weight: 800; line-height: 1.25; margin: 0 0 16px; }
      .cs_info_desc { color: rgba(255, 255, 255, 0.7); font-size: 16px; line-height: 1.7; margin: 0 0 40px; }
      .cs_info_list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 22px; }
      .cs_info_item { display: flex; align-items: center; gap: 16px; }
      .cs_info_icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(120, 220, 166, 0.12); border: 1px solid rgba(120, 220, 166, 0.3); color: #78dca6; display: flex; align-items: center; justify-content: center; font-size: 18px; flex: none; }
      .cs_info_label { color: rgba(255, 255, 255, 0.55); font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase; margin: 0 0 2px; }
      .cs_info_value { color: #fff; font-size: 16px; font-weight: 600; margin: 0; text-decoration: none; }
      .cs_info_value a { color: #fff; text-decoration: none; }
      .cs_info_social_row { display: flex; gap: 10px; }
      .cs_info_social_row a { width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; }
      @media (max-width: 991px) {
        .cs_form_info_split { flex-direction: column; }
        .cs_form_info_left, .cs_form_info_right { flex: none; width: 100%; padding: 70px 24px; justify-content: center; }
        .cs_info_title { font-size: 30px; }
      }
    </style>
    <section class="cs_form_info_split">
      <div class="cs_form_info_left">
        <form action="https://api.web3forms.com/submit" method="POST" class="cs_split_form">
          <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c">
          <input type="hidden" name="subject" value="New Enquiry - PharmaCrop Test Page">
          <div class="cs_split_form_group">
            <label class="cs_split_form_label">Name</label>
            <input type="text" name="name" placeholder="Your full name here" required>
          </div>
          <div class="cs_split_form_row">
            <div class="cs_split_form_group">
              <label class="cs_split_form_label">Email</label>
              <input type="email" name="email" placeholder="Your email here" required>
            </div>
            <div class="cs_split_form_group">
              <label class="cs_split_form_label">Number</label>
              <input type="tel" name="phone" placeholder="Your phone number here">
            </div>
          </div>
          <div class="cs_split_form_group">
            <label class="cs_split_form_label">Subject</label>
            <input type="text" name="topic" placeholder="Your subject here">
          </div>
          <div class="cs_split_form_group">
            <label class="cs_split_form_label">Message</label>
            <textarea name="message" placeholder="Your message"></textarea>
          </div>
          <button type="submit" class="cs_split_form_btn">Send Message</button>
        </form>
      </div>
      <div class="cs_form_info_right">
        <div class="cs_info_panel">
          <span class="cs_info_eyebrow">GET IN TOUCH</span>
          <h2 class="cs_info_title">Let's Start a Conversation</h2>
          <p class="cs_info_desc">Reach out to our team to discuss cultivation, GMP-certified manufacturing, or a potential partnership &mdash; we're ready to help.</p>
          <ul class="cs_info_list">
            <li class="cs_info_item">
              <span class="cs_info_icon"><i class="fa-solid fa-envelope"></i></span>
              <div>
                <p class="cs_info_label">Email</p>
                <p class="cs_info_value"><a href="mailto:enquiries@pharmacrop.com.au">enquiries@pharmacrop.com.au</a></p>
              </div>
            </li>
            <li class="cs_info_item">
              <span class="cs_info_icon"><i class="fa-solid fa-phone"></i></span>
              <div>
                <p class="cs_info_label">Phone</p>
                <p class="cs_info_value"><a href="tel:1300053533">1300 053 533</a></p>
              </div>
            </li>
            <li class="cs_info_item">
              <span class="cs_info_icon"><i class="fa-solid fa-location-dot"></i></span>
              <div>
                <p class="cs_info_label">Location</p>
                <p class="cs_info_value">Noosa Hinterland, Queensland, Australia</p>
              </div>
            </li>
            <li class="cs_info_item">
              <span class="cs_info_icon"><i class="fa-solid fa-share-nodes"></i></span>
              <div>
                <p class="cs_info_label">Social</p>
                <div class="cs_info_social_row">
                  <a href="https://www.linkedin.com/company/pharmacrop" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="https://wa.me/611300053533" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- End Form Info Split Section -->
    <!-- Start Contact Section -->
    <div class="cs_height_100 cs_height_lg_70"></div>
    <div class="container">
      <div class="row cs_gap_y_40">
        <div class="col-lg-5">
          <div class="cs_map">
            <iframe id="map" src="https://www.google.com/maps?q=Noosa+Hinterland,+Queensland,+Australia&output=embed" allowfullscreen=""></iframe>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="cs_pl_40">
            <div class="cs_section_heading cs_style_4 cs_mb_25">
              <h2 class="cs_section_title cs_fs_32 cs_bold mb-0">SEND US A <span>MESSAGE</span></h2>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" class="row cs_gap_y_24" id="cs_form">
              <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c">
              <div class="col-sm-6">
                <input type="text" name="name" class="cs_form_field" placeholder="Name" required="">
              </div>
              <div class="col-sm-6">
                <input type="email" name="email" class="cs_form_field" placeholder="Email" required="">
              </div>
              <div class="col-lg-12">
                <textarea class="cs_form_field" name="message" placeholder="Message" rows="5" required=""></textarea>
              </div>
              <div class="col-lg-12">
                <button class="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100" type="submit">Send Message</button>
                <div id="cs_result" class="cs_heading_color"></div>
              </div>
            </form>
            <div class="cs_height_60 cs_height_lg_40"></div>
            <div class="cs_section_heading cs_style_4 cs_mb_25">
              <h2 class="cs_section_title cs_fs_32 cs_bold mb-0">GET IN <span>TOUCH</span></h2>
            </div>
            <ul class="cs_contact_info cs_mp_0">
              <li>
                <p class="mb-0">EMAIL</p>
                <h4 class="mb-0 cs_fs_20 cs_bold">enquiries@pharmacrop.com.au</h4>
              </li>
              <li>
                <p class="mb-0">PHONE</p>
                <h4 class="mb-0 cs_fs_20 cs_bold">1300 053 533</h4>
              </li>
              <li>
                <p class="mb-0">LINKEDIN</p>
                <h4 class="mb-0 cs_fs_20 cs_bold">@pharmacrop</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="cs_height_100 cs_height_lg_70"></div>
    <!-- Start Guide Overlap Section -->
    <style>
      .cs_guide_section { position: relative; }
      .cs_guide_bg { position: relative; min-height: 820px; }
      .cs_guide_bg img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
      .cs_guide_card { position: absolute; top: 50%; right: 5%; transform: translateY(-50%); background: #eee9e3; border-radius: 8px; padding: 56px 48px; max-width: 640px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18); }
      .cs_guide_title { font-size: 40px; font-weight: 800; color: #024242; line-height: 1.3; margin: 0 0 20px; }
      .cs_guide_desc { color: #4b5142; font-size: 16px; line-height: 1.7; margin: 0 0 28px; padding-bottom: 28px; border-bottom: 1px solid rgba(2, 66, 66, 0.15); }
      .cs_guide_item { display: flex; gap: 20px; align-items: flex-start; padding: 22px 0; border-bottom: 1px solid rgba(2, 66, 66, 0.15); }
      .cs_guide_item:last-child { border-bottom: none; padding-bottom: 0; }
      .cs_guide_icon { width: 56px; height: 56px; border-radius: 50%; background: rgba(120, 220, 166, 0.25); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 20px; flex: none; }
      .cs_guide_item_title { font-size: 18px; font-weight: 700; color: #024242; margin: 0 0 6px; }
      .cs_guide_item_text { color: #4b5142; font-size: 14px; line-height: 1.6; margin: 0; }
      @media (max-width: 991px) {
        .cs_guide_card { position: static; transform: none; margin: -60px 20px 0; max-width: none; padding: 32px 24px; }
        .cs_guide_bg { min-height: 320px; }
        .cs_guide_title { font-size: 28px; }
      }
    </style>
    <section class="cs_guide_section">
      <div class="cs_guide_bg">
        <img src="/assets/img/pharmacrop-banner2.webp" alt="">
        <div class="cs_guide_card">
          <h2 class="cs_guide_title">What Guides Our Cultivation And Manufacturing Team</h2>
          <p class="cs_guide_desc">Every batch we produce is shaped by pharmaceutical discipline, consistent quality systems and a commitment to clear, reliable communication with our partners.</p>
          <div class="cs_guide_item">
            <span class="cs_guide_icon"><i class="fa-solid fa-vial"></i></span>
            <div>
              <h3 class="cs_guide_item_title">Pharmaceutical Discipline</h3>
              <p class="cs_guide_item_text">GMP-certified processes and rigorous quality systems guide every stage of production.</p>
            </div>
          </div>
          <div class="cs_guide_item">
            <span class="cs_guide_icon"><i class="fa-solid fa-shield-halved"></i></span>
            <div>
              <h3 class="cs_guide_item_title">Consistent Quality</h3>
              <p class="cs_guide_item_text">Every batch is produced to the same exacting standard, batch after batch.</p>
            </div>
          </div>
          <div class="cs_guide_item">
            <span class="cs_guide_icon"><i class="fa-solid fa-comments"></i></span>
            <div>
              <h3 class="cs_guide_item_title">Clear Communication</h3>
              <p class="cs_guide_item_text">Transparent updates and reliable support for every partner we work with.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Guide Overlap Section -->
    <!-- Start What We Do Split Section -->
    <style>
      .cs_do_split { display: grid; grid-template-columns: 1fr 1fr; align-items: stretch; }
      .cs_do_split_panel { background: #024242; color: #fff; padding: 100px 80px; display: flex; flex-direction: column; justify-content: center; }
      .cs_do_split_eyebrow_row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
      .cs_do_split_line { width: 32px; height: 2px; background: #78dca6; display: inline-block; }
      .cs_do_split_label { font-weight: 700; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; color: #78dca6; }
      .cs_do_split_title { color: #fff; font-size: 40px; font-weight: 800; line-height: 1.25; margin: 0 0 20px; }
      .cs_do_split_text { color: rgba(255, 255, 255, 0.75); font-size: 16px; line-height: 1.7; margin: 0; max-width: 460px; }
      .cs_do_split_img { position: relative; min-height: 480px; }
      .cs_do_split_img img { width: 100%; height: 100%; object-fit: cover; display: block; }
      @media (max-width: 991px) {
        .cs_do_split { grid-template-columns: 1fr; }
        .cs_do_split_panel { padding: 60px 32px; }
        .cs_do_split_img { min-height: 300px; }
        .cs_do_split_title { font-size: 30px; }
      }
    </style>
    <section class="cs_do_split">
      <div class="cs_do_split_panel">
        <div class="cs_do_split_eyebrow_row">
          <span class="cs_do_split_line"></span>
          <span class="cs_do_split_label">What We Do</span>
        </div>
        <h2 class="cs_do_split_title">Cultivated naturally. Manufactured with pharmaceutical precision.</h2>
        <p class="cs_do_split_text">Every stage of our operation &mdash; from cultivar selection to GMP-certified processing &mdash; is guided by consistency, traceability and care. Australian-grown, and shaped by cultivation expertise drawn from California, Canada and South Africa.</p>
      </div>
      <div class="cs_do_split_img">
        <img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="PharmaCrop cultivation greenhouse">
      </div>
    </section>
    <!-- End What We Do Split Section -->
    <!-- Start Scroll Stack Projects Section -->
    <style>
      .cs_scroll_stack { position: relative; height: 150vh; background: #024242; }
      .cs_scroll_stack_sticky { position: sticky; top: 0; height: 100vh; overflow: hidden; display: flex; align-items: center; }
      .cs_scroll_stack_row { display: flex; align-items: center; width: 100%; gap: 60px; padding: 0 80px; box-sizing: border-box; }
      .cs_scroll_stack_left { flex: 0 0 420px; }
      .cs_scroll_stack_pretitle { color: rgba(255, 255, 255, 0.6); font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; display: block; }
      .cs_scroll_stack_title { color: #fff; font-size: 44px; font-weight: 800; line-height: 1.25; margin: 0 0 32px; }
      .cs_scroll_stack_btn { display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.5); color: #fff; border-radius: 30px; padding: 14px 28px; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-decoration: none; transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
      .cs_scroll_stack_btn:hover { background: #78dca6; border-color: #78dca6; color: #024242; }
      .cs_scroll_stack_right { position: relative; flex: 1; height: 680px; }
      .cs_scroll_card { position: absolute; top: 50%; left: 50%; width: 760px; max-width: 90vw; border-radius: 16px; overflow: hidden; will-change: transform, filter, opacity; }
      .cs_scroll_card img { width: 100%; height: 490px; object-fit: cover; display: block; }
      .cs_scroll_card_content { position: absolute; left: 0; right: 0; bottom: 0; padding: 24px; background: linear-gradient(180deg, rgba(2, 20, 20, 0) 0%, rgba(2, 20, 20, 0.85) 100%); }
      .cs_scroll_card_tags { display: flex; gap: 4px; margin-bottom: 10px; flex-wrap: wrap; }
      .cs_scroll_card_tag { color: rgba(255, 255, 255, 0.8); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
      .cs_scroll_card_tag:not(:last-child)::after { content: "/"; margin-left: 8px; color: rgba(255, 255, 255, 0.4); }
      .cs_scroll_card_title { color: #fff; font-size: 24px; font-weight: 700; margin: 0; }
      @media (min-width: 1400px) {
        .cs_scroll_card { width: 880px; }
        .cs_scroll_card img { height: 540px; }
      }
      @media (max-width: 1199px) {
        .cs_scroll_stack_row { padding: 0 40px; gap: 32px; }
        .cs_scroll_stack_left { flex: 0 0 340px; }
        .cs_scroll_stack_right { height: 580px; }
        .cs_scroll_card { width: 570px; }
        .cs_scroll_card img { height: 370px; }
        .cs_scroll_stack_title { font-size: 36px; }
      }
      @media (max-width: 991px) {
        .cs_scroll_stack { height: 135vh; }
        .cs_scroll_stack_row { flex-direction: column; padding: 0 24px; gap: 32px; }
        .cs_scroll_stack_left { flex: none; }
        .cs_scroll_stack_right { width: 100%; height: 500px; }
        .cs_scroll_card { width: 460px; max-width: 88vw; }
        .cs_scroll_card img { height: 320px; }
        .cs_scroll_stack_title { font-size: 30px; }
      }
      @media (max-width: 480px) {
        .cs_scroll_stack_right { height: 360px; }
        .cs_scroll_card { width: 340px; }
        .cs_scroll_card img { height: 230px; }
        .cs_scroll_card_title { font-size: 18px; }
      }
    </style>
    <section class="cs_scroll_stack" id="cs_scroll_stack">
      <div class="cs_scroll_stack_sticky">
        <div class="cs_scroll_stack_row">
          <div class="cs_scroll_stack_left">
            <span class="cs_scroll_stack_pretitle">Partnership In Action</span>
            <h2 class="cs_scroll_stack_title">Building consistent supply that grows with your business</h2>
            <a href="/commercial-partnerships" class="cs_scroll_stack_btn">View All Partnerships</a>
          </div>
          <div class="cs_scroll_stack_right">
            <div class="cs_scroll_card" data-index="0">
              <img src="/assets/img/pharma-banner.jpeg" alt="Noosa Hinterland Cultivation Facility">
              <div class="cs_scroll_card_content">
                <div class="cs_scroll_card_tags">
                  <span class="cs_scroll_card_tag">Cultivation</span>
                  <span class="cs_scroll_card_tag">Facility</span>
                  <span class="cs_scroll_card_tag">Scalable</span>
                </div>
                <h3 class="cs_scroll_card_title">Noosa Hinterland Cultivation Facility</h3>
              </div>
            </div>
            <div class="cs_scroll_card" data-index="1">
              <img src="/assets/img/pharmacrop-banner3.webp" alt="GMP Quality Control Lab">
              <div class="cs_scroll_card_content">
                <div class="cs_scroll_card_tags">
                  <span class="cs_scroll_card_tag">GMP</span>
                  <span class="cs_scroll_card_tag">Quality</span>
                  <span class="cs_scroll_card_tag">Testing</span>
                </div>
                <h3 class="cs_scroll_card_title">GMP Quality Control Lab</h3>
              </div>
            </div>
            <div class="cs_scroll_card" data-index="2">
              <img src="/assets/img/health-professionals-card.webp" alt="Clinical & Regulatory Support">
              <div class="cs_scroll_card_content">
                <div class="cs_scroll_card_tags">
                  <span class="cs_scroll_card_tag">Clinical</span>
                  <span class="cs_scroll_card_tag">Guidance</span>
                  <span class="cs_scroll_card_tag">Support</span>
                </div>
                <h3 class="cs_scroll_card_title">Clinical &amp; Regulatory Support</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Scroll Stack Projects Section -->
    <!-- Start Integrated Platform Journey Section -->
    <style>
      .cs_platform_journey { padding: 110px 0; background: #f7faf8; }
      .cs_platform_journey_head { max-width: 700px; margin: 0 auto 60px; text-align: center; }
      .cs_platform_journey_eyebrow { display: block; color: #78dca6; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; font-size: 14px; margin-bottom: 14px; }
      .cs_platform_journey_title { font-size: 38px; font-weight: 800; line-height: 1.25; color: #024242; margin: 0 0 20px; }
      .cs_platform_journey_title span { background: linear-gradient(223deg, rgba(2, 66, 66, 0.8) 0.37%, #666666 49.66%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .cs_platform_journey_text { font-size: 16px; line-height: 1.7; color: #666; margin: 0 auto; max-width: 640px; }
      .cs_platform_tabs { display: grid; grid-template-columns: 360px 1fr; gap: 40px; align-items: start; }
      .cs_platform_tabs_nav { position: sticky; top: 110px; display: flex; flex-direction: column; background: #fff; border: 1px solid #eee; border-radius: 12px; overflow: hidden; }
      .cs_platform_tab { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; text-align: left; padding: 20px 24px; background: #fff; border: none; border-bottom: 1px solid #eee; font-family: inherit; font-size: 16px; font-weight: 600; color: #024242; cursor: pointer; transition: background 0.3s ease, color 0.3s ease; }
      .cs_platform_tab:last-child { border-bottom: none; }
      .cs_platform_tab i { font-size: 13px; transition: transform 0.3s ease; flex-shrink: 0; }
      .cs_platform_tab:hover { background: rgba(120,220,166,0.18); }
      .cs_platform_tab.active { background: linear-gradient(90deg, #78dca6 0%, rgba(120,220,166,0.2) 100%); }
      .cs_platform_tab.active i { transform: translateX(4px); }
      .cs_platform_tabs_panel { position: relative; min-height: 420px; }
      .cs_platform_tab_content { display: none; background: #024242; border-radius: 16px; overflow: hidden; align-items: stretch; }
      .cs_platform_tab_content.active { display: flex; animation: cs_platform_fade 0.4s ease; }
      @keyframes cs_platform_fade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      .cs_platform_tab_img { flex: 0 0 45%; }
      .cs_platform_tab_img img { width: 100%; height: 100%; min-height: 380px; object-fit: cover; display: block; }
      .cs_platform_tab_body { flex: 1; padding: 48px; display: flex; flex-direction: column; justify-content: center; }
      .cs_platform_tab_icon { width: 56px; height: 56px; border-radius: 50%; background: rgba(120,220,166,0.18); color: #78dca6; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 20px; }
      .cs_platform_tab_body h3 { color: #fff; font-size: 28px; margin: 0 0 16px; }
      .cs_platform_tab_body p { color: rgba(255,255,255,0.85); font-size: 16px; line-height: 1.7; margin: 0; max-width: 440px; }
      @media (max-width: 991px) {
        .cs_platform_tabs { grid-template-columns: 1fr; }
        .cs_platform_tabs_nav { position: static; flex-direction: row; overflow-x: auto; }
        .cs_platform_tab { flex: 0 0 auto; width: auto; white-space: nowrap; border-bottom: none; border-right: 1px solid #eee; }
        .cs_platform_tab:last-child { border-right: none; }
        .cs_platform_tab_content { flex-direction: column; }
        .cs_platform_tab_img img { min-height: 220px; }
        .cs_platform_tab_body { padding: 32px; }
      }
      @media (max-width: 767px) {
        .cs_platform_journey { padding: 80px 0; }
        .cs_platform_journey_title { font-size: 28px; }
      }
      @media (max-width: 600px) {
        .cs_platform_tab_body h3 { font-size: 22px; }
      }
    </style>
    <section class="cs_platform_journey" id="cs_platform_journey">
      <div class="container">
        <div class="cs_platform_journey_head">
          <span class="cs_platform_journey_eyebrow">Integrated Platform</span>
          <h2 class="cs_platform_journey_title">ONE INTEGRATED PLATFORM.<br><span>END-TO-END CAPABILITY.</span></h2>
          <p class="cs_platform_journey_text">From genetics and cultivation through GMP manufacturing, quality, commercialisation and global export &mdash; all under one integrated operation.</p>
        </div>
        <div class="cs_platform_tabs">
          <div class="cs_platform_tabs_nav">
            <button type="button" class="cs_platform_tab active" data-target="0">
              <span>Genetics</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button type="button" class="cs_platform_tab" data-target="1">
              <span>Cultivation</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button type="button" class="cs_platform_tab" data-target="2">
              <span>GMP Manufacturing</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button type="button" class="cs_platform_tab" data-target="3">
              <span>Quality &amp; Release</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button type="button" class="cs_platform_tab" data-target="4">
              <span>Research &amp; Innovation</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button type="button" class="cs_platform_tab" data-target="5">
              <span>Market Access &amp; Commercialisation</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button type="button" class="cs_platform_tab" data-target="6">
              <span>Global Export</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div class="cs_platform_tabs_panel">
            <div class="cs_platform_tab_content active" data-index="0">
              <div class="cs_platform_tab_img"><img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="Genetics"></div>
              <div class="cs_platform_tab_body">
                <span class="cs_platform_tab_icon"><i class="fa-solid fa-dna"></i></span>
                <h3>Genetics</h3>
                <p>Proprietary phenohunt programs select high-performing cultivars.</p>
              </div>
            </div>
            <div class="cs_platform_tab_content" data-index="1">
              <div class="cs_platform_tab_img"><img src="/assets/img/pharma-banner.jpeg" alt="Cultivation"></div>
              <div class="cs_platform_tab_body">
                <span class="cs_platform_tab_icon"><i class="fa-solid fa-seedling"></i></span>
                <h3>Cultivation</h3>
                <p>Australian-grown using controlled-environment cultivation in the Noosa Hinterland.</p>
              </div>
            </div>
            <div class="cs_platform_tab_content" data-index="2">
              <div class="cs_platform_tab_img"><img src="/assets/img/pharmacrop-banner2.webp" alt="GMP Manufacturing"></div>
              <div class="cs_platform_tab_body">
                <span class="cs_platform_tab_icon"><i class="fa-solid fa-industry"></i></span>
                <h3>GMP Manufacturing</h3>
                <p>Manufacturing within a GMP-certified facility to pharmaceutical standards.</p>
              </div>
            </div>
            <div class="cs_platform_tab_content" data-index="3">
              <div class="cs_platform_tab_img"><img src="/assets/img/pharmacrop-banner3.webp" alt="Quality &amp; Release"></div>
              <div class="cs_platform_tab_body">
                <span class="cs_platform_tab_icon"><i class="fa-solid fa-shield-halved"></i></span>
                <h3>Quality &amp; Release</h3>
                <p>Rigorous quality systems support safety, consistency and regulatory compliance.</p>
              </div>
            </div>
            <div class="cs_platform_tab_content" data-index="4">
              <div class="cs_platform_tab_img"><img src="/assets/img/pharmacrop-banner1.webp" alt="Research &amp; Innovation"></div>
              <div class="cs_platform_tab_body">
                <span class="cs_platform_tab_icon"><i class="fa-solid fa-microscope"></i></span>
                <h3>Research &amp; Innovation</h3>
                <p>Scientific expertise and product innovation drive continual advancement.</p>
              </div>
            </div>
            <div class="cs_platform_tab_content" data-index="5">
              <div class="cs_platform_tab_img"><img src="/assets/img/health-professionals-card.webp" alt="Market Access &amp; Commercialisation"></div>
              <div class="cs_platform_tab_body">
                <span class="cs_platform_tab_icon"><i class="fa-solid fa-handshake"></i></span>
                <h3>Market Access &amp; Commercialisation</h3>
                <p>Commercial expertise supports market access and long-term healthcare adoption.</p>
              </div>
            </div>
            <div class="cs_platform_tab_content" data-index="6">
              <div class="cs_platform_tab_img"><img src="/assets/img/pharmacrop-banner4.webp" alt="Global Export"></div>
              <div class="cs_platform_tab_body">
                <span class="cs_platform_tab_icon"><i class="fa-solid fa-globe"></i></span>
                <h3>Global Export</h3>
                <p>Export-ready capability supports international partnerships and regulated global expansion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Integrated Platform Journey Section -->
    <!-- Start Footer Section -->
    <style>
      .cs_footer_brand { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
      .cs_footer_brand .cs_newsletter { width: 100%; }
      .cs_footer_tagline { margin: 0; width: 100%; }
      .cs_footer_social_item { display: flex; align-items: center; gap: 10px; }
      .cs_footer_social_label { text-transform: uppercase; }
      .cs_footer_social_icon { width: 30px; height: 30px; border-radius: 50%; background: rgba(2, 66, 66, 0.08); color: #024242; display: inline-flex; align-items: center; justify-content: center; transition: background-color 0.3s ease, color 0.3s ease; }
      .cs_footer_social_icon:hover { background: #024242; color: #fff; }
      .cs_footer_row { display: grid !important; grid-template-columns: 1.5fr 1fr 1fr 1.3fr !important; gap: 40px !important; }
      .cs_footer_row .cs_footer_col { position: relative; max-width: none !important; flex: none !important; width: 100% !important; padding-right: 0 !important; }
      .cs_footer_row .cs_footer_col:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 0;
        right: -20px;
        width: 2px;
        height: 40px;
        background: #024242;
      }
      .cs_footer_brand .cs_newsletter_input { padding: 10px 48px 10px 20px !important; font-size: 14px !important; }
      .cs_footer_touch_list li a { font-size: 14px; white-space: nowrap; }
      @media (max-width: 991px) {
        .cs_footer_row { grid-template-columns: repeat(2, 1fr) !important; }
        .cs_footer_row .cs_footer_col:nth-child(2n)::after { display: none; }
      }
      @media (max-width: 575px) {
        .cs_footer_row { grid-template-columns: 1fr !important; }
        .cs_footer_row .cs_footer_col::after { display: none; }
      }
      @media (max-width: 767px) {
        .cs_footer_row { padding-top: 40px !important; }
      }
    </style>
    <footer class="cs_footer cs_style_1">
      <div class="container">
        <div class="cs_footer_row">
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <div class="cs_footer_brand">
                <img src="/assets/img/logo-dark.webp" alt="Logo" class="wow zoomIn cs_logo_img">
                <p class="cs_footer_tagline">Stay updated with our latest news and product updates.</p>
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
          </div>
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <h4 class="cs_footer_widget_title">SUPPORT</h4>
              <ul class="cs_footer_widget_menu cs_mp_0">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/industry">INDUSTRY</a></li>
                <li><a href="/services">SERVICES</a></li>
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
                <li><a href="/projects">PROJECTS</a></li>
                <li><a href="/blog">BLOG</a></li>
              </ul>
            </div>
          </div>
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <h4 class="cs_footer_widget_title">GET IN TOUCH</h4>
              <ul class="cs_footer_widget_menu cs_mp_0 cs_footer_touch_list">
                <li><a href="tel:1300053533">Phone: 1300 053 533</a></li>
                <li><a href="mailto:enquiries@pharmacrop.com.au">Email: enquiries@pharmacrop.com.au</a></li>
                <li class="cs_footer_social_item">
                  <span class="cs_footer_social_label">Social:</span>
                  <a href="https://www.linkedin.com/company/pharmacrop" target="_blank" rel="noopener" class="cs_footer_social_icon" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cs_bottom_footer">
          <div class="cs_bottom_footer_left wow fadeInLeft">
            <div class="cs_copyright">© 2026 PHARMACROP. ALL RIGHTS RESERVED. WEBSITE MAINTAINED BY PHARMACROP.</div>
          </div>
          <div class="cs_bottom_footer_right wow fadeInRight">
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
    <Script id="cs_leaf_testi_slider_script" strategy="afterInteractive">
      {`
        (function () {
          var cards = document.querySelectorAll('#cs_leaf_testi_cards .cs_leaf_testi_card');
          var imgs = document.querySelectorAll('.cs_leaf_testi_img');
          var dots = document.querySelectorAll('#cs_leaf_testi_dots .cs_leaf_testi_dot');
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
    <Script id="cs_platform_tabs_script" strategy="afterInteractive">
      {`
        (function () {
          var section = document.getElementById('cs_platform_journey');
          if (!section) return;
          var tabs = section.querySelectorAll('.cs_platform_tab');
          var contents = section.querySelectorAll('.cs_platform_tab_content');
          tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
              var idx = tab.getAttribute('data-target');
              tabs.forEach(function (t) { t.classList.remove('active'); });
              contents.forEach(function (c) { c.classList.remove('active'); });
              tab.classList.add('active');
              var target = section.querySelector('.cs_platform_tab_content[data-index="' + idx + '"]');
              if (target) target.classList.add('active');
            });
          });
        })();
      `}
    </Script>
    <Script id="cs_scroll_stack_script" strategy="afterInteractive">
      {`
        (function () {
          var section = document.getElementById('cs_scroll_stack');
          if (!section) return;
          var cards = Array.prototype.slice.call(section.querySelectorAll('.cs_scroll_card'));
          var n = cards.length;

          function lerp(a, b, t) { return a + (b - a) * t; }
          function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

          function update() {
            var rect = section.getBoundingClientRect();
            var vh = window.innerHeight;
            var totalScrollable = rect.height - vh;
            var scrolled = clamp(-rect.top, 0, totalScrollable);
            var overall = totalScrollable > 0 ? scrolled / totalScrollable : 0;

            var isNarrow = window.innerWidth <= 767;
            var rotateIn = isNarrow ? -8 : -18;
            var rotateOut = isNarrow ? 6 : 12;

            cards.forEach(function (card, i) {
              var ownProgress = clamp(overall * n - i, 0, 1);
              var nextProgress = i < n - 1 ? clamp(overall * n - (i + 1), 0, 1) : 0;

              var w = card.offsetWidth;
              var h = card.offsetHeight;

              var scale = lerp(0.7, 1, ownProgress);
              var rotate = lerp(rotateIn, 0, ownProgress);
              var translateX = lerp(w * 0.16, 0, ownProgress);
              var translateY = lerp(h * 0.14, 0, ownProgress);
              var blur = lerp(16, 0, ownProgress);
              var opacity = Math.min(ownProgress * 2, 1);

              scale = lerp(scale, 0.72, nextProgress);
              rotate = lerp(rotate, rotateOut, nextProgress);
              translateX = lerp(translateX, w * 0.22, nextProgress);
              translateY = lerp(translateY, -h * 0.2, nextProgress);
              opacity = opacity * lerp(1, 0.55, nextProgress);
              blur = blur + lerp(0, 2, nextProgress);

              card.style.transform = 'translate3d(calc(-50% + ' + translateX + 'px), calc(-50% + ' + translateY + 'px), 0) scale(' + scale + ') rotate(' + rotate + 'deg)';
              card.style.filter = 'blur(' + blur + 'px)';
              card.style.opacity = opacity;
              card.style.zIndex = 10 + i;
            });
          }

          var ticking = false;
          function onScroll() {
            if (!ticking) {
              window.requestAnimationFrame(function () {
                update();
                ticking = false;
              });
              ticking = true;
            }
          }

          window.addEventListener('scroll', onScroll, { passive: true });
          window.addEventListener('resize', onScroll);
          update();
        })();
      `}
    </Script>
    </>
  );
}
