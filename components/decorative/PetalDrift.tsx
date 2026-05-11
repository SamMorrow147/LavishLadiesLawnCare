"use client";

import { motion, useReducedMotion } from "motion/react";
import { Petal, Leaf } from "./Petal";

type DriftItem = {
  left: string;
  top: string;
  size: number;
  rotate: number;
  delay: number;
  duration: number;
  drift: number;
  variant: "petal" | "leaf";
  opacity: number;
};

const ITEMS: DriftItem[] = [
  { left: "8%", top: "8%", size: 28, rotate: -18, delay: 0, duration: 11, drift: 24, variant: "petal", opacity: 0.85 },
  { left: "22%", top: "38%", size: 22, rotate: 32, delay: 1.6, duration: 13, drift: -18, variant: "leaf", opacity: 0.7 },
  { left: "38%", top: "14%", size: 18, rotate: 8, delay: 0.8, duration: 9, drift: 14, variant: "petal", opacity: 0.65 },
  { left: "55%", top: "30%", size: 32, rotate: -42, delay: 2.4, duration: 14, drift: -28, variant: "petal", opacity: 0.8 },
  { left: "70%", top: "10%", size: 20, rotate: 56, delay: 1.2, duration: 10, drift: 18, variant: "leaf", opacity: 0.6 },
  { left: "82%", top: "36%", size: 26, rotate: -12, delay: 3, duration: 12, drift: 22, variant: "petal", opacity: 0.75 },
  { left: "92%", top: "22%", size: 16, rotate: 22, delay: 0.4, duration: 8, drift: -14, variant: "petal", opacity: 0.55 },
  { left: "14%", top: "44%", size: 24, rotate: -8, delay: 2, duration: 13, drift: 20, variant: "leaf", opacity: 0.65 },
];

export function PetalDrift({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {ITEMS.map((item, i) => {
        const Shape = item.variant === "leaf" ? Leaf : Petal;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: item.left,
              top: item.top,
              width: item.size,
              height: item.size * 1.25,
              opacity: item.opacity,
            }}
            initial={{ y: 0, rotate: item.rotate }}
            animate={
              reduce
                ? { y: 0, rotate: item.rotate }
                : {
                    y: [0, item.drift, 0, -item.drift, 0],
                    x: [0, item.drift / 2, 0, -item.drift / 2, 0],
                    rotate: [item.rotate, item.rotate + 12, item.rotate, item.rotate - 8, item.rotate],
                  }
            }
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <Shape className="h-full w-full drop-shadow-sm" />
          </motion.div>
        );
      })}
    </div>
  );
}
