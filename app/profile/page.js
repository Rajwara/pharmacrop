import Script from "next/script";
import { getCurrentHcpUser, getHcpProfile } from "./../lib/wp-auth";

export const metadata = {
  title: "My Profile - PharmaCrop HCP Portal",
};

function esc(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function Page() {
  const [user, profile] = await Promise.all([getCurrentHcpUser(), getHcpProfile()]);
  const displayName = (user && user.name) || "Healthcare Professional";
  const email = (user && user.email) || "";
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "HP";

  const p = profile || {};
  const profession = p.hcp_profession === "Other" ? p.hcp_profession_other || "Other" : p.hcp_profession || "";
  const practiceName = p.hcp_practice_name || "";
  const mobile = p.hcp_mobile || "";
  const addressParts = [p.hcp_street_address, p.hcp_suburb, p.hcp_state, p.hcp_postcode].filter(Boolean);
  const address = addressParts.join(", ");
  const ahpra = p.ahpra || "";
  const avatarUrl = p.avatarUrl || "";
  const profileLoaded = !!profile;

  const avatarHtml = avatarUrl
    ? `<img src="${esc(avatarUrl)}" alt="${esc(displayName)}" data-prof-avatar-img>`
    : `<span data-prof-avatar-initials>${initials}</span>`;

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
      .cs_dash_avatar { width: 38px; height: 38px; border-radius: 50%; background: #024242; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; flex: none; overflow: hidden; }
      .cs_dash_avatar img { width: 100%; height: 100%; object-fit: cover; }
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
            <img src="/assets/img/General Images/Branding/favicon.png" alt="PharmaCrop" onerror="this.style.display='none'">
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
                <span class="cs_dash_avatar" data-dash-avatar>${avatarHtml}</span>
                <span class="cs_dash_user_name">${displayName}</span>
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="cs_dash_user_menu">
                <a href="/profile">My Profile / Account</a>
                <a href="#" data-dash-signout>Sign Out</a>
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
      .cs_prof_side_avatar { width: 64px; height: 64px; border-radius: 50%; background: rgba(120,220,166,0.2); color: #024242; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 20px; margin: 0 auto 10px; position: relative; overflow: hidden; }
      .cs_prof_side_avatar img { width: 100%; height: 100%; object-fit: cover; }
      .cs_prof_avatar_btn { display: inline-flex; align-items: center; gap: 6px; background: none; border: none; color: #024242; font-size: 12px; font-weight: 700; text-decoration: underline; cursor: pointer; margin-bottom: 14px; font-family: inherit; }
      .cs_prof_avatar_btn:disabled { opacity: 0.5; cursor: wait; }
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
      .cs_prof_edit_btn { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #024242; font-weight: 700; font-size: 13px; padding: 10px 18px; border-radius: 30px; cursor: pointer; border: 1px solid rgba(2,66,66,0.2); white-space: nowrap; font-family: inherit; text-decoration: none; }
      .cs_prof_edit_btn:hover { border-color: #024242; }
      .cs_prof_row { display: flex; align-items: center; justify-content: space-between; padding: 13px 0; border-bottom: 1px solid rgba(2,66,66,0.07); gap: 14px; }
      .cs_prof_row:last-child { border-bottom: none; }
      .cs_prof_row span.k { color: #666; font-size: 13.5px; }
      .cs_prof_row span.v { color: #024242; font-weight: 600; font-size: 13.5px; text-align: right; }
      .cs_prof_badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(120,220,166,0.15); color: #024242; font-size: 12.5px; font-weight: 700; padding: 8px 16px; border-radius: 20px; }
      .cs_prof_dots { letter-spacing: 3px; color: #024242; font-weight: 700; }
      .cs_prof_actions_row { display: flex; gap: 12px; flex-wrap: wrap; }
      .cs_prof_edit_form { display: none; }
      .cs_prof_card.editing .cs_prof_view { display: none; }
      .cs_prof_card.editing .cs_prof_edit_form { display: block; }
      .cs_prof_field { margin-bottom: 14px; }
      .cs_prof_field label { display: block; color: #666; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; }
      .cs_prof_field input, .cs_prof_field select { width: 100%; box-sizing: border-box; border: 1px solid #e2e5e2; border-radius: 8px; padding: 11px 14px; font-size: 13.5px; color: #024242; font-family: inherit; outline: none; }
      .cs_prof_field input:focus, .cs_prof_field select:focus { border-color: #78dca6; }
      .cs_prof_field_password { position: relative; }
      .cs_prof_field_password input { padding-right: 42px; }
      .cs_prof_password_toggle { position: absolute; right: 12px; top: 34px; color: #999; background: none; border: none; cursor: pointer; padding: 4px; font-size: 14px; }
      .cs_prof_field_row { display: flex; gap: 12px; }
      .cs_prof_field_row .cs_prof_field { flex: 1; min-width: 0; }
      .cs_prof_form_actions { display: flex; gap: 10px; margin-top: 4px; }
      .cs_prof_save_btn { background: #024242; color: #fff; border: none; border-radius: 30px; padding: 10px 22px; font-weight: 700; font-size: 13px; cursor: pointer; font-family: inherit; }
      .cs_prof_save_btn:hover { background: #78dca6; color: #024242; }
      .cs_prof_save_btn:disabled { opacity: 0.6; cursor: wait; }
      .cs_prof_cancel_btn { background: #fff; color: #666; border: 1px solid #e2e5e2; border-radius: 30px; padding: 10px 22px; font-weight: 700; font-size: 13px; cursor: pointer; font-family: inherit; }
      .cs_prof_form_error { display: none; color: #e0554f; font-size: 12.5px; margin: -4px 0 12px; }
      .cs_prof_form_note { color: #999; font-size: 12px; margin: 0 0 16px; }
      @media (max-width: 575px) { .cs_prof_field_row { flex-direction: column; gap: 0; } }
      @media (max-width: 900px) {
        .cs_prof_layout { grid-template-columns: 1fr; }
        .cs_prof_side { position: static; text-align: left; }
        .cs_prof_side_avatar { margin: 0 0 10px; }
      }
    </style>
    <section class="cs_prof_section">
      <div class="container">
        <div class="cs_prof_layout">
          <div class="cs_prof_side wow fadeInUp">
            <div class="cs_prof_side_avatar" data-prof-avatar>${avatarHtml}</div>
            <button type="button" class="cs_prof_avatar_btn" data-prof-avatar-btn title="JPG, PNG or WEBP, up to 4MB">Change photo</button>
            <input type="file" accept="image/jpeg,image/png,image/webp" data-prof-avatar-input hidden>
            <h3>${displayName}</h3>
            <span class="role">${esc(profession) || "Healthcare Professional"}</span>
            <div class="cs_prof_side_email"><i class="fa-solid fa-envelope"></i> ${email || "&mdash;"}</div>
            <span class="cs_prof_verified"><i class="fa-solid fa-circle-check"></i> Verified Healthcare Professional</span>
            <ul class="cs_prof_side_nav">
              <li><a href="/profile" class="active"><span><i class="fa-solid fa-user left"></i> My Profile</span> <i class="fa-solid fa-chevron-right"></i></a></li>
              <li><a href="/contact"><span><i class="fa-solid fa-lock left"></i> Privacy &amp; Support</span> <i class="fa-solid fa-chevron-right"></i></a></li>
              <li><a href="#" class="logout" data-dash-signout><i class="fa-solid fa-arrow-right-from-bracket left"></i> Log Out</a></li>
            </ul>
          </div>
          <div>
            ${!profileLoaded ? `<p class="cs_prof_form_note" style="margin-bottom:20px;">Some details below couldn't be loaded right now — you can still view your account, but editing may be unavailable until this is resolved. Try refreshing the page.</p>` : ""}
            <div class="cs_prof_card wow fadeInUp" data-prof-card="professional">
              <div class="cs_prof_card_head">
                <div class="cs_prof_card_head_left">
                  <span class="cs_prof_card_icon"><i class="fa-solid fa-user"></i></span>
                  <div><h3>Professional Details</h3><p>Your professional information as registered with PharmaCrop.</p></div>
                </div>
                <button type="button" class="cs_prof_edit_btn" data-prof-edit-toggle="professional"><i class="fa-solid fa-pen"></i> Edit Details</button>
              </div>
              <div class="cs_prof_view">
                <div class="cs_prof_row"><span class="k">Full Name</span><span class="v">${esc(displayName)}</span></div>
                <div class="cs_prof_row"><span class="k">Profession / Role</span><span class="v">${esc(profession) || "&mdash;"}</span></div>
                <div class="cs_prof_row"><span class="k">AHPRA Registration Number</span><span class="v">${esc(ahpra) || "&mdash;"}</span></div>
                <div class="cs_prof_row"><span class="k">Organisation / Practice</span><span class="v">${esc(practiceName) || "&mdash;"}</span></div>
              </div>
              <form class="cs_prof_edit_form" data-prof-form="professional">
                <p class="cs_prof_form_note">Name and AHPRA number are locked to your verified registration — <a href="/contact">contact us</a> if either needs correcting.</p>
                <span class="cs_prof_form_error" data-prof-form-error></span>
                <div class="cs_prof_field">
                  <label>Profession / Role</label>
                  <select name="hcp_profession" data-prof-other-trigger>
                    <option value="General practitioner" ${profession === "General practitioner" ? "selected" : ""}>General practitioner</option>
                    <option value="Specialist" ${profession === "Specialist" ? "selected" : ""}>Specialist</option>
                    <option value="Nurse practitioner" ${profession === "Nurse practitioner" ? "selected" : ""}>Nurse practitioner</option>
                    <option value="Other" ${p.hcp_profession === "Other" ? "selected" : ""}>Other (please specify)</option>
                  </select>
                </div>
                <div class="cs_prof_field" data-prof-other-field style="${p.hcp_profession === "Other" ? "" : "display:none;"}">
                  <label>Please specify</label>
                  <input type="text" name="hcp_profession_other" value="${esc(p.hcp_profession_other)}">
                </div>
                <div class="cs_prof_field">
                  <label>Organisation / Practice</label>
                  <input type="text" name="hcp_practice_name" value="${esc(practiceName)}">
                </div>
                <div class="cs_prof_form_actions">
                  <button type="submit" class="cs_prof_save_btn" data-prof-save-btn>Save Changes</button>
                  <button type="button" class="cs_prof_cancel_btn" data-prof-edit-toggle="professional">Cancel</button>
                </div>
              </form>
            </div>

            <div class="cs_prof_card wow fadeInUp" data-prof-card="contact">
              <div class="cs_prof_card_head">
                <div class="cs_prof_card_head_left">
                  <span class="cs_prof_card_icon"><i class="fa-solid fa-phone"></i></span>
                  <div><h3>Contact Details</h3><p>Your contact information for your PharmaCrop account.</p></div>
                </div>
                <button type="button" class="cs_prof_edit_btn" data-prof-edit-toggle="contact"><i class="fa-solid fa-pen"></i> Edit Contact Details</button>
              </div>
              <div class="cs_prof_view">
                <div class="cs_prof_row"><span class="k">Email Address</span><span class="v">${email || "&mdash;"}</span></div>
                <div class="cs_prof_row"><span class="k">Phone Number</span><span class="v">${esc(mobile) || "&mdash;"}</span></div>
                <div class="cs_prof_row"><span class="k">Address</span><span class="v">${esc(address) || "&mdash;"}</span></div>
              </div>
              <form class="cs_prof_edit_form" data-prof-form="contact">
                <p class="cs_prof_form_note">Your email is your login and is locked — <a href="/contact">contact us</a> to change it.</p>
                <span class="cs_prof_form_error" data-prof-form-error></span>
                <div class="cs_prof_field">
                  <label>Mobile Number</label>
                  <input type="tel" name="hcp_mobile" value="${esc(mobile)}">
                </div>
                <div class="cs_prof_field">
                  <label>Street Address</label>
                  <input type="text" name="hcp_street_address" value="${esc(p.hcp_street_address)}">
                </div>
                <div class="cs_prof_field_row">
                  <div class="cs_prof_field">
                    <label>Suburb</label>
                    <input type="text" name="hcp_suburb" value="${esc(p.hcp_suburb)}">
                  </div>
                  <div class="cs_prof_field">
                    <label>State</label>
                    <input type="text" name="hcp_state" value="${esc(p.hcp_state)}">
                  </div>
                  <div class="cs_prof_field">
                    <label>Postcode</label>
                    <input type="text" name="hcp_postcode" value="${esc(p.hcp_postcode)}">
                  </div>
                </div>
                <div class="cs_prof_form_actions">
                  <button type="submit" class="cs_prof_save_btn" data-prof-save-btn>Save Changes</button>
                  <button type="button" class="cs_prof_cancel_btn" data-prof-edit-toggle="contact">Cancel</button>
                </div>
              </form>
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
              <div class="cs_prof_row"><span class="k">Profession</span><span class="v">${esc(profession) || "&mdash;"}</span></div>
              <div class="cs_prof_row"><span class="k">AHPRA Registration Number</span><span class="v">${esc(ahpra) || "&mdash;"}</span></div>
              <div class="cs_prof_row"><span class="k">Registration Authority</span><span class="v">AHPRA</span></div>
            </div>

            <div class="cs_prof_card wow fadeInUp" data-prof-card="password">
              <div class="cs_prof_card_head">
                <div class="cs_prof_card_head_left">
                  <span class="cs_prof_card_icon"><i class="fa-solid fa-lock"></i></span>
                  <div><h3>Password &amp; Security</h3><p>Manage your account password.</p></div>
                </div>
                <button type="button" class="cs_prof_edit_btn" data-prof-edit-toggle="password"><i class="fa-solid fa-pen"></i> Change Password</button>
              </div>
              <div class="cs_prof_view">
                <div class="cs_prof_row"><span class="k">Password</span><span class="v cs_prof_dots">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</span></div>
              </div>
              <form class="cs_prof_edit_form" data-prof-password-form>
                <span class="cs_prof_form_error" data-prof-form-error></span>
                <div class="cs_prof_field cs_prof_field_password">
                  <label>Current Password</label>
                  <input type="password" name="currentPassword" autocomplete="current-password">
                  <button type="button" class="cs_prof_password_toggle" data-prof-password-toggle aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
                </div>
                <div class="cs_prof_field cs_prof_field_password">
                  <label>New Password</label>
                  <input type="password" name="newPassword" autocomplete="new-password">
                  <button type="button" class="cs_prof_password_toggle" data-prof-password-toggle aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
                </div>
                <div class="cs_prof_field cs_prof_field_password">
                  <label>Confirm New Password</label>
                  <input type="password" name="confirmPassword" autocomplete="new-password">
                  <button type="button" class="cs_prof_password_toggle" data-prof-password-toggle aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
                </div>
                <div class="cs_prof_form_actions">
                  <button type="submit" class="cs_prof_save_btn" data-prof-save-btn>Update Password</button>
                  <button type="button" class="cs_prof_cancel_btn" data-prof-edit-toggle="password">Cancel</button>
                </div>
              </form>
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
          document.querySelectorAll('[data-dash-signout]').forEach(function (link) {
            link.addEventListener('click', function (e) {
              e.preventDefault();
              fetch('/api/auth/logout', { method: 'POST' }).then(function () {
                window.location.href = '/';
              });
            });
          });

          document.querySelectorAll('[data-prof-edit-toggle]').forEach(function (btn) {
            btn.addEventListener('click', function () {
              var name = btn.getAttribute('data-prof-edit-toggle');
              var card = document.querySelector('[data-prof-card="' + name + '"]');
              if (card) card.classList.toggle('editing');
            });
          });

          // Some failure responses (host error pages, platform upload-size
          // limits, etc.) aren't JSON — never let that surface as a raw
          // "Unexpected token" parse error.
          function parseJsonSafe(res) {
            return res.text().then(function (text) {
              var data = null;
              try { data = text ? JSON.parse(text) : null; } catch (e) { data = null; }
              if (!data) {
                var message = /too large/i.test(text) ? 'That file is too large.' : 'Something went wrong (' + res.status + ').';
                data = { ok: false, message: message };
              }
              return { res: res, data: data };
            });
          }

          document.querySelectorAll('[data-prof-password-toggle]').forEach(function (btn) {
            btn.addEventListener('click', function () {
              var field = btn.previousElementSibling;
              if (!field || field.tagName !== 'INPUT') return;
              var isPassword = field.getAttribute('type') === 'password';
              field.setAttribute('type', isPassword ? 'text' : 'password');
              var icon = btn.querySelector('i');
              if (icon) {
                icon.classList.toggle('fa-eye', !isPassword);
                icon.classList.toggle('fa-eye-slash', isPassword);
              }
            });
          });

          var otherTrigger = document.querySelector('[data-prof-other-trigger]');
          var otherField = document.querySelector('[data-prof-other-field]');
          if (otherTrigger && otherField) {
            otherTrigger.addEventListener('change', function () {
              otherField.style.display = otherTrigger.value === 'Other' ? 'block' : 'none';
            });
          }

          document.querySelectorAll('[data-prof-form]').forEach(function (form) {
            form.addEventListener('submit', function (e) {
              e.preventDefault();
              var saveBtn = form.querySelector('[data-prof-save-btn]');
              var errorEl = form.querySelector('[data-prof-form-error]');
              if (errorEl) errorEl.style.display = 'none';
              if (saveBtn) saveBtn.disabled = true;

              var payload = {};
              new FormData(form).forEach(function (value, key) { payload[key] = value; });

              fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              })
                .then(parseJsonSafe)
                .then(function (result) {
                  if (!result.res.ok || !result.data.ok) throw new Error(result.data.message || 'Could not save your details.');
                  window.location.reload();
                })
                .catch(function (err) {
                  if (errorEl) {
                    errorEl.textContent = err.message || 'Could not save your details.';
                    errorEl.style.display = 'block';
                  }
                  if (saveBtn) saveBtn.disabled = false;
                });
            });
          });

          var passwordForm = document.querySelector('[data-prof-password-form]');
          if (passwordForm) {
            passwordForm.addEventListener('submit', function (e) {
              e.preventDefault();
              var saveBtn = passwordForm.querySelector('[data-prof-save-btn]');
              var errorEl = passwordForm.querySelector('[data-prof-form-error]');
              if (errorEl) errorEl.style.display = 'none';

              var currentPassword = passwordForm.querySelector('[name="currentPassword"]').value;
              var newPassword = passwordForm.querySelector('[name="newPassword"]').value;
              var confirmPassword = passwordForm.querySelector('[name="confirmPassword"]').value;

              if (newPassword.length < 8) {
                if (errorEl) { errorEl.textContent = 'New password must be at least 8 characters.'; errorEl.style.display = 'block'; }
                return;
              }
              if (newPassword !== confirmPassword) {
                if (errorEl) { errorEl.textContent = 'New passwords do not match.'; errorEl.style.display = 'block'; }
                return;
              }

              if (saveBtn) saveBtn.disabled = true;
              fetch('/api/profile/password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currentPassword: currentPassword, newPassword: newPassword }),
              })
                .then(parseJsonSafe)
                .then(function (result) {
                  if (!result.res.ok || !result.data.ok) throw new Error(result.data.message || 'Could not change your password.');
                  passwordForm.reset();
                  var card = passwordForm.closest('[data-prof-card]');
                  if (card) card.classList.remove('editing');
                  alert('Password updated.');
                })
                .catch(function (err) {
                  if (errorEl) {
                    errorEl.textContent = err.message || 'Could not change your password.';
                    errorEl.style.display = 'block';
                  }
                })
                .finally(function () {
                  if (saveBtn) saveBtn.disabled = false;
                });
            });
          }

          var avatarBtn = document.querySelector('[data-prof-avatar-btn]');
          var avatarInput = document.querySelector('[data-prof-avatar-input]');
          if (avatarBtn && avatarInput) {
            avatarBtn.addEventListener('click', function () { avatarInput.click(); });
            avatarInput.addEventListener('change', function () {
              var file = avatarInput.files && avatarInput.files[0];
              if (!file) return;

              var allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
              if (allowedTypes.indexOf(file.type) === -1) {
                alert('Please choose a JPG, PNG or WEBP image.');
                avatarInput.value = '';
                return;
              }
              if (file.size > 4 * 1024 * 1024) {
                alert('That image is too large — please choose one under 4MB.');
                avatarInput.value = '';
                return;
              }

              avatarBtn.disabled = true;
              avatarBtn.textContent = 'Uploading...';

              var formData = new FormData();
              formData.append('avatar', file);

              fetch('/api/profile/avatar', { method: 'POST', body: formData })
                .then(parseJsonSafe)
                .then(function (result) {
                  if (!result.res.ok || !result.data.ok) throw new Error(result.data.message || 'Could not upload your photo.');
                  var url = result.data.avatarUrl;
                  document.querySelectorAll('[data-prof-avatar], [data-dash-avatar]').forEach(function (wrap) {
                    wrap.innerHTML = '<img src="' + url + '" alt="Profile photo">';
                  });
                })
                .catch(function (err) {
                  alert(err.message || 'Could not upload your photo.');
                })
                .finally(function () {
                  avatarBtn.disabled = false;
                  avatarBtn.textContent = 'Change photo';
                  avatarInput.value = '';
                });
            });
          }
        })();
      `}
    </Script>
    </>
  );
}
