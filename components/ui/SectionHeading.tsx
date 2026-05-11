import { Bow } from "@/components/decorative/Bow";
import { Star } from "@/components/decorative/Star";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Accent = "bow" | "star" | "none";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  accent?: Accent;
  /** @deprecated use `accent` */
  withBow?: boolean;
  className?: string;
};

const ACCENTS: Record<Exclude<Accent, "none">, ReactNode> = {
  bow: <Bow className="h-8 w-8" />,
  star: <Star className="h-9 w-9" />,
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  accent,
  withBow,
  className,
}: Props) {
  const resolvedAccent: Accent =
    accent ?? (withBow === false ? "none" : "bow");

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {resolvedAccent !== "none" && (
        <div
          className={cn(
            "mb-5 flex",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          {ACCENTS[resolvedAccent]}
        </div>
      )}
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-pink-deep/80">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl leading-tight text-ink text-balance md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-ink-soft md:text-lg text-pretty",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
