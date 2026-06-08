import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entegre Ahşap Duvar Panelleri",
  description:
    "Tabandan tavana sürekli ahşap duvar kaplama sistemi. Duman meşesi ve koyu ceviz seçenekleri, gizli ray montaj ve bronz profil detaylar ile monolitik mimari form.",
  alternates: { canonical: "https://artmobdizayn.com/sistemler/entegre-duvar-panelleri" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Entegre Ahşap Duvar Panelleri | ARTMOB DİZAYN",
    description:
      "Tabandan tavana sürekli ahşap duvar kaplama sistemi. Duman meşesi ve koyu ceviz seçenekleri.",
    url: "https://artmobdizayn.com/sistemler/entegre-duvar-panelleri",
    images: [
      {
        url: "/images/sistem-01-duvar-panelleri.jpg",
        width: 1200,
        height: 630,
        alt: "Entegre Ahşap Duvar Panelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entegre Ahşap Duvar Panelleri | ARTMOB DİZAYN",
    description:
      "Tabandan tavana sürekli ahşap duvar kaplama sistemi. Duman meşesi ve koyu ceviz seçenekleri.",
    images: ["/images/sistem-01-duvar-panelleri.jpg"],
  },
};

export default function EntegreDuvarPanelleriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
