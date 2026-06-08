import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/components/providers/LoadingProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ScrollToTop from "@/components/providers/ScrollToTop";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080806",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://artmobdizayn.com"),
  title: {
    default: "ARTMOB DİZAYN — Mimari Ahşap Yüzey Sistemleri",
    template: "%s | ARTMOB DİZAYN",
  },
  description:
    "Mimari ahşap yüzey fabrikası. Duvardan tavana entegre sistemler, özel kaplamalı mimari yüzeyler, lüks AVM duvar uygulamaları ve gizli depolama sistemleri.",
  keywords: [
    "mimari duvar panelleri",
    "entegre ahşap yüzey",
    "lüks duvar kaplama",
    "AVM duvar sistemi",
    "gizli kapı sistemi",
    "duman meşesi kaplama",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://artmobdizayn.com",
  },
  openGraph: {
    title: "ARTMOB DİZAYN — Mimari Ahşap Yüzey Sistemleri",
    description:
      "Mimari ahşap yüzey fabrikası. Duvardan tavana entegre sistemler ve lüks iç mekan yapısal çözümleri.",
    type: "website",
    url: "https://artmobdizayn.com",
    siteName: "ARTMOB DİZAYN",
    locale: "tr_TR",
    images: [
      {
        url: "/images/hero-interior.jpg",
        width: 1200,
        height: 630,
        alt: "ARTMOB DİZAYN — Mimari Ahşap Yüzey Sistemleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTMOB DİZAYN — Mimari Ahşap Yüzey Sistemleri",
    description:
      "Mimari ahşap yüzey fabrikası. Duvardan tavana entegre sistemler ve lüks iç mekan yapısal çözümleri.",
    images: ["/images/hero-interior.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body className="bg-[#080806] text-warm-white antialiased overflow-x-hidden">
        <LoadingProvider>
          <SmoothScrollProvider>
            <ScrollToTop />
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
