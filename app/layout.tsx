import type { Metadata, Viewport } from "next";
import { Poiret_One, Poppins } from "next/font/google";
import { Nav } from "@/components/Nav";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { GrassMower } from "@/components/decorative/GrassMower";
import "./globals.css";

const display = Poiret_One({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://lavishladieslawncare.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lavish Ladies Lawn Care | Alexandria MN Lawn Care & Landscaping",
    template: "%s | Lavish Ladies Lawn Care",
  },
  description:
    "Professional lawn mowing, seasonal cleanup, landscaping touch-ups, and outdoor maintenance with a polished, detail-loving touch. Serving Alexandria, MN and the surrounding area.",
  keywords: [
    "Alexandria MN lawn care",
    "lawn mowing Alexandria MN",
    "landscaping",
    "spring cleanup",
    "fall cleanup",
    "yard maintenance",
    "residential lawn care",
    "lawn services near me",
  ],
  authors: [{ name: "Lavish Ladies Lawn Care" }],
  openGraph: {
    title: "Lavish Ladies Lawn Care | Alexandria MN",
    description:
      "Reliable lawn care with a polished, detail-loving touch. Mowing, cleanup, landscaping, and more for Alexandria, MN homeowners.",
    url: SITE_URL,
    siteName: "Lavish Ladies Lawn Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavish Ladies Lawn Care | Alexandria MN",
    description:
      "Reliable lawn care with a polished, detail-loving touch. Serving Alexandria, MN and the surrounding area.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#D98FA2",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pink-primary focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        {/* iOS Safari safe-area backdrop: a fixed sage band anchored at the
            true viewport bottom. With viewport-fit=cover this paints behind
            the translucent URL pill so the chrome zone reads as continuous
            lawn instead of the page's cream background. Height is additive
            (env + URL-pill chrome differential + 8px overshoot) so it covers
            both the home-indicator inset and the dynamic URL-pill area on
            every iOS version. Collapses to an 8px sliver on Android /
            desktop / older iOS where env and (100lvh - 100dvh) are 0,
            tucked invisibly behind the GrassMower strip above. */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 select-none"
          style={{
            height:
              "calc(env(safe-area-inset-bottom, 0px) + (100lvh - 100dvh) + 8px)",
            background:
              "linear-gradient(to bottom, #8bbf8a 0%, #6da76f 55%, #4a7a52 100%)",
            zIndex: 1,
          }}
        />
        <GrassMower />
        <FloatingQuoteButton />
      </body>
    </html>
  );
}
