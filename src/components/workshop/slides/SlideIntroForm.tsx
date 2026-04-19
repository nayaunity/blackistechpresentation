"use client";

import { Card, Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { QRBlock } from "@/components/workshop/QRBlock";
import { MarkerHighlight, Pill } from "@/components/workshop/MarkerHighlight";
import { slide02IntroForm } from "@/lib/workshop/content";

export function SlideIntroForm() {
  return (
    <Slide>
      <SlideEyebrow>{slide02IntroForm.eyebrow}</SlideEyebrow>
      <SlideTitleText serif>
        Scan. Fill out.{" "}
        <MarkerHighlight color="yellow">free toolkit</MarkerHighlight> tonight.
      </SlideTitleText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 64,
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <QRBlock url={slide02IntroForm.qrUrl} size={340} dark="#1A1A1A" light="#FFFFFF" />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--workshop-muted)",
            }}
          >
            {slide02IntroForm.qrCaption}
          </span>
        </div>

        <Card padding="32px 36px">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <Pill color="orange">tonight · in your inbox</Pill>
          </div>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              fontSize: 22,
              lineHeight: 1.4,
              color: "var(--workshop-fg)",
              fontWeight: 500,
            }}
          >
            {slide02IntroForm.toolkitBullets.map((b) => (
              <li key={b} style={{ display: "flex", gap: 14 }}>
                <span style={{ color: "var(--workshop-accent)", fontWeight: 700 }}>+</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div
            style={{
              marginTop: 22,
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--workshop-muted)",
            }}
          >
            {slide02IntroForm.silenceCue}
          </div>
        </Card>
      </div>
    </Slide>
  );
}
