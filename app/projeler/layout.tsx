import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referans Projeler",
  description:
    "Ankara'dan dünyaya yayılan 200+ mimari yüzey referansı. Konut, otel, AVM ve kurumsal ölçekli ahşap duvar sistemi uygulamaları.",
  alternates: { canonical: "https://artmobdizayn.com/projeler" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Referans Projeler | ARTMOB DİZAYN",
    description:
      "200+ tamamlanan mimari ahşap yüzey projesi. Konut, otel, AVM ve kurumsal uygulamalar.",
    url: "https://artmobdizayn.com/projeler",
    images: [
      {
        url: "/images/proje-bogaz-rezidansi.jpg",
        width: 1200,
        height: 630,
        alt: "ARTMOB DİZAYN Referans Projeler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referans Projeler | ARTMOB DİZAYN",
    description:
      "200+ tamamlanan mimari ahşap yüzey projesi. Konut, otel, AVM ve kurumsal uygulamalar.",
    images: ["/images/proje-bogaz-rezidansi.jpg"],
  },
};

export default function ProjelerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
