"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide10ContextTokens } from "@/lib/workshop/content";

export function SlideContextTokens() {
  return (
    <Slide>
      <SlideEyebrow>{slide10ContextTokens.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide10ContextTokens.title}</SlideTitleText>

      <p
        style={{
          fontSize: 24,
          maxWidth: "60ch",
          color: "rgba(26,26,26,0.85)",
          marginTop: 0,
          marginBottom: 36,
        }}
      >
        {slide10ContextTokens.core}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 22,
        }}
      >
        {slide10ContextTokens.commands.map((c) => (
          <div
            key={c.name}
            style={{
              padding: "28px 28px 32px",
              background: "var(--workshop-surface)",
              border: "1px solid var(--workshop-border)",
              borderRadius: 18,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 34,
                color: "var(--workshop-accent)",
              }}
            >
              {c.name}
            </span>
            <span style={{ fontSize: 20, color: "var(--workshop-fg)", lineHeight: 1.4 }}>
              {c.effect}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.55)",
                marginTop: 4,
              }}
            >
              {c.when}
            </span>
          </div>
        ))}
      </div>
    </Slide>
  );
}
