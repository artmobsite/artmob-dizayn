"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import MagneticButton from "@/components/animations/MagneticButton";
import { LUXURY_EASE } from "@/lib/animations";

function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative inline-block font-sans text-[11px] tracking-[0.2em] uppercase text-stone/72 hover:text-warm-white transition-colors duration-300 nav-gold-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <motion.span
        className="absolute -bottom-0.5 left-0 h-px"
        style={{
          background: "linear-gradient(90deg, rgba(196,169,106,0.8), rgba(232,213,168,0.6), rgba(196,169,106,0.8))",
        }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: LUXURY_EASE }}
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const brandDelay = isHome ? 3.1 : 0.1;
  const linksDelay = isHome ? 3.3 : 0.2;
  const ctaDelay   = isHome ? 3.5 : 0.3;

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 55));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 lg:px-16"
        animate={{
          backgroundColor: scrolled ? "rgba(8,8,6,0.94)" : "rgba(8,8,6,0)",
          backdropFilter: scrolled ? "blur(24px) saturate(120%)" : "blur(0px) saturate(100%)",
          borderBottomColor: scrolled ? "rgba(232,224,213,0.07)" : "rgba(232,224,213,0)",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
        }}
        transition={{ duration: 0.5, ease: LUXURY_EASE }}
      >
        <nav className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: brandDelay, ease: LUXURY_EASE }}
          >
            <Link href="/" className="flex flex-col items-start leading-none hover:opacity-85 transition-opacity duration-300">
              <span className="font-brand text-[20px] md:text-[22px] tracking-[0.22em] text-warm-white font-extrabold">
                {BRAND.name}
              </span>
              <span className="font-sans text-[9px] tracking-[0.45em] uppercase mt-0.5 section-label-gold">
                DİZAYN
              </span>
            </Link>
          </motion.div>

          {/* Desktop nav links */}
          <motion.div
            className="hidden md:flex items-center gap-9"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: linksDelay, ease: LUXURY_EASE }}
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} label={link.label} href={link.href} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: ctaDelay, ease: LUXURY_EASE }}
          >
            <MagneticButton className="hidden md:block" strength={0.25}>
              <Link href="/projeler">
                <div
                  className="group relative overflow-hidden font-sans text-[10px] tracking-[0.22em] uppercase border border-bronze/25 px-5 py-2.5 text-stone/72 hover:text-warm-white transition-colors duration-400"
                  onMouseEnter={() => setCtaHovered(true)}
                  onMouseLeave={() => setCtaHovered(false)}
                >
                  <span className="relative z-10">Projeleri İncele</span>
                  <motion.span
                    className="absolute inset-0"
                    style={{
                      originX: 0,
                      background: "linear-gradient(90deg, rgba(196,169,106,0.1), rgba(232,213,168,0.08), rgba(196,169,106,0.1))",
                    }}
                    animate={{ scaleX: ctaHovered ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: LUXURY_EASE }}
                  />
                </div>
              </Link>
            </MagneticButton>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-3 text-stone-dark/60 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </motion.div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080806] flex flex-col justify-center px-8"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: LUXURY_EASE }}
          >
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: "180px 180px",
              }}
            />
            <div className="space-y-6 pt-16">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.09, duration: 0.65, ease: LUXURY_EASE }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-serif font-light text-warm-white/90 hover:text-bronze transition-colors duration-350 tracking-[-0.01em] py-1"
                    style={{ fontSize: "clamp(32px, 8vw, 56px)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.52, duration: 0.6 }}
                className="pt-6 border-t border-stone/8"
              >
                <Link
                  href="/projeler"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block font-sans text-[11px] tracking-[0.22em] uppercase border border-bronze/35 px-6 py-3 text-bronze/70"
                >
                  Projeleri İncele
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
