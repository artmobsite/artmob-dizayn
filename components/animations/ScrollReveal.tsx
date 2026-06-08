"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, LUXURY_EASE } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.1,
  y = 40,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y, filter: "blur(8px)" }
      }
      transition={{ duration, delay, ease: LUXURY_EASE }}
    >
      {children}
    </motion.div>
  );
}
