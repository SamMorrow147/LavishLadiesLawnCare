import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  width?: number;
};

export function FlowerDivider({ className, width = 420 }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center", className)}
    >
      <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-pink-soft to-transparent sm:block" />
      <div
        className="mx-3 w-full max-w-[80vw]"
        style={{ maxWidth: `${width}px` }}
      >
        <Image
          src="/Flower.png"
          alt=""
          width={width}
          height={Math.round(width / 3.2)}
          sizes="(min-width: 640px) 420px, 80vw"
          loading="eager"
          className="block select-none"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "720 / 225",
          }}
        />
      </div>
      <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-pink-soft to-transparent sm:block" />
    </div>
  );
}

export function FlowerBanner({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none flex justify-center", className)}
    >
      <div className="w-full max-w-[640px]">
        <Image
          src="/Flower.png"
          alt=""
          width={720}
          height={225}
          sizes="(min-width: 768px) 640px, 80vw"
          loading="eager"
          className="block select-none"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "720 / 225",
          }}
        />
      </div>
    </div>
  );
}
