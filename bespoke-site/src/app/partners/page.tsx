import PartnersOverview from "@/components/PartnersOverview";
import PageHero from "@/components/PageHero";

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise technology ecosystem"
        title="BITSpark Core Partner"
        description="Explore the connected enterprise technology domains and service targets that support your business."
      />
      <PartnersOverview />
    </>
  );
}
