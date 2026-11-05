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
      <section className="bg-lightgray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact Us"
            title="Get in Touch"
            description="Reach out for product inquiries, quotations, services, tenders, and partnerships."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-navy">Company</h3>
                <p className="mt-1 text-sm text-navy/70">BIT Spark Technologies PLC</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">Office Location</h3>
                <p className="mt-1 text-sm text-navy/70">
                  Addis Ababa, Ethiopia
                  <br />
                  <span className="text-navy/50">
                    [Insert confirmed office location / Google Maps link]
                  </span>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">Business Email</h3>
                <p className="mt-1 text-sm text-navy/70">
                  <span className="text-navy/50">[Insert official email]</span>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">Telephone</h3>
                <p className="mt-1 text-sm text-navy/70">
                  <span className="text-navy/50">[Insert official phone number]</span>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">Business Hours</h3>
                <p className="mt-1 text-sm text-navy/70">
                  <span className="text-navy/50">[Insert business hours]</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
