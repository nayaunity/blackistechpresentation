"use client";

import { ArchitecturalLines } from "@/components/canvases/ArchitecturalLines";
import { Hero } from "./Hero";
import { CaseStudies } from "./CaseStudies";
import { Experience } from "./Experience";
import { BookCTA } from "./BookCTA";

export function HireMeMood() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      <ArchitecturalLines />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(110% 60% at 50% 0%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 60%), radial-gradient(90% 60% at 50% 100%, color-mix(in srgb, var(--accent-2) 22%, transparent), transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <Hero />
        <CaseStudies />
        <Experience />
        <BookCTA />
      </div>
    </main>
  );
}
