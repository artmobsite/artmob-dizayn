"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageInit from "@/components/layout/PageInit";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { PROJECTS } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";

const HERO_IMG = "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=2400&q=80";
const EDITORIAL_IMG = "https://images.unsplash.com/photo-1631761481249-ecc8bd8f5cc0?auto=format&fit=crop&w=2400&q=80";

const STATS = [
  { value: "200+", label: "Tamamlanan Proje" },
  { value: "12", label: "Şehir" },
  { value: "27", label: "Yıllık Deneyim" },
  { value: "8", label: "Ülke" },
];

function ProjectCard({
  project,
  size,
  index,
}: {
  project: (typeof PROJECTS)[number];
  size: "large" | "medium" | "small";
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-6%" });

  const aspectRatio =
    size === "large" ? "aspect-[16/9]" : size === "medium" ? "aspect-[4/5]" : "aspect-square";

  const card = (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden cursor-pointer group ${aspectRatio}`}
      initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.2, delay: index * 0.08, ease: LUXURY_EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 1.4, ease: LUXURY_EASE }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`object-cover transition-opacity duration-1000 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      {/* Cinematic overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: hovered
            ? "linear-gradient(to top, rgba(8,8,6,0.96) 0%, rgba(8,8,6,0.42) 45%, rgba(8,8,6,0.08) 100%)"
            : "linear-gradient(to top, rgba(8,8,6,0.75) 0%, rgba(8,8,6,0.15) 55%, transparent 100%)",
        }}
        transition={{ duration: 0.5 }}
      />
      {/* Gold glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: hovered
            ? "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(196,169,106,0.1) 0%, transparent 65%)"
            : "none",
        }}
        transition={{ duration: 0.4 }}
      />
      {/* Content */}
      <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-warm-white/45">
            {project.id}
          </span>
          <motion.span
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-bronze/62 bg-[#080806]/45 backdrop-blur-sm px-2.5 py-1"
            animate={{ opacity: hovered ? 1 : 0.7 }}
          >
            {project.category}
          </motion.span>
        </div>
        <div>
          <motion.h3
            className={`font-serif font-normal text-warm-white leading-tight mb-2 ${size === "large" ? "text-[clamp(30px,3.8vw,56px)]" : "text-2xl md:text-3xl"}`}
            animate={{ y: hovered ? -5 : 0 }}
            transition={{ duration: 0.5, ease: LUXURY_EASE }}
          >
            {project.name}
          </motion.h3>
          <span className="font-sans text-[10px] text-stone/38 font-light tracking-[0.08em]">
            {project.location}
          </span>
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{
              clipPath: hovered ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.42, ease: LUXURY_EASE, delay: hovered ? 0.05 : 0 }}
          >
            <p className="font-sans text-[11.5px] text-warm-white/62 font-light leading-relaxed pt-3 max-w-[340px]">
              {project.description}
            </p>
            <div className="flex items-center gap-2.5 pt-4">
              <div className="h-px w-5 bg-bronze/60" />
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-bronze/75">
                Projeyi İncele
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Corner accents */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-5 left-5 w-5 h-px bg-bronze/40" />
        <div className="absolute top-5 left-5 w-px h-5 bg-bronze/40" />
        <div className="absolute bottom-5 right-5 w-5 h-px bg-bronze/40" />
        <div className="absolute bottom-5 right-5 w-px h-5 bg-bronze/40" />
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none border"
        animate={{ borderColor: hovered ? "rgba(196,169,106,0.24)" : "rgba(196,169,106,0)" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );

  return project.slug ? (
    <Link href={`/projeler/${project.slug}`} className="block">
      {card}
    </Link>
  ) : card;
}

export default function ProjelerPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="bg-[#080806]">
      <PageInit />
      <Navbar />

      {/* Page Hero — cinematic image background */}
      <section className="relative min-h-[88vh] flex flex-col justify-end pb-24 px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        {/* Background photographic layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#201810] via-[#141008] to-[#080604]" />
          <Image
            src={HERO_IMG}
            alt="Mimari Ahşap Yüzey Proje Portföyü"
            fill
            className={`object-cover transition-opacity duration-1500 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
            priority
          />
          {/* Dual overlay for text protection */}
          <div className="absolute inset-0 bg-[#080806]/65" />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 75% 55% at 30% 80%, rgba(196,169,106,0.04) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* CSS overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none panel-lines" style={{ opacity: 0.35 }} />
        <div
          className="absolute bottom-0 left-0 right-0 h-44 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #080806 0%, transparent 100%)" }}
        />

        <div className="relative z-20 w-full">
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="font-serif font-normal text-warm-white leading-none"
              style={{ fontSize: "clamp(68px, 12vw, 190px)" }}
              initial={{ y: "108%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.35, ease: LUXURY_EASE }}
            >
              Projeler
            </motion.h1>
          </div>

          <motion.p
            className="font-sans text-[13.5px] text-stone/50 font-light max-w-sm leading-[1.92] mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.58, ease: LUXURY_EASE }}
          >
            Ankara&rsquo;dan Dünya&rsquo;ya yayılan mimari yüzey referansları.
            Konut, otel, AVM ve kurumsal ölçekli uygulamalar.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-10 md:gap-16 border-t border-stone/8 pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.75, ease: LUXURY_EASE }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-[clamp(36px,4vw,60px)] font-normal text-warm-white leading-none">
                  {stat.value}
                </div>
                <div className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/42 mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* Featured project — full width hero */}
      <section className="px-6 md:px-10 lg:px-16 pt-20 pb-4">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-6">
            — Öne Çıkan Proje
          </span>
        </ScrollReveal>
        <ProjectCard project={PROJECTS[0]} size="large" index={0} />
      </section>

      {/* Projects grid */}
      <section className="px-6 md:px-10 lg:px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {PROJECTS.slice(1).map((project, i) => (
            <ProjectCard key={project.id} project={project} size="medium" index={i + 1} />
          ))}
        </div>
      </section>

      {/* Full-width editorial image break */}
      <div className="relative h-[42vw] max-h-[560px] overflow-hidden mt-4">
        <Image
          src={EDITORIAL_IMG}
          alt="Mimari yüzey kurumsal uygulama"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#080806]/60" />
        {/* Centered editorial text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-2xl px-8">
            <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-5">
              — Her Ölçekte
            </span>
            <h2 className="font-serif text-[clamp(28px,5vw,72px)] font-normal text-warm-white/92 leading-tight">
              Tasarımdan üretime,<br />teslimatın her adımında
            </h2>
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

      {/* Project scope strip */}
      <section className="px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <ScrollReveal delay={0}>
          <div className="border-t border-stone/8 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            <div className="md:col-span-1">
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase section-label-gold block mb-5">
                — Proje Kapsamı
              </span>
              <h3 className="font-serif text-[clamp(28px,3.5vw,50px)] font-normal text-warm-white leading-tight">
                Her Ölçekte<br />Mükemmellik
              </h3>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: "Konut Mimari", desc: "Villalar, rezidanslar ve özel yaşam alanları için özelleştirilmiş duvar yüzey sistemleri." },
                { label: "Ticari Mimari", desc: "AVM, otel ve showroom gibi büyük ölçekli ticari mekânlar için özel çözümler." },
                { label: "Kurumsal Ofisler", desc: "Yönetim katları ve temsil mekânları için mat lake ve entegre kabin sistemleri." },
                { label: "Kültürel Mekânlar", desc: "Galeri, müze ve konferans merkezleri için sanatla bütünleşen mimari yüzeyler." },
              ].map((item) => (
                <div key={item.label} className="border-t border-stone/6 pt-5">
                  <h4 className="font-serif text-lg font-normal text-warm-white mb-3">{item.label}</h4>
                  <p className="font-sans text-[12px] text-stone/52 font-light leading-[1.9]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* CTA */}
      <section className="bg-[#080806] py-32 px-8 md:px-16 text-center">
        <ScrollReveal delay={0}>
          <span className="font-sans text-[10px] tracking-[0.5em] uppercase section-label-gold block mb-10">
            — Projenizi Paylaşın
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <h2 className="font-serif text-[clamp(38px,6.5vw,96px)] font-normal text-warm-white leading-none mb-8">
            Portföyümüze Sizin<br />
            <span className="text-stone/35">Projenizi Ekleyelim</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="font-sans text-[13.5px] text-stone/50 font-light max-w-md mx-auto leading-[1.92] mb-14">
            Projenizin ölçeği ve gereksinimleri ne olursa olsun,
            mimarınızla birlikte çalışarak en iyi sonucu üretiyoruz.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.42}>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-5 border border-bronze/28 px-12 py-5 font-sans text-[11px] tracking-[0.32em] uppercase text-stone/68 hover:text-warm-white hover:border-bronze/55 transition-all duration-400"
          >
            <span>Proje Görüşmesi Başlatın</span>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
