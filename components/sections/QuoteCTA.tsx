"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { FiveStar } from "@/components/decorative/Star";
import { FlowerBanner } from "@/components/decorative/FlowerDivider";

const JOTFORM_ID = process.env.NEXT_PUBLIC_JOTFORM_ID ?? "";

function JotformEmbed({ formId }: { formId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formId || !containerRef.current) return;
    const iframe = document.createElement("iframe");
    iframe.id = `JotFormIFrame-${formId}`;
    iframe.title = "Lavish Ladies Lawn Care quote request form";
    iframe.allow = "geolocation; microphone; camera; fullscreen";
    iframe.src = `https://form.jotform.com/${formId}`;
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.loading = "eager";
    iframe.style.cssText =
      "min-width:100%;max-width:100%;height:680px;border:none;";
    const node = containerRef.current;
    node.replaceChildren(iframe);
    return () => {
      node.replaceChildren();
    };
  }, [formId]);

  return <div ref={containerRef} className="w-full" />;
}

function QuoteFormPlaceholder() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-cream p-8 shadow-bloom ring-1 ring-pink-soft/60 md:p-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-blush">
          <FiveStar className="h-6 w-6 text-pink-deep" />
        </span>
        <div>
          <p className="font-display text-2xl text-ink leading-none">
            Quote Form Coming Soon
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-pink-deep">
            Reach Out Anytime
          </p>
        </div>
      </div>

      <p className="text-ink-soft text-pretty">
        We&rsquo;re putting the finishing touches on our online quote form.
        In the meantime, give us a call or text — we&rsquo;d love to hear
        about your yard.
      </p>

      <ul className="mt-7 space-y-3 text-sm">
        <li className="flex items-center gap-3 rounded-2xl bg-pink-blush/40 px-4 py-3">
          <Phone className="h-4 w-4 text-pink-deep" />
          <a href="tel:+13202989976" className="font-medium text-ink hover:text-pink-deep">
            320-298-9976
          </a>
        </li>
        <li className="flex items-center gap-3 rounded-2xl bg-pink-blush/40 px-4 py-3">
          <MessageCircle className="h-4 w-4 text-pink-deep" />
          <a href="sms:+13202989976" className="font-medium text-ink hover:text-pink-deep">
            Text us for a quick reply
          </a>
        </li>
        <li className="flex items-center gap-3 rounded-2xl bg-pink-blush/40 px-4 py-3">
          <Mail className="h-4 w-4 text-pink-deep" />
          <a href="mailto:shirleyhoff512@gmail.com" className="font-medium text-ink hover:text-pink-deep">
            shirleyhoff512@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-3 rounded-2xl bg-pink-blush/40 px-4 py-3">
          <MapPin className="h-4 w-4 text-pink-deep" />
          <span className="font-medium text-ink">
            Alexandria, MN &amp; surrounding area
          </span>
        </li>
      </ul>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button href="tel:+13202989976" size="lg" className="w-full sm:w-auto">
          Call Now
        </Button>
        <Button href="sms:+13202989976" variant="secondary" size="lg" className="w-full sm:w-auto">
          Send A Text
        </Button>
      </div>
    </div>
  );
}

export function QuoteCTA() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(80% 60% at 20% 20%, rgba(239,198,210,0.55) 0%, rgba(250,247,248,0.4) 60%, rgba(250,247,248,1) 100%), linear-gradient(180deg, #FAF7F8 0%, #F7E1E7 100%)",
      }}
    >
      <Container>
        <FadeUp>
          <FlowerBanner className="mb-10" />
        </FadeUp>

        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <FadeUp>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Ready For A Lawn You&rsquo;ll Love Coming Home To?"
              description="Reach out today for a free quote and let&rsquo;s make your outdoor space look amazing this season."
              align="left"
              withBow={false}
            />

            <div className="mt-10 space-y-4">
              <a
                href="tel:+13202989976"
                className="flex items-center gap-4 rounded-2xl bg-cream/90 px-5 py-4 ring-1 ring-pink-soft/60 shadow-petal transition-all hover:-translate-y-0.5 hover:shadow-bloom"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-primary text-cream">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-pink-deep">
                    Call Or Text
                  </p>
                  <p className="font-display text-xl text-ink">
                    320-298-9976
                  </p>
                </div>
              </a>

              <a
                href="mailto:shirleyhoff512@gmail.com"
                className="flex items-center gap-4 rounded-2xl bg-cream/90 px-5 py-4 ring-1 ring-pink-soft/60 shadow-petal transition-all hover:-translate-y-0.5 hover:shadow-bloom"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-primary text-cream">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-pink-deep">
                    Email
                  </p>
                  <p className="font-display text-xl text-ink">
                    shirleyhoff512@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl bg-cream/90 px-5 py-4 ring-1 ring-pink-soft/60 shadow-petal">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-primary text-cream">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-pink-deep">
                    Service Area
                  </p>
                  <p className="font-display text-xl text-ink">
                    Alexandria, MN &amp; nearby
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            {JOTFORM_ID ? (
              <div className="overflow-hidden rounded-3xl bg-cream p-2 shadow-bloom ring-1 ring-pink-soft/60">
                <JotformEmbed formId={JOTFORM_ID} />
              </div>
            ) : (
              <QuoteFormPlaceholder />
            )}
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
