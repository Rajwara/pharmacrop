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
      </body>
    </html>
  );
}
