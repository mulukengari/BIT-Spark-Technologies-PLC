"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products & Solutions" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/partners", label: "Partners" },
  { href: "/tenders", label: "Tenders" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClasses = (active: boolean) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 ${
      active
        ? "font-semibold text-indigo bg-indigo/10"
        : "text-foreground hover:bg-snow-white hover:text-indigo"
    }`;

  const mobileLinkClasses = (active: boolean) =>
    `rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200 border-b border-indigo/10/50 last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo ${
      active
        ? "font-semibold text-indigo bg-snow-white"
        : "text-foreground hover:bg-snow-white hover:text-indigo"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-indigo/10 bg-snow-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="BIT Spark Technologies home" className="shrink-0 flex items-center">
          <Logo className="py-1" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={linkClasses(active)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-midnight-blue px-4 py-2 text-sm font-semibold text-midnight-blue transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 hover:bg-midnight-blue hover:text-white"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-midnight-blue lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v: boolean) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6 L18 18 M18 6 L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M4 7 H20 M4 12 H20 M4 17 H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-indigo/10 bg-snow-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={mobileLinkClasses(active)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md border border-midnight-blue px-4 py-2.5 text-sm font-semibold text-midnight-blue transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo hover:bg-midnight-blue hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
