"use client";

import type { CSSProperties, ReactNode } from "react";

type Color = "orange" | "yellow" | "lime" | "lavender" | "green";

const colorMap: Record<Color, { bg: string; fg: string }> = {
  orange: { bg: "#EF562A", fg: "#FFFFFF" },
  yellow: { bg: "#FFE500", fg: "#1A1A1A" },
  lime: { bg: "#B8DE45", fg: "#1A1A1A" },
  lavender: { bg: "#C4B5E8", fg: "#1A1A1A" },
  green: { bg: "#1F5D2E", fg: "#F5F2ED" },
};

export function MarkerHighlight({
  children,
  color = "orange",
  style,
}: {
  children: ReactNode;
  color?: Color;
  style?: CSSProperties;
}) {
  const { bg, fg } = colorMap[color];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.04em 0.32em",
        background: bg,
        color: fg,
        borderRadius: 6,
        lineHeight: 1.1,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function Pill({
  children,
  color = "orange",
  size = "md",
}: {
  children: ReactNode;
  color?: Color;
  size?: "sm" | "md" | "lg";
}) {
  const { bg, fg } = colorMap[color];
  const padding =
    size === "sm" ? "6px 14px" : size === "lg" ? "14px 26px" : "10px 20px";
  const fontSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding,
        background: bg,
        color: fg,
        borderRadius: 999,
        fontFamily: "var(--workshop-font-body)",
        fontWeight: 600,
        fontSize,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
