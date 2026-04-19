"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export function QRBlock({
  url,
  size = 360,
  light = "#FFFFFF",
  dark = "#0B1220",
}: {
  url: string;
  size?: number;
  light?: string;
  dark?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    QRCode.toCanvas(canvas, url, {
      width: size,
      margin: 2,
      color: { light, dark },
      errorCorrectionLevel: "M",
    }).catch(() => {
      // non-fatal; slide still renders
    });
  }, [url, size, light, dark]);

  return (
    <div
      style={{
        display: "inline-flex",
        padding: 18,
        background: light,
        borderRadius: 14,
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.55)",
      }}
    >
      <canvas ref={canvasRef} aria-label={`QR code linking to ${url}`} />
    </div>
  );
}
