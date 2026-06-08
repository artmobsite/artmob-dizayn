"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageInit from "@/components/layout/PageInit";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { BRAND } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";

const INSTAGRAM_HANDLE = "artmobdizayn";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

const INSTAGRAM_POSTS = [
  {
    src: "/images/felsefe-gorunmez-mukemmellik.jpg",
    alt: "Entegre dolap ve aydınlatma sistemi",
    caption: "Bronz profil detay · Ankara Siteler",
  },
  {
    src: "/images/materyal-koyu-ceviz.jpg",
    alt: "Fabrikade ceviz ahşap işleme",
    caption: "El işçiliği · Ankara Siteler",
  },
  {
    src: "/images/materyal-bronz-profil.jpg",
    alt: "Bronz profil üretimi",
    caption: "Bronz profil sistemi · Ankara Siteler",
  },
  {
    src: "/images/materyal-mat-lake.jpg",
    alt: "Mat lake yüzey uygulaması",
    caption: "Mat lake bitiş · Ankara Siteler",
  },
  {
    src: "/images/materyal-ham-beton.jpg",
    alt: "Ham beton panel üretimi",
    caption: "Beton dokulu panel · Ankara Siteler",
  },
  {
    src: "https://images.unsplash.com/photo-1631761481249-ecc8bd8f5cc0?auto=format&fit=crop&w=600&q=85",
    alt: "Duman meşesi duvar paneli",
    caption: "Duman meşesi kaplama · Ankara Siteler",
  },
];

const WHATSAPP_NUMBER = "905306835725";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const WHATSAPP_MESSAGES = [
  "Merhaba, proje danışmanlığı almak istiyorum.",
  "Fabrika ziyareti için randevu almak istiyorum.",
  "Malzeme ve fiyat teklifi hakkında bilgi almak istiyorum.",
];

function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function InstagramPost({ src, alt, caption, index }: { src: string; alt: string; caption: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <ScrollReveal delay={0.05 + index * 0.07}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-square overflow-hidden group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title={caption}
      >
        {/* Shimmer */}
        <div className={`absolute inset-0 bg-[#1A1612] ${!loaded ? "img-shimmer" : ""}`} />

        {/* Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
            sizes="(max-width: 768px) 50vw, 16vw"
          />
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          animate={{
            background: hovered
              ? "rgba(8,8,6,0.72)"
              : "rgba(8,8,6,0)",
          }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.3, delay: hovered ? 0.05 : 0 }}
            className="flex flex-col items-center gap-2.5 px-3 text-center"
          >
            <InstagramIcon size={20} />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-warm-white/85 leading-snug max-w-[120px]">
              {caption}
            </span>
          </motion.div>
        </motion.div>

        {/* Corner accent on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-2.5 left-2.5 w-4 h-px bg-bronze/55" />
          <div className="absolute top-2.5 left-2.5 w-px h-4 bg-bronze/55" />
          <div className="absolute bottom-2.5 right-2.5 w-4 h-px bg-bronze/55" />
          <div className="absolute bottom-2.5 right-2.5 w-px h-4 bg-bronze/55" />
        </motion.div>
      </a>
    </ScrollReveal>
  );
}

const HERO_IMG = "/images/sistem-01-duvar-panelleri.jpg";
const ATELIER_IMG = "/images/materyal-koyu-ceviz.jpg";

const PROJECT_TYPES = [
  "Konut / Rezidans",
  "Otel / Konaklama",
  "AVM / Ticari",
  "Kurumsal Ofis",
  "Kültürel Mekan",
  "Diğer",
];

function FloatingInput({
  label,
  type = "text",
  required = false,
  id,
}: {
  label: string;
  type?: string;
  required?: boolean;
  id: string;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-0 font-sans font-light transition-all duration-300 pointer-events-none ${
          active
            ? "text-[11px] tracking-[0.25em] uppercase section-label-gold top-0"
            : "text-[13px] text-stone/45 top-4"
        }`}
      >
        {label}
        {required && <span className="text-bronze/60 ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-b pt-6 pb-3 font-sans text-[13.5px] text-warm-white font-light outline-none transition-colors duration-300"
        style={{
          borderBottomColor: focused
            ? "rgba(196,169,106,0.55)"
            : "rgba(232,224,213,0.12)",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{
          background: "linear-gradient(90deg, rgba(196,169,106,0.8), rgba(232,213,168,0.5), rgba(196,169,106,0.8))",
        }}
        animate={{ width: focused ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease: LUXURY_EASE }}
      />
    </div>
  );
}

function FloatingTextarea({
  label,
  id,
  required = false,
}: {
  label: string;
  id: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-0 font-sans font-light transition-all duration-300 pointer-events-none ${
          active
            ? "text-[11px] tracking-[0.25em] uppercase section-label-gold top-0"
            : "text-[13px] text-stone/45 top-4"
        }`}
      >
        {label}
        {required && <span className="text-bronze/60 ml-1">*</span>}
      </label>
      <textarea
        id={id}
        required={required}
        rows={5}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-b pt-7 pb-3 font-sans text-[13.5px] text-warm-white font-light outline-none resize-none transition-colors duration-300"
        style={{
          borderBottomColor: focused
            ? "rgba(196,169,106,0.55)"
            : "rgba(232,224,213,0.12)",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{
          background: "linear-gradient(90deg, rgba(196,169,106,0.8), rgba(232,213,168,0.5), rgba(196,169,106,0.8))",
        }}
        animate={{ width: focused ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease: LUXURY_EASE }}
      />
    </div>
  );
}

export default function IletisimPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-[#080806]">
      <PageInit />
      <Navbar />

      {/* Page Hero — cinematic image background */}
      <section className="relative min-h-[72vh] flex flex-col justify-end pb-20 px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        {/* Background photographic layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#181614] via-[#0E0C0A] to-[#080806]" />
          <Image
            src={HERO_IMG}
            alt="ARTMOB DİZAYN Mimari Fabrika"
            fill
            className={`object-cover transition-opacity duration-1500 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
            priority
          />
          <div className="absolute inset-0 bg-[#080806]/68" />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 20% 100%, rgba(196,169,106,0.038) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* CSS overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none panel-lines" style={{ opacity: 0.35 }} />
        {/* Vertical accent */}
        <motion.div
          className="absolute right-[33%] top-0 bottom-0 w-px z-10 hidden lg:block"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(232,224,213,0.045), transparent)",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2.2, delay: 0.4, ease: LUXURY_EASE }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #080806, transparent)" }}
        />

        <div className="relative z-20 w-full">
          <motion.span
            className="font-sans text-[11px] tracking-[0.42em] uppercase section-label-gold block mb-8"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
          >
            — Mimari Danışmanlık
          </motion.span>

          <div className="overflow-hidden mb-6">
            <motion.h1
              className="font-serif font-normal text-warm-white leading-none"
              style={{ fontSize: "clamp(64px, 12vw, 185px)" }}
              initial={{ y: "108%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.25, delay: 0.35, ease: LUXURY_EASE }}
            >
              İletişim
            </motion.h1>
          </div>

          <motion.p
            className="font-sans text-[13.5px] text-stone/50 font-light max-w-xs leading-[1.92]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.58, ease: LUXURY_EASE }}
          >
            Projenizi anlatın. Uzman ekibimiz 24 saat içinde
            size özel bir danışmanlık planıyla geri dönecektir.
          </motion.p>
        </div>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* Instagram Section */}
      <section className="px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <ScrollReveal delay={0}>
              <span className="font-sans text-[10px] tracking-[0.45em] uppercase section-label-gold block mb-5">
                — Sosyal Medya
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <span className="text-stone/45 group-hover:text-bronze/80 transition-colors duration-300">
                  <InstagramIcon size={22} />
                </span>
                <span className="font-serif text-[clamp(26px,3.5vw,44px)] font-normal text-warm-white/90 group-hover:text-warm-white transition-colors duration-300 leading-none">
                  @{INSTAGRAM_HANDLE}
                </span>
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 border border-bronze/25 px-8 py-3.5 font-sans text-[10px] tracking-[0.3em] uppercase text-stone/58 hover:text-warm-white hover:border-bronze/55 transition-all duration-400"
            >
              <InstagramIcon size={13} />
              <span>Takip Et</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5">
          {INSTAGRAM_POSTS.map((post, i) => (
            <InstagramPost key={post.src} {...post} index={i} />
          ))}
        </div>

        {/* Bottom tag line */}
        <ScrollReveal delay={0.5}>
          <div className="mt-8 flex items-center gap-5">
            <div className="h-px flex-1 bg-stone/6" />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/30 hover:text-stone/55 transition-colors duration-300"
            >
              Tüm gönderileri gör
            </a>
            <div className="h-px flex-1 bg-stone/6" />
          </div>
        </ScrollReveal>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* WhatsApp Section */}
      <section className="px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: info + quick messages */}
          <div>
            <ScrollReveal>
              <span className="font-sans text-[11px] tracking-[0.38em] uppercase section-label-gold block mb-5">
                — WhatsApp
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(30px,4vw,56px)] font-normal text-warm-white leading-none mb-7">
                Hızlı İletişim
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <p className="font-sans text-[13.5px] text-stone/55 font-light leading-[1.85] max-w-sm mb-10">
                Projenizi WhatsApp üzerinden anlatın. Ekibimiz genellikle
                2 saat içinde yanıt verir. Hızlı sorular, materyal önerileri
                veya Fabrika randevusu için ideal.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/35 mb-4">
                Hızlı Mesaj Şablonları
              </p>
              <div className="space-y-2.5">
                {WHATSAPP_MESSAGES.map((msg, i) => (
                  <motion.a
                    key={i}
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 border border-stone/10 px-5 py-4 group transition-all duration-300 hover:border-bronze/30 hover:bg-bronze/[0.04]"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: LUXURY_EASE }}
                  >
                    <span className="mt-0.5 shrink-0 text-stone/28 group-hover:text-[#25D366]/55 transition-colors duration-300">
                      <WhatsAppIcon size={13} />
                    </span>
                    <span className="font-sans text-[12px] text-stone/52 group-hover:text-warm-white/75 transition-colors duration-300 font-light leading-snug">
                      {msg}
                    </span>
                    <span className="ml-auto shrink-0 font-sans text-[11px] tracking-[0.18em] uppercase text-stone/22 group-hover:text-bronze/50 transition-colors duration-300 self-center">
                      Gönder →
                    </span>
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: CTA card */}
          <ScrollReveal delay={0.3}>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-center justify-center gap-9 border border-stone/10 p-12 md:p-16 text-center overflow-hidden group"
              whileHover="hovered"
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={{
                  hovered: {
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,211,102,0.045) 0%, transparent 70%)",
                  },
                }}
                initial={{ background: "none" }}
                transition={{ duration: 0.55 }}
              />

              {/* Icon */}
              <motion.div
                className="text-stone/28 group-hover:text-[#25D366]/60 transition-colors duration-500"
                variants={{ hovered: { scale: 1.08 } }}
                transition={{ duration: 0.5, ease: LUXURY_EASE }}
              >
                <WhatsAppIcon size={56} />
              </motion.div>

              {/* Number */}
              <div>
                <p className="font-serif text-[1.75rem] md:text-[2rem] font-normal text-warm-white/88 leading-none mb-2">
                  {BRAND.phone}
                </p>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone/38">
                  WhatsApp ile aç
                </p>
              </div>

              {/* CTA pill */}
              <div className="inline-flex items-center gap-3 border border-[#25D366]/20 bg-[#25D366]/8 px-8 py-3.5 group-hover:border-[#25D366]/40 group-hover:bg-[#25D366]/14 transition-all duration-400">
                <WhatsAppIcon size={13} className="text-[#25D366]/65 group-hover:text-[#25D366]/90 transition-colors duration-300" />
                <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#25D366]/65 group-hover:text-[#25D366]/90 transition-colors duration-300">
                  Hemen Yaz
                </span>
              </div>

              {/* Response time note */}
              <p className="font-sans text-[11px] tracking-[0.12em] text-stone/28">
                Genellikle 2 saat içinde yanıt
              </p>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-4 h-px bg-bronze/20 group-hover:bg-bronze/40 transition-colors duration-400" />
              <div className="absolute top-4 left-4 w-px h-4 bg-bronze/20 group-hover:bg-bronze/40 transition-colors duration-400" />
              <div className="absolute bottom-4 right-4 w-4 h-px bg-bronze/20 group-hover:bg-bronze/40 transition-colors duration-400" />
              <div className="absolute bottom-4 right-4 w-px h-4 bg-bronze/20 group-hover:bg-bronze/40 transition-colors duration-400" />
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* Main contact section */}
      <section className="px-8 md:px-12 lg:px-16 xl:px-20 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 lg:gap-24">

          {/* Contact form */}
          <div>
            <ScrollReveal delay={0}>
              <span className="font-sans text-[11px] tracking-[0.38em] uppercase section-label-gold block mb-10">
                — Proje Formu
              </span>
            </ScrollReveal>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-10"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: LUXURY_EASE }}
                >
                  <ScrollReveal delay={0.1}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <FloatingInput id="name" label="Ad Soyad" required />
                      <FloatingInput id="company" label="Firma / Fabrika" />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.18}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <FloatingInput id="email" label="E-posta Adresi" type="email" required />
                      <FloatingInput id="phone" label="Telefon" type="tel" />
                    </div>
                  </ScrollReveal>

                  {/* Project type */}
                  <ScrollReveal delay={0.26}>
                    <div>
                      <span className="font-sans text-[11px] tracking-[0.25em] uppercase section-label-gold block mb-5">
                        Proje Türü
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {PROJECT_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className="font-sans text-[10px] tracking-[0.18em] uppercase px-4 py-2.5 border transition-all duration-300"
                            style={{
                              borderColor:
                                selectedType === type
                                  ? "rgba(196,169,106,0.55)"
                                  : "rgba(232,224,213,0.1)",
                              color:
                                selectedType === type
                                  ? "rgba(196,169,106,0.9)"
                                  : "rgba(232,224,213,0.4)",
                              background:
                                selectedType === type
                                  ? "rgba(196,169,106,0.07)"
                                  : "transparent",
                            }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.32}>
                    <FloatingInput id="area" label="Tahmini Yüzey Alanı (m²)" />
                  </ScrollReveal>

                  <ScrollReveal delay={0.38}>
                    <FloatingTextarea id="message" label="Projenizi Anlatın" required />
                  </ScrollReveal>

                  <ScrollReveal delay={0.46}>
                    <div className="flex items-center justify-between pt-2">
                      <p className="font-sans text-[11px] text-stone/35 font-light">
                        * zorunlu alan
                      </p>
                      <motion.button
                        type="submit"
                        className="group relative overflow-hidden bg-warm-white text-deep-black font-sans text-[11px] tracking-[0.28em] uppercase px-10 py-4 font-medium transition-colors duration-500"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="relative z-10 group-hover:text-warm-white transition-colors duration-350">
                          Talebi Gönder
                        </span>
                        <span className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                      </motion.button>
                    </div>
                  </ScrollReveal>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="py-16"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: LUXURY_EASE }}
                >
                  <div className="w-12 h-px bg-bronze/50 mb-10" />
                  <h3 className="font-serif text-[clamp(28px,4vw,52px)] font-normal text-warm-white mb-6">
                    Talebiniz Alındı
                  </h3>
                  <p className="font-sans text-[13.5px] text-stone/55 font-light leading-[1.92] max-w-sm mb-10">
                    Ekibimiz 24 saat içinde sizinle iletişime geçecektir.
                    Acil durumlar için arayabilirsiniz.
                  </p>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="font-sans text-[13px] text-bronze/75 hover:text-bronze transition-colors duration-300"
                  >
                    {BRAND.phone}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Info sidebar */}
          <div className="lg:border-l lg:border-stone/8 lg:pl-12">
            <ScrollReveal delay={0.1}>
              <span className="font-sans text-[11px] tracking-[0.38em] uppercase section-label-gold block mb-10">
                — Fabrika Bilgileri
              </span>
            </ScrollReveal>

            <div className="space-y-12">
              <ScrollReveal delay={0.2}>
                <div>
                  <h4 className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/35 mb-4">Adres</h4>
                  <address className="not-italic font-sans text-[13.5px] text-stone/68 font-light leading-[1.92] whitespace-pre-line">
                    {BRAND.address}
                  </address>
                  <p className="font-sans text-[11px] text-stone/38 font-light tracking-[0.1em] mt-2">
                    {BRAND.city}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.28}>
                <div>
                  <h4 className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/35 mb-4">Telefon</h4>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="font-sans text-[14px] text-stone/68 font-light hover:text-warm-white transition-colors duration-300"
                  >
                    {BRAND.phone}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.36}>
                <div>
                  <h4 className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/35 mb-4">E-posta</h4>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="font-sans text-[13.5px] text-bronze/72 font-light hover:text-bronze transition-colors duration-300"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.44}>
                <div>
                  <h4 className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/35 mb-4">Çalışma Saatleri</h4>
                  <div className="font-sans text-[13px] text-stone/58 font-light space-y-1.5 leading-relaxed">
                    <p>Pazartesi — Cuma: 09:00 — 18:00</p>
                    <p>Cumartesi: 10:00 — 15:00</p>
                    <p className="text-stone/35">Pazar: Kapalı</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Atelier image */}
              <ScrollReveal delay={0.52}>
                <div>
                  <h4 className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/35 mb-4">Fabrika</h4>
                  <div className="relative h-52 overflow-hidden border border-stone/8">
                    <Image
                      src={ATELIER_IMG}
                      alt="ARTMOB DİZAYN Fabrikasi"
                      fill
                      className="object-cover"
                      sizes="420px"
                    />
                    <div className="absolute inset-0 bg-[#080806]/45" />
                    <div className="absolute bottom-4 left-4">
                      <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone/50">
                        Altındağ · Ankara
                      </span>
                    </div>
                    {/* Corner accents */}
                    <div className="absolute top-3 left-3 w-4 h-px bg-bronze/40" />
                    <div className="absolute top-3 left-3 w-px h-4 bg-bronze/40" />
                    <div className="absolute bottom-3 right-3 w-4 h-px bg-bronze/40" />
                    <div className="absolute bottom-3 right-3 w-px h-4 bg-bronze/40" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Map */}
              <ScrollReveal delay={0.58}>
                <div>
                  <h4 className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/35 mb-4">Konum</h4>
                  <a
                    href="https://maps.google.com/?q=Demirhendek+Caddesi+163/2+Altındağ+Ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div
                      className="relative h-40 overflow-hidden border border-stone/8 group-hover:border-bronze/30 transition-colors duration-400"
                      style={{
                        background: "linear-gradient(135deg, #141210 0%, #0E0C08 50%, #121008 100%)",
                      }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(212,175,55,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.07) 1px, transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-px bg-stone/6" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-px bg-stone/6" />
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                        <div className="w-3 h-3 rounded-full border-2 border-bronze/65 bg-bronze/22 group-hover:border-bronze group-hover:bg-bronze/35 transition-all duration-400" />
                        <div className="w-px h-5 bg-bronze/38" />
                        <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone/38 mt-0.5">
                          Altındağ, Ankara
                        </span>
                      </div>
                      {/* "Haritada Aç" label on hover */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-bronze/65">
                          Haritada Aç ↗
                        </span>
                      </div>
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, rgba(8,8,6,0.72) 100%)",
                        }}
                      />
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gold rule */}
      <div className="h-px w-full gold-rule" />

      {/* Consultation CTA */}
      <section className="py-28 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-sans text-[11px] tracking-[0.38em] uppercase section-label-gold block mb-8">
                  — Fabrika Ziyareti
                </span>
                <h2 className="font-serif text-[clamp(36px,5.5vw,76px)] font-normal text-warm-white leading-tight">
                  Materyalleri Elinizde<br />Hissedin
                </h2>
              </div>
              <div className="lg:pl-10">
                <p className="font-sans text-[13.5px] text-stone/55 font-light leading-[1.92] mb-10">
                  Ankara Altındağ Fabrikamızde fiziksel materyal örnekleri, 3D görselleştirme
                  ve uzman mimari danışmanlıkla projenizi birlikte şekillendiriyoruz.
                  Randevu için formu doldurun veya doğrudan arayın.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`tel:${BRAND.phone}`}
                    className="inline-flex items-center gap-3 bg-warm-white text-deep-black px-8 py-4 font-sans text-[11px] tracking-[0.25em] uppercase hover:bg-stone/90 transition-colors duration-300"
                  >
                    {BRAND.phone}
                  </Link>
                  <Link
                    href={`mailto:${BRAND.email}`}
                    className="inline-flex items-center gap-3 border border-stone/15 px-8 py-4 font-sans text-[11px] tracking-[0.25em] uppercase text-stone/58 hover:text-warm-white hover:border-stone/30 transition-all duration-300"
                  >
                    E-posta Gönder
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
