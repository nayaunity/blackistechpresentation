"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide09Permissions } from "@/lib/workshop/content";

export function SlidePermissions() {
  return (
    <Slide>
      <SlideEyebrow>{slide09Permissions.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide09Permissions.title}</SlideTitleText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 22,
          marginTop: 16,
        }}
      >
        {slide09Permissions.options.map((o) => (
          <div
            key={o.key}
            style={{
              padding: "28px 26px",
              borderRadius: 18,
              background: "var(--workshop-surface)",
              border: "1px solid var(--workshop-border)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--workshop-accent)",
              }}
            >
              option
            </div>
            <div
              style={{
                fontFamily: "var(--workshop-font-display)",
                fontSize: 36,
                margin: "10px 0 14px",
              }}
            >
              {o.key}
            </div>
            <div style={{ fontSize: 17, color: "rgba(26,26,26,0.8)", lineHeight: 1.4 }}>
              {o.use}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 32,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          fontSize: 20,
          color: "rgba(26,26,26,0.82)",
        }}
      >
        <div>
          <span style={{ color: "var(--workshop-accent)", fontFamily: "var(--font-mono)" }}>
            Tab
          </span>{" "}
          reveals the full command before you decide.
        </div>
        <div>{slide09Permissions.opusAutoApprove}</div>
      </div>

      <p
        style={{
          marginTop: 32,
          fontFamily: "var(--workshop-font-display)",
          fontSize: 26,
          fontStyle: "italic",
          color: "var(--workshop-accent)",
        }}
      >
        {slide09Permissions.rule}
      </p>
    </Slide>
  );
}
