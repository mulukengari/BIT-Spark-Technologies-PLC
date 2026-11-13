import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | BIT Spark Technologies" },
  description:
    "The page you requested could not be found. Return to BIT Spark Technologies to explore enterprise IT solutions and services.",
  robots: { index: false, follow: true },
};

export default function NotFound(){return <section className="page-hero"><div className="container"><span className="kicker">404 • Page not found</span><h1>That page is not available.</h1><p>The link may have changed, or the page may not exist yet.</p><Link className="button button-primary" href="/">Return home</Link></div></section>}
