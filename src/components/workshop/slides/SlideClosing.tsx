"use client";

import { Slide } from "@/components/workshop/Slide";
import { MarkerHighlight } from "@/components/workshop/MarkerHighlight";
import { slide20Closing } from "@/lib/workshop/content";

export function SlideClosing() {
  return (
    <Slide align="center">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          maxWidth: "80ch",
        }}
      >
        <span
          style={{
            padding: "10px 22px",
            background: "var(--workshop-accent-2)",
            color: "#1A1A1A",
            borderRadius: 999,
            alignSelf: "flex-start",
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {slide20Closing.handle}
        </span>

        <h1
          style={{
            fontFamily: "var(--workshop-font-display)",
            fontSize: "clamp(64px, 7vw, 120px)",
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: 0,
            color: "#1A1A1A",
            maxWidth: "18ch",
          }}
        >
          Thank you,{" "}
          <MarkerHighlight color="orange">Black Is Tech</MarkerHighlight>.
        </h1>

        <p
          style={{
            fontFamily: "var(--workshop-font-display)",
            fontSize: "clamp(32px, 3.6vw, 56px)",
            lineHeight: 1.1,
            fontWeight: 500,
            fontStyle: "italic",
            margin: 0,
            color: "var(--workshop-accent)",
          }}
        >
          See you outside.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginTop: 10,
          }}
        >
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "var(--workshop-accent)",
              border: "3px solid #1A1A1A",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "var(--workshop-fg)",
            }}
          >
            {slide20Closing.brand}
          </span>
        </div>
      </div>
    </Slide>
  );
}
