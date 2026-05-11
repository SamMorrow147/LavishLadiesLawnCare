"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

export function FloatingQuoteButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="#quote"
      aria-label="Request a free quote"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
      className={cn(
        "fixed right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-primary via-pink-dusty to-pink-deep px-5 py-3 text-sm font-semibold text-cream shadow-bloom transition-all duration-500 lg:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <Sparkles className="h-4 w-4" />
      Free Quote
    </Link>
  );
}
