"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide07PromptStructure } from "@/lib/workshop/content";

export function SlidePromptStructure() {
  return (
    <Slide>
      <SlideEyebrow>{slide07PromptStructure.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide07PromptStructure.title}</SlideTitleText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 22,
          marginTop: 16,
        }}
      >
        {slide07PromptStructure.pieces.map((p, i) => (
          <div
            key={p.label}
            style={{
              padding: "26px 28px",
              borderRadius: 16,
              background: "var(--workshop-surface)",
              border: "1px solid var(--workshop-border)",
              display: "flex",
              gap: 20,
              alignItems: "start",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                color: "var(--workshop-accent)",
                flex: "0 0 auto",
                paddingTop: 4,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span
                style={{
                  fontFamily: "var(--workshop-font-display)",
                  fontSize: 30,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.label}
              </span>
              <span
                style={{
                  fontSize: 17,
                  color: "rgba(26,26,26,0.78)",
                  lineHeight: 1.4,
                }}
              >
                {p.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: 44,
          fontFamily: "var(--workshop-font-display)",
          fontSize: 30,
          fontStyle: "italic",
          color: "var(--workshop-accent)",
        }}
      >
        {slide07PromptStructure.footer}
      </p>
    </Slide>
  );
}
