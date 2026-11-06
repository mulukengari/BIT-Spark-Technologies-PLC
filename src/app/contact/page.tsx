import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact BIT Spark Technologies PLC in Addis Ababa, Ethiopia for products, quotations, services, tenders, and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-card border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact Us"
            title="Get in Touch"
            description="Reach out for product inquiries, quotations, services, tenders, and partnerships."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold text-navy">BIT Spark Technologies PLC</h3>
                <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
                  Enterprise technology provider serving organizations across Ethiopia.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold text-navy">Office Location</h3>
                <p className="mt-2 text-sm text-foreground/90">
                  Addis Ababa, Ethiopia
                </p>
                <p className="mt-1 text-xs text-foreground/50">
                  Visit our Contact page to send us a message.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold text-navy">How to Reach Us</h3>
                <ul className="mt-3 space-y-3 text-sm text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-electric">&#9993;</span>
                    <p className="text-foreground/80">Use the contact form below</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-electric">&#128247;</span>
                    <p className="text-foreground/80">Submit a Request for Quotation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-electric">&#128172;</span>
                    <p className="text-foreground/80">Tender and procurement inquiries</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
                <SectionHeading
                  eyebrow="Send a Message"
                  title="Contact Form"
                  description="Tell us about your requirements and we will get back to you."
                  align="left"
                />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
