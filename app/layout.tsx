import type { Metadata, Viewport } from "next";
import { Poiret_One, Poppins } from "next/font/google";
import Script from "next/script";
import { Nav } from "@/components/Nav";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { GrassMower } from "@/components/decorative/GrassMower";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-R5F9BCWK3L";

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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full bg-cream text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pink-primary focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        {/* iOS Safari URL-bar fade. A single fixed element pinned to the
            very bottom edge of the viewport. Its background is a vertical
            gradient that's transparent at the top (so the page above the
            grass stays cream) and ramps to solid #6da76f at the bottom,
            so the strip behind the Safari URL pill is a strong, solid
            block of green. With viewport-fit=cover that bottom edge sits
            behind the Safari chrome, which "Liquid Glass" then samples
            to tint the URL pill green. Gated to iOS WebKit in globals
            .css (display: none everywhere else), so Android Chrome and
            desktop browsers see nothing and the grass runs flush to the
            viewport edge there. Sits below the grass (z-index 0 vs
            grass's z-index 20) so the grass paints in front normally. */}
        <div aria-hidden="true" className="safari-bottom-fade" />
        <GrassMower />
        <FloatingQuoteButton />
      </body>
    </html>
  );
}
