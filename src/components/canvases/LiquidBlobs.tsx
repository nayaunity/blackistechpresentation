"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: "a" | "b";
};

export function LiquidBlobs() {
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
    let blobs: Blob[] = [];
    let scrollV = 0;
    let lastScrollY = window.scrollY;

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      return {
        a: s.getPropertyValue("--accent").trim() || "#D88891",
        b: s.getPropertyValue("--accent-2").trim() || "#2B5F66",
      };
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      blobs = Array.from({ length: 6 }, (_, i) => ({
        x: (w * (i + 1)) / 7 + (Math.random() - 0.5) * 80,
        y: h / 2 + (Math.random() - 0.5) * h * 0.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 180 + Math.random() * 140,
        hue: i % 2 === 0 ? "a" : "b",
      }));
    };

    const onScroll = () => {
      scrollV = Math.min(14, Math.abs(window.scrollY - lastScrollY));
      lastScrollY = window.scrollY;
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

      const { a, b } = readColors();

      scrollV *= 0.92;

      for (const blob of blobs) {
        blob.x += blob.vx * (1 + scrollV * 0.4);
        blob.y += blob.vy * (1 + scrollV * 0.4);

        if (blob.x < -blob.r) blob.x = w + blob.r;
        if (blob.x > w + blob.r) blob.x = -blob.r;
        if (blob.y < -blob.r) blob.y = h + blob.r;
        if (blob.y > h + blob.r) blob.y = -blob.r;

        const color = blob.hue === "a" ? a : b;
        const grad = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.r,
        );
        grad.addColorStop(0, `${color}55`);
        grad.addColorStop(0.6, `${color}11`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0, filter: "blur(36px)" }}
    />
  );
}
