"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaBus, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Read theme on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
      document.documentElement.classList.toggle("light", saved === "light");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", prefersDark);
      document.documentElement.classList.toggle("light", !prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.classList.toggle("light", nextTheme === "light");
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur transition-colors duration-300 border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3 lg:gap-4 lg:px-8">
        
        {/* Brand Logo & Text Header */}
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
            <span className="truncate font-display text-xs font-bold leading-tight tracking-tight text-ink sm:text-sm lg:max-w-xs lg:whitespace-normal lg:text-base lg:leading-snug">
              {site.name}
            </span>
            <span className="mt-0.5 truncate text-[10px] font-semibold leading-tight text-brand sm:text-xs lg:max-w-xs lg:whitespace-normal">
              {site.badge}
            </span>
          </span>
        </Link>

        {/* Desktop Nav Items + Toggle Button */}
        <nav aria-label="Main" className="hidden shrink-0 items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                isActive(link.href)
                  ? "bg-brand/10 text-brand shadow-xs"
                  : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* DESKTOP LIGHT/DARK TOGGLE BUTTON */}
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 grid size-10 place-items-center rounded-full border border-line bg-surface text-ink shadow-xs transition-all duration-300 hover:scale-110 hover:border-brand hover:text-brand"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <FaSun className="text-amber-400 text-base" />
              ) : (
                <FaMoon className="text-brand text-base" />
              )
            ) : (
              <span className="size-4 rounded-full bg-line animate-pulse" />
            )}
          </button>

          <Link
            href="/contact"
            className="btn btn-primary ml-2 min-h-10 py-2 text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Book Shuttle / Inquire
          </Link>
        </nav>

        {/* Mobile Header Controls */}
        <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
          {/* MOBILE LIGHT/DARK TOGGLE BUTTON */}
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-9 place-items-center rounded-full border border-line bg-surface text-ink transition-transform duration-200 active:scale-90 sm:size-10"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <FaSun className="text-amber-400 text-sm sm:text-base" />
              ) : (
                <FaMoon className="text-brand text-sm sm:text-base" />
              )
            ) : (
              <span className="size-3.5 rounded-full bg-line animate-pulse" />
            )}
          </button>

          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-line text-ink text-base transition-transform duration-200 active:scale-90 sm:size-10 sm:text-lg"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="animate-fade-in border-t border-line bg-surface px-4 pb-5 pt-3 transition-all duration-300 lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-brand/10 text-brand font-semibold"
                      : "text-ink hover:bg-brand/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="btn btn-primary mt-4 w-full shadow-md"
          >
            Book Shuttle / Inquire
          </Link>
        </nav>
      )}

      <div className="danfo-stripe" aria-hidden />
    </header>
  );
}