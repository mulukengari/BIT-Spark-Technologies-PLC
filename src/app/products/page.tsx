import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { productCategories } from "@/lib/data";

export const metadata = {
  title: "Products & Solutions",
  description:
    "Enterprise computing, storage, networking, data center, cybersecurity, software licensing, and business computers from BIT Spark Technologies.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-lightgray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products & Solutions"
            title="Enterprise Technology Portfolio"
            description="A broad range of enterprise IT products and solutions to support your infrastructure, security, and software needs."
          />
          <p className="mt-4 max-w-3xl text-sm text-navy/60">
            Product availability, pricing, and vendor authorization are confirmed per engagement.
            Request a quotation for detailed specifications and commercial terms.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="scroll-mt-24 rounded-xl border border-navy/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy">{cat.title}</h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-navy p-8 text-center text-white">
            <h3 className="text-2xl font-bold">Need a tailored solution?</h3>
            <p className="mt-2 text-white/80">
              Request a quotation and our team will prepare specifications and commercial terms.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Request a Quotation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
