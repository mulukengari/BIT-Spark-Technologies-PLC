import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bitspark.example"),
  title: {
    default: "BIT Spark Technologies PLC — Powering Business Through Technology",
    template: "%s | BIT Spark Technologies",
  },
  description:
    "BIT Spark Technologies PLC delivers enterprise IT infrastructure, software licensing, technology products, and professional technical services for organizations across Ethiopia.",
  keywords: [
    "BIT Spark",
    "BIT Spark Technologies",
    "enterprise IT Ethiopia",
    "software licensing Ethiopia",
    "IT infrastructure Addis Ababa",
    "technology solutions",
  ],
  openGraph: {
    title: "BIT Spark Technologies PLC",
    description:
      "Powering Business Through Technology. Enterprise IT products, software licensing, and professional technical services.",
    type: "website",
    locale: "en_US",
    siteName: "BIT Spark Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIT Spark Technologies PLC",
    description: "Powering Business Through Technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

