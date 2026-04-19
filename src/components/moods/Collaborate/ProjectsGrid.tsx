"use client";

import { motion } from "framer-motion";
import { collabContent } from "@/lib/content";

export function ProjectsGrid() {
  return (
    <section className="relative px-6 py-36 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex items-end justify-between border-b border-[color:var(--fg)]/10 pb-6">
          <div>
            <span className="mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--accent-2)]">
              shipped · shipping · cooking
            </span>
            <h2 className="display mt-2 text-3xl md:text-5xl">
              things I&apos;ve been building.
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collabContent.projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--surface)]/70 p-6 backdrop-blur-sm transition-colors hover:border-[color:var(--accent-2)]/60"
            >
              <span
                className="pointer-events-none absolute inset-x-0 -top-24 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${
                    i % 2 === 0 ? "var(--accent)" : "var(--accent-2)"
                  }, transparent 60%)`,
                }}
                aria-hidden
              />

              <div className="flex items-start justify-between">
                <span
                  className="display text-sm"
                  style={{ color: "var(--accent-2)" }}
                >
                  ◇ {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--fg)]/40 transition-colors group-hover:text-[color:var(--fg)]/80">
                  open ↗
                </span>
              </div>

              <h3 className="display text-2xl leading-tight">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[color:var(--fg)]/70">
                {p.tagline}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="mono rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[color:var(--fg)]/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <span className="mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--accent-2)]">
              giving back
            </span>
            <h3 className="display mt-2 text-3xl">pay it forward, on loop.</h3>
          </div>
          <ul className="col-span-12 flex flex-col gap-4 text-[color:var(--fg)]/80 md:col-span-7">
            {collabContent.openSource.map((line, i) => (
              <motion.li
                key={line}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-4 border-b border-[color:var(--fg)]/10 pb-4"
              >
                <span
                  className="mono text-[11px] text-[color:var(--accent-2)]"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{line}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
