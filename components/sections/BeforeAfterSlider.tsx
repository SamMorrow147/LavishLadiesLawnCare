"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { ChevronsLeftRight } from "lucide-react";

/**
 * `react-compare-slider` emits a hydration-mismatching style attribute
 * (kebab-case on the server, camelCase + vendor-prefixed properties on
 * the client), which React 19 refuses to patch — it tears down and
 * re-renders the subtree, producing a visible glitch. This component
 * is the client-only surface, imported via `next/dynamic` with
 * `ssr: false` so it's only ever rendered in the browser.
 */
export default function BeforeAfterSlider() {
  return (
    <ReactCompareSlider
      className="aspect-[16/9]"
      handle={
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-pink-deep shadow-bloom ring-2 ring-pink-primary">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      }
      itemOne={
        <ReactCompareSliderImage
          src="/compressed/Before.png"
          alt="Yard before Lavish Ladies Lawn Care"
          loading="eager"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="/compressed/After.png"
          alt="Yard after Lavish Ladies Lawn Care"
          loading="eager"
        />
      }
    />
  );
}
