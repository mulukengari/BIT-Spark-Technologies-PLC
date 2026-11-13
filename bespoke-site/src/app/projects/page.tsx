import GenericPage from "@/components/GenericPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Demonstration IT Project Portfolio",
  "Review demonstration IT projects covering enterprise networks, cloud workplaces, cybersecurity, data protection, retail infrastructure, and software delivery.",
  "/projects",
  { index: false }
);

export default function Projects(){return <GenericPage robotTarget="projects" eyebrow="Demonstration portfolio" title="How technology creates measurable progress" description="The following are clearly labeled demonstration case studies. Replace them with verified customer outcomes before publication." cards={[
{title:"Regional network modernization",text:"Challenge: fragmented connectivity across sites. Demonstration result: unified network architecture and improved service visibility."},{title:"Cloud workplace transformation",text:"Challenge: distributed collaboration and legacy applications. Demonstration result: standardized secure access and simpler support."},{title:"Enterprise security uplift",text:"Challenge: inconsistent controls across endpoints. Demonstration result: centralized security management and policy visibility."},{title:"Data protection refresh",text:"Challenge: limited recovery confidence. Demonstration result: tiered backup and documented recovery procedures."},{title:"Retail infrastructure rollout",text:"Challenge: rapid multi-site deployment. Demonstration result: repeatable hardware configuration and phased installation."},{title:"Custom operations platform",text:"Challenge: disconnected manual workflows. Demonstration result: connected business application with reporting dashboards."}]}/>}
