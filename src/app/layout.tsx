import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ishraqat-alimdad.com"),
  title: "إشراقة الإمداد | Ishraqat Alimdad",
  description:
    "الموقع الرسمي لشركة إشراقة الإمداد - المملكة العربية السعودية، ينبع، حي الدانة، طريق الملك عبدالعزيز. تواصل معنا عبر الهاتف، واتساب، والبريد الإلكتروني.",
  keywords: [
    "إشراقة الإمداد",
    "Ishraqat Alimdad",
    "ينبع",
    "السعودية",
    "مشاريع مستدامة",
    "إمداد",
    "لوجستيات",
  ],
  authors: [{ name: "إشراقة الإمداد" }],
  openGraph: {
    title: "إشراقة الإمداد | Ishraqat Alimdad",
    description:
      "الموقع الرسمي لشركة إشراقة الإمداد - المملكة العربية السعودية، ينبع، حي الدانة، طريق الملك عبدالعزيز.",
    url: "https://ishraqat-alimdad.com",
    siteName: "إشراقة الإمداد",
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
        {children}
      </body>
    </html>
  );
}
