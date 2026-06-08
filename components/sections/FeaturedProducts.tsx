"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 44, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 1.15, delay: index * 0.1, ease: LUXURY_EASE }}
    >
      <Link href={project.slug ? `/projeler/${project.slug}` : "/projeler"} className="block">
      <motion.div
        className="relative overflow-hidden cursor-pointer bg-[#0F0E0C]"
        animate={{
          y: hovered ? -10 : 0,
          boxShadow: hovered
            ? "0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(196,169,106,0.16)"
            : "0 0 0 1px rgba(255,255,255,0.04)",
        }}
        transition={{ duration: 0.6, ease: LUXURY_EASE }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Image area */}
        <div className="relative h-72 md:h-80 overflow-hidden">

          {/* Gradient fallback */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-700 ${loaded ? "opacity-0" : "opacity-100 img-shimmer"}`} />

          {/* Image */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 1.0, ease: LUXURY_EASE }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setLoaded(true)}
            />
          </motion.div>

          {/* Architectural overlay */}
          <div className="absolute inset-0 bg-[#080806]/18 mix-blend-multiply pointer-events-none" />

          {/* Spotlight from above on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: hovered
                ? "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(250,250,248,0.07) 0%, transparent 70%)"
                : "none",
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Warm gold glow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: hovered
                ? "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(196,169,106,0.08) 0%, transparent 70%)"
                : "none",
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Base vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/10 to-transparent" />

          {/* Project ref */}
          <div className="absolute top-4 left-5">
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/22">
              {project.id}
            </span>
          </div>

          {/* Category */}
          <div className="absolute top-4 right-5">
            <motion.span
              className="font-sans text-[11px] tracking-[0.18em] uppercase text-bronze/58"
              animate={{ opacity: hovered ? 0.95 : 0.58 }}
              transition={{ duration: 0.3 }}
            >
              {project.category}
            </motion.span>
          </div>

          {/* Explore CTA — slides up */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72), transparent)" }}
            animate={{ y: hovered ? 0 : "110%", opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.45, ease: LUXURY_EASE }}
          >
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-warm-white/85">
              Projeyi İncele
            </span>
            <motion.div
              className="h-px bg-warm-white/38"
              animate={{ width: hovered ? "32px" : "16px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: LUXURY_EASE }}
            />
          </motion.div>
        </div>

        {/* Info panel */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-xl font-normal text-warm-white tracking-wide leading-tight">
                {project.name}
              </h3>
            </div>
            <div className="flex-shrink-0 text-right pt-0.5">
              <span className="font-sans text-[11px] text-bronze/70 font-light tracking-[0.13em]">
                {project.location}
              </span>
            </div>
          </div>

          <p className="font-sans text-[11.5px] text-stone/65 font-light leading-[1.85] mb-4">
            {project.description}
          </p>

          {/* Bronze line draws in on hover */}
          <div className="relative h-px w-full bg-stone/8">
            <motion.div
              className="absolute inset-y-0 left-0 bg-bronze/45"
              animate={{ width: hovered ? "100%" : "0%" }}
              transition={{ duration: 0.55, ease: LUXURY_EASE }}
            />
          </div>
        </div>
      </motion.div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="projects" className="bg-deep-black py-24 md:py-32 px-6 md:px-10 lg:px-16 overflow-hidden">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <ScrollReveal>
            <span className="font-sans text-[11px] tracking-[0.35em] uppercase block mb-5 section-label-gold">
              — Referans Projeler
            </span>
          </ScrollReveal>
          <TextReveal
            text="Mimari Uygulamalar"
            tag="h2"
            className="font-serif text-[clamp(36px,5.5vw,72px)] font-normal text-warm-white leading-none"
          />
        </div>

        <ScrollReveal delay={0.2}>
          <MagneticButton>
            <Link href="/projeler">
              <div className="group relative overflow-hidden font-sans text-[10px] tracking-[0.22em] uppercase border border-stone/18 px-6 py-3 text-stone-dark/52 hover:text-warm-white/78 transition-colors duration-400">
                <span className="relative z-10">Tüm Projeleri Gör</span>
                <motion.span
                  className="absolute inset-0 bg-bronze/7"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.45, ease: LUXURY_EASE }}
                />
              </div>
            </Link>
          </MagneticButton>
        </ScrollReveal>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Bottom note */}
      <ScrollReveal delay={0.3}>
        <div className="mt-16 flex items-center justify-center gap-6">
          <div className="h-px flex-1 bg-stone/[0.06]" />
          <span className="font-sans text-[11px] text-stone/45 tracking-[0.2em] uppercase whitespace-nowrap">
            Tüm projeler Fabrikamızde özel olarak üretilir
          </span>
          <div className="h-px flex-1 bg-stone/[0.06]" />
        </div>
      </ScrollReveal>
    </section>
  );
}
