import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-pink-primary via-pink-dusty to-pink-deep text-cream shadow-petal hover:-translate-y-0.5 hover:shadow-bloom",
  secondary:
    "bg-cream text-pink-deep border border-pink-soft hover:border-pink-primary hover:bg-pink-blush hover:-translate-y-0.5 shadow-sm",
  ghost:
    "bg-transparent text-ink hover:text-pink-deep hover:bg-pink-blush/60",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...rest
}: ButtonProps & ComponentPropsWithoutRef<"button"> & ComponentPropsWithoutRef<"a">) {
  const classes = cn(base, sizes[size], variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
