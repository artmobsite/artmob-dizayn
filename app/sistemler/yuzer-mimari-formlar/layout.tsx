import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yüzer Mimari Form Sistemleri",
  description:
    "Duvara monteli mimari yapılar, yüzer konsollar ve entegre LED aydınlatma sistemleri. Üç boyutlu derinlik katan mimari formlar.",
  alternates: { canonical: "https://artmobdizayn.com/sistemler/yuzer-mimari-formlar" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Yüzer Mimari Form Sistemleri | ARTMOB DİZAYN",
    description:
      "Duvara monteli mimari yapılar, yüzer konsollar ve entegre LED aydınlatma sistemleri.",
    url: "https://artmobdizayn.com/sistemler/yuzer-mimari-formlar",
    images: [
      {
        url: "/images/sistem-04-yuzer-formlar.jpg",
        width: 1200,
        height: 630,
        alt: "Yüzer Mimari Form Sistemleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yüzer Mimari Form Sistemleri | ARTMOB DİZAYN",
    description:
      "Duvara monteli mimari yapılar, yüzer konsollar ve entegre LED aydınlatma sistemleri.",
    images: ["/images/sistem-04-yuzer-formlar.jpg"],
  },
};

export default function YuzerMimariFormlarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
