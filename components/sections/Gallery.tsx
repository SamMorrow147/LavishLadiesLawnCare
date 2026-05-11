"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/FadeUp";

// react-compare-slider emits hydration-mismatching inline styles, so we
// never let it render on the server. The loading state is the actual
// "After" image at the same aspect ratio — visually identical to the
// slider's resting state — so there is no flash when it mounts.
const BeforeAfterSlider = dynamic(
  () => import("./BeforeAfterSlider"),
  {
    ssr: false,
    loading: () => (
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src="/compressed/After.png"
          alt="Yard after Lavish Ladies Lawn Care"
          fill
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-cover"
          priority
        />
      </div>
    ),
  },
);

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

const ITEMS: GalleryItem[] = [
  {
    src: "/compressed/sharpedges.png",
    alt: "Polished garden pathway with trimmed edges",
    caption: "Sharp edges & walkways",
  },
  {
    src: "/compressed/Curbappeal.png",
    alt: "Charming curb appeal with lush landscaping",
    caption: "Curb appeal that wows",
  },
  {
    src: "/compressed/GardenBeds.png",
    alt: "Garden beds in bloom",
    caption: "Garden beds in bloom",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Our Work"
            title="Clean Spaces. Beautiful Results."
            description="A peek at the kind of polished, picture-ready outdoor spaces we love creating for Alexandria-area homeowners."
            accent="star"
          />
        </FadeUp>

        <FadeUp delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] shadow-bloom ring-1 ring-pink-soft/60">
            <BeforeAfterSlider />
            <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-ink-soft backdrop-blur-sm">
              Before
            </div>
            <div className="pointer-events-none absolute right-5 top-5 rounded-full bg-pink-primary/95 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cream backdrop-blur-sm">
              After
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div
            role="region"
            aria-label="More of our work"
            className="mt-10 -mx-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory md:mx-0 md:overflow-visible md:px-0 md:pb-0"
          >
            <ul className="flex gap-5 md:grid md:grid-cols-3 md:gap-6">
              {ITEMS.map((item) => (
                <li
                  key={item.src}
                  className="snap-center shrink-0 basis-[82%] sm:basis-[55%] md:basis-auto"
                >
                  <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-petal ring-1 ring-pink-soft/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-bloom hover:ring-pink-primary/60">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 55vw, 82vw"
                      loading="eager"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-deep/55 via-pink-deep/10 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-end p-5">
                      <span className="font-display text-lg leading-tight text-cream md:text-xl">
                        {item.caption}
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-pink-deep md:hidden">
            <span className="h-px w-6 bg-pink-soft" />
            Swipe for more
            <span className="h-px w-6 bg-pink-soft" />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
