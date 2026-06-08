"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MATERIALS } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

function MaterialCard({
  material,
  index,
}: {
  material: (typeof MATERIALS)[number];
  index: number;
}) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    },
    []
  );

  return (
    <motion.div
      ref={cardRef}
      className="relative flex-shrink-0 w-64 md:w-72 h-[380px] md:h-[420px] overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, delay: index * 0.1, ease: LUXURY_EASE }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Gradient base */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${material.bg} transition-opacity duration-700 ${loaded ? "opacity-0" : "opacity-100 img-shimmer"}`}
      />

      {/* Image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.9, ease: LUXURY_EASE }}
      >
        <Image
          src={material.image}
          alt={material.name}
          fill
          sizes="300px"
          className={`object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>

      {/* Color grade */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 0.2 : 0.42 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `linear-gradient(to bottom, transparent 30%, rgba(8,8,6,0.82) 100%)`,
        }}
      />

      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: hovered
            ? `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(196,169,106,0.18) 0%, transparent 55%)`
            : "none",
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Glass tint */}
      <div className="absolute inset-0 bg-black/12" />

      {/* Border */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ border: "1px solid" }}
        animate={{ borderColor: hovered ? "rgba(196,169,106,0.28)" : "rgba(255,255,255,0.07)" }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-7">
        <div>
          <span className="font-sans text-[11px] tracking-[0.32em] uppercase text-white/55 block mb-2">
            Materyal {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-sans text-[11px] tracking-[0.22em] uppercase text-bronze/82 block">
            {material.origin}
          </span>
        </div>

        <div>
          <motion.div
            className="overflow-hidden mb-3"
            animate={{ y: hovered ? -5 : 0 }}
            transition={{ duration: 0.4, ease: LUXURY_EASE }}
          >
            <h3 className="font-serif text-[1.65rem] font-normal text-warm-white tracking-wide drop-shadow-lg leading-tight">
              {material.name}
            </h3>
          </motion.div>

          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.4, ease: LUXURY_EASE }}
          >
            <p className="font-sans text-[11.5px] text-white/75 font-light leading-[1.85]">
              {material.description}
            </p>
          </motion.div>

          <motion.div
            className="mt-4 flex items-center gap-2.5"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <motion.div
              className="h-px bg-bronze/60"
              animate={{ width: hovered ? "24px" : "0px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: LUXURY_EASE }}
            />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-bronze/78">
              İncele
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MaterialExperience() {
  return (
    <section id="materials" className="bg-[#0E0C0A] py-24 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 mb-16">
        <ScrollReveal>
          <span className="font-sans text-[11px] tracking-[0.35em] uppercase block mb-5 section-label-gold">
            — Materyaller
          </span>
        </ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <TextReveal
            text="Premium Yüzey Materyalleri"
            tag="h2"
            className="font-serif text-[clamp(34px,4.8vw,64px)] font-normal text-warm-white leading-none max-w-lg"
          />
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-[13.5px] text-stone/68 font-light max-w-xs leading-[1.85]">
              Her materyal, onlarca yıllık ortaklıkla temin edilir.
              Trende değil, kalıcılığa göre seçilir.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        className="flex gap-4 overflow-x-auto pl-6 md:pl-10 lg:pl-16 pr-6 pb-4 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {MATERIALS.map((material, i) => (
          <div key={material.name} className="snap-start">
            <MaterialCard material={material} index={i} />
          </div>
        ))}
        <div className="flex-shrink-0 w-6" />
      </div>

      {/* Mobile swipe hint */}
      <div className="md:hidden flex items-center justify-center gap-3 mt-6 px-6">
        <div className="h-px w-8 bg-stone/18" />
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone/28">
          kaydır
        </span>
        <div className="h-px w-8 bg-stone/18" />
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-4 px-6">
        {MATERIALS.map((m, i) => (
          <div
            key={m.name}
            className={`h-px transition-all duration-300 ${
              i === 0 ? "bg-bronze/55 w-10" : "bg-stone/18 w-6"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
