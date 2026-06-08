"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { PHILOSOPHY } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";

const IMAGES = [
  "/images/duvarlar-konusur.webp",
  "/images/felsefe-gorunmez-mukemmellik.jpg",
  "/images/sistem-04-yuzer-formlar.jpg",
];

// Panel boundaries (300vh split into thirds)
// [0, 0.33) → panel 0   [0.33, 0.67) → panel 1   [0.67, 1] → panel 2

// Text: exit fast (0.38s), enter after delay (0.32s gap) → no simultaneous readability
const textExit   = { duration: 0.38, ease: [0.55, 0, 0.45, 1] } as const;
const textEnter  = { duration: 0.72, ease: [0.25, 0.1, 0.25, 1], delay: 0.32 } as const;

// Images: gentle crossfade is fine (decorative, no legibility issue)
const imgExit    = { duration: 0.6,  ease: [0.55, 0, 0.45, 1] } as const;
const imgEnter   = { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] } as const;

const textVariants = {
  active:   { opacity: 1, transition: textEnter },
  inactive: { opacity: 0, transition: textExit  },
};

const imgVariants = {
  active:   { opacity: 1, transition: imgEnter },
  inactive: { opacity: 0, transition: imgExit  },
};

export default function DesignPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);
  // Initial state = 0: panel 0 is visible from the first paint, no scroll needed
  const [activePanel, setActivePanel] = useState(0);
  const [imgLoaded, setImgLoaded] = useState([false, false, false]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = latest < 0.33 ? 0 : latest < 0.67 ? 1 : 2;
    if (next !== activePanel) setActivePanel(next);
  });

  const parallaxY   = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const imgScale    = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative bg-[#0A0A0A] philosophy-height"
      style={{}}
    >
      <div className="sticky top-0 h-dvh overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* ── Left: images ───────────────────────────────────── */}
        <div className="relative hidden lg:block overflow-hidden">
          {IMAGES.map((src, i) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              variants={imgVariants}
              animate={i === activePanel ? "active" : "inactive"}
              style={{ y: parallaxY }}
            >
              <motion.div className="absolute inset-[-10%]" style={{ scale: imgScale }}>
                <Image
                  src={src}
                  alt="ARTMOB DİZAYN mimari yüzey uygulaması"
                  fill
                  sizes="50vw"
                  className={`object-cover transition-opacity duration-1000 ${
                    imgLoaded[i] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() =>
                    setImgLoaded((prev) => {
                      const next = [...prev];
                      next[i] = true;
                      return next;
                    })
                  }
                  priority={i === 0}
                />
              </motion.div>

              <div className="absolute inset-0 bg-[#0A0A0A]/30" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 50%, #0A0A0A 100%), " +
                    "linear-gradient(to bottom, #0A0A0A 0%, transparent 8%, transparent 92%, #0A0A0A 100%)",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          ))}

          {/* Vertical label */}
          <div className="absolute bottom-12 left-10 flex flex-col items-start gap-3 z-20">
            <div className="h-16 w-px bg-stone/12" />
            <span
              className="font-sans text-[11px] tracking-[0.35em] uppercase text-stone/45"
              style={{ writingMode: "vertical-rl" }}
            >
              Mimari Felsefe
            </span>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/12 to-transparent z-20" />
        </div>

        {/* ── Right: text panels ─────────────────────────────── */}
        <div className="relative flex items-center justify-center">

          {/* Section label — fades out on first scroll */}
          <motion.div
            className="absolute top-10 left-8 md:left-12 z-20"
            style={{ opacity: headerOpacity }}
          >
            <ScrollReveal>
              <span className="font-sans text-[11px] tracking-[0.35em] uppercase section-label-gold">
                — Felsefe
              </span>
            </ScrollReveal>
          </motion.div>

          {/* Text panels */}
          {PHILOSOPHY.map((item, i) => (
            <motion.div
              key={item.id}
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-12"
              variants={textVariants}
              animate={i === activePanel ? "active" : "inactive"}
              style={{ pointerEvents: i === activePanel ? "auto" : "none" }}
            >
              {/* Ghost index */}
              <span
                className="font-serif text-[90px] md:text-[150px] font-light leading-none absolute -top-4 -left-4 select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.018)" }}
                aria-hidden
              >
                {item.id}
              </span>

              <div className="relative z-10 max-w-md">
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-6 h-px bg-bronze/48" />
                  <span className="font-sans text-[11px] tracking-[0.32em] uppercase section-label-gold">
                    {item.id}
                  </span>
                </div>

                <h3
                  className="font-serif text-[1.9rem] md:text-[2.2rem] font-normal leading-[1.1] mb-7"
                  style={{
                    color: "#F5F5F5",
                    textShadow: "0 2px 24px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="font-sans text-[13.5px] font-light leading-[1.85] tracking-[0.01em]"
                  style={{
                    color: "#D8D8D8",
                    opacity: 0.95,
                    textShadow: "0 2px 16px rgba(0,0,0,0.4)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Progress indicators */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
            {PHILOSOPHY.map((_, i) => (
              <motion.div
                key={i}
                className="h-8 w-px bg-stone/18"
                animate={{ opacity: i === activePanel ? 1 : 0.25 }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
