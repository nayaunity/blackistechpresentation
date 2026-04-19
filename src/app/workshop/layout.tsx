import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop 5 · The New Developer Workflow · Naya Bere",
  description:
    "Black Is Tech Houston 2026 — a 50-minute live build with Claude Code.",
};

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="workshop-root"
      style={{
        background: "var(--workshop-bg)",
        color: "var(--workshop-fg)",
        minHeight: "100svh",
      }}
    >
      {children}
    </div>
  );
}
