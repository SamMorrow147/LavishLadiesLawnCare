import type { SVGProps } from "react";

export function Petal({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="petalFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#EFC6D2" />
          <stop offset="100%" stopColor="#D98FA2" />
        </linearGradient>
      </defs>
      <path
        d="M16 1 C 26 8 30 18 26 28 C 23 35 18 39 16 39 C 14 39 9 35 6 28 C 2 18 6 8 16 1 Z"
        fill="url(#petalFill)"
      />
    </svg>
  );
}

export function Leaf({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="leafFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DDE6D8" />
          <stop offset="100%" stopColor="#8BBF8A" />
        </linearGradient>
      </defs>
      <path
        d="M16 2 C 28 14 28 28 16 38 C 4 28 4 14 16 2 Z"
        fill="url(#leafFill)"
      />
      <path
        d="M16 4 C 16 18 16 30 16 38"
        stroke="#5D8A5C"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
