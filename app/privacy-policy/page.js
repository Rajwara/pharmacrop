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
          <li class="breadcrumb-item active">Privacy Policy</li>
        </ol>
        <h1 class="cs_page_title mb-0 cs_fs_80 wow fadeInUp">PRIVACY POLICY</h1>
      </div>
    </section>
    <!-- End Page Heading Sectoin -->
    <!-- Start Privacy Policy Section -->
    <section>
      <div class="cs_height_100 cs_height_lg_70"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <p class="cs_fs_20"><em>Last updated: 1 September 2026</em></p>
            <p class="cs_fs_20">Our Privacy Policy outlines our commitment to maintaining the confidentiality of your data, providing transparency about the information we collect, how we use it, and the measures we have in place to safeguard your privacy.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">1. Who we are</h2>
            <p>PharmaCrop ("PharmaCrop", "we", "us", "our") cultivates and manufactures Australian-grown, GMP-certified products from our operations in the Noosa Hinterland, Queensland. This policy explains how we collect, use, disclose and protect personal information handled through pharmacrop.com.au, in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">2. Information we collect</h2>
            <p>We collect personal information you provide directly to us, including:</p>
            <ul class="cs_mb_20">
              <li>Name, email address and phone number submitted through our Contact form.</li>
              <li>Name, email address, phone number and resume/CV submitted through our Careers Expression of Interest form.</li>
              <li>Email address if you subscribe to our newsletter.</li>
              <li>Any other information you choose to include in a message to us, which may in some cases include health-related or other sensitive information (for example, if you contact us as a patient or health professional). We only collect sensitive information where you provide it voluntarily and where reasonably necessary to respond to your enquiry.</li>
            </ul>
            <p>We may also collect limited technical information automatically when you browse our site (such as browser type, pages visited and general location derived from IP address) to help us understand site usage and maintain security.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">3. How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul class="cs_mb_20">
              <li>Respond to enquiries submitted through our Contact page.</li>
              <li>Assess Expressions of Interest submitted through our Careers page.</li>
              <li>Send newsletter updates to subscribers who opt in, and allow you to unsubscribe at any time.</li>
              <li>Maintain, secure and improve our website.</li>
              <li>Comply with our legal and regulatory obligations, including those arising under Therapeutic Goods Administration (TGA) guidance where relevant.</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">4. How we share your information</h2>
            <p>Our Contact and Careers forms are processed using a third-party form-delivery service, which transmits your submission to us by email. We do not share your personal information with other third parties except where required by law, to protect our legal rights, or with your consent.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">5. Data security</h2>
            <p>We take reasonable technical and organisational steps to protect the personal information we hold from misuse, interference, loss, and unauthorised access, modification or disclosure. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">6. Cookies</h2>
            <p>Our website may use cookies and similar technologies to support core site functionality and to understand how visitors use our site. You can control or disable cookies through your browser settings; doing so may affect some site functionality.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">7. Access and correction</h2>
            <p>You may request access to, or correction of, the personal information we hold about you, or ask us to delete it, subject to any legal or regulatory obligation we may have to retain it. To make a request, contact us using the details below.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">8. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. The updated version will be posted on this page with a revised "Last updated" date.</p>

            <div class="cs_height_40 cs_height_lg_30"></div>
            <h2 class="cs_fs_32 cs_bold cs_mb_16">9. Contact us</h2>
            <p>If you have questions about this Privacy Policy or how we handle your personal information, or wish to make a privacy complaint, please contact us:</p>
            <ul class="cs_mp_0">
              <li>Phone: <a href="tel:1300053533">1300 053 533</a></li>
              <li>Email: <a href="mailto:enquiries@pharmacrop.com.au">enquiries@pharmacrop.com.au</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/company/pharmacrop" target="_blank" rel="noopener">@pharmacrop</a></li>
            </ul>
            <p>If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.</p>
          </div>
        </div>
      </div>
      <div class="cs_height_100 cs_height_lg_70"></div>
    </section>
    <!-- End Privacy Policy Section -->
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
`,
      }}
    />
  );
}
