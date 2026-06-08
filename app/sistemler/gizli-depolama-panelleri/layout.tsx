import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizli Depolama Panel Sistemi",
  description:
    "Duvarla tamamen bütünleşen gizli kapak ve saklama sistemleri. Görünmez mükemmellik — manyetik push mekanizmalı, duvar yüzeyiyle aynı kaplama.",
  alternates: { canonical: "https://artmobdizayn.com/sistemler/gizli-depolama-panelleri" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gizli Depolama Panel Sistemi | ARTMOB DİZAYN",
    description:
      "Duvarla tamamen bütünleşen gizli kapak ve saklama sistemleri. Manyetik push mekanizmalı.",
    url: "https://artmobdizayn.com/sistemler/gizli-depolama-panelleri",
    images: [
      {
        url: "/images/sistem-02-gizli-depolama.jpg",
        width: 1200,
        height: 630,
        alt: "Gizli Depolama Panel Sistemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gizli Depolama Panel Sistemi | ARTMOB DİZAYN",
    description:
      "Duvarla tamamen bütünleşen gizli kapak ve saklama sistemleri.",
    images: ["/images/sistem-02-gizli-depolama.jpg"],
  },
};

export default function GizliDepolamaPanelleriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
