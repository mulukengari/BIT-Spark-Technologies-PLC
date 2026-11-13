import PageHero from "@/components/PageHero";
import ProductCatalog from "@/components/ProductCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Sample Enterprise Hardware Catalog",
  "Browse sample laptops, servers, networking, wireless, security, and storage products. Verify availability and pricing with BIT Spark before requesting a quote.",
  "/products",
  { index: false }
);

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology products"
        title="Sample enterprise hardware catalog"
        description="Explore sample business technology products. Inventory, pricing, and availability are not confirmed and must be verified before quotation."
      />
      <section className="content-section" aria-label="Sample technology catalog">
        <div className="container">
          <ProductCatalog />
        </div>
      </section>
    </>
  );
}
