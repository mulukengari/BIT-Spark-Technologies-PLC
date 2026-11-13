import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

export const alt =
  "BIT Spark Technologies — Your System, Our Spark. Enterprise IT solutions for modern business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "64px 72px",
          color: "#f8fafc",
          background:
            "linear-gradient(125deg, #041d31 0%, #0b2f4d 62%, #075985 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -250,
            right: -170,
            width: 760,
            height: 760,
            border: "1px solid rgba(129, 216, 255, 0.22)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -170,
            right: -70,
            width: 560,
            height: 560,
            border: "1px solid rgba(129, 216, 255, 0.18)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#d8f3ff",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              flexShrink: 0,
              width: 8,
              height: 42,
              borderRadius: 4,
              background: "#38bdf8",
            }}
          />
          {SITE_NAME.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              maxWidth: 920,
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Your System, Our Spark
          </div>
          <div
            style={{
              color: "#c0ced8",
              fontSize: 28,
              lineHeight: 1.35,
            }}
          >
            Enterprise IT solutions for modern business.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            color: "#a9dff5",
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          INFRASTRUCTURE / CLOUD / NETWORKING / SECURITY / SOFTWARE / SUPPORT
        </div>
      </div>
    ),
    size
  );
}
