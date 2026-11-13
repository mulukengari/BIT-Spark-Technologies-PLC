import PageHero from "@/components/PageHero";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Request an IT Services Quotation",
  "Prepare a quotation enquiry for IT hardware, infrastructure, cloud, networking, cybersecurity, software, installation, or technical support.",
  "/request-quote",
  { index: false }
);

export default function Quote() {
  return (
    <>
      <PageHero
        eyebrow="Request a quotation"
        title="Discuss your technology requirements"
        description="Review the information we need to scope hardware, infrastructure, software, installation, or technical support."
      />
      <section className="content-section" aria-label="Quotation enquiry form">
        <div className="container">
          <h2 className="sr-only">Quotation enquiry form</h2>
          <QuoteRequestForm />
        </div>
      </section>
    </>
  );
}
