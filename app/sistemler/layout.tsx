import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mimari Duvar Sistemleri",
  description:
    "Tabandan tavana entegre ahşap duvar panelleri, gizli depolama ve AVM duvar sistemleri. 4 temel mimari sistem ailesi ile mekânınızı dönüştürün.",
  alternates: { canonical: "https://artmobdizayn.com/sistemler" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mimari Duvar Sistemleri | ARTMOB DİZAYN",
    description:
      "Tabandan tavana entegre ahşap duvar panelleri, gizli depolama ve AVM duvar sistemleri. 4 mimari sistem ailesi.",
    url: "https://artmobdizayn.com/sistemler",
    images: [
      {
        url: "/images/sistem-01-duvar-panelleri.jpg",
        width: 1200,
        height: 630,
        alt: "ARTMOB DİZAYN Mimari Duvar Sistemleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimari Duvar Sistemleri | ARTMOB DİZAYN",
    description:
      "Tabandan tavana entegre ahşap duvar panelleri ve AVM duvar sistemleri.",
    images: ["/images/sistem-01-duvar-panelleri.jpg"],
  },
};

export default function SistemlerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
