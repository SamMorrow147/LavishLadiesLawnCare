import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/FadeUp";

const STATS = [
  { value: "100%", label: "Locally focused" },
  { value: "5★", label: "Detail obsession" },
  { value: "MN", label: "Born & raised" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="About Us"
            title="A Fresh Take On Lawn Care"
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed text-ink-soft md:text-lg text-pretty">
            <p>
              Lavish Ladies Lawn Care was built around the idea that
              outdoor maintenance can feel professional, welcoming, and
              detail-focused all at the same time. We bring reliable lawn
              care services with a softer, more personal experience
              homeowners love.
            </p>
            <p>
              Whether it&rsquo;s weekly mowing, seasonal cleanup, trimming,
              or keeping your property looking polished year-round, our
              goal is simple: make your outdoor space look beautiful
              without the stress.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-pink-blush/60 px-3 py-5 text-center ring-1 ring-pink-soft/50"
              >
                <dt className="font-display text-3xl text-pink-deep md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-[10px] uppercase tracking-[0.2em] text-ink-soft md:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </Container>
    </section>
  );
}
