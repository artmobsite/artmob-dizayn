"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { LUXURY_EASE } from "@/lib/animations";
import MagneticButton from "@/components/animations/MagneticButton";
import ScrollReveal from "@/components/animations/ScrollReveal";

const APPLICATION_IMAGE =
  "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=2400&q=90";

export default function ImmersiveShowroom() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.04, 0.96, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh overflow-hidden bg-[#0A0808]"
    >
      {/* Background architectural image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-[-8%]"
          style={{ y: imgY, scale: imgScale }}
        >
          <Image
            src={APPLICATION_IMAGE}
            alt="Büyük ölçekli mimari ahşap duvar uygulaması"
            fill
            sizes="100vw"
            className={`object-cover transition-opacity duration-1500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImgLoaded(true)}
            priority
          />
        </motion.div>

        {/* Dark gradient base while loading */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#2C1E14] via-[#1A1208] to-[#080604]"
          animate={{ opacity: imgLoaded ? 0 : 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Cinematic overlays */}

      {/* Base dark layer — lifts the entire image darkness */}
      <div className="absolute inset-0 z-10 bg-[#080806]/40 pointer-events-none" />

      {/* Central text zone darkening — this was transparent before, causing illegibility */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 50% 50%, rgba(8,8,6,0.52) 0%, rgba(8,8,6,0.32) 55%, transparent 100%)",
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(8,8,6,0.55) 75%, rgba(8,8,6,0.92) 100%)",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#080806] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080806] to-transparent z-10" />

      {/* Warm gold atmospheric glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(212,175,55,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Text layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <motion.div
          className="text-center max-w-2xl px-6"
          style={{ y: textY, opacity }}
        >
          <ScrollReveal>
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
            >
              <div className="w-10 h-px bg-bronze/38" />
              <span className="font-sans text-[11px] tracking-[0.36em] uppercase section-label-gold">
                — Büyük Ölçekli Uygulamalar
              </span>
              <div className="w-10 h-px bg-bronze/38" />
            </motion.div>
          </ScrollReveal>

          <motion.h2
            className="font-serif font-normal text-warm-white leading-[1.0] mb-8"
            style={{
              fontSize: "clamp(38px, 6.5vw, 88px)",
              textShadow: "0 2px 32px rgba(0,0,0,0.85), 0 4px 64px rgba(0,0,0,0.6)",
            }}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: LUXURY_EASE }}
          >
            Mekânı<br />
            <span className="text-gradient-bronze">Yeniden Tanımla</span>
          </motion.h2>

          <motion.p
            className="font-sans text-[13.5px] font-light leading-[1.9] max-w-sm mx-auto mb-10"
            style={{
              color: "#D8D8D8",
              textShadow: "0 1px 12px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.7)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25, ease: LUXURY_EASE }}
          >
            Otel lobilerinden kurumsal showroomlara, lüks rezidanslardan kültürel
            mekânlara — her ölçekte mimari ahşap yüzey uzmanlığı.
          </motion.p>

          <motion.div
            className="pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: LUXURY_EASE }}
          >
            <MagneticButton>
              <Link href="/projeler">
                <div className="font-sans text-[11px] tracking-[0.22em] uppercase border border-bronze/45 px-8 py-4 text-bronze/78 hover:bg-bronze/8 hover:border-bronze/75 hover:text-bronze transition-all duration-400">
                  Projeleri İncele
                </div>
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner details */}
      <motion.div
        className="absolute bottom-10 left-6 md:left-10 z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone/38">
          Altındağ · Ankara
        </span>
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-6 md:right-10 z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone/38">
          Randevu ile Açık
        </span>
      </motion.div>
    </section>
  );
}
