"use client";

import { Slide } from "@/components/workshop/Slide";
import { MarkerHighlight } from "@/components/workshop/MarkerHighlight";
import { slide01Title } from "@/lib/workshop/content";

export function SlideTitle() {
  return (
    <Slide align="center">
      <div style={{ position: "absolute", top: 56, left: 104, right: 104, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--workshop-accent)",
          }}
        >
          {slide01Title.number}
        </span>
        <span
          style={{
            padding: "10px 18px",
            background: "var(--workshop-accent-2)",
            color: "#1A1A1A",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {slide01Title.eyebrow}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 40, maxWidth: "18ch" }}>
        <h1
          style={{
            fontFamily: "var(--workshop-font-display)",
            fontSize: "clamp(80px, 9vw, 160px)",
            lineHeight: 1.02,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: 0,
            color: "#1A1A1A",
          }}
        >
          The New{" "}
          <MarkerHighlight color="orange">Developer</MarkerHighlight>{" "}
          Workflow.
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--workshop-font-body)",
              fontSize: 28,
              fontWeight: 600,
              color: "#1A1A1A",
            }}
          >
            with {slide01Title.presenter}
          </span>
          <span
            style={{
              padding: "8px 18px",
              background: "var(--workshop-accent-4)",
              color: "#1A1A1A",
              borderRadius: 999,
              fontFamily: "var(--font-mono)",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            {slide01Title.handle}
          </span>
        </div>
      </div>
    </Slide>
  );
}
