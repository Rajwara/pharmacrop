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
                    <li><a href="#">SEE OUR DOCTORS</a></li>
                    <li class="menu-item-has-children">
                      <a href="#">MORE</a>
                      <ul>
                        <li><a href="/services">SERVICES</a></li>
                        <li><a href="/projects">PROJECTS</a></li>
                        <li><a href="/gallery">GALLERY</a></li>
                        <li><a href="/test">TEST</a></li>
                        <li><a href="/leafline">LEAFLINE</a></li>
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
    <section class="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg" data-src="/assets/img/project_heading_bg.jpg">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active">Evening Garden</li>
        </ol>
        <h1 class="cs_page_title mb-0 cs_fs_80 wow fadeInUp">EVENING GARDEN</h1>
      </div>
    </section>
    <!-- End Page Heading Sectoin -->
    <!-- Start Projects -->
    <div class="container">
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="row cs_gap_x_40 cs_gap_y_30">
        <div class="col-lg-7">
          <ul class="cs_project_details_info cs_mp_0">
            <li>
              <p class="mb-0">YEAR</p>
              <h4 class="mb-0 cs_fs_20 cs_bold">2024</h4>
            </li>
            <li>
              <p class="mb-0">LOCATION</p>
              <h4 class="mb-0 cs_fs_20 cs_bold">SUNNYVALE, CA</h4>
            </li>
            <li>
              <p class="mb-0">SERVICE</p>
              <h4 class="mb-0 cs_fs_20 cs_bold">GARDEN LANDSCAPING</h4>
            </li>
          </ul>
          <div class="cs_height_50 cs_height_lg_40"></div>
          <a href="https://www.youtube.com/embed/rRid6GCJtgc" class="cs_video_block cs_style_1 cs_type_1 cs_bg_filed cs_video_open cs_center cs_radius_20" data-src="/assets/img/video_block_bg_2.jpg" style="background-image: url(&quot;assets/img/video_block_bg_2.jpg&quot;);">
            <span class="cs_player_btn cs_heading_color">
              <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 11L0.5 21.3923V0.607696L18.5 11Z" fill="currentColor"></path>
              </svg>                                   
            </span>
          </a>
        </div>
        <div class="col-lg-5">
          <div class="cs_slider cs_style_1">
            <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="800" data-center="0" data-variable-width="0" data-slides-per-view="1">
              <div class="cs_slider_wrapper">
                <div class="cs_slide">
                  <div class="cs_project_details_image">
                    <img src="/assets/img/project_thumb_10.jpg" alt="">
                  </div>
                </div>
                <div class="cs_slide">
                  <div class="cs_project_details_image">
                    <img src="/assets/img/project_thumb_10.jpg" alt="">
                  </div>
                </div>
                <div class="cs_slide">
                  <div class="cs_project_details_image">
                    <img src="/assets/img/project_thumb_10.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center cs_slider_arrows_4_transparent_wrap">
              <div class="cs_slider_arrows cs_style_4">
                <div class="cs_left_arrow cs_white_color">   
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.499953 9.00005C0.499953 8.80823 0.573265 8.61623 0.719703 8.4698L8.2197 0.969797C8.51277 0.676734 8.98733 0.676734 9.2802 0.969797C9.57308 1.26286 9.57327 1.73742 9.2802 2.0303L2.31045 9.00005L9.2802 15.9698C9.57327 16.2629 9.57327 16.7374 9.2802 17.0303C8.98714 17.3232 8.51258 17.3234 8.2197 17.0303L0.719703 9.5303C0.573265 9.38386 0.499953 9.19186 0.499953 9.00005Z" fill="currentColor"></path>
                  </svg>                                                
                </div>
                <div class="cs_slider_number cs_style_2 cs_bold"></div>
                <div class="cs_right_arrow cs_white_color">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.50005 8.99995C9.50005 9.19177 9.42673 9.38377 9.2803 9.5302L1.7803 17.0302C1.48723 17.3233 1.01267 17.3233 0.719797 17.0302C0.426922 16.7371 0.426734 16.2626 0.719797 15.9697L7.68955 8.99995L0.719797 2.0302C0.426734 1.73714 0.426734 1.26258 0.719797 0.969702C1.01286 0.676826 1.48742 0.67664 1.7803 0.969702L9.2803 8.4697C9.42673 8.61614 9.50005 8.80814 9.50005 8.99995Z" fill="currentColor"></path>
                  </svg>                                     
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_70 cs_height_lg_50"></div>
      <div class="row cs_gap_x_40 cs_gap_y_30">
        <div class="col-xl-7">
          <div class="cs_fs_20">
            <b class="cs_heading_color">DESCRIPTION:</b><br>
            Tucked behind an old Japanese estate, this garden design evokes the charm of a hidden garden. The lighting design enhances the feeling of discovery, revealing unexpected beauty at every turn. It's a garden where every night feels like an adventure.
            <br><br>
            <b class="cs_heading_color">OUTCOMES</b><br>
            With a team of dedicated landscape architects and horticultural experts, we blend art and science to transform your outdoor space into a living masterpiece. We go beyond aesthetics, integrating sustainable practices, water-saving solutions, and eco-friendly choices to ensure your garden is as environmentally responsible as it is stunning. From the initial consultation to the final blossom, we are with you every step of the way, bringing your vision of dream garden to life expertly and efficiently.
          </div>
        </div>
        <div class="col-xl-5">
          <div class="row cs_gap_x_20 cs_gap_y_20">
            <div class="col-sm-6">
              <div class="cs_iconbox cs_style_2">
                <div class="cs_iconbox_icon">
                  <i class="fa-solid fa-hand-holding-droplet"></i>
                </div>
                <p class="cs_iconbox_title cs_bold cs_fs_20 mb-0 cs_heading_color">Customized Garden Designs</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="cs_iconbox cs_style_2">
                <div class="cs_iconbox_icon">
                  <i class="fa-solid fa-utensils"></i>
                </div>
                <p class="cs_iconbox_title cs_bold cs_fs_20 mb-0 cs_heading_color">Guaranteed Maintenance Plans</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="cs_iconbox cs_style_2">
                <div class="cs_iconbox_icon">
                  <i class="fa-solid fa-vials"></i>
                </div>
                <p class="cs_iconbox_title cs_bold cs_fs_20 mb-0 cs_heading_color">Soil Testing and Improvement</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="cs_iconbox cs_style_2">
                <div class="cs_iconbox_icon">
                  <i class="fa-solid fa-feather"></i>
                </div>
                <p class="cs_iconbox_title cs_bold cs_fs_20 mb-0 cs_heading_color">Hardscape and Aquascape Feature</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="cs_iconbox cs_style_2">
                <div class="cs_iconbox_icon">
                  <i class="fa-solid fa-seedling"></i>
                </div>
                <p class="cs_iconbox_title cs_bold cs_fs_20 mb-0 cs_heading_color">Plant Selection and Installation</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="cs_iconbox cs_style_2">
                <div class="cs_iconbox_icon">
                  <i class="fa-solid fa-handshake"></i>
                </div>
                <p class="cs_iconbox_title cs_bold cs_fs_20 mb-0 cs_heading_color">Sustainable Eco-Friendly Options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </div>
    <!-- End Projects -->
    <!-- Start Accordion Section -->
    <section class="cs_gray_bg">
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="cs_slider cs_style_1 cs_slider_gap_24">
          <div class="cs_section_heading cs_style_2 cs_color_1">
            <h2 class="cs_section_title cs_fs_80 mb-0">CHOOSE OUR <br>SPECIAL <span>SERVICES</span></h2>
            <div class="cs_section_right">
              <h3 class="cs_brackets_title cs_normal cs_fs_16 mb-0">SERVICES</h3>
              <div class="cs_slider_arrows cs_style_4 cs_hide_lg">
                <div class="cs_left_arrow cs_heading_color">   
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.499953 9.00005C0.499953 8.80823 0.573265 8.61623 0.719703 8.4698L8.2197 0.969797C8.51277 0.676734 8.98733 0.676734 9.2802 0.969797C9.57308 1.26286 9.57327 1.73742 9.2802 2.0303L2.31045 9.00005L9.2802 15.9698C9.57327 16.2629 9.57327 16.7374 9.2802 17.0303C8.98714 17.3232 8.51258 17.3234 8.2197 17.0303L0.719703 9.5303C0.573265 9.38386 0.499953 9.19186 0.499953 9.00005Z" fill="currentColor"></path>
                  </svg>                                                
                </div>
                <div class="cs_slider_number cs_style_2 cs_bold"></div>
                <div class="cs_right_arrow cs_heading_color">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.50005 8.99995C9.50005 9.19177 9.42673 9.38377 9.2803 9.5302L1.7803 17.0302C1.48723 17.3233 1.01267 17.3233 0.719797 17.0302C0.426922 16.7371 0.426734 16.2626 0.719797 15.9697L7.68955 8.99995L0.719797 2.0302C0.426734 1.73714 0.426734 1.26258 0.719797 0.969702C1.01286 0.676826 1.48742 0.67664 1.7803 0.969702L9.2803 8.4697C9.42673 8.61614 9.50005 8.80814 9.50005 8.99995Z" fill="currentColor"></path>
                  </svg>                                     
                </div>
              </div>
            </div>
          </div>
          <div class="cs_height_64 cs_height_lg_50"></div>
          <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="800" data-center="0" data-variable-width="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="1" data-md-slides="2" data-lg-slides="2" data-add-slides="2">
            <div class="cs_slider_wrapper">
              <div class="cs_slide">
                <div class="cs_card cs_style_2">
                  <a href="/service-details" class="cs_card_thumb">
                    <img src="/assets/img/project_thumb_1.jpg" alt="">
                  </a>
                  <div class="cs_card_info">
                    <h2 class="cs_card_title cs_fs_32 cs_white_color cs_bold cs_mb_8">
                      <a href="/service-details">GARDEN DESIGN</a>
                    </h2>
                    <p class="cs_card_subtitle mb-0 cs_white_color">Crafting the perfect garden space. We will design a garden that suits your lifestyle and enhances your property's beauty.</p>
                  </div>
                  <a href="/service-details" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
                    </svg>                
                  </a>
                </div>
              </div>
              <div class="cs_slide">
                <div class="cs_card cs_style_2">
                  <a href="/service-details" class="cs_card_thumb">
                    <img src="/assets/img/project_thumb_2.jpg" alt="">
                  </a>
                  <div class="cs_card_info">
                    <h2 class="cs_card_title cs_fs_32 cs_white_color cs_bold cs_mb_8">
                      <a href="/service-details">PLANT SELECTION</a>
                    </h2>
                    <p class="cs_card_subtitle mb-0 cs_white_color">Hand-picked greenery for your oasis. Our experts select the right plants, ensuring they thrive in your garden's unique conditions.</p>
                  </div>
                  <a href="/service-details" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
                    </svg>                
                  </a>
                </div>
              </div>
              <div class="cs_slide">
                <div class="cs_card cs_style_2">
                  <a href="/service-details" class="cs_card_thumb">
                    <img src="/assets/img/project_thumb_3.jpg" alt="">
                  </a>
                  <div class="cs_card_info">
                    <h2 class="cs_card_title cs_fs_32 cs_white_color cs_bold cs_mb_8">
                      <a href="/service-details">HARDSCAPING</a>
                    </h2>
                    <p class="cs_card_subtitle mb-0 cs_white_color">Adding structure to your landscape. We create functional and aesthetic hardscape features like patios, walkways, and retaining walls.</p>
                  </div>
                  <a href="/service-details" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
                    </svg>                
                  </a>
                </div>
              </div>
              <div class="cs_slide">
                <div class="cs_card cs_style_2">
                  <a href="/service-details" class="cs_card_thumb">
                    <img src="/assets/img/project_thumb_4.jpg" alt="">
                  </a>
                  <div class="cs_card_info">
                    <h2 class="cs_card_title cs_fs_32 cs_white_color cs_bold cs_mb_8">
                      <a href="/service-details">GARDEN MAINTENANCE</a>
                    </h2>
                    <p class="cs_card_subtitle mb-0 cs_white_color">Preserving your garden's allure. We offer ongoing maintenance services to ensure your garden looks its best year-round.</p>
                  </div>
                  <a href="/service-details" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
                    </svg>                
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="cs_pagination cs_style_2 cs_show_lg"></div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Accordion Section -->
    <!-- Start Footer Section -->
    <footer class="cs_footer cs_style_1 cs_color_1">
      <div class="container">
        <div class="cs_footer_row">
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <div class="cs_text_widget">
                <img src="/assets/img/logo-light.png" alt="" class="cs_logo_img">
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
          <div class="cs_bottom_footer_left">
            <div class="cs_copyright">© 2026 PHARMACROP. ALL RIGHTS RESERVED. WEBSITE MAINTAINED BY PHARMACROP.</div>
          </div>
          <div class="cs_bottom_footer_right">
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
