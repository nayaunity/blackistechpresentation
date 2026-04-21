"use client";

import { Slide, SlideTitleText } from "@/components/workshop/Slide";
import { slidePause } from "@/lib/workshop/content";

export function SlidePause() {
  return (
    <Slide align="center">
      <SlideTitleText serif>{slidePause.title}</SlideTitleText>
    </Slide>
  );
}
