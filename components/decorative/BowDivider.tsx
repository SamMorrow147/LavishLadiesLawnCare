import { Bow } from "./Bow";

export function BowDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center py-6 ${className ?? ""}`}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-soft to-transparent" />
      <span className="mx-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream shadow-petal">
        <Bow className="h-7 w-7" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-soft to-transparent" />
    </div>
  );
}
