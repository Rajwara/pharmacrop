import Script from "next/script";

export const metadata = {
  title: "PharmaCrop - Bring Balance To Your Life",
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
      .cs_sticky_services { padding: 100px 0; background: #f7f7f5; }
      .cs_sticky_services_grid { display: flex; gap: 48px; align-items: flex-start; }
      .cs_sticky_services_left { flex: 0 0 400px; position: sticky; top: 140px; }
      .cs_sticky_eyebrow { display: inline-block; border: 1px solid #d1d5c9; border-radius: 30px; padding: 6px 16px; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #4b5142; margin-bottom: 24px; text-transform: uppercase; }
      .cs_sticky_title { font-size: 44px; font-weight: 800; color: #024242; line-height: 1.2; margin: 0 0 24px; }
      .cs_sticky_text { color: #6b7280; font-size: 16px; line-height: 1.7; margin: 0 0 32px; max-width: 380px; }
      .cs_sticky_btn { display: inline-block; background: #024242; color: #fff; font-weight: 700; font-size: 13px; letter-spacing: 0.5px; padding: 16px 28px; border-radius: 6px; text-decoration: none; }
      .cs_sticky_services_right { flex: 1; display: flex; flex-direction: column; gap: 32px; }
      .cs_sticky_card { position: relative; border-radius: 20px; overflow: hidden; min-height: 560px; display: flex; align-items: flex-end; }
      .cs_sticky_card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
      .cs_sticky_card::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2,34,34,0) 45%, rgba(2,20,20,0.85) 100%); z-index: 1; }
      .cs_sticky_card_icon { position: absolute; top: 28px; left: 28px; z-index: 2; width: 44px; height: 44px; border: 1px solid rgba(255,255,255,0.5); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 18px; }
      .cs_sticky_card_body { position: relative; z-index: 2; padding: 32px; }
      .cs_sticky_card_title { color: #fff; font-size: 30px; font-weight: 700; margin: 0 0 12px; }
      .cs_sticky_card_text { color: rgba(255,255,255,0.8); font-size: 15px; line-height: 1.6; margin: 0 0 16px; max-width: 480px; }
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
            <span class="cs_sticky_eyebrow">What We Do</span>
            <h2 class="cs_sticky_title wow fadeInDown">FROM GENETICS TO GMP MANUFACTURING</h2>
            <p class="cs_sticky_text">Where international cultivation expertise meets Australian, GMP-certified manufacturing discipline &mdash; from cultivar selection through to finished product.</p>
            <a href="/services" class="cs_sticky_btn">VIEW ALL SERVICES</a>
          </div>
          <div class="cs_sticky_services_right">
            <div class="cs_sticky_card">
              <img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="Noosa Hinterland">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-house"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Noosa Hinterland</h3>
                <p class="cs_sticky_card_text">Where PharmaCrop calls home. The Noosa Hinterland provides the home for our cultivation and manufacturing operations, bringing local production together within a single region.</p>
                <a href="/about" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
            <div class="cs_sticky_card">
              <img src="/assets/img/pharmacrop-banner3.webp" alt="Integrated Operations">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-link"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Integrated Operations</h3>
                <p class="cs_sticky_card_text">By bringing cultivation, processing and GMP-certified manufacturing together, PharmaCrop maintains oversight from cultivar selection through to finished product.</p>
                <a href="/industry" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
            <div class="cs_sticky_card">
              <img src="/assets/img/pharmacrop-banner4.webp" alt="Global Expertise">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-earth-americas"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Global Expertise</h3>
                <p class="cs_sticky_card_text">Drawing on cultivation expertise from California, Canada and South Africa, our team applies international insights within the unique conditions of the Noosa Hinterland.</p>
                <a href="/about" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
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
    <section class="cs_cta cs_style_1 cs_heading_bg cs_bg_filed" data-src="/assets/img/ready-to-partner-with-pharmacrop.jpg">
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_cta_in">
          <h2 class="cs_cta_title cs_fs_80 cs_white_color cs_mb_40 wow fadeInDown">READY TO PARTNER <br><span class="cs_nowrap_span">WITH PHARMACROP?</span></h2>
          <a href="/contact" class="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg wow fadeInUp">Contact Us</a>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End CTA Section -->
    <!-- Start Footer Section -->
    <footer class="cs_footer cs_style_1">
      <div class="container">
        <div class="cs_footer_row">
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <div class="cs_text_widget">
                <img src="/assets/img/logo-dark.webp" alt="Logo" class="wow zoomIn cs_logo_img">
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
