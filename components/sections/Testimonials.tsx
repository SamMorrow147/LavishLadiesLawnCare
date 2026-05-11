import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/FadeUp";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our yard has never looked this clean and polished. Super friendly service and amazing attention to detail.",
    name: "Hannah R.",
    context: "Alexandria, MN",
  },
  {
    quote:
      "Finally a lawn care company that feels approachable, professional, and dependable.",
    name: "Marissa K.",
    context: "Garfield, MN",
  },
  {
    quote:
      "They completely transformed our curb appeal. We\u2019ve already recommended them to neighbors.",
    name: "Olivia T.",
    context: "Carlos, MN",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-lavender/40 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-12 h-96 w-96 rounded-full bg-pink-soft/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-lavender-deep/30 blur-3xl"
      />

      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Reviews"
            title="Kind Words From Happy Clients"
            description="Real feedback from homeowners who&rsquo;ve experienced the Lavish Ladies difference."
          />
        </FadeUp>

        <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp as="li" delay={i * 0.08} key={t.name}>
              <article className="relative h-full rounded-3xl bg-cream p-7 shadow-petal ring-1 ring-pink-soft/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-bloom">
                <span
                  aria-hidden="true"
                  className="absolute -top-6 left-6 font-display text-7xl leading-none text-pink-primary/70 select-none"
                >
                  &ldquo;
                </span>

                <div className="flex items-center gap-1 text-pink-primary">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-current"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="mt-5 text-base leading-relaxed text-ink text-pretty">
                  {t.quote}
                </p>

                <footer className="mt-6 flex items-center gap-3 border-t border-pink-soft/40 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-soft to-pink-primary font-display text-lg text-cream">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-pink-deep">
                      {t.context}
                    </p>
                  </div>
                </footer>
              </article>
            </FadeUp>
          ))}
        </ul>
      </Container>
    </section>
  );
}
