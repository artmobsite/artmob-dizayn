import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahşap Materyal Kataloğu",
  description:
    "Duman meşesi, koyu Amerikan cevizi, mat lake ve ham beton — mimari ahşap yüzey materyalleri. Fabrikamızda elle işlenen 5 premium materyal sistemi.",
  alternates: { canonical: "https://artmobdizayn.com/materyaller" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ahşap Materyal Kataloğu | ARTMOB DİZAYN",
    description:
      "Duman meşesi, koyu ceviz, mat lake ve ham beton. Fabrikamızda elle işlenen premium mimari materyaller.",
    url: "https://artmobdizayn.com/materyaller",
    images: [
      {
        url: "/images/materyal-koyu-ceviz.jpg",
        width: 1200,
        height: 630,
        alt: "ARTMOB DİZAYN Premium Ahşap Materyaller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahşap Materyal Kataloğu | ARTMOB DİZAYN",
    description:
      "Duman meşesi, koyu ceviz, mat lake ve ham beton. Fabrikamızda elle işlenen premium materyaller.",
    images: ["/images/materyal-koyu-ceviz.jpg"],
  },
};

export default function MateryallerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
