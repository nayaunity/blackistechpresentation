"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide06PlanMode } from "@/lib/workshop/content";

export function SlidePlanMode() {
  return (
    <Slide>
      <SlideEyebrow>{slide06PlanMode.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide06PlanMode.title}</SlideTitleText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: 56,
          marginTop: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.55)",
            }}
          >
            keyboard shortcut
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Kbd>Shift</Kbd>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 32,
                color: "rgba(26,26,26,0.4)",
              }}
            >
              +
            </span>
            <Kbd>Tab</Kbd>
          </div>
        </div>

        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {slide06PlanMode.behavior.map((step, i) => (
            <li
              key={step}
              style={{
                display: "flex",
                gap: 20,
                alignItems: "baseline",
                fontSize: 26,
                lineHeight: 1.35,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  color: "var(--workshop-accent)",
                  flex: "0 0 auto",
                  paddingTop: 4,
                }}
              >
                0{i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <p
        style={{
          marginTop: 56,
          fontFamily: "var(--workshop-font-display)",
          fontSize: 32,
          fontStyle: "italic",
          color: "var(--workshop-accent)",
        }}
      >
        {slide06PlanMode.rule}
      </p>
    </Slide>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "18px 28px",
        background: "var(--workshop-surface)",
        border: "1px solid rgba(26,26,26,0.18)",
        borderBottomWidth: 3,
        borderRadius: 12,
        fontFamily: "var(--font-mono)",
        fontSize: 28,
        color: "var(--workshop-fg)",
        minWidth: 100,
      }}
    >
      {children}
    </kbd>
  );
}
