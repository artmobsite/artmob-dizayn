"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageInit from "@/components/layout/PageInit";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { MATERIALS } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=80";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Orman Seçimi",
    body: "Yalnızca sertifikalı sürdürülebilir ormanlardan temin edilen hammadde. Her ağaç, damar yapısı ve renk yoğunluğuna göre elle seçilir.",
  },
  {
    num: "02",
    title: "Kurutma & Stabilizasyon",
    body: "Hassas nem kontrolü altında 8–12 haftalık doğal kurutma. Boyutsal stabiliteyi garanti altına alır, çatlama ve büzülmeyi önler.",
  },
  {
    num: "03",
    title: "Yüzey İşlemi",
    body: "Fumed meşe, yağlı ceviz, mat lake veya ham beton görünümü — her yüzey işlemi Fabrikamızde özel formüllerle uygulanır.",
  },
  {
    num: "04",
    title: "Kalite Kontrol",
    body: "Her panel, montaj öncesi sertlik, renk tutarlılığı ve yüzey pürüzsüzlüğü testlerinden geçirilir. %100 kalite güvencesi.",
  },
];

function MaterialCard({
  material,
  index,
}: {
  material: (typeof MATERIALS)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden cursor-pointer group"
      style={{ aspectRatio: index === 0 ? "16/10" : "4/5" }}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.2, delay: index * 0.1, ease: LUXURY_EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient base */}
      <div className={`absolute inset-0 bg-gradient-to-br ${material.bg}`} />
      {/* CSS texture */}
      <div
        className="absolute inset-0 opacity-35"
        style={{ backgroundImage: material.texture, backgroundSize: "20px 20px" }}
      />
      {/* Photo */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 1.4, ease: LUXURY_EASE }}
      >
        <Image
          src={material.image}
          alt={material.name}
          fill
          className={`object-cover transition-opacity duration-1000 mix-blend-overlay ${imgLoaded ? "opacity-85" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      {/* Vignette */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: hovered
            ? "linear-gradient(to top, rgba(8,8,6,0.94) 0%, rgba(8,8,6,0.38) 50%, rgba(8,8,6,0.08) 100%)"
            : "linear-gradient(to top, rgba(8,8,6,0.80) 0%, rgba(8,8,6,0.18) 60%, transparent 100%)",
        }}
        transition={{ duration: 0.5 }}
      />
      {/* Gold spotlight on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: hovered
            ? "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(196,169,106,0.12) 0%, transparent 65%)"
            : "none",
        }}
        transition={{ duration: 0.4 }}
      />
      {/* Content */}
      <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="font-sans text-[11px] tracking-[0.32em] uppercase text-warm-white/52">
            {material.origin}
          </span>
          <motion.div
            className="w-5 h-5 border border-bronze/38 flex items-center justify-center"
            animate={{ opacity: hovered ? 1 : 0, rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.4, ease: LUXURY_EASE }}
          >
            <div className="w-1.5 h-px bg-bronze" />
          </motion.div>
        </div>
        <div>
          <motion.h3
            className="font-serif text-[clamp(24px,3vw,44px)] font-normal text-warm-white leading-tight mb-3"
            animate={{ y: hovered ? -6 : 0 }}
            transition={{ duration: 0.5, ease: LUXURY_EASE }}
          >
            {material.name}
          </motion.h3>
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{
              clipPath: hovered ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.45, ease: LUXURY_EASE }}
          >
            <p className="font-sans text-[12px] text-warm-white/65 font-light leading-relaxed max-w-[300px] pt-1">
              {material.description}
            </p>
            <div className="flex items-center gap-2.5 pt-4">
              <div className="h-px w-6 bg-bronze/60" />
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-bronze/75">
                Materyal Detayı
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Corner accents on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-4 left-4 w-5 h-px bg-bronze/45" />
        <div className="absolute top-4 left-4 w-px h-5 bg-bronze/45" />
        <div className="absolute bottom-4 right-4 w-5 h-px bg-bronze/45" />
        <div className="absolute bottom-4 right-4 w-px h-5 bg-bronze/45" />
      </motion.div>
    </motion.div>
  );
}

export default function MateryallerPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="bg-[#080806]">
      <PageInit />
      <Navbar />

      {/* Page Hero — cinematic image background */}
      <section className="relative min-h-[82vh] flex flex-col justify-end pb-24 px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        {/* Background photographic layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C1E10] via-[#180F08] to-[#0A0604]" />
          <Image
            src={HERO_IMG}
            alt="Premium Ahşap Materyal Dokusu"
            fill
            className={`object-cover transition-opacity duration-1500 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
            priority
          />
          <div className="absolute inset-0 bg-[#080806]/65" />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 50% at 55% 100%, rgba(124,96,56,0.08) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* CSS overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none panel-lines" style={{ opacity: 0.35 }} />
        <div
          className="absolute bottom-0 left-0 right-0 h-36 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #080806, transparent)" }}
        />

        <div className="relative z-20 w-full">
          <motion.span
            className="font-sans text-[10px] tracking-[0.5em] uppercase section-label-gold block mb-8"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
          >
            — Doğa &amp; Zanaat
          </motion.span>

          <div className="overflow-hidden mb-6">
            <motion.h1
              className="font-serif font-normal text-warm-white leading-none"
              style={{ fontSize: "clamp(64px, 12vw, 190px)" }}
              initial={{ y: "108%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.35, ease: LUXURY_EASE }}
            >
              Materyaller
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.58, ease: LUXURY_EASE }}
          >
            <p className="font-sans text-[13.5px] text-stone/52 font-light max-w-sm leading-[1.92]">
              Doğadan gelen hammadde, Fabrikamızde ustalıkla işlenir.
              Her materyal, mimari kimliğini mekâna taşır.
            </p>
            <div className="flex items-center gap-5">
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/32">
                05 Materyal Sistemi
              </span>
              <div className="h-px w-12 bg-stone/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* Materials showcase */}
      <section className="bg-[#080806] py-24 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {/* Featured material – full width */}
          <div className="md:col-span-2">
            <MaterialCard material={MATERIALS[0]} index={0} />
          </div>
          <MaterialCard material={MATERIALS[1]} index={1} />
          <MaterialCard material={MATERIALS[2]} index={2} />
          <MaterialCard material={MATERIALS[3]} index={3} />
          <MaterialCard material={MATERIALS[4]} index={4} />
        </div>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* Editorial image strip */}
      <div className="relative h-[35vw] max-h-[480px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?auto=format&fit=crop&w=2400&q=80"
          alt="Bronz profil ve ahşap materyal detayı"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#080806]/58" />
        <div className="absolute inset-0 flex items-center px-10 md:px-16 lg:px-24">
          <div className="max-w-lg">
            <span className="font-sans text-[11px] tracking-[0.38em] uppercase section-label-gold block mb-4">
              — Bronz &amp; Ahşap
            </span>
            <p className="font-serif text-[clamp(22px,3.5vw,48px)] font-normal text-warm-white/90 leading-tight">
              Metal ile ahşabın mükemmel birleşimi —<br />
              mimari detayda lüks
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #080806, transparent)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to top, #080806, transparent)" }}
        />
      </div>

      {/* Craftsmanship process */}
      <section className="bg-[#080806] py-28 md:py-36 px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 mb-20">
            <div>
              <ScrollReveal delay={0}>
                <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-8">
                  — Üretim Süreci
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <h2 className="font-serif text-[clamp(36px,5.5vw,80px)] font-normal text-warm-white leading-tight">
                  Ağaçtan<br />Duvara
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.22}>
              <p className="font-sans text-[13.5px] text-stone/58 font-light leading-[1.92] lg:pt-20">
                Her materyal, ham orman ürününden mimari yüzey sistemine dönüşene kadar
                titiz bir süreçten geçer. Sürdürülebilir kaynaklardan başlayan bu yolculuk,
                Fabrikamızde ustalıkla sona erer.
              </p>
            </ScrollReveal>
          </div>
          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="border-t border-stone/8 pt-7">
                  <span className="font-serif text-[52px] font-light text-stone/[0.07] leading-none block mb-4 select-none">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-warm-white mb-4">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[12.5px] text-stone/55 font-light leading-[1.9]">
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* CTA */}
      <section className="bg-[#080806] py-32 px-8 md:px-16 text-center">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[10px] tracking-[0.5em] uppercase section-label-gold block mb-10">
            — Materyal Danışmanlığı
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <h2 className="font-serif text-[clamp(38px,6.5vw,96px)] font-normal text-warm-white leading-none mb-8">
            Doğru Materyali<br />
            <span className="text-stone/35">Birlikte Seçelim</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.28}>
          <p className="font-sans text-[13.5px] text-stone/50 font-light max-w-md mx-auto leading-[1.92] mb-14">
            Fabrikamızde fiziksel materyal örnekleriyle sunum yapıyor,
            mekânınıza en uygun yüzey kombinasyonunu belirliyoruz.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-4 bg-warm-white text-deep-black px-10 py-4 font-sans text-[11px] tracking-[0.28em] uppercase hover:bg-stone/90 transition-colors duration-300"
            >
              Fabrika Randevusu
            </Link>
            <Link
              href="/projeler"
              className="inline-flex items-center gap-4 border border-stone/15 px-10 py-4 font-sans text-[11px] tracking-[0.28em] uppercase text-stone/60 hover:text-warm-white hover:border-stone/30 transition-all duration-300"
            >
              Projeleri İncele
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
