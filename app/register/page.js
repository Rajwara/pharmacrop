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
                    <li><a href="/our-facilities">Our Facility</a></li>
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
      .cs_auth_header_scrim { position: absolute; top: 0; left: 0; right: 0; height: 140px; background: linear-gradient(180deg, rgba(2,20,20,0.6) 0%, rgba(2,20,20,0.25) 65%, rgba(2,20,20,0) 100%); z-index: 50; pointer-events: none; }
      .cs_auth_page { display: flex; min-height: 100vh; }
      .cs_auth_left { flex: 0 0 46%; position: relative; display: flex; flex-direction: column; justify-content: space-between; padding: 170px 56px 64px; background: #011f1f url('/assets/img/register-side-img.png') center center / cover no-repeat; overflow: hidden; }
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
      .cs_auth_card { background: #fff; border-radius: 20px; padding: 44px 40px; width: 100%; max-width: 460px; box-shadow: 0 25px 60px rgba(2, 66, 66, 0.08); transition: max-width 0.3s ease; }
      .cs_auth_card.cs_auth_card_wide { max-width: 620px; }
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
      .cs_auth_forgot span { color: #999; font-size: 13px; }
      .cs_auth_btn_primary { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; background: #024242; color: #fff; font-weight: 700; font-size: 14px; padding: 16px 20px; border-radius: 10px; text-decoration: none; box-sizing: border-box; transition: background-color 0.3s ease, transform 0.2s ease; }
      .cs_auth_btn_primary:hover { background: #78dca6; color: #024242; transform: translateY(-2px); }
      .cs_auth_divider { display: flex; align-items: center; gap: 14px; margin: 22px 0; }
      .cs_auth_divider::before, .cs_auth_divider::after { content: ""; flex: 1; height: 1px; background: #e5e8e5; }
      .cs_auth_divider span { color: #999; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
      .cs_auth_btn_outline { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; background: rgba(120,220,166,0.12); color: #024242; font-weight: 700; font-size: 14px; padding: 16px 20px; border-radius: 10px; border: 1px solid rgba(2,66,66,0.25); text-decoration: none; box-sizing: border-box; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease; font-family: inherit; }
      .cs_auth_btn_outline:hover { background: #78dca6; border-color: #78dca6; transform: translateY(-2px); }
      .cs_auth_switch { text-align: center; margin-top: 22px; font-size: 13px; color: #666; }
      .cs_auth_switch button { background: none; border: none; padding: 0; color: #024242; font-weight: 700; text-decoration: underline; cursor: pointer; font-family: inherit; font-size: 13px; }
      .cs_auth_switch a { color: #024242; font-weight: 700; text-decoration: underline; }
      .cs_auth_register_badge { display: inline-block; color: #78dca6; background: rgba(120,220,166,0.12); border-radius: 20px; padding: 5px 14px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; }
      .cs_auth_register_intro h2 { color: #024242; font-size: 26px; font-weight: 800; margin: 0 0 12px; line-height: 1.3; }
      .cs_auth_register_intro p { color: #666; font-size: 14px; line-height: 1.7; margin: 0 0 28px; }
      .cs_auth_form_section { margin-bottom: 26px; }
      .cs_auth_section_title { color: #024242; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 16px; padding-bottom: 10px; border-bottom: 1px solid #e5e8e5; }
      .cs_auth_field_row { display: flex; gap: 14px; }
      .cs_auth_field_row .cs_auth_field { flex: 1; min-width: 0; }
      .cs_auth_field_row .cs_auth_field.cs_auth_field_sm { flex: 0 0 120px; }
      .cs_auth_field input, .cs_auth_field select { padding-left: 18px; }
      .cs_auth_field_icon ~ input, .cs_auth_field_icon ~ select { padding-left: 44px; }
      .cs_auth_help { display: block; color: #999; font-size: 11.5px; margin-top: 6px; line-height: 1.5; }
      .cs_auth_error { display: none; color: #e0554f; font-size: 12px; margin-top: 6px; line-height: 1.5; }
      .cs_auth_field.cs_auth_field_invalid input,
      .cs_auth_field.cs_auth_field_invalid select { border-color: #e0554f; }
      .cs_auth_field.cs_auth_field_invalid .cs_auth_error { display: block; }
      .cs_auth_field_group { margin-bottom: 20px; }
      .cs_auth_group_label { display: block; color: #024242; font-size: 13px; font-weight: 700; margin-bottom: 10px; }
      .cs_auth_radio_row { display: flex; flex-wrap: wrap; gap: 18px; }
      .cs_auth_radio { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #024242; cursor: pointer; }
      .cs_auth_radio input { accent-color: #024242; width: 15px; height: 15px; margin: 0; }
      .cs_auth_checkbox { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #024242; cursor: pointer; margin-bottom: 16px; line-height: 1.6; }
      .cs_auth_checkbox input { accent-color: #024242; width: 16px; height: 16px; margin: 2px 0 0; flex: none; }
      .cs_auth_checkbox a { color: #024242; text-decoration: underline; }
      .cs_auth_consent { margin-bottom: 6px; }
      .cs_auth_confirm { text-align: center; padding: 20px 0; }
      .cs_auth_confirm h2 { color: #024242; font-size: 24px; font-weight: 800; margin: 0 0 16px; }
      .cs_auth_confirm p { color: #666; font-size: 14px; line-height: 1.7; margin: 0 0 28px; }
      .cs_auth_confirm strong { color: #024242; }
      @media (max-width: 991px) {
        .cs_auth_page { flex-direction: column; }
        .cs_auth_left { flex: none; padding: 130px 32px 48px; min-height: 360px; }
        .cs_auth_left_content h1 { font-size: 34px; }
        .cs_auth_right { padding: 48px 24px; }
      }
      @media (max-width: 575px) {
        .cs_auth_field_row { flex-direction: column; gap: 0; }
        .cs_auth_field_row .cs_auth_field.cs_auth_field_sm { flex: 1; }
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
            <span class="cs_auth_accred_item"><img src="/assets/img/AUSTRALIAN-MADE.png" alt="Australian Made"></span>
            <span class="cs_auth_accred_item"><img src="/assets/img/GMP-CERTIFIED.png" alt="GMP Certified"></span>
            <span class="cs_auth_accred_item"><img src="/assets/img/TGA-LICENSED.png" alt="TGA Licensed"></span>
          </div>
          <div class="cs_auth_left_bottom_row">
            <p>Australian-Grown &middot; GMP Certified &middot; TGA Licensed</p>
          </div>
        </div>
      </div>
      <div class="cs_auth_right">
        <div class="cs_auth_card" data-auth-card>
          <div class="cs_auth_tabs">
            <button type="button" class="cs_auth_tab active" data-auth-tab="login">Login</button>
            <button type="button" class="cs_auth_tab" data-auth-tab="register">Register</button>
          </div>
          <div class="cs_auth_panel active" data-auth-panel="login">
            <div class="cs_auth_register_intro">
              <span class="cs_auth_register_badge">PharmaCrop Portal</span>
              <h2>Welcome Back</h2>
              <p>Sign in to access full product information, clinical resources and patient support materials as a verified healthcare professional.</p>
            </div>
            <div class="cs_auth_field">
              <span class="cs_auth_field_icon"><i class="fa-solid fa-envelope"></i></span>
              <input type="email" placeholder="Email address">
            </div>
            <div class="cs_auth_field">
              <span class="cs_auth_field_icon"><i class="fa-solid fa-lock"></i></span>
              <input type="password" placeholder="Password" data-auth-password>
              <button type="button" class="cs_auth_field_toggle" data-auth-toggle aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
            </div>
            <div class="cs_auth_forgot"><span>Forgot password?</span></div>
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
            <div class="cs_auth_register_intro">
              <span class="cs_auth_register_badge">PharmaCrop Portal</span>
              <h2>Register for Prescriber Access</h2>
              <p>Verified healthcare professionals can access full product information, clinical resources and patient support materials. Registration takes two minutes and we verify every application within one business day.</p>
            </div>
            <form id="cs_register_form" novalidate>
              <div class="cs_auth_form_section">
                <h4 class="cs_auth_section_title">Your details</h4>
                <div class="cs_auth_field_row">
                  <div class="cs_auth_field">
                    <input type="text" name="firstName" placeholder="First name" required>
                    <span class="cs_auth_error">This field is required.</span>
                  </div>
                  <div class="cs_auth_field">
                    <input type="text" name="lastName" placeholder="Last name" required>
                    <span class="cs_auth_error">This field is required.</span>
                  </div>
                </div>
                <div class="cs_auth_field">
                  <input type="email" name="workEmail" placeholder="Work email" required data-validate="email">
                  <span class="cs_auth_help">This will be your login.</span>
                  <span class="cs_auth_error">Enter a valid work email address.</span>
                </div>
                <div class="cs_auth_field">
                  <input type="tel" name="mobile" placeholder="Mobile number e.g. 04XX XXX XXX" required data-validate="mobile">
                  <span class="cs_auth_error">Enter a valid Australian mobile number.</span>
                </div>
              </div>

              <div class="cs_auth_form_section">
                <h4 class="cs_auth_section_title">Professional details</h4>
                <div class="cs_auth_field">
                  <select name="profession" required data-other-trigger>
                    <option value="" disabled selected>Profession</option>
                    <option value="General practitioner">General practitioner</option>
                    <option value="Specialist">Specialist</option>
                    <option value="Nurse practitioner">Nurse practitioner</option>
                    <option value="Other">Other (please specify)</option>
                  </select>
                  <span class="cs_auth_error">This field is required.</span>
                </div>
                <div class="cs_auth_field" data-other-field style="display:none;">
                  <input type="text" name="professionOther" placeholder="Please specify">
                </div>
                <div class="cs_auth_field">
                  <input type="text" name="ahpra" placeholder="AHPRA registration number e.g. MED0001234567" required data-validate="ahpra">
                  <span class="cs_auth_help">We check this against the AHPRA register before approving access.</span>
                  <span class="cs_auth_error">Enter a valid AHPRA number (3 letters followed by 10 digits).</span>
                </div>
                <div class="cs_auth_field">
                  <input type="text" name="practiceName" placeholder="Practice or clinic name" required>
                  <span class="cs_auth_error">This field is required.</span>
                </div>
                <div class="cs_auth_field">
                  <input type="text" name="streetAddress" placeholder="Street address" required>
                  <span class="cs_auth_error">This field is required.</span>
                </div>
                <div class="cs_auth_field_row">
                  <div class="cs_auth_field">
                    <input type="text" name="suburb" placeholder="Suburb" required>
                    <span class="cs_auth_error">This field is required.</span>
                  </div>
                  <div class="cs_auth_field cs_auth_field_sm">
                    <select name="state" required>
                      <option value="" disabled selected>State</option>
                      <option>NSW</option>
                      <option>VIC</option>
                      <option>QLD</option>
                      <option>WA</option>
                      <option>SA</option>
                      <option>TAS</option>
                      <option>ACT</option>
                      <option>NT</option>
                    </select>
                    <span class="cs_auth_error">This field is required.</span>
                  </div>
                  <div class="cs_auth_field cs_auth_field_sm">
                    <input type="text" inputmode="numeric" maxlength="4" name="postcode" placeholder="Postcode" required data-validate="postcode">
                    <span class="cs_auth_error">Enter a 4-digit postcode.</span>
                  </div>
                </div>
              </div>

              <div class="cs_auth_form_section">
                <h4 class="cs_auth_section_title">Optional</h4>
                <div class="cs_auth_field_group">
                  <label class="cs_auth_group_label">Are you currently prescribing in this therapeutic area?</label>
                  <div class="cs_auth_radio_row">
                    <label class="cs_auth_radio"><input type="radio" name="prescribing" value="Yes">Yes</label>
                    <label class="cs_auth_radio"><input type="radio" name="prescribing" value="No">No</label>
                    <label class="cs_auth_radio"><input type="radio" name="prescribing" value="Considering">Considering</label>
                  </div>
                </div>
                <div class="cs_auth_field">
                  <select name="referral">
                    <option value="" disabled selected>How did you hear about PharmaCrop?</option>
                    <option>Colleague or peer</option>
                    <option>Conference or event</option>
                    <option>Email or newsletter</option>
                    <option>Online search</option>
                    <option>Social media</option>
                    <option>Sales representative</option>
                    <option>Other</option>
                  </select>
                </div>
                <label class="cs_auth_checkbox">
                  <input type="checkbox" name="marketingOptIn">
                  <span>Keep me updated on new products, resources and events</span>
                </label>
              </div>

              <label class="cs_auth_checkbox cs_auth_consent">
                <input type="checkbox" name="consent" required>
                <span>I confirm I am a healthcare professional registered in Australia and agree to the <a href="/terms-and-conditions">Terms of Use</a> and <a href="/privacy-policy">Privacy Policy</a>.</span>
              </label>
              <span class="cs_auth_error" data-error-for="consent">You must confirm your registration status to continue.</span>

              <button type="submit" class="cs_auth_btn_primary" style="margin-top: 8px;">
                Submit Registration
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path></svg>
              </button>
              <div class="cs_auth_switch">Already registered? <button type="button" data-auth-switch="login">Sign in</button> &middot; Pharmacist? <a href="/login">Order via the Pharmacy Portal</a></div>
            </form>

            <div class="cs_auth_confirm" data-auth-confirm hidden>
              <h2>Thanks &mdash; we&rsquo;ve received your registration.</h2>
              <p>Our team verifies every application within one business day. We&rsquo;ll email <strong data-confirm-email>you</strong> once your access is approved, with a link to set your password.</p>
              <a href="/" class="cs_auth_btn_primary">Return To Homepage</a>
            </div>
          </div>
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
          var card = document.querySelector('[data-auth-card]');

          function setActive(name) {
            tabs.forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-auth-tab') === name); });
            panels.forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-auth-panel') === name); });
            if (card) card.classList.toggle('cs_auth_card_wide', name === 'register');
          }

          tabs.forEach(function (tab) {
            tab.addEventListener('click', function () { setActive(tab.getAttribute('data-auth-tab')); });
          });
          switches.forEach(function (btn) {
            btn.addEventListener('click', function () { setActive(btn.getAttribute('data-auth-switch')); });
          });

          var otherTrigger = document.querySelector('[data-other-trigger]');
          var otherField = document.querySelector('[data-other-field]');
          if (otherTrigger && otherField) {
            otherTrigger.addEventListener('change', function () {
              otherField.style.display = otherTrigger.value === 'Other' ? 'block' : 'none';
            });
          }

          var form = document.getElementById('cs_register_form');
          if (form) {
            var emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            var mobilePattern = /^(\\+?61|0)4\\d{2}\\s?\\d{3}\\s?\\d{3}$/;
            var ahpraPattern = /^[A-Za-z]{3}\\d{10}$/;
            var postcodePattern = /^\\d{4}$/;

            function setFieldValid(field, valid) {
              var wrap = field.closest('.cs_auth_field');
              if (wrap) wrap.classList.toggle('cs_auth_field_invalid', !valid);
            }

            function validateField(field) {
              if (field.hasAttribute('required') && !field.value.trim()) {
                setFieldValid(field, false);
                return false;
              }
              var rule = field.getAttribute('data-validate');
              if (rule === 'email' && field.value.trim() && !emailPattern.test(field.value.trim())) {
                setFieldValid(field, false);
                return false;
              }
              if (rule === 'mobile' && field.value.trim() && !mobilePattern.test(field.value.trim())) {
                setFieldValid(field, false);
                return false;
              }
              if (rule === 'ahpra' && field.value.trim() && !ahpraPattern.test(field.value.trim())) {
                setFieldValid(field, false);
                return false;
              }
              if (rule === 'postcode' && field.value.trim() && !postcodePattern.test(field.value.trim())) {
                setFieldValid(field, false);
                return false;
              }
              setFieldValid(field, true);
              return true;
            }

            form.querySelectorAll('input, select').forEach(function (field) {
              field.addEventListener('blur', function () { validateField(field); });
            });

            form.addEventListener('submit', function (e) {
              e.preventDefault();
              var valid = true;
              var firstInvalid = null;

              form.querySelectorAll('input[required], select[required]').forEach(function (field) {
                if (!validateField(field)) {
                  valid = false;
                  if (!firstInvalid) firstInvalid = field;
                }
              });

              var consent = form.querySelector('[name="consent"]');
              var consentError = form.querySelector('[data-error-for="consent"]');
              if (consent && !consent.checked) {
                valid = false;
                if (consentError) consentError.style.display = 'block';
                if (!firstInvalid) firstInvalid = consent;
              } else if (consentError) {
                consentError.style.display = 'none';
              }

              if (!valid) {
                if (firstInvalid) firstInvalid.focus();
                return;
              }

              var emailField = form.querySelector('[name="workEmail"]');
              var confirmEmailEl = document.querySelector('[data-confirm-email]');
              if (confirmEmailEl) confirmEmailEl.textContent = emailField ? emailField.value.trim() : 'you';

              form.style.display = 'none';
              var intro = document.querySelector('.cs_auth_register_intro');
              if (intro) intro.style.display = 'none';
              var confirm = document.querySelector('[data-auth-confirm]');
              if (confirm) confirm.hidden = false;
            });
          }

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
