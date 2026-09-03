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
      .cs_btn.cs_style_1, .cs_btn.cs_style_2, .cs_contact_form_btn {
        font-weight: 700 !important;
        padding: 16px 32px !important;
        border-radius: 8px !important;
        text-decoration: none !important;
        font-size: 13px !important;
        letter-spacing: 0.5px !important;
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
      }
      .cs_btn.cs_style_1:hover {
        background: #024242 !important;
        color: #fff !important;
      }
      .cs_btn.cs_style_2 {
        border: 2px solid currentColor;
        background: transparent;
      }
      .cs_btn.cs_style_2::after {
        display: none;
      }
      .cs_btn.cs_style_2:hover {
        background: #78dca6 !important;
        border-color: #78dca6 !important;
        color: #024242 !important;
      }
      .cs_contact_form_btn:hover {
        background: #78dca6 !important;
        color: #024242 !important;
      }
      @media (max-width: 767px) {
        .cs_hero.cs_style_1 .cs_hero_in { min-height: 560px !important; padding: 90px 0 !important; }
        .cs_hero.cs_style_1 .cs_hero_btns { flex-wrap: nowrap; gap: 10px; }
        .cs_hero.cs_style_1 .cs_hero_btns a { flex: 1 1 0; text-align: center; white-space: nowrap; font-size: 10px !important; padding: 14px 10px !important; }
      }
      @media (max-width: 480px) {
        .cs_hero.cs_style_1 .cs_hero_in { min-height: 480px !important; padding: 70px 0 !important; }
      }
    </style>
    <!-- Start Hero Section -->
    <section class="cs_hero cs_style_1 cs_heading_bg cs_white_color">
      <div class="container">
        <div class="cs_hero_in">
          <div class="cs_hero_text">
            <h1 class="cs_hero_title cs_fs_80 cs_normal cs_mb_12 cs_white_color cs_gradient_color_1 wow fadeInUp">AUSTRALIAN-GROWN. <b>COMPLETE CONTROL.</b></h1>
            <p class="cs_hero_subtitle cs_fs_20 cs_mb_32 cs_opacity_7_5">Natural cultivation with pharmaceutical precision.</p>
            <div class="cs_hero_btns">
              <a href="https://aleafiate.com.au/" target="_blank" rel="noopener noreferrer" class="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg wow fadeInLeft">SEE OUR DOCTORS</a>
              <a href="/about" class="cs_btn cs_style_2 cs_bold cs_white_color wow fadeInRight">ABOUT PHARMACROP</a>
            </div>
          </div>
          <div class="cs_hero_funfact_wrap wow fadeInRight">
            <div class="cs_hero_funfact">
              <h3 class="cs_fs_24 cs_bold cs_white_color mb-0">GMP</h3>
              <p class="cs_fs_20 cs_white_color cs_opacity_7_5 cs_mb_16">Certified Manufacturing</p>
              <div class="cs_circle_group">
                <img src="/assets/img/GMP_1.webp" alt="GMP Quality Certification">
                <img src="/assets/img/gmp_3.webp" alt="GMP Certified">
                <img src="/assets/img/GMP_2.webp" alt="ISO 9001:2015 Certified">
              </div>
            </div>
          </div>
          <div class="cs_hero_box wow fadeInUp">
            <div class="cs_hero_box_icon cs_mb_29">
              <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0C4.93447 0 0 4.97132 0 11.0821C0 13.0939 0.895529 15.2575 0.933059 15.3488C1.22229 16.0404 1.793 17.1147 2.20453 17.7445L9.74665 29.2575C10.0553 29.7295 10.5121 30 11 30C11.4879 30 11.9447 29.7295 12.2534 29.2581L19.7961 17.7445C20.2083 17.1147 20.7784 16.0404 21.0676 15.3488C21.1051 15.2581 22 13.0945 22 11.0821C22 4.97132 17.0655 0 11 0ZM19.8744 14.8429C19.6162 15.4628 19.085 16.4622 18.7155 17.0267L11.1728 28.5404C11.0239 28.7679 10.9767 28.7679 10.8279 28.5404L3.28512 17.0267C2.91565 16.4622 2.38441 15.4622 2.12624 14.8422C2.11523 14.8155 1.29412 12.824 1.29412 11.0821C1.29412 5.69035 5.64818 1.30378 11 1.30378C16.3518 1.30378 20.7059 5.69035 20.7059 11.0821C20.7059 12.8266 19.8828 14.8233 19.8744 14.8429Z" fill="currentColor"></path>
                <path d="M11.0003 5.21578C7.78893 5.21578 5.17676 7.84811 5.17676 11.0828C5.17676 14.3175 7.78893 16.9498 11.0003 16.9498C14.2116 16.9498 16.8238 14.3175 16.8238 11.0828C16.8238 7.84811 14.2116 5.21578 11.0003 5.21578ZM11.0003 15.646C8.50329 15.646 6.47088 13.5991 6.47088 11.0828C6.47088 8.56649 8.50329 6.51956 11.0003 6.51956C13.4973 6.51956 15.5297 8.56649 15.5297 11.0828C15.5297 13.5991 13.4973 15.646 11.0003 15.646Z" fill="currentColor"></path>
              </svg>
            </div>
            <h3 class="cs_hero_box_title cs_fs_24 cs_mb_12 cs_white_color">The PharmaCrop Story</h3>
            <p class="cs_hero_box_subtitle mb-0 cs_opacity_7_5">Built in the Noosa Hinterland in Queensland, combining international cultivation expertise with Australian production and GMP-certified manufacturing.</p>
            <a href="/contact" class="cs_arrow_btn cs_hero_box_btn cs_center cs_heading_bg cs_white_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>                
            </a>
          </div>
        </div>
      </div>
      <div class="cs_hero_bg">
        <div class="cs_slider cs_style_1">
          <div class="cs_slider_container" data-autoplay="7000" data-loop="1" data-speed="800" data-center="0" data-variable-width="0" data-slides-per-view="1">
            <div class="cs_slider_wrapper">
              <div class="cs_slide">
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/pharma-banner.jpeg"></div>
              </div>
              <div class="cs_slide">
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/pharmacrop-banner1.webp"></div>
              </div>
              <div class="cs_slide">
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/pharmacrop-banner2.webp"></div>
              </div>
              <div class="cs_slide">
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/hero_bg_2.jpg"></div>
              </div>
              <div class="cs_slide">
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/pharmacrop-banner4.webp"></div>
              </div>
            </div>
          </div>
          <div class="cs_pagination_1_wrap">
            <div class="container">
              <div class="cs_pagination_1_in">
                <div class="cs_slider_number cs_style_1 cs_white_color cs_bold"></div>
                <div class="cs_pagination cs_style_1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero Section -->
    <!-- Start Feature Section -->
    <style>
      .cs_sticky_services { padding: 100px 0; background: #f7f7f5; }
      .cs_sticky_services_grid { display: flex; gap: 48px; align-items: flex-start; }
      .cs_sticky_services_left { flex: 0 0 400px; position: sticky; top: 140px; }
      .cs_sticky_eyebrow { display: inline-block; border: 1px solid #d1d5c9; border-radius: 30px; padding: 6px 16px; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #4b5142; margin-bottom: 24px; text-transform: uppercase; }
      .cs_sticky_title { font-size: 44px; font-weight: 800; color: #024242; line-height: 1.2; margin: 0 0 24px; }
      .cs_home_heading_sz { font-size: 44px !important; line-height: 1.2 !important; }
      @media (max-width: 767px) {
        .cs_home_heading_sz { font-size: 32px !important; }
      }
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
            <h2 class="cs_sticky_title cs_two_tone cs_home_heading_sz wow fadeInDown">FROM GENETICS<br>TO GMP<br><span>MANUFACTURING</span></h2>
            <p class="cs_sticky_text">Where international cultivation expertise meets Australian, GMP-certified manufacturing discipline &mdash; from cultivar selection through to finished product.</p>
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
    <style>
      .cs_partners_heading { max-width: 720px; }
      .cs_partners_heading .cs_sticky_text { max-width: 100%; margin-bottom: 0; }
      .cs_two_tone span { background: linear-gradient(223deg, rgba(2, 66, 66, 0.8) 0.37%, #666666 49.66%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    </style>
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_partners_heading">
          <span class="cs_sticky_eyebrow">WHO WE SUPPORT</span>
          <h2 class="cs_section_title cs_two_tone cs_home_heading_sz mb-0 wow fadeInDown">SUPPORTING OUR <br>INDUSTRY <span>PARTNERS</span></h2>
          <div class="cs_height_24"></div>
          <p class="cs_sticky_text">From pharmacists to prescribers and distributors, PharmaCrop supports every partner across the supply chain with reliable, Australian-grown, GMP-certified product.</p>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="cs_card_1_group">
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed active wow fadeInLeft" data-src="/assets/img/pharmacists.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/industry" class="cs_card_tag">Industry</a>
                <span class="cs_card_tag">Australian-Grown</span>
                <span class="cs_card_tag">GMP-Certified</span>
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
                <span class="cs_card_tag">Australian-Grown</span>
                <span class="cs_card_tag">GMP-Certified</span>
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
                <span class="cs_card_tag">Australian-Grown</span>
                <span class="cs_card_tag">GMP-Certified</span>
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
    <!-- Start Homepage FAQ Section -->
    <style>
      .cs_home_faq_row { align-items: stretch; }
      .cs_home_faq_row .cs_img_box { height: 100%; }
      .cs_home_faq_row .cs_img_box img { height: 100%; object-fit: cover; }
      @media (max-width: 1199px) {
        .cs_home_faq_row .cs_img_box { height: auto; }
        .cs_home_faq_row .cs_img_box img { height: auto; }
      }
    </style>
    <section class="cs_gray_bg">
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_2 cs_color_1">
          <div>
            <span class="cs_sticky_eyebrow">F.A.Q</span>
            <h2 class="cs_section_title cs_home_heading_sz mb-0">FREQUENTLY <br><span>ASKED</span> QUESTIONS</h2>
          </div>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="row cs_gap_y_30 cs_home_faq_row">
          <div class="col-xxl-4 col-xl-5">
            <div class="cs_img_box cs_style_2">
              <img src="/assets/img/pharmacrop-banner3.webp" alt="" class="cs_radius_20 w-100">
            </div>
          </div>
          <div class="col-xxl-8 col-xl-7">
            <div class="cs_accordians cs_style_1">
              <div class="cs_accordian active">
                <div class="cs_accordian_head">
                  <p class="cs_accordian_title cs_fs_20 cs_bold cs_heading_color">What does PharmaCrop do?</p>
                  <span class="cs_accordian_toggle cs_heading_color">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0001 11.2501C9.77627 11.2501 9.55227 11.1645 9.38143 10.9937L0.63143 2.24368C0.289523 1.90177 0.289523 1.34812 0.63143 1.00643C0.973336 0.664742 1.52699 0.664523 1.86868 1.00643L10.0001 9.1378L18.1314 1.00643C18.4733 0.664523 19.027 0.664523 19.3687 1.00643C19.7104 1.34834 19.7106 1.90199 19.3687 2.24368L10.6187 10.9937C10.4478 11.1645 10.2238 11.2501 10.0001 11.2501Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
                <div class="cs_accordian_body cs_heading_color cs_opacity_7_5">
                  <p>PharmaCrop is an Australian-grown, GMP-certified cultivation and manufacturing company based in the Noosa Hinterland, Queensland. We combine international cultivation expertise with pharmaceutical-grade manufacturing standards to support a growing portfolio of Australian-grown products.</p>
                </div>
              </div><!-- .cs_accordian -->
              <div class="cs_accordian">
                <div class="cs_accordian_head">
                  <p class="cs_accordian_title cs_fs_20 cs_bold cs_heading_color">Is PharmaCrop's manufacturing GMP-certified?</p>
                  <span class="cs_accordian_toggle cs_heading_color">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0001 11.2501C9.77627 11.2501 9.55227 11.1645 9.38143 10.9937L0.63143 2.24368C0.289523 1.90177 0.289523 1.34812 0.63143 1.00643C0.973336 0.664742 1.52699 0.664523 1.86868 1.00643L10.0001 9.1378L18.1314 1.00643C18.4733 0.664523 19.027 0.664523 19.3687 1.00643C19.7104 1.34834 19.7106 1.90199 19.3687 2.24368L10.6187 10.9937C10.4478 11.1645 10.2238 11.2501 10.0001 11.2501Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
                <div class="cs_accordian_body cs_heading_color cs_opacity_7_5">
                  <p>Yes. Our manufacturing operations run under GMP-certified standards, backed by ISO-aligned quality systems, so every batch meets consistent, pharmaceutical-grade requirements from cultivation through to finished product.</p>
                </div>
              </div><!-- .cs_accordian -->
              <div class="cs_accordian">
                <div class="cs_accordian_head">
                  <p class="cs_accordian_title cs_fs_20 cs_bold cs_heading_color">Who does PharmaCrop supply?</p>
                  <span class="cs_accordian_toggle cs_heading_color">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0001 11.2501C9.77627 11.2501 9.55227 11.1645 9.38143 10.9937L0.63143 2.24368C0.289523 1.90177 0.289523 1.34812 0.63143 1.00643C0.973336 0.664742 1.52699 0.664523 1.86868 1.00643L10.0001 9.1378L18.1314 1.00643C18.4733 0.664523 19.027 0.664523 19.3687 1.00643C19.7104 1.34834 19.7106 1.90199 19.3687 2.24368L10.6187 10.9937C10.4478 11.1645 10.2238 11.2501 10.0001 11.2501Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
                <div class="cs_accordian_body cs_heading_color cs_opacity_7_5">
                  <p>We work with pharmacists, prescribers and distribution partners across Australia's regulated supply chain, supporting quality, consistency and reliable supply. Visit our Industry page to learn more about partnering with us.</p>
                </div>
              </div><!-- .cs_accordian -->
              <div class="cs_accordian">
                <div class="cs_accordian_head">
                  <p class="cs_accordian_title cs_fs_20 cs_bold cs_heading_color">Where is PharmaCrop based?</p>
                  <span class="cs_accordian_toggle cs_heading_color">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0001 11.2501C9.77627 11.2501 9.55227 11.1645 9.38143 10.9937L0.63143 2.24368C0.289523 1.90177 0.289523 1.34812 0.63143 1.00643C0.973336 0.664742 1.52699 0.664523 1.86868 1.00643L10.0001 9.1378L18.1314 1.00643C18.4733 0.664523 19.027 0.664523 19.3687 1.00643C19.7104 1.34834 19.7106 1.90199 19.3687 2.24368L10.6187 10.9937C10.4478 11.1645 10.2238 11.2501 10.0001 11.2501Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
                <div class="cs_accordian_body cs_heading_color cs_opacity_7_5">
                  <p>Our cultivation and manufacturing operations are based in the Noosa Hinterland, Queensland, bringing local production together within a single, integrated site.</p>
                </div>
              </div><!-- .cs_accordian -->
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Homepage FAQ Section -->
    <!-- Start Works Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_2 cs_color_1">
          <div>
            <span class="cs_sticky_eyebrow">BLOGS</span>
            <h2 class="cs_section_title cs_home_heading_sz mb-0 wow fadeInDown">FROM THE <br>PHARMACROP <span>JOURNAL</span></h2>
          </div>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="cs_full_width_slider_section">
          <div class="cs_slider cs_style_1 cs_slider_gap_24">
            <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="800" data-center="0" data-variable-width="1" data-slides-per-view="1">
              <div class="cs_slider_wrapper">
                <div class="cs_slide">
                  <div class="cs_card cs_style_4">
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/hero_bg.jpg"></div>
                    <div class="cs_card_info">
                      <ul class="cs_card_info_list cs_mp_0">
                        <li>
                          <p class="mb-0">CATEGORY</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold">CULTIVATION</h3>
                        </li>
                        <li>
                          <p class="mb-0">READ MORE</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold"><a href="/blog/noosa-hinterland-home-of-pharmacrop">THE NOOSA HINTERLAND: HOME OF PHARMACROP</a></h3>
                        </li>
                      </ul>
                      <div class="cs_card_text">The Noosa Hinterland provides the home for our cultivation and manufacturing operations, bringing local production together within a single region.</div>
                    </div>
                  </div>
                </div>
                <div class="cs_slide">
                  <div class="cs_card cs_style_4">
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/video_block_bg.jpg"></div>
                    <div class="cs_card_info">
                      <ul class="cs_card_info_list cs_mp_0">
                        <li>
                          <p class="mb-0">CATEGORY</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold">MANUFACTURING</h3>
                        </li>
                        <li>
                          <p class="mb-0">READ MORE</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold"><a href="/blog/from-genetics-to-gmp-certified-manufacturing">FROM GENETICS TO GMP-CERTIFIED MANUFACTURING</a></h3>
                        </li>
                      </ul>
                      <div class="cs_card_text">By bringing cultivation, processing and GMP-certified manufacturing together, PharmaCrop maintains oversight from cultivar selection through to finished product.</div>
                    </div>
                  </div>
                </div>
                <div class="cs_slide">
                  <div class="cs_card cs_style_4">
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/post_1.jpg"></div>
                    <div class="cs_card_info">
                      <ul class="cs_card_info_list cs_mp_0">
                        <li>
                          <p class="mb-0">CATEGORY</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold">CULTIVATION</h3>
                        </li>
                        <li>
                          <p class="mb-0">READ MORE</p>
                          <h3 class="mb-0 cs_fs_20 cs_bold"><a href="/blog/global-cultivation-expertise-hinterland-honed">GLOBAL CULTIVATION EXPERTISE, HINTERLAND-HONED</a></h3>
                        </li>
                      </ul>
                      <div class="cs_card_text">Drawing on cultivation expertise from California, Canada and South Africa, our team applies international insights within the unique conditions of the Noosa Hinterland.</div>
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
      }
    </style>
    <section class="cs_contact_card_section">
      <div class="container">
        <div class="cs_contact_card">
          <div class="cs_contact_card_bg"><img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt=""></div>
          <div class="cs_contact_card_top">
            <p class="cs_contact_info_label">Get More Information:</p>
            <a href="mailto:enquiries@pharmacrop.com.au" class="cs_contact_pill"><span class="cs_contact_pill_icon"><i class="fa-solid fa-envelope"></i></span>enquiries@pharmacrop.com.au</a>
            <a href="tel:1300053533" class="cs_contact_pill"><span class="cs_contact_pill_icon"><i class="fa-solid fa-phone"></i></span>1300 053 533</a>
          </div>
          <div class="cs_contact_card_bottom">
            <div class="cs_contact_eyebrow_row">
              <span class="cs_contact_eyebrow_icon"><i class="fa-solid fa-seedling"></i></span>
              <span class="cs_contact_eyebrow_text">CONTACT US</span>
            </div>
            <h2 class="cs_contact_card_title">Cultivated With Purpose, Delivered With Trust</h2>
            <p class="cs_contact_card_sub">Australian-grown, GMP-certified cultivation and manufacturing &mdash; get in touch to discuss supply, partnership and product options.</p>
            <form action="https://api.web3forms.com/submit" method="POST" class="cs_contact_form_bar">
              <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c">
              <input type="hidden" name="subject" value="New Enquiry - PharmaCrop Website">
              <input type="text" name="name" placeholder="Type Your Name ..." required>
              <input type="email" name="email" placeholder="Type Your Mail ..." required>
              <select name="interest" defaultValue="">
                <option value="" disabled selected>Select Your Interest</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Prescriber">Prescriber</option>
                <option value="Distributor">Distributor</option>
                <option value="Other">Other</option>
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
                <li><a href="https://aleafiate.com.au/" target="_blank" rel="noopener noreferrer">SEE OUR DOCTORS</a></li>
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
    <!-- Script -->
    
    
    
    
    
    
  

`,
      }}
    />
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
    </>
  );
}
