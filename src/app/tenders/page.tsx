import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const tenderPoints = [
  "IT product supply aligned to technical specifications.",
  "Technical specifications and compliance documentation.",
  "Technical proposals tailored to tender requirements.",
  "Commercial quotations and pricing schedules.",
  "Vendor coordination and sourcing support.",
  "Delivery and implementation support.",
];

export const metadata = {
  title: "Tenders & Procurement",
  description:
    "BIT Spark Technologies supports institutional procurement and tender requirements with IT products, documentation, and implementation.",
};

export default function TendersPage() {
  return (
    <>
      <section className="bg-lightgray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tenders & Procurement"
            title="Supporting Institutional Procurement"
            description="We support organizations with product supply, documentation, and implementation for tender and procurement processes."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tenderPoints.map((p) => (
              <div
                key={p}
                className="rounded-lg border border-border bg-white p-6 text-sm text-foreground/90"
              >
                {p}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-foreground">
            We do not claim government contracts or completed projects unless verified. Contact us
            for tender invitations and procurement inquiries.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Contact for Tender Inquiries
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
