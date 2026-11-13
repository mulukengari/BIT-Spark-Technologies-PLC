import Link from "next/link";
import PageHero from "./PageHero";
import type { BreadcrumbItem } from "@/lib/seo";

type GenericPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: { title: string; text: string; href?: string }[];
  robotTarget?: string;
  breadcrumbs?: readonly BreadcrumbItem[];
};

export default function GenericPage({
  eyebrow,
  title,
  description,
  cards,
  robotTarget,
  breadcrumbs,
}: GenericPageProps) {
  const target = robotTarget || eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="content-section" data-robot-target={target}>
        <div className="container">
          <div className="content-grid">
            {cards.map((card) => (
              <Link
                href={card.href || "/contact"}
                className="content-card"
                key={card.title}
                data-robot-target={card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                data-robot-tip={card.text}
              >
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
          <div className="generic-page-cta">
            <Link className="button button-primary" href="/contact">
              Contact BIT Spark Technologies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
