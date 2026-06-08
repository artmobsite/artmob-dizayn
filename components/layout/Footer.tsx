"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MarqueeText from "@/components/animations/MarqueeText";

export default function Footer() {
  return (
    <footer id="footer" className="bg-deep-black border-t border-stone/8 pt-16 pb-10 overflow-hidden">

      {/* Marquee strip */}
      <div className="mb-16 py-5 border-y border-stone/6">
        <MarqueeText speed="slow" className="text-stone/22">
          <span className="font-brand font-extrabold tracking-[0.18em] mx-8 md:mx-16" style={{ fontSize: "clamp(36px, 7vw, 112px)" }}>
            ARTMOB
          </span>
          <span className="text-bronze/45 tracking-widest mx-4 md:mx-8" style={{ fontSize: "clamp(12px, 2vw, 18px)" }}>✦</span>
          <span className="font-sans tracking-[0.4em] uppercase text-stone/25 mx-8 md:mx-16" style={{ fontSize: "clamp(10px, 1.5vw, 14px)" }}>
            Mimari Ahşap Yüzey Sistemleri
          </span>
          <span className="text-bronze/45 tracking-widest mx-4 md:mx-8" style={{ fontSize: "clamp(12px, 2vw, 18px)" }}>✦</span>
          <span className="font-sans tracking-[0.4em] uppercase text-stone/25 mx-8 md:mx-16" style={{ fontSize: "clamp(10px, 1.5vw, 14px)" }}>
            DİZAYN
          </span>
          <span className="text-bronze/45 tracking-widest mx-4 md:mx-8" style={{ fontSize: "clamp(12px, 2vw, 18px)" }}>✦</span>
          <span className="font-sans tracking-[0.4em] uppercase text-stone/25 mx-8 md:mx-16" style={{ fontSize: "clamp(10px, 1.5vw, 14px)" }}>
            Ankara
          </span>
          <span className="text-bronze/45 tracking-widest mx-4 md:mx-8" style={{ fontSize: "clamp(12px, 2vw, 18px)" }}>✦</span>
        </MarqueeText>
      </div>

      <div className="px-6 md:px-10 lg:px-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <ScrollReveal delay={0}>
            <div>
              <div className="flex flex-col items-start leading-none mb-5">
                <span className="font-brand text-4xl font-extrabold tracking-[0.12em] text-warm-white">
                  {BRAND.name}
                </span>
                <span className="font-sans text-[10px] tracking-[0.5em] uppercase mt-1 section-label-gold">
                  DİZAYN
                </span>
              </div>
              <p className="text-[13px] text-stone/68 font-sans font-light leading-[1.88] max-w-xs">
                {BRAND.description}
              </p>
              <p className="text-[11px] font-sans tracking-[0.18em] uppercase mt-5 section-label-gold">
                {BRAND.since}
              </p>
            </div>
          </ScrollReveal>

          {/* Systems */}
          <ScrollReveal delay={0.08}>
            <div>
              <h4 className="text-[11px] tracking-[0.25em] uppercase section-label-gold font-sans mb-6">
                Sistemler
              </h4>
              <ul className="space-y-3">
                {[
                  "Entegre Duvar Panelleri",
                  "Gizli Depolama Sistemleri",
                  "AVM Duvar Uygulamaları",
                  "Yüzer Mimari Formlar",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#systems"
                      className="text-[13px] text-stone/68 font-sans font-light hover:text-warm-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Atelier */}
          <ScrollReveal delay={0.16}>
            <div>
              <h4 className="text-[11px] tracking-[0.25em] uppercase section-label-gold font-sans mb-6">
                Fabrika
              </h4>
              <ul className="space-y-3">
                {["Hikayemiz", "Ahşap Ustalığı", "Materyaller", "Sürdürülebilirlik"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[13px] text-stone/68 font-sans font-light hover:text-warm-white transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.24}>
            <div>
              <h4 className="text-[11px] tracking-[0.25em] uppercase section-label-gold font-sans mb-6">
                İletişim
              </h4>
              <address className="not-italic space-y-3">
                <p className="text-[13px] text-stone/68 font-sans font-light leading-[1.85] whitespace-pre-line">
                  {BRAND.address}
                </p>
                <p className="text-[13px] text-stone-dark/55 font-sans font-light">
                  {BRAND.phone}
                </p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-[13px] text-bronze/78 font-sans font-light hover:text-bronze transition-colors duration-300 block"
                >
                  {BRAND.email}
                </a>
              </address>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-stone/6 gap-4">
          <p className="text-[11px] text-stone/48 font-sans tracking-[0.1em]">
            © 2025 ARTMOB DİZAYN. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            {["Gizlilik Politikası", "Kullanım Şartları", "Ticari Program"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] text-stone/48 font-sans tracking-[0.08em] hover:text-stone/82 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
