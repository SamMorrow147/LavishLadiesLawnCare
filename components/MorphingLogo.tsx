"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const SCROLL_DISTANCE = 520;
const NAV_TOP_PX = 14;
const NAV_LEFT_PX = 22;
const NAV_WIDTH_PX = 64;

const DEFAULT_VW = 1440;
const DEFAULT_VH = 900;

function deriveStart(vw: number, vh: number) {
  const startWidth = Math.min(720, Math.max(280, vw * 0.65));
  const startTop = Math.max(48, vh * 0.08);
  return { startWidth, startTop };
}

export function MorphingLogo() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [hydrated, setHydrated] = useState(false);
  const [vp, setVp] = useState({ vw: DEFAULT_VW, vh: DEFAULT_VH });

  useEffect(() => {
    const update = () =>
      setVp({ vw: window.innerWidth, vh: window.innerHeight });
    update();
    setHydrated(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { startWidth, startTop } = deriveStart(vp.vw, vp.vh);

  const top = useTransform(
    scrollY,
    [0, SCROLL_DISTANCE],
    [startTop, NAV_TOP_PX],
    { clamp: true },
  );
  const width = useTransform(
    scrollY,
    [0, SCROLL_DISTANCE],
    [startWidth, NAV_WIDTH_PX],
    { clamp: true },
  );
  const left = useTransform(
    scrollY,
    [0, SCROLL_DISTANCE],
    [vp.vw / 2, NAV_LEFT_PX],
    { clamp: true },
  );
  const x = useTransform(
    scrollY,
    [0, SCROLL_DISTANCE],
    [-startWidth / 2, 0],
    { clamp: true },
  );
  const dropShadowAlpha = useTransform(
    scrollY,
    [0, SCROLL_DISTANCE * 0.6, SCROLL_DISTANCE],
    [0.22, 0.1, 0],
    { clamp: true },
  );
  const filter = useTransform(
    dropShadowAlpha,
    (a) => `drop-shadow(0 18px 40px rgba(168, 83, 106, ${a}))`,
  );

  if (reduce) {
    return (
      <Link
        href="#top"
        className="fixed left-5 top-3 z-[60] block"
        aria-label="Lavish Ladies Lawn Care home"
      >
        <Image
          src="/Logo.png"
          alt="Lavish Ladies Lawn Care"
          width={64}
          height={20}
          priority
          className="select-none"
          style={{ width: "64px", height: "auto" }}
        />
      </Link>
    );
  }

  return (
    <motion.div
      className="fixed z-[60]"
      style={{
        top,
        left,
        x,
        width,
        filter,
        opacity: hydrated ? 1 : 0,
        transition: hydrated ? undefined : "opacity 0.25s ease-out",
      }}
    >
      <Link
        href="#top"
        aria-label="Lavish Ladies Lawn Care home"
        className="block"
      >
        <Image
          src="/Logo.png"
          alt="Lavish Ladies Lawn Care"
          width={720}
          height={225}
          priority
          sizes="720px"
          className="block select-none"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
    </motion.div>
  );
}
