import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { values } from "@/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "Learn about BIT Spark Technologies PLC — an Ethiopian technology company delivering enterprise IT products, software licensing, infrastructure, and professional technical services.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-lightgray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            title="BIT Spark Technologies PLC"
            description="An Ethiopian technology company focused on delivering enterprise IT products, software licensing, infrastructure solutions, and professional technical services."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-navy">Company Overview</h3>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                BIT Spark Technologies PLC is an Ethiopian technology company focused on delivering
                enterprise IT products, software licensing, infrastructure solutions, and professional
                technical services.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                We help organizations identify, acquire, deploy, and manage technology solutions that
                support their operational needs and long-term business objectives.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                Through reliable supplier relationships, technical knowledge, and a customer-focused
                approach, BIT Spark aims to become a trusted technology partner for organizations across
                Ethiopia and beyond.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-navy/10 bg-lightgray p-6">
                <h3 className="text-xl font-semibold text-navy">Vision</h3>
                <p className="mt-2 text-base leading-relaxed text-navy/70">
                  To become a trusted technology partner recognized for delivering innovative and
                  reliable technology solutions.
                </p>
              </div>
              <div className="rounded-xl border border-navy/10 bg-lightgray p-6">
                <h3 className="text-xl font-semibold text-navy">Mission</h3>
                <p className="mt-2 text-base leading-relaxed text-navy/70">
                  To empower organizations through accessible technology products, reliable software
                  solutions, and professional technical services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lightgray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Values"
            title="What Guides Us"
            description="Innovation. Integrity. Impact."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
