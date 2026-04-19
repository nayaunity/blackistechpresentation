"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type Line = {
  y: number;
  speed: number;
  width: number;
  alpha: number;
  phase: number;
};

export function ArchitecturalLines() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let lines: Line[] = [];

    const readColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim() || "#C8A15A";

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(8, Math.min(22, Math.floor(h / 42)));
      lines = Array.from({ length: count }, (_, i) => ({
        y: (h / count) * i + Math.random() * 12,
        speed: 0.06 + Math.random() * 0.12,
        width: 0.4 + Math.random() * 0.8,
        alpha: 0.08 + Math.random() * 0.22,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(tick);
      else cancelAnimationFrame(raf);
    };

    const tick = () => {
      if (!running) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const color = readColor();

      for (const line of lines) {
        line.phase += line.speed * 0.01;
        const offsetX = Math.sin(line.phase) * 30;
        ctx.globalAlpha = line.alpha;
        ctx.strokeStyle = color;
        ctx.lineWidth = line.width;
        ctx.beginPath();
        ctx.moveTo(-20 + offsetX, line.y);
        ctx.lineTo(w + 20 + offsetX, line.y);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0 }}
    />
  );
}
