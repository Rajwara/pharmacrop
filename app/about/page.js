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
    <section class="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg" data-src="/assets/img/about_heading_bg.jpg">
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
            <p class="cs_fs_20 mb-0">Built in the Noosa Hinterland in Queensland, PharmaCrop combines international cultivation expertise with Australian production and GMP-certified manufacturing. Our integrated approach brings key stages of cultivation, processing and manufacturing together, supporting quality, consistency and oversight from cultivar selection through to finished product.</p>
          </div>
          <div class="col-lg-4">
            <p class="cs_fs_20 mb-0">The result is a growing portfolio of Australian-grown products shaped by global knowledge and pharmaceutical discipline.</p>
          </div>
        </div>
        <div class="cs_height_56 cs_height_lg_35"></div>
        <div class="row cs_gap_y_30">
          <div class="col-lg-4 wow fadeInLeft">
            <a href="https://www.youtube.com/embed/rRid6GCJtgc" class="cs_video_block cs_style_1 cs_bg_filed cs_video_open cs_center cs_radius_20" data-src="/assets/img/video_block_bg.jpg">
              <span class="cs_player_btn cs_heading_color">
                <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 11L0.5 21.3923V0.607696L18.5 11Z" fill="currentColor"></path>
                </svg>
              </span>
            </a>
          </div>
          <div class="col-lg-8 wow fadeInRight">
            <div class="cs_cta cs_style_2 cs_bg_filed cs_radius_20" data-src="/assets/img/cta_bg_3.jpg">
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
    <!-- Start Card Section -->
    <section class="cs_half_bg">
      <div class="container">
        <div class="cs_card cs_style_1 cs_heading_bg cs_bg_filed" data-src="/assets/img/card_bg.jpg">
          <div class="cs_card_top">
            <div class="cs_card_tags">
              <a href="/" class="cs_card_tag">Home</a>
              <a href="/industry" class="cs_card_tag">Industry</a>
              <a href="#" class="cs_card_tag">GMP-Certified</a>
              <a href="#" class="cs_card_tag">Australian-Grown</a>
            </div>
          </div>
          <div class="cs_card_bottom">
            <h2 class="cs_card_title cs_gradient_color_1 cs_fs_80 mb-0 wow fadeInUp">EXPLORE OUR <br>INDUSTRY PARTNERS</h2>
          </div>
          <a href="/industry" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
    <!-- End Card Section -->
    <!-- Start Footer Section -->
    <footer class="cs_footer cs_style_1 cs_color_1">
      <div class="container">
        <div class="cs_footer_row">
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <div class="cs_text_widget">
                <img src="/assets/img/logo-light.png" alt="Logo" class="wow zoomIn cs_logo_img">
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
                <li><a href="/projects">PROJECTS</a></li>
                <li><a href="/blog">BLOG</a></li>
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
