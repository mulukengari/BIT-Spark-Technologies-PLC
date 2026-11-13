import GenericPage from "@/components/GenericPage";
import StructuredData from "@/components/StructuredData";
import { faqItems } from "@/lib/faq";
import { createFAQPageStructuredData, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "IT Services FAQs",
  "Find answers about BIT Spark Technologies services, project pricing, existing systems, ongoing IT support, and sample catalog availability.",
  "/faq"
);

export default function FAQ() {
  return (
    <>
      <StructuredData data={createFAQPageStructuredData(faqItems)} />
      <GenericPage
        eyebrow="Frequently asked questions"
        title="Answers to common IT services questions"
        description="Understand BIT Spark Technologies services, project pricing, working with existing systems, and ongoing technical support."
        cards={faqItems.map(({ question, answer }) => ({
          title: question,
          text: answer,
          href: "/contact",
        }))}
      />
    </>
  );
}
