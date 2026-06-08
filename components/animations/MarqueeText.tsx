"use client";

import type { ReactNode } from "react";

interface MarqueeTextProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

const speedMap = {
  slow: "40s",
  normal: "28s",
  fast: "16s",
};

export default function MarqueeText({
  children,
  className = "",
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
}: MarqueeTextProps) {
  const duration = speedMap[speed];
  const animationName =
    direction === "left" ? "marquee-scroll" : "marquee-scroll-reverse";

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden="true"
    >
      <div
        className="inline-flex"
        style={{
          animation: `${animationName} ${duration} linear infinite`,
          ...(pauseOnHover ? {} : {}),
        }}
      >
        <span className="inline-flex items-center">{children}</span>
        <span className="inline-flex items-center" aria-hidden="true">
          {children}
        </span>
        <span className="inline-flex items-center" aria-hidden="true">
          {children}
        </span>
        <span className="inline-flex items-center" aria-hidden="true">
          {children}
        </span>
      </div>
    </div>
  );
}
