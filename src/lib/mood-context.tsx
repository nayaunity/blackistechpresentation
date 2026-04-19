"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { Mood, MoodChoice } from "./types";

const STORAGE_KEY = "flickering-hearth:mood";
const CHANGE_EVENT = "flickering-hearth:mood-change";
const TRANSITION_MS = 1100;

type MoodContextValue = {
  mood: MoodChoice;
  chooseMood: (m: Mood) => void;
  reset: () => void;
  transitioning: boolean;
  outgoing: MoodChoice;
};

const MoodContext = createContext<MoodContextValue | null>(null);

function readStoredMood(): MoodChoice {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "hire" || stored === "collaborate" || stored === "curious") {
      return stored;
    }
  } catch {
  }
  return null;
}

function writeStoredMood(mood: MoodChoice) {
  try {
    if (mood) window.localStorage.setItem(STORAGE_KEY, mood);
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

function subscribeMood(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const mood = useSyncExternalStore(
    subscribeMood,
    readStoredMood,
    () => null,
  );
  const [outgoing, setOutgoing] = useState<MoodChoice>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timer = useRef<number | null>(null);
  const prevMood = useRef<MoodChoice>(null);
  const seen = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    if (mood) root.dataset.mood = mood;
    else delete root.dataset.mood;
  }, [mood]);

  useEffect(() => {
    if (!seen.current) {
      prevMood.current = mood;
      seen.current = true;
      return;
    }
    if (prevMood.current === mood) return;

    const from = prevMood.current;
    prevMood.current = mood;

    if (timer.current) window.clearTimeout(timer.current);
    setOutgoing(from);
    setTransitioning(true);
    timer.current = window.setTimeout(() => {
      setTransitioning(false);
      setOutgoing(null);
    }, TRANSITION_MS);
  }, [mood]);

  const chooseMood = useCallback((next: Mood) => {
    writeStoredMood(next);
  }, []);

  const reset = useCallback(() => {
    writeStoredMood(null);
  }, []);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  const value = useMemo(
    () => ({ mood, chooseMood, reset, transitioning, outgoing }),
    [mood, chooseMood, reset, transitioning, outgoing],
  );

  return <MoodContext.Provider value={value}>{children}</MoodContext.Provider>;
}

export function useMood() {
  const ctx = useContext(MoodContext);
  if (!ctx) throw new Error("useMood must be used within MoodProvider");
  return ctx;
}

export { TRANSITION_MS };
