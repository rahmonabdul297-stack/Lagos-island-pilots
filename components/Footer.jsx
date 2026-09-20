import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import NewsletterForm from "@/components/NewsletterForm";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="on-dark bg-hero text-white transition-colors duration-300">
      <div className="danfo-stripe" aria-hidden />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Main Organization Info & Contact Details */}
          <div className="sm:col-span-2 lg:col-span-6">
            <Link
              href="/"
              className="group flex min-w-0 shrink items-center gap-2 transition-transform duration-200 hover:scale-[1.01] sm:gap-3"
              aria-label={`${site.name}, home`}
            >
              {/* Responsive logo image */}
              <img
                src="/images/logo.png"
                alt={`${site.name} logo`}
                className="size-9 shrink-0 rounded-full object-cover sm:size-11 lg:size-12"
              />

              {/* Text container handling truncation on mobile vs full wrap on desktop */}
              <span className="flex min-w-0 flex-col justify-center">
                <span className="truncate font-display text-xs font-bold leading-tight tracking-tight text-[#fff] sm:text-sm lg:max-w-xs lg:whitespace-normal lg:text-base lg:leading-snug">
                  {site.name}
                </span>
                <span className="mt-0.5 truncate text-[10px] font-semibold leading-tight text-soft-blue sm:text-xs lg:max-w-xs lg:whitespace-normal">
                  {site.badge}
                </span>
              </span>
            </Link>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-ice-blue/80 sm:text-sm">
              Lagos Island Pilots operates as a subsidiary of the {site.parent}.
              Schedules and pickup points can change, so please confirm details
              with us when you book.
            </p>

            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-ice-blue/90">
              <li className="flex items-center gap-2.5 transition-transform duration-200 hover:translate-x-1">
                <FaMapMarkerAlt
                  className="shrink-0 text-soft-blue"
                  aria-hidden
                />
                <span>Route: Lagos Island ↔ Lagos Mainland(Yaba)</span>
              </li>
              <li className="flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1">
                <FaPhone className="mt-1 shrink-0 text-soft-blue" aria-hidden />
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {Array.isArray(site.phone) ? (
                    site.phone.map((phoneNum, idx) => (
                      <span
                        key={phoneNum}
                        className="inline-flex items-center gap-1.5"
                      >
                        <a
                          href={`tel:${phoneNum.replace(/[^0-9+]/g, "")}`}
                          className="transition-colors hover:text-white hover:underline"
                        >
                          {phoneNum}
                        </a>
                        {idx < site.phone.length - 1 && (
                          <span className="text-ice-blue/40">/</span>
                        )}
                      </span>
                    ))
                  ) : (
                    <a
                      href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {site.phone}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-2.5 transition-transform duration-200 hover:translate-x-1">
                <FaEnvelope className="shrink-0 text-soft-blue" aria-hidden />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-white hover:underline"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Navigation */}
          <nav
            aria-label="Footer Navigation"
            className="sm:col-span-1 lg:col-span-3"
          >
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-soft-blue sm:text-base">
              Quick links
            </h2>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-ice-blue/80 transition-all duration-200 hover:translate-x-1 hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal & Compliance Section */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-soft-blue sm:text-base">
              Legal & Compliance
            </h2>
            {/* <p className="mt-2 text-xs leading-relaxed text-ice-blue/80 sm:text-sm">
              Official subsidiary operating under FSTCY safety guidelines and
              Lagos State school shuttle transport regulations.
            </p> */}

            <ul className="mt-4 space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/terms"
                  className="inline-block text-ice-blue/80 transition-all duration-200 hover:translate-x-1 hover:text-white hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="inline-block text-ice-blue/80 transition-all duration-200 hover:translate-x-1 hover:text-white hover:underline"
                >
                  Parent Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="inline-block text-ice-blue/80 transition-all duration-200 hover:translate-x-1 hover:text-white hover:underline"
                >
                  Student Safety Code
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-black/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-[11px] text-ice-blue/60 sm:px-6 sm:text-left sm:text-xs lg:px-8">
          © {new Date().getFullYear()} {site.name}, a subsidiary of the{" "}
          {site.parent}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
