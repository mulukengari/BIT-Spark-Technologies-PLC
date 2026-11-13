import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light" aria-label="BIT Spark Technologies home"><Logo /></Link>
          <p>Enterprise technology solutions designed around your business.</p>
        </div>
        <div><h2>Company</h2><Link href="/about">About us</Link><Link href="/projects">Projects</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact BIT Spark</Link></div>
        <div><h2>Solutions</h2><Link href="/services">IT services</Link><Link href="/products">Technology products</Link><Link href="/industries">Industry solutions</Link><Link href="/partners">Technology partners</Link></div>
        <div><h2>Resources</h2><Link href="/insights">Technology insights</Link><Link href="/faq">Frequently asked questions</Link><Link href="/request-quote">Request an IT quotation</Link><a href="tel:+251929316976">Call +251 929 316 976</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 BIT Spark Technologies</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
    </footer>
  );
}
