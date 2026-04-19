"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Slide({
  children,
  align = "start",
  pad = "xl",
  bg,
}: {
  children: ReactNode;
  align?: "start" | "center" | "end";
  pad?: "lg" | "xl";
  bg?: string;
}) {
  const padding = pad === "xl" ? "80px 104px" : "60px 80px";
  const justify =
    align === "center" ? "center" : align === "end" ? "flex-end" : "flex-start";

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: justify,
        padding,
        background: bg ?? "var(--workshop-bg)",
        color: "var(--workshop-fg)",
        fontFamily: "var(--workshop-font-body)",
      }}
    >
      {children}
    </motion.section>
  );
}

export function SlideEyebrow({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: color ?? "var(--workshop-accent)",
      }}
    >
      {children}
    </span>
  );
}

export function SlideTitleText({
  children,
  serif = false,
}: {
  children: ReactNode;
  serif?: boolean;
}) {
  return (
    <h1
      style={{
        fontFamily: serif
          ? "var(--workshop-font-display)"
          : "var(--workshop-font-body)",
        fontSize: "clamp(56px, 6.6vw, 104px)",
        lineHeight: 1.02,
        fontWeight: serif ? 700 : 700,
        letterSpacing: serif ? "-0.01em" : "-0.02em",
        margin: "22px 0 32px",
        maxWidth: "22ch",
        color: "var(--workshop-fg)",
      }}
    >
      {children}
    </h1>
  );
}

export function SlideBody({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        fontSize: "clamp(20px, 1.5vw, 26px)",
        lineHeight: 1.45,
        color: "var(--workshop-fg)",
        maxWidth: "60ch",
      }}
    >
      {children}
    </div>
  );
}

export function Card({
  children,
  tint,
  padding = "28px 32px",
  style,
}: {
  children: ReactNode;
  tint?: string;
  padding?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: tint ?? "var(--workshop-surface)",
        border: "1px solid var(--workshop-border)",
        borderRadius: 22,
        padding,
        boxShadow: "0 10px 40px -20px rgba(0,0,0,0.12)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
