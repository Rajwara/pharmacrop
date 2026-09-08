export const metadata = {
  title: "Products - PharmaCrop",
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
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/commercial-partnerships">Commercial Partnerships</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="cs_main_header_right">
              <div class="cs_header_icon_btns">
                <a href="#" class="cs_header_icon_btn cs_center" aria-label="Login">
                  <i class="fa-solid fa-user"></i>
                </a>
              </div>
              <a href="/contact" class="cs_header_cta_btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header Section -->
    <!-- Start Products Hero Section -->
    <style>
      html { scroll-behavior: smooth; }
      .cs_products_hero { position: relative; padding: 210px 0 140px; text-align: center; overflow: hidden; }
      .cs_products_hero_bg { position: absolute; inset: 0; }
      .cs_products_hero_bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_products_hero_bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2, 42, 42, 0.78) 0%, rgba(2, 30, 30, 0.9) 100%); }
      .cs_products_hero_content { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; }
      .cs_products_hero_pill { display: inline-flex; align-items: center; gap: 8px; padding: 8px 22px; border-radius: 30px; background: rgba(120, 220, 166, 0.15); border: 1px solid rgba(120, 220, 166, 0.35); color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 26px; }
      .cs_products_hero_content h1 { color: #fff; margin: 0 0 22px; line-height: 1.15; }
      .cs_products_hero_content h1 span { color: #78dca6; }
      .cs_products_hero_content p { color: rgba(255, 255, 255, 0.8); font-size: 18px; line-height: 1.7; margin: 0 auto 36px; max-width: 640px; }
      .cs_products_hero_btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
      .cs_products_btn_primary { background: #78dca6; color: #023232; padding: 15px 34px; border-radius: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; display: inline-block; transition: 0.3s; }
      .cs_products_btn_primary:hover { background: #d99f59; color: #fff; }
      .cs_products_btn_outline { border: 1px solid rgba(255, 255, 255, 0.4); color: #fff; padding: 15px 34px; border-radius: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; display: inline-block; transition: 0.3s; }
      .cs_products_btn_outline:hover { background: #fff; color: #023232; }
      @media (max-width: 767px) {
        .cs_products_hero { padding: 150px 0 100px; }
      }
    </style>
    <section class="cs_products_hero cs_heading_bg cs_white_color">
      <div class="cs_products_hero_bg"><img src="/assets/img/pharmacrop-banner3.webp" alt="PharmaCrop products"></div>
      <div class="container cs_products_hero_content">
        <span class="cs_products_hero_pill wow fadeInUp">Australian Product Portfolio</span>
        <h1 class="cs_fs_80 cs_bold wow fadeInUp" data-wow-delay="0.1s">AUSTRALIAN-GROWN.<br>GMP-CERTIFIED.<br><span>BUILT FOR HEALTHCARE.</span></h1>
        <p class="wow fadeInUp" data-wow-delay="0.2s">Explore PharmaCrop&rsquo;s established Australian portfolio across dried flower, oral liquid, pastilles and inhaled liquid.</p>
        <div class="cs_products_hero_btns wow fadeInUp" data-wow-delay="0.3s">
          <a href="#portfolio-overview" class="cs_products_btn_primary">EXPLORE OUR PRODUCTS</a>
          <a href="/contact" class="cs_products_btn_outline">ACCESS B2B ORDERING PORTAL</a>
        </div>
      </div>
    </section>
    <!-- End Products Hero Section -->
    <!-- Start Portfolio Overview Section -->
    <style>
      .cs_portfolio_head { max-width: 720px; margin: 0 auto 60px; text-align: center; }
      .cs_portfolio_eyebrow { display: block; color: #78dca6; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; font-size: 14px; margin-bottom: 14px; }
      .cs_portfolio_head h2 { color: #024242; font-size: 40px; line-height: 1.25; margin: 0 0 18px; }
      .cs_portfolio_head p { color: #666; font-size: 16px; line-height: 1.7; margin: 0; }
      .cs_portfolio_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 26px; }
      .cs_portfolio_card { background: #fff; border: 1px solid rgba(2, 66, 66, 0.1); border-radius: 16px; padding: 36px 28px; transition: 0.3s; }
      .cs_portfolio_card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(2, 66, 66, 0.1); border-color: transparent; }
      .cs_portfolio_icon { width: 58px; height: 58px; border-radius: 12px; background: rgba(120, 220, 166, 0.15); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 22px; }
      .cs_portfolio_card h3 { color: #024242; font-size: 20px; margin: 0 0 10px; }
      .cs_portfolio_card p { color: #666; font-size: 14px; line-height: 1.65; margin: 0 0 20px; }
      .cs_portfolio_card a { color: #024242; font-weight: 700; font-size: 13px; letter-spacing: 0.5px; text-decoration: none; }
      .cs_portfolio_card a:hover { color: #78dca6; }
      @media (max-width: 991px) {
        .cs_portfolio_grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_portfolio_grid { grid-template-columns: 1fr; }
        .cs_portfolio_head h2 { font-size: 30px; }
      }
    </style>
    <section id="portfolio-overview" style="padding: 100px 0; background: #fff; scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_portfolio_head wow fadeInUp">
          <span class="cs_portfolio_eyebrow">Our Portfolio</span>
          <h2>18 FINISHED PRODUCTS. FOUR DOSAGE FORMS.</h2>
          <p>An established Australian product portfolio spanning dried flower, oral liquid, pastilles and inhaled liquid.</p>
        </div>
        <div class="cs_portfolio_grid">
          <div class="cs_portfolio_card wow fadeInUp">
            <div class="cs_portfolio_icon"><i class="fa-solid fa-cannabis"></i></div>
            <h3>Dried Flower</h3>
            <p>Australian-grown dried flower across the Noosa Selects and PharmaCrop Premium ranges.</p>
            <a href="#dried-flower">VIEW DRIED FLOWER &rarr;</a>
          </div>
          <div class="cs_portfolio_card wow fadeInUp" data-wow-delay="0.1s">
            <div class="cs_portfolio_icon"><i class="fa-solid fa-droplet"></i></div>
            <h3>Oral Liquid</h3>
            <p>Finished oral liquid products across established PharmaCrop formulations.</p>
            <a href="#oral-liquid">VIEW ORAL LIQUID &rarr;</a>
          </div>
          <div class="cs_portfolio_card wow fadeInUp" data-wow-delay="0.2s">
            <div class="cs_portfolio_icon"><i class="fa-solid fa-tablets"></i></div>
            <h3>Pastilles</h3>
            <p>Finished PharmaCrop pastille products.</p>
            <a href="#pastilles">VIEW PASTILLES &rarr;</a>
          </div>
          <div class="cs_portfolio_card wow fadeInUp" data-wow-delay="0.3s">
            <div class="cs_portfolio_icon"><i class="fa-solid fa-wind"></i></div>
            <h3>Inhaled Liquid</h3>
            <p>Finished inhaled liquid products within the PharmaCrop portfolio.</p>
            <a href="#inhaled-liquid">VIEW INHALED LIQUID &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Overview Section -->
    <!-- Start Dried Flower Section (editorial layout) -->
    <style>
      .cs_dflower_section { padding: 100px 0; background: #f7faf8; }
      .cs_dflower_head { max-width: 760px; margin: 0 auto 56px; text-align: center; }
      .cs_dflower_label { display: inline-flex; align-items: center; padding: 8px 22px; border: 1px solid rgba(2, 66, 66, 0.18); border-radius: 30px; background: #fff; color: #024242; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 18px; }
      .cs_dflower_head h2 { color: #024242; font-size: 38px; font-weight: 800; line-height: 1.25; margin: 0 0 16px; }
      .cs_dflower_head p { color: #666; font-size: 16px; line-height: 1.7; margin: 0; }
      .cs_dflower_images { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 48px; }
      .cs_dflower_images figure { margin: 0; border-radius: 16px; overflow: hidden; position: relative; }
      .cs_dflower_images img { width: 100%; height: 360px; object-fit: cover; display: block; }
      .cs_dflower_images figcaption { position: absolute; left: 0; right: 0; bottom: 0; padding: 18px 22px; background: linear-gradient(180deg, rgba(2,42,42,0) 0%, rgba(2,34,34,0.8) 100%); color: #fff; font-weight: 700; font-size: 14px; letter-spacing: 0.5px; }
      .cs_dflower_body { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
      .cs_dflower_copy p { color: #555; font-size: 16px; line-height: 1.75; margin: 0 0 20px; }
      .cs_dflower_ctas { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 28px; }
      .cs_dflower_lists { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
      .cs_dflower_range_title { color: #024242; font-size: 17px; font-weight: 800; margin: 0 0 4px; }
      .cs_dflower_range_count { color: #78dca6; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 16px; }
      .cs_dflower_range_list { list-style: none; margin: 0; padding: 0; }
      .cs_dflower_range_list li { color: #024242; font-size: 14px; font-weight: 600; padding: 10px 0; border-bottom: 1px solid rgba(2, 66, 66, 0.1); }
      .cs_dflower_range_list li:first-child { padding-top: 0; }
      @media (max-width: 991px) {
        .cs_dflower_images { grid-template-columns: 1fr; }
        .cs_dflower_body { grid-template-columns: 1fr; gap: 36px; }
        .cs_dflower_lists { grid-template-columns: 1fr; }
      }
    </style>
    <section class="cs_dflower_section" id="dried-flower" style="scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_dflower_head wow fadeInUp">
          <span class="cs_dflower_label">DRIED FLOWER</span>
          <h2>AUSTRALIAN-GROWN DRIED FLOWER</h2>
          <p>Explore PharmaCrop&rsquo;s dried flower portfolio across the Noosa Selects and PharmaCrop Premium ranges.</p>
        </div>
        <div class="cs_dflower_images wow fadeInUp">
          <figure>
            <img src="/assets/img/pharma-banner.jpeg" alt="Noosa Selects dried flower range">
            <figcaption>Noosa Selects Range</figcaption>
          </figure>
          <figure>
            <img src="/assets/img/pharmacrop-banner2.webp" alt="PharmaCrop Premium dried flower range">
            <figcaption>PharmaCrop Premium Range</figcaption>
          </figure>
        </div>
        <div class="cs_dflower_body">
          <div class="cs_dflower_copy wow fadeInLeft">
            <p>PharmaCrop&rsquo;s dried flower range is Australian-grown and supported by controlled cultivation, pharmaceutical quality systems and an integrated manufacturing platform.</p>
            <p>Across the Noosa Selects and PharmaCrop Premium ranges, PharmaCrop offers a broad selection of finished dried flower products across multiple strengths and product profiles.</p>
            <div class="cs_dflower_ctas">
              <a href="/contact" class="cs_products_btn_primary" style="color:#023232;">ORDER THROUGH B2B PORTAL &rarr;</a>
              <a href="/contact" class="cs_btn cs_style_2 cs_bold cs_heading_color">PRODUCT ENQUIRY &rarr;</a>
            </div>
          </div>
          <div class="cs_dflower_lists wow fadeInRight">
            <div>
              <p class="cs_dflower_range_title">Noosa Selects</p>
              <span class="cs_dflower_range_count">6 Products</span>
              <ul class="cs_dflower_range_list">
                <li>T19 Hybrid</li>
                <li>T21 Indica</li>
                <li>T23 Sativa</li>
                <li>T25 Sativa</li>
                <li>T26 Indica</li>
                <li>T28 Indica</li>
              </ul>
            </div>
            <div>
              <p class="cs_dflower_range_title">PharmaCrop Premium</p>
              <span class="cs_dflower_range_count">5 Products</span>
              <ul class="cs_dflower_range_list">
                <li>Ravine T19</li>
                <li>Valley T21</li>
                <li>Valley T23</li>
                <li>Summit T25</li>
                <li>Valley T25</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Dried Flower Section -->
    <!-- Start Product Line Detail Sections (Oral Liquid / Pastilles / Inhaled Liquid) -->
    <style>
      .cs_pline_section { padding: 100px 0; }
      .cs_pline_row { display: flex; align-items: center; gap: 70px; }
      .cs_pline_row.cs_pline_row_rev { flex-direction: row-reverse; }
      .cs_pline_img { flex: 0 0 46%; border-radius: 16px; overflow: hidden; }
      .cs_pline_img img { width: 100%; height: 440px; object-fit: cover; display: block; }
      .cs_pline_content { flex: 1; }
      .cs_pline_label { display: inline-flex; align-items: center; padding: 8px 22px; border: 1px solid rgba(2, 66, 66, 0.18); border-radius: 30px; background: #fff; color: #024242; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 20px; }
      .cs_pline_content h2 { color: #024242; font-size: 36px; font-weight: 800; line-height: 1.2; margin: 0 0 18px; }
      .cs_pline_content > p.cs_pline_desc { color: #555; font-size: 16px; line-height: 1.75; margin: 0 0 24px; }
      .cs_pline_range_title { color: #024242; font-size: 17px; font-weight: 800; margin: 0 0 4px; }
      .cs_pline_range_count { color: #78dca6; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 16px; }
      .cs_pline_range_list { list-style: none; margin: 0 0 32px; padding: 0; max-width: 360px; }
      .cs_pline_range_list li { color: #024242; font-size: 14px; font-weight: 600; padding: 10px 0; border-bottom: 1px solid rgba(2, 66, 66, 0.1); }
      .cs_pline_range_list li:first-child { padding-top: 0; }
      .cs_pline_ctas { display: flex; gap: 16px; flex-wrap: wrap; }
      @media (max-width: 991px) {
        .cs_pline_row, .cs_pline_row.cs_pline_row_rev { flex-direction: column; gap: 36px; }
        .cs_pline_img { flex: none; width: 100%; }
        .cs_pline_img img { height: 320px; }
        .cs_pline_content h2 { font-size: 26px; }
      }
    </style>
    <!-- Oral Liquid -->
    <section class="cs_pline_section" id="oral-liquid" style="background: #fff; scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_pline_row cs_pline_row_rev">
          <div class="cs_pline_img wow fadeInRight">
            <img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="PharmaCrop oral liquid range">
          </div>
          <div class="cs_pline_content wow fadeInLeft">
            <span class="cs_pline_label">ORAL LIQUID</span>
            <h2>PHARMACROP ORAL LIQUID RANGE</h2>
            <p class="cs_pline_desc">PharmaCrop&rsquo;s oral liquid portfolio forms part of its established Australian finished-product range, supported by integrated pharmaceutical manufacturing and quality systems. The range currently includes three finished oral liquid products.</p>
            <p class="cs_pline_range_title">Oral Liquid Range</p>
            <span class="cs_pline_range_count">3 Products</span>
            <ul class="cs_pline_range_list">
              <li>Serene 200 Isolate</li>
              <li>Serene 200 Plus</li>
              <li>Horizon 30 : 30</li>
            </ul>
            <div class="cs_pline_ctas">
              <a href="/contact" class="cs_products_btn_primary" style="color:#023232;">ORDER THROUGH B2B PORTAL &rarr;</a>
              <a href="/contact" class="cs_btn cs_style_2 cs_bold cs_heading_color">PRODUCT ENQUIRY &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Pastilles -->
    <section class="cs_pline_section" id="pastilles" style="background: #f7faf8; scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_pline_row">
          <div class="cs_pline_img wow fadeInLeft">
            <img src="/assets/img/pharmacrop-banner4.webp" alt="PharmaCrop 20:20:20 Night Pastilles">
          </div>
          <div class="cs_pline_content wow fadeInRight">
            <span class="cs_pline_label">PASTILLES</span>
            <h2>PHARMACROP PASTILLES</h2>
            <p class="cs_pline_desc">The PharmaCrop portfolio includes a finished pastille formulation developed as part of its broader multi-dosage-form product range.</p>
            <p class="cs_pline_range_title">Pastilles Range</p>
            <span class="cs_pline_range_count">1 Product</span>
            <ul class="cs_pline_range_list">
              <li>20:20:20 Night Pastilles &mdash; THC : CBD : CBN</li>
            </ul>
            <div class="cs_pline_ctas">
              <a href="/contact" class="cs_products_btn_primary" style="color:#023232;">ORDER THROUGH B2B PORTAL &rarr;</a>
              <a href="/contact" class="cs_btn cs_style_2 cs_bold cs_heading_color">PRODUCT ENQUIRY &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Inhaled Liquid -->
    <section class="cs_pline_section" id="inhaled-liquid" style="background: #fff; scroll-margin-top: 100px;">
      <div class="container">
        <div class="cs_pline_row cs_pline_row_rev">
          <div class="cs_pline_img wow fadeInRight">
            <img src="/assets/img/health-professionals-card.webp" alt="PharmaCrop inhaled liquid range">
          </div>
          <div class="cs_pline_content wow fadeInLeft">
            <span class="cs_pline_label">INHALED LIQUID</span>
            <h2>PHARMACROP INHALED LIQUID RANGE</h2>
            <p class="cs_pline_desc">PharmaCrop&rsquo;s inhaled liquid portfolio expands the product range across an additional dosage form, with two finished products currently included in the portfolio.</p>
            <p class="cs_pline_range_title">Inhaled Liquid Range</p>
            <span class="cs_pline_range_count">2 Products</span>
            <ul class="cs_pline_range_list">
              <li>Luminous (750mg)</li>
              <li>Daydream (850mg)</li>
            </ul>
            <div class="cs_pline_ctas">
              <a href="/contact" class="cs_products_btn_primary" style="color:#023232;">ORDER THROUGH B2B PORTAL &rarr;</a>
              <a href="/contact" class="cs_btn cs_style_2 cs_bold cs_heading_color">PRODUCT ENQUIRY &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Product Line Detail Sections -->
    <!-- Start Cultivar Portfolio Section -->
    <style>
      .cs_cultivar_section { padding: 100px 0; background: #024242; }
      .cs_cultivar_head { max-width: 700px; margin: 0 auto 56px; text-align: center; }
      .cs_cultivar_eyebrow { display: block; color: #78dca6; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; font-size: 14px; margin-bottom: 14px; }
      .cs_cultivar_head h2 { color: #fff; font-size: 38px; line-height: 1.25; margin: 0 0 16px; }
      .cs_cultivar_head p { color: rgba(255, 255, 255, 0.75); font-size: 16px; line-height: 1.7; margin: 0; }
      .cs_cultivar_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 26px; margin-bottom: 48px; }
      .cs_cultivar_card { position: relative; border-radius: 16px; overflow: hidden; height: 380px; }
      .cs_cultivar_card img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
      .cs_cultivar_card:hover img { transform: scale(1.08); }
      .cs_cultivar_overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2,42,42,0) 35%, rgba(2,34,34,0.92) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 22px; }
      .cs_cultivar_overlay h3 { color: #fff; font-size: 19px; margin: 0 0 8px; }
      .cs_cultivar_overlay p { color: rgba(255, 255, 255, 0.75); font-size: 12px; line-height: 1.6; margin: 0 0 4px; }
      .cs_cultivar_overlay p strong { color: #78dca6; font-weight: 700; }
      .cs_cultivar_cta { text-align: center; }
      @media (max-width: 991px) {
        .cs_cultivar_grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 575px) {
        .cs_cultivar_grid { grid-template-columns: 1fr; }
        .cs_cultivar_head h2 { font-size: 28px; }
      }
    </style>
    <section class="cs_cultivar_section">
      <div class="container">
        <div class="cs_cultivar_head wow fadeInUp">
          <span class="cs_cultivar_eyebrow">Cultivar Portfolio</span>
          <h2>AUSTRALIAN-GROWN CULTIVARS</h2>
          <p>A portfolio of Australian-grown cultivars developed for pharmaceutical consistency and flexible commercial supply.</p>
        </div>
        <div class="cs_cultivar_grid">
          <div class="cs_cultivar_card wow fadeInUp">
            <img src="/assets/Leafline/10045.jpg" alt="Afternoon Tea cultivar">
            <div class="cs_cultivar_overlay">
              <h3>Afternoon Tea</h3>
              <p><strong>Genetics:</strong> (Biscotti &times; Gelato) &times; EZBake AF</p>
              <p><strong>Species:</strong> Hybrid (50 | 50)</p>
            </div>
          </div>
          <div class="cs_cultivar_card wow fadeInUp" data-wow-delay="0.1s">
            <img src="/assets/Leafline/10046.jpg" alt="Candyland cultivar">
            <div class="cs_cultivar_overlay">
              <h3>Candyland</h3>
              <p><strong>Genetics:</strong> Grand Daddy Purple &times; Bay Platinum Cookies</p>
              <p><strong>Species:</strong> Sativa Dominant (70 | 30)</p>
            </div>
          </div>
          <div class="cs_cultivar_card wow fadeInUp" data-wow-delay="0.2s">
            <img src="/assets/Leafline/10047.jpg" alt="Supermoon cultivar">
            <div class="cs_cultivar_overlay">
              <h3>Supermoon</h3>
              <p><strong>Genetics:</strong> PharmaCrop Exclusive</p>
              <p><strong>Species:</strong> Indica Dominant (80 | 20)</p>
            </div>
          </div>
          <div class="cs_cultivar_card wow fadeInUp" data-wow-delay="0.3s">
            <img src="/assets/img/pharma-banner.jpeg" alt="Supermoon Eclipse cultivar">
            <div class="cs_cultivar_overlay">
              <h3>Supermoon Eclipse</h3>
              <p><strong>Genetics:</strong> PharmaCrop Exclusive</p>
              <p><strong>Species:</strong> Indica Dominant (90 | 10)</p>
            </div>
          </div>
        </div>
        <div class="cs_cultivar_cta wow fadeInUp">
          <a href="/contact" class="cs_products_btn_primary">ENQUIRE ABOUT CULTIVARS &rarr;</a>
        </div>
      </div>
    </section>
    <!-- End Cultivar Portfolio Section -->
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
  );
}
