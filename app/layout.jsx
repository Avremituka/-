import "./../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../lib/site";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: { default: site.name, template: `%s – ${site.name}` },
  description: site.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  openGraph: { title: site.name, description: site.description, url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com", siteName: site.name, images: [{ url: "/og.jpg", width: 1200, height: 630 }], locale: "he_IL", type: "website" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/og.jpg"] },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }){
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        <main className="container py-8">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
