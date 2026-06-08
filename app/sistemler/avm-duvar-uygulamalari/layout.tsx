import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AVM Duvar Uygulamaları — Ticari Mimari",
  description:
    "AVM, otel ve showroom gibi büyük ölçekli ticari mekânlar için ahşap duvar kaplama sistemi. B1 yangın sınıfı, 500–10.000 m² ölçek.",
  alternates: { canonical: "https://artmobdizayn.com/sistemler/avm-duvar-uygulamalari" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AVM Duvar Uygulamaları — Ticari Mimari | ARTMOB DİZAYN",
    description:
      "AVM ve büyük ölçekli ticari mekânlar için ahşap duvar kaplama sistemi. B1 yangın sınıfı.",
    url: "https://artmobdizayn.com/sistemler/avm-duvar-uygulamalari",
    images: [
      {
        url: "/images/sistem-03-avm-duvar.jpg",
        width: 1200,
        height: 630,
        alt: "AVM Duvar Uygulamaları Ticari Mimari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVM Duvar Uygulamaları — Ticari Mimari | ARTMOB DİZAYN",
    description:
      "AVM ve büyük ölçekli ticari mekânlar için ahşap duvar kaplama sistemi.",
    images: ["/images/sistem-03-avm-duvar.jpg"],
  },
};

export default function AvmDuvarUygulamalariLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
