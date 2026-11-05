import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services",
  description:
    "IT consultancy, solution design, deployment, cloud migration, licensing advisory, integration, backup and disaster recovery, and technical support from BIT Spark Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-lightgray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Professional Technical Services"
            description="End-to-end services that help you design, deploy, and operate technology with confidence."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
