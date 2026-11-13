import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import StructuredData from "@/components/StructuredData";
import { servicePageNames } from "@/lib/service-pages";
import { solutionCategories } from "@/lib/solutions";
import { createPageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(servicePageNames).map((slug) => ({ slug }));
}

function getService(slug: string) {
  const solution = solutionCategories.find((item) => item.slug === slug);
  const title = solution?.title || servicePageNames[slug];
  if (!title) return null;

  return {
    solution,
    title,
    description:
      solution?.description ||
      `${title} from BIT Spark Technologies, planned around your organization's requirements, implementation needs, and ongoing support.`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createPageMetadata(
    service.solution?.seoTitle ?? service.title,
    service.description,
    `/services/${slug}`,
    { index: Boolean(service.solution) }
  );
}

export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const service = getService(slug);
  if (!service) notFound();

  const { solution, title, description } = service;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(solution ? { serviceType: solution.services } : {}),
  };

  return <>
    <StructuredData data={serviceSchema} />
    <PageHero
      eyebrow="Service overview"
      title={title}
      description={description}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: title, path: `/services/${slug}` },
      ]}
    />
    <section className="content-section" data-robot-target={`service-detail-${slug}`}>
      <div className="container">
        {solution ? (
          <>
            <article className="content-card solution-detail-overview">
              <span className="kicker">Service overview</span>
              <h2>{solution.seoTitle}</h2>
              <p>{solution.overview}</p>
            </article>
            <div className="solution-detail-columns">
              <section className="content-card">
                <h2>Service capabilities</h2>
                <ul className="solution-detail-list">
                  {solution.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </section>
              <section className="content-card">
                <h2>Planning outcomes</h2>
                <ul className="solution-detail-list">
                  {solution.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </section>
            </div>
          </>
        ) : (
          <div className="content-grid">
            <div className="content-card"><h2>Business challenges</h2><p>Complex environments, limited visibility, growth constraints, security concerns, and inconsistent service delivery.</p></div>
            <div className="content-card"><h2>Our solution</h2><p>We align architecture, implementation, operational support, and governance with measurable business outcomes.</p></div>
            <div className="content-card"><h2>Key benefits</h2><p>Improved reliability, stronger security, predictable costs, better scalability, and simpler technology management.</p></div>
          </div>
        )}
        <div className="solution-detail-cta">
          <Link className="button button-primary" href="/contact">Discuss this solution</Link>
        </div>
      </div>
    </section>
  </>;
}
