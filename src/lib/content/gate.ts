export const gateContent = {
  prompt: "Why are you here?",
  supportingLine:
    "I'm Naya. Pick the door that matches why you came. The room rearranges itself.",
  options: [
    {
      mood: "hire" as const,
      label: "Hire me",
      description:
        "You're staffing DevRel, LLM, or AI content. Let's talk about the work.",
      hint: "Open the résumé.",
    },
    {
      mood: "collaborate" as const,
      label: "Collaborate",
      description:
        "You want to co-build, co-teach, or partner on something with my community.",
      hint: "Open the studio.",
    },
    {
      mood: "curious" as const,
      label: "Just curious",
      description: "You found me via a video, a talk, or a friend. Welcome.",
      hint: "Open the story.",
    },
  ],
};
