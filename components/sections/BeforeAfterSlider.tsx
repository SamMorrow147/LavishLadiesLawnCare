"use client";

import { useEffect, useState } from "react";
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
  // On hover-capable devices (desktops with a precise pointer) we let the
  // divider follow the cursor so the reveal happens passively — no click
  // or drag needed. Touch / coarse-pointer devices keep the standard
  // drag-to-reveal interaction since "hover" there is awkward.
  const [followCursor, setFollowCursor] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFollowCursor(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <ReactCompareSlider
      className="aspect-[16/9]"
      changePositionOnHover={followCursor}
      transition={followCursor ? ".15s ease-out" : undefined}
      // On touch devices the library defaults to handle-only dragging,
      // which makes the slider feel broken on phones because tapping the
      // photo itself does nothing. Force the entire surface to be
      // interactive so users can tap or drag anywhere — vertical page
      // scrolling still works thanks to the library's `touch-action: pan-y`.
      onlyHandleDraggable={false}
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
