"use client";

import { motion } from "framer-motion";
import { LiquidBlobs } from "@/components/canvases/LiquidBlobs";
import { curiousContent } from "@/lib/content";
import { Story } from "./Story";
import { NowReading } from "./NowReading";
import { EasterEgg } from "./EasterEgg";

export function CuriousMood() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      <LiquidBlobs />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(100% 60% at 50% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 65%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <Story />
        <NowReading />
        <EasterEgg />
        <Closing />
      </div>
    </main>
  );
}

function Closing() {
  return (
    <section className="relative px-6 pb-40 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="mx-auto max-w-3xl rounded-[2rem] border border-[color:var(--fg)]/15 bg-[color:var(--surface)]/70 p-10 backdrop-blur-sm md:p-16"
      >
        <span
          className="script text-2xl"
          style={{ color: "var(--accent)" }}
        >
          p.s.
        </span>
        <h2 className="display mt-3 text-3xl leading-tight md:text-5xl">
          {curiousContent.closing.heading}.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[color:var(--fg)]/80">
          {curiousContent.closing.body}
        </p>
        <a
          href={curiousContent.closing.cta.href}
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-[color:var(--accent-2)]/40 bg-[color:var(--accent-2)] px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          style={{ color: "var(--bg)" }}
        >
          <span>{curiousContent.closing.cta.label}</span>
          <span aria-hidden>↗</span>
        </a>
      </motion.div>
    </section>
  );
}
