"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion";
import { useLoading } from "@/components/providers/LoadingProvider";
import { BRAND } from "@/lib/constants";
import { LUXURY_EASE } from "@/lib/animations";

export default function Preloader() {
  const { setLoaded } = useLoading();
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [scope, animate] = useAnimate();

  const letters = BRAND.name.split("");

  useEffect(() => {
    let current = 0;
    const increment = () => {
      current += Math.floor(Math.random() * 6) + 2;
      if (current >= 100) {
        current = 100;
        setCount(100);
        return;
      }
      setCount(current);
      setTimeout(increment, 28 + Math.random() * 40);
    };
    increment();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      await animate(
        ".preloader-letter",
        { y: "-110%", opacity: 0 },
        { duration: 0.5, ease: LUXURY_EASE, delay: stagger(0.04, { from: "last" }) }
      );
      await animate(
        scope.current,
        { y: "-100%" },
        { duration: 0.85, ease: LUXURY_EASE }
      );
      setVisible(false);
      setLoaded();
    }, 2800);

    return () => clearTimeout(timeout);
  }, [animate, scope, setLoaded]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={scope}
          className="fixed inset-0 z-[100] bg-deep-black flex flex-col items-center justify-center"
        >
          {/* Architectural grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(232,224,213,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,224,213,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              opacity: 0.012,
            }}
          />

          {/* Brand letters */}
          <div className="overflow-hidden mb-6">
            <div className="flex gap-1 md:gap-2">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="preloader-letter font-brand text-6xl md:text-8xl lg:text-[120px] font-extrabold tracking-[0.18em] text-warm-white inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1.0,
                    delay: 0.1 + i * 0.08,
                    ease: LUXURY_EASE,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* DİZAYN sub-label */}
          <motion.p
            className="font-sans text-[11px] tracking-[0.55em] uppercase mb-2 section-label-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            DİZAYN
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone/60 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            {BRAND.tagline}
          </motion.p>

          {/* Progress bar + counter */}
          <div className="absolute bottom-10 left-0 right-0 px-10 md:px-16 flex items-end justify-between">
            <div className="flex-1 mr-8">
              <div className="h-px bg-stone/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{
                    width: `${count}%`,
                    background: "linear-gradient(90deg, rgba(155,123,74,0.8), rgba(196,169,106,1), rgba(232,213,168,0.8))",
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
            <span className="font-sans text-xs text-stone/55 tabular-nums tracking-widest w-10 text-right">
              {count}
            </span>
          </div>

          {/* Bottom left label */}
          <motion.div
            className="absolute bottom-10 left-10 md:left-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-stone/42">
              Mimari Sistem Yükleniyor
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
