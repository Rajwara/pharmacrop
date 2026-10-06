import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "PharmaCrop - Australian-Grown. Complete Control.",
  description: "Natural cultivation with pharmaceutical precision. Australian-grown, GMP-certified, TGA-licensed medicinal cannabis products.",
  icons: {
    icon: "/assets/img/General Images/Branding/favicon.png",
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
          href="/contact"
          className="cs_contact_float"
          aria-label="Contact Us"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>

        <button id="cs_scroll_top" className="cs_scroll_top" aria-label="Scroll to top" type="button">
          <i className="fa-solid fa-arrow-up"></i>
        </button>

        <a id="cs_quote_tab" className="cs_quote_tab" href="/partnerships">
          Partner With Us
        </a>

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

        <style>{`
          .cs_msl_form { display: flex; flex-direction: column; }
          .cs_msl_form > div { border-bottom: 1px solid rgba(2, 66, 66, 0.14); padding: 16px 0; }
          .cs_msl_form > div:first-of-type { padding-top: 0; }
          .cs_msl_form label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: rgba(2, 66, 66, 0.5); margin-bottom: 6px; }
          .cs_msl_form input, .cs_msl_form select, .cs_msl_form textarea { width: 100%; border: none; background: transparent; padding: 0; font-size: 15px; color: #024242; outline: none; box-sizing: border-box; font-family: inherit; appearance: none; -webkit-appearance: none; }
          .cs_msl_form select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23024242' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right center; }
          .cs_msl_form textarea { min-height: 50px; resize: vertical; }
          .cs_msl_form input::placeholder, .cs_msl_form textarea::placeholder { color: rgba(2, 66, 66, 0.35); }
          .cs_msl_submit { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: #024242; color: #fff; font-weight: 700; font-size: 14px; padding: 15px 24px; border-radius: 10px; border: none; cursor: pointer; margin-top: 24px; width: 100%; font-family: inherit; transition: background-color 0.3s ease; }
          .cs_msl_submit:hover { background: #78dca6; color: #024242; }
          .cs_msl_success { display: none; text-align: center; padding: 10px 0 4px; }
          .cs_msl_success.active { display: block; }
          .cs_msl_success i { color: #78dca6; font-size: 40px; margin-bottom: 14px; }
          .cs_msl_success h4 { color: #024242; font-size: 20px; font-weight: 800; margin: 0 0 8px; }
          .cs_msl_success p { color: rgba(2, 66, 66, 0.6); font-size: 14px; margin: 0; }
          @media (max-width: 575px) {
            .cs_modal_box.cs_msl_modal_box { padding: 28px 20px; }
          }
        `}</style>
        <div id="cs_msl_modal" className="cs_modal_overlay" role="dialog" aria-modal="true" aria-label="Request a call with our MSL">
          <div className="cs_modal_box cs_msl_modal_box">
            <button className="cs_modal_close" type="button" aria-label="Close">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="cs_fs_28 cs_bold cs_mb_12">Request a Call with our MSL</h3>
            <p className="cs_fs_20 cs_mb_24">Fill in your details and one of our Medical Science Liaisons will call you back.</p>
            <form action="https://api.web3forms.com/submit" method="POST" className="cs_msl_form" data-msl-form>
              <input type="hidden" name="access_key" value="cd98b256-0db3-478c-ab28-1ec94f80447c" />
              <input type="hidden" name="subject" value="New MSL Call Request - PharmaCrop Dashboard" />
              <div>
                <label>Name (required)</label>
                <input type="text" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label>Email (required)</label>
                <input type="email" name="email" placeholder="Your email" required />
              </div>
              <div>
                <label>Phone (required)</label>
                <input type="tel" name="phone" placeholder="Your phone number" required />
              </div>
              <div>
                <label>Preferred Callback Time</label>
                <select name="preferred_time" defaultValue="">
                  <option value="" disabled>Select a preferred time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div>
                <label>Topic</label>
                <select name="topic" defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option value="Product Information">Product Information</option>
                  <option value="Dosing Guidance">Dosing Guidance</option>
                  <option value="Clinical Study Data">Clinical Study Data</option>
                  <option value="Prescribing Support">Prescribing Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label>Message</label>
                <textarea name="message" placeholder="Tell us what you'd like to discuss"></textarea>
              </div>
              <button type="submit" className="cs_msl_submit">
                <i className="fa-solid fa-phone"></i> Request Call
              </button>
            </form>
            <div className="cs_msl_success" data-msl-success>
              <i className="fa-solid fa-circle-check"></i>
              <h4>Request received</h4>
              <p>Thanks &ndash; an MSL from our team will call you back shortly.</p>
            </div>
          </div>
        </div>

        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.slick.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/isotope.pkg.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lightgallery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/main.js" strategy="beforeInteractive" />
        <Script src="/assets/js/pharmacrop-auth.js" strategy="beforeInteractive" />
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
                if (overlay.id === 'cs_msl_modal') {
                  var form = overlay.querySelector('[data-msl-form]');
                  var success = overlay.querySelector('[data-msl-success]');
                  if (form) {
                    form.reset();
                    form.style.display = '';
                    var btn = form.querySelector('.cs_msl_submit');
                    if (btn) {
                      btn.disabled = false;
                      btn.innerHTML = '<i class="fa-solid fa-phone"></i> Request Call';
                    }
                  }
                  if (success) success.classList.remove('active');
                }
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

              var path = window.location.pathname;
              var portalPaths = ['/dashboard', '/all-products', '/hcp-resources', '/profile'];
              var isPortalPage = portalPaths.some(function (p) { return path === p || path.indexOf(p + '/') === 0; });

              var quoteTab = document.getElementById('cs_quote_tab');
              if (quoteTab) {
                if (isPortalPage) {
                  quoteTab.textContent = 'Request A Call With MSL';
                  quoteTab.href = '/contact';
                  quoteTab.addEventListener('click', function (e) {
                    e.preventDefault();
                    openModal('cs_msl_modal');
                  });
                } else if (path === '/contact' || path === '/contact/' || path === '/partnerships' || path === '/partnerships/') {
                  quoteTab.style.display = 'none';
                }
              }

              var mslForm = document.querySelector('[data-msl-form]');
              var mslSuccess = document.querySelector('[data-msl-success]');
              if (mslForm && mslSuccess) {
                mslForm.addEventListener('submit', function (e) {
                  e.preventDefault();
                  var submitBtn = mslForm.querySelector('.cs_msl_submit');
                  if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Sending...';
                  }
                  fetch(mslForm.action, {
                    method: 'POST',
                    body: new FormData(mslForm),
                    headers: { Accept: 'application/json' },
                  })
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                      if (data && data.success) {
                        mslForm.style.display = 'none';
                        mslSuccess.classList.add('active');
                      } else {
                        throw new Error('Submission failed');
                      }
                    })
                    .catch(function () {
                      if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '<i class="fa-solid fa-phone"></i> Request Call';
                      }
                      alert('Something went wrong sending your request. Please try again or call us directly.');
                    });
                });
              }

              try {
                if (!isPortalPage && !sessionStorage.getItem('cs_newsletter_shown')) {
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
