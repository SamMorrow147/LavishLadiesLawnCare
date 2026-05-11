import type { SVGProps } from "react";

export function Star({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="starFill" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#F7E1E7" />
          <stop offset="60%" stopColor="#D98FA2" />
          <stop offset="100%" stopColor="#A8536A" />
        </radialGradient>
      </defs>
      <path
        d="M50 6 C 56 32 68 44 94 50 C 68 56 56 68 50 94 C 44 68 32 56 6 50 C 32 44 44 32 50 6 Z"
        fill="url(#starFill)"
      />
    </svg>
  );
}

export function FiveStar({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M50 5 L61.2 34.6 L97.6 34.6 L68.2 55.9 L79.4 90.5 L50 69.1 L20.6 90.5 L31.8 55.9 L2.4 34.6 L38.8 34.6 Z" />
    </svg>
  );
}

export function Sparkle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M12 2 C 13.4 8 16 10.6 22 12 C 16 13.4 13.4 16 12 22 C 10.6 16 8 13.4 2 12 C 8 10.6 10.6 8 12 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
