import PageHero from "@/components/PageHero";
import SolutionsSection from "@/components/SolutionsSection";
import StructuredData from "@/components/StructuredData";
import { solutionCategories } from "@/lib/solutions";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Enterprise IT Services",
  "Explore BIT Spark Technologies services for data centers, cloud and storage, enterprise networking, cybersecurity, business automation, and managed IT support.",
  "/services"
);

export default function ServicesPage() {
  const serviceList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BIT Spark Technologies enterprise IT services",
    itemListElement: solutionCategories.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: solution.title,
        description: solution.description,
        url: `${SITE_URL}/services/${solution.slug}`,
      },
    })),
  };

  return <>
    <StructuredData data={serviceList} />
    <PageHero
      eyebrow="Our expertise"
      title="Technology services for every stage of growth"
      description="From strategy and procurement to implementation and ongoing technical support, we bring the technical disciplines together around your business objectives."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]}
    />
    <SolutionsSection />
  </>;
}
