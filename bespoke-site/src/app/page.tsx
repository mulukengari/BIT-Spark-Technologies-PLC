import Link from "next/link";
import Image from "next/image";
import Entrance from "@/components/Entrance";
import SolutionsSection from "@/components/SolutionsSection";
import PartnersOverview from "@/components/PartnersOverview";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const industries = [
  { title: "Financial services", text: "Secure, compliant technology for resilient operations and protected data." },
  { title: "Government", text: "Reliable infrastructure and systems designed for public-sector accountability." },
  { title: "Education", text: "Connected campus environments built for students, staff, and institutions." },
  { title: "Healthcare", text: "Technology foundations that support continuity, privacy, and clinical efficiency." },
  { title: "Telecommunications", text: "Scalable networks and platforms for high-performance digital services." },
  { title: "Enterprise & SME", text: "Right-sized solutions that improve operations and support sustainable growth." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          className="hero-background"
          src="/digital-circuit-background.svg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-grid container">
          <Entrance className="hero-copy" delay={0.08}>
            <span className="kicker">Welcome to BIT Spark Technologies</span>
            <h1>Your System, Our Spark</h1>
            <div className="hero-actions">
              <Link className="button button-primary" href="/services">
                Explore Our Solutions
              </Link>
            </div>
          </Entrance>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><strong>End-to-end</strong><span>Technology delivery</span></div>
          <div><strong>Enterprise</strong><span>Infrastructure expertise</span></div>
          <div><strong>Scalable</strong><span>Business-ready solutions</span></div>
          <div><strong>Hands-on</strong><span>Implementation support</span></div>
        </div>
      </section>

      <SolutionsSection />

      <PartnersOverview showIntro />

      <section className="section industries-section" data-robot-target="industries">
        <div className="container">
          <div className="section-heading compact">
            <div><span className="kicker">Industries</span><h2>Solutions shaped for your sector</h2></div>
            <Link className="text-link" href="/industries">Explore industries <ArrowRight size={17} /></Link>
          </div>
          <div className="industry-grid">
            {industries.map((industry, index) => (
              <Link
                href="/industries"
                className="industry-card"
                key={industry.title}
                data-robot-target={industry.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                data-robot-tip={industry.text}
              >
                <span className="industry-number">0{index + 1}</span>
                <div><h3>{industry.title}</h3><p>{industry.text}</p></div>
                <span className="industry-arrow"><ChevronRight size={18} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" data-robot-target="quote">
        <div className="container cta-box">
          <div><span className="kicker">Start a conversation</span><h2>Let&apos;s Build Your Technology Future.</h2><p>Whether you are modernizing your IT infrastructure, adopting cloud technologies or strengthening your cybersecurity, BIT Spark is ready to help you identify the right technology solutions.</p></div>
          <div className="cta-actions"><Link className="button button-primary" href="/contact">Discuss Your Project <ArrowRight size={18} /></Link></div>
        </div>
      </section>
    </>
  );
}
