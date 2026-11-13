import GenericPage from "@/components/GenericPage";
import { industrySolutions } from "@/lib/industries";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "IT Solutions by Industry",
  "Explore infrastructure, cloud, cybersecurity, networking, and IT support for financial services, government, education, healthcare, telecom, and businesses.",
  "/industries"
);

export default function Industries() {
  return (
    <GenericPage
      robotTarget="industries"
      eyebrow="Industry solutions"
      title="Technology designed around sector realities"
      description="Explore practical infrastructure, security, connectivity, and support shaped around the way your sector operates."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
      ]}
      cards={industrySolutions.map((industry) => ({
        title: industry.title,
        text: industry.summary,
        href: `/industries/${industry.slug}`,
      }))}
    />
  );
}
