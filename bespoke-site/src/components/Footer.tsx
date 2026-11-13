import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light" aria-label="BIT Spark Technologies home"><Logo /></Link>
          <p>Enterprise technology solutions designed around your business.</p>
        </div>
        <div><h3>Company</h3><Link href="/about">About us</Link><Link href="/projects">Projects</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Solutions</h3><Link href="/services">Services</Link><Link href="/products">Products</Link><Link href="/industries">Industries</Link><Link href="/partners">Technology partners</Link></div>
        <div><h3>Resources</h3><Link href="/insights">Insights</Link><Link href="/faq">FAQ</Link><Link href="/request-quote">Request a quote</Link><a href="mailto:hello@bitsparktech.example">Email the team <ArrowUpRight size={14} /></a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 BIT Spark Technologies</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
    </footer>
  );
}
