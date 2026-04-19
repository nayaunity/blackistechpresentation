"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { curiousContent } from "@/lib/content";

export function EasterEgg() {
  const [open, setOpen] = useState(false);
  const [word, setWord] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative px-6 py-32 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => setOpen((o) => !o)}
            className="group relative flex items-center gap-3 rounded-full border border-[color:var(--fg)]/20 bg-[color:var(--surface)]/60 px-5 py-3 text-sm backdrop-blur-sm transition-colors hover:border-[color:var(--accent)]/60"
            aria-expanded={open}
          >
            <span
              className="flicker inline-block h-2 w-2 rounded-full"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 10px var(--accent)",
              }}
              aria-hidden
            />
            <span className="mono uppercase tracking-[0.3em]">
              {open ? "close the door" : "a hidden door"}
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-10 rounded-3xl border border-[color:var(--fg)]/20 bg-[color:var(--surface)]/70 p-8 backdrop-blur-sm md:p-12"
              >
                <p
                  className="display text-2xl leading-tight md:text-3xl"
                  style={{ color: "var(--accent-2)" }}
                >
                  {curiousContent.easterEgg.prompt}
                </p>

                {!submitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (word.trim().length > 0) setSubmitted(true);
                    }}
                    className="mt-8 flex flex-col gap-3 sm:flex-row"
                  >
                    <input
                      value={word}
                      onChange={(e) => setWord(e.target.value)}
                      placeholder={curiousContent.easterEgg.placeholder}
                      maxLength={60}
                      className="flex-1 rounded-full border border-[color:var(--fg)]/20 bg-transparent px-5 py-3 text-base outline-none focus:border-[color:var(--accent)]"
                      aria-label="Your word"
                    />
                    <button
                      type="submit"
                      className="rounded-full px-6 py-3 text-sm font-medium"
                      style={{
                        background: "var(--accent-2)",
                        color: "var(--bg)",
                      }}
                    >
                      hand it over
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 flex flex-col gap-3"
                  >
                    <span
                      className="script text-3xl"
                      style={{ color: "var(--accent)" }}
                    >
                      {curiousContent.easterEgg.response}
                    </span>
                    <span className="mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
                      your word: &ldquo;{word}&rdquo; · kept here, not sent anywhere.
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
