"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMood } from "@/lib/mood-context";
import { MOOD_PALETTES, type Mood } from "@/lib/types";

export function MoodTransition() {
  const { transitioning, mood } = useMood();

  return (
    <AnimatePresence>
      {transitioning && mood && <Wipe key={`wipe-${mood}`} mood={mood} />}
    </AnimatePresence>
  );
}

function Wipe({ mood }: { mood: Mood }) {
  if (mood === "hire") return <GoldSweep />;
  if (mood === "collaborate") return <NeonGlitch />;
  return <LiquidBloom />;
}

function GoldSweep() {
  const palette = MOOD_PALETTES.hire;
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.1 } }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 left-0 w-[150%]"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${palette.bg} 10%, ${palette.bg} 50%, ${palette.accent} 58%, ${palette.bg} 66%, ${palette.bg} 90%, transparent 100%)`,
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 right-0 top-1/2 h-[1px] origin-left"
        style={{
          background: palette.accent,
          boxShadow: `0 0 18px ${palette.accent}`,
        }}
      />
    </motion.div>
  );
}

function NeonGlitch() {
  const palette = MOOD_PALETTES.collaborate;
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {[0.04, 0.14, 0.24, 0.36, 0.48].map((delay, i) => (
        <motion.div
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.75, delay, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-x-0"
          style={{
            top: `${i * 20}%`,
            height: "20%",
            background:
              i % 2 === 0
                ? `linear-gradient(180deg, transparent, ${palette.accent} 50%, transparent)`
                : `linear-gradient(180deg, transparent, ${palette.accent2} 50%, transparent)`,
            mixBlendMode: "screen",
          }}
        />
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 1, 0] }}
        transition={{ duration: 0.6, delay: 0.2, times: [0, 0.2, 0.4, 0.7, 1] }}
        className="absolute inset-0"
        style={{ background: palette.bg }}
      />
    </motion.div>
  );
}

function LiquidBloom() {
  const palette = MOOD_PALETTES.curious;
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 14, opacity: 1 }}
        transition={{ duration: 0.95, ease: [0.65, 0, 0.35, 1] }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${palette.bg} 0%, ${palette.bg} 55%, ${palette.accent} 70%, transparent 100%)`,
          filter: "blur(24px)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="absolute inset-0"
        style={{ background: palette.bg }}
      />
    </motion.div>
  );
}
