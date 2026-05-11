"use client";

import { useEffect, useRef } from "react";

/**
 * GrassMower — a fixed strip of stylized grass blades at the bottom of the
 * viewport. As the user scrolls the page, blades are "sliced" left-to-right
 * (a CSS transition collapses each blade's `scaleY`) following the overall
 * scroll progress. Cuts are monotonic — they persist as the user scrolls
 * back up — until the user reaches the very top, at which point every blade
 * is reset and the cycle starts over.
 *
 * Design choices:
 *   - No visible mower. The slicing effect itself reads as a grooming pass.
 *   - 180 blades across three depth layers (z-index 1/2) with four hue
 *     pairs, so the strip looks lush and full from any viewport width.
 *   - All numeric style values are pre-stringified with `toFixed` at module
 *     load so SSR and CSR emit byte-identical markup (Turbopack's SSR
 *     pipeline otherwise rounds long floats to ~5 decimals, breaking
 *     hydration).
 *   - Zero React re-renders after mount; cut state lives in a `ref` and is
 *     applied via direct `classList.add/remove` on each blade element.
 *   - One rAF-throttled scroll listener doing only cheap reads.
 *   - `prefers-reduced-motion` users get blades at full height with no
 *     transitions.
 *   - Strip fades out smoothly in the last 220px of the document so the
 *     footer reads cleanly.
 */

const BLADE_COUNT = 360;

type BladeSpec = {
  leftPct: string;
  widthPx: string;
  heightPx: string;
  skewDeg: string;
  hueTop: string;
  hueBottom: string;
  zIndex: 1 | 2;
};

function hash(n: number): number {
  const x = Math.sin(n * 12345.6789) * 43758.5453;
  return x - Math.floor(x);
}

const HUES = [
  { top: "#dde6d8", bottom: "#b8c7b2" },
  { top: "#cfdcc7", bottom: "#a5be9c" },
  { top: "#b8c7b2", bottom: "#8bbf8a" },
  { top: "#9ec79a", bottom: "#6b9b6a" },
] as const;

const BLADES: BladeSpec[] = Array.from({ length: BLADE_COUNT }, (_, i) => {
  const t = i / (BLADE_COUNT - 1);
  const r1 = hash(i + 1);
  const r2 = hash(i + 101);
  const r3 = hash(i + 211);
  const r4 = hash(i + 307);
  const r5 = hash(i + 409);
  const left = t * 100 + (r1 - 0.5) * (100 / BLADE_COUNT) * 1.6;
  const height = 26 + r2 * 30;
  const width = 2.2 + r3 * 2.2;
  const skew = (r4 - 0.5) * 14;
  const hue = HUES[Math.floor(r5 * HUES.length) % HUES.length];
  return {
    leftPct: `${left.toFixed(4)}%`,
    widthPx: `${width.toFixed(3)}px`,
    heightPx: `${height.toFixed(2)}px`,
    skewDeg: `${skew.toFixed(3)}deg`,
    hueTop: hue.top,
    hueBottom: hue.bottom,
    zIndex: r5 > 0.55 ? 2 : 1,
  };
});

export function GrassMower() {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const bladesRef = useRef<(HTMLDivElement | null)[]>([]);
  const maxCut = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf: number | null = null;

    const update = () => {
      raf = null;
      const docEl = document.documentElement;
      const scrollMax = Math.max(1, docEl.scrollHeight - window.innerHeight);
      const y = window.scrollY;
      const progress = Math.min(1, Math.max(0, y / scrollMax));

      if (y < 6 && maxCut.current > 0) {
        maxCut.current = 0;
        const blades = bladesRef.current;
        for (let i = 0; i < blades.length; i++) {
          blades[i]?.classList.remove("cut");
        }
      }

      if (progress > maxCut.current) {
        const fromIndex = Math.ceil(maxCut.current * BLADE_COUNT);
        const toIndex = Math.ceil(progress * BLADE_COUNT);
        const blades = bladesRef.current;
        for (let i = fromIndex; i < toIndex && i < BLADE_COUNT; i++) {
          blades[i]?.classList.add("cut");
        }
        maxCut.current = progress;
      }

      if (stripRef.current) {
        const distFromBottom = scrollMax - y;
        const fade = Math.min(1, Math.max(0, distFromBottom / 220));
        stripRef.current.style.opacity = String(fade);
      }
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={stripRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-20 select-none overflow-hidden"
      style={{
        height: "calc(60px + env(safe-area-inset-bottom, 0px))",
        contain: "layout paint",
      }}
    >
      {BLADES.map((b, i) => (
        <div
          key={i}
          ref={(el) => {
            bladesRef.current[i] = el;
          }}
          className="grass-blade absolute bottom-0"
          style={
            {
              left: b.leftPct,
              width: b.widthPx,
              height: b.heightPx,
              zIndex: b.zIndex,
              backgroundImage: `linear-gradient(to top, ${b.hueBottom}, ${b.hueTop})`,
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              "--blade-skew": b.skewDeg,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
