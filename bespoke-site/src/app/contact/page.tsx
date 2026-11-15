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
          <div className="lg:col-span-2 pt-12">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-navy mb-4">Our Office Location</h3>
              <div id="map" className="h-64 w-full rounded-lg overflow-hidden mt-4"></div>
              <p className="mt-4 text-sm text-foreground/60">
                Addis Ababa, Ethiopia
                <br />
                <a href="https://www.google.com/maps/search/?api=1&query=Addis+Ababa,+Ethiopia" target="_blank" rel="noopener"
                  className="text-electric underline">
                  View on Google Maps
                </a>
              </p>
              <script
                async
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7PhR1LlHmWYzZbqbOqJpQ1YjYjYjYjY&callback=initMap"
                defer
              />
              <script>
                function initMap() {
                  const addisAbaba = { lat: 9.03, lng: 38.74 };
                  const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 15,
                    center: addisAbaba,
                  });
                  new google.maps.Marker({
                    position: addisAbaba,
                    map: map,
                    title: "BIT Spark Technologies",
                  });
                }
              </script>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
