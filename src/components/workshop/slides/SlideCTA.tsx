"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { QRBlock } from "@/components/workshop/QRBlock";
import { slide19CTA } from "@/lib/workshop/content";

export function SlideCTA() {
  return (
    <Slide>
      <SlideEyebrow>{slide19CTA.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide19CTA.title}</SlideTitleText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 48,
          marginTop: 20,
        }}
      >
        {slide19CTA.codes.map((c) => (
          <div
            key={c.label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              alignItems: "flex-start",
            }}
          >
            <QRBlock url={c.url} size={320} />
            <div>
              <div
                style={{
                  fontFamily: "var(--workshop-font-display)",
                  fontSize: 36,
                  lineHeight: 1.1,
                }}
              >
                {c.label}
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--workshop-accent)",
                }}
              >
                {c.sublabel}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: 44,
          fontFamily: "var(--workshop-font-display)",
          fontSize: 32,
          fontStyle: "italic",
          color: "var(--workshop-accent)",
        }}
      >
        {slide19CTA.verbal}
      </p>
    </Slide>
  );
}
