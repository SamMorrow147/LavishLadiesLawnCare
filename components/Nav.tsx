"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream/85 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(168,83,106,0.15)]"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          {/* Reserved space for the morphing logo (rendered separately from layout root) */}
          <div className="h-12 w-16 flex-shrink-0" aria-hidden="true" />

          <ul
            className={cn(
              "hidden items-center gap-8 transition-opacity duration-500 lg:flex",
              scrolled
                ? "opacity-100"
                : "pointer-events-none opacity-0",
            )}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-ink/80 transition-colors hover:text-pink-deep"
                >
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-pink-primary transition-all duration-300 hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="tel:+13205550000"
              className={cn(
                "flex items-center gap-2 text-sm font-medium text-ink-soft transition-opacity duration-500 hover:text-pink-deep",
                scrolled
                  ? "opacity-100"
                  : "pointer-events-none opacity-0",
              )}
            >
              <Phone className="h-4 w-4" />
              (320) 555-0000
            </Link>
            <Button href="#quote" size="md">
              Get A Quote
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[80] inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-ink shadow-petal ring-1 ring-pink-soft/70 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[65] bg-pink-deep/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Mobile menu sheet — rendered as a Nav sibling so its z-index is unconstrained */}
      <div
        className={cn(
          "fixed inset-x-0 top-[76px] z-[70] origin-top transform-gpu transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="mx-4 rounded-3xl bg-cream/95 p-6 shadow-bloom ring-1 ring-pink-soft/60 backdrop-blur-md">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-display text-2xl tracking-wide text-ink transition-colors hover:bg-pink-blush hover:text-pink-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-pink-soft/60 pt-5">
            <Link
              href="tel:+13205550000"
              className="flex items-center gap-3 rounded-2xl bg-pink-blush/60 px-4 py-3 text-sm font-medium text-pink-deep"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" />
              (320) 555-0000
            </Link>
            <Button
              href="#quote"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Get A Free Quote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
