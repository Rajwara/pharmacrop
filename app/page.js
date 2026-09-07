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
      @media (min-width: 992px) {
        .cs_hero.cs_style_1 .cs_hero_funfact_wrap { max-width: 300px; }
        .cs_hero.cs_style_1 .cs_hero_funfact .cs_fs_20 { font-size: 15px !important; }
        .cs_hero.cs_style_1 .cs_hero_text { max-width: 750px !important; }
        .cs_hero.cs_style_1 .cs_hero_title.cs_fs_80 { font-size: 64px !important; }
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
              <h3 class="cs_fs_24 cs_bold cs_white_color mb-0">QUALITY &amp; COMPLIANCE</h3>
              <p class="cs_fs_20 cs_white_color cs_opacity_7_5 cs_mb_16">Australian-made. GMP-certified. TGA licensed.</p>
              <div class="cs_circle_group">
                <img src="/assets/img/AUSTRALIAN-MADE.png" alt="Australian Made">
                <img src="/assets/img/GMP-CERTIFIED.png" alt="GMP Certified">
                <img src="/assets/img/TGA-LICENSED.png" alt="TGA Licensed">
              </div>
            </div>
          </div>
          <div class="cs_hero_box wow fadeInUp">
            <div class="cs_hero_box_icon cs_mb_29">
              <img src="/assets/img/Handshake-White.svg" alt="" width="40" height="40">
            </div>
            <h3 class="cs_hero_box_title cs_fs_24 cs_mb_12 cs_white_color">Partner With PharmaCrop</h3>
            <p class="cs_hero_box_subtitle mb-0 cs_opacity_7_5">Explore flexible commercial pathways across Australian-grown products, manufacturing and supply.</p>
            <a href="/commercial-partnerships" class="cs_arrow_btn cs_hero_box_btn cs_center cs_heading_bg cs_white_color">
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
            <span class="cs_sticky_eyebrow">Precision Cultivation</span>
            <h2 class="cs_sticky_title cs_two_tone cs_home_heading_sz wow fadeInDown">BUILDING<br>PHARMACEUTICAL<br>QUALITY FROM<br><span>THE GROUND UP</span></h2>
            <p class="cs_sticky_text">Consistent pharmaceutical products begin with consistent agricultural systems. Our cultivation platform combines controlled environments, advanced growing systems and environmental precision.</p>
          </div>
          <div class="cs_sticky_services_right">
            <div class="cs_sticky_card">
              <img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="Controlled Cultivation">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-seedling"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Controlled Cultivation</h3>
                <p class="cs_sticky_card_text">Purpose-built hybrid greenhouse designed for repeatable cultivation and consistent, scalable Australian-grown supply.</p>
                <a href="/about" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
            <div class="cs_sticky_card">
              <img src="/assets/img/pharmacrop-banner3.webp" alt="Advanced Growing Systems">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-droplet"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Advanced Growing Systems</h3>
                <p class="cs_sticky_card_text">Soilless cultivation with cultivar-specific nutrition programs, providing bespoke nutrient delivery for strong growth and consistent cannabinoid and terpene expression.</p>
                <a href="/industry" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
            <div class="cs_sticky_card">
              <img src="/assets/img/pharmacrop-banner4.webp" alt="Environmental Precision">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-temperature-half"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Environmental Precision</h3>
                <p class="cs_sticky_card_text">Continuous monitoring and control of light, temperature, humidity, CO&#8322; and irrigation to optimise plant health and ensure repeatable, pharmaceutical-grade biomass.</p>
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
      .cs_card_icon { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 8px; color: #fff; font-size: 18px; margin-bottom: 16px; }
      .cs_card_1_group .cs_card_title.cs_fs_32 { font-size: 24px !important; }
      @media (max-width: 1400px) {
        .cs_card_1_group .cs_card_title.cs_fs_32 { font-size: 22px !important; }
      }
      @media (max-width: 1199px) {
        .cs_card_1_group .cs_card_title.cs_fs_32 { font-size: 20px !important; }
      }
      .cs_card_1_group .cs_card.cs_style_1.active .cs_card_title { font-size: 56px !important; }
      @media (max-width: 1400px) {
        .cs_card_1_group .cs_card.cs_style_1.active .cs_card_title { font-size: 48px !important; }
      }
      @media (max-width: 1199px) {
        .cs_card_1_group .cs_card.cs_style_1.active .cs_card_title { font-size: 42px !important; }
      }
      @media (max-width: 991px) {
        .cs_card_1_group .cs_card.cs_style_1.active .cs_card_title { font-size: 22px !important; }
      }
    </style>
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_partners_heading">
          <span class="cs_sticky_eyebrow">COMMERCIAL PARTNERSHIPS</span>
          <h2 class="cs_section_title cs_two_tone cs_home_heading_sz mb-0 wow fadeInDown">ONE PARTNER.<br>MULTIPLE <span>COMMERCIAL PATHWAYS.</span></h2>
          <div class="cs_height_24"></div>
          <p class="cs_sticky_text">One Australian GMP-certified manufacturing platform offering four flexible commercial partnership models to suit your needs.</p>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="cs_card_1_group">
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed active wow fadeInLeft" data-src="/assets/img/pharmacrop-banner4.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/commercial-partnerships" class="cs_card_tag">Commercial</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-prescription-bottle"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">RETAIL</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">PharmaCrop branded, ready-to-market medicines.</p>
            </div>
            <a href="/commercial-partnerships" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed" data-src="/assets/img/pharmacrop-banner2.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/commercial-partnerships" class="cs_card_tag">Commercial</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-tag"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">GREEN LABEL</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">PharmaCrop products, exclusively branded for your business.</p>
            </div>
            <a href="/commercial-partnerships" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed" data-src="/assets/img/health-professionals-card.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/commercial-partnerships" class="cs_card_tag">Commercial</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-box"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">WHITE LABEL</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">Your brand, supported by PharmaCrop cultivation and GMP packaging.</p>
            </div>
            <a href="/commercial-partnerships" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed wow fadeInRight" data-src="/assets/img/pharma-banner.jpeg">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/commercial-partnerships" class="cs_card_tag">Commercial</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-cannabis"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">BULK FLOWER</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">Australian-grown, GMP-certified flower supplied in bulk.</p>
            </div>
            <a href="/commercial-partnerships" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
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
    <!-- Start Scroll Stack Projects Section -->
    <style>
      .cs_scroll_stack { position: relative; height: 200vh; background: #024242; }
      .cs_scroll_stack_sticky { position: sticky; top: 0; height: 100vh; overflow: hidden; display: flex; align-items: center; }
      .cs_scroll_stack_row { display: flex; align-items: center; width: 100%; gap: 60px; padding: 0 80px; box-sizing: border-box; }
      .cs_scroll_stack_left { flex: 0 0 420px; }
      .cs_scroll_stack_pretitle { color: rgba(255, 255, 255, 0.6); font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; display: block; }
      .cs_scroll_stack_title { color: #fff; font-size: 44px; font-weight: 800; line-height: 1.25; margin: 0 0 32px; }
      .cs_scroll_stack_btn { display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.5); color: #fff; border-radius: 30px; padding: 14px 28px; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-decoration: none; transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
      .cs_scroll_stack_btn:hover { background: #78dca6; border-color: #78dca6; color: #024242; }
      .cs_scroll_stack_right { position: relative; flex: 1; height: 620px; }
      .cs_scroll_card { position: absolute; top: 50%; left: 50%; width: 700px; max-width: 90vw; border-radius: 16px; overflow: hidden; will-change: transform, filter, opacity; }
      .cs_scroll_card img { width: 100%; height: 440px; object-fit: cover; display: block; }
      .cs_scroll_card_content { position: absolute; left: 0; right: 0; bottom: 0; padding: 24px; background: linear-gradient(180deg, rgba(2, 20, 20, 0) 0%, rgba(2, 20, 20, 0.85) 100%); }
      .cs_scroll_card_tags { display: flex; gap: 4px; margin-bottom: 10px; flex-wrap: wrap; }
      .cs_scroll_card_tag { color: rgba(255, 255, 255, 0.8); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
      .cs_scroll_card_tag:not(:last-child)::after { content: "/"; margin-left: 8px; color: rgba(255, 255, 255, 0.4); }
      .cs_scroll_card_title { color: #fff; font-size: 24px; font-weight: 700; margin: 0; }
      @media (min-width: 1400px) {
        .cs_scroll_card { width: 800px; }
        .cs_scroll_card img { height: 480px; }
      }
      @media (max-width: 1199px) {
        .cs_scroll_stack_row { padding: 0 40px; gap: 32px; }
        .cs_scroll_stack_left { flex: 0 0 340px; }
        .cs_scroll_stack_right { height: 540px; }
        .cs_scroll_card { width: 520px; }
        .cs_scroll_card img { height: 340px; }
        .cs_scroll_stack_title { font-size: 36px; }
      }
      @media (max-width: 991px) {
        .cs_scroll_stack { height: 170vh; }
        .cs_scroll_stack_row { flex-direction: column; padding: 0 24px; gap: 32px; }
        .cs_scroll_stack_left { flex: none; }
        .cs_scroll_stack_right { width: 100%; height: 460px; }
        .cs_scroll_card { width: 420px; max-width: 88vw; }
        .cs_scroll_card img { height: 300px; }
        .cs_scroll_stack_title { font-size: 30px; }
      }
      @media (max-width: 480px) {
        .cs_scroll_stack_right { height: 340px; }
        .cs_scroll_card { width: 320px; }
        .cs_scroll_card img { height: 220px; }
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
            <h2 class="cs_section_title mb-0 wow fadeInDown" style="font-size: 44px;">FROM THE <br>PHARMACROP <span>JOURNAL</span></h2>
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
    <!-- Start Stats Section -->
    <style>
      .cs_stats_section { background: #024242; padding: 100px 0; }
      .cs_stats_heading { max-width: 720px; margin: 0 auto 56px; text-align: center; }
      .cs_stats_eyebrow { display: inline-block; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 30px; padding: 6px 16px; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #78dca6; margin-bottom: 24px; text-transform: uppercase; }
      .cs_stats_title { color: #fff; margin: 0 0 20px; }
      .cs_stats_desc { color: rgba(255, 255, 255, 0.7); font-size: 16px; line-height: 1.7; margin: 0; }
      .cs_stats_grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; }
      .cs_stats_card { background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.14); border-radius: 16px; padding: 32px 24px; }
      .cs_stats_icon { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 8px; background: rgba(255, 255, 255, 0.12); color: #78dca6; font-size: 16px; margin-bottom: 24px; }
      .cs_stats_number { color: #fff; font-size: 32px; font-weight: 800; line-height: 1.2; margin: 0 0 8px; }
      .cs_stats_label { color: rgba(255, 255, 255, 0.65); font-size: 14px; line-height: 1.5; margin: 0; }
      @media (max-width: 1199px) {
        .cs_stats_grid { grid-template-columns: repeat(3, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_stats_grid { grid-template-columns: 1fr; }
        .cs_stats_heading { text-align: left; }
      }
    </style>
    <section class="cs_stats_section">
      <div class="container">
        <div class="cs_stats_heading">
          <span class="cs_stats_eyebrow">Our Stats</span>
          <h2 class="cs_stats_title cs_home_heading_sz wow fadeInDown">BUILT IN AUSTRALIA. BACKED BY REAL CAPABILITY.</h2>
          <p class="cs_stats_desc">A snapshot of the scale, infrastructure and product depth behind PharmaCrop&rsquo;s integrated platform.</p>
        </div>
        <div class="cs_stats_grid">
          <div class="cs_stats_card">
            <span class="cs_stats_icon"><i class="fa-solid fa-flag"></i></span>
            <h3 class="cs_stats_number">2023</h3>
            <p class="cs_stats_label">Established</p>
          </div>
          <div class="cs_stats_card">
            <span class="cs_stats_icon"><i class="fa-solid fa-warehouse"></i></span>
            <h3 class="cs_stats_number">4 Acres</h3>
            <p class="cs_stats_label">Purpose-built manufacturing site</p>
          </div>
          <div class="cs_stats_card">
            <span class="cs_stats_icon"><i class="fa-solid fa-weight-hanging"></i></span>
            <h3 class="cs_stats_number">~2.7 Tonnes / Year</h3>
            <p class="cs_stats_label">Current cultivation capacity</p>
          </div>
          <div class="cs_stats_card">
            <span class="cs_stats_icon"><i class="fa-solid fa-dna"></i></span>
            <h3 class="cs_stats_number">1,000+</h3>
            <p class="cs_stats_label">Candidate genetics evaluated</p>
          </div>
          <div class="cs_stats_card">
            <span class="cs_stats_icon"><i class="fa-solid fa-flask"></i></span>
            <h3 class="cs_stats_number">18</h3>
            <p class="cs_stats_label">Finished products</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Stats Section -->
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
              <li><a href="/about">About</a></li>
              <li><a href="/industry">Industry</a></li>
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
