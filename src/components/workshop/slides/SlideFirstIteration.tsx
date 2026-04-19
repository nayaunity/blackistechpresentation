"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide11FirstIteration } from "@/lib/workshop/content";

export function SlideFirstIteration() {
  return (
    <Slide>
      <SlideEyebrow>{slide11FirstIteration.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide11FirstIteration.title}</SlideTitleText>

      <p style={{ fontSize: 24, maxWidth: "62ch", color: "rgba(26,26,26,0.85)", marginTop: 0, marginBottom: 40 }}>
        {slide11FirstIteration.subtitle}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          borderLeft: "2px solid var(--workshop-accent)",
          paddingLeft: 28,
          fontFamily: "var(--workshop-font-display)",
          fontSize: "clamp(30px, 3.5vw, 48px)",
          lineHeight: 1.2,
        }}
      >
        {slide11FirstIteration.framing.map((l, i) => (
          <p key={i} style={{ margin: 0 }}>
            {l}
          </p>
        ))}
      </div>

      <p
        style={{
          marginTop: 40,
          fontFamily: "var(--font-mono)",
          fontSize: 16,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--workshop-accent)",
        }}
      >
        {slide11FirstIteration.nextCue}
      </p>
    </Slide>
  );
}
