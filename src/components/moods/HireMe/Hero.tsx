"use client";

import { motion } from "framer-motion";
import { hireContent, identity } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative px-6 pt-24 sm:px-12 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-between border-b border-[color:var(--fg)]/10 pb-4 text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]"
        >
          <span className="mono">{hireContent.eyebrow}</span>
          <span className="mono hidden sm:inline">{identity.location}</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 pt-16 md:pt-28">
          <div className="col-span-12 md:col-span-9">
            <h1 className="display text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[0.93]">
              {hireContent.headline.map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 36, clipPath: "inset(0 0 100% 0)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.25 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  {line}
                  {i === hireContent.headline.length - 1 && (
                    <span
                      className="ml-3 inline-block h-[0.7em] w-[0.08em] translate-y-[0.06em] align-baseline"
                      style={{ background: "var(--accent)" }}
                      aria-hidden
                    />
                  )}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="col-span-12 md:col-span-9 md:col-start-4"
          >
            <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--fg)]/80 md:text-xl">
              {hireContent.subheadline}
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-[color:var(--fg)]/10 pt-10 md:mt-28 md:grid-cols-4 md:gap-10">
          {hireContent.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 + i * 0.08 }}
              className="flex flex-col gap-2"
            >
              <span
                className="display text-3xl md:text-4xl"
                style={{ color: "var(--accent)" }}
              >
                {m.value}
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
