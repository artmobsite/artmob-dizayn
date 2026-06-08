import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Ofis Katı — Kurumsal Duvar Sistemi",
  description:
    "Kurumsal yönetim katı için mat lake ve entegre ahşap duvar kaplama sistemi. Temsil mekânına yakışır mimari yüzey tasarımı.",
  alternates: { canonical: "https://artmobdizayn.com/projeler/premium-ofis-kati" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Premium Ofis Katı — Kurumsal Duvar Sistemi | ARTMOB DİZAYN",
    description:
      "Kurumsal yönetim katı için mat lake ve entegre ahşap duvar kaplama sistemi.",
    url: "https://artmobdizayn.com/projeler/premium-ofis-kati",
    images: [
      {
        url: "/images/felsefe-gorunmez-mukemmellik.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Ofis Katı Kurumsal Duvar Sistemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Ofis Katı — Kurumsal Duvar Sistemi | ARTMOB DİZAYN",
    description:
      "Kurumsal yönetim katı için mat lake ve entegre ahşap duvar kaplama sistemi.",
    images: ["/images/felsefe-gorunmez-mukemmellik.jpg"],
  },
};

export default function PremiumOfisKatiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
