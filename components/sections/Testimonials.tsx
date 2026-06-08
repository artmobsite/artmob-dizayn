"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1631576043642-41eda83b7d84?auto=format&fit=crop&w=1800&q=80";

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-default"
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 1.05, delay: index * 0.13, ease: LUXURY_EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        className="relative p-8 md:p-10 border border-stone/10 h-full"
        animate={{
          borderColor: hovered ? "rgba(196,169,106,0.22)" : "rgba(232,224,213,0.08)",
          y: hovered ? -5 : 0,
          boxShadow: hovered
            ? "0 20px 48px rgba(0,0,0,0.3)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.5, ease: LUXURY_EASE }}
      >
        {/* Quote mark */}
        <motion.div
          className="font-serif text-5xl leading-none mb-6 select-none section-label-gold"
          animate={{ opacity: hovered ? 1 : 0.55 }}
          transition={{ duration: 0.4 }}
        >
          &ldquo;
        </motion.div>

        <p className="font-sans text-[13px] text-stone/78 font-light leading-[1.92] mb-8 italic">
          {testimonial.quote}
        </p>

        <div className="border-t border-stone/8 pt-6">
          <div className="inline-block relative mb-1">
            <span className="font-serif text-base font-normal text-warm-white/95 block">
              {testimonial.author}
            </span>
            <motion.div
              className="absolute -bottom-0.5 left-0 h-px bg-bronze/48"
              animate={{ width: hovered ? "100%" : "0%" }}
              transition={{ duration: 0.45, ease: LUXURY_EASE }}
            />
          </div>
          <span className="font-sans text-[11px] text-bronze/72 tracking-[0.12em] block mt-1.5">
            {testimonial.title}
          </span>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="absolute bottom-5 right-5 w-5 h-px bg-bronze/32" />
          <div className="absolute bottom-5 right-5 w-px h-5 bg-bronze/32" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-charcoal py-24 md:py-32 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Atmospheric background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          className="object-cover opacity-100"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-charcoal/88" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(196,169,106,0.04) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Content — above background */}
      <div className="relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <ScrollReveal>
            <span className="font-sans text-[11px] tracking-[0.35em] uppercase block mb-5 section-label-gold">
              — Referanslar
            </span>
          </ScrollReveal>
          <TextReveal
            text="Müşterilerimiz Anlatıyor"
            tag="h2"
            className="font-serif text-[clamp(34px,5.5vw,68px)] font-normal text-warm-white leading-none"
          />
        </div>
      </div>

      {/* Large opening quote */}
      <ScrollReveal>
        <div
          className="font-serif leading-none text-bronze/10 select-none mb-8"
          style={{ fontSize: "clamp(90px, 13vw, 170px)" }}
        >
          &ldquo;
        </div>
      </ScrollReveal>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.author} testimonial={t} index={i} />
        ))}
      </div>

      {/* Bottom attribution */}
      <ScrollReveal delay={0.4}>
        <div className="mt-16 flex items-center gap-8">
          <div className="h-px flex-1 bg-stone/[0.07]" />
          <span className="font-sans text-[11px] text-stone/42 tracking-[0.2em] uppercase whitespace-nowrap">
            Seçilmiş Referanslar · 2020–2025
          </span>
          <div className="h-px flex-1 bg-stone/[0.07]" />
        </div>
      </ScrollReveal>
      </div>{/* end relative z-10 */}
    </section>
  );
}
