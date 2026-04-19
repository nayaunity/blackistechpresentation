"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { TerminalBlock } from "@/components/workshop/TerminalBlock";
import { slide03Setup } from "@/lib/workshop/content";

export function SlideSetup() {
  return (
    <Slide>
      <SlideEyebrow>{slide03Setup.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide03Setup.title}</SlideTitleText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 60,
          alignItems: "start",
          marginTop: 12,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <TerminalBlock command={slide03Setup.installCommand} />
          <TerminalBlock
            lines={[{ prompt: "$", text: slide03Setup.updateCommand }]}
            label="already installed? update."
          />
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 16,
              color: "var(--workshop-accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            docs · {slide03Setup.docs}
          </div>
          <div style={{ fontSize: 20, color: "rgba(26,26,26,0.8)" }}>
            {slide03Setup.opusNote}
          </div>
        </div>

        <div
          style={{
            background: "var(--workshop-surface)",
            borderRadius: 20,
            border: "1px solid var(--workshop-border)",
            padding: "28px 32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--workshop-accent)",
              marginBottom: 18,
            }}
          >
            not working? try this.
          </div>
          <ol
            style={{
              margin: 0,
              paddingLeft: 20,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              fontSize: 18,
              lineHeight: 1.4,
            }}
          >
            {slide03Setup.notWorking.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </Slide>
  );
}
