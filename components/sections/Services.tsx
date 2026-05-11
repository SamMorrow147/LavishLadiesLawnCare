import {
  Scissors,
  Leaf,
  Flower2,
  Ruler,
  Sprout,
  HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/FadeUp";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  bg: string;
  ring: string;
  iconColor: string;
};

const SERVICES: Service[] = [
  {
    icon: Scissors,
    title: "Lawn Mowing",
    description:
      "Consistent mowing and edging services that keep your lawn clean, polished, and beautifully maintained.",
    bg: "bg-pink-blush/70",
    ring: "ring-pink-soft/70",
    iconColor: "text-pink-primary",
  },
  {
    icon: Leaf,
    title: "Spring & Fall Cleanup",
    description:
      "Leaf removal, debris cleanup, seasonal prep, and freshening up your yard after long Minnesota seasons.",
    bg: "bg-sage-soft/70",
    ring: "ring-sage/40",
    iconColor: "text-green-spring",
  },
  {
    icon: Flower2,
    title: "Weed Control & Garden Care",
    description:
      "Helping flower beds and landscaped areas stay tidy, healthy, and visually appealing.",
    bg: "bg-lavender/60",
    ring: "ring-lavender-deep/30",
    iconColor: "text-lavender-deep",
  },
  {
    icon: Ruler,
    title: "Trimming & Edging",
    description:
      "Detailed trimming around sidewalks, driveways, fences, and landscaping for a sharp finished look.",
    bg: "bg-cream-warm",
    ring: "ring-pink-soft/50",
    iconColor: "text-pink-dusty",
  },
  {
    icon: Sprout,
    title: "Mulching & Landscaping Touch-Ups",
    description:
      "Fresh mulch, cleanup, and small landscaping improvements that instantly elevate curb appeal.",
    bg: "bg-yellow-soft/70",
    ring: "ring-yellow-warm/30",
    iconColor: "text-yellow-warm",
  },
  {
    icon: HeartHandshake,
    title: "Outdoor Maintenance",
    description:
      "General outdoor upkeep and property maintenance designed to help homeowners stay stress-free year-round.",
    bg: "bg-pink-soft/60",
    ring: "ring-pink-primary/30",
    iconColor: "text-pink-deep",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-cream-warm/40 py-24 md:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="What We Do"
            title="Services Made For Lovely Lawns"
            description="Every visit is detail-focused, friendly, and designed to make your property look its very best."
          />
        </FadeUp>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeUp as="li" delay={i * 0.06} key={service.title}>
                <article
                  className={`group relative h-full overflow-hidden rounded-3xl ${service.bg} p-8 text-center ring-1 ${service.ring} shadow-petal transition-all duration-500 hover:-translate-y-1 hover:shadow-bloom`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cream/40 blur-2xl"
                  />
                  <Icon
                    className={`relative mx-auto h-14 w-14 ${service.iconColor} transition-transform duration-500 group-hover:scale-110`}
                    strokeWidth={1.5}
                  />
                  <h3 className="relative mt-6 font-display text-2xl leading-snug text-ink md:text-[1.65rem]">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-ink-soft md:text-base text-pretty">
                    {service.description}
                  </p>
                </article>
              </FadeUp>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
