import Entrance from "@/components/Entrance";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/lib/seo";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: readonly BreadcrumbItem[];
}) {
  return (
    <section className="page-hero">
      {breadcrumbs && (
        <div className="page-hero-breadcrumbs container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}
      <Entrance className="container">
        <span className="kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </Entrance>
    </section>
  );
}
