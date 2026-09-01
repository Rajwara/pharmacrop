import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "PharmaCrop - Bring Balance To Your Life",
  description: "PharmaCrop - Bring Balance To Your Life",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-js">
      <body>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/lightgallery.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {children}

        <a
          href="https://wa.me/611300053533"
          className="cs_whatsapp_float"
          aria-label="Chat with us on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <button id="cs_scroll_top" className="cs_scroll_top" aria-label="Scroll to top" type="button">
          <i className="fa-solid fa-arrow-up"></i>
        </button>

        <button id="cs_quote_tab" className="cs_quote_tab" type="button">
          Get a Quote
        </button>

        <div id="cs_quote_modal" className="cs_modal_overlay" role="dialog" aria-modal="true" aria-label="Request a quote">
          <div className="cs_modal_box">
            <button className="cs_modal_close" type="button" aria-label="Close">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="cs_fs_32 cs_bold cs_mb_16">Request a Quote</h3>
            <p className="cs_fs_20 cs_mb_24">Tell us a bit about what you need and we&apos;ll get back to you.</p>
            <form action="https://api.web3forms.com/submit" method="POST" className="row cs_gap_y_24">
              <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c" />
              <input type="hidden" name="subject" value="New Quote Request - PharmaCrop Website" />
              <div className="col-sm-6">
                <input type="text" name="name" className="cs_form_field" placeholder="Full Name *" required />
              </div>
              <div className="col-sm-6">
                <input type="email" name="email" className="cs_form_field" placeholder="Email Address *" required />
              </div>
              <div className="col-sm-6">
                <input type="tel" name="phone" className="cs_form_field" placeholder="Phone" />
              </div>
              <div className="col-sm-6">
                <input type="text" name="company" className="cs_form_field" placeholder="Company / Organisation" />
              </div>
              <div className="col-lg-12">
                <select name="interest" className="cs_form_field" required defaultValue="">
                  <option value="" disabled>I&apos;m interested in... *</option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Prescriber">Prescriber</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-lg-12">
                <textarea name="message" className="cs_form_field" placeholder="Tell us about your requirements" rows="4"></textarea>
              </div>
              <div className="col-lg-12">
                <button className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color w-100" type="submit">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>

        <div id="cs_newsletter_modal" className="cs_modal_overlay" role="dialog" aria-modal="true" aria-label="Subscribe to our newsletter">
          <div className="cs_modal_box cs_modal_box_sm">
            <button className="cs_modal_close" type="button" aria-label="Close">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="cs_fs_28 cs_bold cs_mb_12">Stay in the loop</h3>
            <p className="cs_fs_20 cs_mb_24">Get the latest PharmaCrop news and product updates straight to your inbox.</p>
            <form action="https://api.web3forms.com/submit" method="POST" className="row cs_gap_y_20">
              <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c" />
              <input type="hidden" name="subject" value="New Newsletter Signup - PharmaCrop Website" />
              <div className="col-lg-12">
                <input type="email" name="email" className="cs_form_field" placeholder="Enter your email address" required />
              </div>
              <div className="col-lg-12">
                <button className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color w-100" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.slick.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/isotope.pkg.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lightgallery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/main.js" strategy="beforeInteractive" />
        <Script id="cs_scroll_top_script" strategy="afterInteractive">
          {`
            (function () {
              var btn = document.getElementById('cs_scroll_top');
              if (!btn) return;
              function toggle() {
                if (window.scrollY > 400) {
                  btn.classList.add('active');
                } else {
                  btn.classList.remove('active');
                }
              }
              window.addEventListener('scroll', toggle);
              toggle();
              btn.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });
            })();
          `}
        </Script>
        <Script id="cs_modals_script" strategy="afterInteractive">
          {`
            (function () {
              function openModal(id) {
                var el = document.getElementById(id);
                if (el) el.classList.add('active');
              }
              function closeModal(overlay) {
                overlay.classList.remove('active');
              }
              document.querySelectorAll('.cs_modal_overlay').forEach(function (overlay) {
                overlay.addEventListener('click', function (e) {
                  if (e.target === overlay) closeModal(overlay);
                });
                var closeBtn = overlay.querySelector('.cs_modal_close');
                if (closeBtn) {
                  closeBtn.addEventListener('click', function () {
                    closeModal(overlay);
                  });
                }
              });
              document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                  document.querySelectorAll('.cs_modal_overlay.active').forEach(closeModal);
                }
              });

              var quoteTab = document.getElementById('cs_quote_tab');
              if (quoteTab) {
                quoteTab.addEventListener('click', function () {
                  openModal('cs_quote_modal');
                });
              }

              try {
                if (!sessionStorage.getItem('cs_newsletter_shown')) {
                  var onScroll = function () {
                    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    if (docHeight <= 0) return;
                    var scrollPercent = window.scrollY / docHeight;
                    if (scrollPercent >= 0.3) {
                      openModal('cs_newsletter_modal');
                      sessionStorage.setItem('cs_newsletter_shown', '1');
                      window.removeEventListener('scroll', onScroll);
                    }
                  };
                  window.addEventListener('scroll', onScroll);
                }
              } catch (err) {}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
