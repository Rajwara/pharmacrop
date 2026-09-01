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

        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.slick.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/isotope.pkg.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lightgallery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/main.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
