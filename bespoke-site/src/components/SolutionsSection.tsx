import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
} from "lucide-react";
import { solutionCategories } from "@/lib/solutions";

export default function SolutionsSection() {
  return (
    <section className="solutions-section section" data-robot-target="solutions">
      <div className="container">
        <div className="solutions-intro">
          <span className="kicker">Our Solutions</span>
          <h2>Technology Solutions That Power Your Business</h2>
          <p>
            From enterprise infrastructure and cloud computing to cybersecurity
            and business automation, BIT Spark Technologies delivers integrated
            technology solutions that help organizations build secure, reliable
            and scalable IT environments.
          </p>
        </div>
        <div className="solutions-grid">
          {solutionCategories.map((category) => {
            return (
              <article
                className={`solution-card solution-${category.visual}`}
                data-robot-target={category.slug}
                data-robot-title={category.title}
                data-robot-tip={category.description}
                key={category.slug}
              >
                <div className="solution-art">
                  <Image
                    className="solution-art-image"
                    src={`/servicesImages/${encodeURIComponent(category.image)}`}
                    alt={`${category.title} enterprise IT solutions`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                </div>
                <div className="solution-card-content">
                  <span className="solution-number">{category.number} / SOLUTION</span>
                  <h3>{category.title}</h3>
                  <p className="solution-description">{category.description}</p>
                  <ul>
                    {category.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                  <Link className="solution-link" href={`/services/${category.slug}`}>
                    Explore {category.title} <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
