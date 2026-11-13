import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BIT Spark Technologies",
    short_name: "BIT Spark",
    description:
      "Enterprise IT infrastructure, cloud, networking, cybersecurity, software, hardware, and managed support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#08284a",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/BS.png", type: "image/png", purpose: "any" },
    ],
  };
}