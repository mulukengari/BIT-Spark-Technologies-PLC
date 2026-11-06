import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { productCategories } from "@/lib/data";

export const metadata = {
  title: "Products & Solutions",
  description:
    "Enterprise computing, storage, networking, data center, cybersecurity, cloud solutions, and software licensing from BIT Spark Technologies PLC.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-lightgray py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products & Solutions"
            title="Enterprise Technology Portfolio"
            description="A curated range of enterprise IT products and solutions to support your infrastructure, security, and software needs."
          />
          <p className="mt-6 max-w-3xl text-sm text-foreground/90 leading-relaxed">
            Product availability, specifications, and commercial terms are confirmed per engagement.
            Request a quotation for detailed pricing and vendor authorization.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/contact?category=${encodeURIComponent(cat.title)}`}
                className="group block"
              >
                <div className="rounded-xl border border-border bg-white p-6 hover:border-electric/50 hover:shadow-xl transition-all duration-200 focus-within:ring-2 focus-within:ring-electric focus-within:ring-offset-2">
                  <div className="relative h-40 overflow-hidden rounded-lg border border-border mb-4 bg-lightgray">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      priority={cat.id === "enterprise-computing"}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-electric mb-2">
                      Includes
                    </h4>
                    <ul className="space-y-1 text-sm text-foreground/70">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button variant="outline" className="w-full text-sm">
                      Request Quotation
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-card py-20 border-t border-border">
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
