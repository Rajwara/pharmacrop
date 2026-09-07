export const metadata = {
  title: "PharmaCrop - Bring Balance To Your Life",
};

export default function Page() {
  return (
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
    <section class="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg" data-src="/assets/img/pharma-banner.jpeg">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active">About</li>
        </ol>
        <h1 class="cs_page_title mb-0 cs_fs_80 wow fadeInUp">ABOUT US</h1>
      </div>
    </section>
    <!-- End Page Heading Sectoin -->
    <!-- Start About Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="row cs_gap_x_40 cs_gap_y_24">
          <div class="col-lg-4">
            <div class="cs_section_heading cs_style_4">
              <h2 class="cs_section_title cs_fs_32 cs_bold mb-0 wow fadeInDown">THE <span>PHARMACROP</span> STORY</h2>
            </div>
          </div>
          <div class="col-lg-4">
            <p class="cs_fs_20 mb-0">Built in the Noosa Hinterland, Queensland, PharmaCrop is an Australian medicinal cannabis company designed around pharmaceutical standards. Our integrated operation brings together genetics, cultivation, GMP manufacturing, quality and innovation within one platform.</p>
          </div>
          <div class="col-lg-4">
            <p class="cs_fs_20 mb-0">From Australian-grown cultivation through to finished medicines and global market access, PharmaCrop is built to deliver quality, consistency and long-term commercial capability.</p>
          </div>
        </div>
        <div class="cs_height_56 cs_height_lg_35"></div>
        <div class="row cs_gap_y_30">
          <div class="col-lg-4 wow fadeInLeft">
            <a href="https://www.youtube.com/embed/rRid6GCJtgc" class="cs_video_block cs_style_1 cs_bg_filed cs_video_open cs_center cs_radius_20" data-src="/assets/img/genetics-to-gmp-manufacturing.webp">
              <span class="cs_player_btn cs_heading_color">
                <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 11L0.5 21.3923V0.607696L18.5 11Z" fill="currentColor"></path>
                </svg>
              </span>
            </a>
          </div>
          <div class="col-lg-8 wow fadeInRight">
            <div class="cs_cta cs_style_2 cs_bg_filed cs_radius_20" data-src="/assets/img/pharmacrop-banner2.webp">
              <a href="/contact" class="cs_btn cs_style_2 cs_bold cs_white_color">Contact us</a>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End About Section -->
    <!-- Start Features Section -->
    <div class="cs_heading_bg cs_white_color">
      <!-- Start Feature Section -->
      <section>
        <div class="cs_height_100 cs_height_lg_70"></div>
        <div class="container">
          <div class="cs_section_heading cs_style_1">
            <h2 class="cs_section_title cs_fs_80 mb-0 wow fadeInUp">THE PHARMACROP <span>FOUNDATIONS</span></h2>
            <div class="cs_section_right">
              <a href="/contact" class="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color w-100 wow fadeInRight">Contact us</a>
            </div>
          </div>
          <div class="cs_height_64 cs_height_lg_50"></div>
          <div class="row align-items-end cs_gap_y_50">
            <div class="col-lg-4">
              <div class="cs_img_box cs_style_1 wow fadeInLeft">
                <img src="/assets/img/feature_thumb.jpg" alt="">
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row cs_gap_y_64">
                <div class="col-sm-6">
                  <div class="cs_iconbox cs_style_1">
                    <div class="cs_iconbox_icon cs_center cs_mb_24">
                      <i class="fa-regular fa-heart"></i>
                    </div>
                    <h3 class="cs_fs_24 cs_mb_12">Research &amp; Development</h3>
                    <p class="mb-0 cs_fs_20">Advancing Australian-grown medicines. Research and development plays an important role across PharmaCrop's operations, continuously improving quality, consistency and future potential.</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="cs_iconbox cs_style_1">
                    <div class="cs_iconbox_icon cs_center cs_mb_24">
                      <i class="fa-solid fa-link"></i>
                    </div>
                    <h3 class="cs_fs_24 cs_mb_12">Cultivation Philosophy</h3>
                    <p class="mb-0 cs_fs_20">The right cultivar changes everything. Through extensive phenohunting and selection, we identify cultivars best suited to the Noosa Hinterland environment.</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="cs_iconbox cs_style_1">
                    <div class="cs_iconbox_icon cs_center cs_mb_24">
                      <i class="fa-brands fa-buffer"></i>
                    </div>
                    <h3 class="cs_fs_24 cs_mb_12">Manufacturing Standards</h3>
                    <p class="mb-0 cs_fs_20">Built on pharmaceutical discipline. Our GMP-certified manufacturing facility combines structured quality systems with carefully managed hand-packing processes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cs_height_100 cs_height_lg_70"></div>
      </section>
      <!-- End Feature Section -->
    </div>
    <!-- End Features Section -->
    <!-- Start Vision & Mission Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_2 cs_color_1">
          <h2 class="cs_section_title cs_fs_80 mb-0 wow fadeInDown">VISION <br><span>&amp;</span> MISSION</h2>
          <div class="cs_section_right">
            <h3 class="cs_brackets_title cs_normal cs_fs_16 mb-0">PURPOSE</h3>
          </div>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="row cs_gap_y_40">
          <div class="col-lg-6 wow fadeInLeft">
            <div class="cs_iconbox cs_style_1">
              <h3 class="cs_fs_24 cs_mb_12">Vision</h3>
              <p class="mb-0 cs_fs_20">A world where trusted, traceable Australian-grown medicines are standard in healthcare and accessible to all.</p>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInRight">
            <div class="cs_iconbox cs_style_1">
              <h3 class="cs_fs_24 cs_mb_12">Mission</h3>
              <p class="mb-0 cs_fs_20">To elevate Australian-grown medicines to ensure they are trusted, accessible and profoundly transformative for those who need them most.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Vision & Mission Section -->
    <!-- Start Brand Section -->
    <div class="cs_gray_bg">
      <div class="cs_height_64 cs_height_lg_50"></div>
      <div class="container">
        <div class="cs_slider cs_style_1 cs_slider_gap_24">
          <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="800" data-center="0" data-variable-width="0" data-slides-per-view="responsive" data-xs-slides="2" data-sm-slides="3" data-md-slides="5" data-lg-slides="6" data-add-slides="6">
            <div class="cs_slider_wrapper">
              <div class="cs_slide">
                <div class="cs_brand cs_style_1">
                  <img src="/assets/img/brand_logo_1.svg" alt="">
                </div>
              </div>
              <div class="cs_slide">
                <div class="cs_brand cs_style_1">
                  <img src="/assets/img/brand_logo_2.svg" alt="">
                </div>
              </div>
              <div class="cs_slide">
                <div class="cs_brand cs_style_1">
                  <img src="/assets/img/brand_logo_3.svg" alt="">
                </div>
              </div>
              <div class="cs_slide">
                <div class="cs_brand cs_style_1">
                  <img src="/assets/img/brand_logo_4.svg" alt="">
                </div>
              </div>
              <div class="cs_slide">
                <div class="cs_brand cs_style_1">
                  <img src="/assets/img/brand_logo_5.svg" alt="">
                </div>
              </div>
              <div class="cs_slide">
                <div class="cs_brand cs_style_1">
                  <img src="/assets/img/brand_logo_6.svg" alt="">
                </div>
              </div>
              <div class="cs_slide">
                <div class="cs_brand cs_style_1">
                  <img src="/assets/img/brand_logo_3.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_64 cs_height_lg_50"></div>
    </div>
    <!-- End Brand Section -->
    <!-- Start Work Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="row align-items-end cs_gap_y_50">
          <div class="col-xl-3">
            <div class="cs_section_heading cs_style_5">
              <h3 class="cs_brackets_title cs_normal cs_fs_16">GALLERY</h3>
              <h2 class="cs_section_title cs_fs_80 mb-0">OUR <span>WORK</span></h2>
            </div>
          </div>
          <div class="col-xl-9">
            <div class="cs_isotop cs_style_1 cs_isotop_col_3 cs_has_gutter_24 cs_lightgallery">
              <div class="cs_grid_sizer"></div>
              <div class="cs_isotop_item wow fadeInLeft">
                <a href="/assets/img/work_thumb_1.jpg" class="cs_gallery cs_style_1 cs_center cs_gallery_item">
                  <img src="/assets/img/work_thumb_1.jpg" alt="">
                  <span class="cs_gallery_info_wrap cs_center">
                    <span class="cs_gallery_info text-center cs_center">
                      <span class="cs_white_color cs_fs_16 cs_bold cs_mb_4 d-block">Gallery A</span>
                      <span class="cs_white_color d-block">2024</span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="cs_isotop_item">
                <a href="/assets/img/work_thumb_2.jpg" class="cs_gallery cs_style_1 cs_center cs_gallery_item">
                  <img src="/assets/img/work_thumb_2.jpg" alt="">
                  <span class="cs_gallery_info_wrap cs_center">
                    <span class="cs_gallery_info text-center cs_center">
                      <span class="cs_white_color cs_fs_16 cs_bold cs_mb_4 d-block">Gallery B</span>
                      <span class="cs_white_color d-block">2024</span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="cs_isotop_item wow fadeInRight">
                <a href="/assets/img/work_thumb_3.jpg" class="cs_gallery cs_style_1 cs_center cs_gallery_item">
                  <img src="/assets/img/work_thumb_3.jpg" alt="">
                  <span class="cs_gallery_info_wrap cs_center">
                    <span class="cs_gallery_info text-center cs_center">
                      <span class="cs_white_color cs_fs_16 cs_bold cs_mb_4 d-block">Gallery C</span>
                      <span class="cs_white_color d-block">2024</span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="cs_isotop_item">
                <a href="/assets/img/work_thumb_4.jpg" class="cs_gallery cs_style_1 cs_center cs_gallery_item">
                  <img src="/assets/img/work_thumb_4.jpg" alt="">
                  <span class="cs_gallery_info_wrap cs_center">
                    <span class="cs_gallery_info text-center cs_center">
                      <span class="cs_white_color cs_fs_16 cs_bold cs_mb_4 d-block">Gallery D</span>
                      <span class="cs_white_color d-block">2024</span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="cs_isotop_item">
                <a href="/assets/img/work_thumb_5.jpg" class="cs_gallery cs_style_1 cs_center cs_gallery_item">
                  <img src="/assets/img/work_thumb_5.jpg" alt="">
                  <span class="cs_gallery_info_wrap cs_center">
                    <span class="cs_gallery_info text-center cs_center">
                      <span class="cs_white_color cs_fs_16 cs_bold cs_mb_4 d-block">Gallery E</span>
                      <span class="cs_white_color d-block">2024</span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Work Section -->
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
    <!-- Script -->
    
    
    
    
    
    
  

`,
      }}
    />
  );
}
