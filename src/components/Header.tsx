"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="BIT Spark Technologies home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-lightgray hover:text-electric"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-electric px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
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
              <path
                d="M4 7 H20 M4 12 H20 M4 17 H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-lightgray hover:text-electric"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-electric px-4 py-2 text-sm font-semibold text-white hover:bg-navy"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
