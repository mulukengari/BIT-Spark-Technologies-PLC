import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { industries } from "@/lib/data";

export const metadata = {
  title: "Industries",
  description:
    "Technology solutions for government, banking, telecom, education, healthcare, NGOs, and private enterprises.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-lightgray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Serve"
            description="Technology solutions tailored to the needs of diverse sectors."
            align="center"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <Card key={ind.title} title={ind.title} description={ind.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
