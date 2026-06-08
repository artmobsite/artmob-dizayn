import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanat Galerisi — Mimari Yüzey Uygulaması",
  description:
    "Sanat galerisi için sanatla bütünleşen mimari yüzey sistemi. Nötr tonlu mat lake duvar kaplama ve gizli aydınlatma entegrasyonu.",
  alternates: { canonical: "https://artmobdizayn.com/projeler/sanat-galerisi" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sanat Galerisi — Mimari Yüzey Uygulaması | ARTMOB DİZAYN",
    description:
      "Sanat galerisi için sanatla bütünleşen mimari yüzey sistemi ve gizli aydınlatma entegrasyonu.",
    url: "https://artmobdizayn.com/projeler/sanat-galerisi",
    images: [
      {
        url: "/images/proje-sanat-galerisi.jpg",
        width: 1200,
        height: 630,
        alt: "Sanat Galerisi Mimari Yüzey Uygulaması",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanat Galerisi — Mimari Yüzey Uygulaması | ARTMOB DİZAYN",
    description:
      "Sanat galerisi için sanatla bütünleşen mimari yüzey sistemi.",
    images: ["/images/proje-sanat-galerisi.jpg"],
  },
};

export default function SanatGalerisiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
