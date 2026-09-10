export const metadata = {
  title: "Partnerships - PharmaCrop",
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
    <!-- Start Partnerships Hero Section -->
    <style>
      html { scroll-behavior: smooth; }
      .cs_pships_hero { position: relative; padding: 210px 0 140px; text-align: center; overflow: hidden; }
      .cs_pships_hero_bg { position: absolute; inset: 0; }
      .cs_pships_hero_bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_pships_hero_bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2, 42, 42, 0.78) 0%, rgba(2, 30, 30, 0.9) 100%); }
      .cs_pships_hero_content { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; }
      .cs_pships_hero_pill { display: inline-flex; align-items: center; gap: 8px; padding: 8px 22px; border-radius: 30px; background: rgba(120, 220, 166, 0.15); border: 1px solid rgba(120, 220, 166, 0.35); color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 26px; }
      .cs_pships_hero_content h1 { color: #fff; margin: 0 0 22px; line-height: 1.15; }
      .cs_pships_hero_content h1 span { color: #78dca6; }
      .cs_pships_hero_content p { color: rgba(255, 255, 255, 0.8); font-size: 18px; line-height: 1.7; margin: 0 auto 36px; max-width: 640px; }
      .cs_pships_hero_btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
      .cs_pships_solid_btn { display: inline-flex; align-items: center; justify-content: center; background: #024242; color: #fff; font-weight: 700; padding: 15px 32px; border-radius: 8px; font-size: 14px; letter-spacing: 0.3px; text-decoration: none; border: none; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease; }
      .cs_pships_solid_btn:hover { background: #78dca6; color: #024242; transform: translateY(-2px); }
      @media (max-width: 767px) {
        .cs_pships_hero { padding: 150px 0 100px; }
      }
    </style>
    <section class="cs_pships_hero cs_heading_bg cs_white_color">
      <div class="cs_pships_hero_bg"><img src="/assets/img/pharmacrop-banner1.webp" alt="PharmaCrop cultivation facility"></div>
      <div class="container cs_pships_hero_content">
        <span class="cs_pships_hero_pill wow fadeInUp">Partnerships &mdash; Flexible Pathways</span>
        <h1 class="cs_fs_80 cs_bold wow fadeInUp" data-wow-delay="0.1s">ONE PARTNER.<br><span>MULTIPLE COMMERCIAL PATHWAYS.</span></h1>
        <p class="wow fadeInUp" data-wow-delay="0.2s">Partner with PharmaCrop through four flexible commercial models backed by Australian-grown supply, GMP-certified manufacturing and integrated pharmaceutical capability.</p>
        <div class="cs_pships_hero_btns wow fadeInUp" data-wow-delay="0.3s">
          <a href="#partnership-models" class="cs_pships_solid_btn">EXPLORE PARTNERSHIP MODELS</a>
          <a href="/contact" class="cs_pships_solid_btn">CONTACT OUR TEAM</a>
        </div>
      </div>
    </section>
    <!-- End Partnerships Hero Section -->
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
    <section id="partnership-models" style="scroll-margin-top: 110px;">
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
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed active wow fadeInLeft" data-src="/assets/img/2-Retain%20.png">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/partnerships" class="cs_card_tag">Commercial</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-prescription-bottle"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">RETAIL</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">PharmaCrop branded, ready-to-market medicines.</p>
            </div>
            <a href="#retail-partnership" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed" data-src="/assets/img/2-%20Green%20Label.png">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/partnerships" class="cs_card_tag">Commercial</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-tag"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">GREEN LABEL</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">PharmaCrop products, exclusively branded for your business.</p>
            </div>
            <a href="#green-label-partnership" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed" data-src="/assets/img/2-%20White%20Label.png">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/partnerships" class="cs_card_tag">Commercial</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-box"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">WHITE LABEL</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">Your brand, supported by PharmaCrop cultivation and GMP packaging.</p>
            </div>
            <a href="#white-label-partnership" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <div class="cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed wow fadeInRight" data-src="/assets/img/2-%20Bulk%20Flower.png">
            <div class="cs_card_top">
              <div class="cs_card_tags">
                <a href="/" class="cs_card_tag">Home</a>
                <a href="/partnerships" class="cs_card_tag">Commercial</a>
              </div>
            </div>
            <div class="cs_card_bottom">
              <span class="cs_card_icon"><i class="fa-solid fa-cannabis"></i></span>
              <h2 class="cs_card_title cs_white_color cs_fs_32">BULK FLOWER</h2>
              <p class="cs_card_subtitle mb-0 cs_white_color">Australian-grown, GMP-certified flower supplied in bulk.</p>
            </div>
            <a href="#bulk-flower-partnership" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
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
    <!-- Start Partnership Model Detail Sections -->
    <style>
      .cs_pmodel_section { padding: 90px 0; }
      .cs_pmodel_section.cs_pmodel_alt { background: #f7faf8; }
      .cs_pmodel_row { display: flex; align-items: center; gap: 70px; }
      .cs_pmodel_row.cs_pmodel_row_rev { flex-direction: row-reverse; }
      .cs_pmodel_img { flex: 0 0 46%; border-radius: 16px; overflow: hidden; }
      .cs_pmodel_img img { width: 100%; height: 440px; object-fit: cover; display: block; }
      .cs_pmodel_content { flex: 1; }
      .cs_pmodel_label { display: inline-flex; align-items: center; padding: 8px 22px; border: 1px solid rgba(2, 66, 66, 0.18); border-radius: 30px; background: #fff; color: #024242; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 22px; }
      .cs_pmodel_content h2 { color: #024242; font-size: 38px; font-weight: 800; line-height: 1.2; margin: 0 0 18px; }
      .cs_pmodel_content > p.cs_pmodel_desc { color: #555; font-size: 16px; line-height: 1.75; margin: 0 0 32px; }
      .cs_pmodel_points { list-style: none; margin: 0 0 36px; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 20px 24px; }
      .cs_pmodel_point { display: flex; align-items: flex-start; gap: 12px; }
      .cs_pmodel_point i { color: #78dca6; font-size: 16px; margin-top: 3px; flex: none; }
      .cs_pmodel_point strong { display: block; color: #024242; font-size: 15px; margin-bottom: 2px; }
      .cs_pmodel_point span { color: #666; font-size: 14px; line-height: 1.5; }
      @media (max-width: 991px) {
        .cs_pmodel_row, .cs_pmodel_row.cs_pmodel_row_rev { flex-direction: column; gap: 36px; }
        .cs_pmodel_img { flex: none; width: 100%; }
        .cs_pmodel_img img { height: 320px; }
        .cs_pmodel_points { grid-template-columns: 1fr; }
        .cs_pmodel_content h2 { font-size: 28px; }
      }
    </style>
    <!-- Retail -->
    <section class="cs_pmodel_section" id="retail-partnership" style="scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_pmodel_row">
          <div class="cs_pmodel_img wow fadeInLeft">
            <img src="/assets/img/pharmacrop-banner4.webp" alt="PharmaCrop established medicines">
          </div>
          <div class="cs_pmodel_content wow fadeInRight">
            <span class="cs_pmodel_label">01 / RETAIL</span>
            <h2>ESTABLISHED PHARMACROP MEDICINES</h2>
            <p class="cs_pmodel_desc">Access ready-to-market finished medicines from PharmaCrop&rsquo;s established Australian portfolio, supported by Australian-grown production and GMP-certified manufacturing.</p>
            <ul class="cs_pmodel_points">
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Established Portfolio</strong><span>Finished PharmaCrop medicines across multiple dosage forms.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Australian Grown</strong><span>Supported by PharmaCrop&rsquo;s Australian cultivation capability.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>GMP Certified</strong><span>Manufactured within PharmaCrop&rsquo;s GMP-certified platform.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Ready to Market</strong><span>Supplied under the established PharmaCrop brand.</span></span></li>
            </ul>
            <a href="/products" class="cs_pships_solid_btn">VIEW PHARMACROP PRODUCTS &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Green Label -->
    <section class="cs_pmodel_section cs_pmodel_alt" id="green-label-partnership" style="scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_pmodel_row cs_pmodel_row_rev">
          <div class="cs_pmodel_img wow fadeInRight">
            <img src="/assets/img/pharmacrop-banner2.webp" alt="Green Label branded partnership">
          </div>
          <div class="cs_pmodel_content wow fadeInLeft">
            <span class="cs_pmodel_label">02 / GREEN LABEL</span>
            <h2>ESTABLISHED MEDICINES. YOUR EXCLUSIVE BRAND.</h2>
            <p class="cs_pmodel_desc">Build your own market presence using established PharmaCrop medicines, with your branding, product identity and agreed market exclusivity.</p>
            <ul class="cs_pmodel_points">
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Established Medicines</strong><span>Leverage PharmaCrop&rsquo;s established formulations.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Your Brand</strong><span>Your logo, packaging and product name.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Market Exclusivity</strong><span>Exclusive rights within an agreed market.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>GMP Manufactured</strong><span>Pharmaceutical-grade manufacturing by PharmaCrop.</span></span></li>
            </ul>
            <a href="/contact" class="cs_pships_solid_btn">DISCUSS GREEN LABEL &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    <!-- White Label -->
    <section class="cs_pmodel_section" id="white-label-partnership" style="scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_pmodel_row">
          <div class="cs_pmodel_img wow fadeInLeft">
            <img src="/assets/img/health-professionals-card.webp" alt="White Label branded partnership">
          </div>
          <div class="cs_pmodel_content wow fadeInRight">
            <span class="cs_pmodel_label">03 / WHITE LABEL</span>
            <h2>YOUR BRAND. OUR CULTIVATION &amp; PACKAGING.</h2>
            <p class="cs_pmodel_desc">Bring Australian-grown medicinal cannabis to market under your own brand, supported by PharmaCrop cultivation, exclusive cultivars and GMP finished-product capability.</p>
            <ul class="cs_pmodel_points">
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Australian-Grown Flower</strong><span>Cultivated in Queensland, Australia.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Exclusive Cultivars</strong><span>Access selected PharmaCrop cultivars.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>GMP Finished Goods</strong><span>Packaging and finished-product supply by PharmaCrop.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Your Brand</strong><span>Your own branding and product identity.</span></span></li>
            </ul>
            <a href="/contact" class="cs_pships_solid_btn">DISCUSS WHITE LABEL &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Bulk Flower -->
    <section class="cs_pmodel_section cs_pmodel_alt" id="bulk-flower-partnership" style="scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_pmodel_row cs_pmodel_row_rev">
          <div class="cs_pmodel_img wow fadeInRight">
            <img src="/assets/img/pharma-banner.jpeg" alt="Australian-grown bulk flower cultivation">
          </div>
          <div class="cs_pmodel_content wow fadeInLeft">
            <span class="cs_pmodel_label">04 / BULK FLOWER</span>
            <h2>AUSTRALIAN-GROWN. SUPPLIED IN BULK.</h2>
            <p class="cs_pmodel_desc">Access Australian-grown flower through PharmaCrop&rsquo;s integrated platform for downstream processing and flexible commercial supply requirements.</p>
            <ul class="cs_pmodel_points">
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Australian Grown</strong><span>Cultivated in the Noosa Hinterland, Queensland.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Cultivar Access</strong><span>Access PharmaCrop&rsquo;s Australian cultivar portfolio.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>GMP-Certified Supply</strong><span>Supported by PharmaCrop&rsquo;s pharmaceutical platform.</span></span></li>
              <li class="cs_pmodel_point"><i class="fa-solid fa-circle-check"></i><span><strong>Flexible Supply</strong><span>Designed for partners requiring bulk flower for processing.</span></span></li>
            </ul>
            <a href="/contact" class="cs_pships_solid_btn">DISCUSS BULK SUPPLY &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Partnership Model Detail Sections -->
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
