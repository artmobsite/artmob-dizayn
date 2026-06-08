import type { MetadataRoute } from "next";

const BASE = "https://artmobdizayn.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/sistemler`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/sistemler/entegre-duvar-panelleri`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sistemler/gizli-depolama-panelleri`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sistemler/avm-duvar-uygulamalari`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sistemler/yuzer-mimari-formlar`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/materyaller`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/projeler`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/projeler/bogaz-rezidansi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/projeler/kurumsal-showroom`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/projeler/mustakil-villa`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/projeler/otel-lobi-duvari`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/projeler/premium-ofis-kati`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/projeler/sanat-galerisi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/iletisim`, lastModified: now, changeFrequency: "yearly", priority: 0.75 },
  ];
}
