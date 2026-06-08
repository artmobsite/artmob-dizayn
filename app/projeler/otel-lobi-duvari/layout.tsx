import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otel Lobi — Büyük Ölçekli Ahşap Duvar Kaplama",
  description:
    "Lüks otel lobisi için büyük ölçekli ahşap duvar kaplama sistemi. Koyu ceviz yüzey, bronz profil çerçeveleme ve LED aydınlatma entegrasyonu.",
  alternates: { canonical: "https://artmobdizayn.com/projeler/otel-lobi-duvari" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Otel Lobi — Büyük Ölçekli Ahşap Duvar Kaplama | ARTMOB DİZAYN",
    description:
      "Lüks otel lobisi için büyük ölçekli ahşap duvar kaplama, bronz profil ve LED aydınlatma entegrasyonu.",
    url: "https://artmobdizayn.com/projeler/otel-lobi-duvari",
    images: [
      {
        url: "/images/proje-bogaz-rezidansi.jpg",
        width: 1200,
        height: 630,
        alt: "Otel Lobi Ahşap Duvar Kaplama Sistemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Otel Lobi — Büyük Ölçekli Ahşap Duvar Kaplama | ARTMOB DİZAYN",
    description:
      "Lüks otel lobisi için büyük ölçekli ahşap duvar kaplama ve bronz profil sistemi.",
    images: ["/images/proje-bogaz-rezidansi.jpg"],
  },
};

export default function OtelLobiDuvariLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
