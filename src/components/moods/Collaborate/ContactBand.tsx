"use client";

import { motion } from "framer-motion";
import { collabContent } from "@/lib/content";

export function ContactBand() {
  return (
    <section className="relative px-6 pb-32 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--surface)]/60 p-10 backdrop-blur-sm md:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
            style={{ background: "var(--accent)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--accent-2)" }}
          />

          <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <span className="mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--accent-2)]">
                next up
              </span>
              <h2 className="display mt-3 text-3xl leading-tight md:text-5xl">
                {collabContent.callout.heading}.
              </h2>
              <ol className="mt-6 flex flex-col gap-3 text-[color:var(--fg)]/80">
                {collabContent.callout.items.map((it, i) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mono text-[10px] text-[color:var(--accent)]">
                      0{i + 1}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-3">
              <span className="mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--fg)]/50">
                reach me
              </span>
              {collabContent.contactChannels.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 border-b border-white/10 py-3 text-lg"
                >
                  <span
                    className="display text-2xl"
                    style={{ color: "var(--accent-2)" }}
                    aria-hidden
                  >
                    {c.symbol}
                  </span>
                  <span className="mono flex-1 uppercase tracking-[0.25em]">
                    {c.label}
                  </span>
                  <span className="text-[color:var(--fg)]/40" aria-hidden>
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-[11px] uppercase tracking-[0.4em] text-[color:var(--fg)]/50 mono">
          bring the half-formed idea
        </p>
      </div>
    </section>
  );
}
