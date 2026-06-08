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

const HERO_IMG = "/images/sistem-02-gizli-depolama.jpg";

const PROCESS = [
  {
    no: "01",
    title: "Mühendislik & Mekanizma Tasarımı",
    body: "Her gizli kapak sistemi, duvarın statik ve geometrik yapısına göre özel olarak tasarlanır. İtme-açma, manyetik sürgü veya piston mekanizması; kullanım sıklığı ve yük kapasitesine göre belirlenir.",
  },
  {
    no: "02",
    title: "Yüzey Bütünleşimi",
    body: "Kapak yüzeyi, ana duvar kaplama malzemesinin birebir devamıyla bitirilir. Damar yönü, renk tonu ve profil bağlantıları titizlikle eşleştirilir. Tamamlandığında kapı, duvardan ayırt edilemez hale gelir.",
  },
  {
    no: "03",
    title: "İç Düzenleme & Aydınlatma",
    body: "Depolama birimi iç tarafı; kullanım amacına göre — aksesuar, teknik alan veya saklama — raflar, çekmeceler ve entegre LED aydınlatma ile donatılır.",
  },
  {
    no: "04",
    title: "Hassas Montaj & Kalibrasyon",
    body: "Kapak açılım açısı, kapanma sesi ve mekanizma hissi milimetrik toleranslarla ayarlanır. Teslimatta 200+ açma-kapama testi yapılır; mekanizmanın ömrü on yıllar için garanti altına alınır.",
  },
];

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    alt: "Görünmez kapı sistemi — modern iç mekan",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1565548921891-c0fc91285ebb?auto=format&fit=crop&w=1200&q=85",
    alt: "Gizli saklama birimi detayı",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1616046229478-9901369a7a7c?auto=format&fit=crop&w=1200&q=85",
    alt: "Ahşap yüzey entegre gizli kapak",
    aspect: "aspect-[4/5]",
  },
];

const SPECS = [
  { label: "Mekanizma Tipleri", value: "İtme / Manyetik / Piston" },
  { label: "Panel Yüzeyi", value: "Ana Duvarla Birebir Eşleşme" },
  { label: "Açılım Yükü", value: "50 — 120 kg Kapı Kefesi" },
  { label: "Mekanizma Ömrü", value: "+50.000 Açma-Kapama" },
  { label: "Ses Yalıtımı", value: "Opsiyonel Akustik Conta" },
  { label: "Garanti", value: "10 Yıl Mekanizma" },
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
      <div className="absolute inset-0 bg-[#1E1A16]" />
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

export default function GizliDepolamaPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="bg-[#080806]">
      <PageInit />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A2420] via-[#1E1A16] to-[#141010]" />
          <Image
            src={HERO_IMG}
            alt="Gizli Depolama Panelleri"
            fill
            className={`object-cover transition-opacity duration-[1500ms] ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
            priority
          />
          <div className="absolute inset-0 bg-[#080806]/62" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 40% 55%, rgba(196,169,106,0.05) 0%, transparent 65%)" }} />
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
              Gizli Depolama Panelleri
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
              Gizli
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
              Depolama
            </motion.div>
          </div>

          <motion.p
            className="font-sans text-[13.5px] text-stone/50 font-light max-w-[360px] leading-[1.95]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.68, ease: LUXURY_EASE }}
          >
            Duvarla tamamen bütünleşen gizli kapak ve saklama sistemleri.
            Görünmez mükemmellik — her açılışta yeniden keşfedilir.
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
              — Sistem 02 · Entegre Kabin
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-[clamp(30px,4vw,54px)] font-normal text-warm-white leading-tight mb-8">
              Görünmez olmak<br />bir sanattır.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="h-px w-12 bg-bronze/35 mb-8" />
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <p className="font-sans text-[13.5px] text-stone/60 font-light leading-[1.95] mb-6 max-w-lg">
              Gizli depolama sistemlerimiz, saklama ihtiyacını duvarın bir parçası haline getirir. Kapak yüzeyi, yanındaki panellerle aynı malzeme ve desen ile bitirilir; dokunmadan kapıyı bulmak neredeyse imkânsızlaşır.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.28}>
            <p className="font-sans text-[13.5px] text-stone/60 font-light leading-[1.95] max-w-lg">
              Manyetik sürgü ya da piston mekanizmalı açılım sistemleriyle çalışan kapaklar; kolupsuz, halka veya göstergesizdirler. İç mekân tasarımınızın sürekliliği ve mekanın sükûneti korunur.
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

      {/* ── QUOTE STRIP ── */}
      <div className="mx-8 md:mx-12 lg:mx-16 my-4 border border-stone/6 px-12 md:px-20 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <ScrollReveal delay={0}>
          <blockquote className="font-serif text-[clamp(18px,2.5vw,30px)] font-normal text-warm-white/80 leading-relaxed max-w-2xl">
            &ldquo;Gizli kapı sistemi tam anlamıyla görünmez. Bu seviyede detay işçiliği — dünyada çok az yer bunu başarabilir.&rdquo;
          </blockquote>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="shrink-0">
            <span className="font-sans text-[11px] text-stone/45 block mb-1">Kenji Watanabe</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone/28">Koleksiyoner · Tokyo</span>
          </div>
        </ScrollReveal>
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
            Görünmez Bir<br />
            <span className="text-stone/32">Mükemmellik İstiyorsanız</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.22}>
          <p className="font-sans text-[13.5px] text-stone/48 font-light max-w-sm mx-auto leading-[1.95] mb-14">
            Projenize özel gizli saklama sistemini birlikte tasarlıyoruz.
            Mekanizma seçiminden yüzey bütünleşimine kadar her adım planlanır.
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
