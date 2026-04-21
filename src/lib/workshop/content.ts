// Source of truth for every slide. The deck is derived from this file.
// Playwright sync scripts also read from here.

import { identity } from "@/lib/identity";

export const workshopMeta = {
  title: "The New Developer Workflow",
  number: "Workshop 5",
  conference: "Black Is Tech Houston 2026",
  handle: "@theblackfemaleengineer",
  presenter: identity.name,
  durationMinutes: 50,
};

// URLs used on QR-code slides. Swap for real form/survey/inquiry links when ready.
export const workshopLinks = {
  introForm:
    "https://docs.google.com/forms/d/e/1FAIpQLScL_HvB7jRRD9ZnBhE2WiyLsLBXGmZ4Gs81FbKdWYY-R-xaxQ/viewform",
  endSurvey:
    "https://docs.google.com/forms/d/e/1FAIpQLSfapRiF8JhxYFtenQPMl4mAZr5yuZBHoJvx20YY7lIB0CQ-Lw/viewform",
  corporateInquiry: "https://forms.gle/your-corporate-inquiry-id",
  claudeCodeDocs: "https://claude.ai/claude-code",
  portfolio: "/",
};

export const slide01Title = {
  eyebrow: workshopMeta.conference,
  number: workshopMeta.number,
  title: workshopMeta.title,
  handle: workshopMeta.handle,
  presenter: workshopMeta.presenter,
};

export const slide02IntroForm = {
  eyebrow: "while you settle in",
  title: "Scan. Fill out. Free toolkit tonight.",
  qrUrl: workshopLinks.introForm,
  qrCaption: "room intro form · 60 seconds",
  toolkitBullets: [
    "Every prompt I run today, verbatim",
    "The CLAUDE.md template we ship",
    "The SKILL.md template",
    "The full repo for Flickering Hearth",
  ],
  silenceCue: "(I'll wait for the room to fill out the form.)",
};

export const slide03Setup = {
  eyebrow: "60 seconds",
  title: "Let's get you set up.",
  installs: [
    {
      platform: "macOS, Linux, WSL",
      command: "curl -fsSL https://claude.ai/install.sh | bash",
    },
    {
      platform: "Windows PowerShell",
      command: "irm https://claude.ai/install.ps1 | iex",
    },
    {
      platform: "Windows CMD",
      command: "curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd",
    },
  ],
  updateCommand: "claude update",
  docs: workshopLinks.claudeCodeDocs,
  opusNote: "Opus 4.7 features require the latest version.",
  notWorking: [
    "Node 18+ installed? (`node --version`)",
    "`sudo` only if npm global requires it; prefer nvm",
    "Corporate laptop blocking install? Hop on guest Wi-Fi",
    "Still stuck? Raise a hand. A neighbor helps the neighbor.",
  ],
};

export const slide04WhatWeBuild = {
  eyebrow: "in the next 50 minutes",
  title: "Three portraits. One person. Live.",
  description:
    "One question on arrival reshapes the whole experience. Same person, three audiences, three vibes.",
  modes: [
    {
      name: "Hire Me",
      tagline: "Editorial. Confident. For recruiters.",
      accent: "#C8A15A",
    },
    {
      name: "Collaborate",
      tagline: "Neon. Generous. For brands and fellow builders.",
      accent: "#7A3BFF",
    },
    {
      name: "Just Curious",
      tagline: "Dreamlike. Essayed. For the room.",
      accent: "#D88891",
    },
  ],
  footer: "built live, in front of you, in the next 50 minutes.",
};

export const slide05FirstPrompt = {
  eyebrow: "slide · 5",
  title: "The first prompt.",
  cue: "Everyone screenshot. Watch what I do before I hit enter.",
  lines: [
    { prompt: "$", text: "claude" },
    {
      prompt: ">",
      text: "build me a graphically stunning mood-based portfolio. the site asks one question on arrival (hire me / collaborate / just curious) and the whole experience reshapes around the answer.",
    },
  ],
  aside: "Context, Goal, Constraints, Output. We'll get to why this lands in 2 slides.",
};

export const slide06PlanMode = {
  eyebrow: "lesson · plan mode",
  title: "Before any complex change. Always.",
  shortcut: "Shift + Tab",
  behavior: [
    "Claude reads the repo.",
    "Claude proposes a plan.",
    "Claude waits for your approval.",
    "Not a single file moves until you say go.",
  ],
  rule: "rule: every complex change begins in Plan Mode.",
};

export const slide07PromptStructure = {
  eyebrow: "lesson · prompting",
  title: "Prompt like a ticket, not a text.",
  pieces: [
    {
      label: "Context",
      text: "Who you are. What repo. What stack. What was true before.",
    },
    {
      label: "Goal",
      text: "The specific outcome. One sentence. Testable.",
    },
    {
      label: "Constraints",
      text: "Stack rules, conventions, do-nots, file paths, perf budgets.",
    },
    {
      label: "Output",
      text: "The shape of the answer: a plan, a diff, a checklist, a draft.",
    },
  ],
  footer: "a good prompt is a good brief. write one, save it, reuse it.",
};

export const slide08BioHook = {
  eyebrow: "while Claude plans",
  title: "Quick about me.",
  bullets: [
    "Software engineer who pivoted from a Finance degree in 2020.",
    "Creator of @TheBlackFemaleEngineer, five years in.",
    "Mission: make technology accessible and actionable for young professionals.",
    "Partners include Anthropic, Amazon, Microsoft, Adobe, LinkedIn, and HP.",
  ],
  stat: {
    value: "300K+",
    label: "across TikTok, Instagram, YouTube, and LinkedIn, empowering the next generation of innovators.",
  },
  softCTA: "I run this inside corporate engineering teams. If that's you, we should talk after.",
};

export const slide09Permissions = {
  eyebrow: "lesson · permissions",
  title: "Three buttons. Know which one to press.",
  options: [
    { key: "Allow", use: "this one command, this one time" },
    { key: "Always Allow", use: "trusted, repetitive actions in a personal project" },
    { key: "Deny", use: "anything ambiguous. you can always re-approve later" },
  ],
  tabHint: "Tab reveals the full command before you decide.",
  opusAutoApprove: "Opus 4.7 has an auto-approve mode. Sandbox projects only. Never your company repo.",
  rule: "personal project = pre-allow obvious stuff. company codebase = read every permission.",
};

export const slidePause = {
  title: "Questions?",
};

export const slide10ContextTokens = {
  eyebrow: "lesson · context",
  title: "The window is finite. Treat it like real estate.",
  core: "Claude gets dumber when the context fills with noise. You control the noise.",
  commands: [
    {
      name: "/clear",
      effect: "Fresh session. Context wiped.",
      when: "Use when switching tasks.",
    },
    {
      name: "/compact",
      effect: "Compress without losing project context.",
      when: "Use mid-task when the session grows long.",
    },
  ],
};

export const slideTokens = {
  eyebrow: "lesson · tokens",
  title: "A token is a chunk of text.",
  core: "About three-quarters of a word. 'engineering' is one token. 'supercalifragilistic' is four. Every prompt you write, every file you paste, every response Claude returns is counted this way.",
  reasons: [
    {
      label: "Cost",
      body: "You pay per token in, per token out. Long pastes add up fast.",
    },
    {
      label: "Context",
      body: "Each model has a finite window. You cannot pour in more than it holds.",
    },
    {
      label: "Speed",
      body: "More tokens to read means a slower first response.",
    },
  ],
  takeaway: "Paste the part that matters. Summarize the rest.",
};

export const slide11FirstIteration = {
  eyebrow: "check-in",
  title: "Working. Fifteen minutes in.",
  subtitle: "We switch to the browser. Hire Me renders. Not pretty yet, and that's the point.",
  framing: [
    "You don't ship working demos to your CEO.",
    "You ship polish.",
    "Working is the rough draft.",
  ],
  nextCue: "Now we make it stunning. Subagents enter the room.",
};

export const slide12Multimedia = {
  eyebrow: "lesson · multimedia",
  title: "You are not stuck with text.",
  accepted: [
    "Images, screenshots, wireframes.",
    "PDFs (resumes, compliance docs, contracts).",
    "Figma exports.",
    "Voice memo transcripts.",
    "Whiteboard photos from a standup.",
  ],
  principle: "Your prompt is whatever briefs the job.",
  example: "I pasted my resume PDF + LinkedIn screenshot + GitHub screenshot. Claude personalized three doors in parallel.",
};

export const slide13Subagents = {
  eyebrow: "lesson · subagents",
  title: "You are the tech lead now.",
  body:
    "Claude spawns subagents in parallel. One builds Mode 2. One builds Mode 3. Both visible, both shipping, at the same time.",
  corporateHook: "Teams using subagents move through their backlog 3x faster.",
  prompt: {
    lines: [
      {
        prompt: ">",
        text: "spin up 3 subagents. each owns one door. they run in parallel. zero file overlap. 150-word report from each.",
      },
    ],
  },
};

export const slide14MCP = {
  eyebrow: "lesson · MCP",
  title: "Permissions control your machine. MCP controls everything beyond it.",
  connects: [
    "GitHub",
    "Chrome",
    "Figma",
    "Linear",
    "Slack",
    "Your databases",
  ],
  nextLiveUse: "In the next prompt: Chrome MCP pulls design references from three portfolio sites we admire.",
};

export const slide15Skills = {
  eyebrow: "lesson · skills",
  title: "SKILL.md",
  body: "Tribal knowledge, version-controlled. A single markdown file dropped into a skills directory. Claude uses it forever. Reusable.",
  examples: [
    "Brand guidelines your design team shouldn't have to re-explain",
    "Review checklists every PR should pass",
    "Security policies that never change but always matter",
    "Onboarding playbooks for new hires",
  ],
  problemSolved: "When an engineer leaves, their knowledge used to leave with them. Skills are how you keep it.",
  options: ["Use Anthropic's built-in skills.", "Or write your own."],
  communityRepo: {
    label: "Community library",
    url: "https://github.com/alirezarezvani/claude-skills",
    display: "github.com/alirezarezvani/claude-skills",
  },
};

export const slide16Reveal = {
  eyebrow: "the reveal",
  title: "Pick a door.",
  subtitle:
    "Audience member picks Hire Me, Collaborate, or Just Curious. The site transforms on screen.",
  cta: "Open the live site →",
  ctaHref: workshopLinks.portfolio,
  closing: "Less than 50 minutes. Live. In front of you.",
};

export const slide17HandoffDoc = {
  eyebrow: "lesson · handoff",
  title: "End every session with a handoff.",
  why: [
    "Context doesn't survive a /clear.",
    "You (or your teammate) will pick this up in a week. Or a month.",
    "The handoff is the diff between you and future-you.",
  ],
  prompt: {
    lines: [
      {
        prompt: ">",
        text: "Create a HANDOFF.md. Describe what was done, what problems arose, the fixes, and next steps. Write it so the next session can start quickly.",
      },
    ],
  },
};

export const slide18ClaudeMD = {
  eyebrow: "lesson · CLAUDE.md",
  title: "The playbook every Claude session reads first.",
  rule: "With each new session, read HANDOFF.md before anything else.",
  lives: "At the root of every repo.",
  contains: [
    "Stack and conventions",
    "Do-nots and gotchas",
    "Architectural context",
    "The rule that anchors the whole project",
  ],
  impact: [
    "For individuals: your prompts get 10x better context automatically.",
    "For teams: a version-controlled playbook every engineer works inside.",
  ],
};

export const slide19CTA = {
  eyebrow: "before you go",
  title: "One last scan",
  codes: [
    {
      label: "End survey",
      sublabel: "then all materials will be sent to you",
      url: workshopLinks.endSurvey,
    },
  ],
  verbal: "I'll be right outside for the next 30 minutes. Come find me.",
};

export const slide20Closing = {
  handle: workshopMeta.handle,
  brand: "@TheBlackFemaleEngineer",
  line: "Thank you, Black Is Tech. See you outside.",
};
