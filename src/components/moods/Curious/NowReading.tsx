"use client";

import { motion } from "framer-motion";
import { curiousContent } from "@/lib/content";

export function NowReading() {
  return (
    <section className="relative px-6 py-36 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <span className="script text-2xl" style={{ color: "var(--accent)" }}>
          a /now page
        </span>
        <h2 className="display mt-3 text-3xl leading-tight md:text-5xl">
          this week, mostly.
        </h2>

        <dl className="mt-12 flex flex-col divide-y divide-[color:var(--fg)]/15">
          {curiousContent.nowList.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex flex-col py-5 md:flex-row md:items-baseline md:gap-8"
            >
              <dt className="mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--accent-2)] md:w-28">
                {item.label}
              </dt>
              <dd className="display text-xl leading-snug md:flex-1">
                {item.value}
              </dd>
            </motion.div>
          ))}
        </dl>

        <div className="mt-20 flex flex-col gap-5">
          {curiousContent.marginalia.map((m, i) => (
            <motion.p
              key={m}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="script text-xl leading-relaxed"
              style={{ color: "var(--accent-2)" }}
            >
              {m}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
