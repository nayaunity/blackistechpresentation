"use client";

import { motion } from "framer-motion";
import { hireContent } from "@/lib/content";

export function BookCTA() {
  return (
    <section className="relative px-6 pb-32 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[color:var(--fg)]/10 bg-[color:var(--surface)]/60 p-10 backdrop-blur-sm md:p-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--accent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -bottom-20 h-60 w-60 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--accent-2)" }}
        />

        <div className="relative grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <span className="mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--accent)]">
              Availability
            </span>
            <h2 className="display mt-3 text-3xl leading-tight md:text-5xl">
              {hireContent.cta.heading}
            </h2>
            <p className="mt-5 max-w-lg text-[color:var(--fg)]/80 md:text-lg">
              {hireContent.cta.body}
            </p>
          </div>

          <div className="col-span-12 flex flex-col items-start justify-center gap-3 md:col-span-5 md:items-end">
            <a
              href={hireContent.cta.primary.href}
              className="inline-flex items-center gap-3 rounded-full px-6 py-4 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                boxShadow: "0 18px 40px -14px rgb(0 0 0 / 0.5)",
              }}
            >
              <span>{hireContent.cta.primary.label}</span>
              <span aria-hidden>→</span>
            </a>
            <a
              href={hireContent.cta.secondary.href}
              className="mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)] transition-colors hover:text-[color:var(--fg)]"
            >
              or — {hireContent.cta.secondary.label}
            </a>
          </div>
        </div>
      </motion.div>

      <p className="mx-auto mt-10 max-w-6xl text-center text-[11px] uppercase tracking-[0.4em] text-[color:var(--muted)]">
        tech accessible · and inevitable
      </p>
    </section>
  );
}
