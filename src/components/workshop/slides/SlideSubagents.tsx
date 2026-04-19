"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { TerminalBlock } from "@/components/workshop/TerminalBlock";
import { slide13Subagents } from "@/lib/workshop/content";

export function SlideSubagents() {
  return (
    <Slide>
      <SlideEyebrow>{slide13Subagents.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide13Subagents.title}</SlideTitleText>

      <p
        style={{
          fontSize: 22,
          lineHeight: 1.45,
          color: "rgba(26,26,26,0.85)",
          maxWidth: "62ch",
          marginTop: 0,
          marginBottom: 28,
        }}
      >
        {slide13Subagents.body}
      </p>

      <TerminalBlock lines={slide13Subagents.prompt.lines} />

      <div
        style={{
          marginTop: 32,
          padding: "22px 28px",
          background: "rgba(239,86,42,0.08)",
          border: "1px solid rgba(239,86,42,0.3)",
          borderRadius: 14,
          fontSize: 20,
          lineHeight: 1.4,
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
            marginBottom: 8,
          }}
        >
          for the execs in the room
        </span>
        {slide13Subagents.corporateHook}
      </div>
    </Slide>
  );
}
