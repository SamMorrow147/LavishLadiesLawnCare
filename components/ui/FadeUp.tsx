"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Scroll reveal that is robust to every bug we hit before:
 *
 *   - SSR ships content fully visible (no `opacity: 0` initial). A slow
 *     hydration or disabled JS leaves the page readable.
 *   - On mount we open a single IntersectionObserver per element. Its
 *     first callback fires synchronously with the current intersection
 *     state, so we know whether the element is already in view without
 *     reading layout.
 *   - If the element is already in view at mount, we leave it alone
 *     forever — no class is ever applied, so there is no "glitch into
 *     place" on hydration.
 *   - Only when we confirm the element is below the fold do we apply
 *     `reveal-hidden`. The user can't see that flip because the element
 *     is offscreen.
 *   - When it scrolls into view, we swap to `reveal-in` and the CSS
 *     transition handles the fade + slide. Observer disconnects on
 *     first reveal — one-shot, no reverse.
 *   - Respects `prefers-reduced-motion`.
 */
export function FadeUp({ children, delay = 0, className, as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [phase, setPhase] = useState<"static" | "hidden" | "in">("static");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let first = true;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (first) {
          first = false;
          if (entry.isIntersecting) {
            obs.disconnect();
            return;
          }
          setPhase("hidden");
          return;
        }
        if (entry.isIntersecting) {
          setPhase("in");
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as never}
      className={cn(
        phase !== "static" && "reveal-base",
        phase === "hidden" && "reveal-hidden",
        phase === "in" && "reveal-in",
        className,
      )}
      style={
        phase !== "static" ? { transitionDelay: `${delay}s` } : undefined
      }
    >
      {children}
    </Tag>
  );
}
