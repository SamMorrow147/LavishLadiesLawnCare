import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/FadeUp";
import { Sparkle } from "@/components/decorative/Star";

const REASONS = [
  "Friendly & reliable service",
  "Attention to detail",
  "Soft-touch customer experience",
  "Flexible scheduling",
  "Beautiful curb appeal results",
  "Locally focused care",
  "Consistent communication",
  "Clean, polished results",
];

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #FAF7F8 0%, #DDE6D8 55%, #FAF7F8 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sage-soft/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-pink-soft/40 blur-3xl"
      />

      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Why Lavish"
            title="Why Homeowners Love Lavish Ladies"
            description="It&rsquo;s the little things — the friendliness, the polish, the consistency — that turn a regular yard service into something homeowners actually look forward to."
          />
        </FadeUp>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
          {REASONS.map((reason, i) => (
            <FadeUp as="li" delay={i * 0.04} key={reason}>
              <div className="flex items-center gap-4 rounded-2xl bg-cream/90 px-5 py-4 ring-1 ring-pink-soft/50 shadow-petal transition-all hover:-translate-y-0.5 hover:shadow-bloom hover:ring-pink-primary/40">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-soft to-pink-primary text-cream">
                  <Sparkle className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium leading-snug text-ink md:text-base">
                  {reason}
                </span>
              </div>
            </FadeUp>
          ))}
        </ul>
      </Container>
    </section>
  );
}
