"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { TerminalBlock } from "@/components/workshop/TerminalBlock";
import { slide17HandoffDoc } from "@/lib/workshop/content";

export function SlideHandoffDoc() {
  return (
    <Slide>
      <SlideEyebrow>{slide17HandoffDoc.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide17HandoffDoc.title}</SlideTitleText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: 48,
          marginTop: 12,
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            fontSize: 22,
            lineHeight: 1.4,
          }}
        >
          {slide17HandoffDoc.why.map((w) => (
            <li key={w} style={{ display: "flex", gap: 16 }}>
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
              <span>{w}</span>
            </li>
          ))}
        </ul>

        <TerminalBlock
          lines={slide17HandoffDoc.prompt.lines}
          label="the prompt I use · every session"
        />
      </div>
    </Slide>
  );
}
