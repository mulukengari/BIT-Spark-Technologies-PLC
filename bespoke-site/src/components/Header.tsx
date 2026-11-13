"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

const solutions = [
  ["IT Infrastructure", "/services/infrastructure"],
  ["Cloud Computing", "/services/cloud"],
  ["Networking & Security", "/services/networking"],
  ["Software Development", "/services/software"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const updateHeader = () => {
      setScrolled(window.scrollY > 24);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="BIT Spark Technologies home">
          <Logo />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/about" className={isActive("/about") ? "active" : ""} aria-current={isActive("/about") ? "page" : undefined}>About us</Link>
          <div className="nav-dropdown" onMouseLeave={() => setDropdown(null)}>
            <button className={pathname.startsWith("/services") ? "active" : ""} aria-current={pathname.startsWith("/services") ? "page" : undefined} aria-expanded={dropdown === "services"} aria-controls="services-menu" onClick={() => setDropdown(dropdown === "services" ? null : "services")} onMouseEnter={() => setDropdown("services")}>
              Services <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {dropdown === "services" && (
                <motion.div
                  className="dropdown-menu"
                  id="services-menu"
                  initial={reduceMotion ? false : { opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.98 }}
                  transition={{ duration: reduceMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  {solutions.map(([label, href]) => <Link href={href} key={label}>{label}<ArrowRight size={15} /></Link>)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/industries" className={isActive("/industries") ? "active" : ""} aria-current={isActive("/industries") ? "page" : undefined}>Industries</Link>
          <Link href="/projects" className={isActive("/projects") ? "active" : ""} aria-current={isActive("/projects") ? "page" : undefined}>Projects</Link>
          <Link href="/insights" className={isActive("/insights") ? "active" : ""} aria-current={isActive("/insights") ? "page" : undefined}>Insights</Link>
        </nav>
        <Link href="/contact" className="nav-contact">Contact us <ArrowRight size={16} /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close main navigation" : "Open main navigation"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
            className="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/about" onClick={() => setOpen(false)}>About us</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/insights" onClick={() => setOpen(false)}>Insights</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact us</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
