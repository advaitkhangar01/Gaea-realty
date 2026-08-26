import type { Metadata, Viewport } from "next";
import { fontFraunces, fontSora, fontLiterata } from "./fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { SITE_DATA } from "@/data/siteData";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gaearealty.com"),
  title: "GAEA Realty & Consultants | Luxury Real Estate in Mumbai",
  description:
    "Explore selected luxury property opportunities in Mumbai with experienced guidance from GAEA Realty & Consultants (India) Private Limited. Verified property decisions handled with discretion.",
  keywords: [
    "GAEA Realty",
    "Mumbai Luxury Real Estate",
    "Luxury Property Mumbai",
    "HNI Real Estate Advisory",
    "Ashish Dhoke GAEA",
    "Mumbai Property Consultants",
  ],
  authors: [{ name: "GAEA Realty & Consultants (India) Private Limited" }],
  creator: "GAEA Realty & Consultants",
  openGraph: {
    title: "GAEA Realty & Consultants | Luxury Real Estate in Mumbai",
    description:
      "Explore selected luxury property opportunities in Mumbai with experienced guidance from GAEA Realty & Consultants India Pvt. Ltd.",
    url: "https://gaearealty.com",
    siteName: "GAEA Realty & Consultants",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/brand/Logo-with-text.png",
        width: 1200,
        height: 630,
        alt: "GAEA Realty & Consultants India Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GAEA Realty & Consultants | Luxury Real Estate in Mumbai",
    description:
      "Luxury property decisions in Mumbai, handled with discretion.",
    images: ["/images/brand/Logo-with-text.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#03356C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontFraunces.variable} ${fontSora.variable} ${fontLiterata.variable}`}
    >
      <body className="font-secondary bg-white text-gaea-charcoal antialiased selection:bg-gaea-blue selection:text-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingContact />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
