"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide18ClaudeMD } from "@/lib/workshop/content";

export function SlideClaudeMD() {
  return (
    <Slide>
      <SlideEyebrow>{slide18ClaudeMD.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide18ClaudeMD.title}</SlideTitleText>

      <div
        style={{
          marginTop: 12,
          padding: "32px 36px",
          background: "rgba(239,86,42,0.08)",
          border: "1px solid rgba(239,86,42,0.35)",
          borderRadius: 18,
          fontFamily: "var(--workshop-font-display)",
          fontSize: 32,
          fontStyle: "italic",
          color: "var(--workshop-accent)",
          maxWidth: "52ch",
          lineHeight: 1.25,
        }}
      >
        &ldquo;{slide18ClaudeMD.rule}&rdquo;
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          marginTop: 40,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--workshop-accent)",
              marginBottom: 10,
            }}
          >
            where it lives
          </div>
          <div style={{ fontSize: 22, marginBottom: 24 }}>
            {slide18ClaudeMD.lives}
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--workshop-accent)",
              marginBottom: 10,
            }}
          >
            what it contains
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 18,
            }}
          >
            {slide18ClaudeMD.contains.map((c) => (
              <li key={c}>
                <span style={{ color: "var(--workshop-accent)", marginRight: 12 }}>·</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--workshop-accent)",
              marginBottom: 10,
            }}
          >
            why it matters
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              fontSize: 20,
              lineHeight: 1.4,
            }}
          >
            {slide18ClaudeMD.impact.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  );
}
