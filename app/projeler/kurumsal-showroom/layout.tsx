import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumsal Showroom — Mat Lake Duvar Tasarımı",
  description:
    "Levent İstanbul'da 550 m² kurumsal showroom için mat lake duvar kaplama, entegre kabin sistemi ve bronz profil detay uygulaması.",
  alternates: { canonical: "https://artmobdizayn.com/projeler/kurumsal-showroom" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Kurumsal Showroom — Mat Lake Duvar Tasarımı | ARTMOB DİZAYN",
    description:
      "Levent'te 550 m² showroom için mat lake duvar kaplama, entegre kabin ve bronz profil sistemi.",
    url: "https://artmobdizayn.com/projeler/kurumsal-showroom",
    images: [
      {
        url: "/images/felsefe-gorunmez-mukemmellik.jpg",
        width: 1200,
        height: 630,
        alt: "Kurumsal Showroom Mat Lake Duvar Sistemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurumsal Showroom — Mat Lake Duvar Tasarımı | ARTMOB DİZAYN",
    description:
      "Levent'te 550 m² showroom için mat lake duvar kaplama ve entegre kabin sistemi.",
    images: ["/images/felsefe-gorunmez-mukemmellik.jpg"],
  },
};

export default function KurumsalShowroomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
