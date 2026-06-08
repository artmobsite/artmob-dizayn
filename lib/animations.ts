import type { Variants } from "framer-motion";

export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;
export const LUXURY_EASE_IN = [0.64, 0, 0.78, 0] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: LUXURY_EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: LUXURY_EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

export const wordReveal: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: LUXURY_EASE },
  },
};

export const charReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: LUXURY_EASE },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.2, ease: LUXURY_EASE },
  },
};

export const slideLeft: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.0, ease: LUXURY_EASE },
  },
};

export const scaleReveal: Variants = {
  hidden: { scale: 1.12, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.3, ease: LUXURY_EASE },
  },
};

export const SPRING_CONFIG = {
  type: "spring" as const,
  stiffness: 55,
  damping: 18,
  mass: 1,
};

export const SPRING_STIFF = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
};
