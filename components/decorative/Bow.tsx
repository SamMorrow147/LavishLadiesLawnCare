import type { SVGProps } from "react";

export function Bow({
  className,
  title,
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="bowLoopFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7E1E7" />
          <stop offset="100%" stopColor="#EFC6D2" />
        </linearGradient>
        <linearGradient id="bowKnotFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D98FA2" />
          <stop offset="100%" stopColor="#C9778E" />
        </linearGradient>
      </defs>
      <path
        d="M30 12 C 30 6 23 4 14 6 C 5 8 3 14 3 20 C 3 26 5 32 14 34 C 23 36 30 34 30 28 Z"
        fill="url(#bowLoopFill)"
      />
      <path
        d="M34 12 C 34 6 41 4 50 6 C 59 8 61 14 61 20 C 61 26 59 32 50 34 C 41 36 34 34 34 28 Z"
        fill="url(#bowLoopFill)"
      />
      <rect
        x="27.5"
        y="11"
        width="9"
        height="18"
        rx="2.5"
        fill="url(#bowKnotFill)"
      />
    </svg>
  );
}
