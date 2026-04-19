"use client";

import type { ReactNode } from "react";

export function CodeBlock({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div
      style={{
        background: "var(--workshop-code-bg)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 16,
        padding: "20px 24px",
        fontFamily: "var(--font-mono)",
        color: "var(--workshop-code-fg)",
        fontSize: "clamp(15px, 1.1vw, 18px)",
        lineHeight: 1.55,
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--workshop-code-muted)",
            marginBottom: 10,
          }}
        >
          {label}
        </div>
      )}
      <pre
        style={{
          margin: 0,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontFamily: "inherit",
        }}
      >
        {children}
      </pre>
    </div>
  );
}
