"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { slideManifest } from "@/lib/workshop/manifest";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function readHashIndex(): number {
  if (typeof window === "undefined") return 0;
  const raw = window.location.hash.replace("#", "");
  const n = parseInt(raw, 10);
  if (!Number.isFinite(n)) return 0;
  return clamp(n - 1, 0, slideManifest.length - 1);
}

function subscribeHash(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

export function SlideDeck() {
  const total = slideManifest.length;
  const index = useSyncExternalStore(
    subscribeHash,
    readHashIndex,
    () => 0,
  );
  const [blank, setBlank] = useState(false);

  const go = useCallback(
    (next: number) => {
      const clamped = clamp(next, 0, total - 1);
      if (typeof window === "undefined") return;
      window.location.hash = `${clamped + 1}`;
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;
      }
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          go(index + 1);
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          go(index - 1);
          break;
        case "Home":
          e.preventDefault();
          go(0);
          break;
        case "End":
          e.preventDefault();
          go(total - 1);
          break;
        case "b":
        case "B":
          e.preventDefault();
          setBlank((v) => !v);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go, total]);

  const meta = slideManifest[index];
  const Current = meta.Component;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--workshop-bg)",
        overflow: "hidden",
      }}
    >
      <div
        onClick={(e) => {
          const x = e.clientX;
          const w = window.innerWidth;
          if (x < w / 2) go(index - 1);
          else go(index + 1);
        }}
        style={{ position: "absolute", inset: 0, cursor: "pointer" }}
      />

      <AnimatePresence mode="wait">
        <div key={meta.id} style={{ position: "absolute", inset: 0 }}>
          {!blank && <Current />}
        </div>
      </AnimatePresence>

      {blank && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#000",
          }}
        />
      )}

      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 4,
          background: "rgba(26, 26, 26, 0.08)",
          pointerEvents: "none",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            background: "var(--workshop-accent)",
            transformOrigin: "left",
          }}
          initial={false}
          animate={{ scaleX: (index + 1) / total }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div
        aria-hidden
        style={{
          position: "absolute",
          right: 24,
          bottom: 20,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.22em",
          color: "rgba(26, 26, 26, 0.45)",
          pointerEvents: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </div>
  );
}
