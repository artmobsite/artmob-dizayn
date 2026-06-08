import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boğaz Rezidansı — Duman Meşesi Duvar Sistemi",
  description:
    "Beşiktaş İstanbul'da 720 m² dubleks rezidans için tabandan tavana duman meşesi kaplama, gizli depolama ve bronz profil sistemi uygulaması.",
  alternates: { canonical: "https://artmobdizayn.com/projeler/bogaz-rezidansi" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Boğaz Rezidansı — Duman Meşesi Duvar Sistemi | ARTMOB DİZAYN",
    description:
      "Beşiktaş İstanbul'da 720 m² dubleks için tabandan tavana duman meşesi kaplama ve gizli depolama sistemi.",
    url: "https://artmobdizayn.com/projeler/bogaz-rezidansi",
    images: [
      {
        url: "/images/proje-bogaz-rezidansi.jpg",
        width: 1200,
        height: 630,
        alt: "Boğaz Rezidansı Duman Meşesi Duvar Sistemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boğaz Rezidansı — Duman Meşesi Duvar Sistemi | ARTMOB DİZAYN",
    description:
      "Beşiktaş'ta 720 m² dubleks için tabandan tavana duman meşesi duvar sistemi.",
    images: ["/images/proje-bogaz-rezidansi.jpg"],
  },
};

export default function BоgazRezidansiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
