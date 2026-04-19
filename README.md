# Flickering Hearth

A mood-based portfolio. One question, three worlds.

On entry, visitors are asked *"are you here to hire me, collaborate, or just curious?"* Their answer rebuilds the entire experience — palette, typography, motion language, content.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript strict
- Tailwind CSS v4
- framer-motion (mode transitions, reveals, drag physics)
- HTML canvas (ember/orb/blob backgrounds — no WebGL)

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## The three moods

| Mood | Aesthetic | Palette |
| --- | --- | --- |
| Hire Me | Architectural / editorial | Deep navy + bone + warm gold |
| Collaborate | Playful / neon | Violet + cyan + hot pink on near-black |
| Just Curious | Dreamlike / liquid | Rose + teal on warm cream |

Mood persists in `localStorage`. Use the vibe toggle (top-right) to re-open the gate.

## Content

All copy lives in `src/lib/content.ts` — placeholder today, swap with real content later.
