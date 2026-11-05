import Link from "next/link";
import { Logo } from "@/components/Logo";

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/industries", label: "Industries" },
      { href: "/partners", label: "Partners" },
      { href: "/tenders", label: "Tenders & Procurement" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/products", label: "Products & Solutions" },
      { href: "/products#enterprise-computing", label: "Enterprise Computing" },
      { href: "/products#networking", label: "Networking" },
      { href: "/products#cybersecurity", label: "Cybersecurity" },
      { href: "/products#software", label: "Software & Licensing" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/contact", label: "Request a Quotation" },
      { href: "/contact", label: "Tender Inquiries" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              BIT Spark Technologies PLC delivers reliable technology products, enterprise IT
              infrastructure, software licensing, and professional technology solutions.
            </p>
            <p className="mt-4 text-sm font-semibold text-orange">
              Powering Business Through Technology.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-white/60">
              &copy; {new Date().getFullYear()} BIT Spark Technologies PLC. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/60">
              <span>Follow us:</span>
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-colors hover:text-orange"
              >
                LinkedIn
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="transition-colors hover:text-orange"
              >
                X
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors hover:text-orange"
              >
                Facebook
              </a>
            </div>
          </div>
          <p className="mt-3 text-xs text-white/40">
            Office location, telephone, and email details are provided on the Contact page. Social
            media links are placeholders pending official channel confirmation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
