"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useMood } from "@/lib/mood-context";
import { Gate } from "@/components/Gate";
import { MoodTransition } from "@/components/MoodTransition";
import { VibeToggle } from "@/components/VibeToggle";
import { MOOD_LABELS } from "@/lib/types";

const HireMeMood = dynamic(
  () => import("@/components/moods/HireMe").then((m) => m.HireMeMood),
  { ssr: false },
);
const CollaborateMood = dynamic(
  () => import("@/components/moods/Collaborate").then((m) => m.CollaborateMood),
  { ssr: false },
);
const CuriousMood = dynamic(
  () => import("@/components/moods/Curious").then((m) => m.CuriousMood),
  { ssr: false },
);

export default function Page() {
  const { mood } = useMood();

  return (
    <>
      <div className="sr-only" role="status" aria-live="polite">
        {mood ? `Viewing in ${MOOD_LABELS[mood]} mode.` : "Choose a mode."}
      </div>

      <AnimatePresence mode="wait">
        {!mood ? (
          <Gate key="gate" />
        ) : (
          <motion.div
            key={`mood-${mood}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.55, duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            {mood === "hire" && <HireMeMood />}
            {mood === "collaborate" && <CollaborateMood />}
            {mood === "curious" && <CuriousMood />}
          </motion.div>
        )}
      </AnimatePresence>

      <VibeToggle />
      <MoodTransition />
    </>
  );
}
