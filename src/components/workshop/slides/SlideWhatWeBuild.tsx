"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { MarkerHighlight } from "@/components/workshop/MarkerHighlight";
import { slide04WhatWeBuild } from "@/lib/workshop/content";

const tints = ["#FFE2D6", "#E4DAFF", "#FDE9D6"];

export function SlideWhatWeBuild() {
  return (
    <Slide>
      <SlideEyebrow>{slide04WhatWeBuild.eyebrow}</SlideEyebrow>
      <SlideTitleText serif>
        Three portraits.{" "}
        <MarkerHighlight color="lime">one person.</MarkerHighlight>{" "}
        Live.
      </SlideTitleText>

      <p
        style={{
          fontSize: 22,
          maxWidth: "64ch",
          color: "var(--workshop-fg)",
          marginTop: 0,
          marginBottom: 40,
          lineHeight: 1.45,
          fontWeight: 500,
        }}
      >
        {slide04WhatWeBuild.description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 22,
        }}
      >
        {slide04WhatWeBuild.modes.map((m, i) => (
          <div
            key={m.name}
            style={{
              position: "relative",
              overflow: "hidden",
              background: tints[i],
              border: "1px solid var(--workshop-border)",
              borderRadius: 24,
              padding: "30px 28px 34px",
              minHeight: 240,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#1A1A1A",
                opacity: 0.55,
              }}
            >
              door 0{i + 1}
            </div>
            <div
              style={{
                fontFamily: "var(--workshop-font-display)",
                fontSize: 44,
                fontWeight: 700,
                marginTop: 14,
                color: "#1A1A1A",
                letterSpacing: "-0.01em",
              }}
            >
              {m.name}.
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: 16,
                lineHeight: 1.4,
                color: "#1A1A1A",
                fontWeight: 500,
              }}
            >
              {m.tagline}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 22,
                left: 28,
                right: 28,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.55)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: m.accent,
                  border: "2px solid #1A1A1A",
                }}
              />
              <span>mood · {m.accent}</span>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: 42,
          fontFamily: "var(--font-mono)",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--workshop-accent)",
        }}
      >
        {slide04WhatWeBuild.footer}
      </p>
    </Slide>
  );
}
