import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import StructuredData from "@/components/StructuredData";
import { industrySolutions } from "@/lib/industries";
import { createPageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return industrySolutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industrySolutions.find((item) => item.slug === slug);
  if (!industry) return {};

  return createPageMetadata(
    `${industry.cardTitle} IT Solutions`,
    `${industry.summary} See how BIT Spark Technologies can support ${industry.cardTitle.toLowerCase()} organizations.`,
    `/industries/${slug}`
  );
}

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industrySolutions.find((item) => item.slug === slug);

  if (!industry) notFound();

  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.title} IT Solutions`,
    description: industry.introduction,
    url: `${SITE_URL}/industries/${slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    serviceType: industry.solutions,
  };

  return (
    <>
      <StructuredData data={industrySchema} />
      <PageHero
        eyebrow="Industry solutions"
        title={industry.title}
        description={industry.introduction}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${slug}` },
        ]}
      />
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-card">
              <span className="kicker">What we deliver</span>
              <h2>Solutions for your environment</h2>
              <ul className="solution-detail-list">
                {industry.solutions.map((solution) => (
                  <li key={solution}>{solution}</li>
                ))}
              </ul>
            </div>
            <div className="content-card">
              <span className="kicker">Built around your needs</span>
              <h2>Practical outcomes</h2>
              <ul className="solution-detail-list">
                {industry.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="solution-detail-cta">
            <Link
              className="button button-primary"
              href={`/contact?sector=${encodeURIComponent(industry.title)}`}
            >
              Discuss your sector&apos;s needs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
