import Link from "next/link";
import PageHero from "@/components/PageHero";
import { solutionCategories } from "@/lib/solutions";

const names: Record<string,string> = { infrastructure:"IT Infrastructure Solutions",cloud:"Cloud Computing Solutions",storage:"Enterprise Storage Solutions",networking:"Networking Solutions",security:"Cybersecurity Solutions",hardware:"Hardware Supply & Deployment",software:"Software Development",web:"Web Development",mobile:"Mobile Application Development",consulting:"IT Consulting & Technical Support",maintenance:"Installation & Maintenance",integration:"Enterprise System Integration" };

export function generateStaticParams() { return Object.keys(names).map(slug=>({slug})); }
export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const solution = solutionCategories.find((item) => item.slug === slug);
  const name=solution?.title || names[slug]||"Technology Service";
  return <>
    <PageHero eyebrow="Service overview" title={name} description={solution?.description || "A structured, business-led approach to planning, implementing, and supporting the technology capabilities your organization depends on."} />
    <section className="content-section" data-robot-target={`service-detail-${slug}`}>
      <div className="container">
        {solution ? (
          <div className="content-card solution-detail-card">
            <span className="kicker">Capabilities</span>
            <h2>How we can help</h2>
            <ul className="solution-detail-list">
              {solution.services.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </div>
        ) : (
          <div className="content-grid">
            <div className="content-card"><h3>Business challenges</h3><p>Complex environments, limited visibility, growth constraints, security concerns, and inconsistent service delivery.</p></div>
            <div className="content-card"><h3>Our solution</h3><p>We align architecture, implementation, operational support, and governance with measurable business outcomes.</p></div>
            <div className="content-card"><h3>Key benefits</h3><p>Improved reliability, stronger security, predictable costs, better scalability, and simpler technology management.</p></div>
          </div>
        )}
        <div className="solution-detail-cta">
          <Link className="button button-primary" href="/contact">Discuss this solution</Link>
        </div>
      </div>
    </section>
  </>;
}
