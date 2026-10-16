import Script from "next/script";

export const metadata = {
  title: "Reset Password - PharmaCrop",
};

export default function Page() {
  return (
    <>
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <!-- Start Preloader -->
    <div class="cs_preloader" style="background-color:#000;">
      <img src="/assets/img/General Images/Branding/pharma_Crop_logo_loader.gif" alt="Loading" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(70vw,480px);height:auto;">
    </div>
    <!-- End Preloader -->
    <!-- Start Header Section -->
    <header class="cs_site_header cs_style_1 cs_sticky_header">
      <div class="cs_main_header">
        <div class="container">
          <div class="cs_main_header_in">
            <div class="cs_main_header_left">
              <a class="cs_site_branding" href="/">
                <img src="/assets/img/General Images/Branding/pharmacrop-logo-header-animation.gif" alt="Logo" class="cs_logo_img cs_logo_gif">
              </a>
            </div>
            <div class="cs_main_header_center">
              <div class="cs_nav cs_heading_color">
                <nav class="cs_nav_list_wrap text-uppercase">
                  <ul class="cs_nav_list">
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/our-team">Our Team</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/partnerships">Partnerships</a></li>
                    <li><a href="https://aleafiate.com.au/" target="_blank" rel="noopener">Find a Doctor</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="cs_main_header_right">
              <a href="/portals" class="cs_header_login_btn">HCP Portals</a>
              <a href="/contact" class="cs_header_cta_btn" aria-label="Contact Us"><i class="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header Section -->
    <!-- Start Reset Password Section -->
    <style>
      .cs_auth_header_scrim { position: absolute; top: 0; left: 0; right: 0; height: 140px; background: linear-gradient(180deg, rgba(2,20,20,0.6) 0%, rgba(2,20,20,0.25) 65%, rgba(2,20,20,0) 100%); z-index: 50; pointer-events: none; }
      .cs_auth_page { display: flex; min-height: 100vh; }
      .cs_auth_left { flex: 0 0 46%; position: relative; display: flex; flex-direction: column; justify-content: space-between; padding: 170px 56px 64px; background: #011f1f url('/assets/img/Register/register-side-img.png') center center / cover no-repeat; overflow: hidden; }
      .cs_auth_left::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(2,34,34,0.55) 0%, rgba(2,20,20,0.15) 30%, rgba(2,20,20,0.35) 70%, rgba(2,20,20,0.75) 100%); pointer-events: none; }
      .cs_auth_left_content, .cs_auth_left_bottom { position: relative; z-index: 2; }
      .cs_auth_eyebrow { display: block; color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 20px; }
      .cs_auth_left_content h1 { color: #fff; font-size: 46px; font-weight: 800; line-height: 1.2; margin: 0 0 20px; }
      .cs_auth_left_content h1 span { color: #78dca6; }
      .cs_auth_tagline { color: #78dca6; font-size: 13px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin: 0; }
      .cs_auth_left_bottom { display: flex; flex-direction: column; gap: 18px; }
      .cs_auth_accred_bar { display: flex; align-items: center; justify-content: center; padding: 12px 10px; border: 1px solid rgba(255,255,255,0.25); border-radius: 50px; background: rgba(255,255,255,0.08); width: 100%; }
      .cs_auth_accred_item { display: flex; align-items: center; justify-content: center; flex: 1; padding: 0 14px; position: relative; }
      .cs_auth_accred_item + .cs_auth_accred_item::before { content: ""; position: absolute; left: 0; top: 4px; bottom: 4px; width: 1px; background: rgba(255,255,255,0.25); }
      .cs_auth_accred_item img { width: 52px; height: 52px; object-fit: contain; flex: none; }
      .cs_auth_left_bottom_row { display: flex; align-items: center; gap: 14px; }
      .cs_auth_left_bottom_row::before { content: ""; width: 30px; height: 1px; background: rgba(255,255,255,0.5); flex: none; }
      .cs_auth_left_bottom_row p { color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; line-height: 1.7; margin: 0; white-space: nowrap; }
      .cs_auth_right { flex: 1; background: #eef1ee; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 170px 40px 64px; position: relative; }
      .cs_auth_card { background: #fff; border-radius: 20px; padding: 44px 40px; width: 100%; max-width: 460px; box-shadow: 0 25px 60px rgba(2, 66, 66, 0.08); }
      .cs_auth_field { position: relative; margin-bottom: 20px; }
      .cs_auth_field_icon { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: #999; font-size: 15px; pointer-events: none; }
      .cs_auth_field input { width: 100%; box-sizing: border-box; border: 1px solid #e2e5e2; border-radius: 10px; padding: 15px 44px; font-size: 14px; color: #024242; outline: none; background: #fff; font-family: inherit; }
      .cs_auth_field input::placeholder { color: #999; }
      .cs_auth_field input:focus { border-color: #78dca6; }
      .cs_auth_field_toggle { position: absolute; right: 18px; top: 50%; transform: translateY(-50%); color: #999; background: none; border: none; cursor: pointer; padding: 0; font-size: 15px; }
      .cs_auth_btn_primary { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; background: #024242; color: #fff; font-weight: 700; font-size: 14px; padding: 16px 20px; border-radius: 10px; text-decoration: none; box-sizing: border-box; border: none; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease; }
      .cs_auth_btn_primary:hover { background: #78dca6; color: #024242; transform: translateY(-2px); }
      .cs_auth_switch { text-align: center; margin-top: 22px; font-size: 13px; color: #666; }
      .cs_auth_switch a { color: #024242; font-weight: 700; text-decoration: underline; }
      .cs_auth_banner { display: flex; align-items: flex-start; gap: 10px; background: rgba(224,85,79,0.1); border: 1px solid rgba(224,85,79,0.3); color: #b5342e; border-radius: 10px; padding: 14px 16px; font-size: 13px; line-height: 1.6; margin-bottom: 24px; }
      .cs_auth_banner i { margin-top: 2px; }
      .cs_auth_register_badge { display: inline-block; color: #78dca6; background: rgba(120,220,166,0.12); border-radius: 20px; padding: 5px 14px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; }
      .cs_auth_register_intro h2 { color: #024242; font-size: 26px; font-weight: 800; margin: 0 0 12px; line-height: 1.3; }
      .cs_auth_register_intro p { color: #666; font-size: 14px; line-height: 1.7; margin: 0 0 28px; }
      .cs_auth_help { display: block; color: #999; font-size: 11.5px; margin-top: 6px; line-height: 1.5; }
      .cs_auth_error { display: none; color: #e0554f; font-size: 12px; margin-top: 6px; line-height: 1.5; }
      .cs_auth_confirm { text-align: center; padding: 20px 0; }
      .cs_auth_confirm h2 { color: #024242; font-size: 24px; font-weight: 800; margin: 0 0 16px; }
      .cs_auth_confirm p { color: #666; font-size: 14px; line-height: 1.7; margin: 0 0 28px; }
      @media (max-width: 991px) {
        .cs_auth_page { flex-direction: column; }
        .cs_auth_left { flex: none; padding: 130px 32px 48px; min-height: 360px; }
        .cs_auth_left_content h1 { font-size: 34px; }
        .cs_auth_right { padding: 48px 24px; }
      }
      @media (max-width: 575px) {
        .cs_auth_card { padding: 32px 24px; }
        .cs_auth_left { padding: 155px 24px 36px; min-height: 340px; }
        .cs_auth_accred_item { padding: 0 8px; }
        .cs_auth_accred_item img { width: 38px; height: 38px; }
        .cs_auth_left_bottom_row p { white-space: normal; }
      }
    </style>
    <div class="cs_auth_header_scrim"></div>
    <div class="cs_auth_page">
      <div class="cs_auth_left">
        <div class="cs_auth_left_content">
          <span class="cs_auth_eyebrow">HCP Portal</span>
          <h1>For those<br>who make<br><span>a difference.</span></h1>
          <p class="cs_auth_tagline">Access. Learn. Support.</p>
        </div>
        <div class="cs_auth_left_bottom">
          <div class="cs_auth_accred_bar">
            <span class="cs_auth_accred_item"><img src="/assets/img/General Images/Certifications/AUSTRALIAN-MADE.png" alt="Australian Made"></span>
            <span class="cs_auth_accred_item"><img src="/assets/img/General Images/Certifications/GMP-CERTIFIED.png" alt="GMP Certified"></span>
            <span class="cs_auth_accred_item"><img src="/assets/img/General Images/Certifications/TGA-LICENSED.png" alt="TGA Licensed"></span>
          </div>
          <div class="cs_auth_left_bottom_row">
            <p>Australian-Grown &middot; GMP Certified &middot; TGA Licensed</p>
          </div>
        </div>
      </div>
      <div class="cs_auth_right">
        <div class="cs_auth_card">
          <div class="cs_auth_banner" data-reset-invalid hidden>
            <i class="fa-solid fa-circle-exclamation"></i>
            <span>This password reset link is missing or incomplete. Please request a new one from the <a href="/login" style="color:#b5342e; text-decoration:underline;">login page</a>.</span>
          </div>
          <div data-reset-form-wrap>
            <div class="cs_auth_register_intro">
              <span class="cs_auth_register_badge">PharmaCrop Portal</span>
              <h2>Choose A New Password</h2>
              <p>Enter a new password for your HCP Portal account below.</p>
            </div>
            <form id="cs_reset_form" novalidate>
              <span class="cs_auth_error" data-reset-submit-error style="display:none; margin-bottom: 16px;">Something went wrong. Please try again.</span>
              <div class="cs_auth_field">
                <span class="cs_auth_field_icon"><i class="fa-solid fa-lock"></i></span>
                <input type="password" name="password" placeholder="New password" data-auth-password required>
                <button type="button" class="cs_auth_field_toggle" data-auth-toggle aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
              </div>
              <span class="cs_auth_help" style="margin: -12px 0 16px;">At least 8 characters.</span>
              <div class="cs_auth_field">
                <span class="cs_auth_field_icon"><i class="fa-solid fa-lock"></i></span>
                <input type="password" name="confirmPassword" placeholder="Confirm new password" data-auth-password required>
                <button type="button" class="cs_auth_field_toggle" data-auth-toggle aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
              </div>
              <button type="submit" class="cs_auth_btn_primary" data-reset-submit-btn>
                <span data-reset-submit-label>Reset Password</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path></svg>
              </button>
            </form>
          </div>
          <div class="cs_auth_confirm" data-reset-confirm hidden>
            <h2>Password Updated</h2>
            <p>Your password has been reset. You can now sign in with your new password.</p>
            <a href="/login" class="cs_auth_btn_primary">Go To Sign In</a>
          </div>
        </div>
      </div>
    </div>
    <!-- End Reset Password Section -->
`,
      }}
    />
    <Script id="cs_reset_script" strategy="afterInteractive">
      {`
        (function () {
          var params = new URLSearchParams(window.location.search);
          var login = params.get('login') || '';
          var key = params.get('key') || '';

          var invalidBanner = document.querySelector('[data-reset-invalid]');
          var formWrap = document.querySelector('[data-reset-form-wrap]');

          if (!login || !key) {
            if (invalidBanner) invalidBanner.hidden = false;
            if (formWrap) formWrap.style.display = 'none';
            return;
          }

          var form = document.getElementById('cs_reset_form');
          if (!form) return;

          form.addEventListener('submit', function (e) {
            e.preventDefault();
            var submitBtn = form.querySelector('[data-reset-submit-btn]');
            var submitLabel = form.querySelector('[data-reset-submit-label]');
            var submitError = form.querySelector('[data-reset-submit-error]');
            if (submitError) submitError.style.display = 'none';

            var password = form.querySelector('[name="password"]').value;
            var confirmPassword = form.querySelector('[name="confirmPassword"]').value;

            if (password.length < 8) {
              if (submitError) {
                submitError.textContent = 'Password must be at least 8 characters.';
                submitError.style.display = 'block';
              }
              return;
            }
            if (password !== confirmPassword) {
              if (submitError) {
                submitError.textContent = 'Passwords do not match.';
                submitError.style.display = 'block';
              }
              return;
            }

            if (submitBtn) submitBtn.disabled = true;
            if (submitLabel) submitLabel.textContent = 'Resetting...';

            fetch('/api/auth/reset-password', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ login: login, key: key, password: password }),
            })
              .then(function (res) { return res.json().then(function (data) { return { res: res, data: data }; }); })
              .then(function (result) {
                if (!result.res.ok || !result.data.ok) throw new Error(result.data.message || 'This reset link is invalid or has expired.');

                if (formWrap) formWrap.style.display = 'none';
                var confirm = document.querySelector('[data-reset-confirm]');
                if (confirm) confirm.hidden = false;
              })
              .catch(function (err) {
                if (submitError) {
                  submitError.textContent = (err && err.message) || 'This reset link is invalid or has expired.';
                  submitError.style.display = 'block';
                }
                if (submitBtn) submitBtn.disabled = false;
                if (submitLabel) submitLabel.textContent = 'Reset Password';
              });
          });

          document.querySelectorAll('[data-auth-toggle]').forEach(function (btn) {
            btn.addEventListener('click', function () {
              var field = btn.previousElementSibling;
              if (!field || !field.hasAttribute('data-auth-password')) return;
              var isPassword = field.getAttribute('type') === 'password';
              field.setAttribute('type', isPassword ? 'text' : 'password');
              var icon = btn.querySelector('i');
              if (icon) {
                icon.classList.toggle('fa-eye', !isPassword);
                icon.classList.toggle('fa-eye-slash', isPassword);
              }
            });
          });
        })();
      `}
    </Script>
    </>
  );
}
