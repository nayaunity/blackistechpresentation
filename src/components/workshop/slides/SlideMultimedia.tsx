"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide12Multimedia } from "@/lib/workshop/content";

export function SlideMultimedia() {
  return (
    <Slide>
      <SlideEyebrow>{slide12Multimedia.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide12Multimedia.title}</SlideTitleText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 56,
          marginTop: 16,
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
          {slide12Multimedia.accepted.map((a) => (
            <li
              key={a}
              style={{
                display: "flex",
                gap: 18,
                fontSize: 22,
                lineHeight: 1.4,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  color: "var(--workshop-accent)",
                  paddingTop: 6,
                }}
              >
                +
              </span>
              <span>{a}</span>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <p
            style={{
              fontFamily: "var(--workshop-font-display)",
              fontSize: 32,
              fontStyle: "italic",
              color: "var(--workshop-accent)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {slide12Multimedia.principle}
          </p>

          <div
            style={{
              padding: "22px 24px",
              background: "var(--workshop-surface)",
              borderRadius: 14,
              border: "1px solid var(--workshop-border)",
              fontSize: 17,
              lineHeight: 1.5,
              color: "rgba(26,26,26,0.85)",
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--workshop-accent)",
                marginBottom: 10,
              }}
            >
              this session&apos;s example
            </span>
            {slide12Multimedia.example}
          </div>
        </div>
      </div>
    </Slide>
  );
}
