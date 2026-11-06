import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import {
  coreAreas,
  industries,
  services,
  whyChoose,
} from "@/lib/data";

export const metadata = {
  title: "Home",
  description:
    "BIT Spark Technologies PLC delivers reliable technology products, enterprise IT infrastructure, software licensing, and professional technology solutions.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
               <p className="text-xs font-semibold uppercase tracking-widest text-indigo">
                Enterprise Technology Solutions
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-midnight-blue sm:text-4xl">
 Powering Business Through Technology.
                Powering Business Through Technology.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-foreground/90 max-w-xl">
                Enterprise technology products, infrastructure solutions, software licensing,
                and professional IT services that help organizations build reliable and secure
                digital environments.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/products">Explore Our Solutions</Button>
                <Button href="/contact" variant="outline">Contact Our Team</Button>
              </div>
            </div>

            <div className="relative h-[480px] w-full hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef646c4e61f6?w=1200&amp;q=80&amp;auto=format&amp;fit=crop"
                alt="Enterprise data center with server racks and networking equipment"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>

            {/* Mobile: image shown below the copy, stacked naturally in the single-column grid */}
            <div className="lg:hidden mt-6">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef646c4e61f6?w=900&amp;q=80&amp;auto=format&amp;fit=crop"
                  alt="Enterprise data center with server racks and networking equipment"
                  fill
                  sizes="(max-width: 900px) 100vw, 900px"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="bg-lightgray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About BIT Spark Technologies"
                title="A trusted enterprise technology partner"
                description="BIT Spark Technologies PLC is an enterprise technology provider helping organizations across Ethiopia build reliable, secure, and scalable digital environments. We supply enterprise-grade IT infrastructure, licensed business software, cloud solutions, and professional technical services—backed by dependable sourcing, technical expertise, and long-term customer partnerships."
                align="left"
              />
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-md bg-electric text-[10px] text-white">
                    ✓
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    End-to-end technology solutions, from infrastructure and software to
                    networking and professional services.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-md bg-electric text-[10px] text-white">
                    ✓
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Reliable sourcing and procurement through established supplier and partner
                    relationships.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-md bg-electric text-[10px] text-white">
                    ✓
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Technical expertise across servers, storage, networking, cybersecurity,
                    cloud, and business software.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-md bg-electric text-[10px] text-white">
                    ✓
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Professional project support from planning through delivery and beyond.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[420px] w-full hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&amp;q=80&amp;auto=format&amp;fit=crop"
                alt="Modern office and technology workspace"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="rounded-xl shadow-xl object-cover"
                priority
              />
            </div>

            {/* Mobile: image shown below the copy */}
            <div className="lg:hidden mt-8">
              <div className="relative h-[320px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=700&amp;q=80&amp;auto=format&amp;fit=crop"
                  alt="Modern office and technology workspace"
                  fill
                  sizes="(max-width: 700px) 100vw, 700px"
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Technology Solutions */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Core Technology Solutions"
            description="Comprehensive technology capabilities spanning infrastructure, software, cloud, storage, networking, and professional services."
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreAreas.map((area) => (
              <Card key={area.title} title={area.title} description={area.description} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Professional Services */}
      <section className="bg-lightgray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Professional Services"
            title="Expert Services You Can Rely On"
            description="Advisory, design, deployment, and ongoing support aligned to your business objectives and long-term technology goals."
            align="center"
          />
          <div className="mt-14 space-y-6 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="border-b border-border/50 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="text-sm font-semibold text-navy">{service.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose BIT Spark */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Why BIT Spark"
              title="A Trusted Technology Partner"
              description="We combine reliable sourcing, technical expertise, and a customer-focused approach to deliver solutions that support your operational needs and long-term objectives."
            />
            <ul className="space-y-4">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-electric text-[10px] text-white">
                    ✓
                  </span>
                  <span className="text-sm text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="bg-lightgray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Serve"
            description="Technology solutions tailored to the unique requirements of each sector we support."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-lg border border-border bg-white p-5 text-center hover:border-electric/50 hover:bg-electric/5 transition-colors"
              >
                <h3 className="text-sm font-semibold text-navy leading-tight">
                  {industry.title}
                </h3>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact / Quotation Call to Action */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl text-midnight-blue">
            Ready to Start Your Next Project?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90 max-w-xl mx-auto">
            Talk to our team about products, solutions, licensing, tender inquiries, or
            professional services tailored to your organization.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/contact" variant="secondary">
              Request a Quotation
            </Button>
            <Button href="/contact" variant="outline">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
