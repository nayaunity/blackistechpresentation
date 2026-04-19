"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { TerminalBlock } from "@/components/workshop/TerminalBlock";
import { slide05FirstPrompt } from "@/lib/workshop/content";

export function SlideFirstPrompt() {
  return (
    <Slide>
      <SlideEyebrow>{slide05FirstPrompt.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide05FirstPrompt.title}</SlideTitleText>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 18,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--workshop-accent)",
          marginTop: 0,
          marginBottom: 26,
        }}
      >
        {slide05FirstPrompt.cue}
      </p>

      <TerminalBlock lines={slide05FirstPrompt.lines} />

      <p
        style={{
          marginTop: 32,
          fontSize: 20,
          color: "rgba(26,26,26,0.7)",
          maxWidth: "62ch",
        }}
      >
        {slide05FirstPrompt.aside}
      </p>
    </Slide>
  );
}
