"use client";

import { Slide, SlideEyebrow } from "@/components/workshop/Slide";
import { TerminalBlock } from "@/components/workshop/TerminalBlock";
import { slide03Setup } from "@/lib/workshop/content";

export function SlideSetup() {
  return (
    <Slide pad="lg">
      <SlideEyebrow>{slide03Setup.eyebrow}</SlideEyebrow>
      <h1
        style={{
          fontFamily: "var(--workshop-font-body)",
          fontSize: "clamp(40px, 4.6vw, 72px)",
          lineHeight: 1.02,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "16px 0 22px",
          maxWidth: "22ch",
          color: "var(--workshop-fg)",
        }}
      >
        {slide03Setup.title}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.25fr 1fr",
          gap: 48,
          alignItems: "start",
          marginTop: 4,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {slide03Setup.installs.map((i) => (
            <div
              key={i.platform}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--workshop-fg)",
                }}
              >
                {i.platform}:
              </div>
              <TerminalBlock command={i.command} label="" autoType={false} />
            </div>
          ))}
          <div
            style={{
              fontSize: 16,
              color: "rgba(26,26,26,0.78)",
              marginTop: 6,
              lineHeight: 1.5,
            }}
          >
            Already installed?{" "}
            <code
              style={{
                fontFamily: "var(--font-mono)",
                background: "rgba(26,26,26,0.08)",
                padding: "2px 8px",
                borderRadius: 6,
              }}
            >
              {slide03Setup.updateCommand}
            </code>
            <span style={{ marginLeft: 10, opacity: 0.7 }}>{slide03Setup.opusNote}</span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--workshop-accent)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            docs · {slide03Setup.docs}
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
