"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageInit from "@/components/layout/PageInit";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { LUXURY_EASE } from "@/lib/animations";
import { BRAND } from "@/lib/constants";

const HERO_IMG = "/images/proje-mustakil-villa.jpg";

const PROJECT_INFO = {
  id: "PR-004",
  name: "Müstakil Villa",
  category: "Lüks Konut",
  location: "Zekeriyaköy, İstanbul",
  year: "2023",
  area: "1.200 m²",
  type: "Müstakil Villa",
};

const APPLICATIONS = [
  {
    no: "01",
    title: "Özel Boyutlu Ahşap Panel Sistemleri",
    desc: "1.200 m² villanın ana salon, yemek odası ve ofis katlarında tabandan tavana ahşap panel sistemi uygulandı. Her mekânın boyutlarına göre özel üretilen paneller, farklı odun türleri ve yüzey işlemleriyle farklı karakterler kazandı.",
    specs: [{ l: "Alan", v: "580 m²" }, { l: "Malzeme", v: "Duman Meşesi / Ceviz" }, { l: "Oda", v: "9 Oda" }],
  },
  {
    no: "02",
    title: "Gizli Kapılar ve Geçişler",
    desc: "Villa boyunca sekiz ayrı noktada gizli kapı tasarlandı. Hizmet koridoru girişleri, çalışma odası, kütüphane ve kiler kapıları duvar yüzeyiyle bütünleşerek görünmez hale getirildi. Her kapı piston mekanizmasıyla sessiz çalışır.",
    specs: [{ l: "Kapı Sayısı", v: "8 Adet" }, { l: "Açılım", v: "Piston Push" }, { l: "Yüzey", v: "Devamlı Panel" }],
  },
  {
    no: "03",
    title: "Entegre Aydınlatma Hattı",
    desc: "Tüm duvar sistemlerinde tavan-duvar birleşimine gizlenen LED şerit aydınlatma entegre edildi. Her oda için ayrı dimmer kontrolü sağlandı. Ana salonun dramatik yüksekliği, gizli aydınlatmayla vurgulandı.",
    specs: [{ l: "Tip", v: "Gizli LED Şerit" }, { l: "Kontrol", v: "Akıllı Dimmer" }, { l: "Sıcaklık", v: "2700K — 3000K" }],
  },
  {
    no: "04",
    title: "Kütüphane ve Depolama Duvarı",
    desc: "Ana salon ile ofis arasındaki duvar, tamamı kitap ve koleksiyon depolama için tasarlanmış bir kütüphane duvarına dönüştürüldü. Ahşap raflar ve gizli kabin sistemi tek bir monolitik yüzeyde birleşti. Bir bölüm gizli kapı ile geçiş sağlıyor.",
    specs: [{ l: "Yükseklik", v: "4.2 Metre" }, { l: "Genişlik", v: "8 Metre" }, { l: "Raf", v: "Ceviz Masif" }],
  },
];

const GALLERY = [
  {
    src: "/images/proje-mustakil-villa.jpg",
    alt: "Müstakil Villa — Ana Salon Duvar Sistemi",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1631761481249-ecc8bd8f5cc0?auto=format&fit=crop&w=1200&q=85",
    alt: "Kütüphane Duvarı Detayı",
    aspect: "aspect-square",
  },
  {
    src: "/images/sistem-02-gizli-depolama.jpg",
    alt: "Gizli Kapı Sistemi",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1200&q=85",
    alt: "Entegre Aydınlatma Detayı",
    aspect: "aspect-square",
  },
];

const STATS = [
  { value: "1.200", unit: "m²", label: "Villa Alanı" },
  { value: "580", unit: "m²", label: "Kaplanan Yüzey" },
  { value: "8", unit: "", label: "Gizli Kapı" },
  { value: "9", unit: "", label: "Oda" },
];

function GalleryItem({ src, alt, aspect, delay }: { src: string; alt: string; aspect: string; delay: number }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${aspect}`}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.2, delay, ease: LUXURY_EASE }}
    >
      <div className="absolute inset-0 bg-[#3C2E22]" />
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-[#080806]/14 mix-blend-multiply pointer-events-none" />
    </motion.div>
  );
}

export default function MustakilVillaPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="bg-[#080806]">
      <PageInit />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-24 px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3C2E22] via-[#241808] to-[#0E0A04]" />
          <Image
            src={HERO_IMG}
            alt="Müstakil Villa Ahşap Duvar Sistemi"
            fill
            className={`object-cover transition-opacity duration-[1500ms] ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
            priority
          />
          <div className="absolute inset-0 bg-[#080806]/62" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 55% 65%, rgba(196,169,106,0.06) 0%, transparent 65%)" }} />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none panel-lines" style={{ opacity: 0.3 }} />
        <div className="absolute bottom-0 left-0 right-0 h-44 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, #080806 0%, transparent 100%)" }} />

        <div className="relative z-20 w-full max-w-[1600px]">
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
          >
            <Link href="/projeler" className="font-sans text-[10px] tracking-[0.4em] uppercase text-stone/38 hover:text-stone/62 transition-colors duration-300">
              Projeler
            </Link>
            <span className="text-stone/22 text-[10px]">/</span>
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase section-label-gold">
              Müstakil Villa
            </span>
          </motion.div>

          <motion.span
            className="font-sans text-[10px] tracking-[0.42em] uppercase text-stone/32 block mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.28, ease: LUXURY_EASE }}
          >
            {PROJECT_INFO.id} · {PROJECT_INFO.category}
          </motion.span>

          <div className="overflow-hidden mb-3">
            <motion.h1
              className="font-serif font-normal text-warm-white leading-[0.92]"
              style={{ fontSize: "clamp(52px, 10vw, 160px)" }}
              initial={{ y: "108%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.35, ease: LUXURY_EASE }}
            >
              Müstakil
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.div
              className="font-serif font-normal leading-[0.92]"
              style={{ fontSize: "clamp(52px, 10vw, 160px)", color: "rgba(196,169,106,0.38)" }}
              initial={{ y: "108%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.5, ease: LUXURY_EASE }}
            >
              Villa
            </motion.div>
          </div>

          <motion.div
            className="flex flex-wrap gap-8 md:gap-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.68, ease: LUXURY_EASE }}
          >
            {[
              { label: "Konum", value: PROJECT_INFO.location },
              { label: "Yıl", value: PROJECT_INFO.year },
              { label: "Alan", value: PROJECT_INFO.area },
              { label: "Tip", value: PROJECT_INFO.type },
            ].map((item) => (
              <div key={item.label}>
                <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-stone/28 block mb-1.5">{item.label}</span>
                <span className="font-sans text-[12px] text-stone/65">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 right-10 flex flex-col items-center gap-3 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="h-14 w-px overflow-hidden relative">
            <motion.div
              className="absolute inset-x-0 h-full bg-gradient-to-b from-bronze/45 via-bronze/20 to-transparent"
              animate={{ top: ["-100%", "100%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      <div className="h-px w-full gold-rule" />

      {/* STATS */}
      <section className="px-8 md:px-12 lg:px-16 xl:px-20 py-16 border-b border-stone/6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone/6">
          {STATS.map((stat) => (
            <ScrollReveal key={stat.label} delay={0.05}>
              <div className="bg-[#080806] px-10 py-10">
                <div className="font-serif text-[clamp(36px,5vw,68px)] font-normal text-warm-white leading-none mb-1">
                  {stat.value}<span className="text-[0.45em] text-bronze/55 ml-1">{stat.unit}</span>
                </div>
                <div className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone/35 mt-2">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 border-b lg:border-b-0 lg:border-r border-stone/6">
          <ScrollReveal delay={0}>
            <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-8">
              — Proje Özeti
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-[clamp(28px,3.8vw,50px)] font-normal text-warm-white leading-tight mb-8">
              1.200 m² villanın her<br />yüzeyi tek bir anlatı.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="h-px w-12 bg-bronze/35 mb-8" />
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <p className="font-sans text-[13.5px] text-stone/60 font-light leading-[1.95] mb-6 max-w-lg">
              Zekeriyaköy&rsquo;deki 1.200 m² müstakil villa için gerçekleştirilen bu kapsamlı projede, tüm zemin kat ve birinci kat yaşam alanlarının duvar yüzeyleri ahşap kaplama sistemleriyle yeniden tasarlandı. Duman meşesi ve koyu Amerikan cevizi oda karakter farklılıklarını yaratırken bütün villa tek bir mimari dil konuşuyor.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.28}>
            <p className="font-sans text-[13.5px] text-stone/60 font-light leading-[1.95] max-w-lg">
              Sekiz gizli kapı, entegre aydınlatma hattı ve kütüphane duvarı, bu projeyi standart bir kaplama uygulamasının ötesine taşıdı. Her detay, mimarla birlikte koordineli biçimde tasarlandı ve uygulandı.
            </p>
          </ScrollReveal>
        </div>

        <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32">
          <ScrollReveal delay={0.1}>
            <span className="font-sans text-[10px] tracking-[0.45em] uppercase text-stone/28 block mb-10">
              — Uygulanan Sistemler
            </span>
          </ScrollReveal>
          <div className="space-y-8">
            {[
              "Duman Meşesi Tabandan Tavana Kaplama",
              "Koyu Ceviz Yatak Odası Sistemi",
              "8 Adet Gizli Kapı ve Geçiş",
              "Kütüphane Duvarı (Masif Ceviz Raf)",
              "Tavan-Duvar Entegre LED Aydınlatma",
              "Akıllı Ev Dimmer Kontrol Entegrasyonu",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={0.1 + i * 0.06}>
                <div className="flex items-center gap-5 border-t border-stone/6 pt-5">
                  <span className="font-serif text-[13px] font-light text-stone/22 select-none w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[13px] text-stone/65 font-light">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px mx-8 md:mx-16" style={{ background: "linear-gradient(to right, transparent, rgba(196,169,106,0.10), transparent)" }} />

      {/* APPLICATIONS */}
      <section className="px-8 md:px-12 lg:px-16 xl:px-20 py-24 md:py-32">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-16">
            — Uygulama Detayları
          </span>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {APPLICATIONS.map((app, i) => (
            <ScrollReveal key={app.no} delay={0.08 + i * 0.1}>
              <div>
                <div className="flex items-baseline gap-5 mb-6">
                  <span className="font-serif text-[52px] font-light text-stone/[0.05] leading-none select-none">
                    {app.no}
                  </span>
                  <h3 className="font-serif text-[20px] font-normal text-warm-white leading-tight">
                    {app.title}
                  </h3>
                </div>
                <div className="h-px w-10 bg-bronze/28 mb-6" />
                <p className="font-sans text-[13px] text-stone/55 font-light leading-[1.95] mb-8">
                  {app.desc}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {app.specs.map((s) => (
                    <div key={s.l} className="border-t border-stone/6 pt-4">
                      <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/25 block mb-1.5">{s.l}</span>
                      <span className="font-sans text-[12px] text-stone/58 font-light">{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-8 md:px-12 lg:px-16 xl:px-20 pb-8">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-10">
            — Proje Görselleri
          </span>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY.map((img, i) => (
            <GalleryItem key={img.src} {...img} delay={0.06 + i * 0.08} />
          ))}
        </div>
      </section>

      {/* EDITORIAL STRIP */}
      <div className="relative h-[38vw] max-h-[480px] overflow-hidden my-4 mx-8 md:mx-12 lg:mx-16">
        <Image
          src="https://images.unsplash.com/photo-1616046229478-9901369a7a7c?auto=format&fit=crop&w=2400&q=80"
          alt="Villa ahşap panel detayı"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#080806]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8">
            <span className="font-sans text-[10px] tracking-[0.5em] uppercase section-label-gold block mb-5">
              — Lüks Konut
            </span>
            <p className="font-serif text-[clamp(22px,3.5vw,52px)] font-normal text-warm-white/88 leading-tight max-w-2xl mx-auto">
              Evin her odası kendi<br />mimari kimliğini taşır
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, #080806, transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, #080806, transparent)" }} />
      </div>

      {/* CTA */}
      <section className="py-36 px-8 md:px-16 text-center border-t border-stone/6 mt-4">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[10px] tracking-[0.5em] uppercase section-label-gold block mb-10">
            — Konut Projeniz İçin
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <h2 className="font-serif text-[clamp(34px,5.5vw,84px)] font-normal text-warm-white leading-none mb-10">
            Evinizi Bir Mimari<br />
            <span className="text-stone/32">Esere Dönüştürün</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.22}>
          <p className="font-sans text-[13.5px] text-stone/48 font-light max-w-sm mx-auto leading-[1.95] mb-14">
            Villa ve rezidans projeleriniz için özel tasarım
            ahşap yüzey sistemleri geliştiriyoruz.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.32}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-5 border border-bronze/28 px-12 py-5 font-sans text-[11px] tracking-[0.32em] uppercase text-stone/65 hover:text-warm-white hover:border-bronze/55 transition-all duration-400"
            >
              <span>Proje Görüşmesi Başlatın</span>
            </Link>
            <Link
              href="/projeler"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.28em] uppercase text-stone/35 hover:text-stone/62 transition-colors duration-300"
            >
              <span>Tüm Projeler</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-24 pt-12 border-t border-stone/6 flex flex-col md:flex-row items-center justify-center gap-8">
          <div>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-stone/25 block mb-2">Telefon</span>
            <a href={`tel:${BRAND.phone}`} className="font-sans text-[13px] text-stone/55 hover:text-stone/80 transition-colors">{BRAND.phone}</a>
          </div>
          <div className="hidden md:block h-8 w-px bg-stone/8" />
          <div>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-stone/25 block mb-2">E-posta</span>
            <a href={`mailto:${BRAND.email}`} className="font-sans text-[13px] text-stone/55 hover:text-stone/80 transition-colors">{BRAND.email}</a>
          </div>
          <div className="hidden md:block h-8 w-px bg-stone/8" />
          <div>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-stone/25 block mb-2">Adres</span>
            <span className="font-sans text-[13px] text-stone/55">{BRAND.city}</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
