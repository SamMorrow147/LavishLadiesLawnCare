import Image from "next/image";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Star, Sparkle } from "@/components/decorative/Star";
import { PetalDrift } from "@/components/decorative/PetalDrift";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col items-center overflow-hidden pb-14 pt-28 md:pb-20 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(217,143,162,0.32) 0%, rgba(239,198,210,0.18) 35%, rgba(250,247,248,1) 70%), linear-gradient(180deg, #FAF7F8 0%, #F5EFE9 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Star className="absolute -left-40 top-12 h-[460px] w-[460px] opacity-[0.10]" />
        <Star className="absolute -right-32 bottom-16 h-80 w-80 opacity-[0.08]" />
      </div>

      <div
        className="hero-reveal absolute inset-0 -z-10"
        style={{ animationDelay: "750ms" }}
      >
        <PetalDrift />
      </div>

      <Container className="relative">
        <div
          className="hero-reveal mx-auto mb-10 flex max-w-3xl justify-center md:mb-14"
          style={{ animationDelay: "0ms" }}
        >
          <Image
            src="/Logo.png"
            alt="Lavish Ladies Lawn Care"
            width={895}
            height={545}
            priority
            sizes="(min-width: 1024px) 720px, (min-width: 640px) 65vw, 80vw"
            className="block h-auto w-[280px] select-none sm:w-[420px] md:w-[560px] lg:w-[680px]"
            style={{ aspectRatio: "895 / 545" }}
          />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div
            className="hero-reveal mb-7 inline-flex items-center gap-2 rounded-full border border-pink-soft/80 bg-cream/80 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-pink-deep shadow-sm backdrop-blur-sm"
            style={{ animationDelay: "200ms" }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Alexandria, MN &amp; Surrounding Area
          </div>

          <h1
            className="hero-reveal font-display text-5xl leading-[1.05] text-ink text-balance sm:text-6xl lg:text-[5rem] lg:leading-[0.98]"
            style={{ animationDelay: "300ms" }}
          >
            Lawn Care With A{" "}
            <span className="bg-gradient-to-r from-pink-dusty via-pink-primary to-pink-deep bg-clip-text text-transparent">
              Woman&rsquo;s
            </span>{" "}
            Touch
          </h1>

          <p
            className="hero-reveal mt-7 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg text-pretty"
            style={{ animationDelay: "400ms" }}
          >
            From mowing and seasonal cleanups to landscaping touch-ups and
            outdoor maintenance, we bring dependable service with
            detail-oriented care and a polished personal touch — the kind of
            yard work that actually makes you smile when you pull in the
            driveway.
          </p>

          <div
            className="hero-reveal mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
            style={{ animationDelay: "500ms" }}
          >
            <Button href="#quote" size="lg">
              Get A Free Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              See Services
            </Button>
          </div>

          <div
            className="hero-reveal mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs uppercase tracking-[0.25em] text-ink-soft/80"
            style={{ animationDelay: "600ms" }}
          >
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
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="hero-reveal pointer-events-none mt-auto flex w-full justify-center pt-12"
        style={{ animationDelay: "900ms" }}
      >
        <span className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-pink-deep/70">
          <span>Scroll</span>
          <span className="h-8 w-px origin-top bg-pink-primary/60" />
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-cream"
      />
    </section>
  );
}
