import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RobotCompanion from "@/components/RobotCompanion";
import ScrollReveal from "@/components/ScrollReveal";
import StructuredData from "@/components/StructuredData";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  getAbsoluteUrl,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Enterprise IT Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: `${SITE_NAME} | Enterprise IT Solutions`,
    description: SITE_DESCRIPTION,
    url: getAbsoluteUrl("/"),
    siteName: SITE_NAME,
    locale: "en_ET",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Enterprise IT Solutions`,
    description: SITE_DESCRIPTION,
    images: [getAbsoluteUrl("/opengraph-image")],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: getAbsoluteUrl("/BS.png"),
        description: SITE_DESCRIPTION,
        knowsAbout: [
          "IT infrastructure",
          "Cloud computing",
          "Enterprise networking",
          "Cybersecurity",
          "Software and business automation",
          "IT managed services and support",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+251929316976",
          contactType: "customer service",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-ET",
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <StructuredData data={structuredData} />
        <Header />
        <main>{children}</main>
        <Footer />
        <RobotCompanion />
        <ScrollReveal />
      </body>
    </html>
  );
}
