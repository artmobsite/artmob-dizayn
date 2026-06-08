"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { stiffness: 95, damping: 22, mass: 0.5 };
  const ringX = useSpring(dotX, springConfig);
  const ringY = useSpring(dotY, springConfig);

  const [cursorState, setCursorState] = useState<"default" | "pointer" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    setIsMounted(true);

    // Check for touch device
    if (window.matchMedia("(hover: none)").matches) return;

    const updatePosition = () => {
      dotX.set(posRef.current.x);
      dotY.set(posRef.current.y);
      rafRef.current = requestAnimationFrame(updatePosition);
    };

    rafRef.current = requestAnimationFrame(updatePosition);

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("button, a, [role='button'], [data-cursor='pointer']")) {
        setCursorState("pointer");
      } else if (el.closest("input, textarea, [contenteditable]")) {
        setCursorState("text");
      } else {
        setCursorState("default");
      }
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!isMounted) return null;

  const isPointer = cursorState === "pointer";

  return (
    <>
      {/* Precision dot — exact cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.18 }}
      >
        <div className="w-[6px] h-[6px] rounded-full bg-warm-white" />
      </motion.div>

      {/* Ring — spring lag follower */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          animate={{
            width: isPointer ? "44px" : "32px",
            height: isPointer ? "44px" : "32px",
            borderColor: isPointer
              ? "rgba(196,169,106,0.6)"
              : "rgba(250,250,248,0.22)",
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full border"
        />
      </motion.div>
    </>
  );
}
