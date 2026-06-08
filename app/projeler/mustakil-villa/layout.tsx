import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Müstakil Villa — Ahşap Duvar Sistemi",
  description:
    "Özel müstakil villa için tabandan tavana entegre ahşap duvar kaplama sistemi. Gizli kapılar, bronz profil detaylar ve doğal ceviz yüzey uygulaması.",
  alternates: { canonical: "https://artmobdizayn.com/projeler/mustakil-villa" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Müstakil Villa — Ahşap Duvar Sistemi | ARTMOB DİZAYN",
    description:
      "Müstakil villa için tabandan tavana entegre ahşap duvar kaplama, gizli kapılar ve bronz profil sistemi.",
    url: "https://artmobdizayn.com/projeler/mustakil-villa",
    images: [
      {
        url: "/images/proje-mustakil-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Müstakil Villa Ahşap Duvar Sistemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Müstakil Villa — Ahşap Duvar Sistemi | ARTMOB DİZAYN",
    description:
      "Müstakil villa için tabandan tavana entegre ahşap duvar kaplama sistemi.",
    images: ["/images/proje-mustakil-villa.jpg"],
  },
};

export default function MustakilVillaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
