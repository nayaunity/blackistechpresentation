"use client";

import { motion, type Variants } from "framer-motion";
import { gateContent } from "@/lib/content";
import { useMood } from "@/lib/mood-context";
import { MOOD_PALETTES } from "@/lib/types";

const letterVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.06,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const cardVariants: Variants = {
  hidden: { y: 48, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.9 + i * 0.12,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Gate() {
  const { chooseMood } = useMood();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center px-6 py-16 text-[color:var(--fg)]"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 10%, rgba(120,90,180,0.28), transparent 55%), radial-gradient(120% 90% at 50% 110%, rgba(200,160,90,0.22), transparent 60%), #05050A",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your portfolio mode"
    >
      <GateBackdrop />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mono text-xs uppercase tracking-[0.3em] text-white/60"
          >
            Flickering Hearth · a mood-based portfolio
          </motion.p>

          <h1 className="display text-center text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] text-white">
            <span className="sr-only">{gateContent.prompt}</span>
            <span aria-hidden className="block overflow-hidden">
              <span className="inline-flex overflow-hidden">
                {gateContent.prompt.split("").map((ch, i) => (
                  <motion.span
                    key={`${ch}-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{
                      whiteSpace: ch === " " ? "pre" : "normal",
                    }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="max-w-md text-center text-base text-white/70"
          >
            {gateContent.supportingLine}
          </motion.p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {gateContent.options.map((opt, i) => {
            const palette = MOOD_PALETTES[opt.mood];
            return (
              <motion.button
                key={opt.mood}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => chooseMood(opt.mood)}
                className="group relative flex flex-col items-start gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left backdrop-blur-sm transition-colors hover:border-white/30"
                aria-label={`Enter ${opt.label} mode — ${opt.description}`}
              >
                <span
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-60 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-90"
                  style={{
                    background: `radial-gradient(circle, ${palette.accent}, transparent 70%)`,
                  }}
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full opacity-30 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-70"
                  style={{
                    background: `radial-gradient(circle, ${palette.accent2}, transparent 70%)`,
                  }}
                  aria-hidden
                />

                <span className="mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  door {String(i + 1).padStart(2, "0")}
                </span>

                <span className="display text-4xl font-light text-white">
                  {opt.label}.
                </span>

                <span className="text-sm leading-relaxed text-white/70">
                  {opt.description}
                </span>

                <span className="mt-auto flex items-center gap-2 text-xs text-white/50">
                  <span
                    className="inline-block h-[6px] w-[6px] rounded-full"
                    style={{ background: palette.accent }}
                  />
                  <span>{opt.hint}</span>
                  <span className="ml-auto translate-x-0 text-white/30 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mono text-[10px] uppercase tracking-[0.4em] text-white/50"
        >
          press a door · the room rearranges
        </motion.p>
      </div>
    </motion.div>
  );
}

function GateBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.9) 0 1px, transparent 1px 3px)",
          maskImage:
            "radial-gradient(60% 60% at 50% 50%, black, transparent)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.6, 1, 0.75, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(200,161,90,0.18), transparent 70%)",
        }}
      />
    </>
  );
}
