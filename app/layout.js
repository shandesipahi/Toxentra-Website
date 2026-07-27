import "./globals.css";

export const metadata = {
  title: "TOXENTRA — Your Partner in Science, Safety, and Approval",
  description:
    "TOXENTRA is an independent toxicology and regulatory consulting company supporting pharmaceutical, medical device, cosmetic, chemical and nutraceutical companies with scientific safety and regulatory expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-slate-800">{children}</body>
    </html>
  );
}
