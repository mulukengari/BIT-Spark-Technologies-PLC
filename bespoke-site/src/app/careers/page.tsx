import GenericPage from "@/components/GenericPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Careers",
  "Explore engineering, software delivery, professional services, client support, business operations, and graduate opportunities at BIT Spark Technologies.",
  "/careers",
  { index: false }
);

export default function Careers(){return <GenericPage eyebrow="Careers" title="Build technology with lasting impact" description="We are open to engineers, consultants, project specialists, and customer-focused professionals who enjoy solving complex technology challenges." cards={[
{title:"Technical engineering",text:"Infrastructure, networking, cloud, security, storage, and systems engineering opportunities."},{title:"Software delivery",text:"Web, mobile, integration, architecture, quality assurance, and product engineering roles."},{title:"Professional services",text:"Project delivery, customer engagement, implementation, and technical consultancy roles."},{title:"Client support",text:"Service desk, technical support, lifecycle management, and service operations roles."},{title:"Business operations",text:"Sales operations, procurement, finance, marketing, administration, and people operations."},{title:"Graduate opportunities",text:"A structured sample pathway for emerging technical and commercial talent."}]}/>}
