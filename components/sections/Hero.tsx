"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { BRAND, HERO } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";
import { useLoading } from "@/components/providers/LoadingProvider";
import MagneticButton from "@/components/animations/MagneticButton";

const ArchitecturalWallVisual = dynamic(
  () => import("@/components/ui/ArchitecturalWallVisual"),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full h-full"
        style={{ background: "linear-gradient(135deg, #2C1E14, #1A1208, #0A0806)" }}
      />
    ),
  }
);

export default function Hero() {
  const { isLoaded } = useLoading();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const t = setTimeout(() => setShow(true), 180);
      return () => clearTimeout(t);
    }
  }, [isLoaded]);

  return (
    <section className="relative min-h-dvh bg-[#080806] overflow-hidden">

      {/* Atmospheric radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 62% 45%, rgba(196,169,106,0.045) 0%, transparent 65%), " +
            "radial-gradient(ellipse 50% 40% at 15% 80%, rgba(232,224,213,0.025) 0%, transparent 55%)",
        }}
      />

      {/* Architectural fine grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,224,213,1) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(232,224,213,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.014,
        }}
      />

      {/* Left accent line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/20 to-transparent hidden lg:block"
        initial={{ scaleY: 0 }}
        animate={show ? { scaleY: 1 } : {}}
        transition={{ duration: 1.8, delay: 0.3, ease: LUXURY_EASE }}
        style={{ originY: 0 }}
      />

      {/* Main layout */}
      <div className="relative z-10 w-full min-h-dvh grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">

        {/* Left: Typography */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 pt-28 pb-16 lg:pt-0 lg:pb-0 lg:pr-8">

          {/* Eyebrow meta bar */}
          <motion.div
            className="flex items-center gap-0 mb-12 md:mb-14"
            initial={{ opacity: 0 }}
            animate={show ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            {HERO.eyebrow.map((item, i) => (
              <motion.span
                key={item}
                className="font-sans text-[11px] tracking-[0.32em] uppercase text-stone/55 hover:text-bronze/80 transition-colors duration-300"
                initial={{ opacity: 0, y: -8 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              >
                {item}
                {i < HERO.eyebrow.length - 1 && (
                  <span className="mx-3 text-bronze/18">·</span>
                )}
              </motion.span>
            ))}
          </motion.div>

          {/* Brand name */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              className="font-brand leading-[0.88] tracking-[0.06em] text-warm-white font-extrabold"
              style={{ fontSize: "clamp(72px, 10vw, 140px)" }}
              initial={{ y: "105%", opacity: 0 }}
              animate={show ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 1.15, delay: 0.18, ease: LUXURY_EASE }}
            >
              {BRAND.name}
            </motion.h1>
          </div>

          {/* Tagline */}
          <div className="overflow-hidden mb-10">
            <motion.p
              className="font-serif text-stone/72 leading-tight tracking-[0.015em]"
              style={{ fontSize: "clamp(18px, 2.4vw, 34px)" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={show ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.32, ease: LUXURY_EASE }}
            >
              {BRAND.tagline}
            </motion.p>
          </div>

          {/* Divider */}
          <motion.div
            className="flex items-center gap-5 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={show ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.46, ease: LUXURY_EASE }}
            style={{ originX: 0 }}
          >
            <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, rgba(196,169,106,0.55), rgba(232,213,168,0.35))" }} />
            <span className="font-sans text-[11px] tracking-[0.32em] uppercase section-label-gold">
              {HERO.atelierLabel}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="font-sans text-[13.5px] leading-[1.95] text-stone/68 max-w-[360px] mb-12 font-light"
            initial={{ opacity: 0, y: 12 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.54, ease: LUXURY_EASE }}
          >
            {BRAND.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.68, ease: LUXURY_EASE }}
          >
            <MagneticButton>
              <Link href="/projeler">
                <div className="group relative overflow-hidden bg-warm-white text-deep-black text-[11px] tracking-[0.22em] uppercase font-sans font-medium px-8 py-4 transition-colors duration-500">
                  <span className="relative z-10 group-hover:text-warm-white transition-colors duration-350">
                    {HERO.ctaPrimary}
                  </span>
                  <span className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                </div>
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="#philosophy"
                className="group flex items-center gap-3 font-sans text-[11px] tracking-[0.22em] uppercase text-stone/58 hover:text-warm-white/85 transition-colors duration-350"
              >
                <span>{HERO.ctaSecondary}</span>
                <motion.span
                  className="block h-px bg-current"
                  initial={{ width: "16px" }}
                  whileHover={{ width: "32px" }}
                  transition={{ duration: 0.4, ease: LUXURY_EASE }}
                />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Bottom left info strip */}
          <motion.div
            className="absolute bottom-10 left-8 md:left-12 lg:left-16 xl:left-20 items-center gap-5 hidden md:flex opacity-60"
            initial={{ opacity: 0 }}
            animate={show ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="h-px w-5 bg-stone/30" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/55">
              {BRAND.since}
            </span>
          </motion.div>
        </div>

        {/* Right: Architectural wall visual */}
        <div className="relative">
          <motion.div
            className="h-[60vw] lg:h-full lg:min-h-dvh w-full"
            initial={{ opacity: 0 }}
            animate={show ? { opacity: 1 } : {}}
            transition={{ duration: 1.8, delay: 0.22, ease: LUXURY_EASE }}
          >
            <ArchitecturalWallVisual />
          </motion.div>

          {/* Vertical system label */}
          <motion.div
            className="absolute right-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
            initial={{ opacity: 0, x: 14 }}
            animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 1.05, ease: LUXURY_EASE }}
          >
            <div className="h-14 w-px bg-gradient-to-b from-transparent via-stone/18 to-transparent" />
            <span
              className="font-sans text-[11px] tracking-[0.35em] uppercase text-stone/45"
              style={{ writingMode: "vertical-rl" }}
            >
              {HERO.productLabel}
            </span>
            <div className="h-14 w-px bg-gradient-to-b from-stone/18 via-stone/8 to-transparent" />
          </motion.div>

          {/* Left bleed gradient */}
          <div
            className="absolute inset-y-0 left-0 w-20 pointer-events-none hidden lg:block"
            style={{
              background: "linear-gradient(90deg, #080806 0%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 1.2 }}
      >
        <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-stone-dark/25">
          {HERO.scrollLabel}
        </span>
        <div className="relative h-10 w-px overflow-hidden">
          <motion.div
            className="absolute inset-x-0 bg-gradient-to-b from-stone/35 via-stone/15 to-transparent"
            animate={{ top: ["-100%", "100%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.3,
            }}
            style={{ height: "100%" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
