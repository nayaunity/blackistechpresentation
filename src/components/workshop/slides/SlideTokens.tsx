"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slideTokens } from "@/lib/workshop/content";

export function SlideTokens() {
  return (
    <Slide>
      <SlideEyebrow>{slideTokens.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slideTokens.title}</SlideTitleText>

      <p
        style={{
          fontSize: 22,
          maxWidth: "62ch",
          color: "rgba(26,26,26,0.85)",
          marginTop: 0,
          marginBottom: 32,
          lineHeight: 1.45,
        }}
      >
        {slideTokens.core}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {slideTokens.reasons.map((r) => (
          <div
            key={r.label}
            style={{
              padding: "26px 26px 30px",
              background: "var(--workshop-surface)",
              border: "1px solid var(--workshop-border)",
              borderRadius: 18,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--workshop-accent)",
              }}
            >
              why it matters
            </span>
            <span
              style={{
                fontFamily: "var(--workshop-font-display)",
                fontSize: 38,
                lineHeight: 1.1,
              }}
            >
              {r.label}
            </span>
            <span style={{ fontSize: 18, color: "rgba(26,26,26,0.82)", lineHeight: 1.45 }}>
              {r.body}
            </span>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: 32,
          fontFamily: "var(--workshop-font-display)",
          fontSize: 28,
          fontStyle: "italic",
          color: "var(--workshop-accent)",
        }}
      >
        {slideTokens.takeaway}
      </p>
    </Slide>
  );
}
