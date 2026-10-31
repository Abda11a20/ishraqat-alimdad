import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.ishraqatalimdad.com";
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "مؤسسة إشراقة الإمداد",
  alternateName: "Ishraqat Alimdad",
  url: siteUrl,
  description:
    "مؤسسة في ينبع، المملكة العربية السعودية، تقدم خدمات توفير القوى العاملة والخدمات اللوجستية للأعمال. Workforce supply and logistics services in Yanbu, Saudi Arabia.",
  telephone: "+966143255759",
  email: "ashraqat.alimdad@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "حي الحدائق، طريق الملك عبدالعزيز",
    addressLocality: "ينبع",
    addressRegion: "منطقة المدينة المنورة",
    addressCountry: "SA",
  },
  areaServed: {
    "@type": "City",
    name: "Yanbu",
  },
  knowsAbout: [
    "توفير القوى العاملة",
    "الخدمات اللوجستية",
    "Workforce supply",
    "Logistics services",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966569509879",
    email: "ashraqat.alimdad@outlook.com",
    contactType: "customer service",
    availableLanguage: "Arabic",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "إشراقة الإمداد | توفير القوى العاملة والخدمات اللوجستية",
  description:
    "مؤسسة إشراقة الإمداد في ينبع، السعودية، تقدم خدمات توفير القوى العاملة والحلول اللوجستية للأعمال. تواصل معنا هاتفيًا أو عبر واتساب أو البريد الإلكتروني.",
  keywords: [
    "إشراقة الإمداد",
    "Ishraqat Alimdad",
    "ينبع",
    "السعودية",
    "توفير القوى العاملة في ينبع",
    "توفير العمالة في السعودية",
    "خدمات لوجستية في ينبع",
    "الخدمات اللوجستية السعودية",
    "workforce supply Yanbu",
    "labor supply Saudi Arabia",
    "logistics services Yanbu",
    "logistics services Saudi Arabia",
  ],
  applicationName: "مؤسسة إشراقة الإمداد",
  authors: [{ name: "مؤسسة إشراقة الإمداد" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "مؤسسة إشراقة الإمداد | القوى العاملة والخدمات اللوجستية",
    description:
      "خدمات توفير القوى العاملة والحلول اللوجستية للأعمال في ينبع، المملكة العربية السعودية.",
    url: siteUrl,
    siteName: "مؤسسة إشراقة الإمداد | Ishraqat Alimdad",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/brand/ishraqat-alimdad-logo.jpeg",
        width: 1599,
        height: 1131,
        alt: "شعار شركة إشراقة الإمداد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مؤسسة إشراقة الإمداد | Workforce & Logistics",
    description:
      "توفير القوى العاملة والخدمات اللوجستية للأعمال في ينبع، السعودية. Workforce supply and logistics services in Yanbu, Saudi Arabia.",
    images: ["/brand/ishraqat-alimdad-logo.jpeg"],
  },
  icons: {
    icon: "/brand/ishraqat-alimdad-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic bg-[#030712] text-slate-100 antialiased selection:bg-brand-orange selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
