"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide08BioHook } from "@/lib/workshop/content";

export function SlideBioHook() {
  return (
    <Slide>
      <SlideEyebrow>{slide08BioHook.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide08BioHook.title}</SlideTitleText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 56,
          marginTop: 20,
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {slide08BioHook.bullets.map((b) => (
            <li
              key={b}
              style={{
                display: "flex",
                gap: 16,
                fontSize: 22,
                lineHeight: 1.4,
              }}
            >
              <span
                aria-hidden
                style={{
                  marginTop: "0.7em",
                  width: 22,
                  height: 1,
                  background: "var(--workshop-accent)",
                  flex: "0 0 auto",
                }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div
          style={{
            border: "1px solid rgba(239,86,42,0.35)",
            background: "rgba(239,86,42,0.08)",
            borderRadius: 20,
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontFamily: "var(--workshop-font-display)",
              fontSize: "clamp(64px, 8vw, 112px)",
              lineHeight: 1,
              color: "var(--workshop-accent)",
            }}
          >
            {slide08BioHook.stat.value}
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.4, color: "var(--workshop-fg)" }}>
            {slide08BioHook.stat.label}
          </div>
        </div>
      </div>

      <p
        style={{
          marginTop: 40,
          fontFamily: "var(--workshop-font-display)",
          fontSize: 26,
          fontStyle: "italic",
          color: "rgba(26,26,26,0.85)",
        }}
      >
        {slide08BioHook.softCTA}
      </p>
    </Slide>
  );
}
