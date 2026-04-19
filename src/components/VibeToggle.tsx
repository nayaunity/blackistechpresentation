"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useMood } from "@/lib/mood-context";
import { MOOD_LABELS, MOOD_PALETTES, MOODS, type Mood } from "@/lib/types";

export function VibeToggle() {
  const { mood, chooseMood, reset } = useMood();
  const [open, setOpen] = useState(false);

  if (!mood) return null;

  return (
    <div className="fixed right-5 top-5 z-30 flex flex-col items-end gap-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex items-center gap-2 rounded-full border border-[color:var(--fg)]/15 bg-[color:var(--surface)]/70 px-4 py-2 text-xs backdrop-blur-md transition-colors hover:border-[color:var(--accent)]/60"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Change mood"
      >
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ background: MOOD_PALETTES[mood].accent }}
        >
          <span
            className="absolute inset-0 rounded-full opacity-60 blur-[3px]"
            style={{ background: MOOD_PALETTES[mood].accent }}
            aria-hidden
          />
        </span>
        <span className="mono uppercase tracking-[0.25em] text-[color:var(--fg)]/80">
          {MOOD_LABELS[mood]}
        </span>
        <span className="text-[color:var(--fg)]/40 transition-transform group-hover:translate-x-0.5">
          ⇄
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97, transition: { duration: 0.15 } }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-w-[220px] flex-col gap-1 rounded-2xl border border-[color:var(--fg)]/15 bg-[color:var(--surface)]/90 p-2 text-xs backdrop-blur-xl"
            role="menu"
          >
            {MOODS.filter((m) => m !== mood).map((m) => (
              <MoodRow
                key={m}
                m={m}
                onSelect={() => {
                  setOpen(false);
                  chooseMood(m);
                }}
              />
            ))}
            <div className="mx-2 my-1 h-px bg-[color:var(--fg)]/10" />
            <button
              onClick={() => {
                setOpen(false);
                reset();
              }}
              role="menuitem"
              className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-[color:var(--fg)]/60 transition-colors hover:bg-[color:var(--fg)]/5 hover:text-[color:var(--fg)]"
            >
              <span className="mono uppercase tracking-[0.2em]">reopen the gate</span>
              <span>↺</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MoodRow({ m, onSelect }: { m: Mood; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      role="menuitem"
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-[color:var(--fg)]/5"
    >
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{ background: MOOD_PALETTES[m].accent }}
        aria-hidden
      />
      <span className="flex-1 text-[color:var(--fg)]/90">{MOOD_LABELS[m]}</span>
      <span className="mono text-[9px] uppercase tracking-[0.3em] text-[color:var(--fg)]/40">
        door
      </span>
    </button>
  );
}
