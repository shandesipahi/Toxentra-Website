import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "TOXENTRA — Your Partner in Science, Safety, and Approval",
  description:
    "TOXENTRA is an independent toxicology and regulatory consulting company supporting pharmaceutical, medical device, cosmetic, chemical and nutraceutical companies with scientific safety and regulatory expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18340910202"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18340910202');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased text-slate-800">{children}</body>
    </html>
  );
}
