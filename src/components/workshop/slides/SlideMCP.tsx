"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide14MCP } from "@/lib/workshop/content";

export function SlideMCP() {
  return (
    <Slide>
      <SlideEyebrow>{slide14MCP.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide14MCP.title}</SlideTitleText>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          marginTop: 16,
          marginBottom: 40,
        }}
      >
        {slide14MCP.connects.map((c) => (
          <span
            key={c}
            style={{
              padding: "14px 24px",
              background: "var(--workshop-surface)",
              border: "1px solid rgba(239,86,42,0.35)",
              borderRadius: 999,
              fontFamily: "var(--font-mono)",
              fontSize: 16,
              letterSpacing: "0.12em",
              color: "var(--workshop-fg)",
            }}
          >
            {c}
          </span>
        ))}
      </div>

      <p
        style={{
          fontFamily: "var(--workshop-font-display)",
          fontSize: 30,
          fontStyle: "italic",
          color: "var(--workshop-accent)",
          maxWidth: "52ch",
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {slide14MCP.nextLiveUse}
      </p>
    </Slide>
  );
}
