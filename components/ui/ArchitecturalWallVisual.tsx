"use client";

import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LUXURY_EASE } from "@/lib/animations";

const WALL_IMAGE = "/images/hero-interior.jpg";

export default function ArchitecturalWallVisual() {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 40 });
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background architectural image — slow breathing scale */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-[-6%]"
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={WALL_IMAGE}
            alt="Mimari Ahşap Duvar Sistemi"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className={`object-cover transition-opacity duration-1500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
            priority
          />
        </motion.div>

        {/* Fallback gradient while image loads */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#2C1E14] via-[#1A1208] to-[#0A0806]"
          animate={{ opacity: imgLoaded ? 0 : 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Deep color grade overlay */}
      <div className="absolute inset-0 bg-[#0A0806]/35 mix-blend-multiply pointer-events-none" />

      {/* Left-to-right bleed into text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, transparent 40%, rgba(8,8,6,0.55) 75%, rgba(8,8,6,0.92) 100%)",
        }}
      />

      {/* Top/bottom vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,6,0.5) 0%, transparent 20%, transparent 80%, rgba(8,8,6,0.5) 100%)",
        }}
      />

      {/* Mouse-reactive warm gold ambient light */}
      {mounted && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: `radial-gradient(ellipse 55% 65% at ${mouse.x}% ${mouse.y}%, rgba(196,169,106,0.16) 0%, transparent 65%)`,
          }}
          transition={{ duration: 0.18 }}
        />
      )}

      {/* Concealed top light strip — warm glow from ceiling */}
      <motion.div
        className="absolute top-0 left-[15%] right-[15%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,169,106,0.55), rgba(255,240,200,0.3), rgba(196,169,106,0.55), transparent)",
        }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Second light strip lower */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "38%",
          left: "0",
          right: "0",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 20%, rgba(196,169,106,0.12), transparent 80%)",
        }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Architectural vertical panel seam lines */}
      {[22, 50, 78].map((pos) => (
        <div
          key={pos}
          className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{
            left: `${pos}%`,
            background:
              "linear-gradient(to bottom, transparent 5%, rgba(196,169,106,0.1) 30%, rgba(196,169,106,0.1) 70%, transparent 95%)",
          }}
        />
      ))}

      {/* Horizontal architectural division line */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "38%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent 5%, rgba(196,169,106,0.08) 25%, rgba(196,169,106,0.08) 75%, transparent 95%)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.5, delay: 1.5, ease: LUXURY_EASE }}
      />

      {/* Light sweep across surface */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: 0.4 }}
      >
        <motion.div
          className="absolute top-0 bottom-0 w-[80px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,240,200,0.07), transparent)",
            transform: "skewX(-8deg)",
          }}
          animate={{ left: ["-20%", "120%"] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 6,
            delay: 3,
          }}
        />
      </div>

      {/* Bottom architectural texture hint */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(8,8,6,0.6) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
