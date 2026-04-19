"use client";

import { motion } from "framer-motion";
import { curiousContent } from "@/lib/content";

export function Story() {
  return (
    <section className="relative px-6 pt-28 sm:px-12 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8 }}
          className="script text-2xl"
          style={{ color: "var(--accent)" }}
        >
          {curiousContent.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="display mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[0.98] tracking-tight"
        >
          {curiousContent.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg leading-[1.7] text-[color:var(--fg)]/75 md:text-xl"
        >
          {curiousContent.preamble}
        </motion.p>

        <div className="mt-28 flex flex-col gap-28">
          {curiousContent.chapters.map((ch, i) => (
            <motion.article
              key={ch.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-12 gap-6"
            >
              <div className="col-span-12 md:col-span-2">
                <span
                  className="display text-4xl"
                  style={{ color: "var(--accent)" }}
                >
                  {ch.title}
                </span>
              </div>
              <div className="col-span-12 md:col-span-10">
                <h2 className="display text-2xl leading-tight md:text-4xl">
                  {ch.heading}
                </h2>
                <div className="mt-6 flex flex-col gap-5 text-lg leading-[1.8] text-[color:var(--fg)]/85">
                  {ch.prose.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                {i === 0 && (
                  <p
                    className="script mt-4 text-xl"
                    style={{ color: "var(--accent-2)" }}
                  >
                    just a leap. that&apos;s all most of them are.
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
