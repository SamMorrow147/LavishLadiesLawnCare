"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Star, Sparkle } from "@/components/decorative/Star";
import { PetalDrift } from "@/components/decorative/PetalDrift";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col items-center overflow-hidden pb-14 pt-[54vh] md:pb-20 md:pt-[58vh]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(217,143,162,0.32) 0%, rgba(239,198,210,0.18) 35%, rgba(250,247,248,1) 70%), linear-gradient(180deg, #FAF7F8 0%, #F5EFE9 100%)",
        }}
      />
      <Star className="pointer-events-none absolute -left-40 top-12 -z-10 h-[460px] w-[460px] opacity-[0.10]" />
      <Star className="pointer-events-none absolute -right-32 bottom-16 -z-10 h-80 w-80 opacity-[0.08]" />

      <PetalDrift className="-z-10" />

      <Container className="relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-pink-soft/80 bg-cream/80 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-pink-deep shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Alexandria, MN &amp; Surrounding Area
          </div>

          <h1 className="font-display text-5xl leading-[1.05] text-ink text-balance sm:text-6xl lg:text-[5rem] lg:leading-[0.98]">
            Lawn Care With A{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-pink-dusty via-pink-primary to-pink-deep bg-clip-text text-transparent">
                Woman&rsquo;s
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 right-0 -z-0 h-3 rounded-full bg-pink-soft/70 blur-[2px]"
              />
            </span>{" "}
            Touch
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg text-pretty">
            From mowing and seasonal cleanups to landscaping touch-ups and
            outdoor maintenance, we bring dependable service with
            detail-oriented care and a polished personal touch — the kind of
            yard work that actually makes you smile when you pull in the
            driveway.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button href="#quote" size="lg">
              Get A Free Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              See Services
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs uppercase tracking-[0.25em] text-ink-soft/80">
            <div className="flex items-center gap-2">
              <Sparkle className="h-3.5 w-3.5 text-pink-primary" />
              Locally Owned
            </div>
            <div className="flex items-center gap-2">
              <Sparkle className="h-3.5 w-3.5 text-pink-primary" />
              Detail Obsessed
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-3.5 w-3.5 text-pink-primary" strokeWidth={2.2} />
              Friendly &amp; Reliable
            </div>
          </div>
        </motion.div>
      </Container>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none mt-auto flex w-full justify-center pt-12"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-pink-deep/70">
          <span>Scroll</span>
          <motion.span
            className="h-8 w-px origin-top bg-pink-primary/60"
            animate={reduce ? undefined : { scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-cream"
      />
    </section>
  );
}
