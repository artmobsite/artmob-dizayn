"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { BRAND } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative border-b border-stone/8 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay: index * 0.08, ease: LUXURY_EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Bronze left accent */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-bronze/48"
        animate={{ opacity: isOpen || hovered ? 1 : 0, scaleY: isOpen || hovered ? 1 : 0 }}
        style={{ originY: 0.5 }}
        transition={{ duration: 0.35, ease: LUXURY_EASE }}
      />

      <button
        className="w-full flex items-start justify-between gap-6 py-7 pl-5 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-5 flex-1">
          <span className="font-sans text-[11px] tracking-[0.25em] text-bronze/62 mt-1.5 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-[1.1rem] md:text-xl font-normal text-warm-white/90 group-hover:text-warm-white transition-colors duration-300 leading-snug">
            {item.question}
          </h3>
        </div>

        <div className="relative flex-shrink-0 w-5 h-5 mt-1">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.25, ease: LUXURY_EASE }}
          >
            <div className="w-4 h-px bg-bronze/58" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.25, ease: LUXURY_EASE }}
          >
            <div className="relative w-4 h-4">
              <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-stone-dark/42 group-hover:bg-bronze/58 transition-colors duration-300" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-stone-dark/42 group-hover:bg-bronze/58 transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.48, ease: LUXURY_EASE }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-14 pr-8">
              <p className="font-sans text-[13px] text-stone/72 font-light leading-[1.92] tracking-[0.01em]">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="contact" className="bg-[#0A0A0A] py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <ScrollReveal>
            <span className="font-sans text-[11px] tracking-[0.35em] uppercase block mb-5 section-label-gold">
              — Proje Soruları
            </span>
          </ScrollReveal>
          <TextReveal
            text="Sık Sorulan Sorular"
            tag="h2"
            className="font-serif text-[clamp(36px,5vw,64px)] font-normal text-warm-white leading-none"
          />
        </div>

        {/* Accordion */}
        <div className="border-t border-stone/8">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal delay={0.25}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Contact block */}
            <div className="p-7 border border-stone/8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-bronze/28" />
              <h4 className="font-serif text-xl font-normal text-warm-white mb-4">
                Proje Görüşmesi
              </h4>
              <p className="font-sans text-[12.5px] text-stone/68 font-light leading-[1.88] mb-6">
                Her proje için kişisel bir Fabrika ziyareti düzenliyoruz.
                Mekânınızı birlikte değerlendirelim.
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="font-sans text-[11px] tracking-[0.22em] uppercase text-bronze/82 hover:text-bronze transition-colors duration-300"
              >
                {BRAND.email}
              </a>
            </div>

            {/* Showroom block */}
            <div className="p-7 border border-stone/8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-stone/15" />
              <h4 className="font-serif text-xl font-normal text-warm-white mb-4">
                Fabrika Ziyareti
              </h4>
              <p className="font-sans text-[12.5px] text-stone/68 font-light leading-[1.88] mb-6 whitespace-pre-line">
                {BRAND.address}
              </p>
              <a
                href={`tel:${BRAND.phone}`}
                className="font-sans text-[11px] tracking-[0.12em] text-stone/68 hover:text-warm-white transition-colors duration-300"
              >
                {BRAND.phone}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
