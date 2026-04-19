"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type Line = { prompt: string; text: string };

export function TerminalBlock({
  command,
  lines,
  label = "~/flickering-hearth",
  autoType = true,
}: {
  command?: string;
  lines?: Line[];
  label?: string;
  autoType?: boolean;
}) {
  const resolved: Line[] = lines ?? (command ? [{ prompt: "$", text: command }] : []);
  const reducedMotion = usePrefersReducedMotion();
  const shouldAnimate = autoType && !reducedMotion;

  return (
    <div
      style={{
        background: "var(--workshop-code-bg)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "var(--radius-md, 20px)",
        padding: "22px 26px 28px",
        fontFamily: "var(--font-mono)",
        color: "var(--workshop-code-fg)",
        fontSize: "clamp(16px, 1.15vw, 20px)",
        lineHeight: 1.55,
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
          paddingBottom: 12,
          borderBottom: "1px dashed rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <Dot color="#FF5F56" />
          <Dot color="#FFBD2E" />
          <Dot color="#27C93F" />
        </div>
        <span
          style={{
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--workshop-code-muted)",
          }}
        >
          {label}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {resolved.map((line, i) => (
          <TerminalLine key={i} line={line} index={i} animate={shouldAnimate} />
        ))}
      </div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: color,
        opacity: 0.9,
      }}
    />
  );
}

function TerminalLine({
  line,
  index,
  animate,
}: {
  line: Line;
  index: number;
  animate: boolean;
}) {
  const [typed, setTyped] = useState(line.text);

  useEffect(() => {
    if (!animate) {
      setTyped(line.text);
      return;
    }
    const text = line.text;
    setTyped("");
    const startDelay = 350 + index * 280;
    const charInterval = 12;
    let cancelled = false;
    let i = 0;
    const tick = () => {
      if (cancelled) return;
      i += 1;
      setTyped(text.slice(0, i));
      if (i < text.length) {
        window.setTimeout(tick, charInterval);
      }
    };
    const start = window.setTimeout(tick, startDelay);
    return () => {
      cancelled = true;
      window.clearTimeout(start);
    };

  }, [index, animate, line.text]);

  const isComplete = typed.length >= line.text.length;

  return (
    <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
      <span style={{ color: "var(--workshop-code-prompt)", flex: "0 0 auto" }}>
        {line.prompt}
      </span>
      <span style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
        {typed}
        {!isComplete && animate && <BlinkingCursor />}
      </span>
    </div>
  );
}

function BlinkingCursor() {
  return (
    <motion.span
      aria-hidden
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.9, repeat: Infinity }}
      style={{
        display: "inline-block",
        width: "0.55em",
        height: "1em",
        background: "var(--workshop-code-prompt)",
        marginLeft: 2,
        verticalAlign: "text-bottom",
      }}
    />
  );
}
