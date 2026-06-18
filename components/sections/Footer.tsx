import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FiveStar } from "@/components/decorative/Star";
import { InstagramIcon, FacebookIcon } from "@/components/decorative/SocialIcons";

const QUICK_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#quote", label: "Get A Quote" },
];

const SERVICE_AREAS = [
  "Alexandria",
  "Garfield",
  "Carlos",
  "Nelson",
  "Osakis",
  "Glenwood",
  "Miltona",
  "Brandon",
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-ink"
      style={{
        background:
          "linear-gradient(180deg, #F7E1E7 0%, #EFC6D2 60%, #E5B0BF 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cream/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-deep/20 blur-3xl"
      />

      <Container className="relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <Link href="#top" className="inline-flex items-center" aria-label="Lavish Ladies Lawn Care home">
              <Image
                src="/Logo.png"
                alt="Lavish Ladies Lawn Care"
                width={895}
                height={545}
                loading="eager"
                className="select-none"
                style={{ height: "72px", width: "auto", aspectRatio: "895 / 545" }}
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-ink/80 text-pretty">
              Reliable lawn care with a polished, detail-loving touch.
              Locally owned and proudly serving Alexandria, MN and the
              surrounding area.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/80 text-pink-deep transition-all hover:-translate-y-0.5 hover:bg-cream"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/80 text-pink-deep transition-all hover:-translate-y-0.5 hover:bg-cream"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-deep">
              Quick Links
            </p>
            <ul className="mt-5 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/85 transition-colors hover:text-pink-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-deep">
              Service Areas
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-ink/85">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-pink-deep" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-deep">
              Get In Touch
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+13202989976"
                  className="flex items-center gap-3 text-ink/90 transition-colors hover:text-pink-deep"
                >
                  <Phone className="h-4 w-4" />
                  320-298-9976
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@lavishladieslawncare.com"
                  className="flex items-center gap-3 text-ink/90 transition-colors hover:text-pink-deep"
                >
                  <Mail className="h-4 w-4" />
                  hello@lavishladieslawncare.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink/90">
                <MapPin className="h-4 w-4" />
                Alexandria, MN
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-cream/50 pt-8 sm:flex-row sm:justify-between">
          <p className="flex items-center gap-2 text-xs text-ink/70">
            <FiveStar className="h-3.5 w-3.5 text-pink-deep" />
            &copy; {new Date().getFullYear()} Lavish Ladies Lawn Care. All
            rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-pink-deep">
            Made with care in Alexandria, MN
          </p>
        </div>
      </Container>
    </footer>
  );
}
