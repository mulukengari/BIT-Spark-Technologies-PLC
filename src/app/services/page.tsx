import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Services",
  description:
    "IT consulting, solution design, infrastructure deployment, cloud migration, system integration, and technical support from BIT Spark Technologies PLC.",
};

const serviceGroups = [
  {
    id: "consulting",
    title: "IT Consulting & Advisory",
    description:
      "Technology assessments, vendor selection, and roadmap planning to align infrastructure with your business objectives.",
    includes: ["IT Infrastructure Consultancy", "Software Licensing Advisory"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca888157?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "design",
    title: "Solution Design & Architecture",
    description:
      "Design of scalable, resilient technology architectures tailored to your organization's operational requirements.",
    includes: ["Solution Design and Architecture"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "deployment",
    title: "Infrastructure Deployment",
    description:
      "Installation and configuration of servers, storage systems, networking equipment, and data center infrastructure.",
    includes: ["Server and Storage Deployment", "Network Implementation"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef646c4e61f6?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "cloud",
    title: "Cloud Migration & Deployment",
    description:
      "Planning and execution of cloud adoption, migration, and deployment to modernize and scale your IT environment.",
    includes: ["Cloud Migration and Deployment"],
    image:
      "https://images.unsplash.com/photo-1544243303-5250576a743e?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "integration",
    title: "System Integration",
    description:
      "Integration of hardware, software, and services into cohesive solutions that support your business processes.",
    includes: ["System Integration"],
    image:
      "https://images.unsplash.com/photo-1526381307759-0bf187db1066?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "support",
    title: "Technical Support & Maintenance",
    description:
      "Ongoing support, backup and disaster recovery, and IT project implementation to keep systems reliable.",
    includes: ["Technical Support and Maintenance", "Backup and Disaster Recovery", "IT Project Implementation"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-electric">
                Services
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Professional Technical Services
              </h1>
              <p className="mt-6 text-base leading-relaxed text-foreground/90 max-w-xl">
                End-to-end services that help you design, deploy, and operate technology with confidence —
                from consulting and solution design through deployment and ongoing support.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/contact" variant="secondary">
                  Request a Quotation
                </Button>
                <Button href="/products" variant="outline">
                  Explore Solutions
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] w-full hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80&auto=format&fit=crop"
                alt="Enterprise IT services and technology infrastructure"
                fill
                sizes="(max-width: 1000px) 100vw, 1000px"
                className="rounded-xl shadow-xl object-cover"
                priority
              />
            </div>

            <div className="lg:hidden mt-8">
              <div className="relative h-[320px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=80&auto=format&fit=crop"
                  alt="Enterprise IT services and technology infrastructure"
                  fill
                  sizes="(max-width: 700px) 100vw, 700px"
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Groups */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Offerings"
            title="What We Deliver"
            description="Professional services across consulting, design, deployment, cloud, integration, and support."
            align="center"
          />
          <div className="mt-14 space-y-16">
            {serviceGroups.map((group, index) => (
              <div
                key={group.id}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                <div className="max-w-lg">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-electric text-[10px] text-white font-bold mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {group.description}
                  </p>
                  <div className="mt-5 space-y-2">
                    {group.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-electric" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-48 overflow-hidden rounded-xl border border-border bg-lightgray">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lightgray py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl text-navy">
            Need a tailored solution?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90 max-w-xl mx-auto">
            Tell us about your requirements and our team will prepare specifications and
            commercial terms for your review.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="secondary" className="w-auto">
              Request a Quotation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
