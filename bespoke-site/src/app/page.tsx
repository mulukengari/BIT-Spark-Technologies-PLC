import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Entrance from "@/components/Entrance";
import SolutionsSection from "@/components/SolutionsSection";
import PartnersOverview from "@/components/PartnersOverview";
import { industrySolutions } from "@/lib/industries";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata(
    "Enterprise IT Solutions",
    "BIT Spark Technologies delivers enterprise IT infrastructure, cloud, networking, cybersecurity, software, and managed services for modern organizations.",
    "/"
  ),
  title: { absolute: "Enterprise IT Solutions | BIT Spark Technologies" },
};

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
            <h1>Enterprise IT Solutions, Built for Your Business</h1>
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
            {industrySolutions.map((industry, index) => (
              <Link
                href={`/industries/${industry.slug}`}
                className="industry-card"
                key={industry.slug}
                data-robot-target={industry.slug}
                data-robot-tip={industry.summary}
              >
                <span className="industry-number">0{index + 1}</span>
                <div><h3>{industry.cardTitle}</h3><p>{industry.summary}</p></div>
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
