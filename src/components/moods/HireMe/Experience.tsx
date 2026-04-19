"use client";

import { motion } from "framer-motion";
import { hireContent } from "@/lib/content";

export function Experience() {
  return (
    <section className="relative px-6 pb-36 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <span className="mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--muted)]">
              History
            </span>
            <h2 className="display mt-2 text-3xl md:text-4xl">
              Teaching,
              <br />
              then shipping.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-8">
            <ol className="flex flex-col">
              {hireContent.experience.map((item, i) => (
                <motion.li
                  key={item.years}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="flex items-baseline justify-between border-b border-[color:var(--fg)]/10 py-5"
                >
                  <span className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    {item.years}
                  </span>
                  <span className="display text-right text-xl md:text-2xl">
                    {item.role}
                  </span>
                </motion.li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-2">
              {hireContent.credentials.map((c) => (
                <span
                  key={c}
                  className="mono rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[color:var(--accent)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
