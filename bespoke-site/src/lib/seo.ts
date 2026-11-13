import type { Metadata } from "next";

export const SITE_NAME = "BIT Spark Technologies";
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://bitspark-tech.pro.et";
export const SITE_URL = new URL(configuredSiteUrl).origin;
export const SITE_DESCRIPTION =
  "BIT Spark Technologies delivers enterprise IT infrastructure, cloud, networking, cybersecurity, software, hardware, and managed support for organizations.";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type FAQEntry = {
  question: string;
  answer: string;
};

export function getAbsoluteUrl(pathname: string): string {
  return new URL(pathname.replace(/^\/+/, ""), `${SITE_URL}/`).toString();
}

export function createFAQPageStructuredData(items: readonly FAQEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function createBreadcrumbStructuredData(
  items: readonly BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
  options: { index?: boolean } = {}
): Metadata {
  const canonical = getAbsoluteUrl(pathname);
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical },
    ...(options.index === false ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_ET",
      images: [
        {
          url: getAbsoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} enterprise IT solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [getAbsoluteUrl("/opengraph-image")],
    },
  };
}