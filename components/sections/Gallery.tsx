"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/FadeUp";
import { ChevronsLeftRight } from "lucide-react";

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

const ITEMS: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    alt: "Polished garden pathway with trimmed edges",
    caption: "Sharp edges & walkways",
  },
  {
    src: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&w=900&q=80",
    alt: "Charming front porch with lush landscaping",
    caption: "Curb appeal that wows",
  },
  {
    src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=80",
    alt: "Pink garden flowers in bloom",
    caption: "Garden beds in bloom",
  },
];

function BeforeAfter() {
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <div
        className="aspect-[16/9] w-full animate-pulse bg-pink-blush/40"
        aria-hidden="true"
      />
    );
  }

  return (
    <ReactCompareSlider
      className="aspect-[16/9]"
      handle={
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-pink-deep shadow-bloom ring-2 ring-pink-primary">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      }
      itemOne={
        <ReactCompareSliderImage
          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1400&q=80"
          alt="Yard before — overgrown and a little messy"
          style={{ filter: "saturate(0.85) brightness(0.92)" }}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=80"
          alt="Yard after — freshly mowed, clean edges, polished result"
        />
      }
    />
  );
}

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
            <BeforeAfter />
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
