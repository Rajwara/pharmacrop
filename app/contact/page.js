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
          <li class="breadcrumb-item active">Contact</li>
        </ol>
        <h1 class="cs_page_title mb-0 cs_fs_80 wow fadeInUp">CONTACT US</h1>
      </div>
    </section>
    <!-- End Page Heading Sectoin -->
    <!-- Start Form Info Split Section -->
    <style>
      .cs_form_info_split { display: flex; min-height: 700px; }
      .cs_form_info_left, .cs_form_info_right { flex: 0 0 50%; padding: 100px 60px; display: flex; align-items: center; }
      .cs_form_info_left { background: #eaf5ee; justify-content: flex-end; }
      .cs_form_info_right { background: #023030; justify-content: flex-start; }
      .cs_split_form { background: #024242; border-radius: 20px; padding: 40px; width: 100%; max-width: 480px; }
      .cs_split_form_label { color: #fff; font-weight: 700; font-size: 14px; margin: 0 0 8px; display: block; }
      .cs_split_form_group { margin-bottom: 20px; }
      .cs_split_form_row { display: flex; gap: 16px; }
      .cs_split_form_row .cs_split_form_group { flex: 1; }
      .cs_split_form input, .cs_split_form textarea { width: 100%; border: none; border-radius: 8px; padding: 14px 16px; font-size: 14px; color: #1f2419; outline: none; box-sizing: border-box; }
      .cs_split_form textarea { resize: vertical; min-height: 110px; font-family: inherit; }
      .cs_split_form_btn { background: #1a1a1a; color: #fff; font-weight: 700; padding: 16px; border-radius: 8px; border: none; width: 100%; cursor: pointer; font-size: 14px; }
      .cs_info_panel { width: 100%; max-width: 480px; }
      .cs_info_eyebrow { color: #78dca6; font-weight: 700; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 16px; }
      .cs_info_title { color: #fff; font-size: 40px; font-weight: 800; line-height: 1.25; margin: 0 0 16px; }
      .cs_info_desc { color: rgba(255, 255, 255, 0.7); font-size: 16px; line-height: 1.7; margin: 0 0 40px; }
      .cs_info_list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 22px; }
      .cs_info_item { display: flex; align-items: center; gap: 16px; }
      .cs_info_icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(120, 220, 166, 0.12); border: 1px solid rgba(120, 220, 166, 0.3); color: #78dca6; display: flex; align-items: center; justify-content: center; font-size: 18px; flex: none; }
      .cs_info_label { color: rgba(255, 255, 255, 0.55); font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase; margin: 0 0 2px; }
      .cs_info_value { color: #fff; font-size: 16px; font-weight: 600; margin: 0; text-decoration: none; }
      .cs_info_value a { color: #fff; text-decoration: none; }
      .cs_info_social_row { display: flex; gap: 10px; }
      .cs_info_social_row a { width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; }
      @media (max-width: 991px) {
        .cs_form_info_split { flex-direction: column; }
        .cs_form_info_left, .cs_form_info_right { flex: none; width: 100%; padding: 70px 24px; justify-content: center; }
        .cs_info_title { font-size: 30px; }
      }
    </style>
    <section class="cs_form_info_split">
      <div class="cs_form_info_left">
        <form action="https://api.web3forms.com/submit" method="POST" class="cs_split_form">
          <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c">
          <input type="hidden" name="subject" value="New Enquiry - PharmaCrop Contact Page">
          <div class="cs_split_form_group">
            <label class="cs_split_form_label">Name</label>
            <input type="text" name="name" placeholder="Your full name here" required>
          </div>
          <div class="cs_split_form_row">
            <div class="cs_split_form_group">
              <label class="cs_split_form_label">Email</label>
              <input type="email" name="email" placeholder="Your email here" required>
            </div>
            <div class="cs_split_form_group">
              <label class="cs_split_form_label">Number</label>
              <input type="tel" name="phone" placeholder="Your phone number here">
            </div>
          </div>
          <div class="cs_split_form_group">
            <label class="cs_split_form_label">Subject</label>
            <input type="text" name="topic" placeholder="Your subject here">
          </div>
          <div class="cs_split_form_group">
            <label class="cs_split_form_label">Message</label>
            <textarea name="message" placeholder="Your message"></textarea>
          </div>
          <button type="submit" class="cs_split_form_btn">Send Message</button>
        </form>
      </div>
      <div class="cs_form_info_right">
        <div class="cs_info_panel">
          <span class="cs_info_eyebrow">GET IN TOUCH</span>
          <h2 class="cs_info_title">Let's Start a Conversation</h2>
          <p class="cs_info_desc">Reach out to our team to discuss cultivation, GMP-certified manufacturing, or a potential partnership &mdash; we're ready to help.</p>
          <ul class="cs_info_list">
            <li class="cs_info_item">
              <span class="cs_info_icon"><i class="fa-solid fa-envelope"></i></span>
              <div>
                <p class="cs_info_label">Email</p>
                <p class="cs_info_value"><a href="mailto:enquiries@pharmacrop.com.au">enquiries@pharmacrop.com.au</a></p>
              </div>
            </li>
            <li class="cs_info_item">
              <span class="cs_info_icon"><i class="fa-solid fa-phone"></i></span>
              <div>
                <p class="cs_info_label">Phone</p>
                <p class="cs_info_value"><a href="tel:1300053533">1300 053 533</a></p>
              </div>
            </li>
            <li class="cs_info_item">
              <span class="cs_info_icon"><i class="fa-solid fa-location-dot"></i></span>
              <div>
                <p class="cs_info_label">Location</p>
                <p class="cs_info_value">Noosa Hinterland, Queensland, Australia</p>
              </div>
            </li>
            <li class="cs_info_item">
              <span class="cs_info_icon"><i class="fa-solid fa-share-nodes"></i></span>
              <div>
                <p class="cs_info_label">Social</p>
                <div class="cs_info_social_row">
                  <a href="https://www.linkedin.com/company/pharmacrop" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="https://wa.me/611300053533" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- End Form Info Split Section -->
    <!-- Start Contact Section -->
    <div class="cs_height_100 cs_height_lg_70"></div>
    <div class="container">
      <div class="row cs_gap_y_40">
        <div class="col-lg-5">
          <div class="cs_map">
            <iframe id="map" src="https://www.google.com/maps?q=Noosa+Hinterland,+Queensland,+Australia&output=embed" allowfullscreen=""></iframe>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="cs_pl_40">
            <div class="cs_section_heading cs_style_4 cs_mb_25">
              <h2 class="cs_section_title cs_fs_32 cs_bold mb-0">SEND US A <span>MESSAGE</span></h2>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" class="row cs_gap_y_24" id="cs_form">
              <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c">
              <div class="col-sm-6">
                <input type="text" name="name" class="cs_form_field" placeholder="Name" required="">
              </div>
              <div class="col-sm-6">
                <input type="email" name="email" class="cs_form_field" placeholder="Email" required="">
              </div>
              <div class="col-lg-12">
                <textarea class="cs_form_field" name="message" placeholder="Message" rows="5" required=""></textarea>
              </div>
              <div class="col-lg-12">
                <button class="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100" type="submit">Send Message</button>
                <div id="cs_result" class="cs_heading_color"></div>
              </div>
            </form>
            <div class="cs_height_60 cs_height_lg_40"></div>
            <div class="cs_section_heading cs_style_4 cs_mb_25">
              <h2 class="cs_section_title cs_fs_32 cs_bold mb-0">GET IN <span>TOUCH</span></h2>
            </div>
            <ul class="cs_contact_info cs_mp_0">
              <li>
                <p class="mb-0">EMAIL</p>
                <h4 class="mb-0 cs_fs_20 cs_bold">enquiries@pharmacrop.com.au</h4>
              </li>
              <li>
                <p class="mb-0">PHONE</p>
                <h4 class="mb-0 cs_fs_20 cs_bold">1300 053 533</h4>
              </li>
              <li>
                <p class="mb-0">LINKEDIN</p>
                <h4 class="mb-0 cs_fs_20 cs_bold">@pharmacrop</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="cs_height_100 cs_height_lg_70"></div>
    <!-- Start Contact Section -->
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
            <h2 class="cs_card_title cs_gradient_color_1 cs_fs_80 mb-0">LET'S START A <br>CONVERSATION</h2>
          </div>
          <a href="/contact" class="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
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
