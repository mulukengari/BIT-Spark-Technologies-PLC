import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { coreAreas, whyChoose, featuredTech } from "@/lib/data";

export const metadata = {
  title: "Home",
  description:
    "BIT Spark Technologies PLC delivers reliable technology products, enterprise IT infrastructure, software licensing, and professional technology solutions.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #0866D6 0%, transparent 45%), radial-gradient(circle at 80% 60%, #FF8A24 0%, transparent 40%), linear-gradient(135deg, #071B49 0%, #0a2a6b 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange">
              Innovation. Integrity. Impact.
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Powering Business Through Technology.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              BIT Spark Technologies PLC delivers reliable technology products, enterprise IT
              infrastructure, software licensing, and professional technology solutions that help
              organizations grow, operate efficiently, and embrace digital transformation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="secondary">
                Explore Our Solutions
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="bg-lightgray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Core Business Areas"
            description="Comprehensive technology capabilities spanning infrastructure, software, cloud, and professional services."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreAreas.map((area) => (
              <Card key={area.title} title={area.title} description={area.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Why BIT Spark"
              title="A Trusted Technology Partner"
              description="We combine reliable sourcing, technical expertise, and a customer-focused approach to deliver solutions that support your operational needs and long-term objectives."
            />
            <ul className="space-y-3">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric text-xs text-white">
                    ✓
                  </span>
                  <span className="text-sm text-navy/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Tech */}
      <section className="bg-lightgray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured"
            title="Technology Areas We Cover"
            description="From servers and storage to networking, cybersecurity, cloud, and business software."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {featuredTech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-navy/10 bg-white px-5 py-2 text-sm font-medium text-navy transition-colors hover:border-electric hover:text-electric"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s Build Your Technology Future Together.</h2>
          <p className="mt-4 text-white/80">
            Talk to our team about products, solutions, licensing, and services tailored to your
            organization.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
