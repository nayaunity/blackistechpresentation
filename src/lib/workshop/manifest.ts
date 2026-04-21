import type { ComponentType } from "react";
import { SlideTitle } from "@/components/workshop/slides/SlideTitle";
import { SlideIntroForm } from "@/components/workshop/slides/SlideIntroForm";
import { SlideSetup } from "@/components/workshop/slides/SlideSetup";
import { SlideWhatWeBuild } from "@/components/workshop/slides/SlideWhatWeBuild";
import { SlideFirstPrompt } from "@/components/workshop/slides/SlideFirstPrompt";
import { SlidePlanMode } from "@/components/workshop/slides/SlidePlanMode";
import { SlidePromptStructure } from "@/components/workshop/slides/SlidePromptStructure";
import { SlideBioHook } from "@/components/workshop/slides/SlideBioHook";
import { SlidePermissions } from "@/components/workshop/slides/SlidePermissions";
import { SlidePause } from "@/components/workshop/slides/SlidePause";
import { SlideContextTokens } from "@/components/workshop/slides/SlideContextTokens";
import { SlideTokens } from "@/components/workshop/slides/SlideTokens";
import { SlideFirstIteration } from "@/components/workshop/slides/SlideFirstIteration";
import { SlideMultimedia } from "@/components/workshop/slides/SlideMultimedia";
import { SlideSubagents } from "@/components/workshop/slides/SlideSubagents";
import { SlideMCP } from "@/components/workshop/slides/SlideMCP";
import { SlideSkills } from "@/components/workshop/slides/SlideSkills";
import { SlideReveal } from "@/components/workshop/slides/SlideReveal";
import { SlideHandoffDoc } from "@/components/workshop/slides/SlideHandoffDoc";
import { SlideClaudeMD } from "@/components/workshop/slides/SlideClaudeMD";
import { SlideCTA } from "@/components/workshop/slides/SlideCTA";
import { SlideClosing } from "@/components/workshop/slides/SlideClosing";

export type SlideMeta = {
  id: string;
  title: string;
  Component: ComponentType;
};

export const slideManifest: SlideMeta[] = [
  { id: "title", title: "Title", Component: SlideTitle },
  { id: "intro-form", title: "Quick hello + intro form", Component: SlideIntroForm },
  { id: "setup", title: "Let's get you set up", Component: SlideSetup },
  { id: "what-we-build", title: "What we're building", Component: SlideWhatWeBuild },
  { id: "first-prompt", title: "The first prompt", Component: SlideFirstPrompt },
  { id: "plan-mode", title: "Lesson · Plan Mode", Component: SlidePlanMode },
  { id: "prompt-structure", title: "Lesson · Prompting structure", Component: SlidePromptStructure },
  { id: "bio-hook", title: "Bio + corporate hook", Component: SlideBioHook },
  { id: "permissions", title: "Lesson · Permissions", Component: SlidePermissions },
  { id: "pause", title: "Pause · Questions", Component: SlidePause },
  { id: "context-tokens", title: "Lesson · Context", Component: SlideContextTokens },
  { id: "tokens", title: "Lesson · Tokens", Component: SlideTokens },
  { id: "first-iteration", title: "First iteration is live", Component: SlideFirstIteration },
  { id: "multimedia", title: "Lesson · Multimedia inputs", Component: SlideMultimedia },
  { id: "subagents", title: "Lesson · Subagents", Component: SlideSubagents },
  { id: "mcp", title: "Lesson · MCP servers", Component: SlideMCP },
  { id: "skills", title: "Lesson · Skills", Component: SlideSkills },
  { id: "reveal", title: "The reveal", Component: SlideReveal },
  { id: "handoff-doc", title: "Lesson · Handoff Doc", Component: SlideHandoffDoc },
  { id: "claude-md", title: "Lesson · CLAUDE.md", Component: SlideClaudeMD },
  { id: "cta", title: "CTA", Component: SlideCTA },
  { id: "closing", title: "Closing", Component: SlideClosing },
];
