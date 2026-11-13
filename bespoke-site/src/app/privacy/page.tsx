import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Review how the BIT Spark Technologies website handles information entered into its demo forms, interactive guide, and direct enquiries.",
  "/privacy"
);

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Your information"
        title="Privacy policy"
        description="We respect your privacy and aim to be clear about how information is handled when you visit the BIT Spark Technologies website."
      />
      <section className="content-section">
        <div className="container content-grid">
          <article className="content-card">
            <h2>Information you provide</h2>
            <p>
              The contact and quotation forms on this website currently run in
              your browser only. They do not send or save the information you
              enter. If you contact BIT Spark by phone or another direct
              channel, we use the details you choose to share to respond to
              your enquiry.
            </p>
          </article>
          <article className="content-card">
            <h2>Interactive website guide</h2>
            <p>
              If you use the on-page guide, its chat messages and preferences
              are kept in your browser&apos;s session storage so the guide can
              work during your visit. This information is not sent to us by
              the guide and is normally cleared when you close the browser tab.
              Please do not enter sensitive or confidential information.
            </p>
          </article>
          <article className="content-card">
            <h2>How information is used</h2>
            <p>
              Information you share with us directly is used to handle your
              request, communicate with you, and provide the support you ask
              for. We do not sell personal information. Website hosting
              providers may process technical request data to deliver and
              protect the site.
            </p>
          </article>
          <article className="content-card">
            <h2>Changes and questions</h2>
            <p>
              We will update this notice if the website&apos;s forms or
              information practices change. For privacy questions, contact
              BIT Spark Technologies at +251 929 316 976.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
