"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SYSTEMS } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

function SystemCard({
  system,
  size,
  delay,
}: {
  system: (typeof SYSTEMS)[number];
  size: "large" | "small";
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <Link href={`/sistemler/${system.slug}`} className="block">
    <motion.div
      ref={ref}
      className={`relative overflow-hidden cursor-pointer ${
        size === "large" ? "aspect-[3/4] lg:aspect-[4/5]" : "aspect-square"
      }`}
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 1.2, delay, ease: LUXURY_EASE }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Gradient base while image loads */}
      <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} ${!loaded ? "img-shimmer" : ""}`} />

      {/* Image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 1.2, ease: LUXURY_EASE }}
      >
        <Image
          src={system.image}
          alt={system.name}
          fill
          sizes={size === "large" ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
          className={`object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          priority={size === "large"}
        />
      </motion.div>

      {/* Color grade overlay */}
      <div className="absolute inset-0 bg-[#080806]/20 mix-blend-multiply pointer-events-none" />

      {/* Gradient vignette */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: hovered
            ? "linear-gradient(to top, rgba(8,8,6,0.90) 0%, rgba(8,8,6,0.28) 55%, rgba(8,8,6,0.08) 100%)"
            : "linear-gradient(to top, rgba(8,8,6,0.72) 0%, rgba(8,8,6,0.12) 55%, transparent 100%)",
        }}
        transition={{ duration: 0.55 }}
      />

      {/* Cursor spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: hovered
            ? `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(196,169,106,0.14) 0%, transparent 55%)`
            : "none",
        }}
        transition={{ duration: 0.08 }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <motion.span
            className="font-sans text-[10px] tracking-[0.32em] uppercase text-warm-white/70"
            animate={{ opacity: hovered ? 0.92 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {system.category}
          </motion.span>

          <motion.span
            className="font-serif font-light text-warm-white leading-none select-none"
            style={{ fontSize: size === "large" ? "68px" : "48px", opacity: 0.16 }}
            animate={{ opacity: hovered ? 0.07 : 0.16, x: hovered ? 8 : 0 }}
            transition={{ duration: 0.7, ease: LUXURY_EASE }}
          >
            {system.id}
          </motion.span>
        </div>

        <div>
          <div className="overflow-hidden">
            <motion.h3
              className={`font-serif font-normal text-warm-white leading-tight ${
                size === "large" ? "text-3xl md:text-[2.2rem]" : "text-2xl"
              }`}
              animate={{ y: hovered ? -7 : 0 }}
              transition={{ duration: 0.55, ease: LUXURY_EASE }}
            >
              {system.name}
            </motion.h3>
          </div>

          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{
              clipPath: hovered ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.48, ease: LUXURY_EASE, delay: hovered ? 0.04 : 0 }}
          >
            <p className="font-sans text-[11.5px] text-warm-white/75 font-light leading-relaxed pt-2.5 max-w-[280px]">
              {system.description}
            </p>
            <div className="flex items-center gap-2.5 pt-4">
              <motion.div
                className="h-px bg-bronze/65"
                animate={{ width: hovered ? "26px" : "0px" }}
                transition={{ duration: 0.42, delay: 0.18, ease: LUXURY_EASE }}
              />
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-bronze/80">
                İncele
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner accents */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute top-5 left-5 w-5 h-px bg-bronze/50" />
        <div className="absolute top-5 left-5 w-px h-5 bg-bronze/50" />
        <div className="absolute bottom-5 right-5 w-5 h-px bg-bronze/50" />
        <div className="absolute bottom-5 right-5 w-px h-5 bg-bronze/50" />
      </motion.div>

      {/* Border highlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ borderColor: hovered ? "rgba(196,169,106,0.28)" : "rgba(196,169,106,0)" }}
        style={{ border: "1px solid transparent" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
    </Link>
  );
}

export default function Collections() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="systems"
      ref={sectionRef}
      className="bg-deep-black py-24 md:py-32 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
        <div>
          <ScrollReveal delay={0}>
            <span className="font-sans text-[11px] tracking-[0.35em] uppercase block mb-5 section-label-gold">
              — Mimari Sistemler
            </span>
          </ScrollReveal>
          <TextReveal
            text="Yüzey Sistemleri"
            tag="h2"
            className="font-serif text-[clamp(40px,6vw,80px)] font-normal text-warm-white leading-none"
          />
        </div>
        <ScrollReveal delay={0.2}>
          <p className="font-sans text-[13.5px] text-stone/68 font-light max-w-xs leading-[1.85]">
            Dört ana sistem ailesi. Her biri, mekânın yapısal anlatısını
            tamamlamak için tasarlandı.
          </p>
        </ScrollReveal>
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        <div className="lg:col-span-2 lg:row-span-2">
          <SystemCard system={SYSTEMS[0]} size="large" delay={0.1} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
          <SystemCard system={SYSTEMS[1]} size="small" delay={0.2} />
          <SystemCard system={SYSTEMS[2]} size="small" delay={0.3} />
        </div>
      </div>

      {/* Fourth system + view all */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
        <div className="md:col-span-1">
          <SystemCard system={SYSTEMS[3]} size="small" delay={0.4} />
        </div>
        <div className="md:col-span-2 flex items-center justify-center">
          <ScrollReveal delay={0.35}>
            <div className="text-center">
              <div className="font-serif text-5xl md:text-7xl font-light text-stone/[0.05] mb-4 select-none">
                04
              </div>
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.25em] uppercase text-stone/65 hover:text-warm-white transition-colors duration-400"
              >
                <span>Tüm Sistemler</span>
                <motion.span
                  className="block h-px w-6 bg-current"
                  whileHover={{ width: "48px" }}
                  transition={{ duration: 0.35, ease: LUXURY_EASE }}
                />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
