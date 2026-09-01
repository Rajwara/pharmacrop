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
                    <li><a href="/services">SERVICES</a></li>
                    <li><a href="/projects">PROJECTS</a></li>
                    <li class="menu-item-has-children">
                      <a href="/contact">MORE</a>
                      <ul>
                        <li><a href="/industry">INDUSTRY</a></li>
                        <li><a href="/careers">CAREERS</a></li>
                        <li><a href="/gallery">GALLERY</a></li>
                        <li><a href="/blog">BLOG</a></li>
                        <li><a href="/contact">CONTACT</a></li>
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
    <!-- Start Hero Section -->
    <section class="cs_hero cs_style_1 cs_heading_bg cs_white_color">
      <div class="container">
        <div class="cs_hero_in">
          <div class="cs_hero_text">
            <h1 class="cs_hero_title cs_fs_100 cs_normal cs_mb_12 cs_white_color cs_gradient_color_1 wow fadeInUp">AUSTRALIAN-GROWN. <b>COMPLETE CONTROL.</b></h1>
            <p class="cs_hero_subtitle cs_fs_20 cs_mb_32 cs_opacity_7_5">Natural cultivation with pharmaceutical precision.</p>
            <div class="cs_hero_btns">
              <a href="/contact" class="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg wow fadeInLeft">Contact us</a>
              <a href="/about" class="cs_btn cs_style_2 cs_bold cs_white_color wow fadeInRight">About PharmaCrop</a>
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
            <a href="/about" class="cs_arrow_btn cs_hero_box_btn cs_center cs_heading_bg cs_white_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>                
            </a>
          </div>
        </div>
      </div>
      <div class="cs_hero_bg">
        <div class="cs_slider cs_style_1">
          <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="800" data-center="0" data-variable-width="0" data-slides-per-view="1">
            <div class="cs_slider_wrapper">
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
    <!-- Start Values Section -->
    <div class="cs_height_100 cs_height_lg_70"></div>
    <div class="container">
      <div class="cs_values_card cs_style_1">
        <div class="cs_values_card_left">
          <h3 class="cs_brackets_title cs_normal cs_fs_16 mb-0">VALUES</h3>
        </div>
        <div class="cs_values_card_left">
          <ul class="cs_values cs_mp_0 cs_heading_color cs_fs_20">
            <li>
              <span>Cultivation</span>
              <span class="cs_bold">01</span>
            </li>
            <li>
              <span>GMP Manufacturing</span>
              <span class="cs_bold">02</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Values Section -->
    <!-- Start Feature Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_1">
          <h2 class="cs_section_title cs_fs_80 mb-0 wow fadeInDown">FROM GENETICS TO <span>GMP MANUFACTURING</span></h2>
          <div class="cs_section_right">
            <a href="/contact" class="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color w-100 wow fadeInRight">Contact us</a>
          </div>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="row align-items-end cs_gap_y_50">
          <div class="col-lg-4">
            <div class="cs_img_box cs_style_1 wow fadeInLeft">
              <img src="/assets/img/genetics-to-gmp-manufacturing.webp" alt="">
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row cs_gap_y_64">
              <div class="col-sm-6">
                <div class="cs_iconbox cs_style_1">
                  <div class="cs_iconbox_icon cs_center cs_mb_24">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                  <h3 class="cs_fs_24 cs_mb_12">Noosa Hinterland</h3>
                  <p class="mb-0 cs_fs_20">Where PharmaCrop calls home. The Noosa Hinterland provides the home for our cultivation and manufacturing operations, bringing local production together within a single region.</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="cs_iconbox cs_style_1">
                  <div class="cs_iconbox_icon cs_center cs_mb_24">
                    <i class="fa-solid fa-link"></i>
                  </div>
                  <h3 class="cs_fs_24 cs_mb_12">Integrated Operations</h3>
                  <p class="mb-0 cs_fs_20">By bringing cultivation, processing and GMP-certified manufacturing together, PharmaCrop maintains oversight from cultivar selection through to finished product.</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="cs_iconbox cs_style_1">
                  <div class="cs_iconbox_icon cs_center cs_mb_24">
                    <i class="fa-brands fa-buffer"></i>
                  </div>
                  <h3 class="cs_fs_24 cs_mb_12">Global Expertise</h3>
                  <p class="mb-0 cs_fs_20">Drawing on cultivation expertise from California, Canada and South Africa, our team applies international insights within the unique conditions of the Noosa Hinterland.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Feature Section -->
    <!-- Start Working Process -->
    <section class="cs_heading_bg">
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_2">
          <h2 class="cs_section_title cs_white_color cs_fs_80 mb-0 wow fadeInUp">A GROWING <span>PORTFOLIO</span> OF AUSTRALIAN-GROWN PRODUCTS</h2>
          <div class="cs_section_right">
            <h3 class="cs_brackets_title cs_normal cs_fs_16 mb-0 cs_white_color">PORTFOLIO</h3>
          </div>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="cs_card_3_wrap">
          <div class="cs_card cs_style_3">
            <div class="cs_card_in">
              <h3 class="cs_fs_24 cs_bold cs_white_color cs_mb_12">01  |  Cultivation expertise</h3>
              <p class="mb-0 cs_white_color cs_opacity_5 cs_fs_20">PharmaCrop continues to expand its portfolio of Australian-grown products, combining cultivation expertise with GMP-certified manufacturing.</p>
            </div>
          </div>
          <div class="cs_card cs_style_3">
            <div class="cs_card_in">
              <h3 class="cs_fs_24 cs_bold cs_white_color cs_mb_12">02  |  Managed production</h3>
              <p class="mb-0 cs_white_color cs_opacity_5 cs_fs_20">Carefully managed production processes support quality and consistency across our growing portfolio.</p>
            </div>
          </div>
          <div class="cs_card cs_style_3">
            <div class="cs_card_in">
              <h3 class="cs_fs_24 cs_bold cs_white_color cs_mb_12">03  |  Hand-packed medicines</h3>
              <p class="mb-0 cs_white_color cs_opacity_5 cs_fs_20">Supported by hand-packed medicines and pharmaceutical discipline throughout every stage of production.</p>
            </div>
          </div>
          <div class="cs_card cs_style_3">
            <div class="cs_card_in">
              <h3 class="cs_fs_24 cs_bold cs_white_color cs_mb_12">04  |  Supply confidence</h3>
              <p class="mb-0 cs_white_color cs_opacity_5 cs_fs_20">Our focus is on delivering quality, consistency and supply confidence for every partner we work with.</p>
            </div>
          </div>
          <div class="cs_section_logo"><img src="/assets/img/logo-light.png" alt="" class="cs_logo_img"></div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Working Process -->
    <!-- Start Services Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_section_heading cs_style_3">
          <h3 class="cs_brackets_title cs_normal cs_fs_16 mb-0 wow fadeInUp">INDUSTRY</h3>
          <div class="cs_section_right">
            <a href="/industry" class="cs_btn cs_style_2 cs_bold cs_heading_color">See More</a>
          </div>
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
          <h3 class="cs_brackets_title cs_normal cs_fs_16 mb-0 wow fadeInDown">TESTIMONIAL</h3>
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
          <div class="cs_section_right">
            <h3 class="cs_brackets_title cs_normal cs_fs_16 mb-0">COMPLIANCE</h3>
          </div>
        </div>
        <div class="cs_height_64 cs_height_lg_50"></div>
        <div class="cs_full_width_slider_section">
          <div class="cs_slider cs_style_1 cs_slider_gap_24">
            <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="800" data-center="0" data-variable-width="1" data-slides-per-view="1">
              <div class="cs_slider_wrapper">
                <div class="cs_slide">
                  <div class="cs_card cs_style_4">
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/project_thumb_9.jpg"></div>
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
                    <div class="cs_card_thumb cs_bg_filed cs_mb_40" data-src="/assets/img/project_thumb_9.jpg"></div>
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
    <section class="cs_cta cs_style_1 cs_heading_bg cs_bg_filed" data-src="/assets/img/cta_bg.jpg">
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_cta_in">
          <h2 class="cs_cta_title cs_fs_80 cs_white_color cs_mb_40 wow fadeInDown">READY TO PARTNER <br>WITH PHARMACROP?</h2>
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
    <!-- Script -->
    
    
    
    
    
    
  

`,
      }}
    />
  );
}
