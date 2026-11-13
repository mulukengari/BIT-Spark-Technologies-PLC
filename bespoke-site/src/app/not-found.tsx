import Link from "next/link";
export default function NotFound(){return <section className="page-hero"><div className="container"><span className="kicker">404 • Page not found</span><h1>That page is not available.</h1><p>The link may have changed, or the page may not exist yet.</p><Link className="button button-primary" href="/">Return home</Link></div></section>}
