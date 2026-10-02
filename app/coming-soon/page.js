export const metadata = {
  title: "Coming Soon - PharmaCrop",
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <!-- Start Preloader -->
    <div class="cs_preloader" style="background-color:#000;">
      <img src="/assets/img/General Images/Branding/pharma_Crop_logo_loader.gif" alt="Loading" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(70vw,480px);height:auto;">
    </div>
    <!-- End Preloader -->
    <!-- Start Coming Soon Section -->
    <style>
      html, body { height: 100%; }
      .cs_coming_soon_page { position: relative; min-height: 100vh; display: flex; flex-direction: column; background: radial-gradient(120% 120% at 50% 0%, #0a3d3d 0%, #024242 45%, #011d1d 100%); overflow: hidden; }
      .cs_coming_soon_page::before { content: ""; position: absolute; inset: 0; background-image: radial-gradient(rgba(120,220,166,0.12) 1.5px, transparent 1.5px); background-size: 28px 28px; opacity: 0.5; pointer-events: none; }
      .cs_coming_soon_header { position: relative; z-index: 2; padding: 40px 24px 0; text-align: center; }
      .cs_coming_soon_logo { display: inline-block; }
      .cs_coming_soon_logo img { width: 200px; height: auto; }
      .cs_coming_soon_body { position: relative; z-index: 2; flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px 24px; }
      .cs_coming_soon_content { max-width: 680px; text-align: center; }
      .cs_coming_soon_pill { display: inline-flex; align-items: center; padding: 8px 22px; border-radius: 30px; background: rgba(120, 220, 166, 0.15); border: 1px solid rgba(120, 220, 166, 0.35); color: #78dca6; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 28px; }
      .cs_coming_soon_content h1 { color: #fff; font-size: 64px; font-weight: 800; line-height: 1.1; margin: 0 0 24px; }
      .cs_coming_soon_content h1 span { background: linear-gradient(223deg, #78dca6 0%, #d99f59 100%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .cs_coming_soon_content p { color: rgba(255, 255, 255, 0.72); font-size: 18px; line-height: 1.7; margin: 0 auto 40px; max-width: 540px; }
      .cs_coming_soon_actions { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
      .cs_coming_soon_btn { display: inline-flex; align-items: center; gap: 10px; background: #78dca6; color: #024242; font-weight: 700; font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase; padding: 16px 32px; border-radius: 8px; text-decoration: none; transition: transform 0.2s ease, box-shadow 0.2s ease; }
      .cs_coming_soon_btn:hover { color: #024242; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(120, 220, 166, 0.25); }
      .cs_coming_soon_btn_outline { display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(255, 255, 255, 0.35); color: #fff; font-weight: 700; font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase; padding: 16px 32px; border-radius: 8px; text-decoration: none; transition: background-color 0.2s ease, transform 0.2s ease; }
      .cs_coming_soon_btn_outline:hover { background: rgba(255, 255, 255, 0.08); color: #fff; transform: translateY(-2px); }
      .cs_coming_soon_footer { position: relative; z-index: 2; padding: 0 24px 40px; text-align: center; }
      .cs_coming_soon_badges { display: inline-flex; align-items: center; gap: 0; padding: 8px 6px; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 40px; background: rgba(255, 255, 255, 0.04); margin-bottom: 20px; }
      .cs_coming_soon_badge { display: flex; align-items: center; gap: 10px; padding: 0 18px; position: relative; }
      .cs_coming_soon_badge + .cs_coming_soon_badge::before { content: ""; position: absolute; left: 0; top: 4px; bottom: 4px; width: 1px; background: rgba(255, 255, 255, 0.15); }
      .cs_coming_soon_badge img { width: 36px; height: 36px; object-fit: contain; flex: none; }
      .cs_coming_soon_badge span { font-size: 11px; letter-spacing: 0.3px; text-transform: uppercase; color: rgba(255, 255, 255, 0.65); font-weight: 700; white-space: nowrap; }
      .cs_coming_soon_copyright { color: rgba(255, 255, 255, 0.4); font-size: 13px; margin: 0; }
      @media (max-width: 575px) {
        .cs_coming_soon_content h1 { font-size: 40px; }
        .cs_coming_soon_content p { font-size: 16px; }
        .cs_coming_soon_badges { flex-wrap: wrap; justify-content: center; row-gap: 10px; }
        .cs_coming_soon_badge { padding: 0 10px; gap: 6px; }
        .cs_coming_soon_badge + .cs_coming_soon_badge::before { display: none; }
        .cs_coming_soon_badge img { width: 26px; height: 26px; }
        .cs_coming_soon_badge span { font-size: 9px; }
      }
    </style>
    <div class="cs_coming_soon_page">
      <div class="cs_coming_soon_header">
        <a href="/" class="cs_coming_soon_logo">
          <img src="/assets/img/General Images/Branding/pharmacrop-logo-header-animation.gif" alt="PharmaCrop">
        </a>
      </div>
      <div class="cs_coming_soon_body">
        <div class="cs_coming_soon_content">
          <span class="cs_coming_soon_pill">PharmaCrop</span>
          <h1>Something New Is <span>Coming Soon</span></h1>
          <p>We&rsquo;re working on something new, built to the same Australian-grown, pharmaceutical-grade standard as everything else we do. Check back soon.</p>
          <div class="cs_coming_soon_actions">
            <a href="/contact" class="cs_coming_soon_btn">
              Contact Us
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor"></path>
              </svg>
            </a>
            <a href="/" class="cs_coming_soon_btn_outline">Back To Home</a>
          </div>
        </div>
      </div>
      <div class="cs_coming_soon_footer">
        <div class="cs_coming_soon_badges">
          <div class="cs_coming_soon_badge">
            <img src="/assets/img/General Images/Certifications/AUSTRALIAN-MADE.png" alt="Australian Made">
            <span>Australian Made</span>
          </div>
          <div class="cs_coming_soon_badge">
            <img src="/assets/img/General Images/Certifications/GMP-CERTIFIED.png" alt="GMP Certified">
            <span>GMP Certified</span>
          </div>
          <div class="cs_coming_soon_badge">
            <img src="/assets/img/General Images/Certifications/TGA-LICENSED.png" alt="TGA Licensed">
            <span>TGA Licensed</span>
          </div>
        </div>
        <p class="cs_coming_soon_copyright">&copy; 2026 PharmaCrop. All rights reserved.</p>
      </div>
    </div>
    <!-- End Coming Soon Section -->
`,
      }}
    />
  );
}
