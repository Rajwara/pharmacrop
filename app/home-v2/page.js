import Script from "next/script";

export const metadata = {
  title: "Home V2 - PharmaCrop",
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
    <style>
      .cs_site_header.cs_style_1:not(.cs_sticky_active) { background-color: #024242; transition: background-color 0.3s ease; }
    </style>
    <!-- Start Rotating Hero Banner -->
    <style>
      .cs_rotate_hero { position: relative; min-height: 92vh; display: flex; align-items: center; padding: 200px 0 140px; overflow: hidden; text-align: center; }
      .cs_rotate_hero_bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
      .cs_rotate_hero_bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1); animation: cs_rotate_zoom 10s ease-in-out infinite alternate; }
      @keyframes cs_rotate_zoom { from { transform: scale(1); } to { transform: scale(1.18); } }
      .cs_rotate_hero::before { content: ""; position: absolute; inset: 0; background: rgba(247, 247, 245, 0.78); z-index: 1; }
      .cs_rotate_hero_content { position: relative; z-index: 2; max-width: 900px; margin: 0 auto; width: 100%; }
      .cs_rotate_hero_title { font-size: 56px; font-weight: 800; color: #1f2419; line-height: 1.35; margin: 0 0 24px; }
      .cs_rotate_highlight { background: #fff; color: #024242; padding: 4px 18px; border-radius: 8px; display: inline-block; transition: opacity 0.4s ease; box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1); }
      .cs_rotate_hero_sub { font-size: 18px; color: #4b5142; margin: 0 0 36px; }
      .cs_rotate_hero_btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
      .cs_rotate_btn_primary { background: #78dca6; color: #024242; font-weight: 700; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-size: 13px; letter-spacing: 0.5px; }
      .cs_rotate_btn_dark { background: #024242; color: #fff; font-weight: 700; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-size: 13px; letter-spacing: 0.5px; }
      @media (max-width: 767px) {
        .cs_rotate_hero_title { font-size: 32px; }
        .cs_rotate_hero { min-height: 70vh; padding: 140px 0 90px; }
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
    <!-- Start Feature Section -->
    <style>
      .cs_offer_section { padding: 100px 0; background: #f7f7f5; }
      .cs_offer_eyebrow { color: #78dca6; font-weight: 600; font-size: 14px; letter-spacing: 0.5px; display: block; margin-bottom: 12px; text-transform: uppercase; }
      .cs_offer_heading_row { display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; flex-wrap: wrap; margin-bottom: 48px; }
      .cs_offer_title { font-size: 44px; font-weight: 800; color: #024242; line-height: 1.2; margin: 0; max-width: 620px; }
      .cs_offer_desc { color: #6b7280; font-size: 16px; line-height: 1.7; max-width: 380px; margin: 0; }
      .cs_offer_grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 300px); gap: 24px; }
      .cs_offer_img { border-radius: 16px; overflow: hidden; }
      .cs_offer_img img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_offer_card { background: #e5f3ea; border-radius: 16px; padding: 32px; display: flex; flex-direction: column; justify-content: space-between; }
      .cs_offer_card_num { color: #78dca6; font-size: 20px; font-weight: 700; margin-bottom: 12px; display: block; }
      .cs_offer_card_title { font-size: 24px; font-weight: 700; color: #024242; margin: 0 0 16px; line-height: 1.3; }
      .cs_offer_card_text { color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0 0 20px; }
      .cs_offer_card_link { color: #024242; font-weight: 600; font-size: 14px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
      @media (max-width: 991px) {
        .cs_offer_grid { grid-template-columns: 1fr; grid-template-rows: auto; }
        .cs_offer_title { font-size: 32px; }
      }
    </style>
    <section class="cs_offer_section">
      <div class="container">
        <div class="cs_offer_heading_row">
          <div>
            <span class="cs_offer_eyebrow">What We Do</span>
            <h2 class="cs_offer_title wow fadeInDown">FROM GENETICS TO GMP MANUFACTURING</h2>
          </div>
          <p class="cs_offer_desc">Where international cultivation expertise meets Australian, GMP-certified manufacturing discipline &mdash; from cultivar selection through to finished product.</p>
        </div>
        <div class="cs_offer_grid">
          <div class="cs_offer_img wow fadeInLeft">
            <img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="Genetics to GMP manufacturing">
          </div>
          <div class="cs_offer_card">
            <div>
              <span class="cs_offer_card_num">01</span>
              <h3 class="cs_offer_card_title">Noosa Hinterland</h3>
              <p class="cs_offer_card_text">Where PharmaCrop calls home. The Noosa Hinterland provides the home for our cultivation and manufacturing operations, bringing local production together within a single region.</p>
            </div>
            <a href="/about" class="cs_offer_card_link">Learn More &rarr;</a>
          </div>
          <div class="cs_offer_img">
            <img src="/assets/img/pharmacrop-banner3.webp" alt="PharmaCrop cultivation facility">
          </div>
          <div class="cs_offer_card">
            <div>
              <span class="cs_offer_card_num">02</span>
              <h3 class="cs_offer_card_title">Integrated Operations</h3>
              <p class="cs_offer_card_text">By bringing cultivation, processing and GMP-certified manufacturing together, PharmaCrop maintains oversight from cultivar selection through to finished product.</p>
            </div>
            <a href="/industry" class="cs_offer_card_link">Learn More &rarr;</a>
          </div>
          <div class="cs_offer_img wow fadeInRight">
            <img src="/assets/img/pharmacrop-banner4.webp" alt="PharmaCrop GMP-certified manufacturing">
          </div>
          <div class="cs_offer_card">
            <div>
              <span class="cs_offer_card_num">03</span>
              <h3 class="cs_offer_card_title">Global Expertise</h3>
              <p class="cs_offer_card_text">Drawing on cultivation expertise from California, Canada and South Africa, our team applies international insights within the unique conditions of the Noosa Hinterland.</p>
            </div>
            <a href="/about" class="cs_offer_card_link">Learn More &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Feature Section -->
    <!-- Start Services Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_1">
          <h2 class="cs_section_title cs_fs_80 mb-0 wow fadeInDown">SUPPORTING OUR <span>INDUSTRY PARTNERS</span></h2>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="cs_card_1_group">
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed active wow fadeInLeft" data-src="/assets/img/pharmacists.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/industry" class="cs_card_tag">Industry</a>
                <a href="#" class="cs_card_tag">Australian-Grown</a>
                <a href="#" class="cs_card_tag">GMP-Certified</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <h2 class="cs_card_title cs_white_color cs_fs_32">PHARMACISTS</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">Reliable supply. Simplified access. A dedicated online ordering portal is currently in development to further support pharmacy partners.</p>
            </div>
            <a href="/industry" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed" data-src="/assets/img/prescribers.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/industry" class="cs_card_tag">Industry</a>
                <a href="#" class="cs_card_tag">Australian-Grown</a>
                <a href="#" class="cs_card_tag">GMP-Certified</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <h2 class="cs_card_title cs_white_color cs_fs_32">PRESCRIBERS</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">Where cultivation expertise meets pharmaceutical discipline, supporting quality, consistency and product integrity across every product we produce.</p>
            </div>
            <a href="/industry" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed wow fadeInRight" data-src="/assets/img/distributors.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/industry" class="cs_card_tag">Industry</a>
                <a href="#" class="cs_card_tag">Australian-Grown</a>
                <a href="#" class="cs_card_tag">GMP-Certified</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <h2 class="cs_card_title cs_white_color cs_fs_32">DISTRIBUTORS</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">A reliable partner from production to supply, with consistent products, reliable supply and a growing Australian-grown portfolio.</p>
            </div>
            <a href="/industry" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Services Section -->
    <!-- Start Testimonial Section -->
    <section class="cs_gray_bg">
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="text-center">
          <h2 class="cs_section_title cs_fs_80 mb-0 wow fadeInDown">TRUSTED BY OUR <span>INDUSTRY PARTNERS</span></h2>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="cs_slider cs_style_1">
              <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="800" data-center="0" data-variable-width="0" data-slides-per-view="1">
                <div class="cs_slider_wrapper">
                  <div class="cs_slide">
                    <div class="cs_testimonial cs_style_1 text-center wow fadeInUp">
                      <blockquote class="cs_testimonial_blockquote cs_heading_color cs_fs_32 cs_bold cs_mb_48">PharmaCrop's <span>integrated</span> approach, from cultivation to GMP-certified manufacturing, gives us complete <span>confidence</span> in every batch we receive. Their pharmaceutical discipline and consistency are <span>unmatched</span>.</blockquote>
                      <div class="cs_testimonial_meta">
                        <h4 class="cs_testimonial_avatar cs_bold cs_fs_16 cs_mb_2">PARTNER PHARMACIST</h4>
                        <p class="cs_testimonial_avatar_designation mb-0">PharmaCrop Distribution Partner</p>
                      </div>
                    </div>
                  </div>
                  <div class="cs_slide">
                    <div class="cs_testimonial cs_style_1 text-center">
                      <blockquote class="cs_testimonial_blockquote cs_heading_color cs_fs_32 cs_bold cs_mb_48">PharmaCrop's <span>integrated</span> approach, from cultivation to GMP-certified manufacturing, gives us complete <span>confidence</span> in every batch we receive. Their pharmaceutical discipline and consistency are <span>unmatched</span>.</blockquote>
                      <div class="cs_testimonial_meta">
                        <h4 class="cs_testimonial_avatar cs_bold cs_fs_16 cs_mb_2">PARTNER PHARMACIST</h4>
                        <p class="cs_testimonial_avatar_designation mb-0">PharmaCrop Distribution Partner</p>
                      </div>
                    </div>
                  </div>
                  <div class="cs_slide">
                    <div class="cs_testimonial cs_style_1 text-center">
                      <blockquote class="cs_testimonial_blockquote cs_heading_color cs_fs_32 cs_bold cs_mb_48">PharmaCrop's <span>integrated</span> approach, from cultivation to GMP-certified manufacturing, gives us complete <span>confidence</span> in every batch we receive. Their pharmaceutical discipline and consistency are <span>unmatched</span>.</blockquote>
                      <div class="cs_testimonial_meta">
                        <h4 class="cs_testimonial_avatar cs_bold cs_fs_16 cs_mb_2">PARTNER PHARMACIST</h4>
                        <p class="cs_testimonial_avatar_designation mb-0">PharmaCrop Distribution Partner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cs_slider_arrows cs_style_2">
                <div class="cs_left_arrow cs_heading_color">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.499953 9.00005C0.499953 8.80823 0.573265 8.61623 0.719703 8.4698L8.2197 0.969797C8.51277 0.676734 8.98733 0.676734 9.2802 0.969797C9.57308 1.26286 9.57327 1.73742 9.2802 2.0303L2.31045 9.00005L9.2802 15.9698C9.57327 16.2629 9.57327 16.7374 9.2802 17.0303C8.98714 17.3232 8.51258 17.3234 8.2197 17.0303L0.719703 9.5303C0.573265 9.38386 0.499953 9.19186 0.499953 9.00005Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div class="cs_right_arrow cs_heading_color">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.50005 8.99995C9.50005 9.19177 9.42673 9.38377 9.2803 9.5302L1.7803 17.0302C1.48723 17.3233 1.01267 17.3233 0.719797 17.0302C0.426922 16.7371 0.426734 16.2626 0.719797 15.9697L7.68955 8.99995L0.719797 2.0302C0.426734 1.73714 0.426734 1.26258 0.719797 0.969702C1.01286 0.676826 1.48742 0.67664 1.7803 0.969702L9.2803 8.4697C9.42673 8.61614 9.50005 8.80814 9.50005 8.99995Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Testimonial Section -->
    <!-- Start Works Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_2 cs_color_1">
          <h2 class="cs_section_title cs_fs_80 mb-0 wow fadeInDown">THERAPEUTIC GOODS <br>ADMINISTRATION <span>(TGA) GUIDANCE</span></h2>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="cs_full_width_slider_section">
          <div class="cs_slider cs_style_1 cs_slider_gap_24">
            <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="800" data-center="0" data-variable-width="1" data-slides-per-view="1">
              <div class="cs_slider_wrapper">
                <div class="cs_slide">
                  <div class="cs_card cs_style_4">
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/patients-card.webp"></div>
                    <div class="cs_card_info">
                      <ul class="cs_card_info_list cs_mp_0">
                        <li>
                          <p class="mb-0">AUDIENCE</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold">PATIENTS</h3>
                        </li>
                        <li>
                          <p class="mb-0">RESOURCE</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold"><a href="#">TGA PATIENT INFORMATION</a></h3>
                        </li>
                      </ul>
                      <div class="cs_card_text">Official guidance from Australia's Therapeutic Goods Administration for patients.</div>
                    </div>
                  </div>
                </div>
                <div class="cs_slide">
                  <div class="cs_card cs_style_4">
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/health-professionals-card.webp"></div>
                    <div class="cs_card_info">
                      <ul class="cs_card_info_list cs_mp_0">
                        <li>
                          <p class="mb-0">AUDIENCE</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold">HEALTH PROFESSIONALS</h3>
                        </li>
                        <li>
                          <p class="mb-0">RESOURCE</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold"><a href="#">TGA MEDICINAL CANNABIS INFO</a></h3>
                        </li>
                      </ul>
                      <div class="cs_card_text">TGA medicinal cannabis information for health professionals.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cs_slider_arrows cs_style_3 cs_hide_lg">
              <div class="cs_right_arrow cs_heading_color cs_fs_20 cs_center">
                <span class="cs_center">NEXT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Works Section -->
    <!-- Start CTA Section -->
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
    <!-- End CTA Section -->
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
    <Script id="cs_home_v2_rotate_word_script" strategy="afterInteractive">
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
    </>
  );
}
