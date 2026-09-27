import Script from "next/script";

export const metadata = {
  title: "My Profile - PharmaCrop HCP Portal",
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
    <!-- Start Dashboard Header -->
    <style>
      .cs_dash_body { background: #f7faf8; }
      .cs_dash_header { position: sticky; top: 0; z-index: 999; background: #fff; border-bottom: 1px solid rgba(2, 66, 66, 0.1); }
      .cs_dash_header_in { display: flex; align-items: center; justify-content: space-between; padding: 18px 0; gap: 24px; }
      .cs_dash_logo { display: flex; align-items: center; gap: 10px; color: #024242; font-size: 22px; font-weight: 800; text-decoration: none; flex: none; }
      .cs_dash_logo img { width: 30px; height: 30px; object-fit: contain; }
      .cs_dash_nav { display: flex; align-items: center; gap: 34px; list-style: none; margin: 0; padding: 0; flex: 1; justify-content: center; }
      .cs_dash_nav a { color: #333; font-size: 15px; font-weight: 600; text-decoration: none; }
      .cs_dash_nav a:hover { color: #024242; }
      .cs_dash_header_right { display: flex; align-items: center; gap: 22px; flex: none; }
      .cs_dash_search_btn { width: 38px; height: 38px; border-radius: 50%; border: none; background: rgba(2, 66, 66, 0.06); color: #024242; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 14px; }
      .cs_dash_user { position: relative; }
      .cs_dash_user_btn { display: flex; align-items: center; gap: 10px; background: none; border: none; cursor: pointer; font-family: inherit; padding: 0; }
      .cs_dash_avatar { width: 38px; height: 38px; border-radius: 50%; background: #024242; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; flex: none; }
      .cs_dash_user_name { color: #024242; font-weight: 700; font-size: 14px; white-space: nowrap; }
      .cs_dash_user_btn i { color: #999; font-size: 11px; transition: transform 0.2s ease; }
      .cs_dash_user.active .cs_dash_user_btn i { transform: rotate(180deg); }
      .cs_dash_user_menu { position: absolute; right: 0; top: calc(100% + 14px); background: #fff; border-radius: 12px; box-shadow: 0 20px 50px rgba(2, 20, 20, 0.15); padding: 10px; min-width: 180px; opacity: 0; visibility: hidden; transform: translateY(-8px); transition: all 0.2s ease; }
      .cs_dash_user.active .cs_dash_user_menu { opacity: 1; visibility: visible; transform: translateY(0); }
      .cs_dash_user_menu a { display: block; padding: 10px 14px; border-radius: 8px; color: #024242; font-size: 14px; font-weight: 600; text-decoration: none; }
      .cs_dash_user_menu a:hover { background: rgba(120, 220, 166, 0.15); }
      .cs_dash_portal_pill { display: inline-flex; align-items: center; gap: 6px; background: rgba(2,66,66,0.06); color: #024242; font-size: 13px; font-weight: 700; padding: 8px 14px; border-radius: 20px; }
      @media (max-width: 991px) { .cs_dash_nav { display: none; } }
      @media (max-width: 575px) { .cs_dash_user_name { display: none; } }
    </style>
    <header class="cs_dash_header">
      <div class="container">
        <div class="cs_dash_header_in">
          <a href="/dashboard" class="cs_dash_logo">
            <img src="/assets/img/favicon.png" alt="PharmaCrop" onerror="this.style.display='none'">
            PharmaCrop
          </a>
          <ul class="cs_dash_nav">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/all-products">All Products</a></li>
            <li><a href="/hcp-resources">HCP Resources</a></li>
          </ul>
          <div class="cs_dash_header_right">
            <button type="button" class="cs_dash_search_btn" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
            <span class="cs_dash_portal_pill"><i class="fa-solid fa-lock"></i> HCP Portal</span>
            <div class="cs_dash_user" data-dash-user>
              <button type="button" class="cs_dash_user_btn" data-dash-user-toggle>
                <span class="cs_dash_avatar">DR</span>
                <span class="cs_dash_user_name">Dr. Sarah Mitchell</span>
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="cs_dash_user_menu">
                <a href="/profile">My Profile / Account</a>
                <a href="/">Sign Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Dashboard Header -->
    <!-- Start Profile Hero -->
    <style>
      .cs_prof_hero { position: relative; overflow: hidden; background: #f7faf8; }
      .cs_prof_hero_bg { position: absolute; inset: 0; z-index: 0; }
      .cs_prof_hero_bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .cs_prof_hero_bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, #f7faf8 0%, #f7faf8 34%, rgba(247,250,248,0.92) 44%, rgba(247,250,248,0.55) 56%, rgba(247,250,248,0.05) 68%); }
      .cs_prof_hero_inner { position: relative; z-index: 1; min-height: 170px; display: flex; align-items: center; padding: 40px 0; }
      .cs_prof_hero_eyebrow { display: block; color: #024242; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
      .cs_prof_hero h1 { color: #024242; font-size: 34px; font-weight: 800; margin: 0 0 10px; }
      .cs_prof_hero p { color: #666; font-size: 15px; margin: 0; }
      @media (max-width: 991px) {
        .cs_prof_hero_bg::after { background: linear-gradient(180deg, #f7faf8 0%, #f7faf8 46%, rgba(247,250,248,0.85) 60%, rgba(247,250,248,0.55) 100%); }
        .cs_prof_hero_inner { min-height: 0; padding: 110px 0 140px; }
      }
    </style>
    <section class="cs_prof_hero">
      <div class="cs_prof_hero_bg">
        <img src="/assets/img/dashboard/HCP%20Resources/HCP%20resources%20banner.webp" alt="PharmaCrop professional resources">
      </div>
      <div class="container">
        <div class="cs_prof_hero_inner">
          <div class="wow fadeInUp">
            <span class="cs_prof_hero_eyebrow">HCP Portal</span>
            <h1>My Profile</h1>
            <p>Manage your professional details, contact information and account security.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Profile Hero -->
    <!-- Start Profile Body -->
    <style>
      .cs_prof_section { padding: 50px 0 70px; background: #f7faf8; }
      .cs_prof_layout { display: grid; grid-template-columns: 260px 1fr; gap: 24px; align-items: start; }
      .cs_prof_side { background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 14px; padding: 26px 22px; text-align: center; position: sticky; top: 90px; }
      .cs_prof_side_avatar { width: 64px; height: 64px; border-radius: 50%; background: rgba(120,220,166,0.2); color: #024242; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 20px; margin: 0 auto 14px; }
      .cs_prof_side h3 { color: #024242; font-size: 18px; font-weight: 800; margin: 0 0 4px; }
      .cs_prof_side span.role { color: #666; font-size: 13px; display: block; margin-bottom: 14px; }
      .cs_prof_side_email { display: flex; align-items: center; justify-content: center; gap: 8px; color: #666; font-size: 13px; margin-bottom: 14px; }
      .cs_prof_verified { display: inline-flex; align-items: center; gap: 6px; background: rgba(120,220,166,0.15); color: #024242; font-size: 12px; font-weight: 700; padding: 7px 14px; border-radius: 20px; margin-bottom: 20px; }
      .cs_prof_side_nav { list-style: none; margin: 0; padding: 18px 0 0; border-top: 1px solid rgba(2,66,66,0.08); text-align: left; }
      .cs_prof_side_nav li { margin-bottom: 4px; }
      .cs_prof_side_nav a { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 11px 12px; border-radius: 8px; color: #024242; font-weight: 600; font-size: 14px; text-decoration: none; }
      .cs_prof_side_nav a.active { background: rgba(120,220,166,0.15); }
      .cs_prof_side_nav a:hover { background: rgba(120,220,166,0.1); }
      .cs_prof_side_nav a i.left { width: 16px; text-align: center; margin-right: 4px; }
      .cs_prof_side_nav a.logout { color: #c0392b; margin-top: 10px; }
      .cs_prof_card { background: #fff; border: 1px solid rgba(2,66,66,0.1); border-radius: 14px; padding: 26px; margin-bottom: 20px; }
      .cs_prof_card_head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 18px; flex-wrap: wrap; }
      .cs_prof_card_head_left { display: flex; gap: 14px; }
      .cs_prof_card_icon { width: 38px; height: 38px; border-radius: 10px; background: rgba(120,220,166,0.15); color: #024242; display: flex; align-items: center; justify-content: center; font-size: 15px; flex: none; }
      .cs_prof_card_head h3 { color: #024242; font-size: 17px; font-weight: 800; margin: 0 0 3px; }
      .cs_prof_card_head p { color: #999; font-size: 13px; margin: 0; }
      .cs_prof_edit_btn { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #024242; font-weight: 700; font-size: 13px; padding: 10px 18px; border-radius: 30px; text-decoration: none; border: 1px solid rgba(2,66,66,0.2); white-space: nowrap; }
      .cs_prof_edit_btn:hover { border-color: #024242; }
      .cs_prof_row { display: flex; align-items: center; justify-content: space-between; padding: 13px 0; border-bottom: 1px solid rgba(2,66,66,0.07); gap: 14px; }
      .cs_prof_row:last-child { border-bottom: none; }
      .cs_prof_row span.k { color: #666; font-size: 13.5px; }
      .cs_prof_row span.v { color: #024242; font-weight: 600; font-size: 13.5px; text-align: right; }
      .cs_prof_badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(120,220,166,0.15); color: #024242; font-size: 12.5px; font-weight: 700; padding: 8px 16px; border-radius: 20px; }
      .cs_prof_dots { letter-spacing: 3px; color: #024242; font-weight: 700; }
      .cs_prof_actions_row { display: flex; gap: 12px; flex-wrap: wrap; }
      @media (max-width: 900px) {
        .cs_prof_layout { grid-template-columns: 1fr; }
        .cs_prof_side { position: static; text-align: left; }
        .cs_prof_side_avatar { margin: 0 0 14px; }
      }
    </style>
    <section class="cs_prof_section">
      <div class="container">
        <div class="cs_prof_layout">
          <div class="cs_prof_side wow fadeInUp">
            <div class="cs_prof_side_avatar">SM</div>
            <h3>Dr Sarah Mitchell</h3>
            <span class="role">Healthcare Professional</span>
            <div class="cs_prof_side_email"><i class="fa-solid fa-envelope"></i> dr.s.mitchell@example.com</div>
            <span class="cs_prof_verified"><i class="fa-solid fa-circle-check"></i> Verified Healthcare Professional</span>
            <ul class="cs_prof_side_nav">
              <li><a href="/profile" class="active"><span><i class="fa-solid fa-user left"></i> My Profile</span> <i class="fa-solid fa-chevron-right"></i></a></li>
              <li><a href="/contact"><span><i class="fa-solid fa-lock left"></i> Privacy &amp; Support</span> <i class="fa-solid fa-chevron-right"></i></a></li>
              <li><a href="/" class="logout"><i class="fa-solid fa-arrow-right-from-bracket left"></i> Log Out</a></li>
            </ul>
          </div>
          <div>
            <div class="cs_prof_card wow fadeInUp">
              <div class="cs_prof_card_head">
                <div class="cs_prof_card_head_left">
                  <span class="cs_prof_card_icon"><i class="fa-solid fa-user"></i></span>
                  <div><h3>Professional Details</h3><p>Your professional information as registered with PharmaCrop.</p></div>
                </div>
                <a href="/contact" class="cs_prof_edit_btn"><i class="fa-solid fa-pen"></i> Edit Details</a>
              </div>
              <div class="cs_prof_row"><span class="k">Full Name</span><span class="v">Dr Sarah Mitchell</span></div>
              <div class="cs_prof_row"><span class="k">Profession / Role</span><span class="v">Healthcare Professional</span></div>
              <div class="cs_prof_row"><span class="k">Professional Registration Number</span><span class="v">&mdash;</span></div>
              <div class="cs_prof_row"><span class="k">Registration Authority</span><span class="v">&mdash;</span></div>
              <div class="cs_prof_row"><span class="k">Organisation / Practice</span><span class="v">Riverside Medical Centre</span></div>
              <div class="cs_prof_row"><span class="k">Professional Location / State</span><span class="v">VIC, Australia</span></div>
            </div>

            <div class="cs_prof_card wow fadeInUp">
              <div class="cs_prof_card_head">
                <div class="cs_prof_card_head_left">
                  <span class="cs_prof_card_icon"><i class="fa-solid fa-phone"></i></span>
                  <div><h3>Contact Details</h3><p>Your contact information for your PharmaCrop account.</p></div>
                </div>
                <a href="/contact" class="cs_prof_edit_btn"><i class="fa-solid fa-pen"></i> Edit Contact Details</a>
              </div>
              <div class="cs_prof_row"><span class="k">Email Address</span><span class="v">dr.s.mitchell@example.com</span></div>
              <div class="cs_prof_row"><span class="k">Phone Number</span><span class="v">+61 400 123 456</span></div>
            </div>

            <div class="cs_prof_card wow fadeInUp">
              <div class="cs_prof_card_head">
                <div class="cs_prof_card_head_left">
                  <span class="cs_prof_card_icon"><i class="fa-solid fa-shield-halved"></i></span>
                  <div><h3>Professional Verification</h3><p>Your professional status and verification information.</p></div>
                </div>
                <span class="cs_prof_badge"><i class="fa-solid fa-circle-check"></i> Verified Healthcare Professional</span>
              </div>
              <div class="cs_prof_row"><span class="k">Verification Status</span><span class="v">Verified Healthcare Professional</span></div>
              <div class="cs_prof_row"><span class="k">Profession</span><span class="v">Healthcare Professional</span></div>
              <div class="cs_prof_row"><span class="k">Registration Number</span><span class="v">&mdash;</span></div>
              <div class="cs_prof_row"><span class="k">Registration Authority</span><span class="v">&mdash;</span></div>
              <div class="cs_prof_row"><span class="k">Verification Date</span><span class="v">15 Jan 2024</span></div>
            </div>

            <div class="cs_prof_card wow fadeInUp">
              <div class="cs_prof_card_head">
                <div class="cs_prof_card_head_left">
                  <span class="cs_prof_card_icon"><i class="fa-solid fa-lock"></i></span>
                  <div><h3>Password &amp; Security</h3><p>Manage your account password.</p></div>
                </div>
                <a href="/contact" class="cs_prof_edit_btn"><i class="fa-solid fa-pen"></i> Change Password</a>
              </div>
              <div class="cs_prof_row"><span class="k">Password</span><span class="v cs_prof_dots">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</span></div>
            </div>

            <div class="cs_prof_card wow fadeInUp" style="margin-bottom:0;">
              <div class="cs_prof_card_head" style="margin-bottom:0;">
                <div class="cs_prof_card_head_left">
                  <span class="cs_prof_card_icon"><i class="fa-solid fa-file-lines"></i></span>
                  <div><h3>Privacy &amp; Account Support</h3><p>Access our privacy information or get help with your account.</p></div>
                </div>
                <div class="cs_prof_actions_row">
                  <a href="/privacy-policy" class="cs_prof_edit_btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Privacy Information</a>
                  <a href="/contact" class="cs_prof_edit_btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> Account Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Profile Body -->
    <!-- Start CTA -->
    <style>
      .cs_prof_cta_section { padding: 70px 0; background: #024242 url('/assets/img/dashboard/working%20together.webp') center center / cover no-repeat; }
      .cs_prof_cta_row { display: flex; align-items: center; justify-content: space-between; gap: 30px; flex-wrap: wrap; }
      .cs_prof_cta_eyebrow { display: block; color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
      .cs_prof_cta_row h2 { color: #fff; font-size: 32px; font-weight: 800; margin: 0 0 10px; max-width: 560px; }
      .cs_prof_cta_row p { color: rgba(255,255,255,0.75); font-size: 15px; margin: 0; max-width: 480px; }
      .cs_prof_cta_btn { display: inline-flex; align-items: center; gap: 10px; background: #fff; color: #024242; font-weight: 700; font-size: 14px; padding: 16px 28px; border-radius: 30px; text-decoration: none; white-space: nowrap; }
      .cs_prof_cta_btn:hover { background: #78dca6; }
    </style>
    <section class="cs_prof_cta_section">
      <div class="container">
        <div class="cs_prof_cta_row wow fadeInUp">
          <div>
            <span class="cs_prof_cta_eyebrow">Working Together</span>
            <h2>Better access. Better outcomes.</h2>
            <p>Supporting healthcare professionals with trusted medicinal cannabis products and resources.</p>
          </div>
          <a href="/about-us" class="cs_prof_cta_btn">Explore our approach <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
    <!-- End CTA -->
    <!-- Start Dashboard Footer -->
    <style>
      .cs_dash_footer { padding: 26px 0; background: #fff; border-top: 1px solid rgba(2,66,66,0.1); }
      .cs_dash_footer_row { display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
      .cs_dash_footer_brand { color: #024242; font-weight: 800; font-size: 16px; }
      .cs_dash_footer_nav { display: flex; gap: 24px; list-style: none; margin: 0; padding: 0; flex-wrap: wrap; }
      .cs_dash_footer_nav a { color: #666; font-size: 13px; font-weight: 600; text-decoration: none; }
      .cs_dash_footer_nav a:hover { color: #024242; }
      .cs_dash_footer_links { display: flex; gap: 20px; list-style: none; margin: 0; padding: 0; }
      .cs_dash_footer_links a { color: #999; font-size: 13px; text-decoration: none; }
      .cs_dash_footer_links a:hover { color: #024242; }
    </style>
    <footer class="cs_dash_footer">
      <div class="container">
        <div class="cs_dash_footer_row">
          <span class="cs_dash_footer_brand">PharmaCrop</span>
          <ul class="cs_dash_footer_nav">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/all-products">All Products</a></li>
            <li><a href="/hcp-resources">HCP Resources</a></li>
          </ul>
          <ul class="cs_dash_footer_links">
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy</a></li>
            <li><a href="/terms-and-conditions">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <!-- End Dashboard Footer -->
`,
      }}
    />
    <Script id="cs_profile_script" strategy="afterInteractive">
      {`
        (function () {
          var userToggle = document.querySelector('[data-dash-user-toggle]');
          var userWrap = document.querySelector('[data-dash-user]');
          if (userToggle && userWrap) {
            userToggle.addEventListener('click', function (e) {
              e.stopPropagation();
              userWrap.classList.toggle('active');
            });
            document.addEventListener('click', function () {
              userWrap.classList.remove('active');
            });
          }
        })();
      `}
    </Script>
    </>
  );
}
