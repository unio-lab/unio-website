import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Unio Lab — Spec-Driven Product Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C1F3F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-2px",
            marginBottom: "24px",
          }}
        >
          Unio Lab
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.3,
            marginBottom: "16px",
          }}
        >
          Software engineered from specification.
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.4,
          }}
        >
          Spec-driven product lab. Germany, France, Tunisia.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          unio-lab.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
