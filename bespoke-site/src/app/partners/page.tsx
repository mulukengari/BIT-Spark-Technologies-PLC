import PartnersOverview from "@/components/PartnersOverview";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Enterprise Technology Partners",
  "Explore the technology domains represented in the BIT Spark Core Partner overview, including networks, cloud, data centers, security, compute, and storage.",
  "/partners"
);

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise technology ecosystem"
        title="Enterprise technology partners"
        description="Explore the connected enterprise technology domains and service targets that support your business."
      />
      <PartnersOverview showIntro />
    </>
  );
}
