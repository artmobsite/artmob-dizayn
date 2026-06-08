"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageInit from "@/components/layout/PageInit";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { SYSTEMS } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";

const HERO_IMG = "https://images.unsplash.com/photo-1616764225815-60b3e6c0e431?auto=format&fit=crop&w=2400&q=80";

const SPECS = [
  { label: "Kaplama Seçenekleri", value: "Ahşap / Lake / Beton / Metal" },
  { label: "Panel Kalınlığı", value: "18 — 40mm Özel Üretim" },
  { label: "Uygulama Alanı", value: "Taban → Tavan Entegre" },
  { label: "Teslimat Süresi", value: "8 — 14 Hafta" },
];

function SystemSection({
  system,
  index,
}: {
  system: (typeof SYSTEMS)[number];
  index: number;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-hidden border-b border-stone/6"
    >
      {/* Image column */}
      <motion.div
        className={`relative h-[65vw] lg:h-auto ${isEven ? "lg:order-1" : "lg:order-2"}`}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.6, ease: LUXURY_EASE }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient}`} />
        <Image
          src={system.image}
          alt={system.name}
          fill
          className={`object-cover transition-opacity duration-1000 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-[#080806]/25 mix-blend-multiply pointer-events-none" />
        {/* Gold atmospheric glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 70% at 50% 60%, rgba(196,169,106,0.06) 0%, transparent 65%)",
          }}
        />
        {/* System number watermark */}
        <div className="absolute bottom-6 right-8 font-serif font-normal text-warm-white/[0.055] select-none leading-none" style={{ fontSize: "clamp(64px, 12vw, 180px)" }}>
          {system.id}
        </div>
        {/* Category tag */}
        <div className="absolute top-8 left-8">
          <span className="font-sans text-[11px] tracking-[0.32em] uppercase text-warm-white/55 bg-[#080806]/50 backdrop-blur-sm px-3 py-1.5">
            {system.category}
          </span>
        </div>
        {/* Bottom fade into content */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(8,8,6,0.55), transparent)" }}
        />
      </motion.div>

      {/* Content column */}
      <div
        className={`flex flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 py-16 md:py-20 bg-[#080806] ${isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.28, ease: LUXURY_EASE }}
        >
          <span className="font-sans text-[11px] tracking-[0.38em] uppercase section-label-gold block mb-6">
            — Sistem {system.id}
          </span>
          <h2 className="font-serif text-[clamp(34px,4.5vw,68px)] font-normal text-warm-white leading-tight mb-6">
            {system.name}
          </h2>
          <div className="h-px w-14 bg-bronze/35 mb-8" />
          <p className="font-sans text-[13.5px] text-stone/65 font-light leading-[1.95] max-w-md mb-10">
            {system.description}
          </p>
          {/* Technical specs */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-stone/8 pt-8 mb-10">
            {SPECS.map((s) => (
              <div key={s.label}>
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/35 block mb-1.5">
                  {s.label}
                </span>
                <span className="font-sans text-[12px] text-stone/68 font-light">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href={`/sistemler/${system.slug}`}
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.28em] uppercase text-warm-white/60 hover:text-warm-white transition-colors duration-300 group"
            >
              <span>Detayları İncele</span>
              <motion.span
                className="block h-px w-5 bg-current"
                initial={{ width: "20px" }}
                whileHover={{ width: "38px" }}
                transition={{ duration: 0.4, ease: LUXURY_EASE }}
              />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.28em] uppercase text-bronze/65 hover:text-bronze transition-colors duration-300 group"
            >
              <span>Danışın</span>
              <motion.span
                className="block h-px w-5 bg-current"
                initial={{ width: "20px" }}
                whileHover={{ width: "38px" }}
                transition={{ duration: 0.4, ease: LUXURY_EASE }}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SistemlerPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="bg-[#080806]">
      <PageInit />
      <Navbar />

      {/* Page Hero — cinematic image background */}
      <section className="relative min-h-[82vh] flex flex-col justify-end pb-24 px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        {/* Background photographic layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E14] via-[#1A1208] to-[#0A0806]" />
          <Image
            src={HERO_IMG}
            alt="Mimari Ahşap Duvar Panel Sistemi"
            fill
            className={`object-cover transition-opacity duration-1500 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
            priority
          />
          {/* Cinematic grading */}
          <div className="absolute inset-0 bg-[#080806]/62" />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(196,169,106,0.05) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Atmospheric CSS overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none panel-lines" style={{ opacity: 0.4 }} />
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px z-10 hidden lg:block"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(196,169,106,0.18), transparent)",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: LUXURY_EASE }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-36 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #080806 0%, transparent 100%)" }}
        />

        <div className="relative z-20 w-full max-w-[1600px]">
          <motion.span
            className="font-sans text-[11px] tracking-[0.42em] uppercase section-label-gold block mb-8"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
          >
            — 04 Mimari Sistem Ailesi
          </motion.span>

          <div className="overflow-hidden mb-6">
            <motion.h1
              className="font-serif font-normal text-warm-white leading-none"
              style={{ fontSize: "clamp(72px, 13vw, 200px)" }}
              initial={{ y: "108%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.35, ease: LUXURY_EASE }}
            >
              Sistemler
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: LUXURY_EASE }}
          >
            <p className="font-sans text-[13.5px] text-stone/55 font-light max-w-sm leading-[1.9]">
              Duvardan tavana dört temel mimari sistem ailesi.
              Her biri kalıcı mimari değer inşa eder.
            </p>
            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-stone/12" />
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/35">
                1982&rsquo;den Beri
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 right-10 flex flex-col items-center gap-3 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="h-14 w-px overflow-hidden relative">
            <motion.div
              className="absolute inset-x-0 h-full bg-gradient-to-b from-bronze/45 via-bronze/20 to-transparent"
              animate={{ top: ["-100%", "100%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span
            className="font-sans text-[10px] tracking-[0.35em] uppercase text-stone/32"
            style={{ writingMode: "vertical-rl" }}
          >
            Kaydır
          </span>
        </motion.div>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* System sections */}
      {SYSTEMS.map((system, i) => (
        <SystemSection key={system.id} system={system} index={i} />
      ))}

      {/* Editorial mid-page image strip */}
      <div className="relative h-[40vw] max-h-[520px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616046229478-9901369a7a7c?auto=format&fit=crop&w=2400&q=80"
          alt="Mimari yüzey sistemi detay"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#080806]/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="font-sans text-[11px] tracking-[0.42em] uppercase section-label-gold block mb-4">
              — Fabrika Üretimi
            </span>
            <p className="font-serif text-[clamp(24px,4vw,56px)] font-normal text-warm-white/90 leading-tight max-w-xl mx-auto px-8">
              Her panel, ustalar tarafından<br />elle üretilir ve kontrol edilir
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #080806, transparent)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, #080806, transparent)" }}
        />
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#080806] py-36 px-8 md:px-16 text-center">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[11px] tracking-[0.42em] uppercase section-label-gold block mb-10">
            — Projenizi Başlatın
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 className="font-serif text-[clamp(40px,7vw,100px)] font-normal text-warm-white leading-none mb-10">
            Mimari Fikrinizi<br />
            <span className="text-stone/38">Birlikte Tasarlayalım</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="font-sans text-[13.5px] text-stone/52 font-light max-w-md mx-auto leading-[1.92] mb-14">
            Projenize en uygun sistemi birlikte belirliyoruz.
            Uzman danışmanlık, Fabrika ziyareti ve 3D görselleştirme ile başlıyoruz.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.42}>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-5 border border-bronze/28 px-12 py-5 font-sans text-[11px] tracking-[0.32em] uppercase text-stone/68 hover:text-warm-white hover:border-bronze/55 transition-all duration-400"
          >
            <span>Danışmanlık Talebi</span>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
