import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim & Mimari Danışmanlık",
  description:
    "ARTMOB DİZAYN Ankara fabrikası ile iletişime geçin. Proje danışmanlığı, malzeme örnekleri ve fabrika ziyareti için randevu alın.",
  alternates: { canonical: "https://artmobdizayn.com/iletisim" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "İletişim & Mimari Danışmanlık | ARTMOB DİZAYN",
    description:
      "Ankara fabrikamızda proje danışmanlığı, malzeme örnekleri ve fabrika ziyareti için iletişime geçin.",
    url: "https://artmobdizayn.com/iletisim",
    images: [
      {
        url: "/images/hero-interior.jpg",
        width: 1200,
        height: 630,
        alt: "ARTMOB DİZAYN Fabrika İletişim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim & Mimari Danışmanlık | ARTMOB DİZAYN",
    description:
      "Ankara fabrikamızda proje danışmanlığı ve fabrika ziyareti için iletişime geçin.",
    images: ["/images/hero-interior.jpg"],
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
