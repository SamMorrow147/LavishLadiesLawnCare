# Lavish Ladies Lawn Care

Marketing site for Lavish Ladies Lawn Care of Alexandria, MN. Soft spring boutique aesthetic — pastel pinks + sage + cream, Poiret One headings + Poppins body, drifting petals, and a signature pink bow motif.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css`)
- `motion` (Framer Motion) for fade-ups, hover lifts, drifting petals
- `lucide-react` for line icons
- `react-compare-slider` for the before/after gallery

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Drop-in customization

Everything below is wired up with placeholders so the site looks complete out of the box. Swap them in any time.

### 1. Logo

The bow + wordmark in the nav and footer are rendered as SVG components, so they'll always look crisp. When you have the real raster logo, drop it at `public/logo.png` and replace the bow/wordmark spans inside `components/Nav.tsx` and `components/sections/Footer.tsx` with:

```tsx
import Image from "next/image";

<Image src="/logo.png" alt="Lavish Ladies Lawn Care" width={180} height={48} priority />
```

A vector placeholder lives at `public/logo-placeholder.svg` if you want to preview a horizontal lockup.

### 2. Jotform quote form

The quote section (`components/sections/QuoteCTA.tsx`) shows a friendly placeholder until you provide a Jotform form ID. To turn it on:

1. Create a `.env.local` at the project root.
2. Add:

   ```
   NEXT_PUBLIC_JOTFORM_ID=YOUR_FORM_ID
   ```

   (the numeric ID from your Jotform embed URL, e.g. `233651234567899`)

3. Restart `npm run dev`. The form will replace the placeholder card automatically.

### 3. Phone, email, social

Search-and-replace these placeholders across the project:

| Placeholder                          | Where it appears                          |
| ------------------------------------ | ----------------------------------------- |
| `320-298-9976` / `+13202989976`       | Nav, QuoteCTA, Footer                     |
| `hello@lavishladieslawncare.com`     | QuoteCTA, Footer                          |
| `https://instagram.com/`             | Footer                                    |
| `https://facebook.com/`              | Footer                                    |
| `lavishladieslawncare.com` (SITE_URL)| `app/layout.tsx` metadata                 |

### 4. Real photos

Stock imagery is hot-linked from `images.unsplash.com`. To use real photos:

1. Drop them in `public/photos/` (e.g. `public/photos/hero.jpg`).
2. In `components/sections/Hero.tsx`, `About.tsx`, `WhyChooseUs.tsx`, and `Gallery.tsx`, replace the `https://images.unsplash.com/...` URLs with `/photos/your-file.jpg`.
3. (Optional) Remove the `images.remotePatterns` entry in `next.config.ts` once Unsplash is no longer used.

### 5. Service areas

Edit the `SERVICE_AREAS` array in `components/sections/Footer.tsx`.

## Design tokens

Brand colors live in `app/globals.css` under `@theme`:

| Token                  | Hex     | Use                              |
| ---------------------- | ------- | -------------------------------- |
| `--color-pink-primary` | #D98FA2 | Primary CTAs, accents            |
| `--color-pink-soft`    | #EFC6D2 | Soft backgrounds, rings          |
| `--color-pink-blush`   | #F7E1E7 | Subtle bg tints                  |
| `--color-pink-dusty`   | #C9778E | Gradient stops, hover states     |
| `--color-pink-deep`    | #A8536A | Headings/eyebrow accent          |
| `--color-cream`        | #FAF7F8 | Page background                  |
| `--color-sage`         | #B8C7B2 | Secondary nature tone            |
| `--color-yellow-warm`  | #F5C94A | Warm accent (mulch icon chip)    |
| `--color-lavender`     | #E8DFF0 | Testimonials section bg          |

Use them as Tailwind classes: `bg-pink-primary`, `text-pink-deep`, `ring-pink-soft`, etc.

## Project structure

```
app/
  layout.tsx           # fonts, metadata, OG, Nav + FloatingQuoteButton
  page.tsx             # composes all 8 sections + bow dividers
  globals.css          # Tailwind v4 @theme tokens
components/
  Nav.tsx              # sticky transparent navbar + mobile sheet
  FloatingQuoteButton.tsx
  sections/            # Hero, About, Services, WhyChooseUs, Gallery, Testimonials, QuoteCTA, Footer
  ui/                  # Button, SectionHeading, Container, FadeUp
  decorative/          # Star/FiveStar, Sparkle, Petal/Leaf, PetalDrift, FlowerDivider, SocialIcons
lib/
  cn.ts                # className helper
public/
  favicon.svg          # pink bow favicon
  logo-placeholder.svg # horizontal wordmark preview
```

## Deploy

The project is Vercel-ready. Push to a Git repo and import in Vercel — no extra config needed.

If you set `NEXT_PUBLIC_JOTFORM_ID`, add it as a Vercel environment variable too.
