import GenericPage from "@/components/GenericPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Enterprise IT Insights",
  "Read practical guidance from BIT Spark Technologies on cloud readiness, resilient networks, cybersecurity, storage, software, and infrastructure planning.",
  "/insights",
  { index: false }
);

export default function Insights(){return <GenericPage eyebrow="Technology insights" title="Practical knowledge for technology decisions" description="Explore guides and perspectives across cloud, networking, cybersecurity, infrastructure, storage, software, and digital operations." cards={[
{title:"Building a practical cloud readiness plan",text:"A focused framework for assessing applications, dependencies, security, costs, and migration priorities."},{title:"Five principles for resilient enterprise networks",text:"Design considerations for segmentation, redundancy, visibility, remote access, and lifecycle management."},{title:"Cybersecurity fundamentals for growing organizations",text:"A practical overview of identity, endpoints, networks, data protection, response, and governance."},{title:"Choosing the right enterprise storage model",text:"How performance, capacity, availability, data protection, and operational maturity shape the decision."},{title:"Modernizing legacy applications",text:"A guide to identifying opportunities for replacement, integration, extension, or incremental refactoring."},{title:"Planning an infrastructure refresh",text:"Questions to resolve before replacing hardware, platforms, licenses, and support arrangements."}]}/>}
