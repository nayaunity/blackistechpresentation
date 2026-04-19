export type Mood = "hire" | "collaborate" | "curious";

export type MoodChoice = Mood | null;

export const MOODS: Mood[] = ["hire", "collaborate", "curious"];

export const MOOD_LABELS: Record<Mood, string> = {
  hire: "Hire me",
  collaborate: "Collaborate",
  curious: "Just curious",
};

export const MOOD_TAGLINES: Record<Mood, string> = {
  hire: "Ship serious work with a steady hand.",
  collaborate: "Build the weird idea with me.",
  curious: "Wander through the margins.",
};

export const MOOD_PALETTES: Record<
  Mood,
  {
    bg: string;
    fg: string;
    muted: string;
    accent: string;
    accent2: string;
    surface: string;
  }
> = {
  hire: {
    bg: "#0B1220",
    fg: "#F3EEE4",
    muted: "#8A93A6",
    accent: "#C8A15A",
    accent2: "#7C5A2A",
    surface: "#111B2E",
  },
  collaborate: {
    bg: "#0A0612",
    fg: "#F4EEFF",
    muted: "#A99CC6",
    accent: "#7A3BFF",
    accent2: "#3BE8FF",
    surface: "#140B22",
  },
  curious: {
    bg: "#FBF6EC",
    fg: "#1F2F30",
    muted: "#6B7F7A",
    accent: "#D88891",
    accent2: "#2B5F66",
    surface: "#F4EADC",
  },
};
