"use client";

import { motion } from "framer-motion";
import { hireContent } from "@/lib/content";

export function CaseStudies() {
  return (
    <section className="relative px-6 py-36 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 flex items-end justify-between border-b border-[color:var(--fg)]/10 pb-6">
          <div className="flex flex-col gap-2">
            <span className="mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Selected work
            </span>
            <h2 className="display text-3xl md:text-5xl">Case studies.</h2>
          </div>
          <span className="mono hidden text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)] sm:block">
            2022 → 2025
          </span>
        </header>

        <div className="flex flex-col divide-y divide-[color:var(--fg)]/10">
          {hireContent.caseStudies.map((cs, i) => (
            <motion.article
              key={cs.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 gap-6 py-14"
            >
              <div className="col-span-12 flex items-start gap-6 md:col-span-4">
                <span className="display text-4xl text-[color:var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1 pt-2">
                  <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    {cs.year} · {cs.role}
                  </span>
                  <span className="display text-2xl">{cs.client}</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-8">
                <h3 className="display text-2xl leading-snug md:text-3xl">
                  {cs.title}
                </h3>

                <ul className="mt-6 flex flex-col gap-2 text-[color:var(--fg)]/80">
                  {cs.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span
                        className="mt-[0.65em] inline-block h-px w-5 flex-none"
                        style={{ background: "var(--accent)" }}
                        aria-hidden
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cs.stack.map((s) => (
                    <span
                      key={s}
                      className="mono rounded-full border border-[color:var(--fg)]/15 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[color:var(--muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
