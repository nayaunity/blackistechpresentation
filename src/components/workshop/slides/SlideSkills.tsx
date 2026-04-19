"use client";

import { Slide, SlideEyebrow, SlideTitleText } from "@/components/workshop/Slide";
import { slide15Skills } from "@/lib/workshop/content";

export function SlideSkills() {
  return (
    <Slide>
      <SlideEyebrow>{slide15Skills.eyebrow}</SlideEyebrow>
      <SlideTitleText>{slide15Skills.title}</SlideTitleText>

      <p
        style={{
          fontSize: 22,
          color: "rgba(26,26,26,0.85)",
          maxWidth: "60ch",
          marginTop: 0,
          marginBottom: 32,
        }}
      >
        {slide15Skills.body}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 48,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--workshop-accent)",
              marginBottom: 4,
            }}
          >
            examples
          </span>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {slide15Skills.examples.map((e) => (
              <li
                key={e}
                style={{
                  display: "flex",
                  gap: 16,
                  fontSize: 19,
                  lineHeight: 1.4,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    marginTop: "0.7em",
                    width: 18,
                    height: 1,
                    background: "var(--workshop-accent)",
                    flex: "0 0 auto",
                  }}
                />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              padding: "24px 24px",
              background: "var(--workshop-surface)",
              border: "1px solid var(--workshop-border)",
              borderRadius: 14,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--workshop-accent)",
                marginBottom: 10,
              }}
            >
              the problem they solve
            </div>
            <div style={{ fontSize: 18, lineHeight: 1.45 }}>
              {slide15Skills.problemSolved}
            </div>
          </div>

          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 18,
            }}
          >
            {slide15Skills.options.map((o) => (
              <li key={o}>
                <span style={{ color: "var(--workshop-accent)", marginRight: 12 }}>→</span>
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  );
}
