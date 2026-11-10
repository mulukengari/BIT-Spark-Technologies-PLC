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
      { href: "/products#cloud-solutions", label: "Cloud Solutions" },
      { href: "/products#software", label: "Software Licensing" },
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
    <footer className="border-t border-indigo/10 bg-snow-white text-midnight-blue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="text-navy" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-midnight-blue">
              BIT Spark Technologies PLC delivers reliable technology products, enterprise IT
              infrastructure, software licensing, and professional technology solutions.
            </p>
            <p className="mt-4 text-sm font-semibold text-electric">
              Powering Business Through Technology.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-midnight-blue transition-colors hover:text-indigo"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
              Contact Details
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-midnight-blue">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-indigo">BIT Spark Technologies PLC</span>
                <p className="text-sm text-foreground/80">Addis Ababa, Ethiopia</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-indigo">Inquiries</span>
                <p className="text-sm text-foreground/80">
                  Visit our Contact page to send us a message.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-midnight-blue/60">
              &copy; {new Date().getFullYear()} BIT Spark Technologies PLC. All rights reserved.
            </p>
            <p className="text-xs text-midnight-blue/40">
              Office location, telephone, and email details are provided on the Contact page.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
