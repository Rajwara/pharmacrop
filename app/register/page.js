import Script from "next/script";

export const metadata = {
  title: "HCP Login & Register - PharmaCrop",
};

export default function Page() {
  return (
    <>
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
                <img src="/assets/img/pharmacrop-logo-header-animation.gif" alt="Logo" class="cs_logo_img cs_logo_gif">
              </a>
            </div>
            <div class="cs_main_header_center">
              <div class="cs_nav cs_heading_color">
                <nav class="cs_nav_list_wrap text-uppercase">
                  <ul class="cs_nav_list">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/partnerships">Partnerships</a></li>
                    <li><a href="/careers">Careers</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="cs_main_header_right">
              <a href="/login" class="cs_header_login_btn">HCP Portals</a>
              <a href="/contact" class="cs_header_cta_btn" aria-label="Contact Us"><i class="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header Section -->
    <!-- Start Register/Login Section -->
    <style>
      .cs_auth_page { display: flex; min-height: 100vh; padding-top: 100px; }
      .cs_auth_left { flex: 0 0 46%; position: relative; display: flex; flex-direction: column; justify-content: space-between; padding: 64px 56px; background: #f2f4f2 url('/assets/img/register-side-img.png') center center / cover no-repeat; overflow: hidden; }
      .cs_auth_left::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(238,241,238,0.15) 0%, rgba(2,20,20,0.05) 55%, rgba(2,20,20,0.65) 100%); pointer-events: none; }
      .cs_auth_left_content, .cs_auth_left_bottom { position: relative; z-index: 2; }
      .cs_auth_eyebrow { display: block; color: #024242; font-size: 12px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 20px; }
      .cs_auth_left_content h1 { color: #024242; font-size: 46px; font-weight: 800; line-height: 1.2; margin: 0 0 20px; }
      .cs_auth_left_content h1 span { color: #78dca6; }
      .cs_auth_tagline { color: #78dca6; font-size: 13px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin: 0; }
      .cs_auth_left_bottom { display: flex; align-items: center; gap: 14px; }
      .cs_auth_left_bottom::before { content: ""; width: 30px; height: 1px; background: rgba(255,255,255,0.5); }
      .cs_auth_left_bottom p { color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; line-height: 1.7; margin: 0; }
      .cs_auth_right { flex: 1; background: #eef1ee; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 64px 40px; position: relative; }
      .cs_auth_card { background: #fff; border-radius: 20px; padding: 44px 40px; width: 100%; max-width: 460px; box-shadow: 0 25px 60px rgba(2, 66, 66, 0.08); }
      .cs_auth_tabs { display: flex; gap: 32px; border-bottom: 1px solid #e5e8e5; margin-bottom: 32px; }
      .cs_auth_tab { background: none; border: none; padding: 0 0 14px; font-family: inherit; font-size: 18px; font-weight: 700; color: #999; cursor: pointer; position: relative; }
      .cs_auth_tab.active { color: #024242; }
      .cs_auth_tab.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: #78dca6; }
      .cs_auth_panel { display: none; }
      .cs_auth_panel.active { display: block; }
      .cs_auth_field { position: relative; margin-bottom: 20px; }
      .cs_auth_field_icon { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: #999; font-size: 15px; pointer-events: none; }
      .cs_auth_field input, .cs_auth_field select { width: 100%; box-sizing: border-box; border: 1px solid #e2e5e2; border-radius: 10px; padding: 15px 44px; font-size: 14px; color: #024242; outline: none; background: #fff; font-family: inherit; appearance: none; -webkit-appearance: none; }
      .cs_auth_field input::placeholder { color: #999; }
      .cs_auth_field input:focus, .cs_auth_field select:focus { border-color: #78dca6; }
      .cs_auth_field_toggle { position: absolute; right: 18px; top: 50%; transform: translateY(-50%); color: #999; background: none; border: none; cursor: pointer; padding: 0; font-size: 15px; }
      .cs_auth_forgot { text-align: right; margin: -8px 0 24px; }
      .cs_auth_forgot a { color: #024242; font-size: 13px; text-decoration: underline; }
      .cs_auth_btn_primary { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; background: #024242; color: #fff; font-weight: 700; font-size: 14px; padding: 16px 20px; border-radius: 10px; text-decoration: none; box-sizing: border-box; transition: background-color 0.3s ease, transform 0.2s ease; }
      .cs_auth_btn_primary:hover { background: #78dca6; color: #024242; transform: translateY(-2px); }
      .cs_auth_divider { display: flex; align-items: center; gap: 14px; margin: 22px 0; }
      .cs_auth_divider::before, .cs_auth_divider::after { content: ""; flex: 1; height: 1px; background: #e5e8e5; }
      .cs_auth_divider span { color: #999; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
      .cs_auth_btn_outline { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; background: rgba(120,220,166,0.12); color: #024242; font-weight: 700; font-size: 14px; padding: 16px 20px; border-radius: 10px; border: 1px solid rgba(2,66,66,0.25); text-decoration: none; box-sizing: border-box; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease; font-family: inherit; }
      .cs_auth_btn_outline:hover { background: #78dca6; border-color: #78dca6; transform: translateY(-2px); }
      .cs_auth_switch { text-align: center; margin-top: 22px; font-size: 13px; color: #666; }
      .cs_auth_switch button { background: none; border: none; padding: 0; color: #024242; font-weight: 700; text-decoration: underline; cursor: pointer; font-family: inherit; font-size: 13px; }
      .cs_auth_right_bottom { position: absolute; right: 40px; bottom: 40px; display: flex; align-items: center; gap: 14px; }
      .cs_auth_right_bottom svg { flex: none; color: #78dca6; }
      .cs_auth_right_bottom_line { width: 1px; height: 56px; background: rgba(2,66,66,0.2); }
      .cs_auth_right_bottom_text { color: #78dca6; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; line-height: 1.9; }
      @media (max-width: 991px) {
        .cs_auth_page { flex-direction: column; padding-top: 130px; }
        .cs_auth_left { flex: none; padding: 48px 32px; min-height: 320px; }
        .cs_auth_left_content h1 { font-size: 34px; }
        .cs_auth_right { padding: 48px 24px; }
        .cs_auth_right_bottom { display: none; }
      }
      @media (max-width: 575px) {
        .cs_auth_card { padding: 32px 24px; }
        .cs_auth_left { padding: 36px 24px; min-height: 280px; }
      }
    </style>
    <div class="cs_auth_page">
      <div class="cs_auth_left">
        <div class="cs_auth_left_content">
          <span class="cs_auth_eyebrow">HCP Portal</span>
          <h1>For those<br>who make<br><span>a difference.</span></h1>
          <p class="cs_auth_tagline">Access. Learn. Support.</p>
        </div>
        <div class="cs_auth_left_bottom">
          <p>Science For<br>A Healthier Tomorrow.</p>
        </div>
      </div>
      <div class="cs_auth_right">
        <div class="cs_auth_card">
          <div class="cs_auth_tabs">
            <button type="button" class="cs_auth_tab active" data-auth-tab="login">Login</button>
            <button type="button" class="cs_auth_tab" data-auth-tab="register">Register</button>
          </div>
          <div class="cs_auth_panel active" data-auth-panel="login">
            <div class="cs_auth_field">
              <span class="cs_auth_field_icon"><i class="fa-solid fa-envelope"></i></span>
              <input type="email" placeholder="Email address">
            </div>
            <div class="cs_auth_field">
              <span class="cs_auth_field_icon"><i class="fa-solid fa-lock"></i></span>
              <input type="password" placeholder="Password" data-auth-password>
              <button type="button" class="cs_auth_field_toggle" data-auth-toggle aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
            </div>
            <div class="cs_auth_forgot"><a href="/contact">Forgot password?</a></div>
            <a href="/contact" class="cs_auth_btn_primary">
              Log In
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path></svg>
            </a>
            <div class="cs_auth_divider"><span>OR</span></div>
            <button type="button" class="cs_auth_btn_outline" data-auth-switch="register">
              Create An Account
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path></svg>
            </button>
          </div>
          <div class="cs_auth_panel" data-auth-panel="register">
            <div class="cs_auth_field">
              <span class="cs_auth_field_icon"><i class="fa-solid fa-user"></i></span>
              <input type="text" placeholder="Full name">
            </div>
            <div class="cs_auth_field">
              <span class="cs_auth_field_icon"><i class="fa-solid fa-envelope"></i></span>
              <input type="email" placeholder="Email address">
            </div>
            <div class="cs_auth_field">
              <span class="cs_auth_field_icon"><i class="fa-solid fa-user-doctor"></i></span>
              <select defaultValue="">
                <option value="" disabled selected>Select your role</option>
                <option value="Doctor">Doctor</option>
                <option value="Pharmacist">Pharmacist</option>
              </select>
            </div>
            <div class="cs_auth_field">
              <span class="cs_auth_field_icon"><i class="fa-solid fa-lock"></i></span>
              <input type="password" placeholder="Password" data-auth-password>
              <button type="button" class="cs_auth_field_toggle" data-auth-toggle aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
            </div>
            <div class="cs_auth_field" style="margin-bottom: 28px;">
              <span class="cs_auth_field_icon"><i class="fa-solid fa-lock"></i></span>
              <input type="password" placeholder="Confirm password" data-auth-password>
              <button type="button" class="cs_auth_field_toggle" data-auth-toggle aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
            </div>
            <a href="/contact" class="cs_auth_btn_primary">
              Create Account
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path></svg>
            </a>
            <div class="cs_auth_switch">Already have an account? <button type="button" data-auth-switch="login">Log in</button></div>
          </div>
        </div>
        <div class="cs_auth_right_bottom">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 27V10" stroke="currentColor" stroke-width="1.5"/><path d="M10 12C10 6.47715 14.4772 2 20 2C20 7.52285 15.5228 12 10 12Z" stroke="currentColor" stroke-width="1.5"/><path d="M10 12C10 6.47715 5.52285 2 0 2C0 7.52285 4.47715 12 10 12Z" stroke="currentColor" stroke-width="1.5"/></svg>
          <span class="cs_auth_right_bottom_line"></span>
          <span class="cs_auth_right_bottom_text">People<br>Plants<br>Possibilities</span>
        </div>
      </div>
    </div>
    <!-- End Register/Login Section -->
`,
      }}
    />
    <Script id="cs_auth_script" strategy="afterInteractive">
      {`
        (function () {
          var tabs = document.querySelectorAll('.cs_auth_tab');
          var panels = document.querySelectorAll('.cs_auth_panel');
          var switches = document.querySelectorAll('[data-auth-switch]');

          function setActive(name) {
            tabs.forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-auth-tab') === name); });
            panels.forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-auth-panel') === name); });
          }

          tabs.forEach(function (tab) {
            tab.addEventListener('click', function () { setActive(tab.getAttribute('data-auth-tab')); });
          });
          switches.forEach(function (btn) {
            btn.addEventListener('click', function () { setActive(btn.getAttribute('data-auth-switch')); });
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
