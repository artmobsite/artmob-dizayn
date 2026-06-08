"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, wordReveal } from "@/lib/animations";

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  once?: boolean;
}

export default function TextReveal({
  text,
  className = "",
  tag = "h2",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-8%" });

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: delay,
      },
    },
  };

  const Tag = tag;

  return (
    <Tag className={className}>
      <motion.span
        ref={ref as React.RefObject<HTMLSpanElement>}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-flex flex-wrap gap-x-[0.3em]"
        aria-label={text}
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              variants={wordReveal}
              className="inline-block"
              aria-hidden
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
