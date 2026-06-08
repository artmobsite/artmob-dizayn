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

const HERO_IMG = "/images/sistem-04-yuzer-formlar.jpg";

const PROCESS = [
  {
    no: "01",
    title: "Yapısal Hesap & Montaj Mühendisliği",
    body: "Duvara monte edilecek konsolun ağırlık, açıklık ve kiriş hesabı yapılır. Duvar taşıyıcı sistemi ile uyumlu gizli montaj demiri tasarlanır; yükleme testi yapılır.",
  },
  {
    no: "02",
    title: "3D Form Tasarımı & Prototip",
    body: "Formun hacimsel kütlesi, duvar ile ilişkisi ve boşluk — doluluk dengesi 3D ortamda modellenir. Ölçekli prototip üretilerek mekânda yerleşim kontrol edilir.",
  },
  {
    no: "03",
    title: "Entegre Aydınlatma Tasarımı",
    body: "LED şerit kanalları, nokta spotlar ve ışık difüzörleri yapının içine ya da altına entegre edilir. Gizli kablo kanalı ve switch noktaları elektrik projesiyle koordine edilir.",
  },
  {
    no: "04",
    title: "Hassas Montaj & İnce Ayar",
    body: "Konsol ve formun montajı lazer düzlem ölçümü ile gerçekleştirilir. Duvardan çıkış açısı, yatay düzlem ve ışık yönlendirmesi milimetrik toleranslarla ayarlanır.",
  },
];

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?auto=format&fit=crop&w=1200&q=85",
    alt: "Bronz profil entegre yüzer konsol",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1616764225815-60b3e6c0e431?auto=format&fit=crop&w=1200&q=85",
    alt: "Duvara monteli mimari yapı — entegre aydınlatma",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1631761481249-ecc8bd8f5cc0?auto=format&fit=crop&w=1200&q=85",
    alt: "Yüzer ahşap konsol sistemi — rezidans",
    aspect: "aspect-[3/4]",
  },
];

const SPECS = [
  { label: "Konsol Açıklığı", value: "60 — 380 cm" },
  { label: "Taşıma Kapasitesi", value: "Yapısal Hesaba Göre" },
  { label: "Aydınlatma", value: "LED Şerit / Spot Entegre" },
  { label: "Malzeme", value: "Ahşap / Metal / Kompozit" },
  { label: "Montaj Sistemi", value: "Gizli Çelik Taşıyıcı" },
  { label: "Garanti", value: "10 Yıl Yapısal" },
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
      <div className="absolute inset-0 bg-[#1C1612]" />
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-[#080806]/18 mix-blend-multiply pointer-events-none" />
    </motion.div>
  );
}

export default function YuzerMimariFormlarPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="bg-[#080806]">
      <PageInit />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#28201A] via-[#1C1612] to-[#120E0A]" />
          <Image
            src={HERO_IMG}
            alt="Yüzer Mimari Formlar"
            fill
            className={`object-cover transition-opacity duration-[1500ms] ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
            priority
          />
          <div className="absolute inset-0 bg-[#080806]/62" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 45% 55%, rgba(196,169,106,0.06) 0%, transparent 65%)" }} />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none panel-lines" style={{ opacity: 0.35 }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, #080806 0%, transparent 100%)" }} />

        <div className="relative z-20 w-full max-w-[1600px]">
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
          >
            <Link href="/sistemler" className="font-sans text-[10px] tracking-[0.4em] uppercase text-stone/38 hover:text-stone/62 transition-colors duration-300">
              Sistemler
            </Link>
            <span className="text-stone/22 text-[10px]">/</span>
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase section-label-gold">
              Yüzer Mimari Formlar
            </span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-serif font-normal text-warm-white leading-[0.9]"
              style={{ fontSize: "clamp(56px, 11vw, 172px)" }}
              initial={{ y: "108%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.35, ease: LUXURY_EASE }}
            >
              Yüzer
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.div
              className="font-serif font-normal leading-[0.9]"
              style={{ fontSize: "clamp(56px, 11vw, 172px)", color: "rgba(196,169,106,0.40)" }}
              initial={{ y: "108%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.5, ease: LUXURY_EASE }}
            >
              Mimari Formlar
            </motion.div>
          </div>

          <motion.p
            className="font-sans text-[13.5px] text-stone/50 font-light max-w-[380px] leading-[1.95]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.68, ease: LUXURY_EASE }}
          >
            Duvara monteli mimari yapılar, yüzer konsollar ve entegre aydınlatma.
            Yerçekimiyle değil, hassas mühendislikle tutunan formlar.
          </motion.p>
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

      {/* ── OVERVIEW ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32 border-b lg:border-b-0 lg:border-r border-stone/6">
          <ScrollReveal delay={0}>
            <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-8">
              — Sistem 04 · Özel Yapılar
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-[clamp(30px,4vw,54px)] font-normal text-warm-white leading-tight mb-8">
              Duvardan çıkan,<br />havada duran mimari.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="h-px w-12 bg-bronze/35 mb-8" />
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <p className="font-sans text-[13.5px] text-stone/60 font-light leading-[1.95] mb-6 max-w-lg">
              Yüzer mimari formlar, mekânın üçüncü boyutunu — derinliği — mimari bir ifadeye dönüştürür. Duvara monteli raflar ve konsolların ötesinde; ışığı yutan, gölge yaratan ve mekânla diyalog kuran yapısal elemanlardır.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.28}>
            <p className="font-sans text-[13.5px] text-stone/60 font-light leading-[1.95] max-w-lg">
              Gizli çelik taşıyıcı sistem sayesinde konsolun altında hiçbir destek görünmez. Entegre LED aydınlatma, formun alt yüzeyinden yayılır ve yüzme hissini güçlendirir. Her yapı, yerleşeceği mekân için ayrıca tasarlanır.
            </p>
          </ScrollReveal>
        </div>

        <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32">
          <ScrollReveal delay={0.1}>
            <span className="font-sans text-[10px] tracking-[0.45em] uppercase text-stone/28 block mb-10">
              — Teknik Veriler
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {SPECS.map((s, i) => (
              <ScrollReveal key={s.label} delay={0.12 + i * 0.05}>
                <div className="border-t border-stone/8 pt-5">
                  <span className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone/28 block mb-2">
                    {s.label}
                  </span>
                  <span className="font-sans text-[13px] text-stone/70 font-light">{s.value}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px mx-8 md:mx-16" style={{ background: "linear-gradient(to right, transparent, rgba(196,169,106,0.10), transparent)" }} />

      {/* ── PROCESS ── */}
      <section className="px-8 md:px-12 lg:px-16 xl:px-20 py-24 md:py-32">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-16">
            — Nasıl Yapıyoruz
          </span>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl">
          {PROCESS.map((step, i) => (
            <ScrollReveal key={step.no} delay={0.1 + i * 0.1}>
              <div>
                <div className="flex items-baseline gap-5 mb-5">
                  <span className="font-serif text-[56px] font-light text-stone/[0.06] leading-none select-none">
                    {step.no}
                  </span>
                  <h3 className="font-serif text-[21px] font-normal text-warm-white leading-tight">
                    {step.title}
                  </h3>
                </div>
                <div className="h-px w-10 bg-bronze/28 mb-5" />
                <p className="font-sans text-[13px] text-stone/55 font-light leading-[1.95]">
                  {step.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="px-8 md:px-12 lg:px-16 xl:px-20 pb-8">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-10">
            — Örnek Uygulamalar
          </span>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY.map((img, i) => (
            <GalleryItem key={img.src} {...img} delay={0.08 + i * 0.1} />
          ))}
        </div>
      </section>

      {/* ── EDITORIAL STRIP ── */}
      <div className="relative h-[38vw] max-h-[480px] overflow-hidden my-4 mx-8 md:mx-12 lg:mx-16">
        <Image
          src="/images/sistem-04-yuzer-formlar.jpg"
          alt="Yüzer form mimari detay"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#080806]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8">
            <span className="font-sans text-[10px] tracking-[0.5em] uppercase section-label-gold block mb-5">
              — Mühendislik & Estetik
            </span>
            <p className="font-serif text-[clamp(22px,3.5vw,48px)] font-normal text-warm-white/88 leading-tight max-w-2xl mx-auto">
              Hiçbir destek görünmez —<br />sadece form ve ışık var
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, #080806, transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, #080806, transparent)" }} />
      </div>

      {/* ── CONTACT CTA ── */}
      <section className="py-36 px-8 md:px-16 text-center border-t border-stone/6 mt-4">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[10px] tracking-[0.5em] uppercase section-label-gold block mb-10">
            — Bu Sistemi Projenize Alın
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <h2 className="font-serif text-[clamp(36px,6vw,90px)] font-normal text-warm-white leading-none mb-10">
            Mekânınıza<br />
            <span className="text-stone/32">Bir Form Ekleyin</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.22}>
          <p className="font-sans text-[13.5px] text-stone/48 font-light max-w-sm mx-auto leading-[1.95] mb-14">
            Konsol boyutu, malzeme seçimi ve aydınlatma entegrasyonu için
            özel tasarım sürecini birlikte başlatıyoruz.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.32}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-5 border border-bronze/28 px-12 py-5 font-sans text-[11px] tracking-[0.32em] uppercase text-stone/65 hover:text-warm-white hover:border-bronze/55 transition-all duration-400"
            >
              <span>Danışmanlık Talebi</span>
            </Link>
            <Link
              href="/sistemler"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.28em] uppercase text-stone/35 hover:text-stone/62 transition-colors duration-300"
            >
              <span>Tüm Sistemler</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-24 pt-12 border-t border-stone/6 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-stone/25 block mb-2">Telefon</span>
            <a href={`tel:${BRAND.phone}`} className="font-sans text-[13px] text-stone/55 hover:text-stone/80 transition-colors">
              {BRAND.phone}
            </a>
          </div>
          <div className="hidden md:block h-8 w-px bg-stone/8" />
          <div>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-stone/25 block mb-2">E-posta</span>
            <a href={`mailto:${BRAND.email}`} className="font-sans text-[13px] text-stone/55 hover:text-stone/80 transition-colors">
              {BRAND.email}
            </a>
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
