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
    <style>
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
              <a href="https://aleafiate.com.au/" target="_blank" rel="noopener noreferrer" class="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg wow fadeInLeft">FIND A HEALTHCARE PROVIDER</a>
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
            <a href="/partnerships" class="cs_arrow_btn cs_hero_box_btn cs_center cs_heading_bg cs_white_color">
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
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page-hero-1.webp"></div>
              </div>
              <div class="cs_slide">
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page-hero-2.webp"></div>
              </div>
              <div class="cs_slide">
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page-hero-3.webp"></div>
              </div>
              <div class="cs_slide">
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page-hero-4.webp"></div>
              </div>
              <div class="cs_slide">
                <div class="cs_hero_bg_in cs_bg_filed" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page-hero-5.webp"></div>
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
              <img src="/assets/img/pharmacrop%20home%20assets/Home%20page-Precision%20Cultivation-1.webp" alt="Controlled Cultivation">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-seedling"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Controlled Cultivation</h3>
                <p class="cs_sticky_card_text">Purpose-built hybrid greenhouse designed for repeatable cultivation and consistent, scalable Australian-grown supply.</p>
                <a href="/about" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
            <div class="cs_sticky_card">
              <img src="/assets/img/pharmacrop%20home%20assets/Home%20page-Precision%20Cultivation-2.webp" alt="Advanced Growing Systems">
              <span class="cs_sticky_card_icon"><i class="fa-solid fa-droplet"></i></span>
              <div class="cs_sticky_card_body">
                <h3 class="cs_sticky_card_title">Advanced Growing Systems</h3>
                <p class="cs_sticky_card_text">Soilless cultivation with cultivar-specific nutrition programs, providing bespoke nutrient delivery for strong growth and consistent cannabinoid and terpene expression.</p>
                <a href="/industry" class="cs_sticky_card_link">READ MORE <span>&rarr;</span></a>
              </div>
            </div>
            <div class="cs_sticky_card">
              <img src="/assets/img/pharmacrop%20home%20assets/Home%20page-Precision%20Cultivation-3.webp" alt="Environmental Precision">
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
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed active wow fadeInLeft" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20COMMERCIAL%20PARTNERSHIPS-1.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/partnerships" class="cs_card_tag">Partnerships</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-prescription-bottle"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">RETAIL</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">PharmaCrop branded, ready-to-market medicines.</p>
            </div>
            <a href="/partnerships" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20COMMERCIAL%20PARTNERSHIPS-2.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/partnerships" class="cs_card_tag">Partnerships</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-tag"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">GREEN LABEL</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">PharmaCrop products, exclusively branded for your business.</p>
            </div>
            <a href="/partnerships" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20COMMERCIAL%20PARTNERSHIPS-3.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/partnerships" class="cs_card_tag">Partnerships</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-box"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">WHITE LABEL</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">Your brand, supported by PharmaCrop cultivation and GMP packaging.</p>
            </div>
            <a href="/partnerships" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed wow fadeInRight" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20COMMERCIAL%20PARTNERSHIPS-4.webp">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/partnerships" class="cs_card_tag">Partnerships</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-cannabis"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">BULK FLOWER</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">Australian-grown, GMP-certified flower supplied in bulk.</p>
            </div>
            <a href="/partnerships" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
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
    <!-- Start Integrated Platform Journey Section -->
    <style>
      .cs_platform_journey { padding: 110px 0; background: #f7faf8; }
      .cs_platform_journey_head { max-width: 700px; margin: 0 auto 60px; text-align: center; }
      .cs_platform_journey_eyebrow { display: inline-flex; align-items: center; padding: 8px 22px; border: 1px solid rgba(2, 66, 66, 0.18); border-radius: 30px; background: #fff; color: #024242; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; font-size: 12px; margin-bottom: 18px; }
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
      .cs_platform_items { display: flex; flex-direction: column; gap: 20px; }
      .cs_platform_item { display: flex; align-items: stretch; gap: 32px; border-radius: 16px; padding: 12px; transition: background-color 0.3s ease; }
      .cs_platform_item_img { flex: 0 0 260px; border-radius: 12px; overflow: hidden; }
      .cs_platform_item_img img { display: block; width: 100%; height: 220px; object-fit: cover; }
      .cs_platform_item_body { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 8px 0; }
      .cs_platform_item_icon { display: none; width: 48px; height: 48px; border-radius: 50%; background: rgba(120,220,166,0.18); color: #78dca6; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 16px; }
      .cs_platform_item_body h3 { color: #024242; font-size: 22px; margin: 0 0 10px; transition: color 0.3s ease; }
      .cs_platform_item_body p { color: #666; font-size: 15px; line-height: 1.7; margin: 0; max-width: 420px; transition: color 0.3s ease; }
      .cs_platform_item.active { background: #024242; padding: 0; gap: 0; }
      .cs_platform_item.active .cs_platform_item_img { flex-basis: 45%; border-radius: 16px 0 0 16px; }
      .cs_platform_item.active .cs_platform_item_img img { height: 320px; border-radius: 0; }
      .cs_platform_item.active .cs_platform_item_body { padding: 48px; }
      .cs_platform_item.active .cs_platform_item_icon { display: flex; }
      .cs_platform_item.active .cs_platform_item_body h3 { color: #fff; font-size: 28px; }
      .cs_platform_item.active .cs_platform_item_body p { color: rgba(255,255,255,0.85); }
      @media (max-width: 991px) {
        .cs_platform_tabs { grid-template-columns: 1fr; }
        .cs_platform_tabs_nav { position: static; flex-direction: row; overflow-x: auto; }
        .cs_platform_tab { flex: 0 0 auto; width: auto; white-space: nowrap; border-bottom: none; border-right: 1px solid #eee; }
        .cs_platform_tab:last-child { border-right: none; }
      }
      @media (max-width: 767px) {
        .cs_platform_journey { padding: 80px 0; }
        .cs_platform_journey_title { font-size: 28px; }
        .cs_platform_item { flex-direction: column; }
        .cs_platform_item_img { flex-basis: auto; }
        .cs_platform_item_img img { height: 200px; }
        .cs_platform_item.active .cs_platform_item_img { border-radius: 16px 16px 0 0; }
        .cs_platform_item.active .cs_platform_item_img img { height: 220px; }
        .cs_platform_item.active .cs_platform_item_body { padding: 32px; }
      }
      @media (max-width: 600px) {
        .cs_platform_item.active .cs_platform_item_body h3 { font-size: 22px; }
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
          <div class="cs_platform_items">
            <div class="cs_platform_item active" data-index="0">
              <div class="cs_platform_item_img"><img src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20Integrated%20Platform-1.webp" alt="Genetics"></div>
              <div class="cs_platform_item_body">
                <span class="cs_platform_item_icon"><i class="fa-solid fa-dna"></i></span>
                <h3>Genetics</h3>
                <p>Proprietary phenohunt programs select high-performing cultivars.</p>
              </div>
            </div>
            <div class="cs_platform_item" data-index="1">
              <div class="cs_platform_item_img"><img src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20Integrated%20Platform-2.webp" alt="Cultivation"></div>
              <div class="cs_platform_item_body">
                <span class="cs_platform_item_icon"><i class="fa-solid fa-seedling"></i></span>
                <h3>Cultivation</h3>
                <p>Australian-grown using controlled-environment cultivation in the Noosa Hinterland.</p>
              </div>
            </div>
            <div class="cs_platform_item" data-index="2">
              <div class="cs_platform_item_img"><img src="/assets/img/GMP%20Manufacturing.webp" alt="GMP Manufacturing"></div>
              <div class="cs_platform_item_body">
                <span class="cs_platform_item_icon"><i class="fa-solid fa-industry"></i></span>
                <h3>GMP Manufacturing</h3>
                <p>Manufacturing within a GMP-certified facility to pharmaceutical standards.</p>
              </div>
            </div>
            <div class="cs_platform_item" data-index="3">
              <div class="cs_platform_item_img"><img src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20Integrated%20Platform-3.webp" alt="Quality &amp; Release"></div>
              <div class="cs_platform_item_body">
                <span class="cs_platform_item_icon"><i class="fa-solid fa-shield-halved"></i></span>
                <h3>Quality &amp; Release</h3>
                <p>Rigorous quality systems support safety, consistency and regulatory compliance.</p>
              </div>
            </div>
            <div class="cs_platform_item" data-index="4">
              <div class="cs_platform_item_img"><img src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20Integrated%20Platform-4.webp" alt="Research &amp; Innovation"></div>
              <div class="cs_platform_item_body">
                <span class="cs_platform_item_icon"><i class="fa-solid fa-microscope"></i></span>
                <h3>Research &amp; Innovation</h3>
                <p>Scientific expertise and product innovation drive continual advancement.</p>
              </div>
            </div>
            <div class="cs_platform_item" data-index="5">
              <div class="cs_platform_item_img"><img src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20Integrated%20Platform-5.webp" alt="Market Access &amp; Commercialisation"></div>
              <div class="cs_platform_item_body">
                <span class="cs_platform_item_icon"><i class="fa-solid fa-handshake"></i></span>
                <h3>Market Access &amp; Commercialisation</h3>
                <p>Commercial expertise supports market access and long-term healthcare adoption.</p>
              </div>
            </div>
            <div class="cs_platform_item" data-index="6">
              <div class="cs_platform_item_img"><img src="/assets/img/pharmacrop%20home%20assets/Home%20Page-%20Integrated%20Platform-6.webp" alt="Global Export"></div>
              <div class="cs_platform_item_body">
                <span class="cs_platform_item_icon"><i class="fa-solid fa-globe"></i></span>
                <h3>Global Export</h3>
                <p>Export-ready capability supports international partnerships and regulated global expansion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Integrated Platform Journey Section -->
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
            <h3 class="cs_stats_number">~2.7 T/ Year</h3>
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
    <!-- Start Licensing Compliance Section -->
    <style>
      .cs_licensing_section { padding: 110px 0; background: #fff; }
      .cs_licensing_head { text-align: center; max-width: 680px; margin: 0 auto 60px; }
      .cs_licensing_head span { display: inline-flex; align-items: center; padding: 8px 22px; border: 1px solid rgba(2, 66, 66, 0.18); border-radius: 30px; background: #fff; color: #024242; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; font-size: 12px; margin-bottom: 18px; }
      .cs_licensing_head h2 { color: #024242; font-size: 38px; line-height: 1.25; margin: 0 0 20px; }
      .cs_licensing_head p { color: #666; font-size: 16px; line-height: 1.7; margin: 0; }
      .cs_licensing_grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
      .cs_licensing_card { background: #f7faf8; border-radius: 12px; padding: 40px 32px; transition: 0.3s; border: 1px solid #eee; }
      .cs_licensing_card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(2,66,66,0.1); border-color: transparent; }
      .cs_licensing_icon { width: 62px; height: 62px; border-radius: 50%; background: rgba(120,220,166,0.15); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; font-size: 24px; color: #024242; }
      .cs_licensing_card h3 { color: #024242; font-size: 20px; margin-bottom: 12px; }
      .cs_licensing_card p { color: #666; font-size: 15px; line-height: 1.7; margin: 0; }
      .cs_licensing_statement { margin-top: 50px; text-align: center; padding: 28px 32px; border-radius: 12px; background: #024242; }
      .cs_licensing_statement p { color: #fff; font-size: 17px; font-weight: 600; line-height: 1.6; margin: 0 auto; max-width: 720px; }
      @media (max-width: 991px) { .cs_licensing_grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 600px) {
        .cs_licensing_grid { grid-template-columns: 1fr; }
        .cs_licensing_head h2 { font-size: 30px; }
        .cs_licensing_statement { padding: 24px; }
        .cs_licensing_statement p { font-size: 15px; }
      }
    </style>
    <section class="cs_licensing_section">
      <div class="container">
        <div class="cs_licensing_head wow fadeInUp">
          <span>Licensing &amp; Compliance</span>
          <h2>FULLY LICENSED ACROSS THE VALUE CHAIN</h2>
          <p>End-to-end regulatory capability supporting PharmaCrop from seed import and cultivation through to manufacturing, wholesale and global export.</p>
        </div>
        <div class="cs_licensing_grid">
          <div class="cs_licensing_card wow fadeInUp">
            <div class="cs_licensing_icon"><i class="fa-solid fa-dna"></i></div>
            <h3>Seed Import</h3>
            <p>ODC Import Permit supporting the regulated import of seed and genetic material.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_licensing_icon"><i class="fa-solid fa-seedling"></i></div>
            <h3>Cultivation</h3>
            <p>ODC Cultivation &amp; Production Licence supporting regulated Australian cultivation and production.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_licensing_icon"><i class="fa-solid fa-industry"></i></div>
            <h3>Manufacturing</h3>
            <p>TGA Licence to Manufacture Therapeutic Goods within PharmaCrop&rsquo;s Australian manufacturing platform.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp">
            <div class="cs_licensing_icon"><i class="fa-solid fa-box"></i></div>
            <h3>Packaging</h3>
            <p>GMP Manufacturing Licence supporting compliant pharmaceutical packaging and finished-product preparation.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_licensing_icon"><i class="fa-solid fa-warehouse"></i></div>
            <h3>Wholesale</h3>
            <p>ODC Wholesale Licence supporting regulated commercial supply across the cannabinoid medicines value chain.</p>
          </div>
          <div class="cs_licensing_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_licensing_icon"><i class="fa-solid fa-globe"></i></div>
            <h3>Export</h3>
            <p>ODC Export Permit supporting international supply and regulated global market access.</p>
          </div>
        </div>
        <div class="cs_licensing_statement wow fadeInUp">
          <p>Licensed across the entire value chain to support Australian manufacturing and global supply.</p>
        </div>
      </div>
    </section>
    <!-- End Licensing Compliance Section -->
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
              <img src="/assets/img/FAQs.png" alt="" class="cs_radius_20 w-100">
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
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page%20-Blogs-1.webp"></div>
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
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page%20-Blogs-2.webp"></div>
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
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/pharmacrop%20home%20assets/Home%20Page%20-Blogs-3.webp"></div>
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
        .cs_contact_card_section { padding-bottom: 40px !important; }
      }
    </style>
    <section class="cs_contact_card_section">
      <div class="container">
        <div class="cs_contact_card">
          <div class="cs_contact_card_bg"><img src="/assets/img/pharmacrop%20home%20assets/Home%20Page-PARTNER%20WITH%20PHARMACROP.webp" alt=""></div>
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
    <!-- Script -->
    
    
    
    
    
    
  

`,
      }}
    />
    <Script id="cs_platform_tabs_script" strategy="afterInteractive">
      {`
        (function () {
          var section = document.getElementById('cs_platform_journey');
          if (!section) return;
          var tabs = section.querySelectorAll('.cs_platform_tab');
          var items = section.querySelectorAll('.cs_platform_item');

          function setActive(idx) {
            tabs.forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-target') === idx); });
            items.forEach(function (it) { it.classList.toggle('active', it.getAttribute('data-index') === idx); });
          }

          tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
              var idx = tab.getAttribute('data-target');
              setActive(idx);
              requestAnimationFrame(function () {
                var target = section.querySelector('.cs_platform_item[data-index="' + idx + '"]');
                if (target) {
                  var rect = target.getBoundingClientRect();
                  var targetCenter = rect.top + window.scrollY + rect.height / 2;
                  var y = targetCenter - window.innerHeight / 2;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              });
            });
          });

          if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  setActive(entry.target.getAttribute('data-index'));
                }
              });
            }, { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 });
            items.forEach(function (it) { observer.observe(it); });
          }
        })();
      `}
    </Script>
    </>
  );
}
