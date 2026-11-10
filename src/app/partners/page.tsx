import { SectionHeading } from "@/components/SectionHeading";
import { partners } from "@/lib/data";

export const metadata = {
  title: "Partners",
  description:
    "Technology partners and vendor relationships of BIT Spark Technologies PLC.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="bg-lightgray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Partners"
            title="Technology Partners"
            description="We work with leading enterprise technology vendors to source and deliver solutions."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p}
                className="flex items-center justify-center rounded-lg border border-border bg-white p-8 text-base font-semibold text-navy"
              >
                {p}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-foreground">
            Partner logos, authorization, and certification claims are displayed only after official
            confirmation. Contact us to discuss partnership opportunities.
          </p>
        </div>
      </section>
    </>
  );
}
