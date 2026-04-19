"use client";

import { NeonOrbs } from "@/components/canvases/NeonOrbs";
import { IdeaBoard } from "./IdeaBoard";
import { ProjectsGrid } from "./ProjectsGrid";
import { ContactBand } from "./ContactBand";

export function CollaborateMood() {
  return (
    <main className="relative min-h-svh overflow-hidden grain">
      <NeonOrbs />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 100% 0%, color-mix(in srgb, var(--accent) 20%, transparent), transparent 55%), radial-gradient(60% 60% at 0% 100%, color-mix(in srgb, var(--accent-2) 22%, transparent), transparent 55%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <IdeaBoard />
        <ProjectsGrid />
        <ContactBand />
      </div>
    </main>
  );
}
