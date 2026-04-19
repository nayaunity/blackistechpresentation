"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { collabContent } from "@/lib/content";

const heatGlow: Record<string, string> = {
  hot: "rgba(255,59,212,0.55)",
  warm: "rgba(122,59,255,0.45)",
  idle: "rgba(59,232,255,0.35)",
};

export function IdeaBoard() {
  const stickies = useMemo(
    () =>
      collabContent.ideas.map((idea, i) => ({
        ...idea,
        rotate: -5 + ((i * 37) % 10),
        top: (i * 53) % 80,
        left: (i * 89) % 80,
      })),
    [],
  );

  return (
    <section className="relative px-6 pt-24 sm:px-12 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3">
          <span className="mono text-xs uppercase tracking-[0.3em] text-[color:var(--accent-2)]">
            {collabContent.eyebrow}
          </span>
          <h1 className="display text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.92]">
            <span className="relative inline-block">
              <span
                className="absolute inset-0 -z-10 blur-2xl"
                style={{ background: "var(--accent)", opacity: 0.5 }}
                aria-hidden
              />
              <span>{collabContent.headline}</span>
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--fg)]/80 md:text-xl">
            {collabContent.subheadline}
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-2 text-[color:var(--fg)]/80 md:mt-20">
          {collabContent.invites.map((i, idx) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="mono text-sm"
            >
              <span style={{ color: "var(--accent-2)" }}>↳ </span>
              {i}
            </motion.p>
          ))}
        </div>

        <div className="relative mt-24 h-[540px] overflow-hidden rounded-3xl border border-[color:var(--fg)]/10 bg-black/30 p-6 md:h-[620px]">
          <div className="absolute left-6 top-6 z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[color:var(--fg)]/50">
            <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            <span className="mono">idea board · drag anything</span>
          </div>

          {stickies.map((s, i) => (
            <motion.button
              key={s.title}
              drag
              dragElastic={0.2}
              dragMomentum={false}
              whileHover={{ scale: 1.04 }}
              whileDrag={{ scale: 1.06, zIndex: 20 }}
              initial={{ opacity: 0, y: 20, rotate: s.rotate }}
              animate={{ opacity: 1, y: 0, rotate: s.rotate }}
              transition={{
                duration: 0.6,
                delay: 0.05 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute flex min-w-[210px] max-w-[260px] cursor-grab flex-col gap-2 rounded-2xl border border-white/10 bg-[color:var(--surface)]/90 p-5 text-left backdrop-blur-sm active:cursor-grabbing"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                boxShadow: `0 22px 50px -18px ${heatGlow[s.heat]}`,
              }}
              aria-label={`Sticky idea: ${s.title}`}
            >
              <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--fg)]/60">
                {s.tag}
              </span>
              <span className="display text-lg leading-tight text-[color:var(--fg)]">
                {s.title}
              </span>
              <span className="mono mt-1 text-[9px] uppercase tracking-[0.3em] text-[color:var(--accent-2)]">
                {s.heat}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
