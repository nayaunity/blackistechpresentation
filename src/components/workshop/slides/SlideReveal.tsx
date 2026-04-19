"use client";

import Link from "next/link";
import { Slide, SlideEyebrow } from "@/components/workshop/Slide";
import { MarkerHighlight } from "@/components/workshop/MarkerHighlight";
import { slide16Reveal } from "@/lib/workshop/content";

export function SlideReveal() {
  return (
    <Slide align="center">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 36,
          alignItems: "flex-start",
        }}
      >
        <SlideEyebrow>{slide16Reveal.eyebrow}</SlideEyebrow>

        <h1
          style={{
            fontFamily: "var(--workshop-font-display)",
            fontSize: "clamp(108px, 13vw, 220px)",
            lineHeight: 0.96,
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.02em",
            color: "#1A1A1A",
            maxWidth: "14ch",
          }}
        >
          Pick a{" "}
          <MarkerHighlight color="orange">door</MarkerHighlight>.
        </h1>

        <p
          style={{
            fontSize: 24,
            maxWidth: "52ch",
            color: "var(--workshop-fg)",
            lineHeight: 1.45,
            margin: 0,
            fontWeight: 500,
          }}
        >
          {slide16Reveal.subtitle}
        </p>

        <Link
          href={slide16Reveal.ctaHref}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            padding: "22px 38px",
            background: "#1A1A1A",
            color: "var(--workshop-accent-2)",
            fontFamily: "var(--font-mono)",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            borderRadius: 999,
            boxShadow: "0 16px 36px -14px rgba(26,26,26,0.35)",
          }}
        >
          <span>{slide16Reveal.cta}</span>
        </Link>

        <p
          style={{
            marginTop: 16,
            fontFamily: "var(--workshop-font-display)",
            fontSize: 32,
            fontStyle: "italic",
            color: "var(--workshop-accent)",
            fontWeight: 600,
          }}
        >
          {slide16Reveal.closing}
        </p>
      </div>
    </Slide>
  );
}
