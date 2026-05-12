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
      <body className="min-h-full text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pink-primary focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <GrassMower />
        <FloatingQuoteButton />
      </body>
    </html>
  );
}
