import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RobotCompanion from "@/components/RobotCompanion";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://bitspark-tech.pro.et"),
  title: { default: "BIT Spark Technologies | Enterprise IT Solutions", template: "%s | BIT Spark Technologies" },
  description: "Secure infrastructure, cloud, networking, cybersecurity, hardware, software, and technical services for modern organizations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RobotCompanion />
        <ScrollReveal />
      </body>
    </html>
  );
}
