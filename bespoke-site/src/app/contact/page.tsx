import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Contact",
  "Contact BIT Spark Technologies about enterprise IT infrastructure, cloud, networking, cybersecurity, software, hardware, and technical support.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Contact BIT Spark Technologies about your IT needs"
        description="Speak with our team about infrastructure, cloud, hardware, software, security, or ongoing technical support."
      />
      <section className="content-section" aria-labelledby="contact-heading">
        <div className="container contact-layout">
          <div>
            <span className="kicker">Get in touch</span>
            <h2 id="contact-heading">How can we help?</h2>
            <p>
              General enquiries:
              <br />
              Telephone: <a href="tel:+251929316976">+251 929 316 976</a>
              <br />
              Business hours: Monday–Friday, 8:30 AM–5:30 PM
            </p>
          </div>
          <div>
            <h2>Send an enquiry</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
